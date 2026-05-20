# Phase 2 Webhook Contract — Lead Ingest

**Endpoint:** `POST /api/webhooks/lead-ingest`

**Purpose:** persist every successful website lead into the Phase 2 revenue-feedback datastore. This endpoint is the bridge between website attribution and Airtable. It is not an ad-platform upload endpoint.

**Status:** design contract only. Do not implement until Phase 1A + Phase 1B gates pass.

---

## Contract principles

1. **Email send remains primary UX.** The lead form is considered successful when `sendContactEmail` succeeds. Airtable ingestion is fire-and-forget and must never block the user redirect to `/thank-you`.
2. **`event_id` is the idempotency key.** The webhook must reject duplicate `event_id` writes without creating a second Airtable row.
3. **Click IDs are immutable.** Once stored, `gclid`, `gbraid`, `wbraid`, `fbclid`, and `msclkid` are never manually edited.
4. **Airtable is source of truth for revenue stages.** Website payloads create lead records; humans update stage/value later.
5. **No credentials in client code.** Airtable credentials live only in server-side environment variables.

---

## Request headers

| Header | Required | Description |
|---|---:|---|
| `Content-Type: application/json` | yes | JSON only |
| `X-LDN-Webhook-Signature` | yes | HMAC SHA-256 of raw request body using `AIRTABLE_WEBHOOK_SECRET` |
| `X-LDN-Webhook-Timestamp` | yes | Unix timestamp seconds; reject if older than 300 seconds |

Signature format:

```txt
sha256=<hex_digest>
```

Signing base string:

```txt
{timestamp}.{raw_body}
```

Reject on:

- missing signature
- invalid signature
- timestamp older than 5 minutes
- timestamp more than 5 minutes in the future

---

## Request body

```json
{
  "schema_version": "lead-ingest.v1",
  "event_id": "53c844e3-379c-4a03-905b-95b19d03bb18",
  "submitted_at": "2026-05-13T14:30:00.000-04:00",
  "form_type": "quote",
  "landing_page": "https://ldndecks.com/deck-builder-ashburn-va?gclid=TEST",
  "page_path": "/deck-builder-ashburn-va",
  "referrer": "https://www.google.com/",
  "source": "google",
  "medium": "cpc",
  "campaign": "LDN-City-Search-NoVA",
  "keyword": "deck builder ashburn va",
  "click_ids": {
    "gclid": "TEST_GCLID",
    "gbraid": null,
    "wbraid": null,
    "fbclid": null,
    "msclkid": null
  },
  "lead": {
    "first_name": "Jane",
    "last_name": "Homeowner",
    "email": "jane@example.com",
    "phone": "5715551234",
    "address": "123 Main St",
    "city": "Ashburn",
    "state": "VA",
    "zip": "20148",
    "service_type": "Composite Deck",
    "message": "Interested in replacing an old wood deck with Trex."
  },
  "technical": {
    "user_agent": "Mozilla/5.0 ...",
    "ip_hash": "sha256 hex or null",
    "consent_state": "granted_or_unknown"
  }
}
```

---

## Field rules

### Required fields

| Field | Rule |
|---|---|
| `schema_version` | Must equal `lead-ingest.v1` |
| `event_id` | Non-empty string; valid UUID preferred; max 128 chars |
| `submitted_at` | ISO timestamp; server may replace with receive time if invalid |
| `form_type` | `quote`, `homepage`, `contact`, or `unknown` |
| `landing_page` | Absolute URL preferred |
| `page_path` | Path beginning with `/` |
| `lead.email` or `lead.phone` | At least one required |

### Optional but valuable fields

| Field | Why it matters |
|---|---|
| `click_ids.gclid` | Google Ads offline conversion uploads |
| `click_ids.gbraid` / `wbraid` | iOS Google attribution |
| `click_ids.fbclid` | Meta fbc construction / future Meta revenue events |
| `click_ids.msclkid` | Future Microsoft Ads imports |
| `source`, `medium`, `campaign`, `keyword` | Reporting and segmentation |
| `lead.city`, `lead.zip`, `lead.service_type` | Profitability by geo/service |

---

## Server behavior

Pseudo-flow:

```txt
1. Read raw request body.
2. Verify timestamp freshness.
3. Verify HMAC signature.
4. Parse JSON.
5. Validate schema_version + required fields.
6. Normalize email, phone, state, service_type.
7. Query Airtable Leads for event_id.
8. If found: return 200 { ok: true, duplicate: true, lead_id }.
9. If not found: create Airtable Leads row.
10. Return 200 { ok: true, duplicate: false, lead_id, event_id }.
```

Do not throw user-visible failures. The caller should log failures but form UX must continue.

---

## Response shapes

### Created

```json
{
  "ok": true,
  "duplicate": false,
  "lead_id": "recXXXXXXXXXXXXXX",
  "event_id": "53c844e3-379c-4a03-905b-95b19d03bb18"
}
```

### Duplicate

```json
{
  "ok": true,
  "duplicate": true,
  "lead_id": "recXXXXXXXXXXXXXX",
  "event_id": "53c844e3-379c-4a03-905b-95b19d03bb18"
}
```

### Rejected

```json
{
  "ok": false,
  "error": "invalid_signature"
}
```

Use HTTP status:

| Case | Status |
|---|---:|
| Created | 200 |
| Duplicate | 200 |
| Invalid signature | 401 |
| Invalid payload | 400 |
| Airtable unavailable | 503 |

---

## Airtable mapping

| Payload path | Airtable field |
|---|---|
| `event_id` | `event_id` |
| `submitted_at` | `created_at` fallback / custom submitted time |
| `form_type` | `form_type` if added, otherwise `notes` |
| `landing_page` | `landing_page` |
| `page_path` | optional `page_path` field or derived from landing page |
| `source` | `source` |
| `medium` | `medium` |
| `campaign` | `campaign` |
| `keyword` | `keyword` |
| `click_ids.gclid` | `gclid` |
| `click_ids.gbraid` | `gbraid` |
| `click_ids.wbraid` | `wbraid` |
| `click_ids.fbclid` | `fbclid` |
| `click_ids.msclkid` | `msclkid` |
| `lead.first_name` | `first_name` |
| `lead.last_name` | `last_name` |
| `lead.email` | `email` |
| `lead.phone` | `phone` |
| `lead.city` | `city` |
| `lead.state` | `state` |
| `lead.zip` | `zip` |
| `lead.service_type` | `service_type` |
| `lead.message` | `notes` |

Default `stage = New Lead`.

---

## Logging rules

Log:

- `event_id`
- `lead_id`
- duplicate true/false
- request validation outcome
- Airtable response status

Do not log:

- full email
- full phone
- full address
- full message
- raw request body

If debugging PII is unavoidable, use masked values:

```txt
j***@example.com
571***1234
```

---

## Test cases

| Test | Expected |
|---|---|
| Valid payload with `gclid` | Creates row; returns duplicate=false |
| Same payload repeated | No second row; returns duplicate=true |
| Valid payload with `gbraid` but no `gclid` | Creates row; click_id_type later = gbraid |
| Valid payload with no click IDs | Creates row; later upload uses enhanced lead matching only |
| Missing email but phone present | Creates row |
| Missing email and phone | 400 invalid_payload |
| Bad signature | 401 invalid_signature |
| Old timestamp | 401 stale_signature |
| Airtable 5xx | 503 airtable_unavailable; caller logs, form UX continues |

---

## Non-goals

- No Google Ads offline upload from this endpoint.
- No Meta revenue event upload from this endpoint.
- No CRM workflow automation from this endpoint.
- No lead scoring from this endpoint.
- No Smart Bidding changes.

This endpoint writes facts. Other systems decide what to do with them.

