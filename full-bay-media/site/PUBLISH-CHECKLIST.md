# AutoTrek Site — Final Publish Checklist

## 1) Functional QA
- [ ] Homepage loads without layout shift on mobile + desktop
- [x] Header CTA calls `(303) 328-3356`
- [x] Hero primary CTA calls `(303) 328-3356`
- [x] `View Services` jump link lands on Featured Services section
- [x] Featured service cards open correct `/services/[slug]` pages
- [x] `See our full list of services` opens `/services`
- [x] Footer CTA calls `(303) 328-3356`
- [ ] Mobile sticky CTA remains visible and does not block key content

## 2) Content QA
- [x] Business name/address/hours are correct
- [x] Review link opens valid Google review destination
- [ ] About copy and FAQs match approved client wording
- [x] Service area list is accurate (Littleton, Highlands Ranch, Englewood, Lakewood, Centennial)

## 3) SEO + Metadata QA
- [x] Global title/description render correctly
- [x] Canonical tag on homepage is `/`
- [x] Canonical tag on services index is `/services`
- [x] Canonical tag on each service page is `/services/<slug>`
- [x] Open Graph + Twitter metadata present on homepage/services/service detail pages
- [x] LocalBusiness JSON-LD (`AutoRepair`) is present on homepage
- [x] `robots.txt` and `sitemap.xml` resolve

## 4) Performance QA
- [x] Hero image and gallery images load cleanly
- [ ] No oversized image regressions introduced
- [ ] Lighthouse mobile pass run (Performance, Accessibility, Best Practices, SEO)

## 5) Launch Ops
- [x] Build passes (`npm run build`)
- [x] Production env/domain configured (`https://autotrekservicecenter.com`)
- [ ] DNS and SSL active
- [ ] Post-launch smoke test on live domain
- [ ] Analytics/call tracking verified

## 6) Handoff
- [ ] Send launch summary with live URL
- [ ] Share what was included (homepage + services + SEO setup)
- [ ] List next 2-week optimization priorities (proof assets, review velocity, service-area expansion)
