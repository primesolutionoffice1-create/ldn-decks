---
type: meta
title: "Overview"
updated: 2026-05-15
tags:
  - meta
  - overview
status: seed
related:
  - "[[index]]"
  - "[[getting-started]]"
---

# Overview

This vault is a persistent, compounding wiki maintained by Claude via the [claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) plugin.

## What lives here

- **`wiki/concepts/`** — definitions, mechanisms, frameworks
- **`wiki/entities/`** — people, organizations, products, places
- **`wiki/sources/`** — articles, papers, transcripts, videos
- **`wiki/meta/`** — non-knowledge pages (this overview, the index, etc.)
- **`.raw/`** — drop-zone for source files awaiting ingest
- **`_templates/`** — Templater scaffolds for new pages

## How to use it

1. Drop a source into `.raw/`
2. In Claude Code: `ingest .raw/<file>`
3. Claude reads it, creates 8-15 wiki pages, updates [[index]] and [[log]]
4. Ask questions: "what do you know about X?" — answers cite specific wiki pages
5. Run `lint the wiki` periodically to flag orphans, dead links, and stale claims

See [[getting-started]] for the first-run walkthrough.

## Active Domain

The first active domain is [[LDN Decks Operating Brain]], migrated from the old `Ldndecks AI Brain` vault. It covers LDN Decks / Loudoun Decks SEO, Google Ads, local SEO, AI search visibility, service pages, content production, and conversion systems.

Current migration status:
- Priority 1 dashboard sources imported.
- Priority 2 strategic hubs imported.
- Next import stage: core notes referenced by the strategic hubs, starting with local/regional authority or revenue/ads.
