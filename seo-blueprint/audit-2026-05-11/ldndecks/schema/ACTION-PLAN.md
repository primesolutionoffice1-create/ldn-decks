# Schema — Action Plan (ldndecks.com)

## 7-Day Plan

### Day 1 — Kill the duplicate Organization emission (Critical)
1. **Delete** [src/components/LocalBusinessSchema.jsx](src/components/LocalBusinessSchema.jsx).
2. **Remove imports** from the 7 pages that use it: deck-builder-{gainesville,reston,chantilly,woodbridge,herndon,alexandria}-va + screened-porch-builder-northern-virginia.
3. For each of those pages, add a `Service` schema referencing global org via `{"@id": ORG_ID}` — see `generated-jsonld/service-by-city.json`.
4. Confirm in Google Rich Results Test that only ONE Organization-level entity appears.

### Day 2 — Kill duplicate FAQPage emission (Critical)
1. **grep** for `"@type":"FAQPage"` in `src/app/**/page.js`. Catalog every inline emission.
2. For each page that ALSO uses `ServicesFAQ` (or any FAQ-emitting component), delete the inline `<script type="application/ld+json">` block.
3. For pages that use TWO FAQ components on the same page, pass `withSchema={false}` to all but one.
4. Re-validate 8 affected city pages + faqs + services pages.

### Day 3-4 — Fix Article author + add BreadcrumbList
1. [src/components/ArticleSchema.jsx](src/components/ArticleSchema.jsx): switch `author` to `{"@type": "Person", "@id": "https://ldndecks.com/#nick"}` plus add the global `Person` entity once.
2. Verify `Breadcrumbs` component emits BreadcrumbList. Add `<Breadcrumbs />` to every non-homepage page template that doesn't already render it.

### Day 5 — Add WebPage schema to canonical city pages
1. Mirror the homepage `WebPage` pattern from [src/app/page.js:38-69](src/app/page.js#L38-L69) to a reusable component `<CityPageSchema city={...} />`.
2. Include `speakable.cssSelector`, `isPartOf` → `#website`, `about` → `#organization`.
3. Deploy across all 28 canonical city pages.

### Day 6 — Service schema sweep
1. Audit Service schema instances for missing `name` property.
2. Add `aggregateRating` reference: `{"aggregateRating": {"@id": "#organization-rating"}}` (after defining `#organization-rating` once globally).
3. Add provider `{"@id": "#organization"}`.

### Day 7 — Validation lock
1. Run all 28 city pages through Rich Results Test.
2. Document the per-URL validator status in `seo-blueprint/audit-2026-05-11/ldndecks/schema/validator-baseline.md`.
3. Commit a `pnpm test:schema` script using jsonld-cli to catch regressions.

## 30-Day Plan
1. **Week 2:** Add Review schema for individual testimonials on /reviews. Bind to `Person` for author identity.
2. **Week 3:** Add `VideoObject` schema for `/introvideo.mp4`. Add `SearchAction` to WebSite for sitelinks search box.
3. **Week 4:** Schema CI integration — block PR merges if Rich Results Test FAIL on representative URLs.

## 60-Day Plan
1. Build `ImageObject` schema per showcase project with `contentLocation` (city).
2. Audit `news-sitemap.xml` content for NewsArticle eligibility.

## Verification gates
- **Post Day 1:** Google Search Console > Enhancements > Structured Data should NOT report "Multiple Organization items" warnings within 7 days of deploy.
- **Post Day 2:** No "Duplicate FAQPage" rich-result warnings.
- **Post Day 5:** Each city page in Rich Results Test shows `WebPage`, `Service`, and `FAQPage` (single) entities — no warnings.
