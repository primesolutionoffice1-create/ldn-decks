---
type: source
title: "claude-seo"
created: 2026-05-04
updated: 2026-05-04
tags:
  - source
  - tool
status: active
related:
  - "[[Claude SEO Install and First Audit]]"
  - "[[FLOW Framework]]"
  - "[[Tool Limitations]]"
sources:
  - "github.com/AgriciDaniel/claude-seo"
aliases:
  - claude-seo
  - claude seo
---

# claude-seo

`claude-seo` is the Claude Code skill that runs the live SEO audits referenced throughout this brain. Maintained by Daniel Agrici at `https://github.com/AgriciDaniel/claude-seo`.

## What It Does

- Crawls a site (up to 500 pages) respecting `robots.txt`.
- Detects business type and dispatches specialist sub-agents: `seo-technical`, `seo-content`, `seo-schema`, `seo-sitemap`, `seo-performance`, `seo-visual`, `seo-geo`, `seo-local`, `seo-google`, `seo-backlinks`, `seo-dataforseo`.
- Aggregates an SEO Health Score (0-100) and a prioritized action plan (Critical / High / Medium / Low).
- Optionally enriches with live data: DataForSEO MCP (SERP, keyword, backlinks), Google Search Console (indexation, search performance), Google PageSpeed Insights / CrUX (Core Web Vitals field data), Moz / Bing Webmaster (backlinks).

## How Ldndecks Uses It

Per [[Start Here]] and [[Claude SEO Install and First Audit]]:

1. Install with the prompt: `Install this skill https://github.com/AgriciDaniel/claude-seo`.
2. Run `/seo-audit https://ldndecks.com` and let it complete.
3. Save the report into `.raw/sources/audits/audit-N-YYYY-MM-DD.md`.
4. Triage findings into Critical / Important / Nice-to-have.
5. Repeat at least 3 times — the standard pattern is "run, fix, repeat".
6. Once the audit stabilizes, install FLOW: `Install this skill https://github.com/AgriciDaniel/flow`.

## How It Integrates with marketing-brain

`claude-seo` is the **audit layer**. `marketing-brain` (this skill) is the **strategic synthesizer + brain**. The flow:

1. `marketing-brain` scaffolds the vault and runs the 6-step DataForSEO research pipeline.
2. The vault recommends running `claude-seo /seo-audit` as the first execution flow inside [[Day 0 Measurement Access Gate]].
3. The `claude-seo` audit reports land in `.raw/sources/audits/` and feed the [[Pre-Audit Hypothesis]] / [[Current Site Findings]] update.
4. The [[ULTIMATE BEAST Plan]] composed by `marketing-brain`'s beast-planner subagent cites `claude-seo` as the recurring tactical audit tool throughout the 30-day sprint.

## Limitations to Note

See [[Tool Limitations]]. Audit quality depends on which APIs are connected. With no DataForSEO key, competitor SERP data falls back to web-search and is less precise. With no GSC OAuth, indexation diagnostics rely on inference rather than property data.
