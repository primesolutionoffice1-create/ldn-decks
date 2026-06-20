# Brainstein Readiness Audit - 2026-06-19

Purpose: map the current LDN Decks proof system into Brainstein maturity language without inventing evidence.

## Brainstein Maturity

- Current stage: domain-adapted
- Score: 82 / capped at 84
- Gate: proof-blocked
- Reason: Architecture, schema, and proof operations are in place, but owner evidence blocks market-ready release.

## Evidence Gate

- Source preflight: scripts/output/proof-system-preflight-2026-06-19.json
- Owner sprint checklist: docs/seo/owner-evidence-sprint-2026-06-19.md
- Publish-ready pages: 0
- Proof-incomplete pages: 1
- Blocked pages: 4
- Public placeholder findings: 0
- Prepublish evidence gate expected blocked: yes

## Directory Citation Gate

- Status: pass
- Packets: 5
- Organization sameAs URLs: 13
- NADRA profile URL: https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b
- NADRA profile affordance: present
- Errors: 0
- Warnings: 1
- Status file: docs/seo/directory-citation-status-2026-06-19.md
- Validation report: scripts/output/directory-citation-packet-validation-2026-06-19.md
- Rule: NADRA may remain in `sameAs` because the profile URL was supplied directly; Bing, Apple, Nextdoor, and Angi remain proof-gated until screenshots/admin evidence confirm canonical public identity.

## Proof Command Gate

- Status: pass
- Checked files: 17
- Command references: 221
- Unique commands: 54
- Missing command references: 0
- Missing script targets: 0
- Duplicate package scripts: 0
- Action packet sequence files: 8
- Validation report: scripts/output/proof-command-reference-validation-2026-06-19.md
- Rule: owner evidence action packets must be regenerated with `npm run seo:evidence-action-packet` before `npm run seo:evidence-action-packet:validate` is treated as current proof.

## Top Blocker

- Owner evidence collection + placeholder resolution
- Status: proof-blocked
- Owner sprint blocks: 5

## Blocked Pages

| Page | Top issue | Missing counts |
|---|---|---|
| /before-and-after | 2 missing evidence item(s). | assets 2; projects 4; warranty 0; cost 0 |
| /composite-deck-cost-northern-virginia | 1 missing evidence item(s). | assets 1; projects 0; warranty 0; cost 0 |
| /services/deck-repair | No verified warranty term recorded for repair proof modules. | assets 8; projects 0; warranty 1; cost 4 |
| sitewide | 1 missing evidence item(s). | assets 1; projects 0; warranty 0; cost 0 |

## Next Actions

- Collect original owner media for deck repair, before/after, and composite-cost proof modules.
- Fill warranty term and repair cost range intake files only from written policy, invoices, accepted estimates, calculator data, or owner-approved pricing policy.
- Keep NADRA/Bing/Apple/Nextdoor/Angi citation packets sameAs-safe; do not promote external directory URLs without current proof screenshots or admin evidence.
- Keep unknown project details partial; do not promote any row to verified until provenance is concrete.
- Dry-run owner-filled intake files, then rerun evidence, schema, proof preflight, and build gates before publish.

## Publish Rule

Do not deploy proof-dependent pages as publish-ready until owner-supplied evidence is imported, verified, regenerated, and `npm run seo:prepublish-evidence` passes without expected-blocked status.
