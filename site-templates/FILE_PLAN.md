Service Pages — File / Path Plan

Structure (drop-in copy later):

/site-templates/
  service-page-template.md        <- canonical reusable template (frontmatter + sections)
  schema-placeholder.json         <- JSON-LD placeholder for each service
  partials/
    hero.md
    outcomes.md
    deliverables.md
    process.md        <- create when fleshing out process per service
    pricing-teaser.md
    faq.md
    cta.md
  routes/
    website-build.md
    local-seo.md
    gbp-optimization.md
    review-funnels.md
    managed-hosting.md

Guidelines:
- Each route file in /routes is a thin wrapper that imports partials and provides frontmatter keys.
- Use the template's frontmatter keys as the canonical schema for CMS imports.
- Keep partials small and composable; allow reorder via the route wrapper.
- JSON-LD in schema-placeholder.json should be generated server-side by substituting keys from frontmatter.

Next steps (recommended):
1. Add deliverables.md, pricing-teaser.md, faq.md, cta.md partials.
2. Wire the template into the build (e.g., 11ty/Nunjucks, Hugo/Go templates, Next.js getStaticProps mapping).
3. Create a simple script to ingest frontmatter and output JSON-LD for each route (placeholder path: scripts/generate-schema.js).
4. Replace placeholder {{ }} tokens with templating syntax matching your SSG/framework.

Ready for copy drop-in. --MJ