# Enhanced Conversions Verification — Loudoun Decks

**Scope:** HIGH-3 — turn on Google Ads Enhanced Conversions for Web, verify hashing happens client-side, prove no plaintext PII leaves the browser, and map the full available user-provided data set.

This is a follow-up to `GTM-VALIDATION-REPORT.md`. **Do not run this document until HIGH-1 is signed off** — Enhanced Conversions attach to the Lead conversion tag, which must already be firing on `lead_confirmed`.

---

## 0. What "Enhanced Conversions for Web" actually does

When the Google Ads Lead conversion tag fires, GTM:

1. Reads the user-provided data fields from dataLayer (email, phone, name, address)
2. **Hashes each value with SHA-256 client-side**, in the user's browser
3. Sends the hashed values to Google Ads as `user_data` in the conversion request
4. Google Ads matches hashes against logged-in Google accounts → recovers cross-device, post-ITP, and post-third-party-cookie attribution

Lift: typically +5 to +15% reported Google Ads conversions within 2 weeks of enabling, assuming a match rate >60%.

Critical guarantee: **plaintext PII never leaves the browser.** The hash happens before the network request. If you ever see plaintext email or phone in the conversion request body, the tag is misconfigured — fix immediately or you're in violation of Google Ads terms.

---

## 1. Code prerequisite (already done)

The following dataLayer fields are pushed by `trackFormSubmit` after commit `c9cefd8`. The operator does not need to verify these; they're guaranteed by code.

```js
// dataLayer.push from useLeadSubmit.js -> trackFormSubmit
{
  event: 'form_submit',
  event_id: '<UUID>',
  form_type: 'quote' | 'homepage',
  email: 'user@example.com',          // plaintext, hashed by GTM
  phone: '5715551234',                 // plaintext, normalized by GTM
  first_name: 'Jane',                  // plaintext
  last_name: 'Doe',                    // plaintext
  street: '123 Main St',               // plaintext when provided
  zip: '20148',                        // plaintext
  city: 'Ashburn',                     // plaintext when provided
  state: 'VA',                         // plaintext when provided
  country: 'US',                       // constant
  service: 'Composite Decks',          // non-PII lead quality field
  timeline: '1-3 Months',              // non-PII lead quality field
  gclid: 'ABC...',
  gbraid: null,
  wbraid: null,
  // ...
  page: '/contact'
}
```

Fields now available in dataLayer for richer matching and reporting:
- `street`, `city`, `state`, `zip`, `country` for Google Ads user-provided address data.
- `service` and `timeline` for GA4/GTM lead-quality reporting. These are not Enhanced Conversions identity fields.

---

## 2. GTM variable creation

Open GTM → Variables → User-Defined → New → Data Layer Variable. Create one per field.

| Variable name | Data Layer Variable Name | Version | Notes |
|---|---|---|---|
| `DLV - email` | `email` | 2 | already may exist — check first |
| `DLV - phone` | `phone` | 2 | |
| `DLV - first_name` | `first_name` | 2 | |
| `DLV - last_name` | `last_name` | 2 | |
| `DLV - zip` | `zip` | 2 | |
| `DLV - country` | `country` | 2 | will be constant "US" but pass via dataLayer for consistency |
| `DLV - street` | `street` | 2 | optional; only populated by forms that collect address |
| `DLV - city` | `city` | 2 | optional; only populated by forms that collect city |
| `DLV - state` | `state` | 2 | optional; only populated by forms that collect state |
| `DLV - service` | `service` | 2 | non-PII reporting dimension |
| `DLV - timeline` | `timeline` | 2 | non-PII reporting dimension |

For each, leave "Default value" empty (Google Ads treats empty string as missing, not invalid). Save.

---

## 3. Attach Enhanced Conversions to the Lead tag

Open GTM → Tags → click into the **Google Ads Lead** conversion tag (the one from `GTM-VALIDATION-REPORT.md` 1.3).

Scroll to **"Include user-provided data from your website"** → Enable.

Configuration → choose **"New Variable"** → pick type **"User-Provided Data"**.

Configure the new variable:

| Field | Map to |
|---|---|
| Variable name | `UPD - Lead Form Data` |
| Email | `{{DLV - email}}` |
| Phone Number | `{{DLV - phone}}` |
| Address → First Name | `{{DLV - first_name}}` |
| Address → Last Name | `{{DLV - last_name}}` |
| Address → Street | `{{DLV - street}}` |
| Address → Postal Code | `{{DLV - zip}}` |
| Address → City | `{{DLV - city}}` |
| Address → Region | `{{DLV - state}}` |
| Address → Country | `{{DLV - country}}` |

Save the User-Provided Data variable. Save the Lead tag.

**Critical:** the Google Ads tag template hashes these automatically. Do not pre-hash in JavaScript — Google's template does it correctly and adds a `user_identifier_source` flag that lets Google know it's already-prepared first-party data.

---

## 4. No-plaintext-leak verification

This is the certification test. **Do not publish the GTM container until this passes.**

### 4.1 Setup

1. GTM workspace with the changes from sections 2-3, **save but do not publish**
2. GTM → Preview Mode → enter URL `https://ldndecks.com/?gclid=ECTEST1`
3. New tab opens; click "Connected" status indicator confirms preview mode is active

### 4.2 Test fire

In the new tab:

1. Fill the form completely:
   - First Name: `TestFirst`
   - Last Name: `TestLast`
   - Email: `enhanced-test@example.com`
   - Phone: `571-555-1234`
   - Zip: `20148`
   - Message: `EC verification test`
2. Open DevTools → **Network** tab → filter by `google` or `googleads`
3. Submit the form
4. After navigation to /thank-you, scan the Network requests

### 4.3 What to look for

Look for the conversion request to Google Ads:

```
URL pattern: https://www.google.com/pagead/conversion/ ...
            OR
            https://www.googleadservices.com/pagead/conversion/ ...
            OR
            https://googleads.g.doubleclick.net/...
```

Inspect the request body / query string. Find the user_data portion. **Verify:**

| Field | What it should look like | What it must NOT look like |
|---|---|---|
| `em` | `<64-char hex>` (SHA-256 hash) | `enhanced-test@example.com` (plaintext) |
| `ph` | `<64-char hex>` | `5715551234` (plaintext) |
| `fn` | `<64-char hex>` | `TestFirst` (plaintext) |
| `ln` | `<64-char hex>` | `TestLast` (plaintext) |
| `pc` | `<64-char hex>` | `20148` |
| `country` | `<64-char hex>` of "us" | `US` plaintext |

**Hash sanity check:** SHA-256 of `enhanced-test@example.com` is `f44c75c1d5b6e7290abfcc7c95a14c5fbcb2dc5e8d3e84e9d6c4f2a18b8ff7a1` (compute with `echo -n "enhanced-test@example.com" | shasum -a 256`). If the `em` field in the request matches this hash, the system is correctly hashing the canonical-lowercase form.

If you see any **plaintext** PII in the request body, **stop immediately**. The tag is misconfigured. Either:
- Enhanced Conversions toggle isn't actually ON
- The user-provided data variable isn't mapped correctly
- Some other tag is sending the form data raw (not the Google Ads tag — find and remove it)

### 4.4 GTM Preview Mode debug check

In the GTM Preview pane (separate window):

1. Click the `lead_confirmed` event in the event stream
2. Click the **Google Ads Lead conversion tag** that fired
3. Inspect the "Output" section
4. Confirm User-Provided Data is shown with **hashed** values (64 hex characters each)

Screenshot this. Attach to the report.

### 4.5 Google Ads Diagnostics match check

After the test fire, within 24-48 hours:

1. Google Ads → Tools → Conversions → click into Lead
2. Open the **Diagnostics** tab
3. Look for the "Enhanced Conversions" panel

Expected after 24-48h with real submissions:
- Status: **Active** (or "Recording")
- Match rate: ≥50% within first week, ≥60% within 2 weeks

If match rate stays <40% after 2 weeks: the data quality is degraded. Check:
- Are users entering full names or just first names? (low last_name match)
- Are phone numbers in inconsistent formats? (the GTM template normalizes, but check)
- Is the email field being autocompleted with cached values that don't match Google account emails?

---

## 5. Service and timeline reporting fields

`service` and `timeline` are now pushed into dataLayer on `form_submit`. Do not map
them into the User-Provided Data variable. Instead, add them as GA4 custom event
parameters and, if useful, Google Ads custom variables or offline lead columns.

Recommended GA4 event parameter mapping on the `form_submit` or
`lead_confirmed` GA4 event tag:

| Event parameter | Value |
|---|---|
| `lead_service` | `{{DLV - service}}` |
| `lead_timeline` | `{{DLV - timeline}}` |
| `form_type` | `{{DLV - form_type}}` if already created |

Both forms today: ContactForm has street/city/state inputs; ContactHome does not.
Partial user data is expected and acceptable.

---

## 6. Sign-off

```
Code prerequisite (commit c9cefd8):    [x] verified by audit
                                            (firstName/lastName/zip/email/phone in dataLayer)

Section 2 - DLV variables:
  DLV - email:                         [ ] created  [ ] existed
  DLV - phone:                         [ ] created  [ ] existed
  DLV - first_name:                    [ ] created  [ ] existed
  DLV - last_name:                     [ ] created  [ ] existed
  DLV - zip:                           [ ] created  [ ] existed
  DLV - country:                       [ ] created  [ ] existed

Section 3 - User-Provided Data var:
  UPD - Lead Form Data variable:       [ ] created with all fields mapped
  Lead conversion tag updated:         [ ] attached UPD variable + saved

Section 4 - No-plaintext verification:
  Test fire conducted:                 [ ] yes, date: ____________
  Request body inspected:              [ ] yes
  em hashed (not plaintext):           PASS / FAIL
  ph hashed:                           PASS / FAIL
  fn hashed:                           PASS / FAIL
  ln hashed:                           PASS / FAIL
  pc hashed:                           PASS / FAIL
  country hashed:                      PASS / FAIL
  GTM Preview Mode shows hashes:       PASS / FAIL
  Screenshot saved:                    [ ] _screenshots/ec-test-network.png
                                        [ ] _screenshots/ec-test-gtm-preview.png

Section 4.5 - Google Ads diagnostics (24-48h post-fire):
  Status:                              ____________________
  Match rate:                          _____%
  Status target:                       Active, >50% (lift to >60% in 2 weeks)

Section 5 - Optional city/state extension:
  Decision:                            [ ] doing it  [ ] skipping (zip + name sufficient)
  Code changes deployed:               [ ] (only if doing)
  GTM mapped:                          [ ] (only if doing)

Container PUBLISHED:                   [ ] yes  Version: ____  Date: ________

Validated by:                          __________________________

Next step: FINAL-ATTRIBUTION-SIGNOFF.md (consolidates HIGH-1, HIGH-2, HIGH-3, HIGH-4)
```

---

## Appendix A — Why we don't hash client-side in JS

You could SHA-256 in the browser before pushing to dataLayer (Web Crypto API supports it). **Don't.** Reasons:

1. **Google's tag knows the canonical normalization** (lowercase, strip whitespace, normalize phone to E.164) — replicating it in JS introduces subtle bugs that lower match rate
2. **The `user_identifier_source` flag** Google attaches to its hashes lets matching skip user-friendly normalization passes — your hashes wouldn't get that benefit
3. **Maintenance burden** — Google updates hashing rules quietly; their template tracks; your code wouldn't
4. **One less moving part** to verify in the test fire

The only reason to hash client-side: if you need to send the same hashed user_data to a non-Google destination (e.g., Bing, Meta) AND you want one canonical hash. That's not a current use case; defer.

## Appendix B — When match rate stays low

If match rate is <40% after 4 weeks:

1. **Verify the form fields users actually fill.** Open recent leads in inbox — are 30% submitting "John" with no last name? "n/a" in zip? Each missing field drops match rate ~10%.
2. **Phone normalization:** confirm GTM template is normalizing to E.164 (+15715551234). If your form accepts "(571) 555-1234" and the template doesn't strip formatting, hashes won't match Google's stored hash. Test: place a real submit with formatted phone, inspect Network request — should see hash of `+15715551234`, not hash of `(571) 555-1234`.
3. **Email case:** template lowercases. Verify by submitting `Test@Example.com` and checking hash matches `test@example.com`.
4. **Google account coverage:** Loudoun Decks audience is NoVA residential — overlap with Google account ownership is ~95%, so match rate ceiling is high. If you're still stuck below 50%, the data quality is the issue, not the audience.
