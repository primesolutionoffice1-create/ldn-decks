# Proof Staging Plan — 2026-06-21

Purpose: provide exact, non-destructive staging groups for the Brainstein / SEO proof-safety work. This report does not run `git add`.

Use the commands only after reviewing the corresponding group. Do not mix proof gate core, generated reports, broad public copy cleanup, generated social assets, and admin/measurement changes in the same commit unless intentionally batching them.

## Proof Gate Core

- Group id: `proof_gate_core`
- Required group: yes
- Configured paths: 35
- Existing paths: 35
- Missing paths: 0
- Dirty/staging-needed paths: 1

Suggested command:

```bash
git add 'scripts/validate-ai-discovery.mjs'
```

Dirty/staging-needed paths:

- `scripts/validate-ai-discovery.mjs`

## Owner Handoff And Generated Proof Reports

- Group id: `owner_handoff_reports`
- Required group: yes
- Configured paths: 28
- Existing paths: 28
- Missing paths: 0
- Dirty/staging-needed paths: 27

Suggested command:

```bash
git add 'docs/seo/owner-evidence-handoff-2026-06-21.md' 'docs/seo/owner-evidence-action-packet-2026-06-21.md' 'docs/seo/owner-evidence-action-packet-2026-06-21.csv' 'docs/seo/owner-evidence-sprint-2026-06-21.md' 'docs/seo/owner-evidence-sprint-2026-06-21.csv' 'docs/seo/project-evidence-intake-2026-06-21.md' 'docs/seo/project-evidence-intake-2026-06-21.csv' 'docs/seo/photo-ingestion-manifest-2026-06-21.md' 'docs/seo/photo-ingestion-manifest-2026-06-21.csv' 'docs/seo/commercial-evidence-intake-2026-06-21.md' 'docs/seo/directory-citation-status-2026-06-21.md' 'docs/seo/nadra-directory-verification-packet-2026-06-21.md' 'docs/seo/bing-places-verification-packet-2026-06-21.md' 'docs/seo/apple-business-connect-verification-packet-2026-06-21.md' 'docs/seo/nextdoor-citation-cleanup-packet-2026-06-21.md' 'docs/seo/angi-citation-cleanup-packet-2026-06-21.md' 'docs/seo/warranty-terms-intake-2026-06-21.csv' 'docs/seo/repair-cost-ranges-intake-2026-06-21.csv' 'docs/seo/evidence-unblock-runbook-2026-06-21.md' 'docs/seo/proof-source-checklist-2026-06-21.md' 'docs/seo/verified-proof-snippets-2026-06-21.md' 'docs/seo/verified-proof-snippets-2026-06-21.json' 'docs/seo/gbp-maps-proof-ops-board-2026-06-21.md' 'docs/seo/gbp-maps-proof-ops-board-2026-06-21.csv' 'docs/seo/internal-link-gap-report-2026-06-21.md' 'docs/seo/ldndecks-deep-seo-growth-map-2026-06-21.md' 'docs/seo/proof-system-staging-manifest-2026-06-21.md'
```

Dirty/staging-needed paths:

- `docs/seo/owner-evidence-handoff-2026-06-21.md`
- `docs/seo/owner-evidence-action-packet-2026-06-21.md`
- `docs/seo/owner-evidence-action-packet-2026-06-21.csv`
- `docs/seo/owner-evidence-sprint-2026-06-21.md`
- `docs/seo/owner-evidence-sprint-2026-06-21.csv`
- `docs/seo/project-evidence-intake-2026-06-21.md`
- `docs/seo/project-evidence-intake-2026-06-21.csv`
- `docs/seo/photo-ingestion-manifest-2026-06-21.md`
- `docs/seo/photo-ingestion-manifest-2026-06-21.csv`
- `docs/seo/commercial-evidence-intake-2026-06-21.md`
- `docs/seo/directory-citation-status-2026-06-21.md`
- `docs/seo/nadra-directory-verification-packet-2026-06-21.md`
- `docs/seo/bing-places-verification-packet-2026-06-21.md`
- `docs/seo/apple-business-connect-verification-packet-2026-06-21.md`
- `docs/seo/nextdoor-citation-cleanup-packet-2026-06-21.md`
- `docs/seo/angi-citation-cleanup-packet-2026-06-21.md`
- `docs/seo/warranty-terms-intake-2026-06-21.csv`
- `docs/seo/repair-cost-ranges-intake-2026-06-21.csv`
- `docs/seo/evidence-unblock-runbook-2026-06-21.md`
- `docs/seo/proof-source-checklist-2026-06-21.md`
- `docs/seo/verified-proof-snippets-2026-06-21.md`
- `docs/seo/verified-proof-snippets-2026-06-21.json`
- `docs/seo/gbp-maps-proof-ops-board-2026-06-21.md`
- `docs/seo/gbp-maps-proof-ops-board-2026-06-21.csv`
- `docs/seo/internal-link-gap-report-2026-06-21.md`
- `docs/seo/ldndecks-deep-seo-growth-map-2026-06-21.md`
- `docs/seo/proof-system-staging-manifest-2026-06-21.md`

## Public Proof-Safety Copy And SEO Cleanup

- Group id: `public_proof_safety_copy`
- Required group: no
- Configured paths: 7
- Existing paths: 7
- Missing paths: 0
- Dirty/staging-needed paths: 4

Suggested command:

```bash
git add 'public/llms.txt' 'public/llms-full.txt' 'src/app/llms.txt/route.js' 'src/app/llms-full.txt/route.js'
```

Dirty/staging-needed paths:

- `public/llms.txt`
- `public/llms-full.txt`
- `src/app/llms.txt/route.js`
- `src/app/llms-full.txt/route.js`

## Generated Social / OG Assets

- Group id: `generated_social_assets`
- Required group: no
- Configured paths: 1
- Existing paths: 1
- Missing paths: 0
- Dirty/staging-needed paths: 0

Suggested command:

```bash
# Nothing dirty in this group.
```

Dirty/staging-needed paths:

- none

## Ads / Measurement / Admin SEO Surface

- Group id: `ads_measurement_admin`
- Required group: no
- Configured paths: 27
- Existing paths: 19
- Missing paths: 8
- Dirty/staging-needed paths: 0

Suggested command:

```bash
# Nothing dirty in this group.
```

Missing paths:

- `docs/ads-tracking/live-call-attribution-evidence-2026-06-21.csv`
- `docs/ads-tracking/live-lead-outcomes-2026-06-21.csv`
- `docs/ads-tracking/scaling-evidence-bundle-2026-06-21.md`
- `docs/ads-tracking/scaling-evidence-request-2026-06-21.csv`
- `docs/ads-tracking/scaling-evidence-request-2026-06-21.md`
- `docs/seo/scaling-blocker-exit-checklist-2026-06-21.csv`
- `docs/seo/scaling-blocker-exit-checklist-2026-06-21.md`
- `docs/seo/scaling-readiness-board-2026-06-21.md`

Dirty/staging-needed paths:

- none
