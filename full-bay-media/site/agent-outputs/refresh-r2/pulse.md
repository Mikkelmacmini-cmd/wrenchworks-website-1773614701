# AutoTrek Refresh — Round 2/3 Interaction Upgrade (Pulse)

Date: 2026-03-11  
Scope: Build on R1 interaction system + R2 critique to deliver unmistakably modern, conversion-safe, accessibility-first behavior.

---

## Executive Direction
R1 established a solid interaction baseline. R2 critique identified the missing leap: **decision-engine behavior**, especially on mobile and high-intent moments.

This pass upgrades interactions across six fronts:
1. **Motion hierarchy** (what moves, when, and how much)
2. **Scroll behavior** (context-aware header/CTA dynamics)
3. **Persistent CTA stickiness** (without occlusion)
4. **Hover depth system** (tokenized, no ad-hoc flair)
5. **Micro-interactions for confidence** (triage, approvals, trust evidence)
6. **Reduced-motion parity** (same clarity, less movement)

Target outcome: users can decide and act in under 30 seconds, regardless of input mode.

---

## 1) Motion Hierarchy (2026, restrained + deliberate)

## Tier map
- **M0 — Static certainty (default):** trust badges, legal/warranty lines, credential text.  
  No decorative motion.
- **M1 — Functional feedback:** buttons, chips, links, form controls.  
  80–140ms response, tiny transform/color change.
- **M2 — Structural transitions:** accordion open/close, section reveal on scroll, sticky-bar entrance.  
  160–220ms; opacity + translate only.
- **M3 — Emphasis moments (rare):** hero CTA cluster highlight, urgent-safety triage result state.  
  220–280ms max; once per view context.

## Hard limits
- Max translate for hover/lift: **4px desktop / 2px mobile**
- No infinite loops on conversion components
- No scale on text-heavy cards
- Never animate layout-critical height without guardrails (use content-visibility or controlled disclosure)

---

## 2) Scroll Behavior Architecture

## Header behavior
- **Top of page:** full header (brand, phone, primary CTA)
- **After ~80px scroll:** compress height by ~20%, keep phone + CTA visible
- **Scroll down fast:** hide non-essential nav labels, preserve action cluster
- **Scroll up:** restore labels quickly (<=180ms)

## Section-aware behavior
- On entering **decision zones** (symptom triage, process approval block, pricing/budget ranges), elevate CTA contrast one step.
- On entering **reading zones** (long FAQ answers, policy text), soften sticky CTA chroma to reduce interruption.
- Near footer/final CTA band, retire floating sticky elements to avoid dual-CTA conflict.

## Scroll progress utility (desktop optional, mobile subtle)
- Thin progress indicator tied to section anchors (Hero → Symptoms → Process → Proof → Book).
- Must be non-interfering; purely orientation aid.

---

## 3) Persistent CTA Stickiness (Mobile P0)

Critique-required: always-available thumb-zone action without taking over content.

## Mobile action rail spec
Use a bottom rail with 3 actions:
1. **Call Now** (primary)
2. **Request Callback**
3. **Quick Diagnosis** (opens triage sheet)

## Behavior rules
- Appears after hero trust chips exit viewport.
- Collapses to 1 primary + “More” when keyboard is open.
- Hides when user reaches final CTA section and footer.
- Reappears on upward scroll within 200ms.

## Safety/layout
- Respect safe area: `padding-bottom: calc(10px + env(safe-area-inset-bottom));`
- Reserve page bottom space equal to rail height + 16px
- Hit targets >= 44x44
- Z-index below modal/dialog layers, above content

---

## 4) Hover Depth System (Desktop + pointer devices)

## Depth tiers
- **D1 (inline):** links, chips, small toggles  
  Color/underline/focus-ring only
- **D2 (interactive cards/buttons):** service cards, standard CTAs  
  `translateY(-2px)` + shadow step-up + border tint
- **D3 (high-intent modules):** hero primary CTA group, urgent triage result panel  
  `translateY(-4px)` max, stronger shadow, limited to 1–2 surfaces per viewport

## Governance
- Hover and focus-visible must convey the same affordance.
- If D3 appears more than twice in one viewport, reduce to D2.
- No bespoke hover animations outside token set.

---

## 5) Micro-Interactions That Accelerate Decisions

## 5.1 Symptom triage quickstart (P0)
2–3 step bottom sheet/modal:
- “What are you noticing?”
- “Can you still drive safely?”
- “How soon do you need help?”

Output state returns:
- urgency label (Now / Soon / Monitor)
- recommended next action (call/schedule)
- prefilled booking intent tag

## Interaction details
- Step change: 140–180ms fade/slide
- Progress indicator: discrete step pills (not spinner)
- Save progress if dismissed once per session

## 5.2 Approval guardrail interaction
For process section claim (“No repairs begin until you approve the estimate”):
- Add tap/hover reveal “How approval works” micro-panel
- Include 3 bullets max, each with icon + one line
- Panel open/close must be instant in reduced motion

## 5.3 Trust evidence reveal
Review cards: on focus/hover show metadata strip (vehicle, issue, turnaround) via opacity reveal only.
No card reflow jumps.

---

## 6) Mobile Nav Ergonomics (Thumb-first)

- Keep top nav minimal; shift deep nav into sheet/drawer.
- Drawer opens with clear focus trap + close button in top-right + swipe-to-close optional.
- Primary actions remain in bottom rail; avoid duplicating strong CTA in drawer.
- Back-to-top affordance appears after long scroll, but never overlaps bottom rail hit area.

## One-thumb rule
Critical tasks (call, callback, quick diagnosis, schedule start) must be reachable in the lower 60% of viewport without precision gestures.

---

## 7) Accessibility-Safe Reduced Motion Pattern

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }

  .lift, .card-hover, .sticky-enter, .sheet-transition {
    transform: none !important;
  }
}
```

## Parity requirements
- Keep state meaning with border/contrast/ring when motion is removed.
- Sticky CTA should appear/disappear without sliding animation if reduced motion is active.
- Accordion/disclosure must still clearly indicate expanded/collapsed state via icon rotation swap or label text.

---

## 8) Implementation Token Additions

```css
:root {
  --dur-fast: 120ms;
  --dur-base: 180ms;
  --dur-struct: 220ms;
  --dur-emph: 260ms;

  --lift-d1: translateY(-1px);
  --lift-d2: translateY(-2px);
  --lift-d3: translateY(-4px);

  --shadow-d1: 0 2px 8px rgba(0,0,0,.08);
  --shadow-d2: 0 8px 20px rgba(0,0,0,.12);
  --shadow-d3: 0 14px 30px rgba(0,0,0,.16);

  --focus-ring-light: 2px solid #14532d;
  --focus-ring-dark: 2px solid #bbf7d0;
}
```

Apply via shared primitives only:
- `.ui-pressable`
- `.ui-depth-d1/.d2/.d3`
- `.ui-sticky-rail`
- `.ui-disclosure`
- `.ui-reduced-motion-safe`

---

## 9) QA Gate — Round 2/3 Interaction Completion

Must all pass before declaring “2026-ready”:

- [ ] Mobile sticky rail exists on home + service list + service detail templates.
- [ ] Rail never occludes final CTA/footer/legal content.
- [ ] Scroll behavior is context-aware (compress/restore header, decision-zone emphasis, footer retirement).
- [ ] D1/D2/D3 depth tokens are used consistently; no ad-hoc hover styles.
- [ ] Triage quickstart flow works in <=3 steps with prefilled next action.
- [ ] Hover/focus-visible parity is complete across all interactive elements.
- [ ] Reduced-motion mode removes movement while preserving decision clarity.
- [ ] Primary CTA dominance remains intact in every viewport state.

---

## Bottom Line
This interaction pass shifts AutoTrek from “polished brochure” to **guided decision interface**. The key upgrade is not more animation; it’s **better action architecture**: persistent intent capture, context-aware scroll behavior, confidence micro-interactions, and accessibility-safe parity across devices.