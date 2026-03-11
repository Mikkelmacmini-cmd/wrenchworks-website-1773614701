# AutoTrek Service Center — Interaction & Motion Spec (Pulse)

## Motion Principles (Global)
- **Tone:** Subtle, confident, premium. No playful bounces or aggressive parallax.
- **Speed:** Fast enough to feel responsive, slow enough to feel intentional.
- **Durations:**
  - Micro interactions: `120–180ms`
  - UI reveals/transitions: `220–320ms`
  - Section entrance (on scroll): `350–500ms`
- **Easing:** Prefer `ease-out` for entrances and hover; `ease-in-out` for state changes.
- **Distance:** Keep movement minimal (`6–24px`) to avoid gimmicky motion.
- **Accessibility:** Respect `prefers-reduced-motion: reduce` by removing transforms and using instant state changes + opacity-only where needed.
- **Performance:** Animate `opacity` and `transform` only. Avoid layout-triggering properties.

---

## 1) Hero + Primary CTA

### Desktop Behavior
- Hero content fades up on first load in a stagger:
  1. Eyebrow/location line
  2. Headline
  3. Supporting copy
  4. Primary CTA + secondary CTA
- **Entrance:** `opacity 0 → 1`, `translateY(16px) → 0`, `420ms`, `ease-out`, stagger `60ms`.
- Background image (if present) gets a very mild scale settle: `scale(1.02) → 1` over `900ms`.

### CTA Button Interaction
- Primary CTA default: solid brand red, white text.
- On hover:
  - Button lifts `translateY(-2px)`
  - Shadow deepens slightly
  - Background shifts to slightly darker red
  - Duration `150ms`
- On active/press:
  - Returns to `translateY(0)`
  - Shadow tightens
  - Duration `90ms`
- Optional micro-icon (phone/calendar): nudge `translateX(2px)` on hover.

### Mobile Behavior
- Hero animation simplified to one grouped fade-up (`300ms`) for perceived speed.
- CTA is full-width or near full-width; touch feedback uses subtle scale (`0.98`) on tap.

### Copy/Conversion Notes
- Above-the-fold emphasis: **Call-first** fallback while booking URL is TBD.
- Keep phone number visible and tappable in hero block.

---

## 2) Services Grid (Priority Offerings)

### Card Entrance (Scroll Reveal)
- Trigger when section reaches ~20% viewport from bottom.
- Cards reveal in sequence by row, stagger `40ms`.
- **Animation:** `opacity 0 → 1`, `translateY(14px) → 0`, `380ms`, `ease-out`.

### Card Hover (Desktop)
- Card lifts `-4px`, border/accent color intensifies, shadow increases softly.
- Service icon (if used) scales `1 → 1.04`.
- Duration `160–200ms`.

### Card Tap (Mobile)
- No hover dependency.
- Touch feedback: brief background tint + `scale(0.995)` then settle.
- Expanded state (if accordion style): smooth height transition capped at `220ms`.

### Information Density
- Keep each card concise (service title + 1-line descriptor).
- Avoid animated carousels here; grid should feel stable and easy to scan.

---

## 3) Trust Badges (Warranty, NAPA, Local Trust)

### Visual Priority
- Place near hero lower fold and again near contact/CTA area.
- Use restrained accent treatment (outline/chip/pill), not flashy counters.

### Motion
- On enter: badges fade in with slight rise (`10px`) over `300ms`, stagger `50ms`.
- On hover: soft glow or border tint shift only (`140ms`).
- If review score snippet is displayed, count-up animation should be skipped (or extremely quick) to avoid gimmick feel.

### Microcopy Dynamics
- Warranty badge should be static and legible: **“36-Month / 36,000-Mile Warranty.”**
- NAPA badge can include subtle checkmark draw/fade effect once on load (`250ms`) then remain static.

---

## 4) Map + Contact Section

### Layout Interaction
- Two-column desktop (map + contact details/form), stacked on mobile.
- Section reveal: fade in both columns with slight opposing offset:
  - Map: `translateX(-12px) → 0`
  - Contact panel: `translateX(12px) → 0`
  - `420ms`, `ease-out`

### Map Behavior
- Keep embedded map static by default (no autoplay zoom/pan).
- On user interaction (tap/click), allow full map controls.
- Add “Open in Maps” link with hover underline animation (`120ms`).

### Contact Actions
- Phone and address rows are interactive targets:
  - Hover: icon tint + text color deepen
  - Tap: quick pressed state for feedback
- If form exists:
  - Field focus: border accent transition `120ms`
  - Validation errors: fade/slide in `150ms`, no shaking animations.

---

## 5) Sticky Call Bar (Mobile Only)

### Trigger Rules
- Appears after user scrolls past hero CTA OR after ~500px scroll.
- Hidden at top of page to avoid duplication with hero CTA.
- Auto-hides when footer/contact CTA enters viewport (to prevent overlap).

### Motion
- Enter from bottom: `translateY(100%) → 0`, `260ms`, `ease-out`.
- Exit: `translateY(0) → 100%`, `200ms`, `ease-in`.
- Include safe-area padding for iOS (`env(safe-area-inset-bottom)`).

### Content
- Primary action: **Call (303) 328-3356**.
- Secondary (optional): “Get Directions.”
- Keep bar height compact (`56–64px`) and text high-contrast.

### Interaction
- Tap feedback: subtle scale/tint only.
- No bouncing/pulsing animations; urgency should come from clarity, not motion.

---

## Cross-Section Interaction System

### Scroll Reveal Policy
- Animate each section once (`once: true`) to avoid repetitive motion.
- Disable reveal animation on very small devices/low-power mode if performance drops.

### Navigation/Anchor Jumps
- Smooth scroll for internal links (`300–450ms`), offset for sticky header.
- Active nav state transitions with simple color/underline animation (`120ms`).

### Loading States
- Skeletons or shimmer should be minimal and neutral.
- If assets load late, use fade-in placeholders to avoid layout jump.

### Reduced Motion Specification
When `prefers-reduced-motion: reduce`:
- Remove translate/scale effects.
- Keep only quick opacity transitions (`80–120ms`) or instant changes.
- Disable smooth scrolling and parallax/settle effects.

---

## Suggested Implementation Tokens
- `--motion-fast: 150ms`
- `--motion-base: 240ms`
- `--motion-slow: 420ms`
- `--ease-standard: cubic-bezier(0.2, 0.0, 0.2, 1)`
- `--ease-out: cubic-bezier(0.0, 0.0, 0.2, 1)`
- `--ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1)`
- `--lift-sm: translateY(-2px)`
- `--lift-md: translateY(-4px)`

---

## QA Checklist (Motion)
- [ ] Motion feels premium/subtle, not playful.
- [ ] All interactive elements have visible hover/focus/pressed states.
- [ ] Sticky mobile call bar never overlaps footer CTAs.
- [ ] No janky animations on mid-range mobile devices.
- [ ] `prefers-reduced-motion` is fully respected.
- [ ] Core conversion actions remain obvious without animation.
