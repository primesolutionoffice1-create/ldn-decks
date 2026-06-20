# LDN Decks — Measurement Gate Verification
**Date:** 2026-06-06 | **Hour:** 2-3

---

## Server-Confirmed Conversion Chain

```
User clicks CTA (Link href="/get-estimate")
     ↓
/get-estimate page loads
  H1: "Request a Deck Estimate in Northern Virginia"
  Component: ContactForm
     ↓
ContactForm onSubmit handler fires
  POST to /api/route (form server action)
  On success → redirect to /thank-you
     ↓
/thank-you page loads
  Component: <ThankYouTracking /> (Suspense-wrapped, "use client")
  ThankYouTracking calls /api/lead-confirmation/verify
     ↓
/api/lead-confirmation/verify/route.js
  POST: { eventId, token }
  verifyLeadConfirmationToken(eventId, token) — HMAC validation
  Returns: { ok: true } on valid token
     ↓
GA4 server-side conversion event fires
```

---

## Chain Component Status

| Component | File | Status | Notes |
|---|---|---|---|
| Estimate page | `src/app/get-estimate/page.js` | VERIFIED — page exists | H1 confirmed, ContactForm present |
| ContactForm | `src/components/ContactForm.jsx` | VERIFIED — onSubmit handler at line 60 | Submits to form server action |
| Thank-you page | `src/app/thank-you/page.js` | VERIFIED — exists | `robots: {index: false}` — correct, not indexed |
| ThankYouTracking | loaded via `<Suspense>` on thank-you page | VERIFIED — present | Fires GA4 event |
| Verify route | `src/app/api/lead-confirmation/verify/route.js` | VERIFIED — 19 lines | HMAC validation via `verifyLeadConfirmationToken` |

---

## /thank-you Page — Conversion Path Notes

The thank-you page contains:
- Success badge + "Message Received!" H1
- 3 next-steps (design expert reviews, on-site call, 3D design + quote)
- Links to `/reviews`, `/showcase`, `/before-and-after`
- Lead magnet CTA: `/lead-magnets/nova-deck-permit-checklist-2026`

**Issue flagged:** Thank-you page links to `/showcase` which may not exist as a standalone page. Check if `/showcase` returns 200 or 404. This is a post-submit trust path.

---

## Verify Route — Code Inspection

```js
// src/app/api/lead-confirmation/verify/route.js
export async function POST(request) {
  const { eventId, token } = await request.json();
  const result = verifyLeadConfirmationToken(eventId, token);
  return NextResponse.json({ ok: result.ok, reason: ... }, { headers: { 'Cache-Control': 'no-store' } });
}
```

`Cache-Control: no-store` on the verify response — correct; prevents caching of conversion confirmation signals.

---

## Measurement Gate Action Items

| Item | Priority | Owner |
|---|---|---|
| PromoModal CTA fix | DONE | Fixed locally; deploy still requires owner approval |
| Verify /showcase page exists (no 404) | MEDIUM | Dev — check route |
| Fill CQ-01–CQ-10 worksheet with real call data | HIGH | Owner — Jobber/call records |
| After CQ worksheet filled → Measurement Gate turns GREEN | — | Unlocks Ads Scaling Gate |
