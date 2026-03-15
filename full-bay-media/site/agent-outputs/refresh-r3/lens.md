# Refresh R3/3 — Lens Final Visual Art-Direction Pass (2026 Premium Lock)

Date: 2026-03-11  
Owner: Lens  
Scope: Final visual refinement pass for imagery, texture, iconography, color usage, and depth treatments.  
Outcome target: unmistakably modern, premium 2026 look with implementation-ready specs.

---

## 1) Final Art Direction North Star

**Design read in 2 seconds:**
- **Premium:** engineered restraint, material realism, precise spacing.
- **Modern 2026:** layered depth, subtle atmospherics, documentary-grade visuals, no template feel.
- **Trust-first:** authentic repair evidence, strong legibility, stable interaction behavior.

**Do not ship if page reads as:** generic local-service template, over-glossy car brochure, or SaaS-neon gradient UI.

---

## 2) Imagery System — Final Selection + Treatment

## 2.1 Required Image Families (homepage + key service pages)
1. **Hero diagnostic action** (technician + live vehicle + visible tool context)
2. **Service proof close-ups** (brakes, suspension, diagnostic scanner, fluid system)
3. **Human trust moments** (advisor explaining findings to customer)
4. **Environment proof** (active bays, clean but busy shop floor, storefront)

## 2.2 Composition Rules (enforced)
- Keep one clear subject per frame; avoid “busy but meaningless” clutter.
- Maintain a **copy-safe lane** (usually left 35–45% in hero).
- Preserve depth cues: foreground soft blur, midground subject, background geometry.
- Avoid repeated hero crops across multiple service cards unless no alternative exists.

## 2.3 Color Grade + Retouch Rules
- Global grade: cool-neutral shadows, controlled highlights, natural skin tone.
- Target contrast: medium-high, but no crushed blacks in technician faces/hands.
- Prohibited: teal-orange cinematic grade, fake HDR crunch, heavy clarity halos.
- Add subtle text-protection scrim per crop (`0.52–0.72`) rather than over-darkening whole image.

## 2.4 Asset Guidance (implementation-ready)
- Export service images in **4:3** and hero variants in **16:9 + 4:5 safe crops**.
- Provide at least these widths: `768, 1024, 1536, 2048`.
- Use modern formats: `AVIF` primary, `WebP` fallback, keep visually lossless.
- Naming pattern:
  - `autotrek-hero-diagnostic-v1-2048.avif`
  - `autotrek-service-brakes-proof-v1-1024.avif`
  - `autotrek-shop-floor-active-v1-1536.avif`

---

## 3) Texture + Surface Language (Premium Tactility)

## 3.1 Texture Stack
- **Base graphite grain:** monochrome noise 2–3% opacity.
- **Technical line overlay:** optional 4–6% opacity on dark sections only.
- **Surface finish split:** matte content planes + smoked glass utility chips.

## 3.2 Guardrails
- Never place noticeable texture directly behind paragraph copy.
- Never combine strong texture + strong gradient + detailed photo in same local area.
- If a section already has high-detail photography, reduce synthetic texture by 50%.

## 3.3 CSS Token Suggestions
```css
:root {
  --tx-grain-opacity: 0.03;
  --tx-grid-opacity: 0.06;
  --surface-matte: rgba(248,250,252,0.88);
  --surface-glass: rgba(15,23,42,0.52);
  --surface-glass-strong: rgba(15,23,42,0.64);
}
```

---

## 4) Iconography Lock (Unified Technical Family)

## 4.1 Visual Spec
- Grid: `24px`
- Stroke: `1.9px` (round caps/joins)
- Corner feel: lightly rounded technical geometry
- Fill usage: <=15% of total icon set (status emphasis only)

## 4.2 Semantic Style
Use concrete mechanical metaphors only:
- brake rotor, strut, OBD scanner, shield-check, wrench, clock, map pin.

Avoid abstract novelty marks (sparkles, blobs, AI glyph motifs).

## 4.3 Component Application
- Service card icon chip: 36px container, 22–24px glyph.
- Trust row icons: 18–20px and visually lighter than key numerals.
- Icon chip backgrounds: smoked tint (not saturated solid pills).

---

## 5) Color Usage — Final 2026 Balance

## 5.1 Roles
- **Foundation:** deep ink/graphite for authority and contrast framing.
- **Content clarity:** porcelain/light matte surfaces for reading zones.
- **Action accent:** one conversion accent only (CTA + active states).
- **Verification accent:** secondary cool accent for process/proof/focus.

## 5.2 Ratio Target (page-level)
- 68–74% dark neutrals
- 20–26% light surfaces/text zones
- 6–8% accents total combined

## 5.3 Gradient Policy
- Max one atmospheric gradient per section.
- No high-saturation neon ramps.
- Accent gradients limited to primary CTA or active chip highlights.

---

## 6) Depth System — Final Elevation Behavior

## 6.1 Four Planes
- **Plane 0:** canvas/background atmosphere
- **Plane 1:** section shell
- **Plane 2:** cards/content modules
- **Plane 3:** active/interactive emphasis

## 6.2 Elevation + Motion Tokens
```css
:root {
  --elev-1: 0 1px 0 rgba(255,255,255,0.04), 0 8px 24px rgba(2,6,23,0.18);
  --elev-2: 0 1px 0 rgba(255,255,255,0.08), 0 10px 28px rgba(2,6,23,0.24);
  --elev-3: 0 1px 0 rgba(255,255,255,0.14), 0 16px 38px rgba(2,6,23,0.32);
}
.card { box-shadow: var(--elev-2); }
.card:hover,
.card:focus-visible { transform: translateY(-2px); box-shadow: var(--elev-3); }
.card:active { transform: translateY(0); box-shadow: var(--elev-2); }
```

## 6.3 Interaction Guardrails
- No floaty/bouncy animation curves.
- Keep transitions short and calm (`160–220ms`).
- Depth should clarify hierarchy, never feel decorative.

---

## 7) Section-Level Directives (Ship-Ready)

## Hero
- Documentary-grade technician image with left-side copy-safe zone.
- Add directional overlay gradient for text stability:
  `linear-gradient(90deg, rgba(15,23,42,.78) 0%, rgba(15,23,42,.52) 55%, rgba(15,23,42,.16) 100%)`
- Trust chips below CTA on smoked glass capsules.

## Services grid
- Each card: proof image (4:3), anchored icon chip, concise value copy.
- Ensure at least 6 distinct service visuals before launch.
- Hover: border tint + elevation change only (no large scale effects).

## Trust/proof strip
- Use compact matte/glass capsules with strong numeric hierarchy.
- Keep icon subordinate to number (number is trust anchor).

## Final CTA band
- Dark atmospheric shell, restrained texture, single dominant CTA.
- Phone module in highest contrast zone at all breakpoints.

---

## 8) Accessibility + Realism Checks (Visual QA Gate)

- Text on image: body copy must hold 4.5:1 on real mobile crops.
- White-on-chip text must remain readable on brightest hero variants.
- Technician hands/tools/components must be anatomically and mechanically plausible.
- No stock-photo artifacts (staged handshake smiles, spotless fake workshop scenes).

---

## 9) R3 Priority Execution Plan

1. Replace repeated/generic service imagery with distinct proof-led set.
2. Apply unified icon family everywhere (remove mixed packs).
3. Normalize overlays/scrims with tokenized values for responsive safety.
4. Tune depth tokens globally (cards, shells, CTA modules).
5. Run screenshot QA at `360 / 390 / 430 / 768 / 1280` widths.

---

## 10) Final Sign-Off Criteria (Must Pass)

A screenshot without logo should still read as:
- premium automotive repair brand,
- modern 2026 visual language,
- trustworthy, evidence-led service business.

If any module feels template-like, glossy-salesy, or stylistically inconsistent, it is not final.
