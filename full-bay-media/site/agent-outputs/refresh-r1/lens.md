# Refresh R1/3 — Lens Visual Direction Upgrade (De-dating Pass)

Date: 2026-03-11  
Owner: Lens  
Goal: Replace dated "template-shop" cues with a contemporary, trustworthy service aesthetic that still feels local, practical, and conversion-first.

---

## 1) Core Visual Shift (What changes now)

### From (dated)
- Heavy generic blue gradients + glossy stock imagery
- Flat icon packs that look SaaS-2018
- Card blocks with hard borders, no depth hierarchy
- Random textures or none at all (sterile)

### To (updated)
- Documentary-style service photography with intentional crop/negative space
- Quiet industrial micro-textures (not noisy), layered with controlled gradients
- Icon language with confident stroke rhythm + automotive cues
- Soft-elevation cards with subtle glass/matte interplay and clearer states

**North star:** “Modern neighborhood service brand,” not “agency template” and not “luxury showroom.”

---

## 2) Imagery Direction (Primary lever)

## Art direction principles
1. **Evidence over decoration** — every hero/support image should prove real repair competence.
2. **Human + machine in frame** — include technician + vehicle/tool whenever possible.
3. **Natural realism** — avoid over-HDR, teal/orange cinema grading, fake AI anatomy/tooling.
4. **Intentional framing** — reserve headline/CTA zone with low visual noise.

## Shot types to prioritize
- Technician running diagnostics with scan tool connected
- Brake/suspension close process shots (hands, tools, components)
- Advisor + customer explain/confirm moment near vehicle
- Shop-floor wide with clean bays, visible depth, practical lighting

## Shot types to retire
- Generic smiling handshake stock scenes
- Hero car glamour shots without repair context
- Office/laptop-first stock images
- Overly staged “perfectly clean” fake workshop scenes

## Image treatment recipe
- Base tone: neutral-warm, slight contrast lift, muted highlights
- Grain: 2–4% monochrome film grain (very subtle)
- Vignette: minimal (0.08–0.12) only to guide focus
- Overlay in text zones: `rgba(9, 14, 26, 0.56)` default; bump to `0.66` on bright crops

---

## 3) Texture System (Modern industrial, not grunge)

Use low-frequency textures to reduce flatness while staying clean.

### Texture stack
1. **Matte graphite base** (very subtle paper/metal feel)
2. **Soft directional noise** (for depth in hero/section backgrounds)
3. **Optional blueprint line motif** at 2–4% opacity for technical credibility

### Rules
- Never place coarse texture under body text.
- Keep texture contrast under 6% luminance delta.
- Use texture in large fields only; cards stay mostly clean.

### Token suggestions
- `--tx-graphite: url('/textures/graphite-fine.webp')`
- `--tx-noise-soft: url('/textures/noise-soft-512.webp')`
- `--tx-blueprint: url('/textures/blueprint-lines.svg')`

---

## 4) Gradient Direction (2026-safe, less “neon SaaS”)

Replace loud two-stop gradients with restrained multi-stop atmospheric blends.

### Primary brand gradient (hero overlays)
`linear-gradient(135deg, #0B1220 0%, #13233F 42%, #1C3D66 100%)`

### Accent gradient (buttons/highlights, sparing use)
`linear-gradient(135deg, #2563EB 0%, #0EA5E9 100%)`

### Warm trust gradient (testimonials/CTA strip)
`linear-gradient(135deg, #1F2937 0%, #334155 55%, #475569 100%)`

### Usage rules
- Max 1 gradient family per section.
- Gradients are support layers, not foreground spectacle.
- Maintain readable text contrast: 4.5:1 body, 3:1 large.

---

## 5) Icon Language Refresh (Cohesive + less clipart)

## Style spec
- Stroke-based icons, 1.75px–2px stroke
- 20px/24px grid system only
- Rounded corners (2px radius feel), geometric but not toy-like
- Occasional filled anchors for key actions (phone, shield, wrench)

## Visual vocabulary
- Diagnostics: scan pulse + engine outline
- Brakes: rotor + caliper simplified geometry
- Suspension: strut + alignment arcs
- Trust: shield-check, clock-fast, map-pin-local

## Don’ts
- Mixed icon packs (outline + glossy + duotone together)
- Emoji-like oversized metaphors
- Thin 1px strokes that disappear on mobile

---

## 6) Card Treatment Upgrade (Service cards, trust cards, review cards)

## Base card
- Background: `rgba(255,255,255,0.78)` over cool neutral surface
- Border: `1px solid rgba(148,163,184,0.22)`
- Shadow: `0 8px 24px rgba(2,6,23,0.08)`
- Radius: 16px desktop / 14px mobile

## Hover/active state
- TranslateY: `-2px`
- Shadow increase: `0 14px 30px rgba(2,6,23,0.14)`
- Border tint shift toward brand blue (`rgba(37,99,235,0.35)`)

## Card media treatment
- Top media: 4:3 crop, subtle dark gradient at bottom for label legibility
- Never use unrelated abstract imagery in service cards
- Icon badge pinned top-left with frosted chip backing

---

## 7) Concrete Before/After Examples

1. **Hero section**
   - Before: generic shop exterior + heavy blue overlay
   - After: technician diagnostic action shot, lower-left copy block, layered graphite + navy gradient

2. **Service grid**
   - Before: repeating same stock photo across multiple cards
   - After: one unique evidence image per service, consistent icon badge + card depth states

3. **Trust strip**
   - Before: flat white boxes + clipart icons
   - After: soft matte cards, unified stroke icons, restrained background texture

4. **CTA band**
   - Before: loud gradient + weak contrast phone number
   - After: dark trust gradient, high-contrast number chip, subtle photo texture only

---

## 8) Asset Prompt Pack (for sourcing/generation)

Use these prompts for photo sourcing or AI-assisted generation (then manual QA for realism).

### Prompt A — Hero diagnostic proof
“Documentary-style photo of an experienced auto technician using a diagnostic scan tool on a late-model SUV inside a clean independent repair shop, natural overhead lighting, realistic tools and bay details, customer vehicle context visible, shallow depth of field, composition with negative space on left for headline, photorealistic, no logos, no cinematic color cast.”

### Prompt B — Brake service card
“Close mid-shot of mechanic inspecting front brake rotor and caliper on raised vehicle, authentic workshop environment, gloved hands, practical lighting, high detail on components, modern but natural color grading, photorealistic, no brand marks.”

### Prompt C — Advisor/customer trust moment
“Service advisor showing inspection results to customer beside vehicle in service lane, friendly professional interaction, real shop background, candid documentary framing, neutral-warm tones, photorealistic, no staged corporate office look.”

### Prompt D — Shop texture background
“Wide interior shot of organized auto repair bays with subtle depth, no people in foreground, clean industrial surfaces, balanced neutral lighting, low visual clutter area for text overlay, photorealistic.”

### Prompt E — Suspension/alignment evidence
“Vehicle on alignment rack with technician adjusting suspension/alignment components, precise tool context, workshop authenticity, realistic proportions, natural contrast, photorealistic.”

## Negative prompt block (always include)
“no corporate office, no marketing dashboard, no futuristic holograms, no excessive lens flare, no cartoon style, no warped hands, no incorrect tools, no luxury showroom aesthetic, no visible logos or watermarks.”

---

## 9) Quick Implementation Priorities (R1)

1. Replace hero and top 6 service-card images with evidence-first shots.
2. Apply updated gradient + texture tokens to hero, trust strip, CTA band.
3. Swap icon set to unified stroke family and normalize sizing.
4. Upgrade card elevation/border/hover states for modern hierarchy.
5. QA mobile contrast and image crops before moving to R2 refinement.

---

## 10) Success Criteria for this round

- Visual impression feels current (not stock-template dated) within first 3 seconds.
- Every primary module visually reinforces real auto repair capability.
- No mixed visual language across icons/cards/textures.
- CTA clarity improves due to cleaner hierarchy and controlled backgrounds.

**Outcome expected:** stronger trust perception, higher visual quality, and better conversion readiness without drifting off AutoTrek brand intent.
