# Public Proof Wording Cleanup - 2026-06-02

## Scope

Removed remaining public-facing phrasing that could imply verified project case studies before owner evidence is complete.

## Changes

- `/deck-footing-code-northern-virginia`
  - Replaced `See real projects` with `Review photo examples`.
- `/bbb-accredited-deck-builder-virginia`
  - Replaced `completed project examples` with `photo galleries or verified project references`.
  - Replaced city-page `project examples for that area` wording with `planning notes for that area`.
- `/houzz-deck-projects`
  - Replaced `completed project examples` with `photo-gallery context`.

## Verification

- Targeted local scan found no remaining matches for:
  - `See real projects`
  - `real projects`
  - `completed project examples`
  - `project examples for that area`
- `node scripts/validate-seo-schema.mjs` passed.
- `npm run lint` passed.
- `npm run build` passed and generated 342 static pages.
- Forced production deploy completed and was aliased to `https://ldndecks.com`.
- Production deployment ID: `dpl_2EcaCwb6ispuYXNoEdKBMNqAhQsn`.
- Live `/deck-footing-code-northern-virginia` contains `Review photo examples`.
- Live `/bbb-accredited-deck-builder-virginia` contains `verified project references` and `planning notes for that area`.
- Live `/houzz-deck-projects` contains `photo-gallery context`.
- `npm run seo:daily-check` passed.
- IndexNow accepted the 260-URL sitemap submission.

## Readiness Note

This keeps public copy aligned with the evidence ledger. Verified project case studies remain blocked until owner-supplied project records, photos, dates, scopes, and source checks are complete.
