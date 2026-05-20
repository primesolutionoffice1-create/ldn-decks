---
type: "overview"
title: "Overview"
created: "{{date}}"
updated: "{{date}}"
---

# Overview

Local SEO Brain is a persistent, source-cited operating brain for ranking
local businesses in the Google Map Pack, organic local SERPs, and AI
search.

![[brain-relationship-map.svg]]

## How the Brain works

```
Raw sources         Wiki memory              Gates & checks         Deliverables
───────────         ───────────              ──────────────         ────────────
GBP exports     →   locations/         →    NAP consistency    →   Health scorecard
Citation CSVs   →   citations/         →    Citation gap        →  Action roadmap
Review JSON     →   reviews/           →    Review velocity    →   Weekly report
Geo-grid CSV    →   keywords/          →    Map Pack coverage  →   Audit deliverable
Site crawl      →   audits/            →    Technical / CTR    →
                                            E-E-A-T quality
Knowledge base  →   concepts/                                  →   Approval Queue
                    frameworks/
                    gbp/ content/
                    backlinks/ llm-seo/
                    prompts/
```

## Operating loop

1. **Drop raw sources** into `.raw/clients/<client>/`.
2. **Ingest** via the appropriate script (`ingest_source`, `ingest_gbp`,
   etc.). Each ingest writes a source note with file hash + retrieval date.
3. **Synthesize** with `synthesize_brain.py` — generates the Health
   Scorecard, Action Roadmap, and updates the Weekly Report.
4. **Verify** via `lint_vault.py` — checks graph connectivity, frontmatter,
   no dead wikilinks, no orphan notes.
5. **Render** the Weekly Report via `render_brain_report.py` for client
   delivery.
6. **Approve** any account-touching action through
   [[Approval Queue]] before execution. The brain never mutates accounts
   automatically.

## Strategic frame

The brain teaches and operates the **3 Phases of Local SEO**:

| Phase | Focus | Key folder |
|---|---|---|
| 1. Property | Your website foundation | `audits/`, `content/` |
| 2. GBP | Google Business Profile in the Map Pack | `gbp/` |
| 3. Backlinks | Trust signals from third parties | `backlinks/`, `citations/` |

LLM SEO (`llm-seo/`) cuts across all three phases — optimizing for
ChatGPT, Perplexity, and Google AI Overviews requires schema, citation
density, and content quality from every phase.

## Related

- [[Index]]
- [[Dashboard]]
- [[Hot]]
- [[Start Here]]
