# Google Ads Close Variant Containment - 2026-08-16

## Decision

Do not look for a "disable close variants" switch. Google Ads exact and phrase keywords remain eligible for close variants, so containment must be done with negative keywords, routing negatives, and campaign/ad group discipline.

## Source Data

- `docs/ads-tracking/Loudoun Decks Builder-2+Current view+2026-06-30.csv`
- Ads account scope observed in the export:
  - `SRCH | Branded | 3 Counties | Calls`
  - `SRCH | Composite | 3 Counties | Calls`
  - `SRCH | Replacement + Resurfacing | 3 Counties | Calls`
  - `SRCH | Premium Geo | Arlington Alexandria McLean | Leads`

## Key Read

Close variants are not all bad. Some product terms like `trex decking` and `timbertech decking` generated clicks at low CPC in this export. The problem set is narrower:

- competitor terms with no account benefit,
- material-only/product-line-only terms that are not contractor intent,
- low-quality price/affordable modifiers in Premium Geo,
- Trex/TimberTech/AZEK/composite queries falling into generic or resurfacing ad groups.

## Files Created

- `google-ads-import/15-close-variant-containment-negatives-2026-08-16.csv`
- `google-ads-scripts/ldn-close-variant-containment-2026-08-16.gs`

## What The Script Does

- Adds campaign-level negatives for competitor terms:
  - `glk custom decking`
  - `sundeck medics`
  - `valer deck and patio`
  - `deck man reviews`
  - `armor fence deck & patio nova`
  - `veterans choice deck and fence`
  - `nova decks and exteriors reviews`
- Adds product/material-only negatives to Composite.
- Adds Premium Geo cleanup negatives:
  - `"affordable"`
  - `"cheap"`
  - `"amish"`
  - `[deck builders manassas va]`
- Adds ad-group routing negatives:
  - Composite Deck Builder blocks `"trex"`, `"timbertech"`, `"azek"`.
  - Deck Resurfacing blocks `"trex"`, `"timbertech"`, `"azek"`, `"composite"`.

## What It Does Not Do

- Does not change bids.
- Does not change budgets.
- Does not pause campaigns.
- Does not alter conversion settings.
- Does not block high-intent terms like `trex deck builder near me`, `deck replacement near me`, or `deck resurfacing`.

## Expected Result

Cleaner search term intake, less CTR damage from competitor/product-only impressions, and better routing of brand/material searches into the intended ad groups.

## Live Execution Result - 2026-08-16

- Script executed in Google Ads as `LDN Close Variant Containment 2026-08-16`.
- Run time: Aug 16, 2026 7:47:20 AM to 7:48:53 AM New York time.
- UI result: 56 attempted changes, 55 successful, 1 error.
- Logs ended with `Done. Added: 56. Skipped existing or dry-run: 0. DRY_RUN=false`.
- The one UI error was `Keywords cannot be longer than 80 characters` for the long Trex Enhance Basics product-name negative.
- Fix: replace the >80-character exact negative with phrase negative `"trex enhance basics"` in `SRCH | Composite | 3 Counties | Calls`.
- Local script and CSV were cleaned to remove the >80-character negative and include the shorter phrase negative.
- Follow-up live fix: one-off script `LDN Trex Enhance Basics Negative Fix 2026-08-16` ran Aug 16, 2026 8:10 AM New York time and finished successfully with 1 successful change and 0 errors.
