---
type: meta
title: "Lint Report 2026-05-20"
created: "2026-05-20"
updated: "2026-05-20"
tags: [meta, lint, ldn, agent-readiness]
status: developing
---

# Lint Report: 2026-05-20

## Summary

- Pages scanned in active vault: 293
- Legacy duplicate vault pages observed: 74
- Growth execution memory files observed: 104
- Real dead links/assets in active vault: 29
- Orphan pages in active vault: 1
- Duplicate filename groups across active and legacy vaults: 41
- Frontmatter/tag gaps in combined wiki scan: 367
- Auto-fixed: 0
- Needs review: high

## Orphan Pages

- [[overview]]: no inbound links detected in the active vault graph. Suggest: link from [[index]] and [[meta/Start Here]] or rename/link consistently as `Overview`.

## Dead Links

High-impact active-vault broken targets:

- `Dashboard`: referenced by several pages but file is `wiki/meta/dashboard.md`. Suggest: create alias page `Dashboard.md` or update links to `[[meta/dashboard|Dashboard]]`.
- `Onboarding Canvas.canvas`: referenced but missing. Suggest: restore canvas or remove embeds.
- `ads-brain-operating-map.svg`: missing asset.
- `vault-relationship-graph.svg`: missing asset.
- `tracking-trust-by-platform.svg`: missing asset.
- `tracking-trust-gates.svg`: missing asset.
- `platform-spend-by-source.svg`: missing asset.
- `yellowpages-review-profile-optimization-2026-05-18`: referenced from wiki, but the note lives in action queue outside the wiki. Suggest: create alias stub or convert to plain path.
- `meta-ads-emergency-stop-and-tracking-fix-2026-05-16`: referenced from hot note but not found in active wiki.

## Missing Pages

- `Canonical Source Map`: needed as the top-level resolver for future agents.
- `Claim Control Source of Truth`: current canonical file exists outside wiki at `/Users/ldndecks/ldn-growth-execution/knowledge-base/ldn-claim-control-source-of-truth-2026-05-20.md`; create wiki pointer.
- `Maps NAP Reviews Canonical`: current canonical file exists outside wiki at `/Users/ldndecks/ldn-growth-execution/operator-handoffs/ldn-maps-nap-reviews-cleanup-report-2026-05-20.md`; create wiki pointer.
- `Covered Deck 404 Canonical`: current canonical file exists outside wiki at `/Users/ldndecks/ldn-growth-execution/operator-handoffs/covered-deck-404-live-approval-packet-2026-05-20.md`; create wiki pointer.

## Frontmatter Gaps

Most wiki files lack normalized `tags`; many index/meta files also lack normalized `status`.

Recommended required fields:

```yaml
type:
status:
created:
updated:
tags:
source_rank:
agent_use:
```

## Stale Claims

Potentially stale or proof-required claims found across memory:

- `Trex Platinum`
- `TimberTech Certified`
- `AZEK Certified`
- `Top 1%`
- `showroom`
- `41+`
- `49 Google`
- `5-year workmanship`
- `2-Year Warranty`
- `100% 5-star`
- `500+ decks`
- `10+ years`

Canonical rule:
Use `/Users/ldndecks/ldn-growth-execution/knowledge-base/ldn-claim-control-source-of-truth-2026-05-20.md` before repeating any of these.

## Cross-Reference Gaps

- Active wiki does not yet point cleanly to current operator-handoff canonical reports.
- Growth execution files are rich but not integrated into the Obsidian graph.
- Duplicate legacy vault nodes are not marked deprecated.

## Recommended Next Maintenance Actions

1. Create `wiki/meta/Canonical Source Map.md`.
2. Archive or clearly deprecate `/Users/ldndecks/ads-brain-vaults/ldndecks`.
3. Repair `Dashboard`, `Hot`, `Index`, `Log`, and `Overview` naming/link consistency.
4. Restore or remove missing SVG/canvas embeds.
5. Add claim-control frontmatter to high-risk pages.
6. Mark generated Google Ads object pages as `raw-import`.

## Agent-Readiness Score

Current: 62/100.

Target after cleanup: 85/100.

