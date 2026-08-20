# Live Instagram data (followers + recent posts)

The `/socials` page reads `public/socials.json`. That file is produced by
`scripts/fetch-instagram.mjs`, which pulls **live** data from the Instagram
Graph API for each account you admin.

- Your access token lives only in `scripts/instagram.config.json` (and in the
  fetch script). It is **never** shipped to the browser.
- Only public data (follower counts, post images, permalinks, likes) is written
  to `public/socials.json`, which the site serves.

## One-time setup

You need an Instagram **Business or Creator** account (free to switch) linked to
a Facebook Page, plus a Facebook Developer app.

1. **Convert each IG account** to Business/Creator and link it to a Facebook Page
   (Instagram app → Settings → Account type).
2. **Create a Facebook app**: https://developers.facebook.com/apps → Create app →
   "Business". Add the **Instagram Graph API** product.
3. **Get a token** in the Graph API Explorer
   (https://developers.facebook.com/tools/explorer):
   - Select your app, then "Get User Access Token".
   - Grant scopes: `instagram_basic`, `pages_show_list`,
     `pages_read_engagement`, `business_management`.
   - Copy the token.
4. **Exchange for a long-lived token** (~60 days) so it doesn't expire daily:
   ```
   curl "https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=APP_ID&client_secret=APP_SECRET&fb_exchange_token=SHORT_TOKEN"
   ```
5. **Find each Instagram user id**:
   ```
   # list your pages
   curl "https://graph.facebook.com/v21.0/me/accounts?access_token=LONG_TOKEN"
   # for each page id, get its linked IG account id
   curl "https://graph.facebook.com/v21.0/PAGE_ID?fields=instagram_business_account&access_token=LONG_TOKEN"
   ```
   The `instagram_business_account.id` is the `igUserId`.

## Configure

```bash
cp scripts/instagram.config.example.json scripts/instagram.config.json
```

Fill in `accessToken` (the long-lived token) and each account's `igUserId`.
Leave an account's `igUserId` blank to skip it. Keep this file private — it
holds your token. (It is git-ignored.)

## Run

```bash
npm run fetch:ig
```

This writes `public/socials.json`. Reload `/socials` to see live data.

## Keep it fresh automatically

The long-lived token lasts ~60 days; refresh it before then (repeat step 4, or
add a refresh step). To auto-update the numbers, run `npm run fetch:ig` on a
schedule — e.g. a local `cron`, a CI cron job, or a scheduled deploy hook on
your host — so you never update anything by hand.

> Note: Instagram CDN image URLs expire after a while. Re-running the fetch
> refreshes them. If a thumbnail 404s, just run `npm run fetch:ig` again.
