---
type: meta
title: "Verifier Cadence"
created: 2026-05-04
updated: 2026-05-04
tags:
  - meta
  - cadence
  - sla
  - communication
status: active
related:
  - "[[Start Here]]"
  - "[[30-Day Sprint]]"
  - "[[Implementation Roadmap]]"
  - "[[Dual Surface Scorecard]]"
  - "[[Open Questions for Ldndecks]]"
sources:
  - "[[shipping-rules|shipping rules]]"
---

# Verifier Cadence

The communication and SLA contract between Ldndecks (owner) and Daniel Agrici (verifier). Filled at scaffold time; reviewed at Day 0 close; updated whenever cadence changes. Every entry should be specific — "weekly Monday async via Skool DM" beats "as needed".

## Roles

- **Owner**: Ldndecks. Executes site changes, fills baselines, runs audits, drafts content from briefs.
- **Verifier**: Daniel Agrici. Reviews evidence, gates acceptance per [[shipping-rules|shipping rules]], approves prune/merge/redirect decisions before they ship, signs off on per-page refreshes.
- **Chair (orchestration)**: Daniel Agrici runs the chair role for any multi-slice work (e.g., the 30-day sprint or any chair-led parallel execution). See [[shipping-rules|orchestration rules]].

## Cadence

| Cadence | Format | Channel | Owner | Notes |
| --- | --- | --- | --- | --- |
| Weekly check-in | Async written status | TBD (Slack / email / DM) | Ldndecks posts; Daniel Agrici reviews within 48h | During the 30-day sprint, weekly. After the sprint, bi-weekly. |
| Blocker escalation | Sync (call) or rapid async | TBD | Either party | Triggered by a Decision Flag = `escalate to Daniel Agrici` on the [[Dual Surface Scorecard]]. SLA: 24h response. |
| Pre-publish review | Written brief review | Vault `[[ULTIMATE BEAST Plan]]` + per-page brief in `wiki/pages/` | Ldndecks drafts; Daniel Agrici reviews before any release-impacting change ships | Per [[SERP-First Content Creation Gate]]; gate must pass before publish. |
| Monthly retro | Sync (call) | TBD | Daniel Agrici hosts | Review [[Dual Surface Scorecard]] deltas, [[Hot]] active threads, cred-rotation reminders. |

## SLA

- Weekly status: 48-hour acknowledgement; 5 business-day turnaround on review and notes.
- Blocker escalation: 24-hour acknowledgement.
- Pre-publish review: 72-hour turnaround unless the [[Implementation Roadmap]] phase deadline requires faster.
- After-hours: not on-call. Skool DMs are async by default.

## Escalation Path

1. Routine question → weekly check-in.
2. Time-sensitive question → escalate to the channel agreed in the table above.
3. Algorithmic incident (e.g., site loses >10% impressions week-over-week with no seasonal explanation) → immediate escalation; hold all release-impacting changes; investigate per [[HCU Diagnostic Checklist]].
4. Cred / security incident (e.g., suspected leaked API key) → immediate. Rotate the cred. File a [[Log]] entry. Do not commit anything until rotated.

## Cred Rotation Reminders

Rotate ad-network, analytics, CMS, and DataForSEO credentials at least quarterly. After any one-off audit pull using temporary credentials (e.g., the initial DataForSEO research pull), rotate the password once Ldndecks verifies the pull. The vault never stores credentials per [[CODEX|CODEX rule]] — rotation is operational hygiene at the OS / password-manager layer.

## Acceptance

- Owner, verifier, channel, cadence, and SLA all filled with specific values (not "TBD").
- Ldndecks acknowledges the cadence in [[Log]] with date.
- Cadence reviewed at Day 0 close; updated if reality diverges from this contract.
