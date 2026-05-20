# Schema Validation Report

**Date:** 2026-05-11
**Phase:** BEAST Days 25-30 — E-E-A-T sweep
**Scope:** 34 commercial pages (all `/services/*` + Tier-1 cost / comparison / about / team)

## Executive

- ✅ **0** duplicate `FAQPage` emissions on any single page (was 7 — fixed)
- ✅ **0** dangling `@id` references
- ✅ **0** pages missing FAQPage schema where FAQ content exists
- ✅ **All** commercial pages resolve cleanly into the organization graph via `@id` references to `#organization` and `#nick`
- ⚠️ **2** pages emit both `LocalBusiness` and `GeneralContractor` types — Schema.org sub-type relationship makes this non-conflicting, flagged for review

## Schema type distribution (all sampled pages)

| Schema type | Total emissions |
|---|---:|
| AdministrativeArea | 243 |
| Question | 141 |
| Answer | 141 |
| ListItem | 93 |
| OpeningHoursSpecification | 68 |
| PostalAddress | 36 |
| AggregateRating | 35 |
| WebSite | 35 |
| GeneralContractor | 34 |
| GeoCoordinates | 34 |
| BreadcrumbList | 33 |
| FAQPage | 27 |
| Service | 20 |
| Organization | 12 |

## Duplicate FAQPage emission — fixed

### Root cause

`<ServicesFAQ>` component defaults `withSchema = true`, auto-emitting a `FAQPage` JSON-LD block. Seven service pages also emitted their own page-level `faqSchema` JSON-LD with richer / different question data. Result: two FAQPage blocks per page (Google ignores both, or treats as schema spam).

### Fix applied

Passed `withSchema={false}` to every `<ServicesFAQ>` call on the 7 affected pages. Page-level richer `faqSchema` remains the single source of truth.

### Pages fixed

| Page | Before | After |
|---|---:|---:|
| `/services/fence` | 2 | 1 |
| `/services/gazebo-pergola` | 2 | 1 |
| `/services/entry-doors` | 2 | 1 |
| `/services/deck-washing` | 2 | 1 |
| `/services/porches` | 2 | 1 |
| `/services/porches/front-porch` | 2 | 1 |
| `/services/porches/open-porch` | 2 | 1 |

## Dangling `@id` references

**0 found.** Every `@id` reference on the commercial surface points to a defined entity, either on the same page or in the global set:

- `https://ldndecks.com/#organization` — defined globally via `StructuredData.jsx` in root layout
- `https://ldndecks.com/#nick` — defined globally via `TeamGrid.jsx` on `/team`
- `https://ldndecks.com/#website` — defined in `WebsiteSchema`
- `https://ldndecks.com/#webpage` — page-local on Tier-1 routes

## Missing FAQPage despite FAQ content

**0 found.** Every page with `<details>` / Q&A copy in the rendered DOM also emits a `FAQPage` JSON-LD block.

Note: `/services/porches/screened-porch` recently had its `faqSchema` emission removed in an intentional file edit. The `<ServicesFAQ>` component's auto-emission picked up the schema responsibility — the FAQ data is still surfaced in the schema graph. No action needed.

## LocalBusiness + GeneralContractor co-emission

**2 pages** emit both types simultaneously. This is not a schema conflict — `GeneralContractor` is a sub-type of `LocalBusiness` per [schema.org/GeneralContractor](https://schema.org/GeneralContractor) — but it can create duplicate entity confusion if both blocks are unrelated.

### Action item

Audit which component emits each. Recommended pattern: emit `GeneralContractor` once (already done in `lib/business.js`); avoid emitting a separate `LocalBusiness` block at the page level unless it carries distinct properties (e.g., a service-area-specific LocalBusiness branch). The most-likely culprit is the `LocalBusinessSchema.jsx` component being used alongside the global `StructuredData` — verify whether it's intentional.

## Organization graph resolution

All 34 commercial pages can resolve to the canonical `#organization` entity through one of:

- Direct emission of `GeneralContractor` with `"@id": "#organization"` (root layout — every page)
- Reference via `provider: { "@id": "#organization" }` in `Service` schema
- Reference via `worksFor: { "@id": "#organization" }` in `Person` schema (`#nick`)
- Reference via `seller: { "@id": "#organization" }` in `Product`/`Offer` schema

## NamedAuthor microdata + Person `@id` linkage

`NamedAuthor.jsx` emits inline microdata:

```html
<aside itemScope itemType="https://schema.org/Person" itemID="https://ldndecks.com/#nick">
  <span itemProp="name">Nick</span>
  <span itemProp="jobTitle">Owner & Lead Designer, Loudoun Decks</span>
  ...
</aside>
```

Google parses this as a Person reference to the global `#nick` entity defined in `TeamGrid.jsx`. The Person entity carries `worksFor` pointing back to `#organization`. The graph closes.

## Validation tooling

- Validation script: `/tmp/schema_validate.py` (committed below)
- Audit JSON: `/tmp/schema_validation.json`
- Recommended external pass before any deploy: pipe each Tier-1 URL through Google's [Rich Results Test](https://search.google.com/test/rich-results) and Schema.org's [Schema Markup Validator](https://validator.schema.org/).
