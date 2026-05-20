---
brain_schema: ads-brain.v1
created: "2026-05-19"
type: report
title: "Apple Maps Weekly Ops SOP 2026-05-19"
platform: apple-maps
status: professional-mode
updated: "2026-05-19"
sources:
  - "[[Apple Maps Professional Mode Control Center 2026-05-18]]"
  - "ldn-growth-execution/operator-handoffs/apple-maps-weekly-ops-sop-2026-05-19.md"
  - "ldn-growth-execution/operator-handoffs/apple-maps-weekly-scorecard-template-2026-05-19.csv"
relationships:
  - "[[Apple Maps Business Connect]]"
  - "[[Apple Maps Weekly Scorecard 2026-05-18]]"
  - "[[Approval Queue]]"
---

# Apple Maps Weekly Ops SOP 2026-05-19

## Compiled Truth

Apple Maps now has a weekly operating SOP for read-only evidence capture,
decision rules, and approval gates. The SOP is local and does not mutate Apple
Business Connect.

Primary operator file:
`ldn-growth-execution/operator-handoffs/apple-maps-weekly-ops-sop-2026-05-19.md`

Scorecard CSV template:
`ldn-growth-execution/operator-handoffs/apple-maps-weekly-scorecard-template-2026-05-19.csv`

## Operating Cadence

- Run weekly, ideally Tuesday or Wednesday.
- Save raw exports under `.raw/sources/apple-maps/YYYY-MM-DD/`.
- Capture Search Taps, Search by Type, Search by Location, Place Card Views,
  Place Card Interactions, Directions, and Photo modules when available.
- Update Ads Brain source notes, scorecards, `wiki/hot.md`, and relevant
  approval items after meaningful changes.

## Decision Rules

- Do more when Apple action taps or place-card interactions rise.
- Hold steady when Apple remains below reporting thresholds.
- Escalate when public profile edits, photos, showcases, category changes, or
  review actions are proposed.
- Roll back when Apple rejects assets, profile accuracy degrades, or lead
  quality drops after a public change.

## Approval Gate

Recommended change:
Run Apple Maps weekly monitoring and update the scorecard from read-only
Insights evidence.
Reason:
The first captured Apple baseline showed 0 Search Taps for May 10-16, 2026.
Expected impact:
Cleaner local-growth decisions and faster detection of Apple Maps visibility or
interaction lift.
Risk level:
Low for read-only monitoring; medium for public Apple Business Connect edits.
Rollback plan:
Keep dated raw exports and notes. If a decision is based on bad data, mark that
week invalid and revert to the prior valid baseline.
Approval required: NO for read-only monitoring; YES for public Apple Business
Connect changes.

---

## Timeline

- 2026-05-19 - Weekly Apple Maps SOP and scorecard template created. No live changes performed.
