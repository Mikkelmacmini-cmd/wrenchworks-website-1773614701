# Pulse — Round 1 Interaction Spec Upgrade (Accessibility-Safe)

## Objective
Harden AutoTrek interaction behavior so all interactive states are:
- Keyboard-visible (`:focus-visible` parity with hover)
- Contrast-safe (WCAG-friendly state deltas)
- Motion-safe (`prefers-reduced-motion` respected)
- Conversion-safe (no noisy animations that distract from CTA intent)

---

## 1) State Model (applies to all interactive components)
Each component must define these states explicitly:
1. `rest`
2. `hover` (pointer-capable devices only)
3. `focus-visible` (keyboard and assistive tech users)
4. `active` (press/tap)
5. `disabled` (if supported)

**Rule:** no hover-only affordance may communicate critical meaning.

---

## 2) Contrast-Safe Interaction Tokens
Use semantic state tokens rather than ad-hoc color picks.

```css
:root {
  --ring-width: 2px;
  --ring-offset: 2px;
  --motion-fast: 140ms;
  --motion-base: 220ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);

  /* Example semantic tokens */
  --focus-ring-brand: #166534;   /* dark green, visible on light surfaces */
  --focus-ring-on-dark: #bbf7d0; /* light ring for dark backgrounds */
  --border-hover: #86efac;
  --border-focus: #16a34a;
  --surface-hover: #f0fdf4;
  --text-high: #111827;
  --text-on-dark: #ffffff;
}
```

### Contrast requirements
- Body text and CTA labels must remain >= **4.5:1** in all states.
- Large text (18px+ regular / 14px+ bold) must remain >= **3:1**.
- Focus indicator must be clearly visible against adjacent colors (non-color-only UI cue + ring thickness).
- Disabled state cannot rely on opacity alone if meaning is important; pair with cursor + semantics (`aria-disabled`, `disabled`).

---

## 3) Component-by-Component Interaction Spec

## 3.1 Links (inline + standalone)
**Rest:** underlined or strong affordance.

**Hover:**
- Color shifts to stronger contrast tone.
- Underline thickness/offset increases subtly.
- `transition: color var(--motion-fast), text-decoration-color var(--motion-fast);`

**Focus-visible:**
- Add `outline: var(--ring-width) solid var(--focus-ring-brand);`
- Add `outline-offset: var(--ring-offset);`
- Underline remains visible.

**Active:** slight darkening, no layout shift.

---

## 3.2 Buttons / CTAs (primary red, secondary green/outline)
**Rest:** strong fill/outline contrast with readable label.

**Hover:**
- Background darkens one step.
- Optional micro-lift `translateY(-1px)`.
- Shadow modestly increases.

**Focus-visible:**
- 2px ring + offset always shown.
- On dark surfaces, switch to `--focus-ring-on-dark`.
- Must be visible even when button is already high-contrast.

**Active:**
- `translateY(0)` and slight color compression to indicate press.

**Disabled:**
- No lift or shadow animation.
- Lower emphasis + `cursor: not-allowed`.
- Keep label readable (avoid over-fading text).

---

## 3.3 Interactive Cards (service cards)
**Rest:** neutral border + subtle shadow.

**Hover/focus-visible (same intent):**
- Border color shifts to `--border-focus` or `--border-hover`.
- Shadow increases.
- Card lift max `-4px`.
- Media scale max `1.03`.

**Focus-visible add-on:**
- Card-level ring in addition to border shift.

**Reduced-motion override:**
- Keep border/shadow contrast changes.
- Disable translate and scale.

---

## 3.4 Non-interactive media cards
- No pointer cursor.
- No strong hover behaviors that imply clickability.
- Optional gentle shadow-only polish.

---

## 3.5 FAQ `<summary>` rows
**Hover:** slight text/surface contrast increase.

**Focus-visible:** explicit ring around summary control.

**Open/close:** keep native details behavior; avoid complex scripted motion.

---

## 3.6 Sticky mobile CTA
**Rest:** fixed bottom, high-contrast label, safe-area aware.

**Focus-visible:** ring visible above surrounding surface.

**Active:** immediate pressed feedback.

**Layout safety:** page bottom padding must account for bar height + safe area so content is never occluded.

---

## 4) Reduced-Motion Requirements (Mandatory)
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }

  .card-lift,
  .interactive-card,
  .cta-pill {
    transform: none !important;
  }

  .interactive-card img {
    transform: none !important;
  }
}
```

**Rule:** preserve state meaning (contrast/ring/border changes) even when motion is removed.

---

## 5) Keyboard + Assistive Tech Parity
- All clickable cards should be actual links/buttons (not click-divs).
- If card uses link wrapper, ensure one tabbable target per card.
- `:focus-visible` styling must match hover intent and remain distinct.
- Use semantic HTML first (`button`, `a`, `summary`, `details`) before ARIA workarounds.

---

## 6) QA Acceptance Checklist (Round 1)
- [ ] Every hover style has `:focus-visible` equivalent.
- [ ] Focus ring remains visible on light and dark surfaces.
- [ ] CTA labels keep minimum contrast in rest/hover/active/disabled states.
- [ ] Reduced-motion mode removes transform/scale movement but keeps clear state feedback.
- [ ] No interactive target under 44x44 on mobile.
- [ ] Sticky CTA does not cover footer/final content.
- [ ] Non-clickable cards do not mimic clickable hover states.

---

## 7) Implementation Notes (Tailwind-friendly)
Recommended reusable classes:
- `.focus-ring-brand` → ring + offset for light surfaces
- `.focus-ring-inverse` → ring for dark surfaces
- `.interactive-card` → shared card transitions + focus-visible parity
- `.cta-pill` → consistent button state transitions
- `.motion-safe-state` → contains state transitions disabled in reduced-motion

This keeps state logic centralized and prevents one-off regressions.
