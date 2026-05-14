# ldndecks.com — Full SEO Audit Report

**Audit date:** 2026-05-11
**Business type:** Local-service (deck building, Loudoun County / Northern Virginia)
**Audit scope:** Technical, Content, Schema, GEO, Local, SXO
**Methodology:** 6 specialist subagent passes, manual aggregation

---

## Executive Summary

### SEO Health Score: ~68 / 100 (B−)

> Partial confidence: 2 of 6 specialist passes (GEO + SXO) returned full structured findings. The other 4 categories (technical, content, schema, local) executed but only partial mid-run state surfaced; the qualitative health score blends those with project knowledge from the codebase. **Recommend a focused re-run for Technical, Content, Schema, Local to lock the final score.**

| Category | Confidence | Score | Headline |
|---|---|---|---|
| Technical | partial | ~72 | Recent commits cleaned canonicals + 301 redirect behavior; CWV needs verification |
| Content | partial | ~65 | Blog and core pages appear depth-OK; needs E-E-A-T scoring |
| Schema | partial | ~70 | BlogPosting + speakable present; WebPage refs recently cleaned |
| Performance | not run | — | (specialist not dispatched this round) |
| **GEO / AI search** | **full** | **74** | Ahead of most local contractors — llms.txt + llms-full.txt present |
| Local | partial | ~62 | NAP and city-page strategy exist but indexability blocks earned reach |
| **SXO / SERP fit** | **full** | **~45** | **Critical:** 50+ city template pages are `noindex` |

---

## Critical Issues

### 🚨 1. **50+ `/near-you/[county]/[city]` city template pages carry `robots: { index: false }`**
**Source:** SXO specialist (full pass).
**Impact:** The majority of Loudoun County cities have **zero geo-targeted content in Google's index**. Only ~10 standalone `/deck-builder-{city}-va` pages are indexed. This is a structural cap on the entire local-search opportunity.
**Why it matters:** Most of the deck-builder traffic in Northern Virginia is local-intent. If those pages can't be indexed, they can't earn the rankings, no matter how good the on-page content is.

### 🚨 2. **Homepage cannibalizing the standalone city pages**
**Source:** SXO specialist (full pass).
**Symptom:** For "deck builder ashburn va", Google surfaces the homepage and a project-showcase URL instead of `/deck-builder-ashburn-va`.
**Cause:** PageRank concentration on the homepage. The standalone city pages have weak internal-link signals pointing at them.

### 🚨 3. **`/deck-builder-leesburg-va` absent from top 10**
**Source:** SXO specialist (full pass).
**Cause:** Page exists but lacks: a project gallery, an embedded Google Map, and above-fold HOA community names (Lansdowne, River Creek) that competitor pages display prominently. Ashburn and Leesburg also share **identical hero images** — no visual differentiation.

---

## GEO / AI Search (Score: 74 / 100 — full pass)

**Strengths:**
- All major AI crawlers explicitly allowed in robots.txt: GPTBot, ClaudeBot, PerplexityBot, Google-Extended.
- Both `/llms.txt` AND `/llms-full.txt` present with **genuine extractable content**: material cost table, FAQ block, process steps.
- Blog posts use proper `BlogPosting` schema with `speakable` selectors and are statically rendered (fully crawlable).

**Weaknesses:**
- FAQ answers are 25–40 words. Optimal AI-citation length is **134–167 words** with specific numbers.
- Blog author schema uses `@type: Organization` instead of `@type: Person` for Nick.
- Missing `OAI-SearchBot` directive in robots.txt; no RSL 1.0 license block in llms.txt.
- No 60-word "Quick Answer" box at top of blog articles.
- Three data conflicts between the cost-calculator page and `llms-full.txt`: permit fees, PVC pricing, total project count.
- No YouTube channel — the single strongest correlator with LLM citation rates (r = 0.737).

---

## SXO / SERP Fit (Score: ~45 / 100 — full pass)

**Audited keywords:** "deck builder loudoun county", "composite deck installation [city]", "deck contractor near me", "trex deck builder virginia".

**Findings:**
1. SERP page-type expectation = dedicated city-service intersection pages. ldndecks has 10 standalone city pages but 50+ template city pages are noindexed.
2. Homepage out-ranking purpose-built city pages → cannibalization.
3. `/deck-builder-leesburg-va` invisible despite existing → missing local-trust assets.
4. Hero-image duplication between Ashburn and Leesburg pages.

---

## Technical SEO (partial — needs re-run)

What I can infer from recent commits and codebase:
- ✅ Canonical-redirect behavior aligned to 301 (commit `122656d`).
- ✅ Homepage WebPage schema references cleaned (commit `22144f7`).
- ⚠ Middleware was renamed/reverted (`819913a`) — verify final state is correct.
- ❓ HSTS / CSP / X-Frame-Options header verification not completed this round.
- ❓ Core Web Vitals (LCP / INP / CLS) lab measurement not completed this round.

---

## Content Quality (partial — needs re-run)

Partial inference from project structure:
- Blog pages exist (e.g., `paver-vs-flagstone-patio-northern-virginia`, `trex-vs-timbertech-vs-azek`, `stamped-concrete-patio-northern-virginia`) — these are AI-citation magnets if the structural details are right.
- New components added recently: `NamedAuthor.jsx`, `NoVAPermitTimeline.jsx` — these are strong E-E-A-T signals.
- Per-page Flesch / depth scoring not completed.
- AI-citation readiness for non-blog pages not measured.

---

## Schema (partial — needs re-run)

Partial inference:
- `BlogPosting` with `speakable` on blog pages ✓ (per GEO findings).
- Homepage WebPage schema recently cleaned (commit `22144f7`).
- `Service` schema instance was flagged missing `name` property (per agent mid-state) — verify and fix.
- Coverage for `LocalBusiness`/`HomeAndConstructionBusiness`, `Review`/`AggregateRating`, `FAQPage`, `BreadcrumbList` not confirmed across the site.

---

## Local SEO (partial — needs re-run)

Partial inference:
- Per-city pages exist and recent commits include `deck-builder-fairfax-va` and `stamped-concrete-patio-northern-virginia`.
- 50+ `/near-you/[county]/[city]` template pages are blocked by noindex (per SXO finding) — biggest local-SEO blocker on the site.
- NAP consistency, GBP signal exposure, review-widget presence, license/insurance prominence: not verified this round.

---

## Recommended Re-Run

For a publishable health score, re-dispatch these four specialists with a persistent output path (`seo-blueprint/audit-2026-05-11/ldndecks/`):
- seo-technical
- seo-content
- seo-schema
- seo-local

GEO and SXO are complete and locked.
