# Schema — Top 20 Fixes (ldndecks.com)

| # | Fix | Affected URLs | Severity | Traffic Impact | Effort | Reference |
|---|---|---|---|---|---|---|
| 1 | **Delete `LocalBusinessSchema.jsx` or refactor to emit non-conflicting `Place` entity** | 7+ pages | Critical | Medium (avoid Search Console warnings) | 1 hour | [src/components/LocalBusinessSchema.jsx](src/components/LocalBusinessSchema.jsx) |
| 2 | **Remove inline FAQPage `<script type="application/ld+json">` blocks from 8 city pages** that already use `ServicesFAQ` | 8 city pages + 10 other pages | Critical | High (FAQ rich result eligibility) | 1 day | grep for `"@type":"FAQPage"` in `src/app/**/page.js` and delete duplicates |
| 3 | Switch blog article `author` from `@type: Organization` to `@type: Person` referencing `#nick` | all blog posts | High | Medium (E-E-A-T / author entity graph) | 2 hours | [src/components/ArticleSchema.jsx](src/components/ArticleSchema.jsx) |
| 4 | Add `BreadcrumbList` schema to every non-homepage URL | sitewide | High | Medium (rich snippet) | 4 hours | [src/components/Breadcrumbs.jsx](src/components/Breadcrumbs.jsx) — verify deployment |
| 5 | Add `WebPage` schema + speakable selectors to every commercial city page | 28 city pages | Medium | High (AI surfaces) | 1 day | mirror [src/app/page.js:38-69](src/app/page.js#L38-L69) pattern |
| 6 | Audit + fix Service schema missing `name` property | unknown pages | Medium | Medium | 1 hour | grep `ServiceSchema` |
| 7 | Bind `Person` schema for Nick once globally; reference via `@id: #nick` everywhere | sitewide | Medium | Medium | 2 hours | mirror StructuredData @graph pattern; verify [src/components/TeamGrid.jsx](src/components/TeamGrid.jsx) emission |
| 8 | Add `Service` schema referencing global org for each canonical city page (e.g., "Custom Deck Builder in Ashburn") | 28 city pages | Medium | Medium | 1 day | template extension |
| 9 | Add `AggregateRating` to Service schema entities (currently only on Organization) | wherever Service is emitted | Low | Low | 1 hour | |
| 10 | Verify all `@id` references resolve (graph consistency check) — `WebPage.isPartOf` → `WebSite`, `WebPage.about` → `Organization`, etc. | sitewide | Medium | Low (no live break, but graph hygiene) | 2 hours | linter pass with jsonld-cli |
| 11 | Add `Review` schema for individual testimonials with `author.@type: Person` and `reviewRating.ratingValue` | /reviews | Medium | High (review snippet) | 1 day | new ReviewSchema component |
| 12 | Promote `WebSite.potentialAction` to include `SearchAction` for sitelinks search box eligibility (currently absent) | / | Low | Low | 30 min | [src/lib/business.js:54-65](src/lib/business.js#L54-L65) |
| 13 | Validate `priceRange` value: business.js says `$$-$$$$`, LocalBusinessSchema says `$$$` — pick one | sitewide | Medium | Low | 5 min | [src/lib/business.js:13](src/lib/business.js#L13) + delete LocalBusinessSchema |
| 14 | Run all 28 city pages through Google Rich Results Test post-fix; lock baseline | 28 URLs | Medium | High (validation) | 4 hours | manual or automated |
| 15 | Audit `HowToSchema` deployment for desktop-deprecated HowTo rich result — emit for AI/voice but don't bank on Google rich snippet | wherever used | Low | Low | 1 hour | [src/components/HowToSchema.jsx](src/components/HowToSchema.jsx) |
| 16 | Add `VideoObject` schema for `/introvideo.mp4` referenced in sitemap; currently no JSON-LD VideoObject | / | Medium | Medium (video rich snippet) | 1 hour | homepage |
| 17 | Add `ImageObject` schema per project showcase, with `contentLocation` for AI image attribution | /showcase/* | Low | Low | 1 day | [src/lib/showcaseData.js](src/lib/showcaseData.js) |
| 18 | Verify `news-sitemap.xml` actually filters by recency — emit only NewsArticle-eligible content | /news-sitemap.xml | Low | Low | 30 min | [src/app/news-sitemap.xml/route.js](src/app/news-sitemap.xml/route.js) |
| 19 | Add `LocalBusiness` Place / Place-of-service nested entity in `areaServed` to disambiguate the 5-county scope (currently AdministrativeArea — could be more specific Place with geo radius) | / | Low | Low | 30 min | [src/lib/business.js:78](src/lib/business.js#L78) |
| 20 | Lock all schema validation into CI: a `pnpm test:schema` script that runs jsonld-cli against representative pages | dev workflow | Medium | Medium (regression prevention) | 1 day | new test script |
