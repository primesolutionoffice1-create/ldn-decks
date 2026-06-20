# Screened Porch Cost Proof Safety Update - 2026-06-02

## Scope

Cleaned `/screened-porch-cost-northern-virginia` so the page remains commercially useful while avoiding unverified project-proof claims.

## Changes

- Replaced `See Real Project Prices` with `Pricing Scenarios` in metadata and WebPage schema.
- Replaced hero copy `real project examples` with `sample planning scenarios`.
- Replaced the `Real Projects: What Our Clients Paid` section with `Sample Cost Scenarios`.
- Added a proof-safety note that the examples are planning scenarios, not published client case studies.
- Reframed the scenario cards so they describe size/scope/material allowances without implying verified client payments.

## Verification

- Local page scan found no remaining targeted phrases:
  - `real project`
  - `Real Projects`
  - `clients paid`
  - `project examples`
  - `See Real Project Prices`
- `node scripts/validate-seo-schema.mjs` passed.
- `npm run lint` passed.
- `npm run build` passed and generated 342 static pages.
- Forced production deploy completed and was aliased to `https://ldndecks.com`.
- Production deployment ID: `dpl_6ivB4ni3qbPNPrar88p7e3fYPcSq`.
- Live HTML contains:
  - `sample planning scenarios`
  - `Sample Cost Scenarios`
- Live HTML no longer contains:
  - `Real Projects`
  - `real project examples`
  - `What Our Clients Paid`
  - `See Real Project Prices`
- `npm run seo:daily-check` passed.
- IndexNow accepted the 260-URL sitemap submission.

## Readiness Note

This reduces proof-risk on a high-intent screened porch cost page. It does not mark any project proof as verified and does not change the global scaling gate, which remains RED until qualified-call attribution and real lead outcome proof are complete.
