# AutoTrek Visual + Icon Curation Plan (Lens)

## Creative Direction (site-wide)
- **Photography style:** Real shop-first, documentary feel (not stocky), natural contrast, clean highlights on metal/tools, mild grain okay.
- **Color treatment:** Keep AutoTrek palette support (deep red CTA, green trust accents, slate neutrals). Avoid heavy color casts.
- **Composition:** 16:9 hero/section covers, 4:3 support cards. Leave negative space for text overlays (left/bottom zones).
- **People:** Prefer authentic tech/advisor/customer moments over posed handshake clichés.
- **Icons:** Consistent line-icon set (2px stroke, rounded ends), single-color by context:
  - Neutral sections: `#374151`
  - Trust/success: `#166534`
  - Urgent/service alerts: `#b91c1c`

---

## Homepage Key Sections

### 1) Header / Brand Lockup
- **Visual:** Transparent-background logo export + optional subtle brushed-metal texture behind nav on scroll.
- **Style notes:** Keep logo clearspace; avoid busy patterns near wordmark.
- **Filename suggestions:**
  - `brand/autotrek-logo-primary.png`
  - `brand/autotrek-logo-mark.svg`
- **Alt guidance:** "AutoTrek Service Center logo"
- **Icon guidance:** Optional small phone icon before CTA: `phone-call`.

### 2) Hero (Reliable Auto Repair in Littleton)
- **Visual:** Technician actively servicing late-model vehicle/truck in a clean, lit bay.
- **Style notes:** Real action shot, slight cinematic depth; ensure dark-overlay readability.
- **Filename suggestions:**
  - `home/hero-technician-bay-littleton-v1.webp`
  - `home/hero-technician-bay-littleton-v2.webp`
- **Alt guidance:** "AutoTrek technician performing diagnostics in the Littleton service bay"
- **Icon guidance (for badges):** `badge-check`, `shield-check`, `map-pin`.

### 3) Quick Info Cards (Address / Hours)
- **Visual:** Tight environment crops (storefront sign, open bay clock/wall schedule).
- **Style notes:** Utility-first, crisp, minimal drama.
- **Filename suggestions:**
  - `home/info-storefront-exterior-day.webp`
  - `home/info-service-bay-open-hours.webp`
- **Alt guidance:**
  - Address card: "AutoTrek Service Center storefront on South Grant Way"
  - Hours card: "Interior service bay ready for weekday appointments"
- **Icon guidance:** `map-pin`, `clock-3`, `phone`.

### 4) About Us
- **Visual:** Team portrait + candid advisor/customer explanation scene.
- **Style notes:** Family-owned warmth, eye-level framing, no hard sell energy.
- **Filename suggestions:**
  - `home/about-team-group.webp`
  - `home/about-advisor-customer-walkthrough.webp`
- **Alt guidance:** "AutoTrek team members in the shop" / "Service advisor explaining repairs to a customer"
- **Icon guidance:** `users`, `wrench`, `heart-handshake`.

### 5) Services Grid (Homepage featured cards)
- **Visual:** Service-specific contextual photos (brakes, diagnostics tablet, alignment rack, etc.).
- **Style notes:** Keep angle/lighting consistent across all 9 cards for a unified library.
- **Filename pattern:** `services/cards/{slug}-card-v1.webp`
- **Alt guidance formula:** "{Service title} at AutoTrek Service Center in Littleton"
- **Icon guidance:** Small top-left icon chip on cards (see service mapping below).

### 6) Why Drivers Choose AutoTrek
- **Visual:** Trust montage (ASE patch closeup, warranty paperwork moment, diagnostic scan).
- **Style notes:** Evidence-based trust signals, not abstract graphics.
- **Filename suggestions:**
  - `home/trust-ase-certification-closeup.webp`
  - `home/trust-warranty-service-document.webp`
- **Alt guidance:** "ASE certification patch on technician uniform" / "Service advisor reviewing warranty coverage"
- **Icon guidance:** `award`, `shield-check`, `message-circle-heart`.

### 7) Service Areas
- **Visual:** South Denver metro map snippet with subtle highlighted coverage zones.
- **Style notes:** Minimal map styling, brand-accent pins.
- **Filename suggestions:**
  - `home/service-area-map-south-denver.webp`
- **Alt guidance:** "Map showing AutoTrek service coverage around Littleton and nearby cities"
- **Icon guidance:** `map`, `navigation`, `locate-fixed`.

### 8) Inside AutoTrek Gallery
- **Visual:** Wide shop floor + exterior building (already aligned with current layout).
- **Style notes:** Keep perspective level; prioritize cleanliness and depth.
- **Filename suggestions:**
  - `home/gallery-shop-floor-wide-v1.webp`
  - `home/gallery-storefront-angle-v1.webp`
- **Alt guidance:** "Wide view of AutoTrek service bays" / "Exterior view of AutoTrek Service Center"
- **Icon guidance:** none needed (photo-forward section).

### 9) Reviews CTA
- **Visual:** Customer handing back keys / smiling pickup moment.
- **Style notes:** Genuine expression, quick candid capture.
- **Filename suggestions:**
  - `home/reviews-customer-key-handoff.webp`
- **Alt guidance:** "Customer receiving vehicle keys after service at AutoTrek"
- **Icon guidance:** `star`, `message-square-quote`.

### 10) FAQ + Final CTA
- **Visual:** Subtle background texture or dark bay silhouette behind final CTA.
- **Style notes:** Keep CTA text dominant; image should support, not compete.
- **Filename suggestions:**
  - `home/cta-dark-bay-background.webp`
- **Alt guidance:** "AutoTrek service bay prepared for next appointment"
- **Icon guidance:** `phone-forwarded`, `calendar-check`.

---

## Service Page Visual Plan (featured service slugs)

Use this for both `/services` cards and individual `/services/[slug]` hero images.

| Slug | Primary visual concept | Style notes | Suggested filename | Alt-text guidance | Icon |
|---|---|---|---|---|---|
| `vehicle-maintenance` | Tech performing multi-point inspection under hood | Bright bay, checklist/tablet visible | `services/vehicle-maintenance-hero.webp` | "Technician performing scheduled vehicle maintenance inspection at AutoTrek" | `clipboard-check` |
| `brake-repair-service` | Brake rotor + caliper service closeup | High detail, safe red accent possible | `services/brake-repair-hero.webp` | "AutoTrek technician servicing brake rotors and pads" | `disc` |
| `oil-fluid-changes` | Controlled oil drain + fluid top-off station | Clean, no spills, pro process | `services/oil-fluid-changes-hero.webp` | "Oil and fluid change service being performed at AutoTrek" | `droplets` |
| `hybrid-repair` | Hybrid battery/diagnostic workflow | Technical, modern, cable/scan tool context | `services/hybrid-repair-hero.webp` | "Hybrid system diagnostics in progress at AutoTrek Service Center" | `battery-charging` |
| `european-auto-repair` | European vehicle on lift with scan tool | Premium but approachable; avoid luxury cliché | `services/european-auto-repair-hero.webp` | "European vehicle diagnostic and repair service at AutoTrek" | `car-front` |
| `fleet-repair-service` | Multiple branded work vehicles in bays | Emphasize throughput + uptime | `services/fleet-repair-hero.webp` | "Fleet vehicles receiving maintenance and repair at AutoTrek" | `truck` |
| `vehicle-suspension-repair` | Strut/shock inspection on lifted vehicle | Show wheel-off detail where possible | `services/suspension-repair-hero.webp` | "Suspension and steering component inspection at AutoTrek" | `gauge` |
| `vehicle-diagnosis-repair` | Technician using OBD/diagnostic tablet in cabin | Screen glow + focused expression | `services/diagnostics-repair-hero.webp` | "Vehicle diagnostics with scan tablet at AutoTrek Service Center" | `scan-line` |
| `wheel-alignments` | Alignment rack with heads/sensors mounted | Symmetry, straight lines, technical precision | `services/wheel-alignment-hero.webp` | "Wheel alignment calibration in progress at AutoTrek" | `crosshair` |

---

## Services Index (`/services`) supporting visuals
- **Top banner image:** One wide composite showing mixed service capability (diagnostics + lift + advisor).
  - Filename: `services/services-index-banner.webp`
  - Alt: "AutoTrek team providing complete auto repair services in Littleton"
- **Full service catalog backdrop (optional):** subtle workshop texture.
  - Filename: `services/services-catalog-texture.webp`
  - Alt: "Tools and equipment in AutoTrek workshop"

---

## Alt-Text Rules (quick standard)
1. Describe **what is happening**, not just objects.
2. Include AutoTrek/location only when contextually useful (not every line).
3. Keep to ~8–16 words where possible.
4. Avoid keyword stuffing (no repetitive "auto repair Littleton CO" phrasing).
5. Decorative images: use empty alt (`""`) if truly non-informational.

---

## Delivery Checklist for Asset Production
- Export hero images at **2200x1200** (`.webp`, quality ~78–84).
- Export card images at **1200x900** (`.webp`, quality ~75–82).
- Keep subject centered for mobile-safe crops.
- Maintain one Lightroom preset across all service-page hero images.
- Verify each image has a matching alt string in component usage.

---

## 2026-03-11 — Proof-chip contrast/readability patch (implemented)

### What changed
- Increased proof-chip text size from `text-xs` to an effective `0.875rem` (`14px`) via `.proof-chip` class.
- Replaced ad-hoc chip colors with dedicated tokens for consistent contrast on hero overlays.
- Kept title/subcopy hierarchy while improving scanability on mobile with clearer separator treatment.

### New token values (in `src/app/globals.css`)
```css
--proof-chip-bg: rgba(5, 13, 22, 0.88);
--proof-chip-border: rgba(186, 208, 234, 0.34);
--proof-chip-title: #f7fbff;
--proof-chip-body: #deebfb;
```

### Implementation example
```tsx
<div className="proof-chip">
  <strong>4.9★ Google</strong>
  <span className="hidden sm:inline"> · 1,200+ local reviews</span>
  <span className="sm:hidden"> — 1,200+ local reviews</span>
</div>
```

### Accessibility note
- Foreground-to-base contrast for `#f7fbff` and `#deebfb` against `#050d16` is well above WCAG AA for small text.
- This improves resilience when chips sit on bright areas of the hero image.

### Before/after mockups (desktop + mobile)
- Before desktop: `agent-outputs/proof-chips-before-desktop.png`
- Before mobile: `agent-outputs/proof-chips-before-mobile.png`
- After desktop: `agent-outputs/proof-chips-after-desktop.png`
- After mobile: `agent-outputs/proof-chips-after-mobile.png`
