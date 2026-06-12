# Measurement Integrity Gate - 2026-06-12

## Result

- Scaling gate: RED
- Checks: 11
- Pass: 10
- Warn: 1
- Fail: 0

## Checks

- [PASS] Consent banner is mounted globally
  - Evidence: Root layout renders ConsentBanner under ContactProvider.
- [PASS] Consent Mode defaults run before GTM
  - Evidence: gtm-consent-defaults appears before gtm-script in src/app/layout.js.
- [PASS] CMP has accept/decline and updates consent state
  - Evidence: ConsentBanner stores ldn_cookie_consent and updates ad/analytics consent.
- [PASS] Paid click IDs are captured on landing
  - Evidence: beforeInteractive click-id-capture script stores paid IDs in 90-day cookies.
- [PASS] Visible phone links route through tracked CallLink
  - Evidence: No raw tel: usage outside src/components/CallLink.jsx.
- [PASS] Phone click event exists but remains a secondary signal
  - Evidence: CallLink calls trackPhoneClick; tracking.js documents phone_click as vanity/engagement signal.
  - Risk: A click is not proof of a qualified phone call.
- [PASS] Form lead conversion requires server-confirmed proof token
  - Evidence: ThankYouTracking verifies token before pushing lead_confirmed.
- [PASS] lead_confirmed has source-side anti-replay
  - Evidence: tracking.js guards lead_confirmed with pending and fired session keys.
- [PASS] Voice AI end-of-call webhook can attach call evidence to CRM
  - Evidence: Vapi call-completed endpoint stores transcript/recording note when GHL credentials and contact match exist.
  - Risk: This is call evidence plumbing, not Google Ads website-call attribution.
- [WARN] Google Ads qualified call attribution needs external proof
  - Evidence: Website-side phone clicks are tracked as secondary events and a read-only Google Ads/GTM evidence runbook exists.
  - Risk: Owner/GTM/Google Ads evidence is still required before call conversions can be used for scaling.
- [PASS] Verified proof runtime is guarded against unverified case studies
  - Evidence: Verified project case studies: 0; public review sources: 5; skipped owner-evidence records: 10.
  - Risk: Lead quality proof remains missing until owner evidence is verified.

## Readiness Assessment

The website-side form attribution layer is strong enough for controlled reporting: click IDs are captured, Consent Mode defaults precede GTM, the CMP can grant or deny optional tracking, and the authoritative form event is server-confirmed before `lead_confirmed` fires.

The account is not ready for aggressive scaling because qualified phone-call attribution still needs external Google Ads/GTM evidence and verified project lead-quality proof is still missing. `phone_click` should stay secondary/observational until Google Ads website-call forwarding and qualified-call diagnostics are confirmed.

## Next Actions

- Verify Google Ads call conversion action status, source, counting, and diagnostic history in read-only mode.
- Confirm website call forwarding or call asset attribution is active for the canonical phone number.
- Collect 5-10 real leads with outcome notes and compare CRM lead quality against Ads conversions.
- Add owner-verified project proof packets before using project case studies as trust proof.
