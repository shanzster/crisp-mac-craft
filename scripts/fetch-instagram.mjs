#!/usr/bin/env node
/**
 * Fetches follower counts + recent posts for each configured Instagram
 * Business/Creator account via the Instagram Graph API and writes the result
 * to public/socials.json (consumed by the /socials page).
 *
 * The access token lives ONLY here / in the config file — it is never shipped
 * to the browser. Only public data (follower counts, post image URLs, likes)
 * ends up in socials.json.
 *
 * Usage:  npm run fetch:ig
 * Config: scripts/instagram.config.json  (copy from the .example.json)
 * Docs:   scripts/README-instagram.md
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const CONFIG_PATH = process.env.IG_CONFIG || resolve(__dirname, "instagram.config.json");
const OUT_PATH = resolve(ROOT, "public/socials.json");
const POST_LIMIT = Number(process.env.IG_POST_LIMIT || 9);

function loadConfig() {
  if (!existsSync(CONFIG_PATH)) {
    console.error(`✗ Config not found: ${CONFIG_PATH}`);
    console.error(`  → Copy scripts/instagram.config.example.json to scripts/instagram.config.json and fill it in.`);
    console.error(`  → See scripts/README-instagram.md for how to get the IG user IDs + token.`);
    process.exit(1);
  }
  try {
    return JSON.parse(readFileSync(CONFIG_PATH, "utf8"));
  } catch (e) {
    console.error(`✗ Could not parse ${CONFIG_PATH}: ${e.message}`);
    process.exit(1);
  }
}

async function graphGet(version, path, params) {
  const url = new URL(`https://graph.facebook.com/${version}/${path}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url);
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.error) {
    throw new Error(json.error?.message || `HTTP ${res.status}`);
  }
  return json;
}

async function fetchAccount(acct, cfg) {
  const version = cfg.graphVersion || "v21.0";
  const token = acct.accessToken || cfg.accessToken;
  if (!token) throw new Error("missing accessToken (set cfg.accessToken or acct.accessToken)");
  if (!acct.igUserId) throw new Error("missing igUserId");

  const profile = await graphGet(version, acct.igUserId, {
    fields: "username,name,biography,followers_count,follows_count,media_count,profile_picture_url",
    access_token: token,
  });

  const media = await graphGet(version, `${acct.igUserId}/media`, {
    fields: "id,caption,media_type,media_url,thumbnail_url,permalink,like_count,comments_count,timestamp",
    limit: String(POST_LIMIT),
    access_token: token,
  });

  const posts = (media.data || [])
    .map((m) => ({
      id: m.id,
      image: m.media_type === "VIDEO" ? m.thumbnail_url || m.media_url : m.media_url,
      permalink: m.permalink,
      type: m.media_type,
      likes: m.like_count ?? null,
      comments: m.comments_count ?? null,
      caption: m.caption ? m.caption.slice(0, 160) : "",
      timestamp: m.timestamp || null,
    }))
    .filter((p) => p.image && p.permalink);

  return {
    id: acct.id,
    username: profile.username || null,
    name: profile.name || null,
    biography: profile.biography || null,
    followers: profile.followers_count ?? null,
    following: profile.follows_count ?? null,
    mediaCount: profile.media_count ?? null,
    avatar: profile.profile_picture_url || null,
    posts,
  };
}

async function main() {
  const cfg = loadConfig();
  const accounts = (cfg.accounts || []).filter((a) => a.igUserId && a.id);

  if (accounts.length === 0) {
    console.error("✗ No accounts with an igUserId in the config. Nothing to fetch.");
    process.exit(1);
  }

  console.log(`Fetching ${accounts.length} Instagram account(s)…\n`);
  const results = [];
  for (const acct of accounts) {
    process.stdout.write(`• ${acct.id} … `);
    try {
      const data = await fetchAccount(acct, cfg);
      results.push(data);
      console.log(`✓ ${data.followers ?? "?"} followers · ${data.posts.length} posts`);
    } catch (e) {
      console.log(`✗ ${e.message}`);
    }
  }

  if (results.length === 0) {
    console.error("\n✗ Every account failed — not overwriting socials.json.");
    process.exit(1);
  }

  mkdirSync(dirname(OUT_PATH), { recursive: true });
  const payload = { generatedAt: new Date().toISOString(), accounts: results };
  writeFileSync(OUT_PATH, JSON.stringify(payload, null, 2));
  console.log(`\n✓ Wrote ${results.length} account(s) → public/socials.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
