# Google Ads Conversion Integrity — Loudoun Decks

**Scope:** end-to-end integrity verification of the Google Ads conversion column. Covers HIGH-1 dedup (post-`GTM-VALIDATION-REPORT.md`), HIGH-4 conversion goal cleanup, and a comprehensive integrity matrix.

This document is the **definitive truth** for what every conversion action does, what fires it, and how to detect drift. Re-run the integrity matrix monthly or after any GTM container publish.

---

## 1. Conversion action inventory

Open Google Ads → Tools → **Conversions** → Summary view. List every action.

For each conversion action, fill the row in 1.1. The integrity verification depends on knowing exactly what exists.

### 1.1 Inventory table

| # | Conversion name | Source | Category | Count | Click window | Attribution | Include in "Conversions" |
|---|---|---|---|---|---|---|---|
| 1 | _______ | _______ | _______ | _______ | _______ | _______ | _______ |
| 2 | _______ | _______ | _______ | _______ | _______ | _______ | _______ |
| 3 | _______ | _______ | _______ | _______ | _______ | _______ | _______ |
| 4 | _______ | _______ | _______ | _______ | _______ | _______ | _______ |
| 5 | _______ | _______ | _______ | _______ | _______ | _______ | _______ |

### 1.2 Target end-state (after Phase 1)

Below is what the inventory should look like once HIGH-1 and HIGH-4 are complete. Use this as the diff target.

| Name | Source | Category | Count | Window | Attribution | In Conversions | Notes |
|---|---|---|---|---|---|---|---|
| **Lead** | Website (GTM) | Lead → Submit lead form | One | 90d click / no view | Data-driven | **Yes (primary)** | Fires from `lead_confirmed` event, deduped by `transaction_id=event_id` |
| Form Fill (observe) | Website (GTM) | Lead → Submit lead form | One | 90d / no view | Data-driven | **No (secondary)** | Optional — fires from `form_submit`. Useful as backup signal if `lead_confirmed` fails. Keep but exclude from bidding. |
| **Phone Call from Ads** | Phone calls → Calls from ads | Lead → Phone call | One | 60-day | N/A | **Yes (primary)** | Min duration 60s. Fires from call asset / forwarding number. |
| **Phone Call from Website** | Phone calls → Calls to phone number on website | Lead → Phone call | One | 30-day click | N/A | **Yes (primary)** | Min duration 60s. Requires Google call snippet on site (separate setup, not done yet). |
| Phone Click (observe) | Website (GTM) | Page view | Every | 1-day | N/A | **No (secondary)** | Fires from `phone_click` event. Vanity signal — keep for engagement reporting, NEVER for bidding. |
| **Qualified Lead** | Import → CRM → Conversions from clicks | Lead → Qualify lead | One | 90-day | Data-driven | **Yes (primary)** | Offline upload from CRM. Not yet wired (P2). |
| Closed Won | Import → CRM → Conversions from clicks | Sale | One | 90-day | Data-driven | No (observe until volume) | Future tROAS bidding signal |

### 1.3 What gets demoted from primary (HIGH-4)

If your current inventory has any of the following as **primary** (Include in Conversions = Yes), **demote them**:

- `phone_click` / "Phone link click" / "Call button click" — vanity event, contaminates Smart Bidding
- `form_submit` — proof-of-form-touch, not proof-of-success. `lead_confirmed` is the true signal
- "Page view of /thank-you" if it exists as a separate conversion — duplicate of `lead_confirmed`
- "Engagement" / "Scroll" / "Time on site" — never bid against engagement signals

To demote: click into the action → Settings → "Include in 'Conversions'" → toggle Off. The action keeps recording (you can still see it in the "All conversions" column for reporting) but it stops driving Smart Bidding decisions.

---

## 2. The integrity matrix

This is the master test sheet. Each row is a single observable behavior; each column is a property the operator verifies. The matrix is the contract: if every row passes, the conversion column in Google Ads is trustworthy.

Run the matrix in Google Ads → Tools → Conversions → **Conversion Diagnostics** + Google Ads → Reports → Conversion source detail.

### 2.1 Status integrity

| Conversion | Status field shows | Expected | If wrong |
|---|---|---|---|
| Lead | Recording conversions | ✅ recording | Verify GTM tag fires in Preview Mode; check Conversion Linker tag exists |
| Phone Call from Ads | Recording calls | ✅ recording (after first call) | Verify call asset is enabled and approved; place a test call |
| Phone Call from Website | Recording | ✅ once snippet deployed | Snippet must be on every page; verify via View Source |
| Qualified Lead | No recent conversions | ⚠️ expected until first CRM upload | Run a manual CSV upload to verify the action accepts data |

### 2.2 Counting integrity

| Action | Counting | Why |
|---|---|---|
| Lead | One | Each form submission = one conversion, regardless of how many pages user touches |
| Phone Call from Ads | One | A single user shouldn't multi-count if they call back same day |
| Phone Click | Every | If kept as observe-only, you do want all clicks for engagement analysis |
| Qualified Lead | One | Each lead can only be qualified once |

If any **primary** action is set to "Every", **stop** — Smart Bidding will optimize toward repeated events, not unique conversions.

### 2.3 Window integrity

| Action | Click-through window | Why this exact value |
|---|---|---|
| Lead | 90 days | Matches gclid cookie lifetime in [layout.js:62-64](../../src/app/layout.js#L62-L64). Users who click an ad and convert 2 months later are still attributed correctly. |
| Phone Call from Ads | 60-day | Google's recommended max for phone (caller intent decays faster than form intent) |
| Phone Call from Website | 30-day click | Per-page call dynamic insertion — gclid is fresh on each visit |
| Qualified Lead | 90-day | Matches Lead so timing math is consistent for CRM ops |
| Closed Won | 90-day click + 30-day engaged-view | Long enough to capture full home-services sales cycle (~6 weeks median) |

If "View-through window" is enabled on Lead or Qualified Lead, **disable it** — view-throughs for a high-ticket lead form are low-quality signal.

### 2.4 Attribution model integrity

All primary conversions should be **Data-driven attribution**. Google Ads needs enough conversion volume to build the model (~3000 ad interactions in 30 days, or 300 conversions on the action). If you don't have volume yet, fall back to **Position-based** (40-20-40), not "Last click" — last-click systematically undervalues top-of-funnel keywords.

| Action | Current setting | Required setting |
|---|---|---|
| Lead | ____ | Data-driven OR Position-based |
| Qualified Lead | ____ | Data-driven OR Position-based |
| Phone Call from Ads | ____ | Data-driven (always available for call conversions) |

### 2.5 Dedup integrity (the critical one)

This is the test that proves HIGH-1 is working end-to-end. Run AFTER GTM-VALIDATION-REPORT.md is complete and the container is **Published**.

#### 2.5.1 Real-time dedup verification

1. Open Google Ads → Tools → Conversions → click into **Lead**
2. Open **Diagnostics** tab
3. In a separate tab, visit the site with `?gclid=DEDUP_TEST_001`
4. Submit ContactForm
5. Wait 2-5 minutes for Google Ads to ingest
6. Refresh the Diagnostics page

**Expected in Diagnostics:**
- "Recent conversions": 1 new entry with the timestamp of your test
- "Verification" shows the conversion has Enhanced Conversions data attached (if HIGH-3 is done)
- No duplicate flag

#### 2.5.2 Reload dedup test

1. Don't close the test tab. On `/thank-you?eid=<UUID>`, hit **Reload** 3 times
2. In each reload, open DevTools → Console → run `window.__ldnAttr.snapshot()`
3. Confirm only ONE `lead_confirmed` entry exists in `history` for that event_id
4. Confirm `dedupHits >= 3` (anti-replay caught the reloads)

**Then check Google Ads Diagnostics again:** still 1 conversion, not 4.

#### 2.5.3 Cross-tab dedup test

1. Copy the `/thank-you?eid=<UUID>` URL from the test
2. Open it in a brand-new private/incognito window
3. The `lead_confirmed` event fires there (new tab = new sessionStorage), `transaction_id=<UUID>` (same UUID)
4. Check Google Ads Diagnostics

**Expected:** still 1 conversion. **Google Ads itself should dedupe on transaction_id.** If the count goes to 2, the conversion action lacks the "Don't allow duplicate conversions" setting.

#### 2.5.4 Cross-user negative test

This is critical — verify dedup doesn't suppress legitimate distinct conversions.

1. Browser A submits form → UUID-A
2. Browser B (or incognito) submits form → UUID-B (different)
3. Check Google Ads Diagnostics

**Expected:** 2 conversions, both recorded. Different transaction_ids = different conversions = correctly counted.

### 2.6 Click-ID propagation integrity

For each click-ID parameter Google supports, verify the click is recorded against the correct campaign:

1. Get a real campaign URL with `?gclid=<real_or_test>` from Google Ads → Campaigns → click an ad
2. Visit the site through that URL
3. Submit form
4. In Google Ads → Campaigns view → segment by "Conversions"
5. Confirm the conversion is attributed to that specific campaign / ad group / keyword

If conversions land in "Direct" or "Organic" instead of the campaign, gclid is being lost somewhere — most likely:
- Redirect from www.* stripped query (R9 in [ATTRIBUTION-RISKS.md](./ATTRIBUTION-RISKS.md))
- gclid cookie not set (cookie blocked / ad blocker)
- Middleware or another layer redirecting and dropping query

Verify with:
```bash
curl -sI "https://ldndecks.com/?gclid=CURLTEST123"
# 200 response — query passes through
curl -sI "https://www.ldndecks.com/?gclid=CURLTEST123"
# 301 to https://ldndecks.com/?gclid=CURLTEST123 (query preserved)
```

If the second curl shows `Location: https://ldndecks.com/` (no gclid), file an immediate fix.

---

## 3. HIGH-4 — Conversion goal cleanup

### 3.1 The current state

Without inventory, can't be specific. The Phase 1 code work removed `phone_click`'s hardcoded phone value but did not change Google Ads UI settings — that's the operator's job here.

### 3.2 Required changes

For each conversion action currently set as primary, apply this filter:

| Question | If YES → demote to secondary |
|---|---|
| Is this fired by a click event (not a server-confirmed conversion)? | YES → demote |
| Does this fire before the user takes a substantive action? | YES → demote |
| Could a bot trivially trigger this? | YES → demote (and fix the underlying form) |
| Is this counted "Every" not "One"? | YES → demote OR fix to "One" |

**Specifically for Loudoun Decks:**

- `phone_click` → **DEMOTE** (vanity)
- `form_submit` if it exists as a separate primary → **DEMOTE** (`lead_confirmed` is the truth signal)
- Engagement / Page view conversions → **DEMOTE** (always)
- Anything labeled "click" or "tap" → review case by case, lean toward demote

**Keep as primary:**

- `Lead` (driven by `lead_confirmed` after HIGH-1)
- `Phone Call from Ads` (60s minimum from call asset)
- `Phone Call from Website` (60s min from website dynamic forwarding) — when set up
- `Qualified Lead` (from CRM upload) — when set up
- Future: `Closed Won` (with monetary value, for tROAS)

### 3.3 Bid strategy impact

After demoting noise signals:

| Today (no Smart Bidding active) | Phase 1 ready state | After HIGH-1..4 verified |
|---|---|---|
| Manual CPC / Max Clicks recommended until conversion data is clean | Same — DO NOT switch to Max Conversions yet | Switch to Max Conversions (no target) for 7-14 days to accumulate clean data |
| Conversions column may be inflated by phone_click / form_submit duplication | Still inflated until GTM dedup is published | Conversions column reflects real, deduped conversions only |

**Do not** switch to Max Conversions / tCPA / tROAS before this document and `GTM-VALIDATION-REPORT.md` are both signed off. Bidding on noisy data wastes budget faster than no bidding at all.

---

## 4. Integrity sign-off

```
Inventory complete:             [ ] yes  date: ________

Demoted from primary (HIGH-4):
  phone_click:                  [ ] demoted  [ ] never was primary  [ ] N/A
  form_submit:                  [ ] demoted  [ ] never was primary  [ ] N/A
  engagement signals:           [ ] demoted  [ ] none existed       [ ] N/A
  other vanity signals:         [ ] demoted: __________________________

Confirmed primary:
  Lead (from lead_confirmed):           [ ]
  Phone Call from Ads:                  [ ]
  Phone Call from Website (if exists):  [ ]
  Qualified Lead (future):              [ ] deferred to P2

Dedup matrix:
  2.5.1 Real-time fire:                 PASS / FAIL
  2.5.2 Reload (no new conversion):     PASS / FAIL
  2.5.3 Cross-tab (still 1):            PASS / FAIL
  2.5.4 Cross-user (correctly 2):       PASS / FAIL

Click-ID propagation:
  www → non-www preserves gclid:        PASS / FAIL
  Campaign-attributed (not Direct):     PASS / FAIL

Bid strategy:
  Current strategy:                     ______________
  Plan to switch:                       [ ] hold for HIGH-3 + offline imports
                                        [ ] eligible to switch to Max Conversions now

Validated by:                           ______________________________
Date:                                   ______________________________
Google Ads Account ID:                  ______________________________

Next step: ENHANCED-CONVERSIONS-VERIFICATION.md (HIGH-3)
```
