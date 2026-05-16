---
type: meta
title: "Dashboard"
created: 2026-05-15
updated: 2026-05-15
tags:
  - meta
  - dashboard
status: current
related:
  - "[[index]]"
  - "[[LDN Decks Operating Brain]]"
---

# Wiki Dashboard

## Recent Activity

```dataview
TABLE type, status, updated FROM "wiki" SORT updated DESC LIMIT 15
```

## Seed Pages

```dataview
LIST FROM "wiki" WHERE status = "seed" SORT updated ASC
```

## Current LDN Decks Work

- [[operational-launch-plan-2026-05-16|Operational Launch Plan 2026-05-16]]
- [[seo-command-center|SEO Command Center]]
- [[google-ads-tracker|Google Ads Tracker]]
- [[content-calendar|Content Calendar]]
- [[local-seo-tracker|Local SEO Tracker]]
- [[ai-visibility-tracker|AI Visibility Tracker]]

## Sources Imported

```dataview
LIST FROM "wiki/sources" SORT file.name ASC
```
