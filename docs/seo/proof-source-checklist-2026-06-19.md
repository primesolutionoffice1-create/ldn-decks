# Proof Source Checklist — 2026-06-19

Purpose: define exactly what can become publishable proof for LDN Decks pages, GBP, Maps, citations, social cards, and AI-citable local examples without fabricating E-E-A-T.

## Canonical Public Identity

- Loudoun Decks
- https://ldndecks.com
- +15716557207
- office@ldndecks.com
- 13704 Winding Oak Cir, Centreville, VA 20121

Use this identity everywhere. Do not create or keep public variants such as `LDNDECKS`, `Loudoun Decks Builder`, `Prime Solutions`, old Ashburn addresses, or suite/unit variants unless the platform requires a non-public legal entity field.

## Verified Public Profiles In Repo

| Profile | URL | Verification rule |
|---|---|---|
| Google Maps | https://www.google.com/maps/place/Loudoun+Decks/ | Confirm live NAP/profile state before using fresh counts or claims. |
| Houzz | https://www.houzz.com/pro/webuser-782541997/loudoun-decks | Confirm live NAP/profile state before using fresh counts or claims. |
| Yelp | https://www.yelp.com/biz/loudoun-decks-centreville | Confirm live NAP/profile state before using fresh counts or claims. |
| BBB | https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241 | Confirm live NAP/profile state before using fresh counts or claims. |
| Trustpilot | https://www.trustpilot.com/review/ldndecks.com | Confirm live NAP/profile state before using fresh counts or claims. |
| BuildZoom | https://www.buildzoom.com/contractor/loudoun-decks | Confirm live NAP/profile state before using fresh counts or claims. |
| Loudoun Chamber | https://business.loudounchamber.org/list/member/loudoun-decks-30047 | Confirm live NAP/profile state before using fresh counts or claims. |
| MapQuest | https://www.mapquest.com/us/virginia/loudoun-decks-532352487 | Confirm live NAP/profile state before using fresh counts or claims. |
| Facebook | https://www.facebook.com/profile.php?id=61574201228967 | Confirm live NAP/profile state before using fresh counts or claims. |
| Instagram | https://www.instagram.com/loudoundecks/ | Confirm live NAP/profile state before using fresh counts or claims. |
| TikTok | https://www.tiktok.com/@loudoun.decks | Confirm live NAP/profile state before using fresh counts or claims. |
| X | https://x.com/ldndecks | Confirm live NAP/profile state before using fresh counts or claims. |

## Directory Citation Proof Gate

Directory citations are entity-graph proof only after the public listing or owner/admin dashboard confirms canonical identity. Do not add a directory URL to `sameAs`, trust blocks, proof snippets, or public copy unless the packet below is complete and `npm run seo:directory-citations:validate` passes.

| Directory | Current status | Source packet | Promotion rule |
|---|---|---|---|
| NADRA directory | Profile URL supplied; badge/sameAs allowed pending screenshot and official logo asset archive | `docs/seo/nadra-directory-verification-packet-2026-06-19.md` | Keep in `sameAs`; archive live profile or member-dashboard screenshot plus original/NADRA-approved logo asset before treating as resolved proof. Do not replace the text badge with a recreated NADRA logo. |
| Bing Places | Previously dashboard-verified; fresh screenshot still required | `docs/seo/bing-places-verification-packet-2026-06-19.md` | Do not newly promote Bing as fresh public proof until current public/dashboard screenshots confirm canonical NAP. |
| Apple Business Connect | Owner-needed / not verified | `docs/seo/apple-business-connect-verification-packet-2026-06-19.md` | Do not add Apple Maps to `sameAs` until dashboard or public place card confirms canonical NAP. |
| Nextdoor | Public profile contaminated; cleanup required | `docs/seo/nextdoor-citation-cleanup-packet-2026-06-19.md` | Do not add Nextdoor to `sameAs` until public name/contact/category cleanup is visible. |
| Angi | Public identity ambiguous; cleanup required | `docs/seo/angi-citation-cleanup-packet-2026-06-19.md` | Do not add Angi to `sameAs` until corrected public profile URL and canonical NAP are verified. |

## Evidence Types And Promotion Rules

| Evidence type | Acceptable source | Can power | Red gate |
|---|---|---|---|
| Project record | Owner-filled intake row plus reviewed source notes | Case studies, service proof modules, city examples, internal proof snippets | Do not mark `verified` with unknown date, city, scope, materials, permit/HOA status, or unresolved placeholders. |
| Original photo | Owner original file, public permission, project linkage | Before/after pages, showcase, GBP photos, OG assets, service proof | No stock imagery. No proof caption without project linkage. |
| Warranty term | Written owner/company policy or contract language | Warranty trust blocks, deck repair page, financing/estimate reassurance | Do not guess warranty duration or scope. |
| Repair cost range | Invoice, accepted estimate, calculator data, or owner-approved pricing policy | Deck repair cost sections, repair-cost page, AI answer passages | Do not publish low/high ranges without source and status. |
| Public review source | Live third-party profile URL | Reviews page, social proof links, profile verification copy | No self-serving Review/AggregateRating JSON-LD. No copied review excerpts until source is logged. |
| Directory citation | Public listing URL plus screenshot or owner/admin dashboard proof | Organization `sameAs`, trust badges, citation proof, Maps/entity confidence | Do not promote Bing, Apple, Nextdoor, or Angi until the relevant packet confirms canonical public identity. |
| Permit or inspection outcome | Redacted permit, inspection, or owner-confirmed jurisdiction record | Project cards, county permit examples, code discussion | Do not invent permit outcomes or imply approval guarantee. |

## Minimum Proof Packet Per Project

Use this as the standard field-ops intake for every new project from this point forward. A project should not become a public case study, GBP post, city proof module, before/after caption, or AI-citable example until the minimum packet is complete or intentionally marked `partial`.

| Field | Required for verified? | Notes |
|---|---|---|
| City / county | yes | Use city and county, not full address. Neighborhood/community is optional and should be omitted if privacy-sensitive. |
| Month / year | yes | Use `Month YYYY`. Do not publish exact day unless already public and approved. |
| Service type | yes | Example: deck resurfacing, structural repair, deck replacement, screened porch, patio. |
| Scope summary | yes | Concrete work performed, not marketing copy. |
| Materials / systems | yes when material claims are made | Product line, board color, railing system, fasteners, lighting, trim, or `not recorded`. |
| Failure found | yes for repair pages | Example: ledger flashing gap, post rot, stair instability. Leave blank for non-repair projects. |
| Work performed | yes | The repair/build work actually completed. No implied structural outcome beyond evidence. |
| Permit / HOA status | yes | Use source-safe labels: required, not required, submitted by owner, handled by contractor, unknown. Do not claim approval unless documented. |
| Before photo path | yes for before/after proof | Must resolve under `public/` after ingest. |
| After photo path | yes for before/after proof | Must resolve under `public/` after ingest. |
| Publication permission | yes | Owner confirms the image/project can be used publicly without names/full address. |
| Cost or publishable range | only when cost is published | Must come from invoice, accepted estimate, calculator data, or owner-approved pricing policy. |
| Source note | yes | Short internal note naming the evidence source reviewed. Do not expose private details publicly. |

## Field Photo Naming Standard

When original photos arrive, normalize filenames before ingesting:

```text
project-city-service-month-year-before-01.jpg
project-city-service-month-year-after-01.jpg
repair-city-failure-type-month-year-01.jpg
```

Rules: lowercase, hyphenated, no customer names, no street addresses, no permit numbers, no phone numbers, and no private owner-device filenames if they contain personal data.

## What Must Stay Non-Citable

- Exact review counts or ratings unless checked against the live profile at the time of publication.
- Warranty duration, scope, exclusions, or guarantee language unless verified from written terms.
- Permit approval outcomes unless supported by a redacted permit/inspection record or owner-confirmed jurisdiction record.
- Exact project cost unless backed by invoice, accepted estimate, calculator data, or owner-approved pricing policy.
- Completed-project examples unless city, month/year, scope, material, and photo linkage are filled.
- Customer names, addresses, phone numbers, email addresses, unredacted documents, or private permit numbers.
- Technician identities, credentials, certifications, or years of experience unless verified and approved.
- Before/after claims from stock images, inspiration images, manufacturer images, or unlinked project photos.

## Page-Specific Unlock Rules

| Page | Minimum unlock requirement |
|---|---|
| `/services/deck-repair` | Verified repair photos, exact repair warranty term, verified repair cost ranges if cost ranges are shown, and no `DO NOT PUBLISH` markers. |
| `/before-and-after` | All four before/after cards tied to real project records, image metadata or owner confirmation, and publishable scope/date/location fields. |
| `/showcase` | Each showcase card either verified or clearly non-proof gallery content with no unsupported completion/cost/timeline claims. |
| `/composite-deck-cost-northern-virginia` | Estimate/invoice-backed records before calling examples “real project examples.” Planning examples may remain clearly labeled as planning scenarios. |

## Current Proof Blockers

- Projects: 10 total · 10 partial · 0 verified.
- Assets: 12 total · 12 missing.
- Warranty terms: 0 recorded.
- Repair cost ranges: 0 recorded.
- Public review sources: 5 total · 5 verified.

| Page | Verdict | Evidence needed |
|---|---|---|
| `/before-and-after` | blocked | 2 missing evidence item(s). 4 partial evidence item(s). No verified project proof snippets available for this page. |
| `/composite-deck-cost-northern-virginia` | blocked | 1 missing evidence item(s). |
| `/services/deck-repair` | blocked | No verified warranty term recorded for repair proof modules. No verified repair cost ranges recorded. 8 missing evidence item(s). |
| `sitewide` | blocked | 1 missing evidence item(s). |
| `/showcase` | proof-incomplete | 6 partial evidence item(s). No verified project proof snippets available for this page. |

## Intake Files To Use

- `docs/seo/project-evidence-intake-2026-06-19.csv`
- `docs/seo/photo-ingestion-manifest-2026-06-19.csv`
- `docs/seo/warranty-terms-intake-2026-06-19.csv`
- `docs/seo/repair-cost-ranges-intake-2026-06-19.csv`
- `docs/seo/owner-evidence-sprint-2026-06-19.md`
- `docs/seo/owner-evidence-sprint-2026-06-19.csv`
- `docs/seo/owner-evidence-action-packet-2026-06-19.csv`

## Publish Gate

Before any proof-heavy page becomes deploy-ready, run:

```bash
npm run seo:evidence-unblock -- --date latest
npm run seo:evidence-sprint
npm run seo:evidence-sprint:validate
npm run seo:evidence-action-packet
npm run seo:evidence-action-packet:validate
npm run seo:validate-owner-intake
npm run seo:directory-citations
npm run seo:directory-citations:validate
npm run seo:proof-source-checklist:validate
npm run seo:proof-ops-board:validate
npm run seo:validate-ai-discovery
npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-2026-06-19.csv --dry-run
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-19.csv --preflight
npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-2026-06-19.csv --dry-run
npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-2026-06-19.csv --dry-run
npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-2026-06-19.csv --dry-run
npm run seo:validate-evidence
npm run seo:validate-proof-runtime
npm run seo:publish-readiness
npm run seo:prepublish-evidence
npm run build
```

`seo:prepublish-evidence` is expected to fail until red proof blockers are actually resolved.
