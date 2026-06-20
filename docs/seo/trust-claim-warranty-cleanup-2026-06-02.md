# Trust Claim + Warranty Cleanup - 2026-06-02

## Purpose

This pass tightened public trust, warranty, reputation, and proof language across the LDN Decks site so commercial SEO pages remain eligible for E-E-A-T / AI citation work without relying on unverifiable claims.

The cleanup follows the current evidence rule:

- Do not publish exact warranty durations unless the owner provides verified warranty policy text.
- Do not publish customer-review counts, ratings, or testimonial claims unless sourced from live public profiles or the evidence ledger.
- Do not imply manufacturer claim handling benefits unless verified directly from current manufacturer program documentation.
- Do not imply HOA, permit, or inspection outcomes are guaranteed.

## Risky Language Removed

The following claim patterns were removed or softened in public source files:

- `2-Year Warranty`
- `2-Year Workmanship Warranty`
- `2-year labor warranty`
- `workmanship guarantee`
- `Reputation-Backed`
- `review-backed`
- `warranty-backed`
- `expedited processing`
- `approved on the first attempt`
- `full warranty coverage`
- `at zero cost to you`
- unverified BBB A+ shorthand
- unverified top-tier or count shorthand

## Replacement Language Standard

Use these safer patterns until owner evidence is imported and verified:

- `written workmanship warranty terms`
- `manufacturer warranty information`
- `current manufacturer warranty documents`
- `public profile verification`
- `documented installation standards`
- `inspection-first documentation`
- `written project scope`
- `verify current profile details directly with the source`

## Public Pages Touched In This Pass

- `/about`
- `/about/warranty`
- `/about/why-choose-us`
- `/about/certifications-and-licenses`
- `/press`
- `/deck-warranty-guide-northern-virginia`
- `/deck-repair`
- `/deck-repair-loudoun-county`
- `/composite-decks`
- `/services/new-decks`
- `/services/deck-resurfacing`
- `/services/porches`
- `/services/fence`
- `/services/windows`
- `/how-to-choose-a-deck-builder-northern-virginia`
- city deck-builder pages including Alexandria, Chantilly, Woodbridge, Gainesville, and Herndon
- reusable CTA/navigation components where trust labels appeared

## Regression Guard Added

`scripts/evidence-anti-fabrication-regression.mjs` now blocks the risky claim patterns above during `npm run seo:evidence-regression`.

This prevents future content or generated pages from reintroducing unsupported warranty/reputation language without evidence.

## Verification

Completed after cleanup:

- `npm run seo:evidence-regression` passed.
- `npm run seo:validate-schema` passed.
- `npm run build` passed with 342 generated pages.
- Local `curl -sI` checks returned `200 OK` for representative updated pages.

## Remaining Publish Blockers

`npm run seo:prepublish-evidence` is still expected to fail until owner evidence is supplied.

Current tracked blockers:

- `/before-and-after`: missing evidence items.
- `/composite-deck-cost-northern-virginia`: missing evidence item.
- `/services/deck-repair`: no verified repair workmanship warranty term.
- `/showcase`: partial evidence items.

## Owner Evidence Needed

Before publish/merge/deploy of proof-heavy modules:

- exact repair workmanship warranty term and scope
- before/after project photos
- project city/neighborhood and month/year metadata
- verified repair cost ranges or source basis
- public-review profile verification if quoting counts/ratings
- manufacturer/dealer source links if quoting current product warranty or pricing details

## Operating Rule

Until those sources are imported through the evidence ledger, public copy should remain source-verification oriented rather than claim-oriented.
