---
brain_schema: ads-brain.v1
created: "2026-05-11"
type: platform
title: "Meta Ads"
platform: meta
status: blocked
updated: "2026-05-16"
sources:
  - "[[Meta Ads Live Verification 2026-05-16]]"
  - "[[Meta Ads Reset Audit 2026-05-17]]"
relationships:
  - "[[Creative Fatigue Board]]"
  - "[[Tracking and Attribution Risk Register]]"
  - "[[Current Platform Requirements 2026]]"
---

# Meta Ads

## Compiled Truth

Meta Ads coverage should include campaign/ad set/ad structure, Pixel and CAPI
health, Advantage+ usage, creative diversity, audience overlap, learning phase,
frequency, and attribution settings.

Live Meta spend reviewed on 2026-05-16 is not tied to verified lead tracking.
The visible active campaigns/ad sets/ads report link clicks, while Events
Manager shows the `leads` dataset has **0 total events**, has **never received
events**, and has **no integrations**. Treat Meta performance as blocked for
optimization decisions until lead tracking is fixed and verified.

Repo-side remediation started on 2026-05-16: direct Meta Pixel fallback was
added with dataset ID `695923313293515`, PageView, and Lead event firing from
`lead_confirmed` with shared `event_id`. The fix is deployed on Vercel
production at commit `29e027a`, and live HTML contains Meta Pixel markers.
Events Manager now receives browser activity for the dataset: Overview lists
`Lead` and `PageView` as active, and Test Events processed a `PageView` from
`ldndecks.com`. Reset audit on 2026-05-17 found the active post ad is not a
website lead ad: it uses `Call now` with `tel:+15716557207`, the post text only
mentions `ldndecks.com`, and `Website events` is unchecked. Events Manager Test
Events now processes browser `Lead` and `PageView`, so the remaining blocker is
campaign structure/destination, not base Pixel delivery.

## 2026 Gates

- Pixel plus Conversions API coverage, with `event_id` and `event_name`
  deduplication evidence where both browser and server events fire.
- Graph/Marketing API version and expiration documented before connector work.
- Event time, action source, domain, and customer information quality checked.
- Advantage+ setup, creative diversity, learning phase, and attribution-window
  evidence before scale recommendations.

## V1 Import Priority

- Campaign export
- Ad set export
- Ad export
- Creative performance export
- Events Manager notes or screenshots

---

## Timeline

- 2026-05-16 - Read-only live UI audit found active Meta spend reporting link
  clicks, one recent messaging campaign with 3 conversations, and a `leads`
  dataset with 0 events/no integrations. See [[Meta Ads Live Verification 2026-05-16]].
- 2026-05-16 - Implemented repo-side direct Meta Pixel fallback; lint/build
  passed. Awaiting deploy and live Events Manager verification.
- 2026-05-16 - Deployed repo-side Meta Pixel fallback to production in commit
  `29e027a`; live fetch confirmed pixel markers. Awaiting Events Manager
  verification with a real test lead.
- 2026-05-16 - Events Manager now shows `Lead` and `PageView` active for
  dataset `695923313293515`; Test Events processed `PageView` from
  `ldndecks.com`. Still blocked until a fresh real lead submit confirms `Lead`.
- 2026-05-17 - [[Meta Ads Reset Audit 2026-05-17]]: active post ad uses
  `Call now` / `tel:+15716557207`, not a website destination, and `Website
  events` is unchecked. Events Manager Test Events processed browser `Lead`
  and `PageView`. Relaunch requires a new website lead campaign using dataset
  `695923313293515` and optimization event `Lead`.
- 2026-05-11 - Platform placeholder created.
