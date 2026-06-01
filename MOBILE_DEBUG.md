# Mobile Detection & Production Bug Tracker

## Overall Status: 🟡 AWAITING DEPLOY VERIFICATION

---

## Problem 1 (CRITICAL): 404:NOT_FOUND in production
**Symptom:** Site shows `404: NOT_FOUND` / `Code: NOT_FOUND` on Vercel

**Root cause (CONFIRMED via audit):**
The `nitro` plugin in `vite.config.ts` is REQUIRED — it generates the `.vercel/output` folder that Vercel needs to serve the app. Without it, `vite build` runs but produces no Vercel-compatible output, so Vercel has nothing to serve → 404.

The plugin was incorrectly removed in commit `522813e` ("ok na daw").

Additionally, `nitro` was listed as a runtime `dependency` instead of `devDependency`. This caused npm to potentially hoist a conflicting version alongside TanStack Start's internal Nitro.

**Fixes applied:**
1. Restored `nitro({ preset: "vercel" })` plugin in `vite.config.ts`
2. Moved `"nitro"` from `dependencies` → `devDependencies` in `package.json`

**Status: ✅ FIXED — needs deploy to verify**

---

## Problem 2: `virtual:tanstack-start-client-entry` fetch error
**Symptom:** `Failed to fetch dynamically imported module: .../@id/virtual:tanstack-start-client-entry`

**Root cause:** This was a symptom of Problem 1 — when the build output is broken, the SSR server tries to import virtual modules that were never properly bundled.

**Status: ✅ Should be resolved by Problem 1 fix**

---

## Problem 3: Mobile detection returning `false` in prod
**Symptom:** Debug chip shows all `false` on phone in production

**Root cause:** Two issues:
1. Client JS never loaded (Problem 1) → `useEffect` never ran → everything stayed at SSR default `false`
2. `HeroFolder.tsx` used `isCompactDevice` directly in JSX without `useIsClient` guard

**Fixes applied:**
- `HeroFolder.tsx`: Added `useIsClient`, derived `isMobile = isClient && isCompactDevice`, replaced all JSX uses
- All 4 files: Expanded UA regex to catch `CriOS`, `FxiOS`, `OPiOS`, `EdgA`, `SamsungBrowser`

**Status: ✅ Code fixed — will only be verifiable once Problem 1 is resolved**

---

## Files changed in this session
| File | Change |
|------|--------|
| `vite.config.ts` | Restored `nitro({ preset: "vercel" })` plugin |
| `package.json` | Moved `nitro` from `dependencies` → `devDependencies` |
| `src/components/HeroFolder.tsx` | Added `useIsClient` guard, expanded UA regex |
| `src/components/NavBar.tsx` | Expanded UA regex |
| `src/components/WorkFolder.tsx` | Expanded UA regex |
| `src/routes/__root.tsx` | Expanded UA regex |

---

## Debug chip (HeroFolder top-right corner)
After deploying, open on phone and check:
- `compact` → should be `true`
- `touchPoints` → should be > 0
- `coarse` → should be `true`
- `ua-mobile` → depends on browser

If all still `false` after this deploy → JS still not loading, check Vercel build logs.

---

## Next steps
1. Run `npm install` (to update lockfile with nitro moved to devDeps)
2. Deploy to Vercel
3. Check site loads (no 404)
4. Open on phone, check debug chip
5. Report back
