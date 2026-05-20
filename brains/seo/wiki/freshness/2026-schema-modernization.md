---
type: "freshness"
title: "2026 Schema Modernization for Local SEO"
created: "2026-05-19"
updated: "2026-05-19"
status: "current"
applies_to: ["schema-explanation", "llm-schema", "property-technical-audit"]
confidence: "high"
retrieved: "2026-05-19"
---

# 2026 Schema Modernization for Local SEO

> **Why this note exists:** The seeded **Schema Explanation** and **LLM
> Schema** chapters cover the principles. This note documents what's
> *current* in 2026: specific industry subtypes to prefer, new
> sustainability properties, and the AI Overview impact.

## Foundational rules (still true)

- **JSON-LD is the only format Google reliably supports.** Microdata and
  RDFa work but are dying. **Never use them in 2026.**
- Schema is **structural trust**, not a ranking factor directly — but
  helps Google + AI Overviews understand who, where, and what.
- Schema lives in `<script type="application/ld+json">` blocks. Inject
  per page via your CMS / framework.

## What changed: industry-specific subtypes are now table stakes

Google + AI agents categorize businesses more accurately when you use the
**most specific `@type`** from the schema.org tree, not generic
`LocalBusiness`.

| Business type | Wrong | Right |
|---|---|---|
| Lawyer | `LocalBusiness` | `Attorney` (extends `LegalService`) |
| Plumber | `LocalBusiness` | `Plumber` (extends `HomeAndConstructionBusiness`) |
| Restaurant | `LocalBusiness` | `Restaurant` (with `servesCuisine`) |
| Dentist | `LocalBusiness` | `Dentist` (extends `MedicalBusiness`) |
| Real estate | `LocalBusiness` | `RealEstateAgent` |
| Auto repair | `LocalBusiness` | `AutoRepair` |
| Electrician | `LocalBusiness` | `Electrician` |
| Roofer | `LocalBusiness` | `RoofingContractor` |
| HVAC | `LocalBusiness` | `HVACBusiness` |
| Accountant | `LocalBusiness` | `AccountingService` |

The seeded **Schema Explanation** chapter uses `LocalBusiness` in examples —
upgrade to industry-specific subtype before shipping any schema.

## New / emerging properties (2026)

### Sustainability schema

The EU and UK now require sustainability disclosures for some categories.
Schema.org has added properties:

- `sustainabilityPolicy` (URL to your sustainability statement)
- `ecoLabel` (eco-certification reference)
- `energyEfficiencyScaleMin/Max` for products

For US local clients these are *optional* but **becoming a competitive
edge** for businesses with genuine sustainability practices (solar
installers, green cleaners, EV-charging providers).

### Person schema (more important than ever)

Post-December-2025 E-E-A-T extension makes **Person schema** load-bearing
for any content with an author:

```json
{
  "@type": "Person",
  "name": "Jane Smith",
  "jobTitle": "Master Plumber",
  "worksFor": { "@type": "Organization", "name": "Acme Plumbing" },
  "knowsAbout": ["water heater repair", "drain cleaning"],
  "alumniOf": "Trade School Name",
  "sameAs": [
    "https://www.linkedin.com/in/jane-smith-plumber",
    "https://www.angi.com/companylist/.../janes-bio"
  ]
}
```

The `sameAs` array linking to LinkedIn + industry directories is a strong
authority signal.

## The 2026 minimum schema stack for a local client

For every location, ship:

1. **Industry-specific subtype schema** on homepage + service pages
   (with `address`, `geo`, `telephone`, `openingHoursSpecification`)
2. **`Service` schema** on each service page, with `provider` → location
3. **`Person` schema** on each content page with an author
4. **`Review`/`AggregateRating` schema** (only if you have real reviews —
   never fabricate)
5. **`BreadcrumbList`** on every non-homepage page
6. **`FAQPage`** schema on FAQ blocks (returns rich snippets for some
   queries even after AI Overviews)
7. **`HowTo`** schema on instructional content (drives AI Overview
   citation)
8. **`Article`** schema on blog posts with `author` → Person + `datePublished`
   + `dateModified`

## AI Overview implications

AI Overviews pull from structured data more reliably than from prose.
Implications:

- A site with thin prose but excellent schema can outperform a site with
  rich prose and weak schema for AI Overview citation
- Schema for `aggregateRating`, `Review`, and `Person` is especially
  important — those entities show up frequently in AI summaries
- `FAQPage` schema feeds AI Overviews directly

## Validate before shipping

Always run schema through:

1. [Schema Markup Validator](https://validator.schema.org/) (schema.org's
   official tool)
2. [Rich Results Test](https://search.google.com/test/rich-results)
   (Google's eligibility check)

Errors block rich snippets. Warnings are usually fine.

## What this changes about the seeded playbook

### `schema-explanation` chapter

- Strategy unchanged.
- **Add:** Industry-specific subtype table (see above).
- **Add:** Person schema requirement post-December-2025.

### `llm-schema` chapter

- Strategy unchanged.
- **Add:** `FAQPage` and `HowTo` schemas feed AI Overviews directly.

### `property-technical-audit` chapter

- Add schema validity check (via Schema Markup Validator) as a numbered
  step.

## Refusal

- No fake `Review` or `aggregateRating` schema. Google penalizes this
  aggressively in 2026.
- No `Person` schema for fabricated authors / stock-photo "team members".
- No `Service` schema for services you don't actually offer.
- No marking up content not visible on the page.

## Sources

- Schema.org — [LocalBusiness Type](https://schema.org/LocalBusiness)
- Google Search Central — [LocalBusiness Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- LocalRank-SEO (Medium) — [Schema for Local Businesses in 2026](https://medium.com/@joosep_41274/schema-for-local-businesses-in-2026-what-to-implement-and-why-924a64fad212)
- Schema App — [How-to Guide for LocalBusiness Schema Markup](https://www.schemaapp.com/schema-markup/how-to-do-schema-markup-for-local-business/)

## Related

- [[schema-explanation|Schema Explanation (seeded)]]
- [[llm-schema|LLM Schema (seeded)]]
- [[property-technical-audit|Property Technical Audit (seeded)]]
- [[2026-december-core-update|December 2025 Core Update + E-E-A-T]]
- [[wiki/freshness/_index|Freshness Hub]]
