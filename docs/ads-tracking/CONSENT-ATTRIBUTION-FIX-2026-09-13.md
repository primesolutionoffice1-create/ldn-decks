# Consent and attribution safety patch

Date: September 13, 2026.
Status: implemented; release authorized September 13. Both Preview delivery routes now have actual n8n receipts. Draft PR #165 remains open pending final-head CI and conversion-destination parity validation. No production release of this PR yet. The PR timeline is the authoritative release record.
Branch: `codex/ads-consent-safety-20260913`.
Base: `51c57c9b12a1e7fc7b811476f60a909a19e10ec5` from origin/main.
Worktree: `/private/tmp/ldn-ads-consent-safety-20260913`.

The separate CRO branch and the original dirty SEO checkout were preserved. No Google Ads budgets, bidding, conversion actions or audiences were modified in this patch. No Meta activation, API credentials or offline uploads.

## Implemented

1. Consent defaults execute before click-ID capture. Unknown, invalid, declined or unreadable consent does not permit app-written advertising cookies. Acceptance captures IDs on the current page; consented SPA submissions can capture a later landing. Repeated reads do not renew an unchanged ID's 90-day maximum cookie lifetime. Browser restrictions may shorten it.
2. A localStorage failure no longer hides the consent banner or suppresses Google's four consent updates. The immediate choice remains in memory. Other tabs' consent-storage changes update this tab without a storage-write loop.
3. Cookie readers fail closed on unavailable cookies or malformed URL encoding. Refusal clears app attribution cookies and customer enrichment, while preserving minimal, expiring form-routing receipts needed for confirmation/deduplication.
4. Customer enrichment for advertising is consent-gated. The customer can still request an estimate without agreeing to optional tracking. Contact data needed to deliver that request remains in the operational email/CRM pipeline.
5. Every new form carries `ad_consent`, a version and a recorded-at timestamp. The server strips click IDs/UTMs/Meta browser IDs unless consent is explicitly granted. GHL/n8n payloads carry the consent fields. These fields are a client-submitted consent snapshot, not cryptographically verified consent evidence or authorization to market by phone/email.
6. URLs passed through the edited tracking and lead helpers omit query strings and fragments, preventing signed thank-you proofs, embedded click IDs and arbitrary URL data from entering those payloads. Current-path context is retained; this is not a new first-touch landing-page datastore.
7. Meta CAPI refuses absent/denied advertising consent even if credentials exist. Meta/Pinterest helper retries check current consent before sending. Unconditional noscript ad beacons were removed because this banner cannot obtain consent with JavaScript disabled.
8. Concurrent submits through the shared hook reuse one in-flight promise. Failed/rejected attempts retain the event ID for retry. After terminal success, a subsequent inquiry gets a new ID. Optional tag errors do not turn a delivered request into an error shown to the customer.
9. Direct Ads and thank-you events retain the same transaction/event ID. Storage-blocked SPA confirmation and denied-consent reloads retain non-personal routing. Consented enrichment is consumed on confirmation; its receipt is eligible for use for 30 minutes. Session storage is not a background-expiring database: stale receipts are removed on cleanup/read or when the browser discards the session.
10. Both offline generators now share validation before writing. Duplicate order IDs, bad CSV structure, invalid values, missing actual stage times and braid-only eligible rows fail the batch with nonzero exit. No invented noon/fixed-offset timestamps. Explicit denied/invalid consent blocks eligible exports even if a stale GCLID exists. Historical files without a consent column require manual consent review and produce warnings.
11. Release preview testing exposed an unhandled rejected Server Action fetch: the contact form stayed on Sending. The shared hook now resolves a failure result on rejection so callers can restore their error/retry UI. It preserves the event ID and never retries delivery automatically. Regression coverage includes accepted/declined consent and ordinary/paid-social forms.
12. A concurrent main change (`14041d62`) added the gtag queue fallback and enabled direct Ads conversions for all server-verified thank-you leads without requiring local pending state. Integration preserves that behavior, while retaining consent/sanitization and adding in-memory `lead_confirmed` deduplication when session storage is blocked. Confirmed-lead tests cover absent local receipts, distinct lead IDs, blocked storage, the submit/thank-you shared Ads reservation and one queued conversion when gtag is initially absent.
13. Actual Tag Assistant QA then exposed different conversion labels for GTM and the direct fallback. Google Ads identified the primary action as `Submit lead form (1)`, conversion type ID `7730081169`, label `IxFhCJHb_uUcENihgvU-`. The fallback and regression assertion now match that verified action. Environment overrides remain supported. This is not a change to Ads primary/secondary settings or the live GTM container.

## Measurement boundaries

The existing Google consent-mode measurement approach is preserved: denied consent may still permit consent-mode/cookieless measurement, without the app's customer enrichment. Google tags are not entirely blocked until acceptance. `ads_data_redaction` is enabled. The implementation follows the distinction between default consent and updates described in [Google's consent integration guide](https://developers.google.com/tag-platform/security/guides/consent).

This patch is not a legal-compliance certification or a complete GTM/container audit. Existing GTM tags, third-party automatic events and external CRM workflows must independently honor the consent fields. No claim is made that loaded third-party code is universally disabled by these local helpers.

The UI's existing privacy-policy instructions for clearing site data remain unchanged; a complete CMP preference-management and vendor audit remains separate. A visitor who leaves an ad landing before accepting may lose that original click ID; do not store pre-consent IDs to recover that loss.

## Verification

| Check | Result |
| --- | --- |
| `npm run build` after final application changes | PASS; 904 generated pages |
| `npm run lint` | PASS; informational Babel large-file notice for pre-existing blogData.js |
| `npm run measurement:verify-consent` | PASS; 13 synthetic scenarios |
| `npm run measurement:verify-lead-confirmed` | PASS; ordinary and deferred-confirmation routes |
| `npm run measurement:test-offline` | PASS; 114 synthetic tests |
| `npm run verify:financing` | PASS; protected financing UI intact |
| `git diff --check` | PASS |
| Fresh release build, lint, schema and financing checks | PASS on September 13 |
| Local link audit and deployment guard | PASS; 360 sitemap URLs, 480 internal links, badCount 0 |
| Independent review | Two issues found and fixed; targeted re-review found no actionable regression |
| Chrome preview, desktop and 390x844 mobile | Contact page renders; banner dismisses on Decline; no horizontal overflow; submit remains enabled; no inspected console errors/warnings |

The consent scenarios cover unknown/invalid/refused state, acceptance, blocked localStorage, blocked sessionStorage, malformed/blocked cookies, SPA ID persistence, non-renewal of cookie expiry, revocation, source deduplication, denied-consent reload routing, single-flight submission, retry/new-inquiry IDs, optional-tag failure isolation, server advertising-data sanitization, absent Meta consent/environment variables and SSR safety.

Automated tests use stubs and synthetic values only. Before the isolated QA sink was available, one explicitly labeled non-customer request was attempted on Vercel preview with consent declined, no click IDs, a reserved fictional phone number and the business contact email. That request rejected in the browser; delivery was not established, no matching QA email was found in the connected mailbox, and no successful preview lead POST was observed in the inspected logs. Subsequent successful tests are recorded below. None of these requests is a business lead. No offline upload or Meta Test Event was performed.

Initial release commit `814ebcdc` is in PR #165. Its four remote checks passed and its Vercel preview reached READY. The rejected-fetch fix requires another CI/preview cycle before merge. Live Tag Assistant connected to the existing production GTM container; Conversion Linker and the GA4 base tag fired once, with no form/call conversions on page load. The live GTM form tag uses `lead_confirmed` and `{{DLV - event_id}}`; production JavaScript matches its conversion destination through the environment override. The container's 48-hour diagnostic warning is not proof the tag is currently absent.

### Earlier release follow-up (before authenticated browser QA)

- Commit `09e58864` passed all four remote checks. Its Vercel preview reached READY.
- A second, explicitly labeled synthetic Chrome submission reached the preview server. The UI displayed an error and restored the submit button; it did not navigate to a false success page.
- Preview server logs confirmed missing `EMAIL_USER` and `RESEND_API_KEY`, with GHL unconfigured and `N8N_WEBSITE_INTAKE_WEBHOOK_URL` absent. An existing `EMAIL_PASS` alone cannot enable SMTP. All delivery sinks failed. This is a Preview configuration finding, not evidence of a production email outage.
- Production `EMAIL_USER` exists as a write-only secret. Its value was not recovered or changed. No production environment variables were modified.
- Both available n8n connectors returned `AUTHENTICATION_ERROR` on real API operations despite their health endpoint reporting OK. The proposed isolated QA workflow was not created. The n8n browser session requires sign-in; no API keys were created.
- Vercel CLI authentication works. The branch-specific Preview environment listing contains no overrides. No QA environment variables were added.
- Latest main commit `b42ff0b5` (PR #166) was integrated into this isolated branch without conflicts in merge commit `ba59ea5d`. Those already-merged GEO changes are not new work in PR #165. After integration, build passed with 904 generated pages; lint, schema, financing, 13 consent scenarios, confirmed-lead checks and 114 offline tests passed. Remote checks must pass again on the pushed head.
- While that push was building, main advanced to `14041d62` in `tracking.js`, creating a PR conflict. The conflict was resolved by retaining both the new verified-conversion behavior and this PR's error isolation. The expanded confirmed-lead tests, consent suite, final build (904 pages) and lint pass; independent review found no remaining actionable issue in the changed lead helpers. The integrated head requires fresh remote CI. The conversion environment override remains authoritative and requires live revalidation before release.
- Repository rules inspected during release did not show enforced review/status-check requirements. This is a governance gap, not permission to bypass the documented PR and verification process; no rules were changed.

### Actual Preview delivery and tag QA, September 13

- Authenticated Chrome access to n8n succeeded. No API keys were created and no existing operational workflows were edited.
- Created unpublished workflow `TEMP QA ONLY - LDN PR165 Consent Delivery - 2026-09-13` (`Ofi6eVQVX0PLKeDr`). It accepts only the labeled synthetic Preview fixture, validates identifiers/consent and returns a minimized receipt. It has no email/SMS/Ads/CRM output. Manual execution records are retained for review.
- Temporarily set `N8N_WEBSITE_INTAKE_WEBHOOK_URL` only for the tracking branch's Preview environment and redeployed application head `0db446e2` to Preview deployment `dpl_43nkcLXESDYToPv81omCLQjGi4Y7`. The deployment reached READY. Production environment variables were not changed.

| Browser submission | Receipt evidence | Confirmed result |
| --- | --- | --- |
| `/contact`, advertising consent declined | [n8n execution 826](https://marianazu1.app.n8n.cloud/workflow/Ofi6eVQVX0PLKeDr/executions/826), received 19:07:51.868 UTC | Succeeded; `event_id=32103a69-81b3-4370-ae84-f9c829782378`; lead ID `WEB-` plus the same event ID; `ad_consent=denied`; no click IDs/UTMs |
| `/deck-project-estimate`, advertising consent accepted | [n8n execution 827](https://marianazu1.app.n8n.cloud/workflow/Ofi6eVQVX0PLKeDr/executions/827), received 19:12:44.921 UTC | Succeeded; `event_id=ab79af35-6c2f-4132-8df9-6bed5291f76e`; matching lead ID; `ad_consent=granted`; no click IDs/UTMs intentionally supplied |

Both receipts include the required operational name/email/phone/city/service/message fields. Both browsers navigated to signed thank-you URLs with matching event IDs. Refresh and back/forward retained those IDs, and n8n still showed exactly two successful executions and no active execution. The inspected paid-social form console contained no errors/warnings. These checks establish delivery to the isolated sink, not production SMTP or CRM delivery and not platform-attributed lead counts.

Tag Assistant connected to the same Preview hostname and GTM container `GTM-N87MG6QS` in Preview mode. A thank-you visit without a proof emitted no lead conversion. Reopening the second test's signed confirmation emitted `lead_confirmed` and the direct `conversion` event. GTM's form conversion and GA4 `generate_lead` each fired once for that inspected confirmation; the call conversion did not fire. GTM's effective Transaction ID exactly matched execution 827's event ID. The edited events' page location omitted the query/proof. This exercises the successful confirmation path, but is not a complete third-party URL/PII audit or proof of Ads reporting deduplication.

The test also found a real destination mismatch: GTM used `AW-16888402136/IxFhCJHb_uUcENihgvU-`, while the direct fallback used `AW-16888402136/KNF1CJur4tIbENihgvU-`. Read-only Google Ads inspection confirmed `Submit lead form (1)` is the primary Website action, with Count One, 90-day click window and the `IxFhCJHb_uUcENihgvU-` label. Enhanced Conversions is enabled in its settings; actual matching quality is not established by that setting. The code default and its test were corrected to this primary action. Both destinations must be rechecked on the resulting final Preview before release. [Google's transaction-ID documentation](https://support.google.com/google-ads/answer/6386790?hl=en) limits this deduplication to the same conversion action; a shared ID alone is not sufficient across different labels.

Cleanup: removed the branch-only QA webhook environment variable; Vercel confirmed no remaining branch-specific Preview overrides. The n8n workflow remains unpublished and is not listening. Removing an environment variable does not mutate an existing deployment snapshot: the QA deployment still contains the old test URL, which is not registered while the manual workflow is idle. Future Preview builds use the original environment. No QA sink was enabled in Production. Exclude these synthetic event IDs from business-lead, offline-upload and revenue reporting.

Next release gate: final-head build/CI and Preview destination parity after the label correction, then the documented PR review/merge workflow. After deployment, verify a labeled production receipt using the unchanged operational destination. Safari/iOS, CRM reconciliation, vendor consent audit and offline-import readiness remain explicitly unverified; they must not be represented as completed or used to justify scaling.

The legacy `npm run ads:verify-meta-route` browser check could not run: its localhost:9223 CDP endpoint was unavailable/blocked. It was not bypassed or retried with another browser-control mechanism. The UI checks used the supported CUA browser instead; a live Meta route/event test remains unverified.

The new consent and offline checks are wired into `.github/workflows/production-governance.yml`. Remote CI and preview runtime results must be recorded in the PR before merge.

## Before release

1. Review the tracking-only diff and create a PR, separate from the CRO page work. Run required CI; do not bypass failures or push to main.
2. On an isolated preview/test destination, verify a labeled form through actual delivery and confirmation with test-only attribution; check ordinary and paid-social routes, slow network, retries, back/forward and refresh. Test Safari/iOS, not merely a Chrome viewport.
3. In GTM Preview/Tag Assistant, verify consent defaults precede tags, changes apply on the current page and optional vendors obey refusals. Check raw customer fields do not reach unrelated GA4/custom tags. Verify live Google conversion destination and `transaction_id = event_id` parity; source tests cannot establish cross-tag/action deduplication.
4. Reconcile the previously observed four campaign call conversions and two form All conversions with unique CRM records before stating actual qualified CPL. No CRM reconciliation was performed here.
5. Validate the consent fields are retained by downstream CRM workflows. Historical offline files need manual proof of consent, real stage timestamps, qualification and reconciled unique leads. Existing proxy values for Qualified Lead/Estimate Scheduled are NOT booked revenue and must not become a tROAS revenue target.
6. Release after review, then validate real production leads before any remarketing/budget expansion. This patch provides no guarantee of more leads or lower CPL.

## Risk and rollback

Risk: MEDIUM. The shared form and tracking paths affect all lead forms. Core lead delivery remains independent of advertising consent; tests cover that contract, but production delivery is still a release gate. Declined/legacy clients will contribute less deterministic advertising enrichment by design. Cached old clients without a consent field remain able to submit, but their advertising IDs are stripped.

The in-flight guard is not a durable server idempotency store. A retry after an ambiguous network failure can still duplicate an email/CRM delivery; downstream systems should upsert/deduplicate by the stable event ID. Distinct phone/form contacts still require CRM-level deduplication.

When session storage is unavailable, the new confirmation set prevents duplicate events within the current document only. It cannot survive a full reload or a new tab. Reusing a still-valid proof can emit another platform event; Google transaction IDs must match the same conversion action for platform deduplication. No universal cross-session or cross-platform deduplication claim is made.

No production rollback is currently needed. If a future release causes a lead-submission regression, revert only this scoped PR through the protected-main workflow and verify delivery. Avoid reverting unrelated SEO/CRO work. Do not re-enable remarketing merely to compensate for a measurement regression.

Failed/empty offline runs leave existing files untouched. An old CSV must not be mistaken for fresh validation; check the current run's exit status and input before considering any upload.

## Local review

Preview: http://localhost:3218/contact (loopback-only server; no production deployment).

Initial git operations: `git fetch origin main`; `git worktree add -b codex/ads-consent-safety-20260913 /private/tmp/ldn-ads-consent-safety-20260913 origin/main`; read-only status/diff checks. Release preparation fetched main again and verified zero divergence from the base. Commit hashes, PR URL, runtime evidence and deployment status belong in the PR timeline and release handoff.
