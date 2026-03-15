# Refresh Round 2 (Muse) — Hierarchy & Trust Architecture Upgrade

## Mandate for Round 2
Build directly on Refresh Round 1 and push the homepage from “clean + credible” to **decisive premium**:
- Stronger visual hierarchy in first viewport and section-to-section flow
- Modern composition (fewer, larger modules; clearer negative space)
- Premium spacing rhythm that feels intentional, not template-like
- Trust architecture that appears exactly where decision anxiety peaks

This is implementation-ready guidance for design + front-end execution.

---

## 1) Visual Hierarchy 2.0 (Decision Weight System)

## Priority stack (non-negotiable)
1. **Primary action:** `Book Inspection`
2. **Outcome promise:** accurate diagnosis + approved repairs
3. **Immediate trust proof:** rating, years, warranty, ASE
4. **Decision scaffolding:** symptom selector + process
5. **Depth content:** reviews, about, FAQ
6. **Utilities:** footer/support links

## Enforcement rules
- Exactly **one filled CTA style** per viewport.
- Any secondary action must be outline/text and at least **20% lower visual emphasis** (weight/contrast/size) than primary CTA.
- Never place two high-contrast panels back-to-back without a low-contrast breathing zone.
- H1 + primary CTA + trust chips must read as one cluster at first glance.

---

## 2) Modern Composition Upgrade (2026 Premium)

## Replace “section stack” with compositional rhythm
Adopt this cadence:
- **Statement panel** (hero / final CTA)
- **Evidence rail** (trust, process signals)
- **Decision grid** (symptoms/services)
- **Validation panel** (reviews/certs)

## Composition patterns
- Use **asymmetric split hero** (content left, real service image right) with strict alignment baseline.
- Convert small card clusters into **2–3 large evidence blocks** where possible.
- Use “contained bands” for high-value moments (process + final CTA), and open canvas elsewhere.
- Avoid equal-height card rows when content density differs; use masonry only below first fold.

---

## 3) Premium Spacing Rhythm (8pt base)

## Global spacing scale
- Section top/bottom: `py-24 md:py-28` (hero: `pt-28 pb-24`)
- Section-to-section transition buffer: `mt-10 md:mt-14`
- Internal section stacks: `gap-8 md:gap-10`
- Card padding: `p-6 md:p-8`
- CTA cluster spacing: `gap-4`
- Micro copy groups: `gap-2`

## Rhythm rules
- Add extra pre-space **before** conversion pivots (trust rail, process callout, final CTA).
- Reduce post-space after headings when followed by short supporting copy.
- No random one-off spacing values; all spacing must map to token scale.
- On mobile, preserve hierarchy by shrinking width first, spacing second.

---

## 4) Trust Architecture (Placed by Anxiety Stage)

## Stage 1 — “Can I trust this shop?” (Hero)
Place directly under hero CTA:
- `4.9★ Google`
- `Serving Littleton Since 2009`
- `3yr/36k Warranty`
- `ASE-Certified Techs`

## Stage 2 — “Will they upsell me?” (Process section)
Insert dominant risk-control callout:
- **“No repairs begin until you approve the estimate.”**

## Stage 3 — “Do others like me trust them?” (Reviews panel)
- 2 concise testimonial excerpts + aggregate score/count
- Show reviewer context (vehicle type or issue) when available

## Stage 4 — “What happens next?” (Final CTA)
- Reconfirm frictionless next step + phone fallback
- Keep proof snippet adjacent to CTA (“Backed by 3yr/36k warranty”)

---

## 5) Section Blueprint (Round 2 Ordering)
1. Sticky Header (minimal nav + phone + primary CTA)
2. Hero split composition (promise + CTA cluster + trust chips)
3. Compact trust rail (single row)
4. Symptom-first selector (6 max)
5. Process + approval guardrail (timeline + bold callout)
6. Reviews + credentials (single validation zone)
7. About (condensed, factual)
8. FAQ (short, anxiety-based)
9. Final decision band (urgent / diagnosis-first / planned)
10. Footer

**Cut/merge any section that does not reduce uncertainty or increase booking confidence.**

---

## 6) Component-Level Specs (Implementation)

## Hero
- H1 max width: `12–14 words`, max 2 lines desktop, 3 mobile
- Supporting copy max: 2 lines desktop, 3 mobile
- CTA row: primary + secondary only
- Trust chips directly below CTA row, never above H1

## Symptom cards
- 2-line max title
- 1-line helper text optional
- Uniform CTA treatment: `Book Inspection`
- Hover: subtle border/accent shift only (no dramatic lift)

## Process timeline
- Desktop horizontal, mobile vertical
- Each step: verb-first label + one short sentence
- Step 2 and 3 visually emphasized as decision-control steps

## Reviews block
- One featured quote large + one supporting quote compact
- Star aggregate and review count always visible without expand/click

---

## 7) Typography & Contrast Refinement

- H1: strong condensed display feel; tracking slightly tightened
- H2: high-contrast, less decorative, utility-first
- Body: `text-base md:text-lg`, max `68ch`
- Label/meta text: avoid low-contrast gray below accessible threshold
- Enforce WCAG 4.5:1 for body and critical trust text over imagery/surfaces

---

## 8) Final Copy Tightening (Round 2)

## Hero
**Eyebrow:** `Littleton Auto Care Since 2009`

**H1:** `Get a Clear Repair Plan Before Small Issues Get Expensive.`

**Subcopy:** `We diagnose the root cause, explain your options, and only begin repairs after your approval—backed by a 3-year/36,000-mile warranty.`

**Primary CTA:** `Book Inspection`
**Secondary CTA:** `Speak to Advisor`

## Process callout
`No repairs begin until you approve the estimate.`

## Final CTA headline
`Ready for a Confident Answer on Your Vehicle?`

---

## 9) Round 2 Acceptance Criteria

- First viewport communicates promise + primary CTA + trust in under 5 seconds.
- Visual emphasis clearly follows the priority stack; no competing secondary CTA.
- Spacing feels premium and consistent across all major sections.
- Trust proof appears at all key hesitation points (hero, process, reviews, final CTA).
- Page no longer reads as “template blocks”; composition feels intentional, modern, and high-end automotive.

If these criteria pass, the refresh should feel unmistakably premium while staying conversion-focused and implementation-safe.