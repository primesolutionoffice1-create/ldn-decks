# Weekly SEO Aggregate Refresh - 2026-06-02

## Scope

Ran the weekly SEO aggregate report after the individual health checks and again after the GBP cadence setup. No website code, Google Ads, GTM, GA4, budgets, bidding, or external settings were changed.

## Command Run

- `npm run seo:weekly`

## Result

- Schema validator: green
- Evidence ledger: green
- Evidence anti-fabrication regression: guarded, 22/22 checks passed
- Proof runtime: synced, 0 errors
- Public placeholders: clean
- Image alt-text: healthy
- Internal links: healthy, 317 audited, 0 bad
- Internal link gap report: 0 targets need links
- SXO conversion report: 93 average score across 10 targets
- Proof system preflight: healthy, expected-blocked
- Latest rerun after GBP setup: completed successfully on 2026-06-02

## Remaining Gates

- Publish readiness: 0 ready, 1 incomplete, 3 blocked
- Verified project proof snippets: 0 project, 5 review-source, 10 skipped
- Evidence owner actions: 26 actions, 13 P0, 13 P1

## Report

- `../ldn-decks-growth-brain-vaults/ldn-decks/wiki/reports/seo-weekly-2026-06-02.md`

## Scaling Gate

Scaling remains RED. The weekly SEO stack is healthy, but project evidence and Google Ads qualified-call attribution are still not proven.

## Execution Ledger

- Task 595: Ran `npm run seo:weekly`.
- Task 596: Confirmed technical SEO, proof runtime, placeholders, image, and link checks are healthy.
- Task 597: Confirmed publish readiness remains proof-gated.
- Task 598: Copied the weekly SEO report into Obsidian deliverables.
- Task 685: Re-ran `npm run seo:weekly` after GBP cadence setup.
- Task 686: Confirmed schema, evidence, anti-fabrication, proof runtime, placeholders, image alt, internal links, SXO, and proof staging checks still pass.
- Task 687: Confirmed weekly SEO remains proof-gated by missing owner evidence, not by technical SEO failures.
- Task 688: Copied the refreshed weekly SEO report into Obsidian deliverables.
