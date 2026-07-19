# Today Next Actions - 2026-07-19

## Status

- Google Ads lead tracking: YELLOW
- Scaling readiness: RED
- Measurement gate: 11 PASS / 0 WARN / 0 FAIL
- Validated lead outcome rows: 12
- Qualified lead rows: 8
- Upload-eligible offline conversion rows: 0
- Local blockers: 0
- External blockers: 2

## What We Execute Today

### 1. Recover hot leads first

Drafts are prepared but not sent:

1. Sean Cummings - new Centreville deck replacement lead.
2. Alexander Painter - approved quote #1224, permit/design next steps.
3. Alexander Jimenez - broken quote link and August 1-8 timing.
4. Christopher Rouleau - missed appointment recovery.

Action: owner reviews and sends the four drafts, or explicitly approves sending them.

Reason: these are the fastest near-term revenue opportunities. They do not require campaign changes.

### 2. Import only safe exact negatives

Prepared import:

`docs/ads-tracking/google-ads-search-terms-negatives-2026-07-17.csv`

Status: implemented live on 2026-07-19 18:47 EDT.

Google Ads Editor result:

- preview: `Negative keyword`, 3 added, 1 skipped
- check: `Negative keywords 3/3`
- post: `Finished posting`, `Negative keywords 3/3`

The skipped row was already present or otherwise not importable as a new
negative. The three created rows were exact negative keywords only.

Only post future imports if Google Ads Editor preview shows negative keyword
changes only.

Do not post if preview shows:

- budget changes
- bidding changes
- campaign setting changes
- broad match changes
- ad or asset changes
- conversion action changes

### 3. Fix offline conversion eligibility

Current blocker:

- 12 real lead rows validate.
- 8 are qualified.
- 0 are upload-eligible.

Minimum viable fix:

1. Pick at least 3 qualified leads.
2. Add one accepted attribution route per lead:
   - `gclid`, or
   - `gbraid`, or
   - `wbraid`, or
   - approved Enhanced Conversions for Leads route with hashed user-provided data, or
   - approved Google Ads Data Manager import route.
3. Add final lead stage and conversion timestamp.
4. Rerun validation.

No lead should be uploaded while source/click ID/customer-data route is missing.

### 4. Complete owner proof evidence

P0 evidence needed:

- deck repair before/after photos
- ledger failure photo
- post rot photo
- joist sistering/framing repair photo
- stair rebuild before/after
- railing repair before/after
- resurfacing before/after
- repair workmanship warranty term
- repair cost ranges for:
  - joist sistering
  - ledger reflash/rebolt
  - post replacement
  - emergency stabilization

Files to complete:

- `docs/seo/project-evidence-intake-2026-07-19.csv`
- `docs/seo/photo-ingestion-manifest-2026-07-19.csv`
- `docs/seo/warranty-terms-intake-2026-07-19.csv`
- `docs/seo/repair-cost-ranges-intake-2026-07-19.csv`

## Hard Stop Rules

Keep paused:

- Smart Bidding
- PMax
- AI Max
- broad match expansion
- budget increases
- conversion action edits

Reason: Google Ads can scale bad or incomplete signals faster than manual search. Current Ads import pack validates locally, but offline/enhanced lead quality loop is still not proven.

## Google Source Check

Google's current guidance says offline conversion imports and Enhanced Conversions for Leads are moving through Data Manager/API paths in 2026, and Enhanced Conversions for Leads uses user-provided data to improve offline attribution. This confirms the current blocker: we need a verified click ID or approved enhanced/offline path before Smart Bidding.

Sources:

- https://support.google.com/google-ads/answer/14274408
- https://support.google.com/google-ads/answer/11347292
- https://support.google.com/google-ads/answer/15713840
- https://support.google.com/google-ads-data-manager/answer/14184381

## Verdict

CSV ingestion and reporting are safe.

Manual exact-negative cleanup is safe only after a clean Google Ads Editor preview.

Smart Bidding remains paused.

The exact next human action is to approve or send the four prepared lead-recovery drafts, then provide three qualified lead records with click IDs or approved Enhanced/Offline conversion identifiers.
