# Shanzster — Portfolio Requirements
**Status:** In Progress → Nearly Complete  
**Goal:** Full-blown, final social media & creative portfolio  
**Theme:** macOS-inspired, interactive, personality-driven

---

## ✅ Built

| Section | Status | Notes |
|---|---|---|
| Hero | ✅ Done | Folder opens on hover, papers fan out with roles, marquee, stats strip |
| NavBar → Dock | ✅ Done | macOS dock at bottom, magnification on hover, Clients link added |
| About | ✅ Done | 2-col: editorial left + photo right, stats, clients, skills |
| My Toolkit | ✅ Done | Icon row + 2-col description cards per tool |
| Selected Work | ✅ Done | Big folder, cards scatter on hover, click → detail page |
| Work Detail Pages | ✅ Done | Full case study: overview, challenge, approach, workflow, deliverables, result |
| Services | ✅ Done | 6 macOS windows, 3×2 grid, all open |
| Process | ✅ Done | 5-step macOS windows: Discovery → Strategy → Creation → Delivery → Review |
| Testimonials | ✅ Built | Placeholder — needs real client quotes |
| Social Feed | ✅ Built | Placeholder grid — needs real screenshots |
| FAQ | ✅ Done | 6 questions answered, macOS window style |
| Contact | ✅ Done | Real layout, placeholder email/socials — needs your real info |
| Footer | ✅ Done | Updated to Shanzster · Subic Bay, Philippines |
| Clients Page | ✅ Done | `/clients` route with all 4 clients, case study links |
| Meta Tags | ✅ Done | Title, description, OG tags updated to Shanzster |

---

## 🔴 Needs Your Real Content (Can't be done without you)

### Priority 1 — Makes it launchable
- [ ] **Your real email address** — replace `your@email.com` in Contact section
- [ ] **Your Instagram handle** — replace `@yourhandle` in Contact socials
- [ ] **Your Facebook page/profile** — replace placeholder in Contact socials

### Priority 2 — Most important for credibility
- [ ] **Real work screenshots** — replace placeholder colors in:
  - Work detail pages (each `/work/$id` has a color block)
  - Toolkit work grids (hover popup on each tool icon)
  - Social Feed section (6 placeholder squares)
- [ ] **Real client testimonials** — replace 3 placeholder quotes in Testimonials section
  - Even informal DMs or messages count
  - Need: quote, client name, brand name, platform

### Priority 3 — Polish
- [ ] **Tool logos** — replace placeholder SVG text icons in Toolkit with real logos
- [ ] **OG image** — create a 1200×630 image for link previews when shared
- [ ] **Profile photo** — already in `/src/image_reference/profile.png` ✅

---

## 📍 Where to Find Each Placeholder

| What | Where in code |
|---|---|
| Email address | `index.tsx` → Contact section, `Field label="To"` and `href="mailto:"` |
| Instagram handle | `index.tsx` → Contact → `socials.url` window |
| Facebook link | `index.tsx` → Contact → `socials.url` window |
| Testimonial quotes | `index.tsx` → `Testimonials()` function → `testimonials` array |
| Social feed screenshots | `index.tsx` → `SocialFeed()` → replace placeholder divs with `<img>` tags |
| Work screenshots | `work/$id.tsx` → replace the color `<div>` with `<img>` |
| Tool logos | `index.tsx` → `TOOLS` array → replace each `icon:` SVG |
| Footer tagline | `index.tsx` → `Footer()` function |

---

## 🎯 Remaining Nice-to-Haves

| Feature | Priority | Notes |
|---|---|---|
| Intro / loading animation | Low | macOS boot screen or folder animation |
| Real contact form | Medium | Currently mailto link — a form (Formspree/Resend) would convert better |
| Live social embed | Low | Embed actual Instagram posts instead of screenshots |

---

*Last updated: May 2026*
