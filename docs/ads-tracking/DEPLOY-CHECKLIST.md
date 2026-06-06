# Ads Tracking — Deploy Checklist

Production deployment of the ads tracking branch (`feat/ads-tracking-instrumentation`).

## Pre-deploy (must complete before merging to main)

### Code quality

- [ ] `npm run build` completes without errors (compile-time validation)
- [ ] `npm run lint` (note: project ESLint config is pre-existing broken — see `QA-TEST-PLAN.md` for workaround)
- [ ] All 8 touched files parse via esbuild (see `QA-TEST-PLAN.md` section 1)
- [ ] No new dependencies added to `package.json` (verify: zero net deps change)
- [ ] PR reviewed by at least one engineer + one operations stakeholder

### Code review checks

- [ ] `src/server/metaCapi.js` env-gate works (no requests fire when env vars absent)
- [ ] `src/components/ContactForm.jsx` `crypto.randomUUID()` fallback to `Date.now()+random()` for older browsers verified
- [ ] No `console.log` left in production code paths (only `console.error` on failure)
- [ ] `src/app/layout.js` capture Script uses `strategy="beforeInteractive"` (NOT lazyOnload)
- [ ] `src/server/sendEmail.js` Meta CAPI call uses `.catch()` so it can never throw out of the form submit flow

### Environment preparation

- [ ] `.env.local.example` documents new env vars (META_PIXEL_ID, META_CAPI_ACCESS_TOKEN, optional META_CAPI_TEST_EVENT_CODE)
- [ ] Production env (Vercel / hosting provider) has placeholder slots ready
  - Even if not setting values yet, document slots so future activation is one-step

### Tracking infrastructure prerequisites

- [ ] GTM container `GTM-N87MG6QS` workspace accessible to deployer
- [ ] Meta Business Manager access (if activating CAPI in same window)
- [ ] Meta Pixel ID known (or accept the no-op posture)
- [ ] Meta domain verification status for `ldndecks.com` confirmed in Brand Safety → Domains

## Deploy day

### Step 1: Final pre-flight (5 min)

```bash
cd /Users/ldndecks/ldn-decks-next
git checkout feat/ads-tracking-instrumentation
git log --oneline -5      # verify expected commits at HEAD
git status -s             # should be clean
npm run build             # final compile check
```

Pass criteria: build succeeds, no stderr, no warnings related to my files.

### Step 2: Merge to main (or push for PR review)

```bash
# Option A: direct merge (if no PR process)
git checkout main
git merge --no-ff feat/ads-tracking-instrumentation
git push origin main

# Option B: PR-based merge (recommended)
git push origin feat/ads-tracking-instrumentation
# Then open PR via web UI; reviewers approve; squash-or-merge per project convention
```

### Step 3: Verify Vercel preview / production deploy

Watch the deploy pipeline. Pass criteria:
- Build succeeds in CI
- Lighthouse score doesn't regress (CWV unaffected; capture script is `beforeInteractive` but ~200 bytes)
- No new runtime errors in Vercel logs in first 10 minutes

### Step 4: Smoke-test live (5 min, AFTER deploy completes)

```
1. Open https://ldndecks.com/?gclid=deploytest_$(date +%s) in private window
2. DevTools → Application → Cookies → verify gclid cookie present
3. Navigate to /contact (or any page with the contact form)
4. Submit form with test data ("Deploy Test {timestamp}" in message)
5. Verify redirect to /thank-you?eid=...
6. DevTools → Console → run: console.log(dataLayer)
   → verify form_submit AND lead_confirmed events with SAME event_id
7. Check the lead-notification inbox (office@ldndecks.com)
   → verify "Attribution (paid ad click)" block appears with gclid value
```

If any step fails: jump to `ROLLBACK-PLAN.md` immediately.

### Step 5: Activate Meta CAPI (optional, can defer)

If activating Meta CAPI in the same deploy window:

```
1. Get META_PIXEL_ID from Events Manager → Pixel details
2. Get META_CAPI_ACCESS_TOKEN from Events Manager → Settings → Conversions API → Generate access token
3. Add to Vercel: Settings → Environment Variables → Production
4. Trigger new deploy (env changes don't hot-reload server actions in some configurations)
5. Set META_CAPI_TEST_EVENT_CODE=TEST_$(date +%Y%m%d) for first test
6. Submit test form
7. Verify in Events Manager → Test Events tab within 30 sec
8. Verify EMQ score ≥ 7.5 (excellent)
9. Remove META_CAPI_TEST_EVENT_CODE and redeploy for production-quality events
```

### Step 6: Wire GTM tags to use lead_confirmed (10 min)

Required to fully realize the reliability patch:

```
1. Open tagmanager.google.com workspace GTM-N87MG6QS
2. Variables → New → Data Layer Variable → name = "event_id" → Save as "DLV - event_id"
3. (Repeat) Create DLV variables for gclid, gbraid, wbraid, fbclid, msclkid, form_type
4. Find existing "Google Ads Conversion Tracking" tag for the Form Lead conversion
5. Change its trigger from form_submit → lead_confirmed
6. In the tag config: enable "Pass conversion data with dynamic values"
   Set Transaction ID = {{DLV - event_id}}
7. (Optional) Create a SECOND tag firing on form_submit for GA4 funnel analytics only
8. (Optional) If activating Meta Pixel: create Meta Lead event tag with same event_id mapping
9. Preview workspace → submit a test form → verify both events fire with matching event_id
10. Publish workspace version "Ads tracking event_id deduplication"
```

## Post-deploy validation (first 24h)

### Metrics to watch

- [ ] Form submission count not regressed (Vercel Analytics page views on /thank-you)
- [ ] Lead-notification email delivery not regressed (verify mailbox)
- [ ] Google Ads conversions count not regressed (allow 24h for full attribution)
- [ ] Meta Events Manager → Diagnostics tab shows no high-priority errors
- [ ] Meta Events Manager → Overview shows Lead events flowing if CAPI activated
- [ ] EMQ (Event Match Quality) score ≥ 7.5 if CAPI activated

### Sentinel logs

Server-side:
- `Meta CAPI fire-and-forget error:` log entry appearing in Vercel logs → investigate
- `Meta CAPI non-2xx:` log entry appearing → check token/permissions
- `Email error:` log entry frequency unchanged from baseline

Client-side (browser console while logged-in operator audits):
- No new "Uncaught" or "Unhandled" errors related to clickIds.js, tracking.js, or ThankYouTracking.jsx

## Stop conditions — abort deploy and rollback

| Trigger | Action |
|---|---|
| `npm run build` fails | Stop. Diagnose. Do not deploy. |
| Smoke-test step 6 (dataLayer events) shows missing event_id | Stop. Likely the URL query param isn't being preserved through routing. |
| Smoke-test step 7 (email attribution block) missing | Server-side wiring failed. Check sendEmail.js. |
| Vercel deploy fails or builds in CI fail | Stop. Investigate. |
| First 1 hour shows >10% conversion drop in Google Ads | Rollback immediately per ROLLBACK-PLAN. Tracking change is suspect. |
| Meta CAPI returns >5% non-2xx in first hour | Pause CAPI by unsetting env vars (no rollback needed; site keeps working). |

## Communication

### Pre-deploy

- Notify ops / sales: "Ads tracking deploy at [TIME]. Lead notification emails will include a small attribution footer block; no behavior change for sales workflow."

### Post-deploy

- Notify analytics / reporting: "Google Ads conversions now use `lead_confirmed` event (page-view anchored); GTM tag rewired. Conversions Transaction ID = event_id from form. Dedup window 24h."
- If CAPI activated: "Meta CAPI live. Lead events now flow from server. Expect EMQ score >7.5; expect attribution match-rate lift ~20-30% on iOS / Safari traffic over 7-day rolling window."

## Reviewer signoff

| Role | Name | Date | Notes |
|---|---|---|---|
| Engineer reviewer |   |   |   |
| Ops / Sales lead |   |   |   |
| Analytics owner |   |   |   |

---

## Phase 1 additions (2026-05-11)

Five additional code fixes were merged on top of the original foundation
(commits `c9cefd8`, `8e0ef30`, `5f86dce`, `2774d7f`, `dca4820`). They are
**additive** — no rollback is required for the original layer. But each
introduces a new surface to sanity-check before deploy.

### Pre-deploy additions

- [ ] Browse homepage → submit the homepage `ContactHome` form with the
      DevTools dataLayer panel open. **Confirm `form_submit` event fires
      with `form_type: 'homepage'`, `form_location:
      'homepage_contact_form'`, non-null `event_id`, hidden `state: 'VA'`,
      and any selected `budget_range`, `material_interest`, and
      `hoa_permit_status`.** (Before Phase 1, this form was untracked
      end-to-end.)
- [ ] On homepage, click the floating "Call" button → confirm
      `phone_click` event appears in dataLayer with `phone_source:
      'tel_link'`, `phone_number`, `link_text`, `cta_location`, and the
      current `page_path`. Repeat on `/deck-builder-ashburn-va` to confirm
      city page CTAs now track.
- [ ] DevTools → Network → reload homepage → confirm consent default
      `gtag('consent','default',...)` push appears in document HTML
      before any `gtm.js` network request.
- [ ] DevTools → Console → on any page with a contact form:
      `document.querySelector('[name="ldn_extra_field"]')` returns the
      hidden honeypot input.
- [ ] Submit a form, land on `/thank-you?eid=<UUID>`, reload twice.
      Confirm `dataLayer` contains exactly **one** `lead_confirmed`
      event for that `event_id`.

### Stop conditions — Phase 1 specific

| Trigger | Action |
|---|---|
| Homepage form submit no longer navigates to `/thank-you` | Stop. Likely `useLeadSubmit` wired wrong on ContactHome. |
| Phone CTAs look different visually on city pages | Stop. CallLink style forwarding may be off. |
| Submitting a real form does NOT fire `form_submit` | Stop. Honeypot may be reading a stray real-user field as bot. |
| `lead_confirmed` fires 2+ times on initial /thank-you load (not reload) | Stop. Anti-replay misconfigured. |

### Phone CTA sweep status

Active raw `href="tel:"` anchors should not exist in `src` outside the
`CallLink` implementation/comment. Before deploy, run a raw tel scan if phone
tracking was touched; any active raw phone anchor should be treated as a
regression.

Estimated impact: ~2% of phone CTAs (2 of ~64) — small but worth tracking.

### Post-deploy verification (Phase 1)

- [ ] Within 1 hour: Google Ads conversion volume should **increase**
      (homepage form leads now firing). Track baseline → new ratio.
- [ ] Within 24 hours: confirm no spike in spam form submissions
      reaching the inbox (honeypot working). If spam volume increases,
      check Vercel logs for honeypot trigger frequency.
- [ ] Within 48 hours: Google Ads Diagnostics → confirm Enhanced
      Conversions match rate has not dropped (the user-provided data
      shape changed slightly — added first_name, last_name, zip).

---

After signoff, deploy with confidence. Refer to `ROLLBACK-PLAN.md` if anything goes sideways.
