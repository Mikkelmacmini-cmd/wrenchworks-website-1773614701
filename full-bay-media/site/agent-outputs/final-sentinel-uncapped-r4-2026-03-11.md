# AutoTrek Sentinel QA Gate (Uncapped, R4)
**Date:** 2026-03-11  
**Auditor:** Sentinel subagent  
**Inputs reviewed:**
- `full-bay-media/site/qa-captures/2026-03-11-r4/*`
- `/Users/openclaw/.openclaw/workspace/autotrek-desktop.png`
- `/Users/openclaw/.openclaw/workspace/autotrek-mobile.png`
- Current code in `full-bay-media/site`

---

## 1) Verdict + score
# **FAIL**
**Overall score: 41 / 100**

### Score breakdown (uncapped rubric)
- Visual integrity (30): **6/30**
- Conversion clarity (20): **8/20**
- Mobile UX (15): **7/15**
- Trust/proof clarity (10): **5/10**
- SEO basics (10): **8/10**
- Accessibility basics (10): **5/10**
- Link integrity (5): **2/5**

**Gate rule trigger:** FAIL due to **P0 present** (and score < 85).

---

## 2) Findings by severity

## P0 (Launch blockers)
1. **Critical render regression in R4 captures: page appears unstyled (CSS not applied).**  
   - Evidence: `desktop-1280-viewport.png`, `tablet-768-viewport.png`, `mobile-390-viewport.png` show browser-default blue underlined links, default serif typography, and collapsed raw layout.  
   - Impact: destroys visual trust, hierarchy, readability, and conversion; this is release-blocking.

2. **Primary conversion path visually broken in R4 state.**  
   - Evidence: no properly styled/obvious primary CTA in R4 captures; key CTAs degrade into plain links with minimal prominence.  
   - Impact: users cannot reliably identify next action; measurable conversion loss expected.

3. **Cross-breakpoint instability indicates non-deterministic front-end delivery.**  
   - Evidence: styled baseline screenshots (`autotrek-desktop.png`, `autotrek-mobile.png`) conflict with unstyled R4 capture set from current run.  
   - Impact: intermittent “works sometimes” rendering is unacceptable for launch; production reliability is not proven.

## P1 (High)
1. **Mobile action rail behavior is risky when styling degrades.**  
   In styled baseline it is visible; in failed render state, action hierarchy and affordance collapse.

2. **Hero copy density remains heavy on narrow screens even in styled state.**  
   Headline wraps aggressively; pushes key confidence elements lower.

3. **Navigation resilience is weak without full style load.**  
   Raw anchor stack appears at top-left; poor fallback behavior for real users on partial-load/network failure.

## P2 (Medium)
1. **Trust proof lacks hardening in degraded state.** Review/warranty claims lose emphasis when style fails.
2. **CTA set is broad (Book/Speak/Call/Callback/Quick Diagnosis)** and can dilute primary action priority.
3. **Minor contrast/tap-target polish still available** in hero chips and compact controls.

---

## 3) Launch readiness statement
**Not launch-ready.**

R4 evidence shows a blocking front-end delivery regression (unstyled render) across desktop/tablet/mobile captures. Until deterministic style delivery is proven under the exact release path, launch must remain blocked.

---

## 4) Top 3 next actions (highest leverage)
1. **Fix and harden CSS delivery path immediately** (build artifact references, asset hosting/caching headers, preload strategy, CSP, and failure fallback). Re-run full capture suite after fix.
2. **Add a release gate that fails CI/CD on unstyled-render detection** (visual diff + DOM/CSS smoke check across 1280/768/390).
3. **Run post-fix deterministic verification on same environment** (`r5` captures) and require zero P0 before ship.

---

## Final Sentinel decision
**FAIL — 41/100. Do not ship.**