# Deck Cost Calculator FAQ + Proof Safety Update - 2026-06-02

## Scope

Improved `/deck-cost-calculator` as a linkable conversion asset without adding unverified proof claims.

## Changes

- Added a visible `Deck Cost Calculator FAQ` section to match the existing FAQPage schema intent.
- Updated FAQPage answers to describe the calculator as a planning tool, not a verified-project data claim.
- Removed unverified `200+ completed projects` / `200+ real projects` language from:
  - Route metadata description
  - WebPage schema description
  - FAQPage schema answer copy
  - Calculator widget helper text
- Kept pricing language framed as 2026 Northern Virginia planning/market-rate estimating logic.

## Verification

- `node scripts/validate-seo-schema.mjs` passed.
- `npm run lint` passed.
- `npm run build` passed and generated 342 static pages.
- `npm run seo:sxo-conversion` generated `docs/seo/sxo-conversion-report-2026-06-02.md`.
- Forced production deploy completed and was aliased to `https://ldndecks.com`.
- Final production deployment ID: `dpl_4Ba14LLzB3PUxCcuePCB5MPFjvGx`.
- Live HTML contains:
  - `Deck Cost Calculator FAQ`
  - `How accurate is this deck cost calculator?`
  - `market-rate estimating logic`
- Live HTML no longer contains:
  - `200+ completed projects`
  - `200+ real projects`
  - `over 200 completed`
- `npm run seo:daily-check` passed.
- IndexNow accepted the 260-URL sitemap submission.

## Readiness Note

This improves SXO and AI-extractable content while keeping the page proof-safe. It does not change the global scaling gate, which remains RED until qualified-call attribution and real lead outcome proof are verified.
