---
type: meta
title: "LDN Decks AI Brain Import Plan"
created: 2026-05-15
updated: 2026-05-15
status: current
tags:
  - import
  - ldndecks
  - obsidian
  - migration
related:
  - "[[LDN Decks Operating Brain]]"
  - "[[index]]"
  - "[[hot]]"
---

# LDN Decks AI Brain Import Plan

## 1. Principal Vault

Use `/Users/ldndecks/Obsidian/ldn-decks-wiki` as the primary Claude + Obsidian wiki vault.

Current state:
- Opened in Obsidian.
- Trusted plugins enabled.
- GitHub remote configured at `git@github.com:primesolutionoffice1-create/ldn-decks-wiki.git`.
- Local backup remote configured at `/Users/ldndecks/Obsidian/_git-backups/ldn-decks-wiki.git`.

## 2. Backup Rule

Use GitHub as the main remote backup and `backup-local` as the disk backup.

Normal session close:

```bash
git -C /Users/ldndecks/Obsidian/ldn-decks-wiki status
git -C /Users/ldndecks/Obsidian/ldn-decks-wiki add .
git -C /Users/ldndecks/Obsidian/ldn-decks-wiki commit -m "Update wiki"
git -C /Users/ldndecks/Obsidian/ldn-decks-wiki push
git -C /Users/ldndecks/Obsidian/ldn-decks-wiki push backup-local main
```

## 3. Old Vault Inventory

Source vault:

`/Users/ldndecks/Documents/Obsidian Vault/Ldndecks AI Brain`

Observed inventory:
- 283 markdown notes.
- Strongest clusters: location-intent pages, master hubs, outdoor living, service entities, authority guides, visual authority, semantic keywords, AI search optimization, revenue systems, and operational authority.
- The old vault already describes itself as the operating knowledge base for LDN Decks / Loudoun Decks: SEO, Google Ads, local authority, AI search visibility, content production, service pages, and conversion systems.

## 4. Import Priority

Import in this order:

1. Dashboard and operating rules:
   - `00-Dashboard/START-HERE.md`
   - `00-Dashboard/COMMAND-CENTER.md`
   - `00-Dashboard/Vault-Standards.md`
   - `00-Dashboard/Content-Coverage-Map.md`
   - `00-Dashboard/Readiness-Audit-2026-05-14.md`

2. Strategic hubs:
   - `17-Master-Hubs/Northern-Virginia-Decking-Hub.md`
   - `17-Master-Hubs/Local-SEO-Dominance-Hub.md`
   - `17-Master-Hubs/Revenue-and-Google-Ads-Hub.md`
   - `17-Master-Hubs/AI-Overview-Visibility-Hub.md`
   - `17-Master-Hubs/Trust-and-Buyer-Confidence-Hub.md`

3. Core business pages:
   - `01-SEO/SEO-MASTER.md`
   - `01-SEO/SEO-ROADMAP.md`
   - `02-Google-Ads/ADS-AUDIT.md`
   - `03-Content/CONTENT-HUB.md`
   - `04-Local-SEO/NOVA-CITIES.md`
   - `05-Services/COMPOSITE-DECKS.md`
   - `05-Services/DECK-REPAIR.md`

4. Revenue and conversion systems:
   - `13-Conversions/Conversion-System-Index.md`
   - `25-Revenue-Systems/Lead-Generation-System.md`
   - `25-Revenue-Systems/Google-Ads-Lead-Flow.md`
   - `25-Revenue-Systems/SEO-to-Conversion-Architecture.md`
   - `25-Revenue-Systems/Phone-Call-Conversion-Strategy.md`

5. Scaled content clusters:
   - `16-Location-Intent-Clusters/`
   - `09-Service-Entities/`
   - `10-Outdoor-Living/`
   - `13-FAQ-Clusters/`
   - `23-Semantic-Keyword-Vault/`
   - `24-AI-Search-Optimization/`

## 5. Next Action

Run a structured import of the priority 1 files first. For each imported file:
- Copy the original into `.raw/old-obsidian-vault/`.
- Create a synthesized wiki page under `wiki/sources/`, `wiki/domains/`, `wiki/concepts/`, or `wiki/entities/`.
- Update `wiki/index.md`, `wiki/log.md`, and `wiki/hot.md`.
- Commit and push to GitHub.
