# Exact Definitive Pricing Language Cleanup - 2026-06-02

## Scope

Cleaned remaining overly absolute pricing language from payment CTAs and the AI-readable `llms.txt` route.

## Pages And Feeds Updated

- `/covered-deck-cost-northern-virginia`
- `/timbertech-azek-deck-cost-northern-virginia`
- `/trex-deck-cost-monthly-payment`
- `/llms.txt`
- Shared FAQ component

## Changes

- Replaced `exact monthly number` wording with `planning monthly estimate`.
- Replaced `Definitive 2026 pricing` in `llms.txt` with `2026 planning pricing`.
- Reframed shared FAQ copy from `exact price` to a written price/estimate expectation.

## Verification

- Targeted scan: no `Definitive 2026 pricing`, `exact monthly number`, `exact price for your specific vision`, `for the exact monthly number`, or `for an exact monthly number` wording remained in public app/feed files.
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_F44ZVUqU9qTzTGgbjDkurfczynoZ`
- Live checks confirmed:
  - `/covered-deck-cost-northern-virginia`: `planning monthly estimate`
  - `/timbertech-azek-deck-cost-northern-virginia`: `planning monthly estimate`
  - `/trex-deck-cost-monthly-payment`: `planning monthly estimate`
  - `/llms.txt`: `2026 planning pricing`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because Google Ads qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 438: Scanned public pages and AI feeds for exact/definitive pricing wording.
- Task 439: Updated payment CTA language to planning monthly estimate.
- Task 440: Updated `llms.txt` composite cost guide wording to planning pricing.
- Task 441: Updated shared FAQ exact-price wording.
- Task 442: Validated scan, schema, lint, build, production deploy, live HTML/feed checks, daily SEO, and IndexNow.
