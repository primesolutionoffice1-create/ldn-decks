# AI/GEO Proof Safety Cleanup - 2026-06-02

## Scope

Aligned AI-discovery and cross-link copy with the evidence ledger so LLM-facing files do not overstate unverified project proof.

## Changes

- `src/app/llms.txt/route.js`
  - Replaced before-and-after `project proof` wording with `gallery with verification notes`.
  - Replaced `proof links` with `trust links`.
  - Replaced Houzz `design proof` with `design context`.
  - Replaced resurfacing `project examples` with `planning examples`.
- `src/app/llms-full.txt/route.js`
  - Replaced Purcellville `project proof` with `evidence-gated photo resources`.
  - Replaced `Before and after project proof` with `Before and after gallery with verification notes`.
- `src/components/RelatedGuides.jsx`
  - Reframed before-and-after guide description as a photo gallery with verification notes.
- `src/components/AboutTrustExpansion.jsx`
  - Reframed trust resources as evidence-gated photo resources.
- `src/components/HomeSEOContent.jsx`
  - Replaced city-page `project examples` with `planning examples`.
- `src/components/ExteriorCleaningAuthority.jsx`
  - Replaced before-and-after `project proof` link label with `before and after photo gallery`.

## Verification

- Targeted source scan leaves only `VerifiedProjectProofSection`, which intentionally explains that verified case studies are evidence-gated.
- `node scripts/validate-seo-schema.mjs` passed.
- `npm run lint` passed.
- `npm run build` passed and generated 342 static pages.
- Forced production deploy completed and was aliased to `https://ldndecks.com`.
- Production deployment ID: `dpl_4PUeJFeeJSuVs6yVJUAgESCMnNrZ`.
- Live `llms.txt` contains:
  - `before-and-after gallery with verification notes`
  - `trust links`
  - `design context`
- Live `llms-full.txt` contains:
  - `evidence-gated photo resources`
  - `Before and after gallery with verification notes`
- Live homepage contains `planning examples`.
- `npm run seo:daily-check` passed.
- IndexNow accepted the 260-URL sitemap submission.

## Readiness Note

This strengthens AI/GEO extraction quality without fabricating proof. The verified project case-study count remains 0 until owner evidence is supplied and validated.
