---
type: "flow"
title: "Citation Audit Workflow"
created: "{{date}}"
updated: "{{date}}"
status: "active"
---

# Citation Audit Workflow

Phase 3 of [[the-3-phases-of-local-seo|The 3 Phases of Local SEO]] — trust
signals from third-party websites. Run after Property and GBP are clean.

## Pre-flight

- NAP locked in `wiki/locations/<location-slug>.md`.
- GBP optimized (Phase 2 complete).
- Citation export ready under `.raw/clients/<client>/citations/<date>-export.csv`.
- Read [[backlinking-overview|Backlinking Overview]] and
  [[backlinking-local-citations|Backlinking: Local Citations]].

## Steps

### 1. Establish the canonical NAP

Open `wiki/locations/<location-slug>.md`. Confirm exact Name, Address,
Phone — this is the source of truth every citation will be diffed against.

### 2. Ingest current citations

```bash
python scripts/ingest_citations.py --vault <vault> --file <path-to-export>
```

This populates `wiki/citations/` with one note per directory listing
(Yelp, BBB, Yellow Pages, industry-specific, etc.).

### 3. NAP consistency diff

For each citation note, compare to the canonical NAP. Flag drift:

- Name mismatch (e.g., "Acme Plumbing LLC" vs "Acme Plumbing")
- Address mismatch (e.g., suite number missing)
- Phone mismatch (tracking number vs canonical)

### 4. Citation gap analysis

Read [[backlinking-competitive-research-to-find-opportunities|Backlinking: Competitive Research]].
Use the [[backlink-competition-prompt|Backlink Competition Prompt]] to find
where the top-3 Map Pack competitors are listed that the client is not.

### 5. Prioritize fixes

- High priority: drift on Tier-1 directories (Yelp, BBB, Yellow Pages,
  Apple Maps, Bing Places, industry-specific).
- Medium: Tier-2 directories with traffic.
- Skip: Tier-3 spam directories. **Refuse mass submission to low-quality
  directories.**

### 6. Approval queue

Each NAP correction lands in [[Approval Queue]] with:
- Directory name + URL
- Current listing (drift)
- Proposed listing
- Rollback (original record preserved)

### 7. Document in deliverables

Update [[Health Scorecard]] with citation consistency score and
[[Action Roadmap]] with prioritized fix list.

## Done when

- Every Tier-1 citation has a note in `wiki/citations/`.
- NAP consistency score is in the Health Scorecard.
- Drift fixes are queued in [[Approval Queue]].
- Competitor citation gap is documented.

## Refusal rules

- No mass submission to low-quality directories.
- No fake-business citations.
- No scraping that violates a directory's ToS.

## Related

- [[wiki/backlinks/_index|Backlinks Hub]]
- [[Property Audit Workflow]]
- [[GBP Optimization Workflow]]
- [[Index]]
