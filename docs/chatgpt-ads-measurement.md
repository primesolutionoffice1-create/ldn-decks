# LDN ChatGPT Ads measurement

Prepared 2026-11-17 from production repository `primesolutionoffice1-create/ldn-decks`, base `bddb19478c6b9ad7ea2d32b6d9e6577e6979fc5a`. Configuration remains disabled by default. Nick authorized local final tests on 2026-11-17; the offline suites, targeted lint and full Next.js build passed. No live event, push, deploy or merge was performed.

## Activation settings

Public pixel ID created in the Loudoun Decks account: `PJjrSCw6qbjbU6F3QDVLWv`.

These are build-time, public Next.js environment variables, not API secrets:

```text
NEXT_PUBLIC_OPENAI_PIXEL_ID=PJjrSCw6qbjbU6F3QDVLWv
NEXT_PUBLIC_OPENAI_MEASUREMENT_ENABLED=false
NEXT_PUBLIC_OPENAI_AAM_PRIVACY_APPROVED=false
```

Leave the two flags false until privacy authorization, disclosures, and final verification are complete. The second flag is an explicit owner-approval gate, **not an API control**. Official OpenAI help states that automatic advanced matching (AAM) is enabled by default outside Japan and its enable/disable control is only available for Japanese ad accounts. Root inspected the LDN Edit pixel UI and found no toggle. Therefore this implementation cannot promise AAM OFF. Our calls pass no `user` object or form fields, but the SDK can still detect and hash supported customer information from forms or other site sources. Nick approved this behavior on 2026-11-17: “Da, cu consimțământ și informare”. This authorizes preparation with visitor consent and disclosure; it does not itself authorize tests, merge or live activation. Keep the flag false until the drafted disclosures and integration are ready for the separately authorized release. Do not insert a Conversions API key into any `NEXT_PUBLIC_` variable.

## Behavior

- The SDK loads only on `ldndecks.com` / `www.ldndecks.com`, with both flags true, a pixel ID, and both the existing site consent and the versioned OpenAI choice (`ldn_openai_measurement_consent_v1`) accepted. Prior generic consent alone cannot activate AAM. When enabled, the banner resurfaces for prior accepted users without this new choice; prior declined users remain blocked.
- `/admin`, `/api`, and URLs containing confirmation `proof` or `eid` are excluded.
- SDK consent is false before initialization; consent is granted only after checking the current site choice again. A decline dispatches `ldn:consent-declined`, which disables the owned SDK and removes its attribution cookies under the documented consent API.
- Loading the SDK captures its attribution identifier after consent. This integration deliberately sends **no page view events**.
- `ThankYouTracking` verifies the server-issued receipt, then calls existing `trackLeadConfirmed`. Only this path calls `trackOpenAIConfirmedLead` with `lead_created` / `customer_action`.
- `form_submit`, CTA clicks, failed submissions and an unverified thank-you page do not send an OpenAI lead conversion.
- Use the original opaque lead event ID for deduplication. The adapter claims the ID in memory and session storage before dispatch. It does not replay declined-consent events or automatically retry uncertain dispatches.
- `opt_out: true` excludes the event from future user-level personalization under the documented API. This is distinct from advanced matching.
- Existing `oaiq` ownership causes a fail-closed result, preventing a second integration from silently reinitializing the pixel.
- No revenue/lead value is fabricated, no `appointment_scheduled` is emitted without a real booking integration, and no ad campaign objective changes are included.
- A return value of true means queued dispatch, not server delivery or attributed conversion.

## Remaining configuration and final validation

1. Owner AAM approval RECEIVED on 2026-11-17, conditional on visitor consent and website disclosure. Review the prepared privacy-policy/banner text and verify the versioned consent behavior at the final authorized test stage. AAM OFF is not an available LDN account setting. Production privacy/activation flags remain false pending release.
2. Account setup completed by the parent operator on 2026-11-17: source and standard `lead_created` conversion event CREATED and verified by UI/native readback, with a 30-day click window and 1-day view window; no campaign is linked. Reuse these records, do not recreate them. This does not prove event delivery or passing diagnostics. Keep page views separate from lead conversions.
3. Review these files and run the final authorized offline checks: missing config and denied consent load nothing; approved consent initializes once; declined consent while loading remains denied; another `oaiq` owner blocks takeover; verified lead dispatches once; invalid/duplicate IDs and sensitive routes do not dispatch; blocked session storage preserves in-memory dedup.
4. Local tests authorized and completed on 2026-11-17 (results below). No PR or push is included in this local stage because deployment and merge remain separate steps.
5. The patch adds the official exact hosts to the existing report-only CSP: `script-src https://bzrcdn.openai.com`; `connect-src https://bzr.openai.com https://bzrcdn.openai.com`; `img-src https://bzr.openai.com`. Other directives and existing security controls are preserved; no new wildcard, unsafe-inline, or switch to enforcement is introduced. This remains a local patch, not a deployed header change.
6. The three public settings are saved in Vercel production project ldn-decks-9j57 (pixel ID plus measurement=false and privacy gate=false), with UI save confirmation. No redeploy was requested. Nick merges the reviewed change after final checks; release settings and deployment follow the authorized activation stage. Preview hosts remain blocked even if they inherit the variables.
7. At the authorized final stage, verify one accepted real/test request produces exactly one observed OpenAI event, and rejected/direct thank-you visits produce none. SDK test events count in normal analytics; agree on labeling and interpretation first.
8. Only after delivery is evidenced should the owner decide whether to switch any campaign to conversion optimization. Measurement setup alone is not that authorization.

Rollback: set `NEXT_PUBLIC_OPENAI_MEASUREMENT_ENABLED=false` and rebuild the production deployment, or revert this isolated change. Already transmitted events cannot be withdrawn by reverting code. Existing Google/Meta/Pinterest/Reddit dispatch remains unchanged.

## Official references read 2026-11-17

- https://developers.openai.com/ads/measurement-pixel
- https://developers.openai.com/ads/supported-events
- https://help.openai.com/en/articles/20001409-conversion-measurement

The pixel documentation states that `source_url` is the current page origin, not the full page URL. No undocumented URL override or advanced-matching init flag is assumed. Vendor behavior and account configuration still require final runtime validation.

## Confirmation-path review

The current submit hook stores `{eventId, proof}` in session storage and navigates to plain `/thank-you`; it does not append `proof` or `eid` to the URL. `ThankYouTracking` consumes that receipt and verifies it through `/api/lead-confirmation/verify` before calling `trackLeadConfirmed`. Thus the query guard does not block the normal successful path. If session storage is unavailable, the existing submit hook stays on the form with inline success and does not invoke the confirmed-lead path; this patch does not change that behavior and does not claim complete measurement coverage in that case.

## Review and local test results

Readback covered versioned visitor consent (including blocked localStorage), async initialization, denied consent before SDK load completion, in-memory/session dedup, existing oaiq ownership, and the server-verified call site. Promise failures are caught by the callers and cannot block form success. SDK script failures are not automatically retried; uncertain measurement cannot create a lead retry. A consent-accept event only initializes attribution and never replays a previously dropped lead. Native receipt in Ads Manager and actual SDK behavior remain unverified until final tests.


### Authorized local validation — 2026-11-17

- `node scripts/verify-openai-tracking.mjs`: PASS, 16 offline cases; SDK and confirmation responses simulated, network forbidden in VM.
- `node scripts/verify-consent-tracking.mjs`: PASS.
- `node scripts/verify-lead-confirmed-tracking.mjs`: PASS; harness now stubs and observes the new OpenAI adapter, asserting zero dispatch before confirmation and exactly one after duplicate confirmed calls.
- `node scripts/verify-reddit-tracking.mjs`: PASS. An obsolete URL-proof assertion also failed on unchanged base HEAD; it was updated to test the current POST/server-verified receipt contract. Production Reddit code was not changed.
- Targeted ESLint on changed JS/JSX/MJS files: PASS.
- `npm run build` with both OpenAI flags false and telemetry disabled: PASS; 921/921 pages generated, TypeScript passed. Soro feed redirected to an unused loopback port for this build; external feed availability/content is not verified by this result. No production environment file or secrets were copied.
- `git diff --cached --check`: PASS.

Dependencies installed from the existing lockfile with `npm ci --ignore-scripts --no-audit --no-fund`. The build does not exercise the browser SDK. These results prove local adapter behavior and compilation, not vendor SDK AAM behavior, live consent UX, delivery, attribution or campaign optimization. The existing storage-unavailable confirmation gap described above remains. Both deployment flags stay false. Nick still owns merge; live activation and a live delivery check require their separate authorized stage.

## Local funnel extension — 17 November 2026 (supersedes storage-gap notes above)

User authorized implementation of the complete paid ChatGPT website funnel. The additional changes remain LOCAL and activation flags remain false. The prior no-sessionStorage limitation is now addressed locally: a signed server receipt is verified through the same endpoint inline, and the same deduplicated lead dispatcher runs without putting credentials in URLs. Invalid/missing proof, honeypot and failed delivery remain suppressed. In-flight and post-success calls from the same form-hook instance cannot submit twice. This is not durable server idempotency or business-contact deduplication.

Existing consented UTM/click cookies are replaced as a whole touch when a new touch is observed, and unchanged reads do not refresh their lifetime. The existing 90-day cookie retention is unchanged; legacy-cookie evidence is labelled separately and is not a 30-day native attribution claim. Current explicit in-memory consent applies with blocked localStorage/cookies. A sessionStorage context (memory fallback) uses a fixed 30-minute window from capture, preserving first landing and origin-only external referral. Latest session touch is separate from the immutable arrival snapshot. A direct new session with only legacy cookies cannot create a new paid arrival.

The existing Vercel route gains chatgpt_arrival, once per eligible consented session, behind both OpenAI flags, the versioned choice and the same production/private-route/query guards as the SDK. Existing lead_confirmed receives bounded channel/campaign/path fields only after generic analytics consent. Its arrival_observed plus immutable arrival_channel/arrival_campaign identify the subset with an arrival dispatch, separately from latest-touch campaign. Arrival-dispatch state is not proof of Vercel collection. A funnel rate must use matching observed-session/arrival cohorts; never divide all backend leads by consented arrivals, native clicks or a different date cohort. Sessions do not establish unique people; cohort timestamps/native attribution/CRM outcomes require their own reporting evidence. Form-start events remain deferred.

All sinks now receive server-normalized attribution URLs and consent-filtered identifiers. HTML email interpolations are escaped. GHL maps consented ChatGPT paid/organic evidence before static form source labels, preserving the original label separately. n8n remains the existing intake, with extra channel/basis/first-landing/submit-path fields; no workflow was created or changed. The response reports per-sink delivery acknowledgments, not durable CRM persistence or qualification. Actual GHL/n8n downstream field mappings must be read back at release; payload fields alone do not prove dashboard columns exist. OpenAI click references remain SDK-owned and are not added to generic CRM identifiers.

Local checks: 13 new offline funnel cases, expanded inline-proof/concurrency cases in existing confirmed-lead suite, 16 OpenAI cases, consent and Reddit suites, targeted lint, and full disabled-flag Next.js build PASS. Two independent review passes (Spec and Standards/security) reported findings which were fixed and re-reviewed without outstanding material findings. SDK, Vercel collection, CRM persistence and native OpenAI receipt/attribution remain unverified live.

Heavy validation transport was attempted through the configured Hermes dispatcher, but SSH host-key verification failed before execution. No trust bypass was used; the local candidate was validated here. No code was sent to or run on that host.
