---
type: meta
title: "Getting Started"
updated: 2026-05-11
tags:
  - meta
  - getting-started
status: seed
related:
  - "[[index]]"
  - "[[overview]]"
---

# Getting Started

## 1. Open this folder in Obsidian

Obsidian → Manage Vaults → **Open folder as vault** → select `/Users/ldndecks/Obsidian/ldn-decks-wiki`.

Enable community plugins when prompted. Install: **Dataview**, **Templater**, **Obsidian Git** (Settings → Community Plugins). Pre-bundled: Calendar, Thino, Excalidraw, Banners.

In Templater settings, point the template folder to `_templates/`.

## 2. First ingest

```text
ingest .raw/<your-file>
```

Or paste a URL / text directly into Claude Code with "ingest this:" prefix.

## 3. First query

```text
what do you know about <topic>?
```

Claude reads [[hot]], scans [[index]], drills into relevant pages, answers with citations.

## 4. Maintenance

```text
lint the wiki
```

Health check: orphans, broken links, stale claims, missing cross-references.

## 5. Save a session

```text
/save [optional name]
```

Files the current Claude Code conversation as a wiki note.

---

For the full schema reference, see `WIKI.md` in the vault root.
