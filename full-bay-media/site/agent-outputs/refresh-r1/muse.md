# Refresh Round 1 (Muse) — 2026 Premium Automotive Layout + Styling Rewrite

## Mandate
Reframe the homepage so it reads instantly as **PREMIUM + BOLD + TRUSTWORTHY** (brand-lock v3), while fixing latest criticism themes:
- Too many equal-weight sections
- Trust proof appears too diffuse/late
- Secondary UI sometimes competes with primary conversion
- Some blocks still read as “generic template” instead of premium automotive

This pass is an implementation-ready design and copy blueprint.

---

## 1) Layout Hierarchy (Locked)

## Scan order (must be obvious in 5 seconds)
1. **Outcome headline** (what the driver gets)
2. **Primary action** (Book Inspection)
3. **Immediate proof** (rating, years, warranty, ASE)
4. **Service-fit pathways** (symptom-first)
5. **Process/risk control** (approval before work)
6. **Final decision bar** (urgent / planned / diagnosis-first)

## Visual tier enforcement
- **Tier 1 (only one):** primary CTA fill + phone tap target
- **Tier 2:** H1/H2 promise typography
- **Tier 3:** trust stats strip
- **Tier 4:** service and process details
- **Tier 5:** utilities/footer links

If any secondary element feels as loud as Tier 1, reduce it.

---

## 2) 2026 Premium Automotive Styling System

## Color behavior (brand lock compliant)
- Foundation: `#0B0F14` / `#121821`
- Premium accent: `#C89B5E` (primary CTA, key highlights only)
- Ink: `#EAF0F6`, muted: `#A9B4C2`

## Rules
- No bright “promo” red/blue dominance.
- No second accent family.
- Accent appears in: primary CTA, active state, key stat numerals only.

## Type + spacing feel
- Headlines: strong, compact, high-contrast (no lightweight hero text)
- Body: max 68ch, short paragraphs (1–2 lines mobile, 2–3 desktop)
- Section cadence: generous (`py-20 md:py-24`) with dense “decision zones” around CTA + trust

## Surface language
- Replace “card soup” with fewer, larger modules.
- Cards use subtle elevation + hairline border, not heavy shadows.
- Rounded corners moderate (`rounded-2xl`), not playful pill-heavy everywhere.

---

## 3) Component Redesign Instructions (Implementable)

## A) Header / Nav
- Keep nav minimal (Services, About, Reviews, Contact)
- Right side: phone + primary CTA
- Remove visual clutter (no promo bars, no rotating claims)

**Styling:**
- Height: 72px desktop / 64px mobile
- Backdrop: dark translucent + blur only if contrast-safe
- Primary CTA in header is same label as rest of page: **Book Inspection**

## B) Hero (Split cinematic)
- Left: outcome headline + 2-line proof-led subcopy + CTA pair
- Right: real shop/service image with controlled scrim
- Trust chips sit under CTA in hero content area (not floating randomly)

**Primary CTA:** `Book Inspection`
**Secondary CTA:** `Speak to Advisor`

**Do not:**
- Center long paragraphs
- Put decorative badges above headline
- Use “marketing method” content in hero zone

## C) Trust Rail (immediately below hero)
Single compact row, 4 items only:
1. `4.9★ Google Rating`
2. `Serving Littleton Since 2009`
3. `3yr / 36k-mile Warranty`
4. `ASE-Certified Technicians`

**Style:** factual, short, icon-light, high legibility.

## D) Symptom-first Service Selector
Use driver language (not internal taxonomy), 6 max:
- Check Engine Light On
- Brake Noise or Vibration
- Overheating / Cooling Issues
- Electrical / Battery Problems
- Suspension / Steering Concerns
- Pre-Purchase Inspection

Each card ends with same action text link: `Book Inspection`.

## E) Process Module (risk-control section)
4-step horizontal/stacked timeline:
1. Diagnose
2. Confirm Plan + Estimate
3. Repair (Only With Approval)
4. Verify + Road-Test

Add explicit line: **“No repairs begin until you approve the estimate.”**

## F) Reputation Wall
- 2 featured review snippets + aggregate rating/count
- Certification/partner strip beneath (if available)
- Keep this before long-form “about” content

## G) Final Decision CTA Band
Three intent paths, one visual primary:
- **Urgent issue?** Call now
- **Need diagnosis first?** Book inspection
- **Planning maintenance?** Speak to advisor

Primary button remains **Book Inspection**.

---

## 4) Homepage Section Order (Rewrite)
1. Header
2. Hero
3. Trust Rail
4. Symptom-first Services
5. Process (approval clarity)
6. Reviews/Reputation
7. About Team + Shop (condensed)
8. FAQ (short)
9. Final Decision CTA Band
10. Footer

Move or remove customer-irrelevant marketing blocks from top/middle funnel.

---

## 5) Section Copy Rewrites (Ready to drop in)

## Hero
**Eyebrow:** `Littleton’s Trusted European & Fleet Auto Care`

**H1:** `Auto Repair You Can Approve With Confidence.`

**Subcopy:** `Get accurate diagnostics, clear estimates, and certified repairs backed by a 3-year/36k-mile warranty.`

**Primary CTA:** `Book Inspection`
**Secondary CTA:** `Speak to Advisor`

## Trust Rail labels
- `4.9★ Google Rating`
- `Since 2009`
- `3yr / 36k Warranty`
- `ASE-Certified Team`

## Symptom-first section
**H2:** `Tell Us the Symptom. We’ll Handle the Repair Plan.`

**Intro:** `From warning lights to drivability issues, we diagnose the root cause first—then walk you through options before any work begins.`

## Process section
**H2:** `A Clear Process, Start to Finish.`

**Intro:** `No guesswork. No surprise repairs. Just transparent communication at every step.`

**Risk-control callout:** `You approve the estimate before repairs begin.`

## Reviews section
**H2:** `Trusted by Littleton Drivers Who Expect It Done Right.`

**Intro:** `Real customers. Real repairs. Consistent results across daily drivers, European vehicles, and fleet service.`

## About condensed
**H2:** `Local Team. Certified Work. Professional Standards.`

**Body:** `AutoTrek has served Littleton since 2009 with ASE-certified technicians, modern diagnostics, and service recommendations built around safety, reliability, and your approval.`

## Final CTA band
**H2:** `Ready to Get an Accurate Answer on Your Vehicle?`

**Body:** `Book an inspection now or speak directly with an advisor to plan next steps.`

**Primary CTA:** `Book Inspection`
**Secondary CTA:** `Call (303) 761-6060`

---

## 6) Interaction + Accessibility Guardrails
- Preserve CTA dominance across hover/focus/active states.
- Focus-visible ring must be high-contrast and consistent.
- No text-on-image without stable scrim at mobile crop breakpoints.
- Body + trust text always 4.5:1+ contrast.
- Reduced motion removes transforms, keeps clarity cues (ring/border/underline).

---

## 7) Acceptance Criteria for Round 1
- First viewport shows: promise + primary CTA + trust marker.
- Primary action language is consistent: **Book Inspection**.
- Trust proof appears at early and hesitation moments, not scattered randomly.
- Service cards are symptom-first and visually subordinate to CTA hierarchy.
- Page reads as premium automotive service brand, not a generic local template.

If these are true, the experience will feel distinctly 2026 premium: calmer, more decisive, and higher trust at first glance.