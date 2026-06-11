# Ads Tracking — Environment Variables

All env vars introduced or used by the ads tracking layer.

## Quick reference

```bash
# === Required for Meta CAPI (optional feature) ===
META_PIXEL_ID=                    # 15-digit numeric Pixel ID from Events Manager
META_CAPI_ACCESS_TOKEN=           # Long token starting with EAA...

# === Optional ===
META_CAPI_TEST_EVENT_CODE=        # Only set during testing; remove for production

# === Pre-existing (unchanged by this PR) ===
EMAIL_USER=                       # Gmail SMTP sender (already configured)
EMAIL_PASS=                       # Gmail app password (already configured)
EMAIL_TO=                         # Optional override for lead notification recipient
```

## Required vs optional

| Variable | Required? | Effect if absent |
|---|---|---|
| `META_PIXEL_ID` | **Optional** | Server-side Meta CAPI no-ops (returns `{success: false, skipped: true}`). Site continues working. No errors logged. |
| `META_CAPI_ACCESS_TOKEN` | **Optional** | Same as above. Both must be present for CAPI to fire. |
| `META_CAPI_TEST_EVENT_CODE` | **Optional** | Without it, events flow to production Meta. With it, events appear ONLY in Events Manager's "Test Events" tab. |
| `EMAIL_USER` / `EMAIL_PASS` | **Required** | Pre-existing — form submission fails without these. Unchanged by this PR. |

**Key principle:** The new Meta CAPI feature is **opt-in via env vars**.
Deploying this branch without setting any Meta env vars is safe — the form
continues working exactly as it did before, plus you get click-ID capture + the
reliability patch as bonus improvements.

**Production gate:** Do not add `META_PIXEL_ID` or
`META_CAPI_ACCESS_TOKEN` to Vercel Production until the Phase 4 activation gate
passes: `npm run scaling:readiness` is GREEN, live call-attribution evidence is
clean/non-empty, live lead-outcome rows meet the documented threshold, and a
separate activation patch with rollback instructions is approved.

## How to obtain each Meta value

### META_PIXEL_ID (1 minute)

1. Go to **Events Manager**: https://business.facebook.com/events_manager2
2. Select the Pixel for `ldndecks.com`
3. The Pixel ID is shown at the top — a 15-digit number like `1234567890123456`

**Don't have a Pixel yet?**
1. Events Manager → "Connect Data Sources" → Web → Meta Pixel
2. Name: "Loudoun Decks"
3. URL: `https://ldndecks.com`
4. Install method: pick "Use a Partner" → "Skip" (we install via GTM, not their partner integrations)

### META_CAPI_ACCESS_TOKEN (1 minute)

1. Events Manager → your Pixel → **Settings** tab
2. Scroll to "**Conversions API**" section
3. Click "**Generate access token**"
4. Copy immediately — the token will NOT be shown again
5. Format: long string starting with `EAA...`

**Token rotation policy:** Tokens don't expire automatically but can be revoked. Document where you store this token (1Password, Vercel env, etc.) and rotate annually.

### META_CAPI_TEST_EVENT_CODE (optional, testing only)

1. Events Manager → your Pixel → **Test Events** tab
2. Scroll to "Test server events"
3. Generate or enter a test code (any string works — e.g. `TEST_2026_05_11`)
4. Set as `META_CAPI_TEST_EVENT_CODE` in env
5. Submit a test form
6. Watch the Test Events tab — your Lead event should appear within 30 sec
7. **Remove this env var before going to production** (test events don't count toward your real attribution data)

## Where to set each value

### Local development

Create `.env.local` in the repo root (gitignored):

```bash
# .env.local — DO NOT COMMIT
META_PIXEL_ID=1234567890123456
META_CAPI_ACCESS_TOKEN=EAAxxxxxxxxxxxxxxxxxxxx
META_CAPI_TEST_EVENT_CODE=TEST_LOCAL_DEV
```

### Vercel (production — future gated activation only)

Do **not** use these steps during the initial tracking deploy. Production Meta
CAPI activation must be a separate gated patch after the activation criteria
above pass.

1. Project → **Settings** → **Environment Variables**
2. Add each:
   - Key: `META_PIXEL_ID`
   - Value: `<your-pixel-id>`
   - Environments: ☑ Production (NOT Preview unless you want CAPI from preview deploys)
3. Repeat for `META_CAPI_ACCESS_TOKEN`
4. Do NOT set `META_CAPI_TEST_EVENT_CODE` in production
5. **Trigger a redeploy** — server actions don't hot-reload env vars in some Vercel configurations
6. Run the production CAPI QA checklist and rollback monitor from
   [DEPLOY-CHECKLIST.md](DEPLOY-CHECKLIST.md) and
   [PHASE-3-4-ACTIVATION-GATES.md](PHASE-3-4-ACTIVATION-GATES.md)

### Other hosting providers

Use whatever env-var mechanism your provider exposes. The values must be available to Next.js server actions at runtime (not just at build time).

## Verifying env is loaded correctly

```bash
# Local dev:
npm run dev
# Submit a test form
# Check terminal output:
#   - If absent: "Meta CAPI fire-and-forget error: META_PIXEL_ID / META_CAPI_ACCESS_TOKEN not configured" → expected when env not set
#   - If present + valid: no error logged; check Events Manager Test Events tab
#   - If present + invalid: "Meta CAPI non-2xx: 400 {...}" → token expired or pixel ID wrong
```

## Security

| Risk | Mitigation |
|---|---|
| Token leaking via git | `.env.local` in `.gitignore`; never paste into commits |
| Token leaking via client bundle | Server-only — file is in `src/server/` and uses `'use server'`; never exposed to client |
| Token rotation lag | Document last-rotation date; annual rotation cadence |
| Wrong-account events | Pixel ID is account-scoped; an attacker would need both Pixel ID + token to forge events |

## When env vars change

Server actions in Next.js read `process.env` at server-start time. After changing env vars:

- **Local dev:** Restart `npm run dev`
- **Vercel:** Trigger a redeploy from the dashboard OR push an empty commit:
  ```bash
  git commit --allow-empty -m "chore: redeploy to pick up env var changes"
  git push
  ```

## Related env vars (pre-existing — for context only)

These were configured BEFORE this PR; do not modify as part of the ads tracking deploy:

```bash
EMAIL_USER=                       # Gmail SMTP sender for lead notification
EMAIL_PASS=                       # Gmail app password
EMAIL_TO=                         # Optional override for recipient (defaults to EMAIL_USER)
```

These power `src/server/sendEmail.js`. Any failure on the Meta CAPI side cannot break these — the CAPI call is wrapped in `.catch()` and runs AFTER the email is sent.
