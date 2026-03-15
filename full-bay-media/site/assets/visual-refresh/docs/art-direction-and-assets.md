# Visual Refresh — Final Art Direction + Prototype Imagery

## Chosen Muse Direction
**Precision Command** (implemented with Diagnostic Proof OS behavior): premium, bold, trustworthy; evidence-first automotive photography with copy-safe composition.

## Final Palette Tokens (White / Green / Red Primary)
```css
:root {
  /* Light foundation */
  --surface-page: #F8FAFC;      /* soft white page background */
  --surface-card: #FFFFFF;      /* white cards */
  --text-primary: #0F172A;      /* deep slate text */
  --text-secondary: #334155;    /* supporting text */

  /* Primary action + trust */
  --brand-primary-red: #B91C1C;       /* primary CTA / urgent action */
  --brand-primary-red-hover: #991B1B; /* CTA hover */
  --brand-trust-green: #166534;       /* proof chips / trust states */
  --brand-trust-green-soft: #DCFCE7;  /* trust surface tint */

  /* Utility */
  --border-default: #CBD5E1;
  --focus-ring: #2563EB;
  --overlay-hero: rgba(15, 23, 42, 0.60);
}
```

## Application Rules
1. **White-first surfaces**: keep ~70–80% of UI on white/off-white surfaces for readability and premium clarity.
2. **Red is primary action only**: use `--brand-primary-red` for primary CTA and urgent intent moments; avoid using red as body text.
3. **Green signals trust/proof**: reserve green for proof chips, verification states, and positive service outcomes.
4. **Contrast discipline**: body text minimum AA (4.5:1), hero copy always on `--overlay-hero` or darker.
5. **Single dominant action per viewport**: red CTA visually strongest, green as secondary trust reinforcement.
6. **Imagery treatment**: documentary realism, clean bays, technicians in-action, no text/logos baked into images.

## Asset Inventory (with paths, size, alt text)

### Hero mockups (3)
1. `full-bay-media/site/assets/visual-refresh/hero/hero-01-diagnostic-command.webp`  
   - 1280x720, 30,060 bytes  
   - Alt: "Technician performing advanced vehicle diagnostics in a clean AutoTrek-style service bay with copy-safe space."
2. `full-bay-media/site/assets/visual-refresh/hero/hero-02-trust-consultation.webp`  
   - 1280x720, 29,448 bytes  
   - Alt: "Service advisor reviewing repair findings with a customer beside a vehicle in a premium workshop."
3. `full-bay-media/site/assets/visual-refresh/hero/hero-03-performance-bay.webp`  
   - 1280x720, 44,544 bytes  
   - Alt: "Wide view of a professional multi-bay auto shop with technicians performing precision repair and diagnostics."

### Service-card images (6)
1. `full-bay-media/site/assets/visual-refresh/service/service-01-vehicle-diagnostics.webp`  
   - 960x720, 24,854 bytes  
   - Alt: "Technician using a scan tablet and OBD tools for vehicle diagnostics."
2. `full-bay-media/site/assets/visual-refresh/service/service-02-brake-repair.webp`  
   - 960x720, 20,732 bytes  
   - Alt: "Close-up of professional brake rotor and caliper service in progress."
3. `full-bay-media/site/assets/visual-refresh/service/service-03-oil-fluid-service.webp`  
   - 960x720, 24,446 bytes  
   - Alt: "Controlled oil and fluid maintenance being performed in a clean service environment."
4. `full-bay-media/site/assets/visual-refresh/service/service-04-suspension-steering.webp`  
   - 960x720, 24,102 bytes  
   - Alt: "Suspension and steering components inspected on a lifted vehicle with wheel removed."
5. `full-bay-media/site/assets/visual-refresh/service/service-05-hybrid-repair.webp`  
   - 960x720, 33,792 bytes  
   - Alt: "Technician performing hybrid-system diagnostics with safety equipment in a modern bay."
6. `full-bay-media/site/assets/visual-refresh/service/service-06-fleet-service.webp`  
   - 960x720, 31,498 bytes  
   - Alt: "Multiple fleet vans receiving coordinated maintenance in a professional repair facility."

### Mobile crops included
Hero mobile crops:
- `full-bay-media/site/assets/visual-refresh/mobile/hero-01-diagnostic-command-mobile.webp`
- `full-bay-media/site/assets/visual-refresh/mobile/hero-02-trust-consultation-mobile.webp`
- `full-bay-media/site/assets/visual-refresh/mobile/hero-03-performance-bay-mobile.webp`

Service mobile crops:
- `full-bay-media/site/assets/visual-refresh/mobile/service-01-vehicle-diagnostics-mobile.webp`
- `full-bay-media/site/assets/visual-refresh/mobile/service-02-brake-repair-mobile.webp`
- `full-bay-media/site/assets/visual-refresh/mobile/service-03-oil-fluid-service-mobile.webp`
- `full-bay-media/site/assets/visual-refresh/mobile/service-04-suspension-steering-mobile.webp`
- `full-bay-media/site/assets/visual-refresh/mobile/service-05-hybrid-repair-mobile.webp`
- `full-bay-media/site/assets/visual-refresh/mobile/service-06-fleet-service-mobile.webp`

All delivered files are well under the 400KB target.

## Final Polish Pass — Hero Variants (White-first build)
Additional hero variants generated for final launch tuning:
- **Alternative crops**
  - Desktop (1280x720): `center-safe`, `lower-bay`
  - Mobile (720x960): `center-tight`, `right-focus`
- **Stylistic options**
  - `lighter` (for white-first surfaces)
  - `contrast-boosted` (for stronger text/overlay separation)
- **Compression tiers**
  - `q82` (default visual quality)
  - `q68` (lighter transfer size)

Variant assets are available in both source and public-ready locations:
- `full-bay-media/site/assets/visual-refresh/ai-no-faces/hero-polish/`
- `full-bay-media/site/public/visual-refresh/ai-no-faces/hero-polish/`

Detailed variant metadata (dimensions + bytes + public paths):
- `full-bay-media/site/assets/visual-refresh/docs/hero-polish-manifest.json`

## Notes
- Raw generated source files are preserved in:
  - `full-bay-media/site/assets/visual-refresh/hero-raw/`
  - `full-bay-media/site/assets/visual-refresh/service-raw/`
- Final web-ready files were cropped/resized for production-friendly hero, service-card, and mobile aspect ratios.
