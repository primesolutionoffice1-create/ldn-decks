# Google Ads Read-Only Audit - 2026-06-09

Account reviewed: `943-907-4542 Loudoun Decks Builder-2`

Date range reviewed in Google Ads: `May 10 - Jun 8, 2026`

Scope: Google Ads account structure, campaign performance, conversion setup, search terms, immediate correction priorities.

Mode: Read-only audit. No campaign, budget, bid strategy, GTM, or conversion changes were made.

## Executive Summary

The account is active and spend is running, but the current optimization layer is not strong enough for aggressive scaling. The biggest issue is not traffic volume; it is measurement trust.

Active search campaigns spent about `$4,122.22` in the reviewed 30-day window and produced only `3.00` reported conversions across the three enabled campaigns. That puts the active search CPA at roughly `$1,374`, which is too high for controlled scaling unless those conversions are confirmed as premium booked opportunities.

The strongest immediate blockers are:

1. The branded campaign is running with a Google Ads warning: targeted goal is missing a primary conversion action.
2. The main website form conversion action, `Submit lead form`, is `Needs attention` and recorded `0.00` all conversions in the reviewed period.
3. The account appears to be optimizing mostly from call conversions, especially `Qualified Call (Ads) - 60s`, not confirmed form leads or revenue-qualified leads.
4. Composite campaign search terms show material/product research leakage, especially `trex decking`, with high spend and no conversion.
5. Smart Bidding is active through Maximize Conversions, but the conversion signal is too thin and partially misconfigured for confident scaling.

## What Is Set Up Well

The account has a useful campaign split by service intent:

- `SRCH | Composite | 3 Counties | Calls`
- `SRCH | Replacement + Resurfacing | 3 Counties | Calls`
- `SRCH | Branded | 3 Counties | Calls`

The enabled campaigns are focused on Search, which is the correct channel for high-intent deck contractor demand.

There is a dedicated branded campaign. That is correct because brand traffic should be protected and measured separately from non-brand acquisition.

There is at least one active high-intent call conversion action:

- `Qualified Call (Ads) - 60s`
- Source: Calls from ads
- Status: Active
- Optimization: Primary
- Count: One
- All conversions: `9.00`

Search term data is available and useful enough for cleanup. This means waste can be reduced quickly without rebuilding the whole account from scratch.

## Main Problems To Fix

### 1. Conversion Measurement Is Not Clean Enough

Google Ads shows:

- `Submit lead form`: `Needs attention`, Primary, included in account-level goals, `0.00` all conversions.
- `Qualified Call (Ads) - 60s`: Active, Primary, included in account-level goals, `9.00` all conversions.
- `Lead form - Submit`: Secondary, no recent conversions.
- GA4 lead/form events are secondary and mostly show no recent conversions.
- `Request quote` goal is misconfigured.
- `Engagement` goal is misconfigured.

This means the account is not yet giving Google a trustworthy picture of lead quality. Before scaling, the account needs one clean primary lead-confirmation signal and one clean qualified-call signal.

Priority fix:

- Confirm whether the website form should fire `lead_confirmed`.
- Confirm Google Ads receives it as the primary form lead conversion.
- Confirm `event_id` is used as transaction ID for deduplication where applicable.
- Keep low-value events like form starts secondary only.
- Do not optimize to page views, form starts, or weak engagement events.

### 2. Branded Campaign Has A Goal Configuration Warning

Campaign:

`SRCH | Branded | 3 Counties | Calls`

Observed:

- Status: Eligible (Limited)
- Warning: targeted goal is missing a primary conversion action.
- Spend: `$399.32`
- Clicks: `55`
- Conversions: `0.00`
- CTR: `39.29%`

Brand CTR is strong, but conversion setup is wrong or incomplete. Brand traffic should normally be one of the cleanest attribution sources.

Priority fix:

- Set the branded campaign to use the same clean primary lead/call goals as the rest of Search, unless there is a deliberate brand-only measurement strategy.
- Verify branded form and call conversions after a live test.

### 3. Composite Campaign Has Search Term Waste

Campaign:

`SRCH | Composite | 3 Counties | Calls`

30-day performance:

- Spend: `$2,364.53`
- Clicks: `235`
- Conversions: `2.00`
- CPA: `$1,182.27`
- Conversion rate: `0.85%`

High-spend search terms:

| Search term | Cost | Clicks | Conversions | Issue |
| --- | ---: | ---: | ---: | --- |
| `trex decking` | `$438.96` | `44` | `0.00` | Broad product/material research intent |
| `trex decking boards` | `$48.68` | `8` | `0.00` | Material-only intent |
| `deck trex` | `$40.43` | `3` | `0.00` | Ambiguous intent |
| `fiberon decking` | `$32.96` | `1` | `0.00` | Product/material research |

Not every product term should be blocked, because some material searches can become premium deck projects. But terms like `trex decking` and `trex decking boards` are too broad for current CPA performance.

Priority fix:

- Add exact/phrase negatives for clear material-only searches.
- Split high-intent installer/builder terms away from broad product research terms.
- Keep contractor-intent terms like `trex deck builder near me`, `composite deck contractor`, and `trex deck installer` eligible.

Recommended negative candidates:

- `[trex decking]`
- `[trex decking boards]`
- `"decking boards"`
- `"deck boards"`
- `"decking material"`
- `"decking materials"`
- `"decking prices"` if lead quality is poor
- `"decking calculator"` if found in further search terms
- `"home depot"`
- `"lowes"`
- `"diy"`
- `"how to install"`

Do not add broad negative `decking`, because it could block valuable searches like `composite decking contractor`.

### 4. Replacement + Resurfacing Campaign Is Relevant But Underperforming

Campaign:

`SRCH | Replacement + Resurfacing | 3 Counties | Calls`

30-day performance:

- Spend: `$1,358.37`
- Clicks: `69`
- Conversions: `1.00`
- CPA: `$1,358.37`
- Conversion rate: `1.45%`

Top observed terms are mostly relevant:

- `deck resurfacing`
- `deck builders near me`
- `deck replacement cost near me`
- `deck companies near me`
- `deck company near me`
- `reputable deck builders near me`
- `deck builder near me`

This campaign does not look like pure traffic waste. The issue is more likely one or more of:

- landing page mismatch
- weak offer/CTA
- missing trust proof above the fold
- conversion tracking not recording forms correctly
- too few conversion signals for Maximize Conversions
- expensive auction conditions

Competitor terms appeared:

- `sunburst decks` - already excluded
- `nova deck doctor` - not excluded in observed table

Priority fix:

- Add competitor negatives unless conquesting is intentional.
- Review landing page alignment for resurfacing/replacement intent.
- Test whether form submissions and calls are being recorded properly.
- Keep this campaign active only with tight search-term cleanup and conversion validation.

### 5. Maximize Conversions Is Running Before Measurement Is Fully Trusted

All active campaigns are using `Maximize conversions`.

That is not automatically wrong, but it is risky when:

- conversion count is low
- form conversion is `Needs attention`
- branded campaign is missing a primary conversion action
- offline quality is not imported
- reported conversions may be mostly calls, not booked opportunities

Priority fix:

- Do not move to tCPA/tROAS yet.
- Do not increase budgets yet.
- Stabilize primary conversion actions first.
- Validate 5-10 real leads with source, campaign, click ID, event ID, call/form type, and outcome.

## Campaign-Level Readout

| Campaign | Status | Budget | Cost | Clicks | Conversions | CPA | Audit status |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| `SRCH | Composite | 3 Counties | Calls` | Eligible | `$85/day` | `$2,364.53` | `235` | `2.00` | `$1,182.27` | Needs search-term cleanup and conversion validation |
| `SRCH | Replacement + Resurfacing | 3 Counties | Calls` | Eligible | `$50/day` | `$1,358.37` | `69` | `1.00` | `$1,358.37` | Relevant traffic, poor CPA, needs LP/tracking review |
| `SRCH | Branded | 3 Counties | Calls` | Eligible Limited | `$15/day` | `$399.32` | `55` | `0.00` | `$0.00` | Fix conversion goal warning immediately |

## Immediate Fix List

### Must Fix Before Scaling

1. Fix the branded campaign conversion-goal warning.
2. Investigate why `Submit lead form` is `Needs attention` and has `0.00` conversions.
3. Confirm the intended primary lead event is firing from the thank-you / confirmed lead path.
4. Confirm call conversion actions are not double-counting against other lead goals.
5. Add negative keywords for obvious material-only and DIY terms.
6. Add competitor negatives unless conquesting is a deliberate strategy.
7. Build a 5-10 lead validation sheet with campaign, search term, gclid/event_id where available, lead type, city, service, and booked/not booked status.

### Should Fix Next

1. Add image assets where Google recommends them.
2. Review all RSAs for premium deck-builder positioning, not generic contractor wording.
3. Tighten ad groups around buyer intent:
   - composite deck builder
   - Trex deck installer
   - deck replacement
   - deck resurfacing
   - deck contractor near me
   - branded
4. Separate material research from contractor intent.
5. Create or improve dedicated landing pages for:
   - composite decks
   - deck resurfacing/replacement
   - brand/general estimate page
6. Keep form starts, page views, and weak GA4 events secondary.

## What Not To Do Yet

Do not:

- increase budgets
- switch to tCPA
- switch to tROAS
- activate broader smart bidding experiments
- activate Meta CAPI in the same window
- optimize to form starts
- merge request quote, form submit, and call actions without dedup rules
- judge campaign quality only by current reported conversions until tracking is validated

## Recommended Next 7-Day Action Plan

Day 1:

- Fix branded campaign goal configuration.
- Test one real form submission through the website.
- Verify whether `Submit lead form` receives the conversion.
- Verify call conversion diagnostics.

Day 2:

- Add first-pass negatives:
  - material-only
  - DIY
  - jobs/careers
  - competitor names not intentionally targeted
  - supplier/store searches

Day 3:

- Review all active ad groups and RSAs.
- Remove weak or generic ad copy.
- Add premium/local trust signals.

Day 4:

- Review landing page alignment.
- Ensure composite queries land on composite-specific pages.
- Ensure replacement/resurfacing queries land on resurfacing/replacement content.

Day 5:

- Validate 3-5 live or test leads end-to-end.
- Confirm source/campaign/search term/click ID/event ID where available.

Days 6-7:

- Decide whether any paused legacy campaign structure has reusable lessons.
- Do not reactivate old campaigns only because historical CPA appears lower; verify conversion quality first.
- Prepare a clean optimization baseline before any budget increase.

## Scaling Gate

The account should stay in stabilization mode until:

- primary form lead conversion is active and verified
- branded campaign has no missing-primary-goal warning
- duplicate conversion risk is below 2%
- unattributed lead rate is below 15%
- at least 5-10 real leads are manually validated
- at least 3-5 qualified leads can be tied back to source/campaign
- no campaign is spending heavily on material-only terms

Only after that should the account consider budget increases, tCPA, tROAS, or broader scaling.

