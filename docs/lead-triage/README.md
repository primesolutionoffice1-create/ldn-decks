# Lead triage

Internal queue for website leads and old deck permits. It classifies each record, stores a draft reply, and can email the office a morning summary. Drafts are never sent to a homeowner.

The public site is unchanged. Homepage copy, city pages, the footer, and existing redirects are not part of this pipeline. The contact form still delivers the lead the way it does today (email, then GoHighLevel and n8n when those are configured). After that delivery succeeds, triage is scheduled in the background. If triage fails, the form still returns success.

## What it does

1. **Website leads.** `sendContactEmail` calls `scheduleLeadTriage` only after at least one delivery sink accepts the lead. The hook uses Next.js `after()` so it does not hold up the thank-you page.
2. **Permits.** A client reads Loudoun LandMARC and Fairfax Building Records PLUS for residential deck and porch permits issued from 2000-01-01 up to 2011-01-01 (decks that are now about 15–25 years old).
3. **Classification.** [Jev](https://openrouter.ai/docs/guides/community/jev) (`typesafe/jev-1.13`) via OpenRouter's [Decisions API](https://openrouter.ai/docs/guides/community/jev-tutorial). Each answer comes back with a probability. Website questions: service type, job likely at least $3,500, inside the service area, urgency, spam. Permit questions: residential deck or porch, new versus replacement.
4. **Cutoff.** Default confidence is `0.70` (`LEAD_TRIAGE_CONFIDENCE_CUTOFF`). Anything below that is stored as `needs_human_review`. Confident spam, out-of-area, or under-minimum leads are `rejected`. Confident fits are `passed`.
5. **Drafts.** Passed records get a short reply from Claude Sonnet (`claude-sonnet-5-5` unless `ANTHROPIC_MODEL` is set). The draft is stored with `sendable: false`. Nothing is emailed to the lead.
6. **Morning mail.** Vercel Cron calls `/api/lead-triage/cron` at 11:00 and 12:00 UTC. The handler runs only when the clock in `America/New_York` says 7:00 AM, so the summary lands at 7:00 in both EDT (11:00 UTC) and EST (12:00 UTC). The other tick returns without working. The message goes to `office@ldndecks.com` and includes the top 5 passed leads from that Eastern day: source, city, job type, score, and the draft.

## Run it locally

Mock mode is the default. It does not call OpenRouter, Anthropic, the permit servers, or email.

```bash
npm run lead-triage:dry-run
npm run test:lead-triage
```

The dry run prints a JSON summary. `customerContacted` stays `false`.

Today's queue is also available at:

- `/admin/lead-triage` — same Basic Auth as the other `/admin` pages (`ADMIN_USERNAME` / `ADMIN_PASSWORD`)
- `GET /api/lead-triage/today` — `Authorization: Bearer $CRON_SECRET`, or the same Basic Auth credentials

Locally, with no admin password and no cron secret, the JSON route is open so you can try it. Production refuses it until one of those secrets is set.

To exercise the real cron path without waiting for 7:00 AM:

```bash
curl -H "Authorization: Bearer $CRON_SECRET" \
  "http://localhost:3000/api/lead-triage/cron?force=1"
```

`force=1` skips the 7:00 AM check. It still will not email anyone while `LEAD_TRIAGE_MODE` is `mock`.

## Environment variables

Set these in Vercel (Production, and Preview if you want the cron there). Never commit the values.

| Variable | Required for live | Purpose |
| --- | --- | --- |
| `LEAD_TRIAGE_MODE` | Yes, set to `live` | `mock` (default) or `live`. Mock skips model calls, permit HTTP, and the morning email. |
| `OPENROUTER_API_KEY` | Yes | Jev on the Decisions API. Server-only. |
| `ANTHROPIC_API_KEY` | Yes | Draft replies. Server-only. |
| `ANTHROPIC_MODEL` | No | Defaults to `claude-sonnet-5-5`. |
| `JEV_MODEL` | No | Defaults to `typesafe/jev-1.13`. Pin this while a cutoff is tuned. |
| `DATABASE_URL` | Yes on Vercel | Postgres connection string (Vercel Postgres, Neon, or Supabase). Without it, local runs use `data/lead-triage/store.json`, which is gitignored and is not durable on Vercel. |
| `CRON_SECRET` | Yes | Vercel sends this as `Authorization: Bearer` on cron requests. The route rejects calls that do not match. |
| `RESEND_API_KEY` | Yes, for the morning email | Already used by the contact form. The summary uses that same sender. `EMAIL_USER` / `EMAIL_PASS` remain the SMTP fallback. |
| `LEAD_TRIAGE_SUMMARY_TO` | No | Defaults to `office@ldndecks.com`. |
| `LEAD_TRIAGE_CONFIDENCE_CUTOFF` | No | Defaults to `0.70`. |
| `LEAD_TRIAGE_CALIBRATION` | No | `identity` (default) or `jev-band`. |
| `LEAD_TRIAGE_PERMIT_SOURCE` | No | `fixture` in mock mode, `live` in live mode. |
| `LEAD_TRIAGE_PERMIT_LIMIT` | No | Page size per county per run. Default 25, max 200. |
| `LEAD_TRIAGE_PERMIT_START` / `LEAD_TRIAGE_PERMIT_END` | No | Default `2000-01-01` / `2011-01-01`. |

`ADMIN_PASSWORD` is the existing admin password. It also unlocks `GET /api/lead-triage/today`.

## Permit sources

Field names were checked against the live services on 2026-10-08.

**Loudoun.** `LandMARC Permits Issued`, layer 1 of `https://logis.loudoun.gov/gis/rest/services/LMARC/LandMARC_Permits/MapServer`. Useful fields: `PermitNumber`, `PermitType`, `PermitWorkClass`, `DESCRIPTION`, `ISSUEDATE` (epoch milliseconds), `CITY`, `STATE`, `ADDRESSLINE1` (street number), `ADDRESSLINE2` (street name), `STREETTYPE`. The client keeps `Building (Residential)` rows whose work class or description mentions a deck, porch, or screen. That query returned 11 permits for 2000–2010. Three of them are in `src/lib/lead-triage/fixtures/loudoun-permits.json`.

**Fairfax.** The Virginia open-data package [Building Records PLUS](https://data.virginia.gov/dataset/building-records-plus) is served at `https://services1.arcgis.com/ioennV6PpG5Xodq0/arcgis/rest/services/Building_Records_PLUS/FeatureServer/0`. Useful fields: `RECORDID`, `APPTYPEALIAS`, `PROJECT_NAME`, `ISSUED_DATE`, `ADDRESS_1`, `CITY`, `STATE`, `ZIP_CODE`. The county GIS layer (`PLUSGISRecords` layer 8) only exposes type, id, issue date, and a link, so the client uses the open-data service.

On that same day the Fairfax layer's earliest `ISSUED_DATE` was 2006-03-24. The 2000–2010 slice had 158 rows, and none of the residential project names said deck or porch (most names were blank; the rest were commercial tenants). The earliest deck/porch project name found was `ALTR-170610221`, "SCREEN PORCH W OPEN DECK", issued 2017-03-02. That row is a fixture so the parser stays locked to the real columns. It is not ingested as a 2000–2010 lead. Widen `LEAD_TRIAGE_PERMIT_END` later if you want the client to pick up newer Fairfax rows.

If a live request fails, the run records the error and leaves the cursor where it was. Fixture mode never calls the network.

## Calibrating Jev

An independent check found Jev overconfident in the 0.60–0.70 band. The default cutoff already sends raw confidence under 0.70 to a person. Do not lower the cutoff until you have scored it on leads you labeled by hand.

`src/lib/lead-triage/cutoff.mjs` keeps raw and calibrated confidence separate. The default map is identity. `LEAD_TRIAGE_CALIBRATION=jev-band` applies a small piecewise map that turns a raw 0.70 into 0.62, so that boundary also waits for a person. To use your own map, set `LEAD_TRIAGE_CALIBRATION` to a JSON file path (or an inline JSON object). Keys are question ids. Values are `[raw, calibrated]` points. `scoreCalibration()` in `src/lib/lead-triage/cutoff.mjs` scores a labeled set: accuracy on rows at or above the cutoff, and Brier score on yes/no probabilities.

Labeled row shape:

```json
{ "yesProbability": 0.66, "confidence": 0.66, "predicted": true, "label": false }
```

Keep the raw Jev `answers` on each stored lead so you can re-score old decisions after you change the cutoff, without paying for another call.

## Storage

`DATABASE_URL` selects Postgres. The adapter creates `lead_triage_records` and `lead_triage_meta` if they are missing. Neon, Supabase, and Vercel Postgres all work with a normal connection string. Hosted databases need SSL; a non-local URL without `sslmode=` gets TLS automatically.

With no `DATABASE_URL`, the process writes `data/lead-triage/store.json`. That is for laptops only.

## Estimated monthly cost

Rough volume: 40 website leads and about 20 permit rows a month, with about half of the website leads passing and receiving a draft. One summary email per day.

| Piece | Price used | Estimate |
| --- | --- | --- |
| Jev 1.13 | $0.042 per 1M input tokens, output free (OpenRouter model page, Oct 2026) | ~1,200 input tokens × 60 calls ≈ **$0.003** |
| Claude Sonnet draft | Confirm the current Sonnet 5.5 rate. Illustration at $3 / $15 per 1M input/output tokens | ~20 drafts × (800 in + 250 out) ≈ **$0.12** |
| Morning email | Existing Resend account | 30 messages, inside the free tier |
| Postgres | Neon or Vercel Postgres free tier | $0 at this size |

Budget **about $1–5 per month** so a price change, retries, or a one-time permit backfill still fits. A 2,000-row permit backfill at the Jev rate above is still under a dollar. The morning email is the only message this pipeline sends, and it goes to the office.

## Not in this pipeline

No Facebook, Nextdoor, or Craigslist collection. Those terms do not allow it.

Next, after this is running on real leads: website personalization, then a competitor review map.
