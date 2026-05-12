# Ads Tracking Infrastructure

Documentation for the `feat/ads-tracking-instrumentation` branch.

## Start here

| If you want to... | Read |
|---|---|
| Understand what changed and why | [TRACKING-CHANGELOG.md](TRACKING-CHANGELOG.md) |
| Deploy this to production | [DEPLOY-CHECKLIST.md](DEPLOY-CHECKLIST.md) |
| Roll back if something goes wrong | [ROLLBACK-PLAN.md](ROLLBACK-PLAN.md) |
| Set up the required env vars | [ENV-SETUP.md](ENV-SETUP.md) |
| Validate before merging | [QA-TEST-PLAN.md](QA-TEST-PLAN.md) |

## What this branch adds

Three composable layers, all additive, all reversible:

1. **Click ID capture** — gclid/gbraid/wbraid/fbclid/msclkid → 90-day cookies → FormData → lead email Attribution block
2. **Conversion event reliability** — `event_id` UUID per submit, deduplicated `lead_confirmed` event on /thank-you page-view
3. **Meta CAPI server-side** — env-gated server endpoint, SHA-256 match keys, same event_id for Pixel dedup

Combined match-rate impact: ~60% (client-side only) → **~90-95%** (CAPI + Pixel + lead_confirmed).

## Why this isn't in the main SEO branch

This work is **revenue infrastructure**, not marketing content. Mixing it
with SEO branch work created risk of:

- Accidentally reverting tracking code when SEO branch is rolled back
- Hard-to-review PRs combining unrelated concerns
- Deployment confidence ambiguity (which change broke conversions?)
- Slower iteration on either concern

Separating into its own branch enables:
- Atomic commit history for tracking changes
- Independent rollback per [ROLLBACK-PLAN.md](ROLLBACK-PLAN.md)
- Focused code review
- Clean PR for ops/sales sign-off (one feature, not five)
