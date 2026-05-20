---
brain_schema: ads-brain.v1
created: "2026-05-11"
type: source-guide
title: "DataForSEO and GSC Enrichment"
updated: "2026-05-11"
---

# DataForSEO and GSC Enrichment

## DataForSEO Role

Use DataForSEO for external market context:

- competitor SERP snapshots
- keyword demand
- landing-page search intent
- related queries
- ad SERP context when relevant

## GSC Role

Use Google Search Console exports for landing-page query language, organic
visibility, and brand/non-brand demand. GSC is not paid-media performance data.

## Credential Rule

Credentials must stay in environment variables and never be written to notes.

## Cost and Status Rule

DataForSEO calls must enforce seed limits, per-call cost caps, total cost caps,
and internal `status_code` checks. A successful HTTP response is not enough.

## Related

- [[Market Context Enrichment Workflow]]
- [[wiki/sources/_index|Sources Hub]]
- [[wiki/landing-pages/_index|Landing Pages Hub]]
- [[Current Platform Requirements 2026]]
