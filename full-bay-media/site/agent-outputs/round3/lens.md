# Round 3 — Lens: Final Imagery + Alt Text Launch Pass (AutoTrek-Only Intent)

Date: 2026-03-11  
Scope: Final QA pass for imagery intent, alt-text quality, and text-on-image accessibility safety across current templates.

## Final verdict

**Overall: close to launch-ready, with targeted fixes needed.**

The current site uses real AutoTrek visuals and avoids obvious off-brand SaaS/agency motifs in image content. The remaining risks are mostly implementation details:
1. generic/repetitive alt text on service cards/detail heroes,
2. a few modules where CTA language and visual framing still imply mixed intent,
3. text-on-image overlays that should be normalized to stricter tokens for cross-device contrast safety.

---

## 1) AutoTrek-only visual intent check

## What’s working
- Core imagery is repair/shop anchored (technician, bays, storefront) and reads as real auto service context.
- No visible marketing-dashboard or startup-office imagery in the audited templates.
- Hero and service imagery generally support repair credibility rather than decorative abstraction.

## Remaining intent risks
- Several featured services reuse the same few images (`autotrek-hero-current`, `autotrek-shop-floor-2`, `autotrek-building`), which can weaken one-to-one service proof.
- “Google + AI Search Visibility” blocks are copy-heavy and visually adjacent to service content; this can subtly shift perception toward marketing services versus auto repair service.

## Final intent direction
- Keep all visual emphasis on diagnostics/inspection/repair outcomes.
- Where images are reused, improve alt specificity so each service still communicates distinct repair intent.

---

## 2) Alt text audit and final recommendations

## Current issues observed
- Service cards and service detail heroes use `alt={service.title}` (too generic; misses real context + user value).
- Some image alts are factual but not conversion-informative enough (e.g., broad “storefront”/“shop bays” phrasing).

## Final alt text standard
Use: **action + repair context + customer-relevant outcome**, plain language, no keyword stuffing.

### Recommended replacements (high impact)
- Homepage hero (`/images/autotrek-hero-current.png`):  
  **"AutoTrek technician diagnosing a truck in the Littleton shop to identify needed repairs quickly."**

- Service card/detail images (replace title-only alts with mapped, context-safe variants):
  - Vehicle Maintenance: **"Technician performing scheduled vehicle maintenance checks at AutoTrek in Littleton."**
  - Brake Repair & Service: **"Mechanic inspecting brake components in AutoTrek’s service bay for safe stopping."**
  - Oil & Fluid Changes: **"AutoTrek team completing oil and fluid service to protect engine and cooling systems."**
  - Hybrid Repair: **"Technician running hybrid system diagnostics to isolate battery and drivability issues."**
  - European Auto Repair: **"AutoTrek technician performing diagnostics on a European vehicle in the service bay."**
  - Fleet Repair & Service: **"AutoTrek service team inspecting a business vehicle to reduce fleet downtime."**
  - Vehicle Suspension Repair: **"Suspension components being inspected to correct pulling, bounce, and uneven tire wear."**
  - Vehicle Diagnosis & Repair: **"Technician using diagnostic tools to identify a check-engine drivability problem."**
  - Wheel Alignments: **"Vehicle alignment service in progress to improve steering stability and tire life."**

- “Inside AutoTrek” images:
  - Shop floor: **"Inside AutoTrek’s active Littleton service bays where inspections and repairs are performed."**
  - Building: **"AutoTrek Service Center storefront in Littleton, Colorado."**

## Decorative rule
If any future image is purely decorative and duplicates nearby text meaning, set `alt=""`.

---

## 3) Text-on-image contrast and overlay safety

## Current state
- Homepage hero uses `bg-black/55` overlay with white text/chips.
- Service detail hero uses gradient overlay (`from-black/65 via-black/25 to-black/10`) with white heading/body text.

These are generally good, but to reduce regression risk across crop/brightness variance, standardize to stricter tokens.

## Final overlay standard (recommended)
1. Base overlay for text-on-image: `rgba(15, 23, 42, 0.62)`
2. High-variance fallback: `0.70–0.76`
3. Gradient option for hero text zone:  
   `linear-gradient(90deg, rgba(15,23,42,0.78) 0%, rgba(15,23,42,0.52) 55%, rgba(15,23,42,0.18) 100%)`
4. Keep body/small text at **4.5:1+**; large headings **3:1+** minimum.
5. Keep phone CTA and trust chips inside highest-contrast region only.

## Specific module notes
- Homepage hero chips (`bg-white/15`, white text) may dip contrast on bright image areas if overlay weakens after crop changes. Keep chip text size/weight as-is but increase local scrim or chip fill opacity if needed on mobile.
- Service detail hero paragraph uses `text-white/90`; retain only if tested against brightest crop. If uncertain, move to solid `text-white`.

---

## 4) Launch-blocking vs non-blocking

## Must do before launch
- Replace title-only service image alts with context-specific alt text.
- Confirm hero/detail overlays at mobile breakpoints still preserve 4.5:1 for body-size text.

## Should do soon after launch (quality hardening)
- Increase service-image variety so each service card has direct visual proof, not repeated generic shots.
- De-emphasize or relocate “Google + AI Search Visibility” content so repair intent remains dominant in visual hierarchy.

---

## 5) Final QA checklist for imagery/accessibility
- [ ] Every conversion-relevant image conveys auto-repair proof (not generic business mood).
- [ ] No service card/detail image uses title-only alt text.
- [ ] Decorative images use empty alt where appropriate.
- [ ] All text-on-image modules pass contrast minimums at desktop + mobile crops.
- [ ] Primary phone CTA remains in highest-contrast area on every viewport.
- [ ] No imagery/module framing introduces non-repair intent.

---

## Final position

**Go with minor required fixes.**

Once alt text is upgraded and overlay consistency is locked, the visual system will cleanly reinforce AutoTrek’s call-first repair intent while staying accessibility-safe across responsive layouts.