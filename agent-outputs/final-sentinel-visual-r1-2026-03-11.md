# Sentinel Launch Gate — AutoTrek Visual Refresh R1
**Date:** 2026-03-11  
**Scope:** `full-bay-media/site/qa-captures/visual-refresh-r1/*`, `autotrek-desktop.png`, `autotrek-mobile.png`, current build check (`next build`), lint/e2e sanity

## 1) Verdict
## **FAIL**

## 2) Score
## **72 / 100**

### Score breakdown (uncapped rubric)
- Visual integrity: **20/30**
- Conversion clarity: **13/20**
- Mobile UX: **9/15**
- Trust/proof clarity: **8/10**
- SEO basics: **8/10**
- Accessibility basics: **9/10**
- Link integrity: **5/5**

**Final normalized total: 72/100**

> Gate rule failure reason: score < 85 and >2 P1 issues.

---

## 3) Findings by severity

### P0 (launch blockers)
- **None confirmed from website UI itself.**
  - Note: red “1 Issue” bubble seen in some mobile captures appears to be external tooling/browser overlay, not site UI.

### P1 (major launch-risk issues)
1. **CTA hierarchy is inconsistent across breakpoints.**  
   Header “Book Inspection” and hero CTAs shift in size/weight/placement across captures, creating mixed primary-action signals.
2. **Mobile header-to-hero collision at narrow widths.**  
   In mobile captures, header CTA and hero panel spacing are too tight; visual collision/clipping is present.
3. **Sticky action rail competes with/overlays critical content zone.**  
   Bottom fixed CTA rail is visually dominant and can obscure lower hero/trust area depending on viewport height.
4. **Conversion path has too many simultaneous primary-ish actions.**  
   Hero pair + header CTA + 3-button sticky rail creates decision friction rather than a single dominant path.

### P2 (non-blocking polish)
1. **Mobile hero typography is oversized for small viewports.**  
   H1 wraps heavily and pushes key info/controls down.
2. **Desktop composition leaves avoidable dead space on some captures.**  
   Hero card anchoring can feel left-heavy on wider layouts.
3. **Trust proof is present but could be more verifiable inline.**  
   Review count/reputation claims are strong, but could be reinforced with clearer source affordance near hero chips.
4. **Performance polish opportunity:** lint warns about `<img>` usage in multiple files (Next optimization warning, not build-breaking).

---

## 4) Launch readiness statement
**AutoTrek visual-refresh-r1 is NOT launch-ready.**  
No hard rendering crash was found, and build/e2e passed, but conversion-critical UX is inconsistent on mobile/desktop and the CTA system lacks a single unambiguous hierarchy. Current state risks measurable conversion loss at launch.

---

## 5) Top 3 next actions (highest leverage)
1. **Unify CTA system in one pass:** one true primary action style, one secondary style, fixed breakpoint behavior for header/hero/sticky rail.
2. **Fix mobile spacing/collision rules:** enforce header-safe hero inset and prevent CTA/button clipping/overlap on 360/390/430 widths.
3. **Retune sticky rail behavior:** reduce visual dominance and prevent overlap with trust/content region (conditional show, reduced height, or smarter offset).

---

## Evidence notes
- Build status: `next build` completed successfully.
- E2E status: `tests/header-cta.spec.ts` passed on desktop/tablet/mobile.
- Lint: 3 warnings (`@next/next/no-img-element`) indicating optimization debt but no blocker.
