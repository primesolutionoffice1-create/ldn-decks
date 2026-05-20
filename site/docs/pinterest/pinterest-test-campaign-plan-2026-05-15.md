# Pinterest Test Campaign Plan - 2026-05-15

Status: `draft - do not launch until Pinterest Event Manager confirms PageVisit and Lead events`

Sources:

- Pinterest product specs recommend `2:3` / `1000 x 1500` standard image creatives: https://help.pinterest.com/en/business/article/pinterest-product-specs
- Pinterest lists `Lead` as a standard conversion event for interest in products or services: https://help.pinterest.com/en/business/article/track-conversions-with-pinterest-tag
- Pinterest conversion campaigns should be evaluated over a weekly/monthly window and allowed `3-5 days` to recalibrate after changes: https://help.pinterest.com/en/business/article/conversions-campaigns
- Pinterest notes tag installation can take up to `24 hours` to show in Ads Manager: https://help.pinterest.com/en/business/article/install-the-pinterest-tag

## Launch Gate

Do not publish paid spend until all are true:

- Base Pinterest tag fires on `https://ldndecks.com/`.
- `lead` event fires on `https://ldndecks.com/thank-you`.
- Event Manager shows recent event history for the tag ID `2612622395697`.
- One test lead can be matched to website form submission time.
- No duplicate lead event fires on a single thank-you page view.

## Campaign Structure

Campaign name:

`PIN | Leads | Northern Virginia Decks | 2026-05`

Objective:

Conversions, optimized to `Lead` only after the launch gate is passed. If Lead is not available yet, hold campaign in draft and continue organic posting.

Budget:

Start at `$10-$20/day` for 7 days. Do not scale before at least 7 days of clean data. If lead volume is too low, assess creative click-through and landing-page engagement before increasing budget.

Geography:

Primary: Loudoun County and nearby Northern Virginia markets.

Priority cities:

- Ashburn
- Leesburg
- Sterling
- Reston
- Herndon
- Chantilly
- Fairfax
- Great Falls
- McLean
- Vienna

Audience:

Start with interest and keyword intent around:

- deck ideas
- composite decking
- Trex deck
- TimberTech deck
- deck resurfacing
- deck repair
- backyard renovation
- patio and outdoor living
- porch and pergola ideas

Exclude or deprioritize:

- DIY-only intent
- renter-focused home decor
- national inspiration with no local service intent

## Creative Test

Use these four creative clusters:

| Cluster | Assets | Landing page | Hypothesis |
| --- | --- | --- | --- |
| Composite decks | `composite-deck-detail-loudoun-2x3.jpg`, `composite-deck-ideas-nova-2x3.jpg` | `/composite-decks` | Low-maintenance composite messaging attracts higher-budget projects. |
| Local proof | `custom-deck-loudoun-backyard-2x3.jpg`, `finished-deck-ashburn-vertical-2x3.jpg`, `custom-deck-reston-2x3.jpg` | city/service pages | Local city relevance improves lead quality. |
| Resurfacing/replacement | `deck-resurfacing-before-after-2x3.jpg`, `elevated-deck-design-2x3.jpg` | `/services/deck-resurfacing`, `/services/deck-replacement` | Repair and replacement intent creates faster estimate requests. |
| Outdoor living | `deck-lighting-outdoor-living-2x3.jpg`, `deck-railing-detail-2x3.jpg`, `deck-stairs-northern-virginia-2x3.jpg` | `/outdoor-living-northern-virginia`, `/showcase` | Inspiration-led users need a gallery path before the estimate CTA. |

## First 7-Day Operating Rules

- Make no more than one meaningful change every `3-5 days`.
- Pause an asset only if it spends meaningfully with poor outbound click rate or irrelevant traffic.
- Do not judge conversion performance daily; use 7-day readouts first.
- Keep organic posting active at `2 pins/day` while paid test runs.
- Use `utm_medium=paid_social` for all promoted URLs.

## Success Signals

Primary:

- Verified Pinterest `lead` events in Event Manager.
- Form submissions from Pinterest UTM traffic.
- Cost per qualified estimate request.

Secondary:

- Outbound click-through rate.
- Saves and closeups by creative.
- Landing page engagement and phone-click behavior.

## Rollback

If Event Manager shows duplicate or missing events, pause campaign drafts and return to organic posting only. Fix tag firing first, then restart a fresh 7-day test window.
