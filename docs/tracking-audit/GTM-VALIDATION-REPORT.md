# GTM Validation Report — Loudoun Decks

**Container:** `GTM-N87MG6QS`
**Scope:** HIGH-1 (Google Ads dedup) + HIGH-2 (GA4 SPA reliability)
**Audience:** the operator who has GTM container edit access. Every step is concrete; no ambiguous "ensure that…" instructions.

## Post-publish status — 2026-05-15

**Status:** HIGH-1 is live.

**Published GTM version:** `25`
**Version name:** `Ads tracking: lead_confirmed + event_id dedup`
**Published:** 2026-05-15 by `loudoundecks@gmail.com`

Published changes:

| Item | Type | Change | Status |
|---|---|---|---|
| `DLV - event_id` | Variable | Added | LIVE |
| `Google Ads - Form Lead Conversion` | Tag | Modified | LIVE |
| `lead_confirmed - Custom Event` | Trigger | Modified | LIVE |

Live Version 25 tag state:

| Tag | Trigger | Status |
|---|---|---|
| `GA4 Event - generate_lead` | `lead_confirmed - Custom Event` | LIVE |
| `Google Ads - Form Lead Conversion` | `lead_confirmed - Custom Event` | LIVE |
| `Google Ads - User Provided Data - Form Lead` | `lead_confirmed - Custom Event` | LIVE |
| `Google Ads - Call Lead Conversion` | `phone_click` | unchanged |
| `Phone clicks - GA4` | `phone_click` | unchanged |

Preview validation before publish:

| Check | Result |
|---|---|
| Test URL `/thank-you?eid=codex-test-1778875877482` produced `lead_confirmed` | PASS |
| `GA4 Event - generate_lead` fired once | PASS |
| `Google Ads - Form Lead Conversion` fired once | PASS |
| `Google Ads - User Provided Data - Form Lead` fired once | PASS |
| `Google Ads - Form Lead Conversion` Transaction ID resolved to `codex-test-1778875877482` | PASS |
| Phone tags did not fire during thank-you test | PASS |

Important note: the preview test used a direct `/thank-you?eid=...` URL to validate the GTM mapping without submitting a real sales form. The next required validation is with 5-10 real production leads.

This is a **runbook**, not a report. The "report" half lives at the bottom — a fill-in section the operator completes after running each step. The whole document, once filled, becomes the validation report.

---

## 0. Pre-flight (code side, already verified)

These conditions are guaranteed by the code shipped on `feat/ads-tracking-instrumentation` through commit `c365b89`. The operator does not need to verify them, only consume them:

| Code guarantee | Where | Why it matters for GTM |
|---|---|---|
| `dataLayer` exists before GTM container loads | [layout.js:62-69](../../src/app/layout.js#L62-L69) (`beforeInteractive`) | First push (consent defaults) is in array before any tag fires |
| `gtag('consent','default',{ granted })` runs first | Same | Tags fire with explicit consent state, not implicit |
| `form_submit` event carries `event_id` (UUID) | [useLeadSubmit.js:31-34](../../src/hooks/useLeadSubmit.js#L31-L34) | Source of `transaction_id` for Google Ads tag |
| `lead_confirmed` event carries same `event_id` | [ThankYouTracking.jsx](../../src/components/ThankYouTracking.jsx) reads `?eid=` query param | Dedup anchor across the two events |
| `lead_confirmed` is page-view-anchored on `/thank-you` | Same — `/thank-you` only renders after server email succeeds | This is the proof-of-conversion event GTM should bind Google Ads to |
| Anti-replay on `lead_confirmed` reload | [tracking.js:71-80](../../src/lib/tracking.js#L71-L80) | Reload of `/thank-you` will NOT fire a second push; GTM dedup is the 2nd line of defense, not the only one |
| Honeypot drops bot submissions before any event | [sendEmail.js:7-15](../../src/server/sendEmail.js#L7-L15) + [useLeadSubmit.js:53-55](../../src/hooks/useLeadSubmit.js#L53-L55) | Bot fills produce zero events in dataLayer |
| First name / last name / email / phone / zip / country in dataLayer | [tracking.js:31-40](../../src/lib/tracking.js#L31-L40) | Enables Enhanced Conversions field mapping |

---

## 1. HIGH-1 — Google Ads Lead conversion dedup

### 1.1 Inventory current state

Before any change, document what exists. Open GTM → **Tags**. For each tag whose name contains "Lead", "Conversion", "Google Ads", or "AW-", capture:

| Field | Value |
|---|---|
| Tag name | _______ |
| Tag type | _______ (should be "Google Ads Conversion Tracking") |
| Conversion ID | _______ (AW-XXXXXXX) |
| Conversion Label | _______ |
| Current trigger | _______ (likely "form_submit" — that's the problem) |
| Order ID / Transaction ID mapping | _______ (likely empty — that's the problem) |
| User-Provided Data | _______ (likely Disabled — fixed in HIGH-3) |

Take a screenshot of each. Save to `docs/tracking-audit/_screenshots/before/` for the report.

### 1.2 Create the dedup variable

Workspace → **Variables** → New → User-Defined Variable → Data Layer Variable

| Field | Value |
|---|---|
| Name | `DLV - event_id` |
| Data Layer Variable Name | `event_id` |
| Version | 2 |
| Default Value (when missing) | (leave empty — empty string preferred over 0) |

Save. Repeat for each click-ID variable that's not already present:

```
DLV - gclid     -> Data Layer Variable Name: gclid
DLV - gbraid    -> Data Layer Variable Name: gbraid
DLV - wbraid    -> Data Layer Variable Name: wbraid
```

### 1.3 Migrate the Google Ads Lead conversion tag

Open the inventoried Google Ads Lead tag. Edit:

**Conversion ID:** keep existing
**Conversion Label:** keep existing
**Conversion Value:** leave blank or set a static placeholder ($200) — actual values come from Offline Conversion Imports later. Do not gate this on a dataLayer value yet.
**Conversion Currency Code:** `USD`
**Order ID:** set to `{{DLV - event_id}}`

Click **More Settings** → confirm **Conversion Linker** is enabled (it should be a separate tag firing on All Pages — verify; create one if missing).

**Trigger:** remove the existing `form_submit` trigger. Add a new trigger:

| Trigger field | Value |
|---|---|
| Type | Custom Event |
| Event name | `lead_confirmed` |
| Fires on | All Custom Events |
| (do NOT add additional firing conditions) | |

Save the tag.

### 1.4 Configure Google Ads conversion action dedup

This is in the Google Ads UI (not GTM). Open Google Ads → Tools → Conversions → click the Lead action.

| Field | Set to |
|---|---|
| Count | **One** (not "Every") |
| Click-through conversion window | 90 days (matches gclid cookie lifetime) |
| View-through window | Disabled |
| Attribution | **Data-driven** |
| Include in "Conversions" | **Yes** (primary optimization signal) |

Open the conversion source detail panel — if there's a "Don't allow duplicate conversions" toggle (sometimes hidden in Settings → Tag dedup), enable it. This is the final dedup line; GTM `transaction_id` + this toggle = no double-counts.

### 1.5 Dedup edge-case matrix (run AFTER 1.3 and 1.4 are saved)

Open GTM **Preview Mode**, paste the site URL with `?gclid=DEDUPTEST1`, and walk through each scenario:

| # | Scenario | Expected dataLayer | Expected Google Ads tag fires | Expected Google Ads conversion count |
|---|---|---|---|---|
| A | Submit ContactForm | `form_submit` (UUID1) + `lead_confirmed` (UUID1) | 1× with `transaction_id=UUID1` | 1 |
| B | Submit ContactHome | `form_submit` (UUID2, `form_type:homepage`) + `lead_confirmed` (UUID2) | 1× with `transaction_id=UUID2` | 1 |
| C | After A, reload `/thank-you?eid=UUID1` | NO new `lead_confirmed` (anti-replay blocks) | 0× | still 1 |
| D | After A, browser back then forward to `/thank-you?eid=UUID1` | NO new `lead_confirmed` | 0× | still 1 |
| E | After A, open `/thank-you?eid=UUID1` in NEW tab | `lead_confirmed` (UUID1) fires once (new tab = new sessionStorage) | 1× with `transaction_id=UUID1` | **still 1** (Google Ads should dedup on transaction_id) |
| F | Open modal, submit, close, reopen modal, submit again | `form_submit` (UUID3) + `lead_confirmed` (UUID3), then `form_submit` (UUID4) + `lead_confirmed` (UUID4) | 2× (different transaction_ids — legitimately different conversions) | 2 |
| G | Fill form with honeypot value via DevTools console, submit | NO `form_submit`, NO `lead_confirmed`, NO navigation | 0× | 0 |

**PASS condition:** every row matches expected. **FAIL:** any deviation. Most likely failure is row E producing 2 conversions — that means Google Ads is not dedup'ing on `transaction_id`. Re-check 1.4.

### 1.6 What to capture for the report

For each scenario A–G, paste:
- The relevant Tag Assistant tag fire (or "no fire" screenshot)
- The `dataLayer` snapshot from `window.__ldnAttr.snapshot()` (use the new debug helper in dev mode)
- The Google Ads conversion debugger row (Tools → Conversions → Diagnostics → Recent Conversions)

---

## 2. HIGH-2 — GA4 SPA page_view stability

### 2.1 Inventory current state

GTM → Tags → find the GA4 Configuration tag. Capture:

| Field | Value |
|---|---|
| Tag name | _______ |
| Measurement ID | G-_______ |
| `send_page_view` setting | _______ (this is the key field; if true, SPA nav is broken) |
| Trigger | _______ (likely "All Pages") |

### 2.2 Decide the page_view strategy

There are two acceptable architectures. Pick A.

**Option A (RECOMMENDED) — Manual page_view via History Change:**

1. Edit GA4 Configuration tag → expand "Fields to set" / "Configuration parameters" → set:
   ```
   send_page_view = false
   ```
2. Workspace → Triggers → New
   ```
   Name:    Trigger - History Change
   Type:    History Change
   Fires on: All History Changes
   ```
3. Workspace → Tags → New
   ```
   Name:                GA4 - page_view (SPA)
   Type:                Google Analytics: GA4 Event
   Configuration Tag:   <same GA4 Configuration tag as above>
   Event Name:          page_view
   Event Parameters:
     page_location = {{Page URL}}
     page_path     = {{Page Path}}
     page_title    = {{Page Title}}
     page_referrer = {{Referrer}}
   Trigger:             Trigger - History Change + Initialization - All Pages
                        (use two triggers — fire on first load AND on SPA nav)
   ```

**Option B — Leave `send_page_view: true`, accept SPA gap:**

Not recommended. Skips this section but locks GA4 reports to first-page only. Document explicitly if you choose this.

### 2.3 Double-fire guard

When you have two triggers (Initialization + History Change), the first page load can fire `page_view` twice if Initialization fires AND History Change fires on the initial URL.

To prevent this, add a blocking exception to the `GA4 - page_view (SPA)` tag's History Change trigger. The exception trigger:
```
Name:    Trigger - History Change - Blocking on initial load
Type:    History Change
Fires on: Some History Changes
Condition: {{Old History State}} equals undefined
```
This trigger fires when the FIRST history event occurs (no prior state). Add it as a **blocking** trigger on the SPA tag.

Alternative: don't add Initialization as a trigger — rely on `send_page_view: true` for first load and only add the manual page_view via History Change for subsequent SPA nav. Simpler, but means the first GA4 page_view doesn't have your custom parameters.

### 2.4 SPA test matrix

In GTM Preview Mode, navigate through these flows. For each, confirm exactly one `page_view` event reaches GA4 (check DebugView in GA4 Admin → DebugView).

| # | Flow | Expected page_view count |
|---|---|---|
| A | Direct land on homepage | 1 |
| B | Land on homepage → click "Services" → click a service page | 3 (home + services + service) |
| C | Submit ContactForm → land on /thank-you | 2 (the page where the form was + /thank-you) |
| D | Refresh /thank-you | 1 (fresh page load, anti-replay does NOT block page_view, only lead_confirmed) |
| E | Open /deck-cost-calculator → run calculator → URL doesn't change but content updates | 1 (calculator doesn't change URL by default; if it does, see F) |
| F | If calculator pushes a step to URL (e.g., `?step=2`) | 1 page_view per URL change |

**PASS:** counts match. **FAIL:** any over or undercount. Most common failure: row A or C produces 2 page_views — that means the dedup guard in 2.3 didn't catch the initial-load double-fire.

### 2.5 Capture for report

For each row, paste the GA4 DebugView event stream screenshot showing the exact page_view sequence.

---

## 3. Report fill-in

The operator completes this section after running 1.1–1.6 and 2.1–2.5.

### 3.1 HIGH-1 evidence

```
1.1 Inventory before changes:
    Lead tag name(s) found: ______________________________________
    Original trigger:       ______________________________________
    Original transaction_id mapping: ______________________________
    Screenshots saved:      [ ] yes  [ ] no

1.2 Variables created:
    DLV - event_id:  [ ] created  [ ] already existed
    DLV - gclid:     [ ] created  [ ] already existed
    DLV - gbraid:    [ ] created  [ ] already existed
    DLV - wbraid:    [ ] created  [ ] already existed

1.3 Lead conversion tag migrated:
    Trigger now:               lead_confirmed [ ] confirmed
    transaction_id now:        {{DLV - event_id}} [ ] confirmed
    Conversion Linker:         [ ] confirmed enabled

1.4 Google Ads conversion action:
    Count:                     One [ ] confirmed
    Click window:              90 days [ ] confirmed
    Attribution:               Data-driven [ ] confirmed
    Include in Conversions:    Yes [ ] confirmed
    Don't allow duplicates:    [ ] enabled  [ ] not available in UI

1.5 Edge-case matrix:
    A submit ContactForm:        PASS / FAIL  notes: __________
    B submit ContactHome:        PASS / FAIL  notes: __________
    C reload thank-you:          PASS / FAIL  notes: __________
    D back-forward thank-you:    PASS / FAIL  notes: __________
    E open thank-you new tab:    PASS / FAIL  notes: __________
    F modal reopen submit:       PASS / FAIL  notes: __________
    G honeypot:                  PASS / FAIL  notes: __________

HIGH-1 overall:  PASS / FAIL
Blocking issues: ___________________________________________
```

### 3.2 HIGH-2 evidence

```
2.1 GA4 Configuration tag inventory:
    Tag name:                  ______________________
    Measurement ID:            G-_____________________
    send_page_view before:     ______________________

2.2 Strategy chosen:           A (manual page_view via History Change)
                               B (accept SPA gap)

2.3 Double-fire guard:
    Blocking exception added:  [ ] yes  [ ] not needed (initialization not used)

2.4 SPA test matrix:
    A direct home:             1 page_view confirmed [ ]
    B 3-step nav:              3 page_views confirmed [ ]
    C form -> thank-you:       2 page_views confirmed [ ]
    D thank-you reload:        1 page_view confirmed [ ]
    E calculator no URL chg:   1 page_view confirmed [ ]
    F calculator URL chg:      N page_views confirmed [ ]

HIGH-2 overall:  PASS / FAIL
Blocking issues: ___________________________________________
```

### 3.3 Overall HIGH-1 + HIGH-2 sign-off

```
GTM container Version:   ____ (note GTM container version after Publish)
Validated by:            ________________________
Date:                    ________________________

[ ] All HIGH-1 edge cases pass
[ ] All HIGH-2 SPA flows pass
[ ] Container has been PUBLISHED (not just saved as workspace)
[ ] Preview Mode debug evidence attached to this document
[ ] Screenshots saved to docs/tracking-audit/_screenshots/after/

Next step: ENHANCED-CONVERSIONS-VERIFICATION.md (HIGH-3)
```

---

## Appendix A — Using window.__ldnAttr in Preview Mode

In `npm run dev` (development build only), the LayoutContent component installs a debug surface. Open DevTools → Console:

```js
// Inspect current state
window.__ldnAttr.snapshot()
// Returns:
//   { clickIds: {gclid: '...', ...},
//     history: [ {ts, event, event_id, form_type, page}, ... ],
//     dedupHits: 0,
//     dataLayerLength: N }

// Re-read cookies on demand
window.__ldnAttr.clickIdsLive

// Reset event history (does NOT clear anti-replay flags)
window.__ldnAttr.clear()
```

The dedup counter increments every time `trackLeadConfirmed` is called with an `event_id` it has already fired in this session. Use this to prove HIGH-1 row C/D/E behavior without needing GTM.

## Appendix B — Reverting a bad GTM publish

If after Publish the conversion debugger shows broken behavior:

1. GTM → Versions → find the previous published version
2. **Set as Latest Version**
3. **Publish** that version

This is instant. No code rollback needed. Refer to `docs/ads-tracking/ROLLBACK-PLAN.md` for the broader 5-tier rollback decision tree.
