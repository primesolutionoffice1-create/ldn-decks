# Brainstein Task Packets - 2026-06-19

Purpose: convert the Brainstein readiness audit into execution packets for owner evidence collection and release gating.

## Rules

- Original owner evidence only.
- Unknown fields remain partial.
- No project, cost, warranty, review, credential, permit, date, or technician detail may be invented.
- No blocked proof page is promoted until validators pass and Brainstein readiness is no longer proof-blocked.

## Packets

### proof-before-and-after

- Page/scope: /before-and-after
- Priority: P1
- Owner: Owner evidence collector
- Reviewer: SEO proof operator
- Task: Resolve proof blockers for /before-and-after
- Source of truth: scripts/output/brainstein-readiness-audit-2026-06-19.json
- Evidence needed: 2 asset(s); 4 project record(s)
- First items: before-after-project-records: Owner-supplied project records for all four before/after cards: signed estimate or invoice, final scope, month/year, city/neighborhood, material selection, timeline, final cost, and permit/HOA status. | before-after-image-metadata: Original image metadata or owner confirmation tying each before/after pair to the correct project city, month/year, and scope. | before-after-project-1: OWNER TO FILL: month/year; neighborhood if safe; final material line/color; whether frame was reused; final cost or publishable range; timeline; permit/HOA status; whether any savings claim is publishable. | before-after-project-2: OWNER TO FILL: month/year; neighborhood/community if safe; final material line/color; frame/ledger/footing/stair/railing scope; final cost or publishable range; timeline; permit/HOA status; any code-compliance details. | before-after-project-3: OWNER TO FILL: month/year; neighborhood if safe; final material line/color; skirting/storage scope; final cost or publishable range; timeline; permit/HOA status.
- Done criteria: Owner-supplied evidence is entered into the relevant intake CSV, private data is redacted, dry-run validators pass, and the page no longer appears as blocked in proof preflight.
- Do not do: Do not invent projects, dates, technician names, reviews, costs, warranty terms, permit outcomes, or photo metadata. Leave unknown details partial.
- Validator: `npm run seo:validate-owner-intake && npm run seo:proof-preflight`

### proof-composite-deck-cost-northern-virginia

- Page/scope: /composite-deck-cost-northern-virginia
- Priority: P1
- Owner: Owner evidence collector
- Reviewer: SEO proof operator
- Task: Resolve proof blockers for /composite-deck-cost-northern-virginia
- Source of truth: scripts/output/brainstein-readiness-audit-2026-06-19.json
- Evidence needed: 1 asset(s)
- First items: composite-cost-example-records: Estimate/invoice-backed records for pricing examples before they are described as formal real project examples.
- Done criteria: Owner-supplied evidence is entered into the relevant intake CSV, private data is redacted, dry-run validators pass, and the page no longer appears as blocked in proof preflight.
- Do not do: Do not invent projects, dates, technician names, reviews, costs, warranty terms, permit outcomes, or photo metadata. Leave unknown details partial.
- Validator: `npm run seo:validate-owner-intake && npm run seo:proof-preflight`

### proof-services-deck-repair

- Page/scope: /services/deck-repair
- Priority: P0
- Owner: Owner evidence collector
- Reviewer: SEO proof operator
- Task: Resolve proof blockers for /services/deck-repair
- Source of truth: scripts/output/brainstein-readiness-audit-2026-06-19.json
- Evidence needed: 8 asset(s); 1 warranty term(s); 4 repair cost range(s)
- First items: deck-repair-hero-before-after: Hero before/after image pair for deck repair hub | ledger-failure-photo: Ledger failure photo | post-rot-photo: Post rot photo | stair-rebuild-before-after: Stair rebuild before/after | railing-repair-before-after: Railing repair before/after
- Done criteria: Owner-supplied evidence is entered into the relevant intake CSV, private data is redacted, dry-run validators pass, and the page no longer appears as blocked in proof preflight.
- Do not do: Do not invent projects, dates, technician names, reviews, costs, warranty terms, permit outcomes, or photo metadata. Leave unknown details partial.
- Validator: `npm run seo:validate-owner-intake && npm run seo:proof-preflight`

### proof-sitewide

- Page/scope: sitewide
- Priority: P1
- Owner: Owner evidence collector
- Reviewer: SEO proof operator
- Task: Resolve proof blockers for sitewide
- Source of truth: scripts/output/brainstein-readiness-audit-2026-06-19.json
- Evidence needed: 1 asset(s)
- First items: nadra-proud-member-logo: Original or NADRA-approved Proud Member logo asset for the public trust badge.
- Done criteria: Owner-supplied evidence is entered into the relevant intake CSV, private data is redacted, dry-run validators pass, and the page no longer appears as blocked in proof preflight.
- Do not do: Do not invent projects, dates, technician names, reviews, costs, warranty terms, permit outcomes, or photo metadata. Leave unknown details partial.
- Validator: `npm run seo:validate-owner-intake && npm run seo:proof-preflight`

### proof-privacy-redaction

- Page/scope: all proof assets
- Priority: P0
- Owner: Owner evidence collector
- Reviewer: SEO proof operator
- Task: Redact private homeowner and permit data before public proof use
- Source of truth: docs/seo/owner-evidence-sprint-2026-06-19.md
- Evidence needed: Original media/documents with addresses, permit numbers, customer names, phone numbers, emails, and private notes removed from public paths and captions.
- First items: Check photo EXIF/filenames, screenshots, PDFs, invoice snippets, permit screenshots, and caption text before ingest.
- Done criteria: No private homeowner data appears in public image paths, captions, reports, screenshots, or proof-bearing copy.
- Do not do: Do not upload unredacted customer documents or cite private owner data in public copy.
- Validator: `npm run seo:audit-placeholders && npm run seo:proof-preflight`

### proof-directory-citations

- Page/scope: NADRA, Bing Places, Apple Business Connect, Nextdoor, Angi
- Priority: P0
- Owner: Owner evidence collector
- Reviewer: SEO proof operator
- Task: Resolve directory citation proof gates without promoting unverified profiles
- Source of truth: scripts/output/directory-citation-packet-validation-2026-06-19.md
- Evidence needed: Current owner/admin or public-profile screenshots for NADRA, Bing Places, Apple Business Connect, Nextdoor, and Angi. NADRA profile URL: https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b. Archive the original/NADRA-approved logo asset before visual-logo rollout.
- First items: Capture NADRA public profile or member-dashboard proof; archive original/NADRA-approved logo asset; capture Bing Places current NAP/profile proof; verify Apple Business Connect owner dashboard; clean Nextdoor and Angi identity/NAP issues before any sameAs promotion.
- Done criteria: `npm run seo:directory-citations:validate` passes, all directory screenshots or admin proof are archived in owner evidence, unresolved platforms remain proof-gated, and Brainstein readiness still reports zero directory citation errors.
- Do not do: Do not add Bing, Apple, Nextdoor, or Angi URLs to organization sameAs until screenshots/admin proof confirm canonical public identity. Do not replace the NADRA text badge with a recreated logo.
- Validator: `npm run seo:directory-citations:validate && npm run brainstein:readiness && npm run brainstein:tasks:validate`

### proof-final-dry-run

- Page/scope: release gate
- Priority: P0
- Owner: SEO proof operator
- Reviewer: Release reviewer
- Task: Run final dry-run gate before publish-ready promotion
- Source of truth: scripts/output/proof-system-preflight-2026-06-19.json
- Evidence needed: Owner-filled intake CSVs, asset paths, warranty term source, repair cost source, project records, and directory citation gates ready for dry-run validation. NADRA profile URL: https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b. NADRA profile affordance: present.
- First items: Run owner intake validation, evidence ledger validation, directory citation validation, proof runtime validation, schema validation, proof preflight, and build. Keep NADRA logo proof-gated until original/NADRA-approved logo asset is archived: No NADRA logo asset found in public/badges; keep the current text badge until an original or NADRA-approved logo file is archived.
- Done criteria: `npm run seo:prepublish-evidence` passes without expected-blocked status and Brainstein readiness no longer reports proof-blocked.
- Do not do: Do not deploy, merge, or request indexing while the gate remains expected-blocked.
- Validator: `npm run seo:directory-citations:validate && npm run seo:prepublish-evidence && npm run brainstein:readiness && npm run brainstein:readiness:validate && npm run build`

### proof-command-sequence

- Page/scope: proof command gate
- Priority: P0
- Owner: SEO proof operator
- Reviewer: Release reviewer
- Task: Keep owner evidence action packet generation sequenced before validation
- Source of truth: scripts/output/proof-command-reference-validation-2026-06-19.json
- Evidence needed: 8 action-packet sequence files must keep generator and validator commands paired before publish-ready promotion.
- First items: Regenerate the owner evidence action packet, validate it, run proof command reference validation, and confirm Brainstein readiness still reports the proof command gate.
- Done criteria: `npm run seo:evidence-action-packet`, `npm run seo:evidence-action-packet:validate`, `npm run seo:proof-commands:validate`, and `npm run brainstein:readiness:validate` pass with the current action-packet sequence count.
- Do not do: Do not validate stale owner evidence action packets or treat validate-only command references as current proof.
- Validator: `npm run seo:evidence-action-packet && npm run seo:evidence-action-packet:validate && npm run seo:proof-commands:validate && npm run brainstein:readiness:validate`
