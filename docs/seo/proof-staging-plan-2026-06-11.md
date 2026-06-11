# Proof Staging Plan — 2026-06-11

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
git add 'scripts/lib/'
```

Dirty/staging-needed paths:

- `scripts/lib/`

## Owner Handoff And Generated Proof Reports

- Group id: `owner_handoff_reports`
- Required group: yes
- Configured paths: 28
- Existing paths: 28
- Missing paths: 0
- Dirty/staging-needed paths: 1

Suggested command:

```bash
git add 'docs/seo/proof-system-staging-manifest-2026-06-11.md'
```

Dirty/staging-needed paths:

- `docs/seo/proof-system-staging-manifest-2026-06-11.md`

## Public Proof-Safety Copy And SEO Cleanup

- Group id: `public_proof_safety_copy`
- Required group: no
- Configured paths: 7
- Existing paths: 7
- Missing paths: 0
- Dirty/staging-needed paths: 0

Suggested command:

```bash
# Nothing dirty in this group.
```

Dirty/staging-needed paths:

- none

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
- Existing paths: 23
- Missing paths: 4
- Dirty/staging-needed paths: 15

Suggested command:

```bash
git add 'docs/ads-tracking/live-call-attribution-evidence-2026-06-11.csv' 'docs/ads-tracking/scaling-evidence-bundle-2026-06-11.md' 'docs/ads-tracking/scaling-evidence-request-2026-06-11.csv' 'docs/ads-tracking/scaling-evidence-request-2026-06-11.md' 'docs/seo/scaling-blocker-exit-checklist-2026-06-11.csv' 'docs/seo/scaling-blocker-exit-checklist-2026-06-11.md' 'docs/seo/scaling-readiness-board-2026-06-11.md' 'docs/ads-tracking/CALL-ATTRIBUTION-READONLY-RUNBOOK-2026-06-02.md' 'docs/ads-tracking/templates/' 'scripts/generate-scaling-blocker-exit-checklist.mjs' 'scripts/generate-scaling-evidence-bundle.mjs' 'scripts/generate-scaling-evidence-request.mjs' 'scripts/validate-call-attribution-evidence.mjs' 'scripts/validate-scaling-evidence-bundle.mjs' 'scripts/validate-scaling-evidence-request.mjs'
```

Missing paths:

- `src/app/admin/seo/`
- `src/app/api/seo/`
- `src/lib/dataforseo.js`
- `src/lib/seoAdminAuth.js`

Dirty/staging-needed paths:

- `docs/ads-tracking/live-call-attribution-evidence-2026-06-11.csv`
- `docs/ads-tracking/scaling-evidence-bundle-2026-06-11.md`
- `docs/ads-tracking/scaling-evidence-request-2026-06-11.csv`
- `docs/ads-tracking/scaling-evidence-request-2026-06-11.md`
- `docs/seo/scaling-blocker-exit-checklist-2026-06-11.csv`
- `docs/seo/scaling-blocker-exit-checklist-2026-06-11.md`
- `docs/seo/scaling-readiness-board-2026-06-11.md`
- `docs/ads-tracking/CALL-ATTRIBUTION-READONLY-RUNBOOK-2026-06-02.md`
- `docs/ads-tracking/templates/`
- `scripts/generate-scaling-blocker-exit-checklist.mjs`
- `scripts/generate-scaling-evidence-bundle.mjs`
- `scripts/generate-scaling-evidence-request.mjs`
- `scripts/validate-call-attribution-evidence.mjs`
- `scripts/validate-scaling-evidence-bundle.mjs`
- `scripts/validate-scaling-evidence-request.mjs`

