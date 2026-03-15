Visual CI + Patch apply checklist for Forge

1) Pull latest from main and create branch: visual/ci-95-sprint
   - git checkout -b visual/ci-95-sprint
2) Apply patches (PR-ready):
   - git apply --index patches/critical-css.patch
   - git apply --index patches/cta-breakpoints.patch
   - git apply --index patches/a11y-microfixes.patch
3) Run build + tests locally:
   - npm ci
   - npm run build
   - npm run test:e2e
4) Generate CI captures:
   - node scripts/capture-ci.mjs -- (or npm run ci:capture)
   - Compare with baseline using scripts/visual-compare.mjs
     - node scripts/visual-compare.mjs ci-captures/latest/desktop-1280-viewport.png qa-captures/baseline/desktop-1280-viewport.png ci-diff.png
5) If diffs are acceptable, commit and push:
   - git commit -m "Visual CI: add critical CSS + CTA safety + a11y microfixes"
   - git push origin visual/ci-95-sprint
6) Open PR and request Forge apply + test in the r4.3 pipeline.

Notes:
- critical.css is intentionally minimal to ensure first meaningful paint; full styles remain in main bundle.
- CTA spacing utilities are conservative; adjust --cta-safe-offset-* if QA shows too much/too little gap.
- Accessibility micro-fix adds role/aria-label for assistive tech; run axe/core checks afterwards.
