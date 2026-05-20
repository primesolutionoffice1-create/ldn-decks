# LDN Decks Ads Brain - Codex Instructions

This vault is the paid-media operating brain for **LDN Decks**. The
strategic owner is **LDN Decks**. The business type is **local-service**.
The site or landing-page domain is **https://www.ldndecks.com**.

## Read Order

Every agent session must read in this order:

1. `wiki/hot.md`
2. `wiki/index.md`
3. the relevant resolver or workflow note
4. the relevant entity/source note

## Operating Rules

- `.raw/` is immutable source material. Add refreshed exports as new files.
- Every claim in a report, action queue, or recommendation must cite a source.
- Never store ad-platform credentials, OAuth tokens, DataForSEO credentials,
  CRM exports with unnecessary PII, or passwords in wiki notes.
- V1 never mutates live ad accounts.
- Optimization recommendations are advisory until the tracking/privacy gate is
  closed in [[Day 0 Tracking and Privacy Gate]].
- Treat [[Current Platform Requirements 2026]] as the dated source baseline.
  Re-check official platform docs before updating API, attribution, privacy, or
  AI-campaign guidance.
- Server-side event pipelines require deduplication evidence before they can be
  used as optimization truth.
- API connector plans must record active API version, deprecation date, source
  URL, credential owner, and read-only/write scope.
- Preserve learning phase context before recommending campaign or ad-set edits.
- Keep `wiki/hot.md`, `wiki/index.md`, `wiki/overview.md`, and `wiki/log.md`
  current after meaningful work.

## Filing Rule

Before creating a note, read [[RESOLVER]]. Each durable object has one primary
home. Use wikilinks and frontmatter for relationships rather than duplicating
pages.

## Page Shape

Entity pages use:

- compiled truth above the timeline
- append-only timeline below the separator
- source links in both sections
- explicit confidence when a claim is inferred

## Human Approval

Use approval states:

- `draft`
- `needs_review`
- `approved`
- `implemented`
- `rejected`

No action is ready for account execution until it has an owner, source,
confidence, expected impact, risk, and rollback note.
