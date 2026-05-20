---
source_type: google_ads_script_logs
captured: "2026-05-14"
platform: google
account: "Loudoun Decks Builder-2"
---

# Google Ads Live Setup Verification - 2026-05-14

Immutable capture of live-account verification performed from Google Ads UI and Google Ads Scripts on 2026-05-14.

## Active Campaign Baseline

Execution evidence from Google Ads script logs:

- `SRCH | Composite | 3 Counties | Calls`: ENABLED, Search, budget 90/day, Maximize conversions, search partners false, display false, geo presence.
- `SRCH | Replacement + Resurfacing | 3 Counties | Calls`: ENABLED, Search, budget 45/day, Maximize conversions, search partners false, display false, geo presence.
- `SRCH | Branded | 3 Counties | Calls`: ENABLED, Search, budget 15/day, Maximize conversions, search partners false, display false, geo presence.

Legacy campaigns verified paused:

- `Premium Composite Decks`
- `loudoun decks`
- `Fairfax-Search-Search - Deck Leads - VA - May 2025`
- `Deck Repair - Loudoun County`
- `PMAX cu remarketing`
- `Pmax - Dec4`
- `Loudoun Decks - Lead Gen - Demand Gen 2026`
- `Centreville Deck Builder`

## Conversion Baseline

- Primary optimization action: `Qualified Call (Ads) - 60s`
- Type: `AD_CALL`
- Primary: true
- Include in conversions: true
- Duration threshold: 60 seconds
- Counting: one
- Customer goal observed biddable: `PHONE_CALL_LEAD / CALL_FROM_ADS`

Known residue:

- `UNKNOWN / GOOGLE_HOSTED` customer goal remained biddable. Google Ads API rejected mutation because `UNKNOWN` in the resource name is invalid. Treat this as a watch item, not a current blocker, because the launch campaigns are calls-first and optimized to call lead goals.

## Repair Split And Cannibalization Guardrails

Campaign-level repair/service negatives were added to the Composite and Replacement campaigns, not globally, so a future Repair campaign can run separately.

Observed outcome:

- Composite received 15 repair/service negatives.
- Replacement + Resurfacing received 18 repair/service negatives.
- Total successful negative additions: 33.

Intent guardrail:

- Repair terms are excluded from Composite/Replacement because repair attracts cheaper, lower-ticket intent and can dilute high-ticket replacement/composite bidding.

## Branded Policy Fix

Issue:

- Google policy topic: `PHONE_NUMBER_IN_AD_TEXT`
- Two branded RSA ads were limited because the phone number appeared directly inside ad copy.

Fix applied:

- Created clean replacement RSA ads without phone number in headline/description.
- Removed policy-limited RSA `808840970585` in `Brand Exact`.
- Removed policy-limited RSA `808840970594` in `Brand Phrase`.
- Phone number remains eligible through the call asset, not through RSA text.

Final active policy audit:

- Active ads audited: 18
- Active non-approved: 2
- Both non-approved ads are new Branded RSA replacements in `REVIEW_IN_PROGRESS`, approval `UNKNOWN`, with no policy topics returned.

## Budget Baseline

Live daily budget total: 150/day.

- Composite: 90/day
- Replacement + Resurfacing: 45/day
- Branded: 15/day
- PMax remarketing: 0/day at launch because the PMax campaign is paused.

## Launch Guardrails

- Exact + phrase only.
- No broad match at launch.
- No PMax prospecting.
- PMax remarketing remains paused until traffic volume and conversion trust justify it.
- First optimization cycle should focus on search terms, negatives, lead quality, calls over 60 seconds, and campaign-level cannibalization.

