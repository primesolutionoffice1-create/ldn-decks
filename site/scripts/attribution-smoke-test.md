# Attribution Smoke Test — Manual Procedure

A minimal browser-side smoke test the operator runs locally to confirm Phase 1
behaves correctly before any GTM container changes. Takes ~5 minutes.

This is **not** a substitute for `docs/ads-tracking/QA-TEST-PLAN.md` Section 5
— it's the rapid sanity check you run after a code change or before opening
GTM Preview Mode.

---

## Prereqs

1. Node + npm installed
2. `.env.local` minimally populated (EMAIL_USER, EMAIL_PASS — the rest can be empty)
3. Port 3000 free

## Procedure

In one terminal:

```bash
npm run dev
```

Wait for `Ready in ...` line. Then in your browser:

### Test 1 — Click ID capture

```
URL:        http://localhost:3000/?gclid=SMOKE1
DevTools:   Application → Cookies → http://localhost:3000
```

**Expected:** cookie `gclid` exists with value `SMOKE1`. Also try
`?wbraid=SMOKE2`, `?fbclid=SMOKE3` — each should create its own cookie.

### Test 2 — Attribution debug installed

```
URL:        http://localhost:3000/
DevTools:   Console → window.__ldnAttr
```

**Expected:** object with `installedAt`, `clickIds`, `history: []`, `dedupHits: 0`,
and methods `snapshot()`, `clear()`, `clickIdsLive`.

If `window.__ldnAttr` is `undefined`: the debug helper isn't running. Check
that `LayoutContent.jsx` imports + calls `installAttributionDebug()`.

### Test 3 — Form submit chain (ContactForm modal)

```
URL:        http://localhost:3000/contact
Action:     Fill the form completely. Submit.
DevTools:   Network tab: watch for POST to /contact RSC endpoint
            Console:     window.__ldnAttr.snapshot()
```

**Expected:**
- Server action POST returns 200 with `{ success: true, ... }`
- Navigate to `/thank-you?eid=<UUID>`
- `window.__ldnAttr.snapshot().history` shows two entries:
  - `form_submit` with the UUID
  - `lead_confirmed` with the same UUID
- Email arrives in inbox with "Attribution (paid ad click)" block (if `?gclid=...`
  was on the original page)

### Test 4 — Homepage form (the critical previously-broken path)

```
URL:        http://localhost:3000/?gclid=SMOKE_HOMEPAGE
Action:     Fill homepage form. Submit.
DevTools:   Console → window.__ldnAttr.snapshot()
```

**Expected:**
- `history` shows `form_submit` with `form_type: 'homepage'`
- URL is `/thank-you?eid=<UUID>` (NOT just `/thank-you`)
- `history` shows `lead_confirmed` with the same UUID
- Email arrives with Attribution block showing `gclid: SMOKE_HOMEPAGE`

**If `form_type` is `'quote'` instead of `'homepage'`**: ContactHome is using
the wrong hook instantiation. Fix #1 may have regressed.

### Test 5 — Phone CTA tracking sweep

```
URL:        http://localhost:3000/deck-builder-ashburn-va
Action:     Click "Call (571) 655-7207" button at top
DevTools:   Console → window.__ldnAttr.snapshot()
```

**Expected:** `phone_click` event in history with `phone_source: 'tel_link'` and
`page: '/deck-builder-ashburn-va'`. Also test the floating call button (bottom
right) and the sticky mobile CTA (visible on mobile viewports).

Sample 5 different city pages to verify the sweep covered everything.

### Test 6 — Reload anti-replay

```
URL:        http://localhost:3000/thank-you?eid=manual-test-uuid-001
DevTools:   Console → window.__ldnAttr.snapshot()
Action:     Note history length. Reload page (Cmd+R / F5). Snapshot again.
```

**Expected after reload:**
- `history` still has exactly 1 `lead_confirmed` entry for `eid=manual-test-uuid-001`
- `dedupHits` is now `>= 1`

If `history` shows 2 `lead_confirmed` entries: anti-replay (fix #10) regressed.

### Test 7 — Honeypot

```
URL:        http://localhost:3000/contact (or anywhere with a form)
DevTools:   Console:
            > document.querySelector('[name="company_website"]').value = 'http://bot.test'
            > // fill name/email/phone with anything
            > document.querySelector('form').requestSubmit()
```

**Expected:**
- URL stays on the form page (no navigation to /thank-you)
- `window.__ldnAttr.snapshot().history` does NOT contain a `form_submit` entry
- Server console shows: `[sendContactEmail] honeypot triggered, silently dropping submission`
- No email arrives

### Test 8 — Consent default order

```
URL:        http://localhost:3000/ (hard reload — Cmd+Shift+R)
DevTools:   Network → filter by 'googletagmanager.com'
            Console:  window.dataLayer[0]
```

**Expected:**
- `window.dataLayer[0]` is the consent default push: `["consent", "default", {ad_storage: "granted", ...}]`
- The gtm.js network request appears AFTER `dataLayer[0]` is set

### Test 9 — SSR safety

```
Action:     View source on http://localhost:3000/ (right-click → View Page Source)
```

**Expected:**
- No `window.__ldnAttr` reference in HTML (it's client-only)
- The inline beforeInteractive script for cookie capture IS in the HTML
- The inline beforeInteractive script for consent defaults IS in the HTML
- gtm.js script reference is present (will load afterInteractive)

No hydration mismatch errors in the dev server console.

---

## Pass criteria

All 9 tests pass → Phase 1 code is healthy. Open GTM Preview Mode and proceed
to `docs/tracking-audit/GTM-VALIDATION-REPORT.md`.

## Fail criteria

Any test fails → do NOT proceed to GTM work. Diagnose the code issue first.
Likely culprits per test:

| Test | Common failure cause |
|---|---|
| 1 | Cookie SameSite issue, or beforeInteractive script not running |
| 2 | LayoutContent.jsx not importing installAttributionDebug |
| 3 | useLeadSubmit hook not threading event_id |
| 4 | ContactHome not using useLeadSubmit |
| 5 | CallLink not imported in the specific page (rare; check sweep coverage) |
| 6 | sessionStorage write failing, or trackLeadConfirmed not calling recordDedupHit |
| 7 | Honeypot field missing from form, or sendEmail.js check absent |
| 8 | Consent script in wrong load strategy |
| 9 | Server / client boundary mismatch |
