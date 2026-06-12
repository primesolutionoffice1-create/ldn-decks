# Proof System Staging Manifest — 2026-06-12

Purpose: keep the Brainstein / SEO proof-safety work mergeable without mixing verified-evidence infrastructure, generated owner handoff files, public SEO copy changes, generated social images, and unrelated worktree noise.

## Current Branch

- Branch: `codex/daily-evidence-packet-2026-06-12`
- Production deploy: no
- Merge to main: no
- Publish gate: intentionally blocked until owner evidence is verified

## Required Commit Groups

### 1. Proof Gate Core

Runtime and automation layer that prevents fabricated E-E-A-T, stale proof claims, placeholder evidence, and unverified project examples from reaching publish-ready status.

Stage these together for the required proof workflow.

- `package.json`
- `scripts/seo-weekly-report.mjs`
- `scripts/audit-public-placeholders.mjs`
- `scripts/enforce-publish-readiness.mjs`
- `scripts/evidence-anti-fabrication-regression.mjs`
- `scripts/evidence-coverage-report.mjs`
- `scripts/generate-commercial-evidence-intake.mjs`
- `scripts/generate-before-after-evidence-resolution.mjs`
- `scripts/generate-evidence-unblock-runbook.mjs`
- `scripts/generate-internal-link-gap-report.mjs`
- `scripts/generate-owner-evidence-handoff.mjs`
- `scripts/generate-owner-evidence-packet.mjs`
- `scripts/generate-owner-evidence-sprint.mjs`
- `scripts/generate-photo-ingestion-manifest.mjs`
- `scripts/generate-project-evidence-intake.mjs`
- `scripts/generate-proof-ops-board.mjs`
- `scripts/generate-directory-citation-packets.mjs`
- `scripts/generate-sxo-conversion-report.mjs`
- `scripts/generate-verified-proof-snippets.mjs`
- `scripts/import-project-evidence.mjs`
- `scripts/ingest-evidence-assets.mjs`
- `scripts/proof-system-staging-check.mjs`
- `scripts/validate-directory-citation-packets.mjs`
- `scripts/validate-ai-discovery.mjs`
- `scripts/validate-proof-command-references.mjs`
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

### 2. Owner Handoff And Generated Proof Reports

Generated owner/evidence collection artifacts used by the proof workflow and QA pass.

Stage these together for the required proof workflow.

- `docs/seo/owner-evidence-handoff-2026-06-12.md`
- `docs/seo/owner-evidence-action-packet-2026-06-12.md`
- `docs/seo/owner-evidence-action-packet-2026-06-12.csv`
- `docs/seo/owner-evidence-sprint-2026-06-12.md`
- `docs/seo/owner-evidence-sprint-2026-06-12.csv`
- `docs/seo/project-evidence-intake-2026-06-12.md`
- `docs/seo/project-evidence-intake-2026-06-12.csv`
- `docs/seo/photo-ingestion-manifest-2026-06-12.md`
- `docs/seo/photo-ingestion-manifest-2026-06-12.csv`
- `docs/seo/commercial-evidence-intake-2026-06-12.md`
- `docs/seo/directory-citation-status-2026-06-12.md`
- `docs/seo/nadra-directory-verification-packet-2026-06-12.md`
- `docs/seo/bing-places-verification-packet-2026-06-12.md`
- `docs/seo/apple-business-connect-verification-packet-2026-06-12.md`
- `docs/seo/nextdoor-citation-cleanup-packet-2026-06-12.md`
- `docs/seo/angi-citation-cleanup-packet-2026-06-12.md`
- `docs/seo/warranty-terms-intake-2026-06-12.csv`
- `docs/seo/repair-cost-ranges-intake-2026-06-12.csv`
- `docs/seo/evidence-unblock-runbook-2026-06-12.md`
- `docs/seo/proof-source-checklist-2026-06-12.md`
- `docs/seo/verified-proof-snippets-2026-06-12.md`
- `docs/seo/verified-proof-snippets-2026-06-12.json`
- `docs/seo/gbp-maps-proof-ops-board-2026-06-12.md`
- `docs/seo/gbp-maps-proof-ops-board-2026-06-12.csv`
- `docs/seo/internal-link-gap-report-2026-06-12.md`
- `docs/seo/ldndecks-deep-seo-growth-map-2026-06-12.md`
- `docs/seo/sxo-conversion-report-2026-06-12.md`
- `docs/seo/proof-system-staging-manifest-2026-06-12.md`

### 3. Public Proof-Safety Copy And SEO Cleanup

Site-wide copy, schema, metadata, internal-link, AI-facing, and trust-claim cleanup that should be reviewed separately from the automation commit.

Review and stage this group separately when it is intentional.

- `public/llms.txt`
- `public/llms-full.txt`
- `src/app/llms.txt/route.js`
- `src/app/llms-full.txt/route.js`
- `src/components/`
- `src/lib/`
- `seo-blueprint/`

### 4. Generated Social / OG Assets

Generated binary social/OG images; stage only after confirming the repo should carry them.

Review and stage this group separately when it is intentional.

- `public/social/`

### 5. Ads / Measurement / Admin SEO Surface

Tracking, consent, admin tooling, and API surfaces that should be reviewed separately from the proof gate.

Review and stage this group separately when it is intentional.

- `docs/ads-tracking/live-call-attribution-evidence-2026-06-12.csv`
- `docs/ads-tracking/live-lead-outcomes-2026-06-12.csv`
- `docs/ads-tracking/MEASUREMENT-INTEGRITY-GATE-2026-06-12.md`
- `docs/ads-tracking/scaling-evidence-bundle-2026-06-12.md`
- `docs/ads-tracking/scaling-evidence-request-2026-06-12.csv`
- `docs/ads-tracking/scaling-evidence-request-2026-06-12.md`
- `docs/seo/scaling-blocker-exit-checklist-2026-06-12.csv`
- `docs/seo/scaling-blocker-exit-checklist-2026-06-12.md`
- `docs/seo/scaling-readiness-board-2026-06-12.md`
- `docs/ads-tracking/CALL-ATTRIBUTION-READONLY-RUNBOOK-2026-06-02.md`
- `docs/ads-tracking/PHASE-2-MANUAL-OFFLINE-UPLOAD-RUNBOOK.md`
- `docs/ads-tracking/templates/`
- `scripts/generate-google-ads-offline-preview.mjs`
- `scripts/generate-scaling-blocker-exit-checklist.mjs`
- `scripts/generate-scaling-evidence-bundle.mjs`
- `scripts/generate-scaling-evidence-request.mjs`
- `scripts/measurement-integrity-gate.mjs`
- `scripts/validate-call-attribution-evidence.mjs`
- `scripts/validate-lead-outcome-rows.mjs`
- `scripts/validate-scaling-evidence-bundle.mjs`
- `scripts/validate-scaling-evidence-request.mjs`
- `src/app/admin/seo/`
- `src/app/api/seo/`
- `src/components/ConsentBanner.jsx`
- `src/components/ConsentBanner.module.css`
- `src/lib/dataforseo.js`
- `src/lib/seoAdminAuth.js`

## Acceptance Checks

- `npm run seo:proof-staging-manifest` regenerates this manifest.
- `npm run seo:proof-staging-check` must pass with `0` required missing files.
- `npm run seo:evidence-handoff:validate` must pass before owner-facing proof instructions are staged.
- `npm run seo:directory-citations:validate` must pass before any citation URL or `sameAs` promotion is staged.
- `npm run seo:validate-ai-discovery` must pass before AI discovery files or routes are staged.
- `npm run seo:proof-commands:validate` must pass before proof docs are handed to the owner.
- `npm run seo:evidence-regression` must pass.
- `npm run seo:validate-owner-intake` must pass.
- `npm run seo:validate-evidence` must pass.
- `npm run seo:weekly` must pass.
- `npm run build` must pass.
- `npm run seo:prepublish-evidence` must fail with the expected owner-evidence blockers until owner proof is supplied.

## Current Proof Status

- Verified projects: `0/10`
- Missing asset requirements: `11/11`
- Warranty terms: `0`
- Repair cost ranges: `0`
- Public review sources: `5`
- Publish-ready pages: `0`
- Proof-incomplete pages: `1`
- Blocked pages: `3`

Blocked pages:

- `/before-and-after`
- `/composite-deck-cost-northern-virginia`
- `/services/deck-repair`

Proof-incomplete pages:

- `/showcase`

## Verified Provenance Rule

Any row promoted to `verified` must include concrete `owner_notes`. The notes must name the reviewed source type and summarize what was confirmed without exposing private customer information.

Acceptable example:

`Source reviewed: accepted estimate #redacted, May 2026, Ashburn; scope, material, and photo linkage confirmed by owner.`

Blocked examples:

- `OWNER TO FILL`
- `owner verification still required`
- `verification still required`
- `source pending`
- `unknown`

## Non-Negotiable Gates Before Deploy

- No unresolved public placeholders.
- No `verified` rows without concrete source-reviewed provenance.
- No stock imagery in proof modules.
- No fabricated technician identities, certifications, customer stories, review counts, warranty terms, permit outcomes, or before/after projects.
- No exact repair cost ranges unless source-backed and imported into the ledger.
- `npm run seo:prepublish-evidence` must pass before merge/deploy.
- `npm run build` must pass after the final owner evidence import.

## Latest Verification Snapshot

Last verified on 2026-06-12:

- `npm run seo:proof-staging-check`: passed with `0` required missing files
- `npm run seo:evidence-handoff:validate`: passed
- `npm run seo:directory-citations:validate`: passed with `5` packets and `0` errors
- `npm run seo:validate-ai-discovery`: passed with all priority AI retrieval URLs present and no exact-address amplification
- `npm run seo:proof-commands:validate`: passed
- `npm run seo:evidence-regression`: passed
- `npm run seo:validate-owner-intake`: passed
- `npm run seo:validate-evidence`: passed
- `npm run seo:weekly`: passed
- `npm run build`: passed
- `npm run seo:prepublish-evidence`: failed intentionally with owner evidence blockers

