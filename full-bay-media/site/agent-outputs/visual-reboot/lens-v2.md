# AutoTrek Visual Reboot v2 — Bold New Art Direction System

**Mandate:** full visual reset from prior direction. This is a new language, not an iteration.
**Brand posture:** premium-performance garage meets modern editorial design. Confident, technical, high-contrast, unmistakably local.

---

## 1) Core Creative Thesis

AutoTrek should look like the **best-run independent performance service brand in Denver metro**, not a generic neighborhood shop.

- **Tone:** precise, assertive, trustworthy, human
- **Vibe:** motorsport discipline + clean industrial minimalism
- **Emotional promise:** “Your vehicle is handled by experts who run a tighter operation than dealerships.”

Design should emphasize:
1. **Command** (strong typography, bold contrast)
2. **Clarity** (clean hierarchy, fast scanning)
3. **Credibility** (real process visuals, measured data cues)

---

## 2) Visual System: Color Architecture

### Primary Palette (new)
- **Onyx Grid** `#0B0D12` — primary background / hero shells
- **Steel Slate** `#171B23` — secondary surfaces
- **Signal White** `#F5F7FA` — high-contrast text on dark
- **Machined Silver** `#A9B2C3` — subdued copy / UI borders
- **Ignition Orange** `#FF5A1F` — primary CTA + conversion moments
- **Voltage Cyan** `#00D1FF` — technical accents, data visuals, interactive highlights

### Supporting Semantic Colors
- **Success / done right:** `#20C07A`
- **Warning / urgent service:** `#FFB020`
- **Error / critical:** `#FF4D4F`

### Usage Ratios
- 65% dark neutrals (Onyx/Steel)
- 25% light neutrals (Signal/Machined)
- 10% accents (Orange/Cyan combined)

### Rules
- Orange = action and booking only (don’t dilute).
- Cyan = information, process, technical validation.
- Never place Orange and Cyan in equal visual weight on the same component; pick one primary accent per component.

---

## 3) Typography Pairings

## Pairing A (recommended)
- **Display / Headline:** `Teko` (700) — compact, high-impact, automotive energy
- **Body / UI:** `Inter` (400/500/600) — modern, legible, neutral

## Pairing B (alternate)
- **Display:** `Sora` (700/800)
- **Body:** `Manrope` (400/500/600)

### Type Scale (desktop)
- H1: 64/0.92/700 (tight and dominant)
- H2: 44/1.0/700
- H3: 30/1.1/700
- Lead: 21/1.45/500
- Body: 17/1.6/400
- UI small: 14/1.45/500

### Type Rules
- Headlines mostly uppercase for hero/section intros.
- Body remains sentence case.
- Use tracking +1% to +2% on uppercase headings.

---

## 4) Imagery Direction

### Photography
- Real shop/process shots only. No stock smile handshakes.
- Lighting: directional, high dynamic range, crisp highlights on metal/tools.
- Palette treatment: cool-neutral grade with selective warm accents from skin tones and orange UI overlays.

### Subject Priority
1. Technician action in progress
2. Diagnostic tools/screens
3. Precision moments (torque wrench, alignment rig, brake service detail)
4. Customer trust moments (advisor explanation, key handoff)

### Crop/Composition
- Hero: 21:9 safe region for overlay content on left third.
- Section banners: 16:9.
- Cards: 4:5 on mobile, 16:10 desktop.
- Maintain “working depth”: foreground object + operator + contextual background.

### Do / Don’t
- **Do:** dust particles, reflections, authentic grit.
- **Don’t:** over-retouched “perfect” scenes, fake lens flares, staged thumbs-up poses.

---

## 5) Iconography + Graphic Language

### Icon Style
- Use `Lucide` or custom set with:
  - 1.75px stroke
  - squared-rounded corners
  - no fill by default
- Icon container chips use subtle glass-dark background with 1px cyan or silver outline.

### Motif System
- **Gridlines:** subtle technical blueprint lines (`opacity 6–10%`)
- **Angular cuts:** 8–12px clipped corners on cards/buttons
- **Data ticks:** micro marks near stats and process steps
- **Glow discipline:** tiny cyan outer glow only on hover/focus states

This creates a recognizable “AutoTrek instrument panel” feel.

---

## 6) Composition Rules

### Global Layout
- 12-column desktop grid, 4-column mobile grid
- Max content width: `1280px`
- Section vertical rhythm: `py-24` desktop, `py-16` mobile

### Rhythm Pattern
Alternate sections:
1. Dark-heavy section
2. Light-content break (Signal White background)
3. Dark-heavy section

This prevents visual fatigue on long pages.

### Content Density
- One dominant message per fold.
- Max 2 accent colors visible per viewport.
- Keep copy blocks narrow (65–75 characters).

---

## 7) Section-by-Section Visual Concepts

## Homepage
1. **Hero (Command Center)**
   - Split layout: left content slab (dark), right live-action technician image.
   - Overlaid “service telemetry strip”: years in business, review rating, turnaround claim.
   - CTA block uses Ignition Orange.

2. **Trust Bar**
   - Horizontal chips: ASE-certified, Warranty-backed, Transparent estimates, Fleet-ready.
   - Minimal icon + text, high scan speed.

3. **Services Grid**
   - Cards with diagonal corner cuts, hover lift + cyan edge trace.
   - Service title in uppercase condensed display font.

4. **Process Section (“How Your Service Runs”)**
   - 4-step timeline with numbered capsules and micro-illustrations.
   - Use cyan as process accent color.

5. **Proof Section**
   - Before/after style detail crops (brakes, suspension, diagnostics).
   - Include short metric callouts (e.g., “Same-day diagnostics available”).

6. **Reviews / Reputation**
   - Dark panel with large quote marks and star data, not fluffy cards.

7. **Final CTA**
   - High-contrast band with strong one-line headline and booking CTA.

## Service Pages
- Hero includes:
  - service-specific image
  - one-line performance promise
  - quick stats strip
- Mid-page adds “What we check” checklist cards (technical confidence).
- Sticky mobile booking bar on scroll.

## About Page
- “The shop standard” narrative with documentary photo sequence.
- Use timeline of milestones rather than generic mission paragraph blocks.

## Contact / Booking
- Map + operating hours + booking form in one command layout.
- Form container feels like an instrument panel: clean labels, strong focus rings, zero clutter.

---

## 8) Desktop & Mobile Mock Guidance

### Desktop
- Hero height: `min(88vh, 920px)`
- Keep key CTA above fold at 1440x900
- Use asymmetric compositions (40/60, 55/45) for editorial energy

### Mobile
- H1 cap: 40px
- Convert split layouts to stacked with media first for trust-heavy sections
- Sticky bottom CTA: “Call” + “Book Service” dual action
- Keep cards tappable with 16px vertical padding minimum

### Interaction
- Hover: translateY(-2px) + subtle shadow + accent edge
- Focus: 2px cyan ring + 2px offset
- Motion duration: 160–240ms (fast, mechanical, no floaty easing)

---

## 9) Next.js + Tailwind Implementation Directives

## Theme Tokens (`tailwind.config.ts`)
Define semantic tokens, not raw hex in components.

```ts
extend: {
  colors: {
    bg: {
      base: '#0B0D12',
      surface: '#171B23',
      light: '#F5F7FA',
    },
    text: {
      primary: '#F5F7FA',
      muted: '#A9B2C3',
      dark: '#0E1117',
    },
    brand: {
      cta: '#FF5A1F',
      tech: '#00D1FF',
      success: '#20C07A',
      warn: '#FFB020',
      danger: '#FF4D4F',
    },
  },
  borderRadius: {
    panel: '14px',
    chip: '999px',
  },
  boxShadow: {
    panel: '0 12px 40px rgba(0,0,0,.35)',
    glow: '0 0 0 1px rgba(0,209,255,.55), 0 0 20px rgba(0,209,255,.18)',
  },
}
```

## Global CSS
- Add layered background utility for technical grid:
  - `.bg-grid-tech` with repeating linear gradients at very low opacity.
- Create reusable utility classes:
  - `.section-shell`
  - `.headline-display`
  - `.cta-primary`
  - `.card-cut` (uses clip-path corner cut)

## Component Architecture
- `components/brand/SectionShell.tsx`
- `components/brand/TelemetryStrip.tsx`
- `components/brand/TrustChip.tsx`
- `components/brand/ServiceCardCut.tsx`
- `components/brand/StickyMobileCTA.tsx`

## Performance / Media
- Use `next/image` with explicit `sizes` for hero/cards.
- AVIF first, WebP fallback.
- Preload only first viewport hero asset.

## Accessibility
- Keep contrast ≥ 4.5:1 for all body text.
- Orange CTA on dark must use near-white text only.
- Don’t encode meaning by color alone in process/status UI.

---

## 10) Asset Production List (New Library)

## Brand/UI Graphics
1. `brand/logo-wordmark-light.svg`
2. `brand/logo-wordmark-dark.svg`
3. `brand/logo-mark.svg`
4. `ui/grid-tech-overlay.png`
5. `ui/noise-soft.png`
6. `ui/section-divider-angle.svg`

## Homepage Imagery
1. `home/hero-command-bay-01.avif`
2. `home/trust-strip-tech-detail-01.avif`
3. `home/services-grid-brakes-01.avif`
4. `home/services-grid-diagnostics-01.avif`
5. `home/services-grid-maintenance-01.avif`
6. `home/process-step-inspection-01.avif`
7. `home/process-step-approval-01.avif`
8. `home/process-step-repair-01.avif`
9. `home/process-step-delivery-01.avif`
10. `home/review-proof-keys-handoff-01.avif`
11. `home/final-cta-bay-night-01.avif`

## Service Page Heroes
1. `services/hero-brake-repair-01.avif`
2. `services/hero-diagnostics-01.avif`
3. `services/hero-oil-fluid-01.avif`
4. `services/hero-suspension-01.avif`
5. `services/hero-fleet-01.avif`
6. `services/hero-hybrid-01.avif`
7. `services/hero-euro-01.avif`
8. `services/hero-alignment-01.avif`
9. `services/hero-maintenance-01.avif`

## About / Contact
1. `about/timeline-shop-opening-01.avif`
2. `about/timeline-team-growth-01.avif`
3. `about/timeline-modern-equipment-01.avif`
4. `contact/location-exterior-dusk-01.avif`
5. `contact/front-desk-advisor-01.avif`

---

## 11) Launch Sequence (Execution Order)

1. Implement tokens + typography + shells first.
2. Replace homepage hero + trust bar + services cards.
3. Roll service templates (one layout, per-service content).
4. Apply mobile sticky CTA and process timeline.
5. Swap in finalized image library + compression pass.
6. QA visual consistency across 375, 768, 1024, 1440 widths.

---

## 12) Non-Negotiables

- This direction must feel **distinct from generic local mechanic sites**.
- Every page should have one decisive visual focal point.
- No stock-photo business clichés.
- No pastel palette drift.
- Keep it technical, premium, and conversion-focused.

---

If executed correctly, AutoTrek will read as the **high-performance, high-trust service authority** in its market — with a visual identity strong enough to scale into paid ads, socials, print, and in-shop signage without losing coherence.