# Sqft Cost Planning Pricing Cleanup - 2026-06-02

## Scope

Cleaned remaining `Real 2026 pricing` wording from square-foot composite deck cost pages and the static LLM feed.

## Pages And Feeds Updated

- `/composite-deck-cost-by-size`
- `/400-square-foot-deck-cost-northern-virginia`
- `/600-square-foot-deck-cost-northern-virginia`
- `/800-square-foot-deck-cost-northern-virginia`
- `public/llms-full.txt`

## Changes

- Replaced `real 2026 pricing` with `2026 planning pricing` in metadata, Article schema, WebPage schema, hero copy, and static AI feed copy.
- Kept all useful cost ranges, material tiers, monthly payment estimates, and local intent intact.
- Preserved proof-safety by making clear that these are planning ranges until tied to written estimates or source evidence.

## Verification

- Global targeted scan: no `real 2026 pricing`, `real pricing`, `Real 2026 pricing`, `completed project`, `verified project references`, `project proof`, `proof-backed`, `public proof`, or `real project amount` terms remained in public app/feed files.
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_8shyTF3CqE99exP6MntRPfZ4znrs`
- Live checks confirmed `2026 planning pricing` on:
  - `/400-square-foot-deck-cost-northern-virginia`
  - `/600-square-foot-deck-cost-northern-virginia`
  - `/800-square-foot-deck-cost-northern-virginia`
  - `/composite-deck-cost-by-size`
- Live `llms-full.txt` entry for `Composite Deck Cost by Size` contains safe per-size cost matrix wording and no `Real 2026` phrase.
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because Google Ads qualified-call attribution and real lead outcome proof are still not proven. This batch improves SEO/GEO pricing-language integrity only.

## Execution Ledger

- Task 432: Scanned public pages and LLM feeds for remaining real-pricing/proof-risk wording.
- Task 433: Updated `/composite-deck-cost-by-size` metadata, schema, and hero copy.
- Task 434: Updated 400/600/800 sqft cost page metadata and schema copy.
- Task 435: Updated static `public/llms-full.txt` composite cost by size entry.
- Task 436: Validated global scan, schema, lint, and build.
- Task 437: Deployed to production, verified live HTML/feed output, daily SEO, and IndexNow.
