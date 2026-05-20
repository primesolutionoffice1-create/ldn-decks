---
brain_schema: ads-brain.v1
created: "2026-05-15"
type: deliverable
title: "Pinterest Lead Setup Action Queue 2026-05-15"
status: needs_review
updated: "2026-05-17"
sources:
  - "[[Pinterest Business Setup Verification 2026-05-15]]"
relationships:
  - "[[Pinterest Business]]"
  - "[[Tracking and Attribution Risk Register]]"
  - "[[Day 0 Tracking and Privacy Gate]]"
---

# Pinterest Lead Setup Action Queue 2026-05-15

## Goal

Use Pinterest as a visual lead source for Loudoun Decks while keeping paid
optimization blocked until tracking is trustworthy.

## Action Queue

| ID | Action | Owner | Status | Expected Impact | Risk | Rollback |
| --- | --- | --- | --- | --- | --- | --- |
| PIN-01 | Install Pinterest Tag on `ldndecks.com`, including page view and lead/request-estimate events. | Assistant + Owner | verified_in_test_events | Allows Pinterest to attribute and optimize for real leads. | Misconfigured event can inflate conversions or miss leads. | Remove tag trigger or pause Pinterest campaigns. |
| PIN-02 | Decide whether Pinterest Conversions API is needed after browser tag validation. | Assistant | draft | Improves event resilience if browser-only tracking is weak. | Requires dedup evidence before optimization trust. | Keep browser-only tag until CAPI is proven. |
| PIN-03 | Create vertical 2:3 creative templates for deck ideas, before/after, composite details, railings, resurfacing, and repairs. | Assistant | implemented_pending_review | Reduces Pinterest aspect-ratio warnings and improves native fit. | Poor visuals can lower saves/click-through. | Revert to best-performing showcase imagery. |
| PIN-04 | Keep 2-3 daily organic posts running with destination URLs mapped to service or showcase pages. | Assistant | 12_of_12_posted_complete | Builds visual discovery and retargeting base. | Low-quality repetition can dilute profile quality. | Pause automation or reduce cadence to 1/day. |
| PIN-05 | Build a Pinterest landing-page URL map for decks, resurfacing, repair, TimberTech, outdoor living, and estimate intent. | Assistant | implemented_pending_review | Improves lead routing and later campaign structure. | Wrong destination can reduce conversion rate. | Redirect pins to `/showcase` or `/get-estimate`. |
| PIN-06 | Draft a conservative Pinterest conversions test campaign plan gated on Event Manager proof. | Assistant | ready_budget_approval_required | Gives a ready structure once tracking is trusted. | Launching before exact budget approval can waste spend and pollute optimization. | Keep campaign in draft and use organic posting only. |

## Do Not Scale Until

- Owner approves the draft Pinterest test campaign plan.
- Event quality is reviewed after enough real traffic exists.
- GTM/Consent implications are reviewed against [[Day 0 Tracking and Privacy Gate]].
- First organic posts have enough click/save signal to identify useful creative
  patterns.

## Implementation Evidence

- Pinterest advertiser ID observed: `549768468889`.
- Pinterest Tag ID observed: `2612622395697`.
- Site files changed: `src/app/layout.js`, `src/lib/tracking.js`.
- Local checks: `npm run lint` passed; `npm run build` passed.
- Deployment: commit `c31088e` pushed to `main`.
- Live HTML check: `https://ldndecks.com/thank-you` contains `pintrk`, Tag ID
  `2612622395697`, `s.pinimg.com`, and `ct.pinterest.com`.
- Pinterest Test Events confirmation: `LEAD` received with Event ID
  `pinterest-test-2026-05-15`; `INITIALIZED` also received. Ingestion source
  `Tag`, setup method `Manual`, time received 2026-05-15 19:28:56
  America/New_York.
- Repo creative pack: 12 Pinterest assets at `public/pinterest/`, all verified
  `1000x1500`.
- Repo planning docs:
  `docs/pinterest/pinterest-lead-url-map-2026-05-15.md` and
  `docs/pinterest/pinterest-test-campaign-plan-2026-05-15.md`.
- Organic repo-pack pins posted on 2026-05-15:
  `https://www.pinterest.com/pin/1058838562408214368` and
  `https://www.pinterest.com/pin/1058838562408214391`.
- Organic repo-pack pins posted on the 2026-05-16 UTC heartbeat:
  `https://www.pinterest.com/pin/1058838562408229449` and
  `https://www.pinterest.com/pin/1058838562408229455`.
- Organic repo-pack pins posted on the continued 2026-05-16 manual run:
  `https://www.pinterest.com/pin/1058838562408234022` and
  `https://www.pinterest.com/pin/1058838562408234035`.
- Organic repo-pack pins posted on the 2026-05-16 heartbeat continuation:
  `https://www.pinterest.com/pin/1058838562408234164` and
  `https://www.pinterest.com/pin/1058838562408234214`.
- Organic repo-pack pin posted on the 2026-05-16 evening heartbeat:
  `https://www.pinterest.com/pin/1058838562408250863`. Direct board fetch
  confirmed it as the current top board item.
- Organic repo-pack pins posted on the 2026-05-17 UTC heartbeat:
  `https://www.pinterest.com/pin/1058838562408264493` for the direct estimate
  CTA mapped to `/get-estimate` and
  `https://www.pinterest.com/pin/1058838562408264502` for the wood deck asset
  mapped to `/wood-decks`. Direct public board fetch confirmed both titles and
  board `numberOfItems:93`.
- Third-run tag/signal check on 2026-05-17 UTC: live pages `/`,
  `/get-estimate`, and `/thank-you` still contain the Pinterest base tag, Tag ID
  `2612622395697`, `s.pinimg.com`, and `ct.pinterest.com`. Public Pinterest
  board HTML confirms first organic pins remain visible, but public HTML does
  not expose impressions, outbound clicks, or saves.
- Final organic repo-pack pin posted on the 2026-05-17 UTC heartbeat:
  `https://www.pinterest.com/pin/1058838562408266285` for the deck
  lighting/outdoor living asset mapped to `/outdoor-living-northern-virginia`.
  Direct public board fetch confirmed the title `Deck Lighting and Outdoor
  Living Ideas`. Organic posting sequence is complete at 12 of 12 assets.
- Still needed: exact owner-approved daily budget before any paid Pinterest
  launch, then monitor Event Quality and lead quality before increasing budget.
