# Static AI + 200 Plus Proof Safety Cleanup - 2026-06-02

## Scope

Cleaned stale static AI-discovery files and public copy that still implied unverified project-proof or `200+` completed-project claims.

## Changes

- `public/llms.txt`
  - Replaced `proof links` with `trust links`.
  - Replaced before-and-after `project proof` with `gallery with verification notes`.
  - Replaced county `project examples` with `planning examples`.
  - Replaced `real project prices` with `planning price tables` and evidence-safe estimating notes.
- `public/llms-full.txt`
  - Replaced composite Loudoun `project examples` with `planning examples`.
  - Replaced deck cost `Real project price tables` with `Planning price tables`.
  - Replaced screened porch `real project examples` with `planning scenarios`.
  - Replaced showcase `Detailed case studies with specs` with a project-gallery note requiring case-study verification.
- Removed or softened unverified `200+` project claims on:
  - Team/founder copy and Person schema description.
  - Press facts.
  - Northern Virginia deck building guide.
  - Loudoun County hub.
  - Outdoor living trends page.
- Reframed selected cost-page pricing-source language from recent project quotes to 2026 Northern Virginia estimating logic and market-rate planning ranges.
- Reframed selected related copy from `real project pricing`, `project proof`, and `project examples` to planning or photo-gallery language.

## Verification

- Targeted source scans found no remaining matches for this batch's risky terms in the edited files:
  - `200+ custom deck`
  - `200+ completed`
  - `completed custom deck projects`
  - `real project pricing`
  - `recent Loudoun and Fairfax County project quotes`
  - `real project prices`
  - `project proof`
  - `proof links`
  - `Detailed case studies`
- `node scripts/validate-seo-schema.mjs` passed.
- `npm run lint` passed.
- `npm run build` passed and generated 342 static pages.
- Forced production deploy completed and was aliased to `https://ldndecks.com`.
- Production deployment ID: `dpl_9LshvdUyBw5hUEvisZW7miqqpeJu`.
- Live `llms.txt` contains `before-and-after gallery with verification notes` and `trust links`.
- Live `/team` contains `lead designer for deck planning` and no targeted 200+ matches.
- Live `/press` contains `10+ years of custom deck experience`.
- Live `/deck-cost-16x20-northern-virginia` contains `market-rate planning ranges`.
- Live `llms-full.txt` contains `planning scenarios`.
- `npm run seo:daily-check` passed.
- IndexNow accepted the 260-URL sitemap submission.

## Readiness Note

The reputation and AI/GEO surfaces are now better aligned with the evidence ledger. Verified project case studies remain gated until owner-supplied source records are completed and validated.
