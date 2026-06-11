# Proof Staging Plan — 2026-06-11

Purpose: provide exact, non-destructive staging groups for the Brainstein / SEO proof-safety work. This report does not run `git add`.

Use the commands only after reviewing the corresponding group. Do not mix proof gate core, generated reports, broad public copy cleanup, generated social assets, and admin/measurement changes in the same commit unless intentionally batching them.

## Proof Gate Core

- Group id: `proof_gate_core`
- Required group: yes
- Configured paths: 35
- Existing paths: 35
- Missing paths: 0
- Dirty/staging-needed paths: 6

Suggested command:

```bash
git add 'package.json' 'scripts/generate-directory-citation-packets.mjs' 'scripts/validate-directory-citation-packets.mjs' 'scripts/validate-ai-discovery.mjs' 'scripts/validate-proof-command-references.mjs' 'src/data/verifiedProofSnippets.json'
```

Dirty/staging-needed paths:

- `package.json`
- `scripts/generate-directory-citation-packets.mjs`
- `scripts/validate-directory-citation-packets.mjs`
- `scripts/validate-ai-discovery.mjs`
- `scripts/validate-proof-command-references.mjs`
- `src/data/verifiedProofSnippets.json`

## Owner Handoff And Generated Proof Reports

- Group id: `owner_handoff_reports`
- Required group: yes
- Configured paths: 28
- Existing paths: 28
- Missing paths: 0
- Dirty/staging-needed paths: 8

Suggested command:

```bash
git add 'docs/seo/owner-evidence-handoff-2026-06-11.md' 'docs/seo/verified-proof-snippets-2026-06-11.json' 'docs/seo/gbp-maps-proof-ops-board-2026-06-11.md' 'docs/seo/gbp-maps-proof-ops-board-2026-06-11.csv' 'docs/seo/internal-link-gap-report-2026-06-11.md' 'docs/seo/ldndecks-deep-seo-growth-map-2026-06-11.md' 'docs/seo/sxo-conversion-report-2026-06-11.md' 'docs/seo/proof-system-staging-manifest-2026-06-11.md'
```

Dirty/staging-needed paths:

- `docs/seo/owner-evidence-handoff-2026-06-11.md`
- `docs/seo/verified-proof-snippets-2026-06-11.json`
- `docs/seo/gbp-maps-proof-ops-board-2026-06-11.md`
- `docs/seo/gbp-maps-proof-ops-board-2026-06-11.csv`
- `docs/seo/internal-link-gap-report-2026-06-11.md`
- `docs/seo/ldndecks-deep-seo-growth-map-2026-06-11.md`
- `docs/seo/sxo-conversion-report-2026-06-11.md`
- `docs/seo/proof-system-staging-manifest-2026-06-11.md`

## Public Proof-Safety Copy And SEO Cleanup

- Group id: `public_proof_safety_copy`
- Required group: no
- Configured paths: 7
- Existing paths: 7
- Missing paths: 0
- Dirty/staging-needed paths: 6

Suggested command:

```bash
git add 'public/llms.txt' 'public/llms-full.txt' 'src/app/llms.txt/route.js' 'src/app/llms-full.txt/route.js' 'src/components/' 'src/lib/'
```

Dirty/staging-needed paths:

- `public/llms.txt`
- `public/llms-full.txt`
- `src/app/llms.txt/route.js`
- `src/app/llms-full.txt/route.js`
- `src/components/`
- `src/lib/`

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
- Configured paths: 8
- Existing paths: 3
- Missing paths: 5
- Dirty/staging-needed paths: 0

Suggested command:

```bash
# Nothing dirty in this group.
```

Missing paths:

- `docs/ads-tracking/MEASUREMENT-INTEGRITY-GATE-2026-06-11.md`
- `src/app/admin/seo/`
- `src/app/api/seo/`
- `src/lib/dataforseo.js`
- `src/lib/seoAdminAuth.js`

Dirty/staging-needed paths:

- none

