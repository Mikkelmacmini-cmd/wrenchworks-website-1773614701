# Round 1 — AutoTrek Visual Hierarchy Upgrades (Conversion + Readability Safe)

## Objective
Sharpen conversion clarity by making one action dominant at every stage, while preventing readability failures (especially low-contrast text on tinted/photographic backgrounds).

---

## 1) Visual Hierarchy Rules (Non-Negotiable)

1. **One dominant CTA per viewport**
   - Primary: `Schedule Appointment` (or `Call Now` on mobile)
   - Any secondary action must be visually quieter (outline/text only).

2. **Section purpose must be singular**
   - Each section answers only one question:
     - What do you fix?
     - Why trust you?
     - How do I book?
   - If a section answers multiple questions, split or trim it.

3. **Weight drops as users scroll**
   - Hero = highest visual intensity
   - Trust strip = compact/high-clarity
   - Services/FAQs = clean, scan-first
   - Footer = low emphasis

4. **No decorative styles that compete with CTAs**
   - Avoid glowing shadows, neon borders, gradients, or saturated backgrounds behind secondary elements.

---

## 2) Readability Failure Patterns to Avoid

Avoid these patterns across all templates/components:

- Light gray text on white or off-white cards.
- Colored text on tinted backgrounds without measured contrast.
- Body text over photos/video without a solid overlay layer.
- Long all-caps paragraphs or low letter-spacing in small text.
- Thin font weights (`300`) for body copy.
- Text over patterned/texture backgrounds.

**Rule:** If content is important for trust or conversion, it must sit on a stable, high-contrast surface.

---

## 3) Contrast-Safe Design Tokens (Recommended)

Use these as the baseline palette for UI text/surfaces.

```css
:root {
  /* Core surfaces */
  --surface-page: #F8FAFC;        /* page background */
  --surface-card: #FFFFFF;        /* cards/modals */
  --surface-inverse: #0F172A;     /* dark sections/footer */

  /* Core text */
  --text-primary: #0F172A;        /* on light surfaces */
  --text-secondary: #334155;      /* supporting copy */
  --text-muted: #475569;          /* metadata only, not core copy */
  --text-inverse: #F8FAFC;        /* on dark surfaces */

  /* Brand + action */
  --brand-primary: #B91C1C;       /* booking CTA */
  --brand-primary-hover: #991B1B;
  --brand-accent: #166534;        /* restrained trust accent */

  /* Utility */
  --border-default: #CBD5E1;
  --focus-ring: #2563EB;
  --overlay-hero: rgba(15, 23, 42, 0.60);
}
```

### Minimum contrast targets
- **Body text:** WCAG AA 4.5:1 minimum
- **Large text (24px+ or 18.66px bold):** 3:1 minimum
- **Interactive UI (button labels, nav, links):** 4.5:1 target
- Prefer **AA+ headroom** (5.5:1+) for critical trust/conversion copy.

---

## 4) Typography + Emphasis Guardrails

- Body minimum: **16px / 1.6 line-height**
- Primary heading weight: **700**
- Body weight: **400–500** (never 300)
- Paragraph width: **60–75 characters**
- Limit emphasis styles per section:
  - max 1 bold color accent
  - max 1 badge style
  - no simultaneous heavy shadow + gradient + border accents

This prevents “everything shouting” and preserves scan speed.

---

## 5) Section-Level Conversion Hierarchy (Homepage)

1. **Hero**: clear promise + one dominant CTA + short trust micro-row
2. **Trust strip**: warranty, years, certifications, review rating/count
3. **Service selection**: problem-first cards (diagnostics, brakes, AC, etc.)
4. **Why choose us / process**: transparent steps + communication promise
5. **Reviews**: 2–3 high-credibility snippets + link to full reviews
6. **FAQs**: objection handling
7. **Final CTA band**: high contrast, no competing links

---

## 6) Component Safety Specs

### Buttons
- Primary uses `--brand-primary` with white text only.
- Secondary/tertiary must not match primary visual intensity.
- Keep button label contrast >= 4.5:1.

### Cards
- Default card surface: `--surface-card`.
- Body copy uses `--text-primary` / `--text-secondary` only.
- If card has tinted background, re-validate all text contrast.

### Hero overlays
- If text overlays image, use `--overlay-hero` or darker.
- Never place long-form copy directly on raw photography.

### Links
- Link color must be distinguishable from body text without relying only on color (underline or strong hover/focus state).

---

## 7) QA Acceptance Checks (Round 1)

Before merge/publish:

- [ ] One dominant CTA per section and per mobile viewport
- [ ] No low-contrast text in hero/cards/footer
- [ ] Contrast spot-checks on all key templates (hero, services, reviews, FAQ, CTA band)
- [ ] No decorative styles that outshine primary CTA
- [ ] Typography matches minimum size/weight rules
- [ ] Keyboard focus ring visible on all controls

---

## 8) Outcome Expected from This Pass

- Faster scanning and clearer decision path to booking
- Stronger trust recognition in first 5–10 seconds
- Reduced readability risk across devices/lighting conditions
- Lower chance of accessibility regressions blocking conversion
