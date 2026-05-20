---
brain_schema: ads-brain.v1
created: "2026-05-15"
type: platform
title: "Pinterest Business"
platform: pinterest
status: browser_tag_verified
updated: "2026-05-17"
sources:
  - "[[Pinterest Business Setup Verification 2026-05-15]]"
relationships:
  - "[[Tracking and Attribution Risk Register]]"
  - "[[Pinterest Lead Setup Action Queue 2026-05-15]]"
  - "[[Day 0 Tracking and Privacy Gate]]"
---

# Pinterest Business

## Compiled Truth

Pinterest Business is now active for Loudoun Decks organic lead support. The
profile bio has been rewritten around custom decks, resurfacing, repairs,
Northern Virginia service coverage, licensed/insured trust language, and the
free-estimate CTA. Instagram `@loudoundecks` is claimed and auto-publishing to
the board `From decks to patios`. The domain `ldndecks.com` is claimed.

Two lead-focused pins were published from the showcase page on 2026-05-15:
[[Pinterest Business Setup Verification 2026-05-15]].

Pinterest Tag ID `2612622395697` is now implemented in the site repo via
`src/app/layout.js`, with `lead_confirmed` mapped to Pinterest `lead` in
`src/lib/tracking.js`. Local lint and production build passed. Pinterest Test
Events confirmed `LEAD` with event ID `pinterest-test-2026-05-15` and
`INITIALIZED` from `https://ldndecks.com` through the browser Tag at
2026-05-15 19:28:56 America/New_York.

Creative preparation is now in place in the site repo: 12 vertical Pinterest
assets were generated at `1000x1500` under `public/pinterest/`, with a
destination/UTM/copy map at
`docs/pinterest/pinterest-lead-url-map-2026-05-15.md` and a draft test campaign
plan at `docs/pinterest/pinterest-test-campaign-plan-2026-05-15.md`.

The repo creative pack posting sequence is complete. Twelve organic pins have
been published to `From decks to patios`:
`https://www.pinterest.com/pin/1058838562408214368` and
`https://www.pinterest.com/pin/1058838562408214391` from the first run, plus
`https://www.pinterest.com/pin/1058838562408229449` and
`https://www.pinterest.com/pin/1058838562408229455` from the 2026-05-16 UTC
heartbeat run, plus `https://www.pinterest.com/pin/1058838562408234022` and
`https://www.pinterest.com/pin/1058838562408234035` from the continued
2026-05-16 manual run, plus `https://www.pinterest.com/pin/1058838562408234164`
and `https://www.pinterest.com/pin/1058838562408234214` from the 2026-05-16
heartbeat continuation, plus `https://www.pinterest.com/pin/1058838562408250863`
from the 2026-05-16 evening heartbeat, plus
`https://www.pinterest.com/pin/1058838562408264493` and
`https://www.pinterest.com/pin/1058838562408264502` from the 2026-05-17 UTC
heartbeat, plus `https://www.pinterest.com/pin/1058838562408266285` from the
2026-05-17 final heartbeat.

## Lead Setup Status

- Profile optimization: implemented.
- Domain claim: verified in Pinterest Business Hub.
- Instagram claim: verified in Pinterest Business Hub.
- Organic posting cadence: 12 of 12 repo-pack pins posted; sequence complete.
- Pinterest Tag: browser tag verified in Pinterest Test Events.
- Creative pack: implemented in repo; all 12 of 12 assets posted.
- Landing-page URL map: implemented in repo.
- Test campaign plan: ready for owner budget approval before launch.
- Paid-media readiness: browser-tag gate passed; budget launch still needs exact
  daily budget approval, Business Hub organic signal review, and first-campaign
  risk review.

## 2026 Gates

- Pinterest Tag installed and detectable on `ldndecks.com`.
- Lead conversion event configured and tested.
- Server-side or API event pipeline, if used, has deduplication evidence before
  it is treated as optimization truth.
- Campaign spend, if started, uses conservative budgets until lead quality and
  attribution are verified.

## V1 Import Priority

- Profile/account screenshots.
- Pinterest Tag/Event Manager screenshots.
- Pin/post export or manual post log.
- Campaign/ad group/ad export if paid Pinterest campaigns launch later.

---

## Timeline

- 2026-05-15 - Pinterest profile optimized, Instagram reconnected, Instagram
  auto-publish confirmed, domain claim confirmed, two lead-focused pins
  published, and Pinterest Tag ID `2612622395697` implemented in the site repo.
  Live Event Manager verification remains the gating risk.
- 2026-05-15 - Created 12 verified 2:3 Pinterest assets plus URL map and draft
  campaign plan in repo.
- 2026-05-15 - Pinterest Test Events confirmed `LEAD` with Event ID
  `pinterest-test-2026-05-15` and `INITIALIZED`, ingestion source `Tag`, setup
  method `Manual`, received 2026-05-15 19:28:56 America/New_York.
- 2026-05-15 - Published the first two pins from the 12-asset repo creative
  pack to `From decks to patios`: `https://www.pinterest.com/pin/1058838562408214368`
  and `https://www.pinterest.com/pin/1058838562408214391`.
- 2026-05-16 UTC - Published the next two repo-pack pins to `From decks to
  patios`: `https://www.pinterest.com/pin/1058838562408229449` and
  `https://www.pinterest.com/pin/1058838562408229455`.
- 2026-05-16 - Continued the repo-pack sequence with two more pins to `From
  decks to patios`: `https://www.pinterest.com/pin/1058838562408234022` and
  `https://www.pinterest.com/pin/1058838562408234035`.
- 2026-05-16 - Heartbeat continuation published two more repo-pack pins to
  `From decks to patios`: `https://www.pinterest.com/pin/1058838562408234164`
  and `https://www.pinterest.com/pin/1058838562408234214`.
- 2026-05-16 - Evening heartbeat published one additional repo-pack pin to
  `From decks to patios`: `https://www.pinterest.com/pin/1058838562408250863`.
  Direct board fetch confirmed it as the top board item; the next direct
  estimate CTA pin was prepared but not counted because no pin URL was confirmed.
- 2026-05-17 UTC - Heartbeat published two additional repo-pack pins to `From
  decks to patios`: `https://www.pinterest.com/pin/1058838562408264493` and
  `https://www.pinterest.com/pin/1058838562408264502`. Direct public board
  fetch confirmed both new titles and raised the board `numberOfItems` to 93.
  Pinterest organic sequence is now 11 of 12 repo-pack assets posted.
- 2026-05-17 UTC - Third-run signal check: live fetches of `/`, `/get-estimate`,
  and `/thank-you` all still contain `pintrk`, Tag ID `2612622395697`,
  `s.pinimg.com`, and `ct.pinterest.com`. Public Pinterest board HTML confirms
  the first organic pins remain visible, but does not expose impression, click,
  or save counts. Small paid test remains held until Business Hub organic
  analytics are reviewed and the owner approves an exact daily budget.
- 2026-05-17 UTC - Final heartbeat published the last repo-pack pin to `From
  decks to patios`: `https://www.pinterest.com/pin/1058838562408266285` for
  the deck lighting/outdoor living asset mapped to
  `/outdoor-living-northern-virginia`. Direct public board fetch confirmed the
  title `Deck Lighting and Outdoor Living Ideas`. Pinterest organic repo-pack
  sequence is complete at 12 of 12 assets posted.
