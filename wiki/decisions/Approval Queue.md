---
brain_schema: "ads-brain.v1"
title: "Approval Queue"
created: "2026-05-11"
updated: "2026-05-18"
type: "decision-log"
status: "active"
sources:
  - ".raw/sources/exports/google/2026-05-16-ad-group-report.csv"
  - ".raw/sources/exports/google/2026-05-16-ad-report.csv"
  - ".raw/sources/exports/google/2026-05-16-campaign-report.csv"
  - ".raw/sources/exports/google/2026-05-16-search-keyword-report.csv"
  - ".raw/sources/exports/google/2026-05-16-search-terms-report.csv"
  - ".raw/sources/research/2026-05-09-ads-brain-production-research.md"
  - "action-queue/yellowpages-review-profile-optimization-2026-05-18.md"
---

# Approval Queue

## Compiled Truth

Generated action queue from Ads Brain production checks.

No row is approved for account execution until a human owner updates approval
state and adds implementation notes.

| Action | Platform | Source | Owner | Confidence | Impact | Risk | Approval | Rollback |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Use [[Apple Maps Professional Mode Control Center 2026-05-18]] as the source of truth before any Apple Maps live action. | apple-maps | [[Apple Maps Professional Mode Control Center 2026-05-18]] | Loudoun Decks | high | high | Low for read-only governance; medium once public profile edits begin. | active_control | Keep all Apple edits behind exact approval and revert public changes from the recorded baseline if needed. |
| Run [[Apple Maps Weekly Ops SOP 2026-05-19]] for read-only Apple Maps monitoring. | apple-maps | [[Apple Maps Weekly Ops SOP 2026-05-19]] | Loudoun Decks | high | medium | Low: monitoring only; public edits remain separately approval-gated. | active_control | Mark any bad data week invalid and revert to the prior valid baseline. |
| Review [[Apple Maps Photo Approval Decision 2026-05-18]] and approve or reject the exact 6-photo real-project upload pack. | apple-maps | [[Apple Maps Photo Approval Decision 2026-05-18]] | Loudoun Decks | high | high | Medium public brand risk; all images must be confirmed as real/approved project proof before upload. | needs_review | Remove newly uploaded photos and restore prior 4-photo baseline. |
| Approve the Review & Reputation Pro Mode Pack before any customer outreach or public review response. | reputation | `ldn-growth-execution/operator-handoffs/review-reputation-pro-mode-pack-2026-05-18.md` | Loudoun Decks | high | high | Medium outreach/public-response risk; requests must be non-gated and sensitive replies must be owner-approved. | needs_review | Stop outreach, skip follow-ups, and revise messaging/recipient list if any customer concern appears. |
| Approve the Apple Maps 6-photo upload pack before any public photo upload. | apple-maps | `ldn-growth-execution/operator-handoffs/apple-maps-photo-upload-approval-pack-2026-05-18.md` | Loudoun Decks | high | high | Medium public brand risk; all images must be confirmed as real/approved project proof before upload. | needs_review | Remove newly uploaded photos and restore prior 4-photo baseline. |
| Approve the next Apple Maps showcase draft before publishing or rotating showcases. | apple-maps | `ldn-growth-execution/operator-handoffs/apple-maps-next-showcase-approval-pack-2026-05-18.md` | Loudoun Decks | high | high | Medium public-content risk; avoid conflicting with the approved `Custom Composite Deck` showcase. | needs_review | End, archive, or replace the showcase if rejected, inaccurate, or underperforming. |
| Approve [[Apple Maps Pro Mode Audit 2026-05-18]] before any public Apple photo upload, category change, or new showcase publication. | apple-maps | [[Apple Maps Pro Mode Audit 2026-05-18]] | Loudoun Decks | high | high | Read-only audit is complete; public photo/category/showcase edits are medium risk and must use real project proof only. | needs_review | Remove newly uploaded photos, restore previous category set, or end/revert a showcase if Apple rejects it or lead quality worsens. |
| Review [[Apple Maps Serious Mode 2026-05-18]] and capture the first Apple Business Connect Insights snapshot before any public profile edits. | apple-maps | [[Apple Business Connect Maps Insights 2026-05-18]] | Loudoun Decks | high | high | Read-only review is low risk; public profile/photo/showcase edits are medium risk and approval-gated. | needs_review | Revert any approved public listing edit to the prior field value or prior asset set if Apple rejects it or lead quality worsens. |
| Verify and approve [[yellowpages-review-profile-optimization-2026-05-18|YellowPages Review Profile Optimization 2026-05-18]] before any public YellowPages business listing edit, review reply, ownership change, self-review decision, or paid upgrade. | local-citation | [[yellowpages-review-profile-optimization-2026-05-18|YellowPages Review Profile Optimization 2026-05-18]] | Loudoun Decks | high | medium | Chrome verification found the real listing is claimed with 0 reviews and category drift into fence/roofing/siding/water-damage categories; public edits remain approval-gated. | needs_review | Revert listing fields to the previous screenshot set and remove or replace any inaccurate public response. |
| Monitor applied [[google-ads-waste-containment-pack-2026-05-17|Google Ads Waste Containment Pack 2026-05-17]] Phase 1 negatives before any new Google Ads scaling. | google | [[google-ads-waste-containment-pack-2026-05-17|Google Ads Waste Containment Pack 2026-05-17]] | Loudoun Decks | high | critical | Phase 1 negatives were applied on 2026-05-18 in `Loudoun Decks Builder-2` / `943-907-4542`; next risk is overblocking good qualified intent or adding more negatives too quickly. | applied_monitoring | Remove newly applied negatives if qualified lead volume drops or good terms disappear. |
| Pause/end active Meta spend and block drafts until lead tracking works. | meta | [[Meta Ads Live Verification 2026-05-16]] | Loudoun Decks | high | critical | Active rows are spending against link-click results while `leads` dataset has 0 received events/no integrations. | needs_review | Re-enable only after Events Manager receives clean lead events and owner approves relaunch. |
| Resolve X-PI1: Tracking/privacy gate must be closed before optimization actions are trusted. | cross-platform | wiki/flows/Day 0 Tracking and Privacy Gate.md | Loudoun Decks | high | critical | Day 0 gate status: open | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-TRK1: Conversion action evidence present for Google Ads. | google | .raw/sources/exports/google/2026-05-16-ad-group-report.csv | Loudoun Decks | high | critical | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-CM2: Consent Mode v2 status documented when relevant. | google | .raw/sources/exports/google/2026-05-16-ad-group-report.csv | Loudoun Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-EC1: Enhanced conversions/offline conversion quality documented. | google | .raw/sources/exports/google/2026-05-16-ad-group-report.csv | Loudoun Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-ST1: Search term export evidence available for waste review. | google | .raw/sources/exports/google/2026-05-16-ad-group-report.csv | Loudoun Decks | high | high | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-AIMAX1: AI Max status should be documented for Search/DSA/ACA/broad-match risk. | google | .raw/sources/exports/google/2026-05-16-ad-group-report.csv | Loudoun Decks | high | medium | column: missing | draft | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-TRK1-2: Conversion action evidence present for Google Ads. | google | .raw/sources/exports/google/2026-05-16-ad-report.csv | Loudoun Decks | high | critical | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-CM2-2: Consent Mode v2 status documented when relevant. | google | .raw/sources/exports/google/2026-05-16-ad-report.csv | Loudoun Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-EC1-2: Enhanced conversions/offline conversion quality documented. | google | .raw/sources/exports/google/2026-05-16-ad-report.csv | Loudoun Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-ST1-2: Search term export evidence available for waste review. | google | .raw/sources/exports/google/2026-05-16-ad-report.csv | Loudoun Decks | high | high | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-AIMAX1-2: AI Max status should be documented for Search/DSA/ACA/broad-match risk. | google | .raw/sources/exports/google/2026-05-16-ad-report.csv | Loudoun Decks | high | medium | column: missing | draft | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-TRK1-3: Conversion action evidence present for Google Ads. | google | .raw/sources/exports/google/2026-05-16-campaign-report.csv | Loudoun Decks | high | critical | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-CM2-3: Consent Mode v2 status documented when relevant. | google | .raw/sources/exports/google/2026-05-16-campaign-report.csv | Loudoun Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-EC1-3: Enhanced conversions/offline conversion quality documented. | google | .raw/sources/exports/google/2026-05-16-campaign-report.csv | Loudoun Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-PMAX1-3: PMax rows include asset group and asset strength evidence. | google | .raw/sources/exports/google/2026-05-16-campaign-report.csv | Loudoun Decks | high | high | PMax rows: 2; asset group: missing; asset strength: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-ST1-3: Search term export evidence available for waste review. | google | .raw/sources/exports/google/2026-05-16-campaign-report.csv | Loudoun Decks | high | high | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-AIMAX1-3: AI Max status should be documented for Search/DSA/ACA/broad-match risk. | google | .raw/sources/exports/google/2026-05-16-campaign-report.csv | Loudoun Decks | high | medium | column: missing | draft | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-TRK1-4: Conversion action evidence present for Google Ads. | google | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv | Loudoun Decks | high | critical | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-CM2-4: Consent Mode v2 status documented when relevant. | google | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv | Loudoun Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-EC1-4: Enhanced conversions/offline conversion quality documented. | google | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv | Loudoun Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-ST1-4: Search term export evidence available for waste review. | google | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv | Loudoun Decks | high | high | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-AIMAX1-4: AI Max status should be documented for Search/DSA/ACA/broad-match risk. | google | .raw/sources/exports/google/2026-05-16-search-keyword-report.csv | Loudoun Decks | high | medium | column: missing | draft | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-TRK1-5: Conversion action evidence present for Google Ads. | google | .raw/sources/exports/google/2026-05-16-search-terms-report.csv | Loudoun Decks | high | critical | column: missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-CM2-5: Consent Mode v2 status documented when relevant. | google | .raw/sources/exports/google/2026-05-16-search-terms-report.csv | Loudoun Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |
| Resolve G-EC1-5: Enhanced conversions/offline conversion quality documented. | google | .raw/sources/exports/google/2026-05-16-search-terms-report.csv | Loudoun Decks | high | critical | column missing | needs_review | Do not change live accounts; revert note/action state if evidence is disproven. |

## Related

- [[wiki/decisions/_index|Decisions Hub]]
- [[Ads Health Scorecard]]
- [[Tracking and Attribution Risk Register]]
- [[Weekly Client Report]]

---

## Timeline
- 2026-05-19 - Added [[Apple Maps Weekly Ops SOP 2026-05-19]] as the active read-only Apple Maps monitoring procedure.
- 2026-05-18 - Promoted [[Apple Maps Professional Mode Control Center 2026-05-18]] as the Apple Maps source of truth before live action.
- 2026-05-18 - Added [[Apple Maps Photo Approval Decision 2026-05-18]] as the exact 6-photo Apple Maps upload approval item.
- 2026-05-18 - Added Review & Reputation Pro Mode Pack as the approval gate for compliant review requests and public review replies.
- 2026-05-18 - Added Apple Maps photo upload and next-showcase approval packs as operator-ready public-change gates.
- 2026-05-18 - Added [[Apple Maps Pro Mode Audit 2026-05-18]] as the approval-gated source for Apple Maps photo proof, category review, and future showcase actions.
- 2026-05-18 - Owner-approved Phase 1 Google Ads negatives were applied in
  `Loudoun Decks Builder-2` / `943-907-4542`; queue status changed to
  `applied_monitoring` for the waste containment item.
- 2026-05-18 - Added [[yellowpages-review-profile-optimization-2026-05-18|YellowPages Review Profile Optimization 2026-05-18]] as the approval-gated operating decision for YellowPages citation and review cleanup.
- 2026-05-18 - Added [[Apple Maps Serious Mode 2026-05-18]] as the approval-gated operating decision for Apple Business Connect / Apple Maps Insights.
- 2026-05-17 - Added [[google-ads-waste-containment-pack-2026-05-17|Google Ads Waste Containment Pack 2026-05-17]] as the first approval-gated Google Ads cleanup decision for current search-term waste containment.
- 2026-05-16 - Added Meta emergency stop/tracking-fix approval item from [[Meta Ads Live Verification 2026-05-16]].
- 2026-05-16 - Regenerated approval queue from 35 production checks.
- 2026-05-11 - Approval queue initialized.
