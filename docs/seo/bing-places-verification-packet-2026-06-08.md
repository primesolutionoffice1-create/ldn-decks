# Bing Places Verification Packet

Date: 2026-06-08
Platform: Bing Places / Bing Maps
Canonical public URL: https://www.bing.com/maps?ss=ypid.YND1AFC4105F09B172&mkt=en-US
Canonical entity: Loudoun Decks

## Why This Matters

Bing Places is already recorded as published and synced with Google from prior owner/dashboard evidence. It is a high-leverage local entity source because Bing Maps contributes to Microsoft local search surfaces and can influence downstream AI/search retrieval. The current task is not to create a new listing. The task is to archive current proof and confirm that the public Bing Maps listing still matches the canonical business identity.

## Current Known State

| Item | Status |
| --- | --- |
| Public Bing Maps URL | `https://www.bing.com/maps?ss=ypid.YND1AFC4105F09B172&mkt=en-US` |
| Prior dashboard verification | Verified internally on 2026-05-16. |
| Publish state | Recorded as live/published in dashboard. |
| Sync state | Recorded as synced with Google. |
| NAP/website | Recorded as correct on 2026-05-16. |
| Email | `office@ldndecks.com` added on 2026-05-16. |
| Prior dashboard metric | 87 views for Apr 13-May 12, 2026. |
| Remaining proof gap | Current screenshot archive and fresh public re-check. |

## Canonical Fields To Confirm

| Field | Canonical value |
| --- | --- |
| Business name | Loudoun Decks |
| Website | https://ldndecks.com/ |
| Phone | +1 571-655-7207 |
| Email | office@ldndecks.com |
| Address | 13704 Winding Oak Cir, Centreville, VA 20121 |
| Primary category | Deck Builder, Contractor, or closest Bing/Google-synced equivalent |
| Service areas | Loudoun County, Fairfax County, Prince William County, Arlington County, Stafford County |

## Owner/Admin Verification Steps

1. Open the public Bing Maps URL:
   `https://www.bing.com/maps?ss=ypid.YND1AFC4105F09B172&mkt=en-US`
2. Capture the public listing screenshot with URL bar visible.
3. Log in to Bing Places.
4. Open the Loudoun Decks listing.
5. Capture dashboard screenshots for:
   - claim/publish state;
   - sync state with Google;
   - business name, address, phone, and website;
   - email field;
   - categories;
   - recent performance/views if visible.
6. If categories are locked because the listing is synced from Google, confirm the category source in the screenshot and update GBP first if needed.

## Screenshot Requirements

| Screenshot | Required? | Notes |
| --- | --- | --- |
| Public Bing Maps place card | Yes | URL bar visible; shows public identity. |
| Bing Places dashboard overview | Yes | Shows listing status. |
| NAP/details screen | Yes | Shows name, address, phone, website. |
| Google sync state | Yes, if visible | Important because Bing locks some synced fields. |
| Category screen | Yes | Shows category source or editable state. |
| Email/contact field | Yes | Confirms `office@ldndecks.com` if visible. |
| Performance/views | Optional | Useful for historical continuity only; do not publish view counts without approval. |

## Proof Ops Acceptance Criteria

The Bing Places task can move from `owner-needed` to `owner-verify-live` when:

- a current public Bing Maps screenshot is archived;
- dashboard screenshot confirms the listing is claimed/published or synced;
- canonical NAP and website are visible in either public or dashboard evidence.

The task can move to `resolved` when:

- the public Bing Maps listing shows canonical `Loudoun Decks` identity;
- dashboard evidence confirms current publish/sync state;
- no old Prime Solutions/Ashburn variant is visible as the primary public identity;
- screenshots are stored in the proof archive.

## SameAs Policy

Bing Maps can be added to `src/lib/business.js` `sameAs` after:

- a current public Bing Maps screenshot confirms canonical NAP and URL;
- the public URL remains stable;
- dashboard or public profile evidence confirms the listing is live.

Until then, keep Bing as verified in internal docs but do not promote it as a fresh public proof citation beyond existing operational notes.
