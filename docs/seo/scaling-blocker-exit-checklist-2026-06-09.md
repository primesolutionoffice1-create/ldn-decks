# Scaling Blocker Exit Checklist - 2026-06-09

## Summary

- Scaling status: RED
- Current blockers: 3
- Local blockers: 0
- Owner/external blockers: 3
- Source board: `docs/seo/scaling-readiness-board-2026-06-09.md`

## Exit Checklist

### P0 - google-call-attribution

- Owner: external
- Current evidence: Measurement gate remains RED while google-call-attribution is WARN/external-proof-needed. Call attribution evidence status: SAMPLE_ONLY, 0 real rows.
- Exit evidence: Real Google Ads/GTM read-only evidence rows showing qualified-call conversion action source, primary/secondary status, 60s+ duration or approved threshold, clean diagnostics, and no phone_click primary Smart Bidding risk.
- Exit command: `npm run measurement:call-attribution-evidence && npm run measurement:gate && npm run scaling:readiness`
- Expected after exit: Call attribution evidence is no longer SAMPLE_ONLY; measurement gate no longer keeps google-call-attribution as external-proof blocker.
- Red flag: Any phone_click primary risk, missing diagnostics, or unproven Google forwarding/call-source setup keeps this blocker open.

### P0 - lead-outcome-rows

- Owner: owner
- Current evidence: 0 real rows, 0 qualified, status SAMPLE_ONLY.
- Exit evidence: At least 5 real lead outcome rows, 0 validation errors, qualified status supported by notes/evidence, and upload eligibility only when click IDs or approved enhanced/offline path exist.
- Exit command: `npm run measurement:lead-outcomes && npm run scaling:readiness`
- Expected after exit: Lead outcome validation reports PASS with 5+ real rows and this blocker disappears from scaling readiness.
- Red flag: SAMPLE_ONLY, fewer than 5 real rows, unqualified upload-eligible rows, or phone rows without duration/evidence keeps this blocker open.

### P0 - owner-proof-evidence

- Owner: owner
- Current evidence: 3 blocked, 1 proof-incomplete, prepublish expected-blocked true. Owner action packet: 26 rows, 13 P0, 0 errors.
- Exit evidence: Owner-filled proof packet rows imported safely, verified proof regenerated, no blocked/proof-incomplete pages, no public placeholders, and prepublish no longer expected-blocked.
- Exit command: `npm run seo:evidence-action-packet:validate && npm run seo:validate-owner-intake && npm run seo:proof-preflight && npm run seo:weekly`
- Expected after exit: Proof preflight reports 0 blocked and 0 proof-incomplete pages; owner proof blocker disappears from scaling readiness.
- Red flag: Unknown/placeholder project fields, missing privacy pass, unresolved repair warranty/cost evidence, or prepublish expected-blocked keeps this blocker open.

## Operating Rule

Do not mark scaling YELLOW or GREEN until every P0 blocker has source-of-record evidence, the listed exit command passes, and `npm run scaling:readiness` no longer reports that blocker.
