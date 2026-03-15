# Refresh R2/3 — Lens Visual Direction Upgrade (Distinctive 2026 Pass)

Date: 2026-03-11  
Owner: Lens  
Objective: Push the visual system beyond “clean local service site” into a more ownable 2026 look: stronger depth language, material realism, restrained atmospheric gradients, evidence-led imagery, and one coherent iconography family.

---

## 1) Creative Thesis (R2)

**Positioning sentence:**  
AutoTrek should feel like a **precision workshop with premium clarity** — technical, human, and trustworthy — not a generic blue-template repair site.

### R2 visual signature
1. **Depth without gimmicks** — layered planes, soft parallax feel, tactile cards.
2. **Material honesty** — graphite, brushed metal, smoked glass accents; no fake chrome shine.
3. **Restrained atmosphere** — low-saturation gradients that shape hierarchy, never dominate.
4. **Proof-first imagery** — real repair moments, intentional composition for copy overlays.
5. **Unified icon grammar** — one stroke rhythm, one corner logic, one metaphoric style.

---

## 2) Depth System (Ownable + Repeatable)

Move from flat blocks to a deliberate 4-plane composition model:

- **Plane 0 (Base):** dark neutral canvas with micro texture
- **Plane 1 (Section shell):** tonal panel to separate modules
- **Plane 2 (Content cards):** matte-glass cards with subtle elevation
- **Plane 3 (Interactive highlights):** CTA chips, active cards, key trust numerals

### Elevation tokens
```css
:root {
  --z0-bg: 0 0 0 rgba(0,0,0,0);
  --z1-shell: 0 1px 0 rgba(255,255,255,0.04), 0 8px 24px rgba(2,6,23,0.18);
  --z2-card: 0 1px 0 rgba(255,255,255,0.08), 0 10px 28px rgba(2,6,23,0.22);
  --z3-active: 0 1px 0 rgba(255,255,255,0.14), 0 16px 38px rgba(2,6,23,0.30);
}
```

### Motion-depth pairing
- Resting cards: Plane 2 (`--z2-card`)
- Hover/focus: +`translateY(-2px)` + `--z3-active`
- Active press: return to Plane 2 (no bounce)

This creates premium responsiveness without flashy motion.

---

## 3) Material Language (2026 tactile restraint)

## Material stack
1. **Graphite substrate** (`#0D141F` / `#111B2A`) with 2–3% monochrome grain.
2. **Smoked glass overlays** for trust chips and stat capsules (`rgba(15,23,42,0.52)` + backdrop blur 8px).
3. **Brushed steel accents** only on dividers/mini-badges (very low contrast).
4. **Paper-light content surfaces** for readability (`rgba(248,250,252,0.86)`) in selective modules.

## Hard rules
- No mirror-gloss “car brochure” highlights.
- No frosted glass everywhere (reserve for high-value UI moments).
- Keep texture away from paragraph backgrounds.

---

## 4) Gradient Direction (Atmospheric, not SaaS-neon)

Replace obvious two-stop blue ramps with desaturated multi-stop fields.

### Core atmospheric gradients
```css
--grad-hero-atmo: linear-gradient(145deg, #0A111C 0%, #132338 38%, #1B3554 68%, #2B4A63 100%);
--grad-trust-band: linear-gradient(135deg, #1A2432 0%, #263447 50%, #334155 100%);
--grad-accent-soft: linear-gradient(135deg, #2F6FA3 0%, #3B82B6 55%, #66A3C7 100%);
```

### Usage limits
- One atmospheric gradient per section max.
- Accent gradient appears only on: primary CTA, active icon chip, numeric highlight.
- Keep saturation capped to avoid “electric blue” drift.

---

## 5) Imagery Direction (Evidence + editorial framing)

R2 needs imagery that looks curated, not sourced in bulk.

## Composition rules
- **Foreground action + contextual background:** technician + vehicle context visible.
- **Negative space lane** for headline/CTA at crop time.
- **Depth cues:** foreground tool blur, midground human action, background bay geometry.
- **Authenticity checks:** realistic PPE, tool choice, hand anatomy, component accuracy.

## Color treatment
- Slightly cool shadows, neutral skin tones, controlled highlight rolloff.
- Avoid heavy teal/orange cinematic grade.
- Apply subtle shadow-side scrim for copy legibility (0.44–0.62 depending on crop).

## Image families (lock-in)
1. Diagnostic action hero
2. Component-detail service cards (brakes, suspension, electrical)
3. Advisor-customer explanation moments
4. Shop-wide environmental proof (clean, busy, competent)

## Reject list
- Generic handshake/call-center stock
- Isolated shiny vehicles without repair context
- Overly sterile “empty showroom” bays

---

## 6) Iconography Consistency System

Current risk: mixed icon packs = visual credibility drop. R2 enforces one icon family.

## Icon spec
- Stroke: **1.9px** (24px grid), optically corrected for small sizes
- Corner radius logic: rounded technical (2px feel)
- End caps: round
- Fill use: max 15% of icon set, only for “critical status” symbols

## Semantic style
- Mechanical truth over metaphor fluff
- Use concrete forms: rotor, strut, scanner, shield-check, clock-fast, map-pin
- Avoid abstract sparkles/AI-style glyphs

## Sizing + placement
- Service card icons: 22–24px in 36px container chip
- Trust-row icons: 18–20px, lower visual weight than numerals
- Icon-chip background: smoked tint, not bright solid pills

---

## 7) Component Upgrades (Where the style becomes visible)

## Hero
- Full-bleed documentary image with layered atmospheric gradient + subtle graphite texture.
- Copy block on left in dark translucent panel for stable legibility.
- Trust micro-chips under CTAs in one row, consistent icon style.

## Service cards
- Mixed media cards: top evidence photo (4:3), bottom matte info panel.
- Icon chip anchored top-left of media with consistent stroke family.
- Hover adds depth and border tint, not dramatic transforms.

## Trust strip
- Replace flat badges with compact glass-matte capsules.
- Numeric proof (4.9★, Since 2009, 3/36 Warranty) gets stronger typographic contrast.

## CTA band
- Dark trust gradient + faint environmental texture.
- Phone number in high-contrast utility capsule.
- Keep CTA hierarchy singular: primary fill, secondary outline.

---

## 8) R2 Token Pack (Implementation-ready)

```css
:root {
  --bg-ink-1: #0A111C;
  --bg-ink-2: #111B2A;
  --surface-matte: rgba(248,250,252,0.86);
  --surface-glass: rgba(15,23,42,0.52);
  --line-soft: rgba(148,163,184,0.22);
  --line-active: rgba(102,163,199,0.46);

  --text-strong: #EAF0F6;
  --text-muted: #A9B4C2;
  --text-dark: #0F172A;

  --accent-primary: #3B82B6;
  --accent-deep: #2F6FA3;

  --radius-card: 16px;
  --radius-chip: 12px;

  --noise-opacity: 0.03;
  --scrim-dark: rgba(9,14,26,0.56);
}
```

---

## 9) Fast QA Criteria (R2 sign-off)

1. **Ownability test:** screenshot without logo still reads as a specific brand, not a stock template.
2. **Depth test:** clear foreground/mid/background separation in hero + cards.
3. **Material test:** at least two distinct materials visible (matte + glass/metal), used intentionally.
4. **Gradient test:** no section feels neon or oversaturated.
5. **Imagery test:** every major photo demonstrates actual repair competence.
6. **Icon test:** zero mixed icon families across the page.

---

## 10) R2 Implementation Priorities

1. Swap hero + top 6 service images to evidence-led set with editorial crops.
2. Deploy depth/material tokens globally (shells, cards, trust chips, CTA band).
3. Replace all legacy icon variants with unified 24px stroke family.
4. Retune gradients to atmospheric set and remove high-saturation remnants.
5. Run mobile contrast + crop QA at 360/390/430 widths.

**Expected R2 outcome:** a sharper, more premium-technical 2026 identity with stronger trust at first glance and tighter visual cohesion across modules.