# Mobile Detection & Production Bug Tracker

## Overall Status: 🟡 IN PROGRESS

---

## Problem 1 (CRITICAL): JS bundle not loading in production
**Error:** `Failed to fetch dynamically imported module: .../@id/virtual:tanstack-start-client-entry`

**Root cause (CONFIRMED):**
`vite.config.ts` was adding `nitro({ preset: "vercel" })` as an extra plugin. But `@lovable.dev/vite-tanstack-config` already includes `tanstackStart()` which has Nitro built in. Two Nitro instances conflict — virtual modules like `virtual:tanstack-start-client-entry` get registered incorrectly and fail at runtime in production.

Because the client JS never loads, `useEffect` never runs, `useIsClient` never flips to `true`, and ALL mobile detection stays at its SSR default (`false`). This is why the debug chip shows all false on your phone.

**Fix applied:** Removed `nitro({ preset: "vercel" })` and its import from `vite.config.ts`.

**Status: ✅ FIXED — needs deploy to verify**

---

## Problem 2 (secondary): Mobile detection returning false after hydration
**Root cause (CONFIRMED):**
`HeroFolder.tsx` used `isCompactDevice` directly in JSX without the `useIsClient` guard. On SSR, server renders with `isCompactDevice = false`. Client hydrates but React sees HTML already matches server output and doesn't re-render — stuck as desktop.

**Fix applied:**
- Added `useIsClient` import to `HeroFolder.tsx`
- Derived `const isMobile = isClient && isCompactDevice`
- Replaced all JSX uses of `isCompactDevice` with `isMobile`
- Expanded UA regex in all 4 files to catch: `CriOS`, `FxiOS`, `OPiOS`, `EdgA`, `SamsungBrowser`

**Files changed:**
- `src/components/HeroFolder.tsx` — main fix
- `src/components/NavBar.tsx` — UA regex
- `src/components/WorkFolder.tsx` — UA regex (already had `isClient` guard)
- `src/routes/__root.tsx` — UA regex

**Status: ✅ FIXED — will only be verifiable once Problem 1 is resolved**

---

## Debug chip (HeroFolder top-right corner)
When you open the site on your phone, the chip shows:
- `compact` — should be `true` on mobile
- `width` — your phone's viewport width in px
- `narrow<=767` — is viewport under 767px?
- `ua-mobile` — did your browser UA match the regex?
- `touchPoints` — how many touch points your browser reports
- `coarse` — does your browser report a coarse pointer?

**If ALL are false/0 on phone → Problem 1 (JS not loading at all)**
**If touchPoints > 0 but compact is still false → Problem 2 code bug**

---

## Next steps
1. Deploy to Vercel
2. Open on phone, check debug chip
3. Report back what values it shows
