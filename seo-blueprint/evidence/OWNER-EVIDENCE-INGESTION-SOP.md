# Owner Evidence Ingestion SOP

Created: 2026-06-01

Use this process when owner-supplied project, warranty, cost, asset, or public-review evidence arrives. The goal is to add proof without accidentally publishing fabricated or unverifiable claims.

## 1. Prepare The CSV

Start from:

`seo-blueprint/evidence/project-evidence-intake-template.csv`

Additional intake templates:

- `seo-blueprint/evidence/warranty-terms-intake-template.csv`
- `seo-blueprint/evidence/repair-cost-ranges-intake-template.csv`
- `seo-blueprint/evidence/asset-requirements-intake-template.csv`
- `seo-blueprint/evidence/public-review-sources-intake-template.csv`
- `seo-blueprint/evidence/photo-ingestion-manifest-template.csv`

Generate the current owner action packet first:

```bash
npm run seo:evidence-handoff
npm run seo:evidence-sprint
npm run seo:evidence-owner-packet
```

`seo:evidence-handoff` writes the owner-facing control document. `seo:evidence-sprint` writes the short owner execution checklist and CSV with the repair media, commercial proof, project linkage, privacy, and dry-run blocks. `seo:evidence-owner-packet` writes the Markdown checklist, owner CSV, project intake CSV, prefilled photo manifest, warranty intake CSV, and repair-cost intake CSV to `docs/seo/` based on the current ledger gaps and publish-readiness verdicts.

Start owner collection from:

- `docs/seo/owner-evidence-handoff-YYYY-MM-DD.md`
- `docs/seo/owner-evidence-sprint-YYYY-MM-DD.md`
- `docs/seo/owner-evidence-sprint-YYYY-MM-DD.csv`
- `docs/seo/owner-evidence-action-packet-YYYY-MM-DD.csv`

To regenerate only the project, photo, or commercial intake files:

```bash
npm run seo:project-intake
npm run seo:photo-manifest
npm run seo:commercial-intake
```

For the page-level readiness view, run:

```bash
npm run seo:publish-readiness
```

Use that report to prioritize pages marked `blocked` before pages marked `proof-incomplete`.

Required fields:

- `project_id`
- `city`
- `neighborhood`
- `month_year`
- `service_type`
- `materials`
- `verified_scope`
- `verified_failure`
- `work_performed`
- `permit_or_hoa_status`
- `before_photo_path`
- `after_photo_path`
- `evidence_status`
- `owner_notes`

Use `partial` when evidence is incomplete. Use `verified` only when source evidence has been inspected, all required fields contain concrete values, and the photo paths resolve in `public/`.

Rows marked `verified` must not contain:

- `unknown`
- `not recorded`
- `not specified`
- `unspecified`
- `unverified`
- `pending owner verification`
- `owner verification still required`
- `verification still required`
- `verify from owner`
- `evidence missing`
- `OWNER TO FILL`
- bracketed placeholders such as `[VERIFY ...]` or `[INSERT ...]`

### Verified provenance requirement

Every row promoted with `--allow-verified` must include concrete `owner_notes`. The note should name the reviewed source type and summarize what was confirmed without exposing customer names, full addresses, permit numbers, phone numbers, emails, or unredacted documents.

Acceptable:

- `Source reviewed: accepted estimate #redacted, May 2026, Ashburn; scope, material, and photo linkage confirmed by owner.`
- `Source reviewed: redacted invoice and original before/after photos; city, month/year, and repair type confirmed.`

Not acceptable for `verified` rows:

- `OWNER TO FILL`
- `owner verification still required`
- `verification still required`
- `source pending`
- `unknown`
- vague notes such as `owner confirmed` when the reviewed source type is not named

## 2. Complete Project Evidence

Generate the prefilled project evidence intake:

```bash
npm run seo:project-intake
```

This writes:

- `docs/seo/project-evidence-intake-2026-06-02.csv`
- `docs/seo/project-evidence-intake-2026-06-02.md`

Rules:

- Keep project rows `partial` until source evidence is reviewed.
- Do not mark projects `verified` while owner-fill, unknown, not recorded, or unverifiable values remain.
- Before/after paths must resolve in `public/` before verified import.
- Do not add customer names, full addresses, phone numbers, permit numbers, or unredacted documents.

Minimum packet before a project can become `verified`:

- City and county.
- Month and year.
- Service type.
- Concrete scope summary.
- Materials or systems when material claims are public.
- Failure found for repair projects.
- Work performed.
- Permit/HOA status or `unknown`.
- Before/after paths when the page uses before/after proof.
- Publication permission.
- Source note naming the reviewed evidence source.

Keep the row `partial` when any minimum field is missing or privacy-sensitive.

Dry run after owner fills the file:

```bash
npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-2026-06-02.csv --dry-run
```

Only after source review:

```bash
npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-2026-06-02.csv --allow-verified
```

## 3. Import Safely

Dry run first:

```bash
npm run seo:import-evidence -- --type projects --file seo-blueprint/evidence/project-evidence-intake-template.csv --dry-run
```

Import:

```bash
npm run seo:import-evidence -- --type projects --file seo-blueprint/evidence/project-evidence-intake-template.csv
```

`projects` is the default type, so older commands without `--type projects` still work.

Other supported evidence types:

```bash
npm run seo:import-evidence -- --type warranty_terms --file seo-blueprint/evidence/warranty-terms-intake-template.csv --dry-run
npm run seo:import-evidence -- --type repair_cost_ranges --file seo-blueprint/evidence/repair-cost-ranges-intake-template.csv --dry-run
npm run seo:import-evidence -- --type asset_requirements --file seo-blueprint/evidence/asset-requirements-intake-template.csv --dry-run
npm run seo:import-evidence -- --type public_review_sources --file seo-blueprint/evidence/public-review-sources-intake-template.csv --dry-run
```

On a real import, the importer validates the ledger and automatically regenerates:

- owner evidence action packet
- verified-only proof snippets
- runtime proof JSON used by the site

By default, rows marked `verified` are downgraded to `partial`. This prevents a spreadsheet typo from becoming a public proof claim.

Allow verified rows only after evidence inspection:

```bash
npm run seo:import-evidence -- --type projects --file path/to/owner-filled.csv --allow-verified
```

Use the matching `--type` when importing non-project evidence. Example:

```bash
npm run seo:import-evidence -- --type warranty_terms --file path/to/owner-filled-warranty.csv --allow-verified
```

## 4. Verify Warranty And Repair Costs

Generate prefilled commercial intake files:

```bash
npm run seo:commercial-intake
```

This writes:

- `docs/seo/warranty-terms-intake-2026-06-02.csv`
- `docs/seo/repair-cost-ranges-intake-2026-06-02.csv`
- `docs/seo/commercial-evidence-intake-2026-06-02.md`

Rules:

- Do not invent warranty duration, exclusions, or coverage scope.
- Do not publish repair cost ranges until `low`, `high`, and `source` are owner/source verified.
- Leave unknown values blank and keep `evidence_status` as `partial`.

Dry run after owner fills the files:

```bash
npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-2026-06-02.csv --dry-run
npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-2026-06-02.csv --dry-run
```

Only after source review:

```bash
npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-2026-06-02.csv --allow-verified
npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-2026-06-02.csv --allow-verified
```

## 5. Ingest Original Photos

Use the photo manifest when original project photos arrive:

```bash
npm run seo:photo-manifest
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-02.csv --preflight
```

Required photo manifest fields:

- `asset_id`
- `source_path`
- `public_path`
- `evidence_status`
- `city`
- `month_year`
- `caption`
- `owner_notes`

Rules:

- Use original project photos only.
- Do not use stock imagery.
- `asset_id` must already exist in `ledger.asset_requirements`.
- `public_path` must start with `/` and should normally live under `/images/evidence/`.
- Supported image extensions: `.avif`, `.webp`, `.jpg`, `.jpeg`, `.png`, `.heic`, `.heif`.
- Use one row per image file. A before/after pair should use two rows with the same `asset_id`.
- Rows marked `verified` are downgraded to `partial` unless `--allow-verified` is used.
- Never mark an asset `verified` if the city, month/year, project linkage, or publication permission is unknown.

Normalize filenames before ingest:

```text
project-city-service-month-year-before-01.jpg
project-city-service-month-year-after-01.jpg
repair-city-failure-type-month-year-01.jpg
```

Do not include customer names, street addresses, permit numbers, phone numbers, or private owner device filenames in public paths.

After source review, ingest:

```bash
npm run seo:ingest-assets -- --file path/to/owner-photo-manifest.csv --dry-run
```

Then ingest:

```bash
npm run seo:ingest-assets -- --file path/to/owner-photo-manifest.csv --allow-verified
```

On a real ingest, the script copies files into `public/`, updates matching asset requirements in the evidence ledger, validates the ledger, and regenerates the owner packet and verified proof snippets.

## 6. Validate

Run the quick proof preflight first:

```bash
npm run seo:proof-preflight
```

This is the operator health check. It must pass before staging or publishing proof-system changes. While owner evidence is still missing, it should report `prepublishExpectedBlocked: true`; that is the expected safe state, not a failure.

Then run the focused validators:

```bash
npm run seo:validate-evidence
npm run seo:validate-owner-intake
npm run seo:evidence-sprint
npm run seo:proof-staging-manifest
npm run seo:proof-staging-check
npm run seo:proof-staging-plan
```

The validator must pass before any project record is used in public copy, schema, case studies, review pages, service pages, or city pages. The sprint checklist must stay aligned with the owner intake suite so the owner-facing collection workflow does not drift from the proof gates.

The validator also blocks:

- verified project records with incomplete required values
- verified project records with missing before/after public assets
- verified review/profile sources with invalid URLs
- verified repair cost ranges where `low` or `high` is not numeric, is negative, or where `low` is greater than `high`

## 7. Generate Verified-Only Proof Snippets

The importer regenerates proof snippets automatically after a successful non-dry-run import. To regenerate manually without importing:

```bash
npm run seo:proof-snippets
```

This writes Markdown and JSON files to `docs/seo/` and updates `src/data/verifiedProofSnippets.json`. Public proof modules, captions, project cards, case studies, and schema should use only snippets generated by this command. Skipped records are not publishable proof.

## 8. Publish Readiness Gate

Before treating any tracked proof page as publish-ready, run:

```bash
npm run seo:publish-readiness
npm run seo:prepublish-evidence
```

Verdicts:

- `publish-ready`: no tracked proof blockers remain.
- `proof-incomplete`: no red blockers, but partial project/source proof still needs owner completion before formal case-study use.
- `blocked`: missing/blocked evidence, stale runtime proof, public placeholders, or missing repair warranty/cost proof.

The weekly report includes this gate as `Publish readiness`.

`seo:publish-readiness` reports the current verdict and exits successfully when the report is generated. `seo:prepublish-evidence` is the hard merge/deploy gate and exits nonzero until every tracked proof page is `publish-ready`.

Use `npm run seo:proof-staging-plan` before staging proof-system work. It writes a non-destructive staging plan with grouped `git add` commands for proof core, owner reports, public copy cleanup, social/OG assets, and admin/measurement work. Do not stage every group into one commit unless that batching is intentional.

Use `npm run seo:proof-preflight` immediately before merge/deploy readiness review. Before owner evidence is complete, this command should pass while showing prepublish as expected-blocked. After owner evidence is verified and imported, `seo:prepublish-evidence` must pass normally.

## 9. Publish Rules

- `verified`: may be used in public proof modules.
- `partial`: internal planning only; do not publish as proof.
- `missing`: required evidence still absent.
- `blocked`: evidence cannot be completed without owner/source action.

## 10. Privacy Rules

Never add:

- customer full names
- addresses
- phone numbers
- emails
- permit numbers
- unredacted permit screenshots
- private HOA correspondence

Store only the evidence needed to support public claims.
