# Client Changes — New Roster & Migration Plan

**Written:** 2026-08-07
**Status:** ✅ **Implemented** (2026-08-07) — all code changes below are live and the build passes. Remaining work is assets-only (see "Still needed from you" at the bottom).

---

## 1. The new client roster (7 clients)

| # | Client | Type | My role |
|---|--------|------|---------|
| 1 | **Oaklynwear** | Fashion store | **Full-stack** — Google Ads, Meta Ads, Social Media Manager, Branding, Account Management |
| 2 | **Roselyn Atelier** | Fashion store | **Full-stack** — Google Ads, Meta Ads, Social Media Manager, Branding, Account Management |
| 3 | **Lirenne Wear** | Fashion store | **Full-stack** — Google Ads, Meta Ads, Social Media Manager, Branding, Account Management |
| 4 | **Bella Monza** | Fashion store | **Full-stack** — Google Ads, Meta Ads, Social Media Manager, Branding, Account Management |
| 5 | **The Snappy Nomad** | Personal business — travel camera | **Branding Strategy** — brand identity, strategy, positioning, launch planning |
| 6 | **Fast Snaking Services** | Local service | Social media build & management (Facebook presence, lead generation) |
| 7 | **Masinloc Tourism Office** | Government / tourism | **Creative Strategist** |

### Removed from the portfolio
| Client | Currently appears in |
|--------|---------------------|
| ❌ Steal & Style | work-data, index (folders, about, sidebars), clients page, testimonials, hero copy, public assets |
| ❌ PSG Hits | work-data, index (folders, about, sidebars), testimonials, public assets |
| ❌ Junz Restaurant | work-data, index (folders, about, sidebars), public assets |

---

## 2. Positioning shift this unlocks

The old roster read as "local Filipino small businesses." The new one reads as **"fashion e-commerce growth specialist"** — 4 fashion stores (including US/UK-based brands) where I run *everything*: paid (Google + Meta), organic, branding, and account management.

**Messaging updates that follow from this:**
- **Hero/About copy** should lead with fashion e-commerce: *"I run growth for fashion brands — ads, content, branding, everything."*
- **Google Ads is a new capability** — it currently appears **nowhere** on the site. It must be added to: the Toolkit section, the skills list in About, the Services cards (new or expanded service), and the marquee ticker.
- The one-liner "6+ brands managed" stats stay accurate (7 clients now) — verify all stat blocks say the same number.

---

## 3. Current code state (audited)

Good news: `src/routes/clients.tsx` is **already partially migrated** — it has Oaklynwear, Lirenne Wear, Roselyn Atelier, Masinloc, and Snappy Nomad. The rest of the site still shows the old roster.

| Client | clients.tsx | work-data.ts (case study) | index.tsx (home) | Testimonial | Public assets folder |
|--------|:---:|:---:|:---:|:---:|:---:|
| Oaklynwear | ✅ has entry | ❌ missing | ❌ missing | ❌ none | ❌ none |
| Roselyn Atelier | ✅ has entry | ❌ missing | ❌ missing | ❌ none | ❌ none |
| Lirenne Wear | ✅ has entry | ❌ missing | ❌ missing | ❌ none | ❌ none |
| Bella Monza | ❌ missing | ❌ missing | ❌ missing | ❌ none | ❌ none |
| The Snappy Nomad | ✅ has entry | ✅ `snappy-nomad` | ✅ (as "coming soon") | ❌ none | ❌ none |
| Fast Snaking Services | ❌ missing | ✅ `fast-snaking` | ✅ | ✅ Chesky | ✅ `FastToiletSnaking/` |
| Masinloc Tourism | ✅ has entry | ✅ `masinloc-tourism` | ✅ | ✅ Marlon Elago | ✅ `MasinlocTourism/` |
| ~~Steal & Style~~ | ⚠️ remove | ⚠️ remove `steal-and-style` | ⚠️ remove | ⚠️ Stacy Wong — remove | ⚠️ `StealandStyle/` remove |
| ~~PSG Hits~~ | — | ⚠️ remove `psg-hits` | ⚠️ remove | ⚠️ Mahattir — remove | ⚠️ `PSGHits/` remove |
| ~~Junz Restaurant~~ | — | ⚠️ remove `junz-restaurant` | ⚠️ remove | — | ⚠️ `JunzRestaurant/` remove |

---

## 4. File-by-file change map

### `src/lib/work-data.ts` — case studies (biggest job)
- ➕ Add 4 new `WorkItem` entries: `oaklynwear`, `roselyn-atelier`, `lirenne-wear`, `bella-monza` — each covering the full-stack role (Google Ads, Meta Ads, SMM, branding, management). The `WorkItem` type already supports everything needed (analytics, before/after, gallery, etc.).
- ✏️ Update `snappy-nomad` to reflect the travel-camera personal business + branding-strategy role (it currently reads as generic "pre-launch travel brand").
- ✏️ Update `masinloc-tourism` title/role to **Creative Strategist**.
- ➖ Remove `steal-and-style`, `psg-hits`, `junz-restaurant`.

### `src/routes/index.tsx` — home page (many touchpoints)
- **`WORK_FOLDERS`** (4 folders of items): replace old client items with the new roster; the fashion 4 dominate "Social Media Management" and "Campaigns & Ads"; add Google Ads items to Campaigns.
- **About → Clients grid** (6 tiles): new roster (7 clients — adjust grid or pick top 6).
- **Work section → right sidebar "clients" + "recent" lists**: new roster + new recent items.
- **Toolkit (`TOOLS`)**: ➕ add **Google Ads** entry (icon, description, used-for list).
- **About → skills**: add "Google Ads" under Social & Ads.
- **Services**: add/expand a service for **Google Ads Management** (currently only "Meta Ads Management" exists) — or rename to "Paid Ads Management (Meta + Google)".
- **Marquee ticker**: add "Google Ads", "Fashion E-commerce".
- **Testimonials**: remove Stacy Wong (Steal & Style) and Mahattir (PSG Hits). → **Need replacements** (see Open Questions).
- **Hero/About copy**: reposition toward fashion e-commerce (see §2).

### `src/routes/clients.tsx`
- ➕ Add **Bella Monza** and **Fast Snaking Services** entries.
- ✏️ Update role text on the fashion stores to the full-stack scope (current copy says only "social media presence" — undersells it).
- ✏️ Snappy Nomad → travel camera personal business, branding strategy.
- ✏️ Masinloc → Creative Strategist.
- ➖ Remove Steal & Style.

### `src/components/HeroFolder.tsx`
- ✏️ Service papers copy mentions Steal & Style / Masinloc examples — update examples to the new roster; mention Google Ads in the Campaign Strategy paper.

### Other routes referencing old clients
- `src/routes/gallery.tsx`, `ads.tsx`, `graphics.tsx`, `videos.tsx`, `calendars.tsx`, `work/$id.tsx` — grep confirmed they reference old client names/assets; sweep and update each.

### `public/` assets
- ➕ Need new folders: `Oaklynwear/`, `RoselynAtelier/`, `LirenneWear/`, `BellaMonza/`, `SnappyNomad/` — **waiting on assets from you** (logos, post samples, ad creatives, before/after shots, analytics screenshots).
- ➖ Delete after migration: `StealandStyle/`, `PSGHits/`, `JunzRestaurant/`.
- ✏️ `LatestPosts/` currently holds old-client posts — replace with new-client posts.

---

## 5. Open questions (need your input before I build)

1. **Testimonials** — removing Steal & Style and PSG Hits leaves only 2 (Masinloc, Fast Snaking). Do you have quotes from any of the fashion stores or Snappy Nomad? Even a short DM screenshot works.
2. **Results/numbers per client** — for the 4 fashion stores, any metrics I can show? (ROAS, follower growth, revenue, CTR — even ranges). "Full-stack" + numbers is a killer combo.
3. **Assets** — logos + 3–6 sample posts/creatives per new client so the case studies and Latest Work grid aren't empty.
4. **Locations/platforms** — clients.tsx says Oaklynwear is US-based and Roselyn Atelier UK-based. Confirm, and tell me where Lirenne Wear and Bella Monza are based + which platforms each runs on (IG/TikTok/FB?).
5. **Fast Snaking folder name** — the asset folder is `FastToiletSnaking/`; keep or rename to `FastSnakingServices/`?

---

## 6. What was implemented (2026-08-07)

- ✅ `work-data.ts` — rebuilt: 4 new fashion case studies (`oaklynwear`, `roselyn-atelier`, `lirenne-wear`, `bella-monza`), Masinloc updated to **Creative Strategist** (Joiners Program featured), Snappy Nomad updated to **travel camera / branding strategy**, Fast Snaking kept; Steal & Style, PSG Hits, Junz removed.
- ✅ `index.tsx` — WORK_FOLDERS rebuilt around the new roster; Google Ads added to Toolkit, skills, marquee, and Campaigns folder; "Meta Ads Management" service expanded to **Paid Ads Management (Meta + Google)**; About clients grid + Work sidebars show all 7; stats updated (7 managed / 5+ built); testimonials from removed clients deleted (grid now 2-col); hero/about/meta copy repositioned to fashion e-commerce full-stack.
- ✅ `clients.tsx` — Steal & Style removed; Bella Monza + Fast Snaking added; fashion roles upgraded to full-stack (Google Ads, Meta Ads, SMM, Brand Identity, Account Management); Masinloc → Creative Strategist; Snappy Nomad → travel camera branding; stats 7 clients / 5 platforms.
- ✅ `HeroFolder.tsx` — service paper stories now reference the fashion roster and Meta + Google Ads.
- ✅ `about.tsx` / `AboutScene.tsx` — copy + stats aligned; freelance history mentions US/UK fashion e-commerce.
- ✅ `SelectingRoles.tsx` — added "paid ads manager" to the hero role rotator.
- ✅ Sweep: `gallery.tsx`, `graphics.tsx`, `ads.tsx`, `videos.tsx`, `calendars.tsx` — old-client entries with real images removed; placeholder tiles reassigned to the new roster; `work/$id.tsx` PSG pdf label genericized; `junz-restaurant` removed from `LOCKED_IDS`.
- ✅ Final grep: zero `Steal|PSG|Junz` references left in `src/`. Production build passes.

## 7. Still needed from you (assets & facts)

1. **Images** — the 4 fashion case studies + Snappy Nomad have no logos/graphics yet; gallery/ads tiles for them show "add graphic" placeholders. Drop assets into `public/Oaklynwear/`, `public/RoselynAtelier/`, `public/LirenneWear/`, `public/BellaMonza/`, `public/SnappyNomad/` and I'll wire them in.
2. **⚠️ `LatestPosts/` grid on the home page still shows old-client posts** (PSG brand kit, Steal & Style covers). Replace with 6 recent posts from the new roster.
3. **Metrics** — fashion case studies currently state scope honestly but have no numbers (ROAS, growth, CTR). Send real figures and I'll add analytics blocks.
4. **Testimonials** — only 2 remain (Masinloc, Fast Snaking). Quotes from any fashion client would restore the 4-up grid.
5. **Links/handles** — Bella Monza's real IG handle + link, Snappy Nomad handle; confirm Bella Monza's base country.
6. **Old asset folders** — `public/StealandStyle/`, `public/PSGHits/`, `public/JunzRestaurant/` are now unreferenced (except LatestPosts copies); say the word and I'll delete them.
