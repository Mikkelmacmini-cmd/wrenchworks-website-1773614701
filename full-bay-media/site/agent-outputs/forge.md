# Forge Update — AutoTrek Visual Modernization (2026-03-11 r4)

## Phase A Completed

### What shipped
1. **New design system foundation**
   - Rebuilt `src/app/globals.css` with premium tokenized system:
     - Color tokens (canvas/surface/panel, ink tiers, gold + sky accents)
     - Fluid typography scale (`--step--1` to `--step-4`)
     - Spacing scale + radius + elevation tiers
     - Unified button system (`btn-primary`, `btn-secondary`, `btn-ghost`)
     - Refined motion/focus/reduced-motion behavior

2. **Hero modernization (desktop + mobile)**
   - Re-composed homepage hero for stronger visual hierarchy and cleaner CTA stack.
   - Adjusted hero image framing/height to prevent clipping across mobile breakpoints.
   - Preserved existing conversion path and primary CTA labels/links.

3. **Component modernization**
   - Updated:
     - `DiagnosticProofRail`
     - `SymptomTriageFunnel`
     - `MobileActionRail`
   - Added stronger card depth treatment, better contrast/readability, and consistent button application.

4. **Service templates polished**
   - Updated `/services` and `/services/[slug]` templates to match new premium system.
   - Improved card styling, typography rhythm, and CTA consistency.

5. **Performance + critical rendering improvements**
   - Added `content-visibility` shell helper for below-fold sections.
   - Kept hero image optimized (`priority`, `sizes="100vw"`) and retained existing imagery.
   - Reduced visual noise while preserving premium depth.

6. **Accessibility + SEO checks**
   - Added/strengthened semantic labels and section associations (`aria-label`, `aria-labelledby`, table `caption`).
   - Verified build output still includes:
     - `/robots.txt`
     - `/sitemap.xml`
     - `/services` + static `/services/[slug]` generation
   - Routes/metadata preserved.

7. **Build + QA captures (r4)**
   - Build: ✅ `npm run build` successful.
   - New deterministic captures generated in:
     - `qa-captures/2026-03-11-r4/`
     - 10 files present (desktop/tablet/mobile × viewport/full)
   - Canonical pointers updated:
     - `qa-captures/autotrek-desktop.png`
     - `qa-captures/autotrek-mobile.png`

### Utility added
- `scripts/capture-qa.mjs` for repeatable multi-breakpoint screenshot generation.

## Notes for next phase (B)
- Complete deeper trust/CTA module polish and any microcopy tightening.
- Run stricter accessibility pass (keyboard traversal + landmark audit).
- Execute LCP validation pass on emulated mid-tier mobile and tune if needed.

---

## Forge Update — Header Safety Patch (2026-03-11 r5)
- Hardened sticky header layering/spacing so hero primary CTA never sits under the header across desktop/tablet/mobile.
- Added deterministic selectors (`data-testid`) + Playwright coverage in `tests/header-cta.spec.ts` to assert CTA is visible and not occluded at 1280/768/390 breakpoints.
- Added Playwright config + scripts: `npm run test:e2e`, `npm run qa:capture`.
- Build + tests passed (`npm run build`, `npm run test:e2e`).
- Refreshed QA screenshots in `qa-captures/2026-03-11-r5/`.
