---
type: "flow"
title: "Property Audit Workflow"
created: "{{date}}"
updated: "{{date}}"
status: "active"
---

# Property Audit Workflow

The Property phase (Phase 1 of [[the-3-phases-of-local-seo|The 3 Phases of Local SEO]]).
Audit the client's website before touching GBP or links — without a solid
property, nothing else compounds.

## Pre-flight

- NAP is locked in `wiki/locations/<location-slug>.md`.
- Raw site crawl exists under `.raw/clients/<client>/site-crawl-<date>/`.
- Knowledge base seeded (see [[wiki/audits/_index|Audits Hub]]).

## Steps

### 1. Quick wins pass (1–2 hours)

Run through [[property-audit-quick-wins|Property Audit Quick Wins]]. Capture
findings as bullets in the Health Scorecard.

### 2. Topical relevance audit

Read [[content-planning-topical-relevance-part-1|Content Planning: Topical Relevance Part 1]]
and [[content-planning-topical-relevance-part-2|Part 2]]. Map current content
to the Core 30 ([[the-core-30-content-strategy|The Core 30 Content Strategy]]).

### 3. Geographic relevance audit

Read [[content-planning-geographical-relevance-part-1|Content Planning: Geographical Relevance Part 1]]
and [[content-planning-geographical-relevance-part-2|Part 2]]. Identify missing
city/neighborhood pages.

### 4. Technical audit

Run [[property-technical-audit|Property Technical Audit]]. Use the
[[technical-audit-prompt|Technical Audit Prompt]] to accelerate.

### 5. CTR audit

Run [[property-ctr-audit|Property CTR Audit]]. Use the
[[ctr-audit-prompt|CTR Audit Prompt]] for metadata rewrites.

### 6. Authority audit

Run [[property-content-with-existing-authority-audit|Property Content with Existing Authority Audit]]
to find existing pages with backlinks/traffic worth protecting and amplifying.

### 7. E-E-A-T audit

Read [[e-e-a-t-with-about-us-page|E-E-A-T with About Us Page]] and
[[what-is-e-e-a-t|What is E-E-A-T?]]. Audit author bios, About page, trust
signals.

### 8. Synthesize findings

```bash
python scripts/synthesize_brain.py --vault <vault>
```

Findings should land in [[Health Scorecard]] and prioritized in
[[Action Roadmap]]. Any account-touching action goes to [[Approval Queue]].

## Done when

- Health Scorecard has a numeric score for each of: topical, geographic,
  technical, CTR, authority, E-E-A-T.
- Action Roadmap is sorted by impact × effort.
- Every line cites at least one source note.

## Related

- [[wiki/audits/_index|Audits Hub]]
- [[wiki/content/_index|Content Hub]]
- [[Source Intake Workflow]]
- [[Synthesis Workflow]]
- [[Index]]
