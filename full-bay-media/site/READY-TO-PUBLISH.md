# AutoTrek — Ready-to-Publish Status

## Completed in this pass
- Fixed `robots.txt` sitemap URL to production domain:
  - `https://autotrekservicecenter.com/sitemap.xml`
- Fixed `sitemap.xml` base URL from `fullbaymedia.com` → `autotrekservicecenter.com`
- Expanded sitemap entries:
  - homepage
  - `/services`
  - all featured service detail pages
- Verified build + lint pass:
  - `npm run build`
  - `npm run lint`
- Verified canonical tags:
  - `/` → canonical `https://autotrekservicecenter.com`
  - `/services` → canonical `https://autotrekservicecenter.com/services`
  - `/services/brake-repair-service` → canonical detail URL
- Verified key conversion links in rendered HTML:
  - header/hero/footer/sticky CTA all point to `tel:+13033283356`

## Commit created
- `c4374ff` — `seo: fix autotrek robots/sitemap domain and add service URLs`

## Still required before true publish-complete
1. Mobile visual QA (real browser device check)
   - Confirm no CLS regressions
   - Confirm sticky CTA does not block key content
2. Lighthouse pass (mobile)
   - Performance / Accessibility / Best Practices / SEO
3. Production launch ops
   - Point DNS + confirm SSL on live domain
   - Live smoke test on `https://autotrekservicecenter.com`
   - Confirm analytics + call tracking

## Current local preview
- Running at: `http://localhost:3001`
