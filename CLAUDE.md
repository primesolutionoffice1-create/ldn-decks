# CLAUDE.md — ldn-decks wiki vault

This directory is a [claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) knowledge vault.

VAULT_PATH: /Users/ldndecks/Obsidian/ldn-decks-wiki

When you start a session here:

1. Silently read `wiki/hot.md` to restore recent context.
2. Read `WIKI.md` if you need the full schema reference.
3. Route based on what the user says:
   - "ingest [file/url]" → `wiki-ingest` skill
   - "what do you know about X" → `wiki-query` skill
   - "lint the wiki" → `wiki-lint` skill
   - "/save", "/autoresearch", "/canvas" → corresponding skills
   - "scaffold", "set up" → `wiki` skill (this vault is already scaffolded)

## Layout

```
.raw/                  immutable source documents (drop sources here)
wiki/
├── index.md           master catalog
├── log.md             chronological session log
├── hot.md             ~500-word recent context cache
├── overview.md        executive summary
├── getting-started.md first-run walkthrough
├── concepts/          definitions, mechanisms, frameworks
├── entities/          people, organizations, products, places
├── sources/           one summary page per raw source
├── domains/           top-level topic groupings
├── comparisons/       side-by-side analyses
├── questions/         filed answers to user queries
├── folds/             log rollups (DragonScale)
├── canvases/          Obsidian Canvas files
└── meta/              dashboards, lint reports, conventions
_templates/            Templater scaffolds (entity, concept, source, comparison, question)
WIKI.md                full schema reference
```

## Conventions

- Frontmatter is mandatory on every page. See `_templates/` for the field set.
- Cross-reference with `[[Page Title]]` syntax. Bare links only; no aliases unless disambiguating.
- Status field: `seed` (new), `current` (active), `mature` (settled), `evergreen` (foundational).
- `wiki/hot.md` is a cache, not a journal — overwrite completely each update, keep under 500 words.
- Auto-commit hook fires on every Write/Edit. Don't fight it; let history accumulate.

## Mode

Standard knowledge-vault mode. If the work shifts toward sitemap/SEO mapping for ldn-decks-next, consider switching to Mode A from `skills/wiki/references/modes.md` (re-layout into `wiki/pages/`, `wiki/structure/`, `wiki/audits/`, `wiki/keywords/`).
