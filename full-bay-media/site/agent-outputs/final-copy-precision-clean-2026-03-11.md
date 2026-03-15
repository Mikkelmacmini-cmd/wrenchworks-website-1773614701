# AutoTrek Final Production Copy — Precision Clean

Date: 2026-03-11  
Status: **LOCKED FOR PRODUCTION**

## 1) Hero (Homepage)
- **Eyebrow:** Littleton Auto Care Since 2009
- **Headline:** Dealer-Level Precision. Local-Shop Clarity.
- **Subhead:** We find the root cause, walk you through options in plain language, and only begin approved work—backed by a 3-year/36,000-mile warranty.
- **Primary CTA:** Book Diagnostic
- **Secondary CTA:** Speak to an Advisor

## 2) Proof Microcopy (Homepage chips)
1. 4.9★ Google — 1,200+ verified local reviews
2. Serving Littleton Since 2009 — Trusted by families and fleets
3. 3yr / 36k Warranty — Nationwide protection
4. ASE-Certified Technicians — Dealer-level diagnostic accuracy

## 3) Service Card Ladders (Services Hub)
1. **Vehicle Maintenance:** Stay ahead of failures with scheduled maintenance, condition checks, and a clear next-service plan.
2. **Brake Repair & Service:** Noise, vibration, or weak stopping? We pinpoint brake risk fast and repair to restore confident control.
3. **Oil & Fluid Changes:** Protect engine and transmission life with interval-right fluid service and documented condition checks.
4. **Hybrid Repair:** Hybrid warning or performance drop? We isolate the fault path and recommend the smartest repair option.
5. **European Auto Repair:** Brand-specific diagnostics and repair standards for European vehicles—without dealer friction.
6. **Fleet Repair & Service:** Reduce downtime with priority triage, consistent communication, and fleet-ready repair planning.
7. **Vehicle Suspension Repair:** Pulling, clunks, or bounce? We diagnose suspension instability and restore handling confidence.
8. **Vehicle Diagnosis & Repair:** Warning lights and drivability symptoms diagnosed to root cause, then prioritized by urgency and value.
9. **Wheel Alignments:** Correct steering drift and tire wear with spec-accurate alignment and suspension-aware setup.

## 4) Section Headlines / Supporting Copy
- **Process headline:** A Repair Process Built for Clear Decisions
- **Process subhead:** Four deliberate steps to remove guesswork: Diagnose → Confirm → Repair → Verify.
- **Proof section subhead:** Real vehicles. Documented findings. Verified results.

## 5) Final CTA Band (Homepage)
- **Headline:** Need a Clear Answer on Your Vehicle?
- **Subhead:** Start with a diagnostic and leave with a prioritized plan you can approve with confidence.
- **Primary CTA:** Book Diagnostic
- **Secondary CTA:** Call (303) 328-3356

## 6) Mobile Sticky Rail CTAs
- Primary: Book Diagnostic
- Secondary: Request Callback
- Tertiary: Quick Triage

---

## Component ID Map (Production)

| Copy ID | Surface | Component/Selector | File |
|---|---|---|---|
| `hero.headline` | Homepage hero H1 | `#hero-title[data-copy-id="hero.headline"]` | `src/app/page.tsx` |
| `hero.subhead` | Homepage hero supporting text | `[data-copy-id="hero.subhead"]` | `src/app/page.tsx` |
| `hero.cta.primary` | Homepage hero primary CTA | `[data-copy-id="hero.cta.primary"]` | `src/app/page.tsx` |
| `hero.cta.secondary` | Homepage hero secondary CTA | `[data-copy-id="hero.cta.secondary"]` | `src/app/page.tsx` |
| `process.headline` | Process section heading | `#process-title[data-copy-id="process.headline"]` | `src/app/page.tsx` |
| `process.subhead` | Process section supporting text | `[data-copy-id="process.subhead"]` | `src/app/page.tsx` |
| `proof.eyebrow` | Proof rail eyebrow | `[data-copy-id="proof.eyebrow"]` | `src/components/DiagnosticProofRail.tsx` |
| `proof.headline` | Reviews/proof section heading | `#reviews-title[data-copy-id="proof.headline"]` | `src/app/page.tsx` |
| `proof.subhead` | Reviews/proof section subhead | `[data-copy-id="proof.subhead"]` | `src/app/page.tsx` |
| `finalCta.headline` | Final CTA heading | `#final-cta-title[data-copy-id="finalCta.headline"]` | `src/app/page.tsx` |
| `finalCta.subhead` | Final CTA support line | `[data-copy-id="finalCta.subhead"]` | `src/app/page.tsx` |
| `finalCta.cta.primary` | Final CTA primary button | `[data-copy-id="finalCta.cta.primary"]` | `src/app/page.tsx` |
| `finalCta.cta.secondary` | Final CTA secondary button | `[data-copy-id="finalCta.cta.secondary"]` | `src/app/page.tsx` |
| `mobileRail.cta.primary` | Mobile sticky rail primary | `[data-copy-id="mobileRail.cta.primary"]` | `src/components/MobileActionRail.tsx` |
| `mobileRail.cta.secondary` | Mobile sticky rail secondary | `[data-copy-id="mobileRail.cta.secondary"]` | `src/components/MobileActionRail.tsx` |
| `mobileRail.cta.tertiary` | Mobile sticky rail tertiary | `[data-copy-id="mobileRail.cta.tertiary"]` | `src/components/MobileActionRail.tsx` |
| `servicesHub.headline` | Services hub title | `[data-copy-id="servicesHub.headline"]` | `src/app/services/page.tsx` |
| `servicesHub.subhead` | Services hub subtitle | `[data-copy-id="servicesHub.subhead"]` | `src/app/services/page.tsx` |
| `serviceCard.<slug>.ladder` | Services card supporting line | `[data-copy-id="serviceCard.${slug}.ladder"]` | `src/app/services/page.tsx` |

## Files Updated
- `src/app/page.tsx`
- `src/components/MobileActionRail.tsx`
- `src/components/DiagnosticProofRail.tsx`
- `src/app/services/page.tsx`
- `src/lib/autotrek-services.ts`

## Validation
- `npm run lint` passed with **1 existing non-blocking warning** (`@next/next/no-img-element` in homepage card images).
