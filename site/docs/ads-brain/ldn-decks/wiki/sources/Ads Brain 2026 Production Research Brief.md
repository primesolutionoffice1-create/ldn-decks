---
brain_schema: ads-brain.v1
created: "2026-05-15"
type: source
title: "Ads Brain 2026 Production Research Brief"
status: reference
updated: "2026-05-15"
source_type: research_brief
retrieved: "2026-05-09"
trust_level: mixed-reference
license: user-provided-research
source_path: ".raw/sources/research/2026-05-09-ads-brain-production-research.md"
source_hash: "62039d2c6887476f56164e24f9ffce6a8e6947b05dbd6b1b5f4aa48ab510d667"
sources:
  - ".raw/sources/research/2026-05-09-ads-brain-production-research.md"
related:
  - "[[Current Platform Requirements 2026]]"
  - "[[Paid Media Safety Rules]]"
  - "[[Tracking and Attribution Risk Register]]"
  - "[[API Version and Connector Readiness Gate]]"
---

# Ads Brain 2026 Production Research Brief

## Compiled Truth

The 2026 research brief validates the product stance: Ads Brain V1 must remain
read-only, audit-grade, source-cited, and tracking-first. Its first diagnostic
output should be tracking trust, not performance optimization. Fast-moving API
version claims in this brief are reference inputs, not production truth, unless
corroborated in [[Current Platform Requirements 2026]].

## Release-Impacting Findings

| Area | Finding | Product Implication |
|---|---|---|
| Raw evidence | Every number in a recommendation must trace to platform, column, date range, and file hash. | Keep `.raw/` immutable and source every report row. |
| Tracking trust | Google Consent Mode/enhanced conversions, Meta Pixel+CAPI, TikTok Pixel+Events API, LinkedIn Insight Tag+CAPI/CRM, Microsoft UET, and Apple AdServices/AAK are blocking evidence surfaces. | Performance recommendations stay blocked when tracking checks fail. |
| Version drift | Google Ads API, Meta Marketing API, LinkedIn monthly versions, Microsoft REST migration, and Apple attribution surfaces are fast-moving. | Reports must include a platform-change watch and API version/sunset fields when known. |
| Attribution | Reported ROAS is not incrementality; modeled, view-through, engage-through, and AAK/SKAN signals carry uncertainty. | Weekly reports must disclose "reported, not incremental" and label uncertainty. |
| Buyer value | Agencies, freelancers, in-house teams, B2B teams, ecommerce teams, and app marketers pay for audit speed, clean reporting, approval trails, and platform-specific gates. | Keep the vault practical: quickstart, approval queue, demo vault, and reusable report surfaces. |

## Hard Guardrails

- Do not recommend scaling before tracking is verified.
- Do not pause campaigns during learning phase without explicit evidence.
- Do not recommend broad match without smart bidding and verified conversion
  quality.
- Do not claim CAPI or Events API confidence without deduplication proof.
- Do not scale Apple Ads without CPP and attribution evidence.
- Do not change PMax without asset group performance data.
- Do not claim incrementality without a holdout.
- Do not rely on deprecated metrics or API versions.

## Open Implementation Pressure

- Add richer fixtures for edge cases: low EMQ, broken dedupe, missing UET,
  missing AAK, sunset API version, stale offline conversion uploads.
- Add API version/sunset fields to export frontmatter when exports include them.
- Add a tracking-trust view separate from the overall Ads Health Score.

## Source

The immutable source is stored at
`.raw/sources/research/2026-05-09-ads-brain-production-research.md`.
