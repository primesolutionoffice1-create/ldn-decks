# Ads Tracking — Rollback Plan

How to revert the ads tracking instrumentation if anything goes wrong.

## Rollback decision tree

```
Site is broken (build failed / runtime errors)
  → Full revert (Tier 1)

Site works but conversion tracking is broken
  (no Google Ads conversions firing, no lead events in Meta)
  → Partial rollback — just the new event wiring (Tier 2)

Meta CAPI throws errors but site works + Google tracking works
  → Disable Meta CAPI only (Tier 3 — fastest, zero code changes)

Cookies appear malformed / not being read
  → Disable click-ID capture only (Tier 4)

Just want to disable everything temporarily without code revert
  → Feature-flag via env (Tier 5)
```

## Tier 1 — Full revert (60 seconds, blast radius: zero)

If site is broken or the entire feature needs to come out:

```bash
cd /Users/ldndecks/ldn-decks-next

# Find the tracking commit
git log --oneline feat/ads-tracking-instrumentation

# Revert by branch swap (if not yet merged to main):
git checkout main
# (the tracking branch never made it to production — done)

# Revert if already merged to main:
git revert <COMMIT_HASH>           # creates a new commit that undoes everything
git push origin main

# Or hard reset if you have authority (CAUTION):
# git reset --hard <PREVIOUS_COMMIT_HASH>
# git push --force origin main
```

After revert:
- Site reverts to pre-tracking state (no click IDs captured, no event_id, no CAPI calls)
- Existing form submissions continue to work identically to pre-deploy
- Any client cookies from before the revert (gclid, fbclid, etc.) persist until natural 90-day expiry — they're benign
- Existing GTM tags fire on `form_submit` again (which they did before this PR anyway)

**Data loss:** Zero. No durable state was created by this branch.

## Tier 2 — Partial rollback (keep click-ID capture, remove event_id + CAPI)

Use when click-ID capture is fine but the `lead_confirmed` + CAPI layers are causing issues:

```bash
git revert <COMMIT_HASH> --no-commit
# Stage only files NOT related to click-ID capture
git restore --staged src/lib/clickIds.js src/app/layout.js
# Drop the rest
git checkout HEAD -- src/components/ThankYouTracking.jsx \
                     src/server/metaCapi.js \
                     src/lib/tracking.js \
                     src/components/ContactForm.jsx \
                     src/app/thank-you/page.js \
                     src/server/sendEmail.js
git commit -m "revert(ads): conversion event reliability + Meta CAPI"
```

**Note:** This is complex; in practice prefer Tier 1 + a fresh implementation if both layers are problematic.

## Tier 3 — Disable Meta CAPI only (zero code changes)

If Meta CAPI is misfiring but the rest is fine:

```bash
# In Vercel (or your env provider):
# Settings → Environment Variables → Production
# Remove (or empty) BOTH:
#   META_PIXEL_ID
#   META_CAPI_ACCESS_TOKEN

# Trigger a redeploy to refresh server actions:
# (Vercel: redeploy from dashboard, or push an empty commit)
```

After: `sendMetaLeadEvent` returns `{success: false, skipped: true}` on every call. No HTTP request fires. Form submissions and lead emails continue normally.

**This is the cleanest "just turn it off" rollback.** No code changes, instant effect (after redeploy).

## Tier 4 — Disable click-ID capture (one file revert)

If click-ID cookies are causing issues with EU traffic / GDPR or otherwise:

```bash
git checkout HEAD~1 -- src/app/layout.js
git commit -m "revert(ads): disable click-ID URL→cookie capture script"
```

Effect: the `<Script id="click-id-capture">` block is removed from `<head>`. Cookies stop being written. Existing cookies expire over 90 days naturally.

`ContactForm.jsx` continues calling `getClickIds()` — it just returns all nulls. No error. The attribution block in lead emails becomes empty. Server-side CAPI receives no fbclid (so fbc field is omitted from event payload, lowering EMQ slightly).

## Tier 5 — Soft disable everything (no code changes, env-only)

Useful for emergency or staged rollback:

```bash
# Vercel env:
# Add this single flag, then redeploy:
ADS_TRACKING_DISABLED=true
```

**Caveat:** The current code does NOT honor a `ADS_TRACKING_DISABLED` flag yet. To enable Tier 5, add to `src/lib/clickIds.js`:

```js
export function getClickIds() {
  if (process.env.NEXT_PUBLIC_ADS_TRACKING_DISABLED === 'true') {
    return CLICK_ID_KEYS.reduce((acc, k) => { acc[k] = null; return acc; }, {});
  }
  // ... existing logic
}
```

And to `src/server/metaCapi.js`:

```js
if (process.env.ADS_TRACKING_DISABLED === 'true') {
  return { success: false, skipped: true, error: 'Globally disabled via ADS_TRACKING_DISABLED' };
}
```

This is a recommended addition for Phase-2 hardening (not currently shipped). Add to the next iteration if a kill-switch becomes desirable.

## What if I rolled back wrong?

```bash
# See your reflog (git remembers everything for 30 days):
git reflog

# Restore to a specific reflog entry:
git reset --hard HEAD@{N}  # where N is the reflog position
```

Nothing in this PR creates external state (no DB migrations, no third-party config changes, no scheduled jobs). All rollbacks are pure git operations.

## Communication template if rollback is executed

```
[ROLLBACK] Ads tracking instrumentation rolled back at [TIME].

Reason: [brief description]

Impact:
- Site functionality: [unchanged / restored / N/A]
- Lead-notification emails: [reverted to no attribution block / unchanged]
- Google Ads conversions: [continue firing on form_submit event / paused]
- Meta CAPI events: [disabled — no events flowing to Meta]

Next steps:
- [Investigation owner] will diagnose root cause by [DATE]
- Re-deploy planned for [DATE] after fix verified in staging
- No customer-facing communication needed (internal infra change)
```

## Lessons recorded

(Fill in retrospectively if rollback executed.)

| Date | Trigger | Tier used | Root cause | Prevention |
|---|---|---|---|---|
|   |   |   |   |   |
