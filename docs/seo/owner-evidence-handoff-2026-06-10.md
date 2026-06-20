# Owner Evidence Handoff — 2026-06-10

Purpose: one owner-facing control document for resolving proof blockers without fabricating project details, photos, warranty terms, repair costs, reviews, credentials, or permit outcomes.

## Current Status

- Handoff status: ready for owner collection
- Publish readiness: 0 ready · 1 incomplete · 3 blocked
- Owner action rows: 26
- P0 actions: 13
- P1 actions: 13
- Projects: 10 total · 10 partial
- Asset requirements: 11 total · 11 missing

## Evidence Workload Summary

- Photo or asset actions: 11
- Project record actions: 10
- Warranty term actions: 1
- Repair cost range actions: 4

## Owner Files To Complete

- Master action packet: `docs/seo/owner-evidence-action-packet-2026-06-10.csv` — 26 rows
- Sprint checklist report: `docs/seo/owner-evidence-sprint-2026-06-10.md` — 5 execution blocks
- Sprint checklist CSV: `docs/seo/owner-evidence-sprint-2026-06-10.csv` — 5 rows
- Project evidence intake: `docs/seo/project-evidence-intake-2026-06-10.csv` — 10 rows
- Photo ingestion manifest: `docs/seo/photo-ingestion-manifest-2026-06-10.csv` — 17 rows
- Warranty intake: `docs/seo/warranty-terms-intake-2026-06-10.csv` — 1 row(s)
- Repair cost intake: `docs/seo/repair-cost-ranges-intake-2026-06-10.csv` — 4 rows
- Directory citation status: `docs/seo/directory-citation-status-2026-06-10.md` — NADRA, Bing Places, Apple Business Connect, Nextdoor, and Angi
- NADRA directory packet: `docs/seo/nadra-directory-verification-packet-2026-06-10.md` — member profile and website badge proof
- Bing Places packet: `docs/seo/bing-places-verification-packet-2026-06-10.md` — public map and dashboard proof
- Apple Business Connect packet: `docs/seo/apple-business-connect-verification-packet-2026-06-10.md` — dashboard/public place proof
- Nextdoor cleanup packet: `docs/seo/nextdoor-citation-cleanup-packet-2026-06-10.md` — public cleanup proof
- Angi cleanup packet: `docs/seo/angi-citation-cleanup-packet-2026-06-10.md` — public cleanup proof

## Recommended Completion Order

1. Fill the P0 deck repair photos in the photo manifest first.
2. Confirm the exact repair workmanship warranty wording.
3. Confirm repair cost ranges from invoices, accepted estimates, calculator data, or owner-approved pricing policy.
4. Complete the 4 before/after project records.
5. Complete the 6 showcase project records.
6. Collect directory-citation screenshots for NADRA, Bing Places, Apple Business Connect, Nextdoor, and Angi without promoting unverified URLs into public trust copy.
7. Run dry-runs before any verified import.
8. Promote rows to `verified` only after source review and successful validation.

## 48-Hour Owner Collection Sprint

Use this as the short execution order before any verified import:

1. Repair media block: collect the 11 photo/asset actions, starting with the 8 deck repair assets.
2. Commercial proof block: confirm 1 warranty term action and 4 repair cost range actions from written policy, invoices, accepted estimates, calculator data, or owner-approved pricing policy.
3. Project linkage block: complete the 10 project record actions with city, month/year, scope, materials, permit/HOA status, and photo linkage.
4. Privacy pass: redact addresses, permit numbers, customer names, phone numbers, emails, and private notes before any file enters public proof paths.
5. Dry-run pass: run the dry-run commands below and keep unresolved rows as `partial` until validation passes.
6. Directory-citation pass: attach NADRA/Bing/Apple/Nextdoor/Angi screenshots to the matching packets and keep unresolved platforms proof-gated.

Done means: original media is linked to a real project, source notes are concrete, unknown fields remain `partial`, and no public claim depends on unverified proof.

## Directory Citation Evidence Addendum

These items support the entity graph and local SEO citation cleanup. They do not count as project proof, review proof, warranty proof, or completed-work proof.

| Platform | Evidence needed | Packet | sameAs / public trust rule |
|---|---|---|---|
| NADRA directory | Live profile or member-dashboard screenshot showing Loudoun Decks membership and confirmation that the website badge links to the supplied profile URL. | `docs/seo/nadra-directory-verification-packet-2026-06-10.md` | Allowed in `sameAs`; still archive screenshot proof before marking resolved. |
| Bing Places | Current public Bing Maps screenshot plus Bing Places dashboard claim/sync, NAP, category, website, and email screenshots. | `docs/seo/bing-places-verification-packet-2026-06-10.md` | Do not promote as fresh public proof until current screenshots confirm canonical NAP. |
| Apple Business Connect | Dashboard claim/verification screenshot, NAP screen, category/service screen, website field, and public Apple Maps URL if available. | `docs/seo/apple-business-connect-verification-packet-2026-06-10.md` | Do not add Apple Maps to `sameAs` until dashboard or public place card confirms canonical NAP. |
| Nextdoor | Before/after public screenshots showing corrected Loudoun Decks name, canonical website/contact, clean categories, and claim/admin state if accessible. | `docs/seo/nextdoor-citation-cleanup-packet-2026-06-10.md` | Do not add Nextdoor to `sameAs` until public cleanup is visible. |
| Angi | Public/admin before-after screenshots, corrected profile URL, claim status, canonical NAP/website, category screenshot, and duplicate/name cleanup proof. | `docs/seo/angi-citation-cleanup-packet-2026-06-10.md` | Do not add Angi to `sameAs` until corrected public identity is verified. |

## Minimum Proof Packet

Before any row becomes `verified`, confirm:

- City/county and month/year are filled without exposing a full address.
- Service type, scope, materials/systems, and work performed are concrete source-reviewed fields.
- Repair rows include failure found when the page uses repair proof.
- Permit/HOA status is documented or explicitly left unknown.
- Before/after paths resolve after ingest and publication permission is confirmed.
- Warranty, cost, review count, and permit outcomes are not quoted unless source verified.
- A source note names the reviewed source without exposing private homeowner details.
- Every `verified` row includes concrete `owner_notes` describing the reviewed source type and what was confirmed.
- If a row has a `source` field, that field is also concrete before verified import.

Acceptable `owner_notes` example: `Source reviewed: accepted estimate #redacted, May 2026, Ashburn; scope, material, and photo linkage confirmed by owner.`
Blocked `owner_notes` examples: `OWNER TO FILL`, `owner verification still required`, `verification still required`, `source pending`, `unknown`.

## What Must Stay Non-Citable

- Exact review counts or ratings unless checked against the live profile at the time of publication.
- Warranty duration, scope, exclusions, or guarantee language unless verified from written terms.
- Permit approval outcomes unless supported by a redacted permit/inspection record or owner-confirmed jurisdiction record.
- Exact project cost unless backed by invoice, accepted estimate, calculator data, or owner-approved pricing policy.
- Completed-project examples unless city, month/year, scope, material, and photo linkage are filled.
- Customer names, addresses, phone numbers, email addresses, unredacted documents, or private permit numbers.
- Technician identities, credentials, certifications, or years of experience unless verified and approved.
- Before/after claims from stock images, inspiration images, manufacturer images, or unlinked project photos.

## Dry-Run Commands

```bash
npm run seo:proof-preflight
npm run seo:proof-staging-manifest
npm run seo:proof-staging-check
npm run seo:proof-staging-plan
npm run seo:directory-citations:validate
npm run seo:evidence-unblock -- --date latest
npm run seo:validate-owner-intake
npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-2026-06-10.csv --dry-run
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-10.csv --preflight
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-10.csv --dry-run
npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-2026-06-10.csv --dry-run
npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-2026-06-10.csv --dry-run
```

`seo:proof-preflight` should pass before staging proof-system work. Before owner evidence is complete, it should show prepublish as expected-blocked; after verified evidence import, `seo:prepublish-evidence` must pass normally.

`seo:proof-staging-plan` writes non-destructive grouped `git add` commands. Review the groups before staging; do not combine proof core, public copy cleanup, social assets, and admin/measurement changes unless that batching is intentional.

## Verified Import Commands

Run only after source review. Keep unknown rows as `partial`.

```bash
npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-2026-06-10.csv --allow-verified
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-10.csv --allow-verified
npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-2026-06-10.csv --allow-verified
npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-2026-06-10.csv --allow-verified
npm run seo:validate-evidence
npm run seo:validate-proof-runtime
npm run seo:publish-readiness
npm run seo:prepublish-evidence
npm run build
```

## Red Gates

- Do not use stock imagery.
- Do not publish customer names, full addresses, phone numbers, permit numbers, or unredacted documents.
- Do not mark any project `verified` while owner-fill, unknown, not recorded, or unverifiable values remain.
- Do not mark any row `verified` without concrete `owner_notes` describing reviewed evidence source.
- Do not use `owner verification still required`, `verification still required`, or `source pending` in verified rows.
- Do not invent technician identities, certifications, project stories, warranty terms, before/after photos, permit outcomes, or structural claims.
- Do not publish repair cost ranges unless `low`, `high`, and `source` are filled from real pricing evidence.
- Do not publish exact warranty language until the term, scope, exclusions, and coverage differences are confirmed.
- Do not add Apple Maps, Nextdoor, or Angi to `sameAs` until canonical public identity is verified with current screenshots or admin evidence.
- Do not promote Bing Places as fresh public proof until current public and dashboard screenshots confirm canonical NAP.

## Page Verdicts

| Page | Verdict | Top issue |
|---|---|---|
| /before-and-after | blocked | 2 missing evidence item(s). |
| /composite-deck-cost-northern-virginia | blocked | 1 missing evidence item(s). |
| /services/deck-repair | blocked | No verified warranty term recorded for repair proof modules. |
| /showcase | proof-incomplete | 6 partial evidence item(s). |

## Intake Suite Check

- Status: pass
- Project intake rows: 10
- Photo manifest rows: 17
- Warranty rows: 1
- Repair cost rows: 4
- Errors: 0

