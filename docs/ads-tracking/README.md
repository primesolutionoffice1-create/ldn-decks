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
| Design the revenue feedback loop after Phase 1A is stable | [PHASE-2-REVENUE-FEEDBACK-INFRASTRUCTURE.md](PHASE-2-REVENUE-FEEDBACK-INFRASTRUCTURE.md) |
| Execute the Phase 2 V1 Airtable + manual upload build | [PHASE-2-IMPLEMENTATION-CHECKLIST.md](PHASE-2-IMPLEMENTATION-CHECKLIST.md) |
| Implement the lead ingestion endpoint contract | [PHASE-2-WEBHOOK-CONTRACT.md](PHASE-2-WEBHOOK-CONTRACT.md) |
| Train the sales operator on Airtable stage hygiene | [PHASE-2-SALES-OPERATOR-SOP.md](PHASE-2-SALES-OPERATOR-SOP.md) |
| Run weekly manual offline conversion uploads | [PHASE-2-MANUAL-OFFLINE-UPLOAD-RUNBOOK.md](PHASE-2-MANUAL-OFFLINE-UPLOAD-RUNBOOK.md) |
| Copy Phase 2 field and upload templates | [templates/README.md](templates/README.md) |
| Decide when offline imports and Meta activation are allowed | [PHASE-3-4-ACTIVATION-GATES.md](PHASE-3-4-ACTIVATION-GATES.md) |

## What this branch adds

Three composable layers, all additive, all reversible:

1. **Click ID capture** — gclid/gbraid/wbraid/fbclid/msclkid → 90-day cookies → FormData → lead email Attribution block
2. **Conversion event reliability** — `event_id` UUID per submit, deduplicated `lead_confirmed` event on /thank-you page-view
3. **Meta CAPI server-side** — env-gated server endpoint, SHA-256 match keys, same event_id for Pixel dedup

Combined match-rate impact: ~60% (client-side only) → **~90-95%** (CAPI + Pixel + lead_confirmed).

## Maturation roadmap

This branch is the tracking foundation, not permission to scale spend. Treat the
roadmap as a hard sequence:

1. **Phase 1A — Stabilize attribution.** GTM migrates the Google Ads Lead tag
   to `lead_confirmed`, maps `event_id` as Transaction ID, validates Enhanced
   Conversions, and signs off cross-browser behavior.
2. **Phase 1B — Observe live leads.** Wait for 5-10 real production leads and
   verify click-ID persistence, `event_id` consistency, dedup stability, and
   Google Ads matching quality.
3. **Phase 2 — Revenue feedback infrastructure.** Persist leads into a simple
   datastore, attach booked-job outcomes and revenue values, and run manual
   offline conversion uploads before automating anything.
4. **Phase 3 — Offline conversion automation.** Only after manual uploads work
   reliably, automate Google Ads offline conversion uploads and conversion
   adjustments.
5. **Phase 4 — Meta activation.** Only after Google attribution and offline
   revenue feedback are stable, install Meta Pixel via GTM and enable Meta CAPI
   credentials.

Core rule: **reliable attribution first, optimization second, scale third.**

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
