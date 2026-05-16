---
type: meta
title: "Dashboard"
created: 2026-05-15
updated: 2026-05-16
tags:
  - meta
  - dashboard
  - ldndecks
status: current
related:
  - "[[index]]"
  - "[[LDN Decks Operating Brain]]"
  - "[[operational-launch-plan-2026-05-16|Operational Launch Plan 2026-05-16]]"
  - "[[vault-status-system-2026-05-16|Vault Status System 2026-05-16]]"
---

# LDN Decks Command Dashboard

> [!tip] Start Here
> Use this page as the daily control panel. The archive is complete; the active work is validation, prioritization, execution, and reporting.

## Today

| Area | Open |
|---|---|
| Operating plan | [[operational-launch-plan-2026-05-16|Operational Launch Plan]] |
| Status system | [[vault-status-system-2026-05-16|Vault Status System]] |
| Visual map | [[ldn-decks-operating-map.canvas|Operating Map Canvas]] |
| Main brain | [[LDN Decks Operating Brain]] |
| Latest migration report | [[migration-completion-report-2026-05-16|Migration Completion Report]] |

## Workstreams

| Stream | Workboard | First Use |
|---|---|---|
| SEO | [[seo-command-center|SEO Command Center]] | Validate top money pages and page priorities. |
| Content | [[content-calendar|Content Calendar]] | Pick the next page or update to publish. |
| Local SEO | [[local-seo-tracker|Local SEO Tracker]] | Choose city + service combinations. |
| Google Ads | [[google-ads-tracker|Google Ads Tracker]] | Check PMAX, brand overlap, negatives, and landing pages. |
| AI Visibility | [[ai-visibility-tracker|AI Visibility Tracker]] | Convert FAQs, schema, entity, and proof into answer-ready content. |

## Week 1 Queue

- Validate Deck Builder Northern Virginia.
- Validate Composite Deck Installation.
- Validate Deck Repair and Deck Resurfacing.
- Strengthen Ashburn, Fairfax, and Arlington local pages.
- Review Google Ads waste and landing-page relevance.
- Select 10 FAQ answers for schema and AI visibility.

## Health

| Signal | Status |
|---|---|
| Old vault markdown archived | 283 / 283 |
| Source manifest entries | 283 |
| Wiki link check | 0 dead links |
| Latest lint | [[lint-report-2026-05-16|Lint Report 2026-05-16]] |
| GitHub backup | Active |
| Local backup | Active |

## Recent Activity

```dataview
TABLE type, status, updated
FROM "wiki"
SORT updated DESC
LIMIT 15
```

## Active Workboards

```dataview
LIST
FROM "wiki/meta"
WHERE contains(tags, "ldndecks") OR contains(tags, "dashboard")
SORT file.name ASC
```
