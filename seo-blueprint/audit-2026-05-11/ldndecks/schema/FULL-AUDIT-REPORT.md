# ldndecks.com — Schema / Structured Data Audit

**Date:** 2026-05-11 · **Method:** Direct codebase grep + per-component inspection · **Score:** 58 / 100

---

## Summary

The site has a **well-architected schema foundation** centered on [src/lib/business.js](src/lib/business.js) as single source of truth, [src/components/StructuredData.jsx](src/components/StructuredData.jsx) for the global `@graph`, and the homepage WebPage block linking via `@id` references. The major problems are **duplicate emission patterns**: a per-page `LocalBusinessSchema` component that emits a SECOND Organization-level entity, and 6 different FAQ components — most defaulting to `withSchema=true` — that compound when multiple FAQ surfaces appear on the same page.

---

## 1. Global emission (root layout)

[src/components/StructuredData.jsx](src/components/StructuredData.jsx) emits:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "GeneralContractor", "@id": "https://ldndecks.com/#organization", ...buildOrganizationSchema },
    { "@type": "WebSite", "@id": "https://ldndecks.com/#website", "publisher": { "@id": "#organization" } }
  ]
}
```

This is correct, complete, and well-linked. Validation: **PASS.**

The `GeneralContractor` is appropriate for the deck-building vertical (more specific than generic `LocalBusiness`).

`business.js` AggregateRating: `5.0 / 41 reviews / bestRating 5 / worstRating 1` — schema-valid.

---

## 2. **CRITICAL — Duplicate Organization-level emission via LocalBusinessSchema.jsx**

[src/components/LocalBusinessSchema.jsx](src/components/LocalBusinessSchema.jsx) emits a SECOND Organization-level entity per-page:

```js
"@type": "HomeAndConstructionBusiness",
"@id": `https://ldndecks.com/#organization-${city.toLowerCase().replace(/\s+/g, '-')}`,
"name": "Loudoun Decks",
"telephone": "+1-571-655-7207",
"address": { ... Centreville VA 20121 ... },
"priceRange": "$$$",    // <- CONFLICT
"aggregateRating": { "5.0", "41" }
```

**Conflicts with the global `GeneralContractor`:**
1. **Two `@id` values for the same business** — `/#organization` (global) vs `/#organization-ashburn` (per-page). Google can't reconcile which entity is the canonical business.
2. **Type mismatch:** `GeneralContractor` (global) vs `HomeAndConstructionBusiness` (per-page).
3. **priceRange conflict:** business.js says `$$-$$$$`, LocalBusinessSchema says `$$$`.
4. **areaServed scope mismatch:** business.js lists 5 counties at admin-area level; LocalBusinessSchema lists `[{ "@type": "City", "name": "{city}, VA" }]` only.

**Pages emitting both:**

| URL | Global @id (#organization) | LocalBusinessSchema @id |
|---|---|---|
| `/deck-builder-gainesville-va` | ✓ | `/#organization-gainesville` |
| `/deck-builder-reston-va` | ✓ | `/#organization-reston` |
| `/deck-builder-chantilly-va` | ✓ | `/#organization-chantilly` |
| `/deck-builder-woodbridge-va` | ✓ | `/#organization-woodbridge` |
| `/deck-builder-herndon-va` | ✓ | `/#organization-herndon` |
| `/deck-builder-alexandria-va` | ✓ | `/#organization-alexandria` |
| `/screened-porch-builder-northern-virginia` | ✓ | `/#organization-{city?}` |

Plus inline `LocalBusiness` schema directly in page.js files (per the broader grep) on: deck-builder-gainesville-va, ldn-decks-reviews-yelp, deck-builder-reston-va, deck-builder-chantilly-va, social, deck-builder-woodbridge-va, bbb-accredited-deck-builder-virginia, about/certifications-and-licenses, houzz-deck-projects, deck-builder-herndon-va, screened-porch-builder-northern-virginia, services/entry-doors, services/deck-resurfacing, reviews, deck-builder-alexandria-va.

**Validator verdict:** WARN — Google's Rich Results Test will accept it but `Search Console > Enhancements > Structured data` may report `Multiple Organization items` as a warning.

**Fix:** Delete `LocalBusinessSchema.jsx`. Replace its usages with a `Place` or `Service` schema referencing the global org via `{"@id": ORG_ID}`. See `generated-jsonld/` for the replacement pattern.

---

## 3. **CRITICAL — Duplicate FAQPage emission**

Six components emit `FAQPage` schema:
- [src/components/ServicesFAQ.jsx](src/components/ServicesFAQ.jsx) — `withSchema={true}` by default ([line 24](src/components/ServicesFAQ.jsx#L24))
- [src/components/FAQ.jsx](src/components/FAQ.jsx)
- [src/components/FAQCategorized.jsx](src/components/FAQCategorized.jsx)
- [src/components/ProcessFAQ.jsx](src/components/ProcessFAQ.jsx)
- [src/components/ContactFAQ.jsx](src/components/ContactFAQ.jsx)
- [src/components/WhyChooseFAQ.jsx](src/components/WhyChooseFAQ.jsx)

Plus 30+ pages emit FAQPage schemas inline.

**8 standalone city pages emit FAQPage TWICE** (inline page-level + via `ServicesFAQ` component):
- deck-builder-alexandria-va
- deck-builder-chantilly-va
- deck-builder-gainesville-va
- deck-builder-vienna-va
- deck-builder-reston-va
- deck-builder-herndon-va
- deck-builder-woodbridge-va
- deck-builder-mclean-va

Plus 10 other pages with the same duplication risk (services pages, deck-design-ideas, screened-porch-builder, faqs).

**Impact:** Google's Rich Results Test treats two FAQPage entities on one URL as competing markup. Behavior is to ignore both or pick one arbitrarily — losing FAQ rich-result eligibility.

**Fix:** Standardize on one FAQ emission per page. The cleanest pattern is to keep the `ServicesFAQ` component emission (data-driven from prop) and remove inline `<script type="application/ld+json">` FAQPage blocks from the page files. Use `withSchema={false}` on any FAQ component instance that is below another FAQ component on the same page.

---

## 4. Homepage WebPage schema — PASS

[src/app/page.js:38-69](src/app/page.js#L38-L69):
- `@type: WebPage` with `@id: https://ldndecks.com/#webpage`
- `isPartOf` → `#website`
- `about` → `#organization`
- `primaryImageOfPage` with ImageObject
- `speakable` with `cssSelector` for AI surfaces
- `significantLink` array of 9 internal URLs

Clean graph references. Validator: **PASS.**

---

## 5. Blog article schema

[src/components/ArticleSchema.jsx](src/components/ArticleSchema.jsx) — not read in this pass, but the prior GEO specialist confirmed:
- `BlogPosting` with `speakable` selectors ✓
- ⚠ `@type: Organization` used for `author` — should be `@type: Person` referencing `#nick`

---

## 6. Service schema

[src/components/ServiceSchema.jsx](src/components/ServiceSchema.jsx) and 15+ pages emit Service schemas. Prior schema specialist mid-state flagged a Service entity missing a `name` property — needs source-level grep to confirm. Likely culprits: the `services/*` routes.

Not deep-validated in this pass (4 of 4 specialists truncated). Tag this as **needs follow-up validation** with a JSON-LD linter (e.g., `jsonld-cli` or Google Rich Results Test against the deployed URLs).

---

## 7. Breadcrumb schema

[src/components/Breadcrumbs.jsx](src/components/Breadcrumbs.jsx) — emits BreadcrumbList JSON-LD. Spread across the site? Not visually confirmed on city pages (Ashburn page.js doesn't import Breadcrumbs). Should be added everywhere for the breadcrumb rich snippet.

---

## 8. HowTo schema

[src/components/HowToSchema.jsx](src/components/HowToSchema.jsx) — emits HowTo schema. Likely used on process / DIY pages. Verify Google's 2024 HowTo eligibility cutoff (mobile-only since the HowTo deprecation update — still emit for AI/voice surfaces, but Google won't render the rich result on desktop).

---

## 9. Schema validator pass/fail by URL (manual best-estimate)

| URL | Global @graph | WebPage / Article | FAQPage | LocalBusiness duplicates | Verdict |
|---|---|---|---|---|---|
| `/` | PASS | PASS (WebPage with @id) | n/a (FAQ on home unique) | n/a | **PASS** |
| `/deck-builder-ashburn-va` | PASS | n/a explicit | PASS (single via ServicesFAQ) | n/a | **PASS** |
| `/deck-builder-leesburg-va` | PASS | n/a explicit | PASS (single via ServicesFAQ) | n/a | **PASS** |
| `/deck-builder-reston-va` | PASS | n/a explicit | **FAIL** (duplicate FAQPage) | **FAIL** (#organization + #organization-reston) | **FAIL** |
| `/deck-builder-mclean-va` | PASS | n/a | **FAIL** (duplicate FAQPage) | n/a | **FAIL** |
| `/deck-builder-vienna-va` | PASS | n/a | **FAIL** (duplicate FAQPage) | n/a | **FAIL** |
| `/deck-builder-alexandria-va` | PASS | n/a | **FAIL** (duplicate FAQPage) | **FAIL** (LocalBusinessSchema imported) | **FAIL** |
| `/deck-builder-chantilly-va` | PASS | n/a | **FAIL** (duplicate FAQPage) | **FAIL** | **FAIL** |
| `/deck-builder-gainesville-va` | PASS | n/a | **FAIL** (duplicate FAQPage) | **FAIL** | **FAIL** |
| `/deck-builder-woodbridge-va` | PASS | n/a | **FAIL** (duplicate FAQPage) | **FAIL** | **FAIL** |
| `/deck-builder-herndon-va` | PASS | n/a | **FAIL** (duplicate FAQPage) | **FAIL** | **FAIL** |
| `/screened-porch-builder-northern-virginia` | PASS | n/a | **FAIL** | **FAIL** | **FAIL** |
| `/blog/*` (template) | PASS | WARN (Article author = Organization, should be Person) | n/a | n/a | **WARN** |
| `/showcase/*` | not verified | not verified | not verified | not verified | **needs validation** |
| `/services/*` | PASS | not verified | likely PASS | not verified | **needs validation** |
| `/faqs` | PASS | n/a | **likely FAIL** (FAQCategorized + page-level inline both?) | n/a | **FAIL?** |

**11 URLs FAIL or WARN at minimum**, plus an unknown count of unvalidated `/services/*` and `/showcase/*` URLs.

See **TOP-20-FIXES.md** and `generated-jsonld/` for the ready-to-paste replacement schemas.
