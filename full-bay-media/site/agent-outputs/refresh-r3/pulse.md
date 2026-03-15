# AutoTrek Refresh — Round 3/3 Final Interaction Pass (Pulse)

Date: 2026-03-11  
Scope: Final interaction lock for launch. Integrates Vanguard (conversion/trust gates), Muse (decision-engine UX), and Lens (visual-depth discipline).

---

## Final Interaction Verdict
R2 introduced a strong system. R3 must now ensure the site behaves like a **high-confidence decision interface** under real-world conditions (mobile thumbs, mixed attention, urgent repair anxiety, reduced-motion users).

This pass is the **ship gate** for:
- Motion hierarchy discipline
- Context-aware scroll transitions
- Reliable sticky CTA behavior
- Confidence-building micro-interactions
- Accessibility-safe reduced-motion parity

If any P0 below fails, launch should be blocked.

---

## P0 Launch-Critical Interaction Requirements

### 1) Sticky mobile action rail (must be persistent + conflict-free)
Actions (exact intent language):
1. `Call Now`
2. `Request Callback`
3. `Quick Diagnosis`

Behavior:
- Appears after hero trust evidence leaves viewport.
- Stays visible across homepage + service list + service detail pages.
- Collapses when keyboard opens (primary action + overflow trigger).
- Retires near final CTA/footer to avoid dual-CTA conflict.
- Reappears on upward scroll within ~200ms.

Safety:
- Touch targets: 56–64px preferred (never <44px)
- Safe area padding: `calc(10px + env(safe-area-inset-bottom))`
- Bottom content spacer equal to rail height + 16px
- Layer order below modals, above page content

### 2) Motion hierarchy must enforce decision clarity
- **M0 Static:** legal/trust/warranty facts (no decorative motion)
- **M1 Feedback (80–140ms):** taps, chips, toggles
- **M2 Structure (160–220ms):** disclosures, sticky transitions, sheet transitions
- **M3 Emphasis (220–280ms, rare):** urgent triage result / primary conversion accent

Hard caps:
- Hover lift max: `2px mobile / 4px desktop`
- No looping conversion animations
- No text-card scaling
- No uncontrolled layout-shift animation

### 3) Scroll choreography must be context-aware
Header:
- Full at top
- Compresses after ~80px scroll while preserving phone + primary CTA
- Down-scroll deprioritizes nonessential nav labels
- Up-scroll restores labels quickly (<=180ms)

Context transitions:
- Enter decision zones (triage/process/budget) → raise CTA prominence one level
- Enter long-reading zones (FAQ/policies) → soften CTA chroma
- Enter final CTA/footer → retire floating sticky surfaces

### 4) Quick Diagnosis must be a real micro-funnel (not decorative UI)
2–3 steps max:
1. Symptom
2. Driveability
3. Timing/urgency

Output must include:
- Urgency state (`Now` / `Soon` / `Monitor`)
- Recommended next action (call/book/callback)
- Prefilled intent passed into next CTA flow

### 5) Reduced-motion parity must preserve meaning
When `prefers-reduced-motion: reduce`:
- Remove transform-driven movement and long transitions
- Keep state changes via contrast, border, focus ring, icon/label swaps
- Sticky rail appears/disappears without slide motion
- Triage/disclosure remain instantly legible

---

## R3 Interaction System (Refined)

### A) Depth & interaction tiers (pointer + keyboard parity)
- **D1:** inline controls (color/underline/ring)
- **D2:** cards/standard CTAs (`translateY(-2px)` + shadow step)
- **D3:** high-intent surfaces only (`translateY(-4px)` max, max 1–2 per viewport)

Rules:
- Hover and `:focus-visible` must communicate equivalent affordance
- If multiple D3 surfaces compete, demote extras to D2
- No bespoke component-level motion outside shared tokens

### B) Section transition rhythm
- Transition durations stay inside the motion map; no random timing values
- Section reveals use opacity + slight translate only
- Decision sections can use one subtle pulse-line state change (Muse motif alignment), but never continuous motion

### C) Trust micro-interactions (evidence-first)
- Review cards expose metadata (vehicle, issue, outcome, turnaround) on hover/focus via opacity only
- “No repairs begin until you approve the estimate” includes an inline “How approval works” disclosure (3 bullets max)
- Credential chips can reveal plain-language meaning on tap/focus

### D) Sticky CTA state machine (implementation contract)
States:
- `hidden` (hero top)
- `visible` (post-hero, standard browsing)
- `condensed` (keyboard open / constrained height)
- `retired` (footer/final CTA overlap zone)

Events:
- `heroExit`, `heroEnter`, `keyboardOpen`, `keyboardClose`, `footerEnter`, `footerExit`, `scrollUp`, `scrollDown`

This should be implemented as explicit state logic (not ad-hoc scroll listeners with conflicting class toggles).

---

## Implementation Tokens (Final)

```css
:root {
  --dur-fast: 120ms;
  --dur-base: 180ms;
  --dur-struct: 220ms;
  --dur-emph: 260ms;

  --ease-standard: cubic-bezier(.2,.7,.2,1);
  --ease-emphasis: cubic-bezier(.22,.8,.24,1);

  --lift-d1: translateY(-1px);
  --lift-d2: translateY(-2px);
  --lift-d3: translateY(-4px);

  --rail-height-mobile: 64px;
  --rail-safe-bottom: calc(10px + env(safe-area-inset-bottom));

  --focus-ring-light: 2px solid #14532d;
  --focus-ring-dark: 2px solid #bbf7d0;
}
```

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }

  .ui-lift, .ui-sticky-enter, .ui-sheet-transition { transform: none !important; }
}
```

---

## QA Checklist — Final Ship Gate (Interaction)

All must pass at: `360 / 390 / 430 / 768 / 1280` widths.

- [ ] Sticky rail works on all required templates and never blocks footer/final CTA/legal
- [ ] Keyboard-open rail behavior is usable and non-overlapping
- [ ] Header compression/restoration is smooth and preserves action cluster
- [ ] Decision-zone CTA emphasis and reading-zone de-emphasis are functioning
- [ ] Quick Diagnosis completes in <=3 steps and returns actionable output with prefilled routing
- [ ] Hover/focus-visible parity complete on all interactive controls
- [ ] D1/D2/D3 token usage is consistent; no custom outliers
- [ ] Reduced-motion mode preserves full task clarity without movement dependence
- [ ] CLS remains stable during sticky, disclosure, and sheet transitions

---

## Bottom Line
R3 interaction quality is achieved when motion, sticky behavior, and micro-interactions all serve one job: **help the customer choose the right next step quickly and confidently.**

If this system is implemented as specified, AutoTrek will behave like a premium 2026 decision platform—not a polished brochure.