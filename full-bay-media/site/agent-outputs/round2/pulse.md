# Pulse — Round 2 Component Interaction Refinement (AutoTrek-Only Intent)

## Objective
Tighten interaction behavior so each component:
1. Meets accessibility expectations in every state.
2. Preserves a single conversion flow (Call / Schedule at AutoTrek).
3. Avoids agency-style or multi-offer interaction patterns that dilute intent.

---

## 1) Round 2 State Contract (required per component)
Every interactive element must explicitly implement:
- `rest`
- `hover` (pointer-capable)
- `focus-visible` (keyboard)
- `active` (press)
- `disabled` (if applicable)

### Enforcement rules
- No component may communicate critical action context in hover-only styling.
- `focus-visible` must be equal or stronger than hover.
- `disabled` must expose semantic state (`disabled` or `aria-disabled="true"`) and remain legible.

---

## 2) Conversion-Flow State Logic (AutoTrek-only)

## 2.1 Primary CTA components
Applies to: hero primary CTA, sticky bottom CTA, top-bar call CTA.

- **Rest:** explicit local-service action copy (e.g., “Call AutoTrek”, “Schedule at AutoTrek”).
- **Hover/focus-visible:** only confidence cues (contrast, ring, slight lift). No copy swaps to alternate offers.
- **Active:** immediate pressed feedback (no delayed animation).
- **Rule:** interaction states cannot introduce alternate pathways (no “Get Proposal”, “Book Marketing Audit”, etc.).

## 2.2 Secondary CTA components
Applies to: view services, read reviews, get directions.

- Must remain visually subordinate across all states.
- Hover/focus can increase clarity, but not exceed primary CTA emphasis.
- Secondary actions must support completion of the same local repair decision, not branch into non-AutoTrek funnels.

## 2.3 Card-as-link components
Applies to service cards linking to `/services/[slug]`.

- Hover/focus state should clarify “learn about this AutoTrek service”.
- No state copy or icon treatment should imply third-party handoff.
- Card title/description in active state should remain stable (avoid micro-copy swaps that create uncertainty before click).

---

## 3) Accessibility Refinements by Component Type

## 3.1 Buttons and pill CTAs
- Minimum target: 44x44 CSS px.
- Focus ring: 2px with visible offset on all surfaces.
- Active state: use non-color cue (pressed depth/transform) plus color shift.
- Disabled state: maintain readable label contrast; avoid low-opacity text washout.

## 3.2 Text links
- Keep underline in rest state (or equivalent always-visible affordance).
- Hover/focus must preserve underline; avoid link styles that look like static text when focused.
- Ensure keyboard users can scan link focus order without ambiguity.

## 3.3 Summary/Details controls (FAQ)
- `<summary>` gets explicit focus-visible ring.
- Open state must preserve strong text contrast and clear disclosure indicator.
- No animated disclosure effects that block or delay content availability.

## 3.4 Sticky mobile CTA
- Must not overlap final content (reserve page-bottom spacing).
- Focus order: sticky CTA should not trap keyboard navigation.
- State transitions must remain short and non-distracting; this is a conversion anchor, not an animation surface.

---

## 4) Consistency Rules for AutoTrek Brand Intent

1. **Single business entity clarity:** state copy always refers to AutoTrek services/outcomes.
2. **No agency metaphors in interactions:** remove state text/labels implying consulting, growth, funnels, campaigns.
3. **No competing urgency mechanics:** only one dominant primary CTA per viewport state.
4. **Trust-supportive interactions only:** reviews/directions/warranty links can reinforce trust, but must not visually outrank scheduling/call CTA.

---

## 5) Round 2 QA Checklist
- [ ] Each interactive component implements full state contract.
- [ ] Focus-visible parity exists for all hover affordances.
- [ ] Primary CTA remains visually dominant in rest/hover/focus/active.
- [ ] Secondary actions never outrank primary CTA during interaction.
- [ ] No interaction copy introduces non-AutoTrek offers/funnels.
- [ ] Sticky CTA does not occlude content and remains keyboard-safe.
- [ ] Reduced-motion mode retains meaning (contrast/ring/border), removes non-essential movement.

---

## 6) Implementation Guidance (practical)
- Consolidate repeated state patterns into reusable classes:
  - `.autotrek-primary-cta`
  - `.autotrek-secondary-cta`
  - `.autotrek-interactive-card`
  - `.autotrek-focus-ring`
- Add lint/review check: reject copy in interactive elements containing off-intent terms (e.g., “audit”, “campaign”, “funnel”, “agency”).
- In PR review, require one screenshot set per component: rest/hover/focus-visible/active/disabled.
