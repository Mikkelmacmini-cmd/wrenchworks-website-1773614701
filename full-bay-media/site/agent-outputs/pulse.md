# AutoTrek UI Interaction + Motion Spec

## Scope
Define production-ready interaction behavior for:
- Hover/focus states (links, buttons, chips, cards, details/summary)
- Card transitions (service cards + media cards)
- CTA behavior (primary/secondary CTAs, sticky mobile CTA)
- Mobile nav behavior (including current no-menu state and future expandable nav)
- Reduced-motion fallback

This spec is aligned to the existing visual language in `src/app/page.tsx`, `src/app/services/page.tsx`, and `src/app/globals.css`.

---

## 1) Motion Principles (AutoTrek)
1. **Fast, confident, practical**: interactions should feel responsive (<250ms), not decorative.
2. **Lift + clarity over flourish**: use subtle elevation/contrast shifts, not large movement.
3. **Accessibility first**: keyboard parity with hover, clear visible focus, and reduced-motion support.
4. **Conversion-aware**: CTA behavior should guide action without feeling aggressive.

---

## 2) Motion Tokens
Use consistent timing/easing site-wide.

### Durations
- `--motion-fast: 140ms` (hover color/opacity)
- `--motion-base: 220ms` (card lift, shadow, border, icon nudge)
- `--motion-slow: 320ms` (hero media scale/parallax-like shifts)

### Easing
- `--ease-standard: cubic-bezier(0.2, 0, 0, 1)`
- `--ease-emphasized: cubic-bezier(0.2, 0.8, 0.2, 1)`

### Elevation (shadow)
- Rest: `shadow-sm`
- Hover/focus-visible: enhanced shadow with slight green tint for brand continuity

### Transform limits
- Max translateY for interactive cards: `-4px`
- Max scale for card media: `1.03`
- Never combine large translate + large scale on same element.

---

## 3) Hover + Focus States

## 3.1 Links (text links with underline)
Applies to: “Get Directions”, “See our full list of services”, back link on services page.

**Rest**
- Underline visible or underline-offset style retained.

**Hover/Pointer**
- Increase text contrast (or darken green tone).
- Underline thickness increases subtly.
- Transition: color + text-decoration over `140ms`.

**Focus-visible (keyboard)**
- Add a 2px focus ring (`ring-2 ring-offset-2`) with high contrast.
- Keep underline visible.
- No reliance on color-only change.

---

## 3.2 Buttons / Pill CTAs
Applies to red and green pill buttons, hero secondary outlined CTA, sticky mobile CTA.

**Rest**
- Strong fill contrast, rounded-full.

**Hover**
- Background darkens one step (already present for most CTAs).
- Add micro lift: `translateY(-1px)`.
- Shadow strengthens slightly.
- Transition: `background-color, transform, box-shadow` over `220ms`.

**Active / Press**
- Return to `translateY(0)` quickly (`80–120ms`) to emulate press.

**Focus-visible**
- 2px ring + 2px offset, ring color based on CTA palette:
  - Red CTA: red ring
  - Green CTA: green ring
  - Dark/outline CTA: neutral ring

**Disabled (if introduced later)**
- 50–60% opacity, no lift/shadow motion, cursor not-allowed.

---

## 3.3 Chips / Badges (hero trust chips, service area pills)

**Hover**
- Minimal only: slight background opacity increase.
- No vertical movement for static informational chips.

**Focus-visible** (if interactive)
- Ring treatment identical to links/buttons.

---

## 3.4 FAQ `<summary>` rows

**Hover**
- Summary text darkens slightly.

**Open/close behavior**
- Keep native details behavior; do not force custom JS animation unless needed.
- If animated later, use max-height/opacity combo capped at `220ms`, no bounce.

**Focus-visible**
- Visible ring around summary trigger.

---

## 4) Card Transition Spec

## 4.1 Service cards (homepage + services page)
Applies to cards linking to `/services/[slug]`.

**Rest**
- Border: neutral gray
- Shadow: `shadow-sm`
- Media at `scale(1)`

**Hover / focus-visible on card container**
- Card lifts to `translateY(-4px)`
- Shadow deepens (green-tinted allowed, as current homepage style)
- Border shifts slightly toward brand green tint
- Media image scales to `1.03`
- Title color darkens or shifts subtly toward brand contrast tone

**Timing**
- Container transform/shadow/border: `220ms var(--ease-standard)`
- Image scale: `220–300ms var(--ease-standard)`

**Exit**
- Return smoothly to rest in same duration (no delayed snap-back).

---

## 4.2 Non-link media cards (“Inside AutoTrek”)

**Behavior**
- Optional subtle hover polish only:
  - Shadow increase
  - Tiny image scale (`1.01–1.02`)
- No lift required unless card becomes clickable.

**Reason**
Keeps focus on service cards/CTAs as primary conversion affordances.

---

## 5) CTA Behavior Spec

## 5.1 CTA hierarchy
1. **Primary**: “Schedule an Appointment” (red)
2. **Secondary**: “View Services” (outline/white-on-hero)
3. **Supportive**: “Talk to Our Team” (green), “Read Google Reviews”, text links

At any viewport, there should be one visually dominant primary action in immediate view.

---

## 5.2 Hero CTA group behavior

**Desktop/tablet**
- Keep side-by-side when space allows.
- On hover of one CTA, the other remains stable (no sibling shrink/fade).
- Primary CTA has stronger shadow/elevation response than secondary.

**Small mobile widths**
- Stack CTAs if horizontal space is constrained.
- Maintain minimum tap target: 44px height.

---

## 5.3 Sticky mobile CTA (bottom bar)

Current: fixed bottom “Call Now”.

**Entrance**
- On initial page load: quick fade + upward slide (`8px -> 0`, `180ms`).
- On scroll down: remain visible (high conversion intent).

**Occlusion handling**
- Add bottom padding to main content to prevent overlap with final section content.
- Respect safe-area inset on iOS:
  - `padding-bottom: max(12px, env(safe-area-inset-bottom))` for bar internals.

**Interaction**
- Hover (on capable devices): darken + tiny lift.
- Active tap: no delay, immediate pressed feedback.
- Focus-visible: high-contrast ring.

---

## 5.4 CTA urgency without motion spam
Avoid pulsing/infinite bounce on CTAs by default.
If emphasis is needed for campaigns, use one-time attention cue on first paint only (<= 700ms total), then stop.

---

## 6) Mobile Nav Behavior

There is currently no expandable mobile nav menu (logo + CTA header, plus sticky bottom CTA).
This spec covers both **current behavior** and **future expandable nav**.

## 6.1 Current state (no menu)
- Header remains static at top.
- Primary action remains accessible via top CTA and sticky bottom CTA.
- No hide-on-scroll behavior required.

## 6.2 Future expandable mobile menu (if added)

**Open/close trigger**
- Tap hamburger icon toggles menu panel.
- Icon transitions to close state over `140ms`.

**Panel animation**
- Use opacity + translateY (`-8px -> 0`) over `180–220ms`.
- Do not animate height from 0 to auto if avoidable (layout jank risk).

**Backdrop**
- Optional dim backdrop `rgba(17,24,39,0.35)` fade-in `140ms`.

**Interaction rules**
- Trap focus while menu open.
- Escape closes menu.
- Tap backdrop closes menu.
- Body scroll locked while open.

**Menu items**
- 44px minimum touch targets.
- Hover/focus states mirror link pattern.

---

## 7) Reduced-Motion Fallback (Required)

Implement using:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

Then preserve semantic state changes without movement:
- Cards: no lift/scale; keep border/shadow contrast shift only.
- CTAs: no translate; keep color/contrast change.
- Sticky bar: no slide-in; appear statically.
- Any future nav panel: instant show/hide (or ultra-short fade only).

No autoplaying decorative animations when reduced-motion is active.

---

## 8) Accessibility + QA Acceptance Criteria

1. **Keyboard parity**: every hover affordance has an equivalent `:focus-visible` state.
2. **Focus visibility**: focus ring is always perceptible against light and dark backgrounds.
3. **Target size**: interactive controls >= 44x44 CSS px on mobile.
4. **No CLS from motion**: interactions must not shift surrounding layout.
5. **Performance**: animate `transform` and `opacity` where possible; avoid expensive layout-affecting properties.
6. **Reduced motion**: verify behavior manually with OS reduced-motion turned on.
7. **Touch behavior**: no hover-only critical affordance on touch devices.

---

## 9) Suggested Implementation Notes (Tailwind-friendly)
- Promote reusable utility classes:
  - `.interactive-card`
  - `.cta-pill`
  - `.focus-ring-brand`
  - `.motion-reduce-safe`
- Replace one-off `hover:*` with combined `hover:` + `focus-visible:` patterns.
- Keep current `.card-lift` and extend it to include focus-visible:
  - `.card-lift:hover, .card-lift:focus-visible { ... }`

---

## 10) Priority Rollout
1. **P0**: focus-visible consistency + reduced-motion media query.
2. **P1**: unify card transitions across homepage/services page.
3. **P1**: tighten CTA interaction states (hover/active/focus).
4. **P2**: optional polish for non-link media cards.
5. **P2**: future expandable mobile nav animation rules when nav is introduced.
