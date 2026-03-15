# AutoTrek Sentinel QA Gate (Uncapped)
**Date:** 2026-03-11  
**Auditor:** Sentinel subagent  
**Inputs reviewed:**
- `/Users/openclaw/.openclaw/workspace/autotrek-desktop.png`
- `/Users/openclaw/.openclaw/workspace/autotrek-mobile.png`
- `/Users/openclaw/.openclaw/workspace/full-bay-media/site/qa-captures/2026-03-11/*.png`
- Current code in `/Users/openclaw/.openclaw/workspace/full-bay-media/site`

---

## Gate Verdict
# **FAIL**

**Overall score: 34 / 100**  
**Launch-ready status:** **Not launch-ready. Do not ship current visual output.**

### Blocking issues (must fix before launch)
1. **P0 visual integrity failure on live render/screenshots**: page appears effectively unstyled/partially broken, with raw-link nav and severe hero/logo collision/overlay behavior in both desktop and mobile screenshots.
2. **P0 mobile hero clipping/readability failure**: above-the-fold is dominated by oversized logo graphic and clipped composition; core value proposition and primary CTA are not clearly visible in first impression.
3. **P1 SEO crawl contradiction**: `robots.ts` disallows key `/services/*` URLs that are simultaneously listed in sitemap and intended as acquisition pages.

---

## Category Scores
- **Visual quality:** 10/20
- **Trust proof clarity:** 7/15
- **Mobile hero clipping/composition:** 2/10
- **IA clarity:** 6/10
- **CTA clarity:** 6/10
- **SEO basics:** 5/15
- **Accessibility basics:** 5/10
- **Conversion readiness:** 3/10

---

## Uncapped Findings (P0 / P1 / P2)

## P0 (Critical)

### 1) Catastrophic visual presentation mismatch (desktop + mobile)
- **Evidence:** `autotrek-desktop.png`, `autotrek-mobile.png` show browser-default link styling, cramped nav text, oversized hero logo text stack (“AutoTrek Service Center”) overwhelming viewport, and content hierarchy collapse.
- **Impact:** Immediate trust loss; looks broken/unprofessional; users bounce before evaluating offer.
- **Why this blocks launch:** This is not a polish issue; this is first-impression failure and brand credibility collapse.

### 2) Mobile hero clipping and first-screen conversion collapse
- **Evidence:** `autotrek-mobile.png` shows hero consumed by oversized logo artwork and cropped scene, with weak/absent above-fold CTA clarity.
- **Impact:** Mobile users (likely majority) do not quickly see a clear problem/solution and booking pathway; conversion intent is lost in first 3–5 seconds.
- **Why this blocks launch:** Primary booking funnel begins at hero; this state fails that requirement.

---

## P1 (High)

### 3) Robots policy suppresses core SEO pages
- **Code evidence:** `src/app/robots.ts` explicitly disallows:
  - `/services/automated-review-systems`
  - `/services/google-business-profile`
  - `/services/local-seo-ai-search`
  - `/services/mobile-first-websites`
- **Contradiction:** `src/app/sitemap.ts` includes `/services` and all featured service pages for indexing.
- **Impact:** Crawl/indexing ambiguity and preventable organic traffic loss on key intent pages.

### 4) Trust proof is narrative-heavy but verification-light
- **Evidence:** proof cards are detailed but currently presented as internal narrative snippets without visible third-party validation context in same viewport.
- **Impact:** Users may perceive claims as marketing copy rather than verifiable proof.

### 5) Information architecture still asks for high cognitive load early
- Hero + proof + triage + process + outcomes + team + comparison + contact + closing CTA is comprehensive but heavy.
- On broken visual render, this compounds into scan fatigue with no stable visual hierarchy.

### 6) CTA intent split is noisy
- Multiple near-equivalent actions (“Book Inspection”, “Speak to Advisor”, “Call Now”, “Request Callback”, “Quick Diagnosis”) without explicit priority path by user intent state.
- Impact: Decision friction and reduced clickthrough.

---

## P2 (Medium)

### 7) Accessibility baseline gaps remain
- No explicit skip link found.
- Heavy reliance on color/styling for urgency states (green/amber/rose) can weaken comprehension for some users.
- Sticky mobile CTA may compete with content focus/reading flow if not carefully managed for keyboard/screen-reader sequence.

### 8) Hero image strategy is fragile
- Current hero uses a busy, text-heavy image source; if CSS/overlay fails or crops unexpectedly, brand mark and message conflict instead of reinforcing each other.

### 9) Conversion proof sequence can be tightened
- Great depth exists, but above-fold trust stack should be more atomic (rating, review count, warranty, ASE, years in business) with immediate visual confirmation.

---

## Code Context Notes (important)
- Build succeeds (`next build` passes), so screenshot breakage is likely **render/output/state mismatch** (asset/CSS delivery, wrong deployed artifact, stale capture target, or image/content composition issue) rather than a TypeScript compile blocker.
- Metadata, canonical, OG, sitemap, and schema are present and generally strong.
- The strongest technical SEO defect remains robots disallow rules against intended landing pages.

---

## First 3 Highest-Leverage Next Actions
1. **Fix visual output parity immediately (P0):** verify deployed artifact and CSS delivery chain (Tailwind/global CSS inclusion, cache busting, correct build output), then regenerate desktop/mobile QA captures from production URL and block publish until visual parity with intended design is confirmed.
2. **Replace/recompose hero for mobile-first clarity (P0):** remove oversized logo-over-photo conflict; enforce safe focal crop and guaranteed visible H1 + primary CTA above fold on 360/390/430 widths.
3. **Correct robots policy (P1):** remove disallow entries for service pages meant to rank; align robots + sitemap + canonical strategy before indexing waves.

---

## Sentinel Decision
**FAIL gate.**  
Current state is **not fully launch-ready**.  
Primary blockers are first-impression visual integrity and mobile conversion clarity, with a high-impact SEO policy contradiction also requiring correction before release.
