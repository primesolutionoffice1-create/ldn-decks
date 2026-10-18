# SEO and GEO setup

Date: 2026-10-18. Site: https://ldndecks.com. Repository: `primesolutionoffice1-create/ldn-decks`. Hosting: Vercel, production branch `main`.

## Sources checked

The request listed local skill collections under `/Users/ldndecks/`. Those directories are not mounted in this Cloud Agent environment:

- `~/.agents/skills`
- `~/.codex/skills`
- `~/.claude/skills`
- `~/.claude/agents`
- `~/.cursor/agents`
- `~/.codex/plugins/cache/agricidaniel-claude-seo/claude-seo`

Cursor docs checked on 2026-10-18:

- https://cursor.com/docs/skills
- https://cursor.com/docs/subagents
- https://cursor.com/docs/rules

Cloud Agents do not receive unsynced personal skills. The portable setup lives in the repo.

## What this pass added

| Piece | Path | Role |
| --- | --- | --- |
| Skill | `.cursor/skills/website-seo-geo/SKILL.md` | When to audit, who does which task, evidence rules |
| Reference | `.cursor/skills/website-seo-geo/references/checks.md` | Commands and file sources, loaded only when auditing |
| Agents | `.cursor/agents/technical-seo.md`, `content-local-seo.md`, `geo-researcher.md`, `seo-verifier.md` | Research and independent verification |
| Rule | `.cursor/rules/seo-geo.mdc` | Constraints when SEO files are in context |

No third-party SEO library was copied. Existing project scripts remain the checkers.

## How to use it

In Cursor Agent, ask for an SEO or GEO audit. The skill applies from its description. For a file-scoped reminder, open a file matched by `.cursor/rules/seo-geo.mdc`.

Next audit command:

```text
Use the website-seo-geo skill. Run technical-seo, content-local-seo, and geo-researcher in parallel on https://ldndecks.com, then have seo-verifier check the diff before any deploy.
```
