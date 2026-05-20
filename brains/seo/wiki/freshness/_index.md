---
type: "index"
title: "Freshness Hub"
created: "2026-05-19"
updated: "2026-05-19"
---

# Freshness Hub

> The **seeded knowledge base** establishes the strategic frame and the
> workflows. Some of its tactical details (specific model names, sunset
> GBP features, pre-2026 ranking factors) need a 2026 layer on top. This
> hub holds the freshness layer. Each note in `freshness/` cites trusted
> 2026 sources and points back to the seeded chapters it supplements.

## Read these first

### [[2026-llm-model-lineup|2026 LLM Model Lineup]]
- **Affects:** Which AI Tools to Use · LLM SEO · Creating an Audience Avatar
- **Why:** GPT-5.5, Claude Opus 4.7, Gemini 3.1 Pro replaced older models

### [[2026-ai-overviews-state|2026 AI Overviews State]]
- **Affects:** AI Overview in Search · LLM SEO · LLM Ranking Factors
- **Why:** Citation patterns stabilized (3-5 sources), Map Pack pressure is real

### [[2026-gbp-changes|2026 GBP Changes]]
- **Affects:** All GBP chapters
- **Why:** Chat sunset 2024-07-31, Q&A API sunset 2025-11-03, Ask Maps replaces manual Q&A

### [[2026-december-core-update|December 2025 Core Update + 2026 E-E-A-T Reality]]
- **Affects:** E-E-A-T · Property Audit · Core 30 · About Us page
- **Why:** E-E-A-T extended beyond YMYL to all competitive queries

### [[2026-reddit-llm-citation-engine|Reddit as the LLM Citation Engine (2026)]]
- **Affects:** LLM Reddit Importance · LLM SEO · Backlinking
- **Why:** 40% citation share across LLMs; Google licensing formalized

### [[2026-schema-modernization|2026 Schema Modernization for Local SEO]]
- **Affects:** Schema Explanation · LLM Schema · Property Technical Audit
- **Why:** Industry-specific subtypes mandatory; Person schema load-bearing post-Dec-2025

## How to use the freshness layer

When you open a seeded chapter that has a 2026 freshness note:

1. Read the seeded chapter for the strategy.
2. Open the freshness note for current tactics.
3. Apply the freshness layer to client work.

The seeded chapters carry a callout linking to the relevant freshness note
when one exists.

## When a freshness note becomes stale

The notes in this folder cite retrieval dates and source URLs. Re-verify
every 90 days. When a note is materially out of date:

1. Update the note (keep the same slug — preserve links).
2. Bump the `updated:` and `retrieved:` frontmatter.
3. Add a `## Changelog` section if changes are material.
4. Log the update in [[Log]].

## Refusal stance for the freshness layer

- No undated claims. Every note has a `retrieved:` date.
- No citation-free claims. Every note has a Sources section.
- No copying source content. Synthesize and link.
- No "I think this is current" — always verify.

## Connects To

- [[Index]]
- [[Dashboard]]
- [[Hot]]

> Vault operating instructions are in `CODEX.md` at the vault root.

## Maintenance

When seeded knowledge is updated by the original author, re-run
`scripts/ingest_knowledge_base.py` to regenerate seeded chapters. The
freshness notes here are **decoupled** from re-seeding — they survive
re-ingest unchanged.
