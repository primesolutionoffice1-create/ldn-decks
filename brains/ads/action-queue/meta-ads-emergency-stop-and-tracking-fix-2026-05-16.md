---
brain_schema: ads-brain.v1
type: action
title: "Meta Ads Emergency Stop and Tracking Fix 2026-05-16"
status: needs_review
approval_status: needs_review
owner: "Loudoun Decks"
created: "2026-05-16"
updated: "2026-05-16"
platform: meta
sources:
  - "[[Meta Ads Live Verification 2026-05-16]]"
  - "[[Tracking and Attribution Risk Register]]"
rollback: "Re-enable paused campaigns only after lead tracking is verified and owner approves relaunch."
---

# Meta Ads Emergency Stop and Tracking Fix 2026-05-16

## Recommendation

1. Get owner approval to stop waste: pause or end the two active Meta rows that
   are spending against link-click results.
2. Do not publish the 3 drafts currently waiting in Ads Manager.
3. Fix Meta tracking before any relaunch: connect Pixel/dataset, fire a lead
   event from the confirmed lead path, and verify Events Manager receives it.
4. Relaunch only after the `leads` dataset receives clean events and the
   campaign objective/optimization event is tied to leads, not generic traffic.

## Code-Side Progress

- 2026-05-16: Added direct Meta Pixel fallback in the repo because Events
  Manager showed the `leads` dataset had never received events.
- Pixel ID/dataset default: `695923313293515`.
- `PageView` now fires from the root layout.
- `Lead` now fires from `trackLeadConfirmed()` with the existing shared
  `event_id` passed as Meta `eventID` for deduplication.
- CSP Report-Only allowlist now includes Meta Pixel domains.
- Verification passed: `npm run lint`, `npm run build`, build-output search,
  and local browser load of `/thank-you?eid=codex-meta-test-2026-05-16`.

Live status: deployed on Vercel production at commit `29e027a`; live HTML
fetch confirmed `meta-pixel`, `fbq`, `connect.facebook.net`, `facebook.com/tr`,
and dataset ID `695923313293515`. Events Manager verification is still required
before Meta Ads can be relaunched.

## Evidence

- [[Meta Ads Live Verification 2026-05-16]] found visible reviewed spend of
  $353.54 across link-click, landing-page-view, and messaging-result rows.
- The two active rows report 24 link clicks / $33.69 and 136 link clicks /
  $187.00.
- Events Manager dataset `leads` ID `695923313293515` shows 0 total events,
  never received events, no event activity, and no integrations.

## Risk

Current Meta optimization is not trustworthy because the account is spending on
proxy metrics while the lead dataset has no received lead events. Continuing
spend risks buying low-intent clicks and training Meta on the wrong behavior.

Tracking changes must be verified before optimization recommendations. If CAPI
is added later, event deduplication evidence is required before using server
events as optimization truth.

## Rollback

If campaigns are paused, rollback is to re-enable only the paused rows after:

- Events Manager shows clean received lead events.
- The owner approves relaunch budget and campaign objective.
- A new campaign/ad set/ad launch note documents the optimization event,
  attribution setting, daily budget, and stop-loss rule.

---

## Timeline

- 2026-05-16 - Drafted from read-only Meta Ads and Events Manager audit.
- 2026-05-16 - Repo-side direct Meta Pixel fallback implemented and verified
  locally. Live Events Manager verification remains open until deploy.
- 2026-05-16 - Pushed commit `29e027a` to `main`; Vercel production deployment
  is READY and live HTML contains Meta Pixel markers. Events Manager test lead
  remains the next gate.
- 2026-05-16 - Events Manager now receives browser events for dataset
  `695923313293515`: Overview lists `Lead` and `PageView` as active, and Test
  Events received `PageView` from `ldndecks.com` as Processed via Browser /
  Manual Setup. Keep paid relaunch blocked until a new real lead submit produces
  a fresh `Lead` event in Test Events and/or Ads Manager conversion columns.
