# Proof Staging Plan — 2026-06-03

Purpose: provide exact, non-destructive staging groups for the Brainstein / SEO proof-safety work. This report does not run `git add`.

Use the commands only after reviewing the corresponding group. Do not mix proof gate core, generated reports, broad public copy cleanup, generated social assets, and admin/measurement changes in the same commit unless intentionally batching them.

## Proof Gate Core

- Group id: `proof_gate_core`
- Required group: yes
- Configured paths: 30
- Existing paths: 30
- Missing paths: 0
- Dirty/staging-needed paths: 30

Suggested command:

```bash
git add 'package.json' 'scripts/seo-weekly-report.mjs' 'scripts/audit-public-placeholders.mjs' 'scripts/enforce-publish-readiness.mjs' 'scripts/evidence-anti-fabrication-regression.mjs' 'scripts/evidence-coverage-report.mjs' 'scripts/generate-commercial-evidence-intake.mjs' 'scripts/generate-evidence-unblock-runbook.mjs' 'scripts/generate-internal-link-gap-report.mjs' 'scripts/generate-owner-evidence-handoff.mjs' 'scripts/generate-owner-evidence-packet.mjs' 'scripts/generate-owner-evidence-sprint.mjs' 'scripts/generate-photo-ingestion-manifest.mjs' 'scripts/generate-project-evidence-intake.mjs' 'scripts/generate-proof-ops-board.mjs' 'scripts/generate-sxo-conversion-report.mjs' 'scripts/generate-verified-proof-snippets.mjs' 'scripts/import-project-evidence.mjs' 'scripts/ingest-evidence-assets.mjs' 'scripts/proof-system-staging-check.mjs' 'scripts/generate-proof-system-staging-manifest.mjs' 'scripts/publish-readiness-gate.mjs' 'scripts/validate-evidence-ledger.mjs' 'scripts/validate-owner-intake-suite.mjs' 'scripts/validate-proof-runtime.mjs' 'scripts/lib/' 'seo-blueprint/evidence/' 'src/data/verifiedProofSnippets.json' 'src/lib/verifiedProof.js' 'src/components/VerifiedProjectProofSection.jsx'
```

Dirty/staging-needed paths:

- `package.json`
- `scripts/seo-weekly-report.mjs`
- `scripts/audit-public-placeholders.mjs`
- `scripts/enforce-publish-readiness.mjs`
- `scripts/evidence-anti-fabrication-regression.mjs`
- `scripts/evidence-coverage-report.mjs`
- `scripts/generate-commercial-evidence-intake.mjs`
- `scripts/generate-evidence-unblock-runbook.mjs`
- `scripts/generate-internal-link-gap-report.mjs`
- `scripts/generate-owner-evidence-handoff.mjs`
- `scripts/generate-owner-evidence-packet.mjs`
- `scripts/generate-owner-evidence-sprint.mjs`
- `scripts/generate-photo-ingestion-manifest.mjs`
- `scripts/generate-project-evidence-intake.mjs`
- `scripts/generate-proof-ops-board.mjs`
- `scripts/generate-sxo-conversion-report.mjs`
- `scripts/generate-verified-proof-snippets.mjs`
- `scripts/import-project-evidence.mjs`
- `scripts/ingest-evidence-assets.mjs`
- `scripts/proof-system-staging-check.mjs`
- `scripts/generate-proof-system-staging-manifest.mjs`
- `scripts/publish-readiness-gate.mjs`
- `scripts/validate-evidence-ledger.mjs`
- `scripts/validate-owner-intake-suite.mjs`
- `scripts/validate-proof-runtime.mjs`
- `scripts/lib/`
- `seo-blueprint/evidence/`
- `src/data/verifiedProofSnippets.json`
- `src/lib/verifiedProof.js`
- `src/components/VerifiedProjectProofSection.jsx`

## Owner Handoff And Generated Proof Reports

- Group id: `owner_handoff_reports`
- Required group: yes
- Configured paths: 22
- Existing paths: 22
- Missing paths: 0
- Dirty/staging-needed paths: 22

Suggested command:

```bash
git add 'docs/seo/owner-evidence-handoff-2026-06-03.md' 'docs/seo/owner-evidence-action-packet-2026-06-03.md' 'docs/seo/owner-evidence-action-packet-2026-06-03.csv' 'docs/seo/owner-evidence-sprint-2026-06-03.md' 'docs/seo/owner-evidence-sprint-2026-06-03.csv' 'docs/seo/project-evidence-intake-2026-06-03.md' 'docs/seo/project-evidence-intake-2026-06-03.csv' 'docs/seo/photo-ingestion-manifest-2026-06-03.md' 'docs/seo/photo-ingestion-manifest-2026-06-03.csv' 'docs/seo/commercial-evidence-intake-2026-06-03.md' 'docs/seo/warranty-terms-intake-2026-06-03.csv' 'docs/seo/repair-cost-ranges-intake-2026-06-03.csv' 'docs/seo/evidence-unblock-runbook-2026-06-03.md' 'docs/seo/proof-source-checklist-2026-06-03.md' 'docs/seo/verified-proof-snippets-2026-06-03.md' 'docs/seo/verified-proof-snippets-2026-06-03.json' 'docs/seo/gbp-maps-proof-ops-board-2026-06-03.md' 'docs/seo/gbp-maps-proof-ops-board-2026-06-03.csv' 'docs/seo/internal-link-gap-report-2026-06-03.md' 'docs/seo/ldndecks-deep-seo-growth-map-2026-06-03.md' 'docs/seo/sxo-conversion-report-2026-06-03.md' 'docs/seo/proof-system-staging-manifest-2026-06-03.md'
```

Dirty/staging-needed paths:

- `docs/seo/owner-evidence-handoff-2026-06-03.md`
- `docs/seo/owner-evidence-action-packet-2026-06-03.md`
- `docs/seo/owner-evidence-action-packet-2026-06-03.csv`
- `docs/seo/owner-evidence-sprint-2026-06-03.md`
- `docs/seo/owner-evidence-sprint-2026-06-03.csv`
- `docs/seo/project-evidence-intake-2026-06-03.md`
- `docs/seo/project-evidence-intake-2026-06-03.csv`
- `docs/seo/photo-ingestion-manifest-2026-06-03.md`
- `docs/seo/photo-ingestion-manifest-2026-06-03.csv`
- `docs/seo/commercial-evidence-intake-2026-06-03.md`
- `docs/seo/warranty-terms-intake-2026-06-03.csv`
- `docs/seo/repair-cost-ranges-intake-2026-06-03.csv`
- `docs/seo/evidence-unblock-runbook-2026-06-03.md`
- `docs/seo/proof-source-checklist-2026-06-03.md`
- `docs/seo/verified-proof-snippets-2026-06-03.md`
- `docs/seo/verified-proof-snippets-2026-06-03.json`
- `docs/seo/gbp-maps-proof-ops-board-2026-06-03.md`
- `docs/seo/gbp-maps-proof-ops-board-2026-06-03.csv`
- `docs/seo/internal-link-gap-report-2026-06-03.md`
- `docs/seo/ldndecks-deep-seo-growth-map-2026-06-03.md`
- `docs/seo/sxo-conversion-report-2026-06-03.md`
- `docs/seo/proof-system-staging-manifest-2026-06-03.md`

## Public Proof-Safety Copy And SEO Cleanup

- Group id: `public_proof_safety_copy`
- Required group: no
- Configured paths: 7
- Existing paths: 7
- Missing paths: 0
- Dirty/staging-needed paths: 7

Suggested command:

```bash
git add 'public/llms.txt' 'public/llms-full.txt' 'src/app/llms.txt/route.js' 'src/app/llms-full.txt/route.js' 'src/components/' 'src/lib/' 'seo-blueprint/'
```

Dirty/staging-needed paths:

- `public/llms.txt`
- `public/llms-full.txt`
- `src/app/llms.txt/route.js`
- `src/app/llms-full.txt/route.js`
- `src/components/`
- `src/lib/`
- `seo-blueprint/`

## Generated Social / OG Assets

- Group id: `generated_social_assets`
- Required group: no
- Configured paths: 1
- Existing paths: 1
- Missing paths: 0
- Dirty/staging-needed paths: 1

Suggested command:

```bash
git add 'public/social/'
```

Dirty/staging-needed paths:

- `public/social/`

## Ads / Measurement / Admin SEO Surface

- Group id: `ads_measurement_admin`
- Required group: no
- Configured paths: 8
- Existing paths: 7
- Missing paths: 1
- Dirty/staging-needed paths: 7

Suggested command:

```bash
git add 'scripts/measurement-integrity-gate.mjs' 'src/app/admin/seo/' 'src/app/api/seo/' 'src/components/ConsentBanner.jsx' 'src/components/ConsentBanner.module.css' 'src/lib/dataforseo.js' 'src/lib/seoAdminAuth.js'
```

Missing paths:

- `docs/ads-tracking/MEASUREMENT-INTEGRITY-GATE-2026-06-03.md`

Dirty/staging-needed paths:

- `scripts/measurement-integrity-gate.mjs`
- `src/app/admin/seo/`
- `src/app/api/seo/`
- `src/components/ConsentBanner.jsx`
- `src/components/ConsentBanner.module.css`
- `src/lib/dataforseo.js`
- `src/lib/seoAdminAuth.js`

