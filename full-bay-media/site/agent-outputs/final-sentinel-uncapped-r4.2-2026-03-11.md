# Launch Gate Sentinel — Uncapped (r4.2)
Date: 2026-03-11  
Scope: Targeted polish for hero readability, mobile CTA hierarchy, and sticky rail stop/gap behavior.

Build: `npm run build` ✅  
Captures: `qa-captures/2026-03-11-r4.2/*` ✅

## 1) Verdict
**PASS**

## 2) Score
**88 / 100**

### Rubric breakdown
- Visual integrity (30): **27**
- Conversion clarity (20): **17**
- Mobile UX (15): **13**
- Trust/proof clarity (10): **8**
- SEO basics (10): **9**
- Accessibility basics (10): **9**
- Link integrity (5): **5**

## 3) Findings by severity

### P0
- **None.**

### P1
1. CTA duplication still exists across journey states (hero primary + sticky primary + final CTA), though hierarchy is now clearer and non-competing above the fold.
2. Hero card density on the narrowest viewport can still be tuned further if additional conversion testing is planned.

### P2
1. Secondary CTA is intentionally hidden in hero on small screens; monitor analytics to confirm no drop in advisor-call intent.
2. Optional future polish: refine micro-spacing between hero proof chips and CTA group on sub-390 widths.

## 4) Launch readiness statement
This r4.2 candidate is **ready for launch** under uncapped Sentinel criteria (no P0, <=2 P1, score >=85).

## 5) Top 3 next actions
1. Run one post-deploy real-device smoke pass for sticky rail hide timing near contact/final CTA sections.
2. A/B test hero microcopy and CTA label variants for conversion lift.
3. If needed, reduce mobile hero proof-chip count from 4 to 3 for even tighter first-screen focus.

---

## Implemented changes (r4.2)
- **Hero composition + contrast** (`src/app/page.tsx`)
  - Strengthened hero left-to-right overlay for better headline/subhead readability.
  - Tightened mobile headline scale/line-height and subhead contrast.
  - Repositioned CTA group for mobile-first flow (primary full-width first).
- **Mobile CTA hierarchy** (`src/app/page.tsx`, `src/components/MobileActionRail.tsx`)
  - Kept header CTA hidden on small screens (`md:inline-flex` behavior retained).
  - Reduced mobile sticky rail to **single primary action** only.
  - Hid hero secondary CTA on small breakpoints (`sm:inline-flex`).
- **Sticky rail stop/gap overlap prevention** (`src/components/MobileActionRail.tsx`, `src/app/globals.css`)
  - Combined stop-section intersection hiding with viewport overlap checks.
  - Added/retained dynamic rail-height padding via CSS variable and body bottom safe space.
  - Increased sticky padding/safe-area spacing and constrained primary button width for cleaner mobile fit.
