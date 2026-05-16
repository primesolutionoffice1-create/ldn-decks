---
type: meta
title: "Vault Status System 2026-05-16"
created: 2026-05-16
updated: 2026-05-16
tags:
  - meta
  - status
  - ldndecks
status: current
related:
  - "[[dashboard|Dashboard]]"
  - "[[LDN Decks Operating Brain]]"
---

# Vault Status System

## Status Meanings

| Status | Meaning | Use |
|---|---|---|
| `current` | Trusted operating page. | Dashboards, workboards, reports, and active strategy pages. |
| `archived` | Imported reference material. | Old-vault notes preserved for memory, not direct execution. |
| `needs-review` | Needs validation. | Claims, strategy, or drafts that require current evidence. |
| `ready` | Ready to execute or publish. | Validated content or action plans. |
| `blocked` | Cannot move until dependency is solved. | Missing data, asset, proof, access, or decision. |
| `published` | Executed externally. | Pages, ads, GBP updates, schema, or reports already shipped. |

## Working Rule

Archived notes can inspire work, but active execution should move through:

`archived` -> `needs-review` -> `ready` -> `published`

Use `blocked` when a page needs data, proof, screenshots, ad account access, project photos, or Search Console validation.

## Recommended Views

- Active operating pages: status is `current`.
- Imported archive: status is `archived`.
- Pages to validate: status is `needs-review`.
- Publish queue: status is `ready`.
- Completed external actions: status is `published`.

## Dataview Checks

```dataview
TABLE type, status, updated
FROM "wiki"
WHERE status = "current"
SORT updated DESC
```

```dataview
LIST
FROM "wiki/sources"
WHERE status = "archived"
SORT file.name ASC
```

```dataview
LIST
FROM "wiki"
WHERE status = "needs-review" OR status = "blocked"
SORT updated ASC
```
