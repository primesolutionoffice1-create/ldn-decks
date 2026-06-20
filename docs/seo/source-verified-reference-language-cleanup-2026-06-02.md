# Source-Verified Reference Language Cleanup - 2026-06-02

## Scope

Cleaned a small set of public trust and pricing references so they point homeowners toward galleries, local references, and written/source-verified evidence instead of broad completed-project claims.

## Pages And Components Updated

- `/bbb-accredited-deck-builder-virginia`
- `/how-to-choose-a-deck-builder-northern-virginia`
- `/composite-deck-cost-northern-virginia`
- `/showcase/[slug]`
- `TeamSection`

## Changes

- Reframed BBB guidance from `completed projects` to `photo galleries or source-verified references`.
- Reframed builder-selection guidance from recent completed projects to recent local references and photo examples.
- Reframed composite cost table heading from `Real Northern Virginia Pricing` to `Northern Virginia Planning Pricing`.
- Reframed invoice-backed data note to require a `source-verified project record`.
- Reframed showcase CTA from `completed projects` to `project galleries`.
- Reframed team image alt text away from a completed-project claim.

## Verification

- Targeted scan: only the intended `source-verified project record` wording remained.
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_HoWaqpEzjWfKt92NPw1AKMohnSqm`
- Live checks confirmed:
  - `/bbb-accredited-deck-builder-virginia`: `photo galleries`, `source-verified references`
  - `/how-to-choose-a-deck-builder-northern-virginia`: `recent local references`, `source-verified references`
  - `/composite-deck-cost-northern-virginia`: `Northern Virginia Planning Pricing`, `source-verified project record`
  - `/showcase/custom-deck-reston`: `project galleries`, `full showcase gallery`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because qualified-call attribution and real lead outcome proof are still not proven. This batch improves public wording integrity only.

## Execution Ledger

- Task 418: Audited remaining public trust/reference wording.
- Task 419: Updated BBB and builder-selection trust language.
- Task 420: Updated composite cost and showcase wording.
- Task 421: Updated team image alt text and ran schema/lint/build.
- Task 422: Deployed to production, verified live HTML, ran daily SEO and IndexNow.
