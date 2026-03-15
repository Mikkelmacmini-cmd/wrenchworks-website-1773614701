# Round 3 — AutoTrek Final Design Direction (Readability, Hierarchy, Trust, Conversion)

## Objective
Final polish pass to maximize first-glance clarity and booking completion. This direction assumes content is already largely correct and focuses on **decision flow, readability under speed, and trust at moments of hesitation** while keeping AA-safe contrast guardrails.

---

## 1) Final conversion flow blueprint (single-path)
Use this order sitewide:
1. **Problem recognition** ("Need auto repair now?")
2. **Outcome promise** (fast diagnosis, honest recommendations, approved-before-work)
3. **Primary action** (Call / Schedule)
4. **Immediate trust proof** (warranty, ASE, review score, years)
5. **Service qualification** (what you fix + who it’s for)
6. **Process clarity** (how appointment + approval works)
7. **Final ask** (same CTA channel, repeated)

### Non-negotiables
- One conversion channel per page section cluster (no mixed "Call" + "Get Quote" + "Learn More" primary buttons).
- Every major section ends in the same action language.
- Primary CTA appears in first viewport and reappears at natural stopping points (after services, after process, before footer).

---

## 2) Readability upgrades for fast scanning

### Copy structure
- Keep paragraphs to **2–3 lines max** on desktop, **1–2 lines** on mobile.
- Use short lead-ins and bullet clusters for symptoms/services.
- Replace vague modifiers with concrete language ("3-year/36k-mile warranty" vs "best warranty").

### Type and measure
- Maintain consistent width for body copy: **60–70ch desktop**, fluid narrower on mobile.
- Prefer left-aligned text for all conversion-critical sections.
- Avoid centered multi-line paragraphs except concise hero subheads.

### Section intros
Each section should answer one question:
- "Can they handle my issue?"
- "Can I trust them?"
- "How fast can I book?"
If a section answers multiple questions, split or simplify.

---

## 3) Hierarchy lock: make the right thing obvious

### Visual priority stack
- **Tier 1:** Primary CTA buttons + phone number
- **Tier 2:** H1/H2 value promise
- **Tier 3:** Trust chips/stat strip
- **Tier 4:** Service details/supporting links
- **Tier 5:** Utility/footer navigation

### Enforcement rules
- Only Tier 1 uses highest chroma + strongest fill button.
- Tier 2 headings get scale, not extra color noise.
- Tier 3 trust strip is compact and factual; no oversized badge walls.
- Tier 4 links are text/outline only.

### Mobile hierarchy checks
- First screen must show: value promise + primary CTA + at least one trust marker.
- No decorative image should push CTA below initial viewport on common devices.

---

## 4) Trust placement strategy (high-leverage positions)

### Placement map
1. **Directly below hero CTA:** strongest credibility cluster (ASE, warranty, years, rating).
2. **Before service cards:** one-line reassurance ("Certified techs. Clear estimates before work begins.")
3. **Inside process section:** explicit risk control ("No repairs without your approval.")
4. **Final CTA band:** repeat top 2 proof points + action.

### Trust content quality bar
- Prefer verifiable numbers and certifications.
- Avoid generic claims ("world-class," "premium") unless substantiated.
- Keep trust lines short enough to scan in <2 seconds.

---

## 5) Accessibility-safe contrast guardrails (final)

### Minimums
- Body/UI text: **4.5:1+**
- Large text/headlines: **3:1+** (target 4.5:1 for key promises)
- Essential trust copy: treat as body text (**4.5:1+**)

### Practical guardrails
- No light-gray body copy on white or tinted cards.
- No text over photos without a stable overlay/scrim at all breakpoints.
- Focus-visible ring must be clearly visible on every interactive component.
- Link affordance cannot be color-only; use underline or explicit state change.

### Interaction state guardrails
- Hover/focus/active must preserve (or improve) text contrast.
- Primary CTA remains visually dominant in all states.
- Disabled states remain readable; avoid low-contrast “washed out” text.

---

## 6) Layout rhythm and density calibration

### Spacing cadence
- Section spacing: **80px desktop / 56px mobile**
- In-section block gaps: **24–32px**
- Card padding: **20–24px**
- Heading-to-subhead: **8–12px**
- Subhead-to-CTA: **12–16px**

### Density principles
- Add extra breathing room before trust and CTA pivots.
- Keep related items tightly grouped (headline + promise + CTA + trust row).
- Avoid abrupt shifts from airy to cramped between adjacent sections.

---

## 7) Final pass QA checklist (design + conversion)
- [ ] Single dominant CTA style per viewport
- [ ] Hero includes promise + CTA + trust strip above fold
- [ ] All major sections end with same conversion action language
- [ ] Trust points appear at hesitation moments, not decorative placements
- [ ] Body copy and trust copy meet 4.5:1 contrast minimum
- [ ] Focus-visible states are obvious and consistent
- [ ] Mobile first viewport preserves CTA visibility
- [ ] Supporting links are subordinate and never compete with primary action
- [ ] No section exceeds one core user question without clear split

---

## Expected result
A calmer, faster-scanning experience where users immediately understand what AutoTrek does, why it’s trustworthy, and exactly how to take the next step—without contrast regressions or competing visual signals.