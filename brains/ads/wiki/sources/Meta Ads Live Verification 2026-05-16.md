---
brain_schema: ads-brain.v1
created: "2026-05-16"
type: source
title: "Meta Ads Live Verification 2026-05-16"
platform: meta
status: needs_review
updated: "2026-05-16"
source_kind: live-ui-observation
relationships:
  - "[[Meta Ads]]"
  - "[[Tracking and Attribution Risk Register]]"
  - "[[Approval Queue]]"
---

# Meta Ads Live Verification 2026-05-16

## Source

Read-only live UI observation in Meta Ads Manager and Events Manager for ad
account `654220273813699`.

Observed date: 2026-05-16 America/New_York.

## Scope

- Ads Manager date picker showed **Last 30 days: Apr 16, 2026 - May 15, 2026**.
- Campaigns, Ad sets, and Ads tabs were reviewed with the **Performance**
  columns visible.
- Events Manager overview was reviewed for the `leads` dataset.
- No campaign, ad set, ad, billing, or tracking settings were changed.

## Observed Campaign and Ad Results

| Object | Delivery | Reported result | Cost per result | Spend | Impressions | Reach | Schedule/end |
| --- | --- | ---: | ---: | ---: | ---: | ---: | --- |
| New Sales Campaign / New Sales Ad Set / New Sales Ad | In draft | - | - | - | - | - | Ongoing |
| Post: "Elevate Your Outdoor Living Experience" | Active | 24 link clicks | $1.40/link click | $33.69 | 4,319 | 2,315 | Ongoing |
| Post: "Your dream backyard is closer than you think" | Active, Low results | 136 link clicks | $1.38/link click | $187.00 | 11,884 | 6,209 | Ends May 17, 2026 |
| Promoting website: ldndecks.com | Completed | 316 landing page views | $0.22/LPV | $69.88 | 12,166 | 9,382 | Ended May 10, 2026 |
| Post: "Spring is here - and our calendar is filling up" | Completed | 3 messaging conversations started | $20.99/conversation | $62.97 | 2,691 | 1,981 | Ended May 10, 2026 |

Visible total spend from reviewed rows: **$353.54**.

## Events Manager Findings

| Dataset | ID | Total events | Status | Integrations |
| --- | --- | ---: | --- | --- |
| leads | 695923313293515 | 0 | Never received events; no event activity | No integrations |

## Diagnosis

Meta is currently reporting engagement or traffic proxy results, not verified
lead outcomes. The active spend is concentrated in campaigns/ad sets/ads whose
visible result is link clicks, while Events Manager shows the `leads` dataset
has never received events.

Because the lead dataset has zero events and no integrations, Meta does not
have a trustworthy lead signal for optimization, attribution, or quality
analysis. Any apparent low cost per click or landing page view should be treated
as traffic efficiency only, not business performance.

## Immediate Recommendation

Approval required before live account edits:

- Do not publish the 3 drafts until tracking is fixed.
- Pause or end the active Meta spend if owner approves, because current live
  optimization is not tied to verified leads.
- Build/verify Pixel + lead event and, if server-side events are added, require
  event deduplication evidence before using Meta results as optimization truth.
- Relaunch only with a lead-focused objective/event once Events Manager shows
  clean received lead events from the actual thank-you or confirmed-lead path.

## Related

- [[Meta Ads]]
- [[Tracking and Attribution Risk Register]]
- [[Day 0 Tracking and Privacy Gate]]
- [[Approval Queue]]
