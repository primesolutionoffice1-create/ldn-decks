---
brain_schema: ads-brain.v1
type: action
platform: google
priority: P1
campaign: "multiple"
ad_group: "multiple"
status: proposed
risk: medium
owner_approval_required: true
source_files:
  - "/Users/ldndecks/Downloads/Campaign report.csv"
  - "/Users/ldndecks/Downloads/Ad group report.csv"
  - "/Users/ldndecks/Downloads/Ad report.csv"
  - "/Users/ldndecks/Downloads/Search terms report.csv"
  - "/Users/ldndecks/Downloads/Search keyword report (4).csv"
  - "/Users/ldndecks/Downloads/LDN PRO Search Combined - preview_RESULTS.csv"
  - "/Users/ldndecks/Downloads/LDN PRO campaigns - preview_RESULTS.csv"
created: "2026-05-19"
proposed_by: "Codex ads-google skill"
approved_by: ""
applied_on: ""
review_on: "2026-06-02"
---

# Google Ads Skill Check And Setup 2026-05-19

## Context

Local audit only. No live Google Ads changes were applied.

Data reviewed covers **April 16, 2026 - May 15, 2026** and includes campaign, ad group, ad, search keyword, and search terms exports. The installed `ads-google` skill requires at least 30 days of data and Search Terms before a real audit; this data passes that requirement.

## Findings

- Installed ads skills are usable for Google Ads analysis.
- Export coverage is sufficient for a Google Ads audit: 17 campaign rows, 45 ad group rows, 73 ad rows, 642 keyword rows, and 6,500 search-term rows.
- Current active Search structure is directionally correct:
  - `SRCH | Composite | 3 Counties | Calls` at `$90/day`
  - `SRCH | Replacement + Resurfacing | 3 Counties | Calls` at `$45/day`
  - `SRCH | Branded | 3 Counties | Calls` at `$15/day`
- The active Search campaigns are still in learning. Do not make major bid or budget changes yet.
- Prior paused campaigns consumed most of the export-period spend. Search-term cleanup should focus on waste patterns before any scale-up.
- Search terms with `>$10` spend and `0` conversions total about `$2,076.84` visible spend across 82 terms.
- Import preview files failed:
  - `LDN PRO campaigns - preview_RESULTS.csv`: missing `EU political ads` on all 3 campaign rows.
  - `LDN PRO Search Combined - preview_RESULTS.csv`: invalid `Networks` value on campaign rows, then dependent errors because campaigns were not created.
- Keyword Quality Score is weak where available: average QS about `4.0`; 42 of 63 scored enabled keywords are `QS <= 4`.
- RSA coverage is mostly acceptable, but active ads include 3 `Poor` and 16 `Average` ad-strength rows.

## Recommendations

### 1. Do today

Keep the three active Search campaigns as the live structure for now:

- Composite: `$90/day`
- Replacement + Resurfacing: `$45/day`
- Branded: `$15/day`
- Keep PMax, Demand Gen, old location campaigns, and repair-heavy legacy campaigns paused until tracking and search terms stabilize.

Priority score: 9/10 | Revenue: 9 | Urgency: 9 | Difficulty: 2 | Speed: 8 | Confidence: 9

### 2. Do this week

Apply the Phase 1 negative keyword draft only after owner approval. Use phrase negatives for supplier, competitor, and off-offer patterns; do not block core high-ticket deck intent just because a term had 0 conversions in this export.

High-confidence phase 1 negative candidates already drafted:

- `tart lumber`
- `decksdirect`
- `nova stone ashburn`
- `contractors in my area`
- `manassas home improvement`
- `deck inspection`
- `patio repair near me`
- `core outdoor living`
- `loudoun deck and fence`
- `deck impact`
- `tw perry leesburg`
- `builders firstsource`
- `loudoun construction`
- `sunburst decks`

Priority score: 9/10 | Revenue: 8 | Urgency: 9 | Difficulty: 3 | Speed: 9 | Confidence: 8

### 3. Needs approval

Recommended change:
Apply Phase 1 negative keywords from `Google Ads Phase 1 Negative Keyword Draft 2026-05-17` to the matching campaigns as phrase-match negatives.

Reason:
Search terms with `>$10` spend and `0` conversions total about `$2,076.84` visible waste in the export window. The proposed negatives target supplier, competitor, and off-offer patterns rather than core deck-builder intent.

Expected impact:
Reduce low-fit spend and clean Smart Bidding signals during the current learning window.

Risk level:
Low to medium. Negative keywords are reversible, but an overly broad negative can block qualified searches.

Rollback plan:
Remove the added negative keywords from the campaign or shared negative list and re-check search terms after 7-14 days.

Approval required: YES

### 4. Do not do

- Do not enable Broad Match or AI Max until the negative keyword layer and call-quality feedback are stronger.
- Do not reactivate PMax or Demand Gen until the Search campaigns prove qualified-call quality.
- Do not use the failed `LDN PRO` import files as-is.
- Do not change conversion actions, GTM, GA4, budgets, bid strategies, or production tracking without action-specific approval.

Priority score: 10/10 | Revenue: 9 | Urgency: 10 | Difficulty: 1 | Speed: 10 | Confidence: 10

### 5. Single highest ROI action

Approve and apply the Phase 1 negative keyword cleanup, then re-export Search Terms after 7-14 days. This is the safest way to reduce waste while the new Search campaigns are still learning.

Priority score: 9/10 | Revenue: 8 | Urgency: 9 | Difficulty: 3 | Speed: 9 | Confidence: 8

## Import Fix Notes

For the failed Google Ads Editor import:

- Add `EU political ads` with value `No` on campaign rows.
- Do not use `Google search; Search partners: off; Display network: off` in the `Networks` column. Google Ads Editor rejected that value.
- Re-preview campaigns first. Only after campaign preview succeeds should ad groups, keywords, and ads be previewed.
- Keep import rows paused until final human review.

Recommended change:
Create a corrected Google Ads Editor import draft from the failed `LDN PRO` files and preview it only. Do not post live.

Reason:
The existing import failed because required campaign fields were missing/invalid, which caused dependent ad group and keyword rows to fail.

Expected impact:
Allows clean preview validation before any live upload.

Risk level:
Medium if posted live; low if kept as preview-only.

Rollback plan:
Discard the corrected CSV draft if preview results show structural errors.

Approval required: YES before any live Google Ads upload/post.

## Risks

- Search term data includes old paused campaigns, so do not infer that all waste is still active today.
- Some strong commercial terms had 0 conversions in the export but should be held out, not negated: `deck replacement near me`, `deck builders near me`, `fairfax deck builders`, `trex decking`, `deck repair near me`.
- Quality Score findings are partial because many rows show `--`; use them directionally, not as the only decision source.
- Branded campaign had spend on `[ldn decks]` with 0 conversions in this window, but it should not be paused solely from this small sample.

## Approval Gates

- Negative keyword upload: needs explicit approval.
- Budget changes: needs explicit approval.
- Bid strategy changes: needs explicit approval.
- PMax or Demand Gen reactivation: needs explicit approval.
- Conversion tracking or GTM/GA4 changes: needs explicit approval.
- Google Ads Editor post/import live: needs explicit approval.

