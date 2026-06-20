# Guarantee Wording Risk Cleanup - 2026-06-02

## Scope

Cleaned technical copy that used broad `guarantee` language outside formal workmanship/manufacturer warranty contexts.

## Pages Updated

- `/services/trex-calm-shell`
- `/services/deck-inspection`
- `/services/entry-doors`
- `/best-deck-stain-sealer-virginia`

## Changes

- Replaced absolute safety wording with condition/code verification language.
- Replaced absolute safety-guarantee wording with safety confirmation language.
- Replaced `perfect seal` / `water never penetrates` wording with durable weather-seal and water-intrusion protection language.
- Replaced `guarantees even application` with `helps achieve even application`.

## Verification

- Targeted scan: no `guarantee it is safe`, `guarantees the fundamental safety`, `guarantee a perfect seal`, `ensure water never penetrates`, or `guarantees even application` wording remained in the touched files.
- Schema validation: passed.
- Lint: passed.
- Build: passed, 342 static pages generated.
- Production deploy: `dpl_sYhJm14UcMF2FaaQ35aagVAi84s1`
- Live checks confirmed:
  - `/services/trex-calm-shell`: `verify condition and code requirements`
  - `/services/deck-inspection`: `helps confirm the fundamental safety`
  - `/services/entry-doors`: `durable weather seal`, `help protect the subfloor`
  - `/best-deck-stain-sealer-virginia`: `helps achieve even application`
- Daily SEO check: passed.
- Sitemap: 260 URLs.
- IndexNow: accepted 260 URLs.

## Scaling Gate

Scaling remains RED because Google Ads qualified-call attribution and real lead outcome proof are still not proven.

## Execution Ledger

- Task 443: Scanned guarantee/warranty language for reputation-risk wording.
- Task 444: Separated legitimate warranty language from absolute technical claims.
- Task 445: Updated four public pages with softer, more accurate phrasing.
- Task 446: Validated scan, schema, lint, and build.
- Task 447: Deployed to production, verified live HTML, daily SEO, and IndexNow.
