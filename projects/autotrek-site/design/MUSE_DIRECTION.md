# AutoTrek Service Center — Visual Direction (Muse)

## 1) Creative North Star
**Brand intent:** _Clean + premium_, with practical trust.

AutoTrek should feel like a high-standard local service center: modern, disciplined, and transparent. The site should communicate confidence without luxury excess—premium through clarity, spacing, consistency, and restrained visual effects.

**Three words:** **Precise. Dependable. Modern.**

---

## 2) Typography Direction

### Primary Pairing (recommended)
- **Headlines:** `Montserrat` (600/700)
- **Body/UI:** `Inter` (400/500/600)

Why this works:
- Montserrat gives strong geometric confidence for service-category headlines and key selling points.
- Inter keeps paragraphs, lists, and forms highly legible and neutral.
- Together they feel contemporary, clean, and service-professional (not playful, not overly corporate).

### Backup Pairing
- **Headlines:** `Poppins` (600/700)
- **Body/UI:** `Source Sans 3` (400/600)

### Type Scale + Usage
- **H1:** 44–52px desktop / 34–40px mobile, weight 700, tight line-height (1.1–1.2)
- **H2:** 32–40px / 28–32px, weight 700
- **H3:** 24–28px / 22–24px, weight 600
- **Body L:** 18–20px for hero/lead paragraphs
- **Body:** 16–18px default
- **Small/meta:** 13–14px (hours, disclaimers, label text)

### Typographic Rules
- Keep line length around **55–75 characters** for body text.
- Avoid all-caps in long headings; use title case for a premium feel.
- Use weight contrast (600 vs 400) rather than too many font sizes.
- Reserve red for meaningful emphasis (alerts, active CTA), not decorative text runs.

---

## 3) Color System (Red / Green / White)

Because red+green can feel seasonal if overused together, the system should be mostly neutral-white with one primary action color at a time.

### Core Palette (proposed)
- **AutoTrek Red (Primary Action):** `#C62828`
- **AutoTrek Green (Trust/Success Accent):** `#1F7A4C`
- **White:** `#FFFFFF`
- **Ink (near-black for text):** `#111827`
- **Soft Gray BG:** `#F6F7F8`
- **Border Gray:** `#E5E7EB`

### Usage Ratios
- **White/neutral surfaces:** ~75–85%
- **Red usage:** ~10–15% (primary CTA, high-value highlights)
- **Green usage:** ~5–10% (trust badges, warranty, NAPA affiliation, success states)

### Practical Rules
1. **Don’t place saturated red and saturated green adjacent at equal visual weight.**
2. **Choose one dominant accent per section** (red _or_ green) and keep the other secondary.
3. Use green for reassurance cues:
   - “36 Months / 36,000 Miles Warranty”
   - NAPA Service Center indicators
   - Confirmation/success UI states
4. Use red for conversion cues:
   - “Schedule an Appointment” buttons
   - Sticky call button on mobile
   - Priority service highlights
5. Body text should remain dark ink on white for readability.

### Accessibility Targets
- Minimum **WCAG AA** contrast for all body text.
- White text on red/green buttons must hit contrast thresholds (test exact token shades before launch).
- Avoid red-only signaling for errors; pair with icon + text.

---

## 4) Layout System

### Grid + Spacing
- **Desktop container:** 1200–1280px max width
- **Grid:** 12-column desktop, 6-column tablet, 4-column mobile
- **Vertical rhythm:** 8px base spacing system
- **Section spacing:** 72–112px desktop, 56–80px tablet, 40–56px mobile

### Composition Principles
- Use generous whitespace and clear section boundaries.
- Alternate section backgrounds subtly (white / soft gray) for scanability.
- Keep each section focused on a single conversion intent:
  - Trust
n  - Services
  - Proof
  - Action

### Suggested Page Structure
1. **Header + utility strip** (hours, phone, location)
2. **Hero** (clear value proposition + primary CTA + secondary call CTA)
3. **Trust bar** (NAPA, warranty, local area mention)
4. **Priority services grid**
5. **Why choose us / process steps**
6. **Reviews block** (link to Google reviews)
7. **Service areas** (Littleton + nearby cities)
8. **Final CTA section**
9. **Footer** (full NAP, hours, quick links)

### Motion Guidance
- Minimal motion; micro-animations only (150–250ms ease-out).
- Avoid parallax/heavy effects; premium here means controlled and fast.

---

## 5) Component Style Guidance

### Buttons
- **Primary CTA:** solid red background, white text, medium radius (8–10px), semibold text.
- **Secondary CTA:** white or soft-gray fill with red or ink outline/text.
- **Tertiary link CTA:** text link with subtle arrow icon.

### Cards (services, features)
- White background, 1px subtle gray border, 12–16px radius.
- Light shadow only on hover/focus (not always-on heavy shadows).
- Include icon + short title + one-sentence descriptor.

### Trust Badges
- Use green accents for warranty and certifications.
- Keep badge styling consistent: soft green tint background + dark text.

### Navigation
- Clean top nav with high legibility and clear CTA on right.
- Sticky header on scroll (reduced height state).
- On mobile: persistent bottom action bar with **Call** + **Schedule**.

### Forms
- Large tap targets, clear labels above fields, optional helper text.
- Avoid dense form walls; use 1–2 column layout max.
- Confirmation state should be explicit and reassuring.

### Service List Presentation
- Prioritize top 8–10 services on homepage; full catalog on dedicated services page.
- Group long-tail services into logical categories:
  - Maintenance
  - Diagnostics & Lights
  - Drivetrain/Transmission
  - Specialty (EV/Hybrid, 4X4, Foreign/Domestic)

---

## 6) Brand Tone Translation (Clean + Premium)

### Voice Characteristics
- Direct, calm, competent.
- No hype language, no gimmicky urgency.
- Emphasize clarity, reliability, and workmanship.

### Messaging Style
- Prefer: “Accurate diagnostics. Transparent recommendations. Quality repairs.”
- Avoid: exaggerated claims (“best ever,” “unbeatable”) unless substantiated.
- Keep service copy specific and practical.

### Example Headline Directions
- “Professional Auto Repair in Littleton, CO”
- “Reliable Service. Transparent Recommendations.”
- “Dealer-Level Care Without Dealer Guesswork.”

---

## 7) Logo-on-Dark Improvements (Important)

Given the provided logo and brand palette, logo handling on dark backgrounds should be standardized to avoid muddy contrast.

### Recommendations
1. **Create two production logo assets:**
   - Primary full-color logo (for white/light backgrounds)
   - Reversed/knockout logo (for dark backgrounds)
2. **Establish minimum clear space** equal to at least the cap height of the logotype.
3. **Do not place full-color logo directly on busy/dark photography** without a backing plate.
4. For dark hero areas, use one of:
   - Solid dark overlay + reversed white logo
   - Subtle frosted/solid white badge container behind full-color logo
5. **Avoid pure black backgrounds** where red elements lose vibrancy; prefer deep charcoal/navy-black.
6. Export SVG + @2x PNG variants for web consistency.

### Dark Background Safety Specs
- Minimum contrast around logo edges should remain clearly separable at mobile size.
- Minimum rendered width target: **140px mobile**, **180px desktop** for header usage.
- Test visibility at 50% brightness and outdoors/sunlight conditions on mobile.

---

## 8) Implementation Priorities (Design-to-Build)

1. Lock color tokens and type scale in design system first.
2. Build reusable components (buttons, cards, badges, form fields, review block).
3. Design homepage + one service template + contact/schedule page.
4. Validate contrast and mobile tap targets before visual polish.
5. Finalize logo dark-mode assets prior to hero finalization.

---

## 9) Quick QA Checklist (Visual)
- [ ] Feels mostly white/clean, not color-heavy
- [ ] Red used for conversion, green used for trust/success
- [ ] No red+green equal-weight collisions
- [ ] Headlines feel premium and restrained
- [ ] Cards/forms/nav are consistent in radius, border, and shadow language
- [ ] Logo is readable on both light and dark surfaces
- [ ] Mobile CTAs are obvious and thumb-friendly

---

Prepared by Muse (Design Direction)
