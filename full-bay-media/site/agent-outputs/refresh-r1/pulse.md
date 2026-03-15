# Pulse — Refresh R1 Interaction Upgrade (2026 Pattern Spec)

## Goal
Define a modern interaction layer for the AutoTrek refresh using 2026-safe patterns:
- **Micro-motion with intent** (subtle, purposeful, never decorative noise)
- **Hover depth system** (clear affordance hierarchy)
- **Sticky CTA behavior** (persistent conversion path without occluding content)
- **Progressive disclosure** (lower cognitive load, faster scanning)
- **Accessibility parity** (keyboard, reduced motion, contrast, semantics)

---

## 1) 2026 Interaction Principles

1. **Meaning over motion**
   - Motion should clarify hierarchy, cause/effect, and click confidence.
   - No looping animations on core conversion elements.

2. **Depth as system, not one-offs**
   - Use 3 hover-depth levels globally (inline, component, promotional).
   - Keep z-depth, shadow, and translate values tokenized.

3. **State parity is mandatory**
   - Anything discoverable via `:hover` must be equally discoverable via `:focus-visible`.

4. **Progressive reveal beats content dumping**
   - Show summary-first content with clear “more” affordances.
   - Keep hidden content reachable with semantic controls (`details/summary`, buttons, tabs).

5. **Mobile CTA persistence without takeover**
   - Sticky CTA should remain present, but avoid covering final content, legal links, or footer actions.

---

## 2) Interaction Tokens (Shared Contract)

```css
:root {
  /* Motion */
  --dur-micro: 120ms;
  --dur-base: 180ms;
  --dur-emphasis: 260ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);

  /* Depth */
  --lift-1: translateY(-1px);
  --lift-2: translateY(-3px);
  --lift-3: translateY(-5px);

  --shadow-1: 0 2px 10px rgba(0,0,0,0.08);
  --shadow-2: 0 8px 24px rgba(0,0,0,0.12);
  --shadow-3: 0 14px 34px rgba(0,0,0,0.16);

  /* Focus */
  --focus-ring: 2px solid #16a34a;
  --focus-offset: 2px;
  --focus-ring-dark: 2px solid #bbf7d0;
}
```

**Depth mapping**
- **D1 (inline controls):** links, chips, minor toggles
- **D2 (interactive cards/buttons):** primary service cards, standard CTAs
- **D3 (high-intent promos):** hero CTA cluster, offer modules (use sparingly)

---

## 3) Micro-Motion Patterns (2026 baseline)

## 3.1 Press-response model (all tappable controls)
- Rest → Hover/Focus: subtle lift + shadow increase
- Press (`:active`): return to baseline (`translateY(0)`) with slight darken
- Release: smooth return using `--dur-micro`

```css
.ui-pressable {
  transition: transform var(--dur-base) var(--ease-standard),
              box-shadow var(--dur-base) var(--ease-standard),
              background-color var(--dur-micro) linear;
}
.ui-pressable:hover,
.ui-pressable:focus-visible {
  transform: var(--lift-2);
  box-shadow: var(--shadow-2);
}
.ui-pressable:active {
  transform: translateY(0);
}
```

## 3.2 Direction-aware hinting (optional desktop enhancement)
- If implemented, entry direction can bias highlight sheen/gradient.
- Must degrade gracefully with no JS dependency for usability.

## 3.3 Motion guardrails
- No movement > 8px on hover.
- No animation > 300ms for primary UI feedback.
- Avoid scale on text-heavy cards (causes re-raster blur/perceived instability).

---

## 4) Hover Depth System

## D1: Inline Elements
- Color/underline refinement only.
- No large shadow or translate.
- Keep visual noise low in dense text regions.

## D2: Cards + Standard CTAs
- `translateY(-3px)` max.
- Shadow upgrade one tier.
- Border or surface tint shift for contrast-safe emphasis.

## D3: Promotional Priority Surfaces
- Reserved for 1–2 elements per viewport max.
- Slightly stronger shadow/lift than D2, never “floating aggressively.”
- Must still pass contrast and focus-ring requirements.

---

## 5) Sticky CTA Behavior Spec (Mobile-first)

## Behavior
1. **Appear** after user scrolls past hero value prop.
2. **Hide/soften** when user is reading dense blocks (optional via scroll direction).
3. **Reinforce** near decision zones (pricing, trust badges, FAQ completion).
4. **Retire** near footer or contact form submit to avoid duplicate CTA competition.

## Layout + safety
- Respect safe area insets:
  - `padding-bottom: calc(12px + env(safe-area-inset-bottom));`
- Reserve document bottom space:
  - main content bottom padding >= sticky height + 16px buffer.
- Keep target size >= 44x44.

## Accessibility
- CTA is real `<a>` or `<button>`, not click container.
- Focus order remains logical; sticky bar should not trap tab flow.
- Include clear label (avoid vague “Continue”). Prefer intent labels like “Get My Cash Offer.”

---

## 6) Progressive Disclosure Model

## 6.1 Content layering
- **Layer 1:** headline + 1-line supporting value + single primary action.
- **Layer 2:** expandable details (process, eligibility, required docs).
- **Layer 3:** deep FAQs / legal specifics / edge-case clarifications.

## 6.2 Components
- Use `details/summary` for FAQ and process explainers.
- Use “Show more” only when it preserves context (avoid jumping to new page for minor detail).
- Keep expansion animation minimal (height + opacity), disabled under reduced motion.

## 6.3 Copy-interaction coupling
- Trigger text should declare hidden payload:
  - Good: “See what documents you’ll need (2 min read)”
  - Weak: “Learn more”

---

## 7) Accessibility Requirements (Non-negotiable)

1. **Focus-visible parity:** every hover affordance mirrored on keyboard focus.
2. **Contrast:** text/controls maintain WCAG ratios across states.
3. **Reduced motion:** preserve meaning via color/border/ring when transforms are disabled.
4. **Semantics first:** links navigate, buttons act, summary expands.
5. **Input modality resilience:** no interaction should require precise cursor hover.
6. **Screen reader clarity:** expanded/collapsed states announced via native semantics or ARIA state.

Reduced-motion pattern:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
  .ui-pressable,
  .ui-card {
    transform: none !important;
  }
}
```

---

## 8) QA Acceptance Checklist (R1)

- [ ] D1/D2/D3 depth tiers applied consistently (no ad-hoc hover behavior).
- [ ] Hover and `:focus-visible` states are equivalent in meaning.
- [ ] Sticky CTA respects safe-area + does not occlude terminal content.
- [ ] Sticky CTA exits/de-emphasizes near footer or final conversion surface.
- [ ] Progressive disclosure uses semantic controls and clear trigger copy.
- [ ] Reduced-motion mode removes transforms but preserves interaction feedback.
- [ ] All interactive targets are mobile-touch safe (>= 44x44).
- [ ] No auto-playing or looping decorative motion in conversion-critical zones.

---

## Implementation Note for the team
Build this as reusable primitives (`.ui-pressable`, `.ui-card-depth-1/2/3`, `.sticky-cta`, `.disclosure`) rather than page-specific CSS. That keeps interaction quality coherent as new sections ship.