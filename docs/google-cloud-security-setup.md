# Google Cloud Security Setup

## Current Issue Summary

Google Cloud is warning that one or more projects with the Gemini API / Generative Language API enabled have unrestricted API keys. This is a Google Cloud configuration issue, not a Next.js build issue.

Repository audit result:

- No active Gemini / Generative Language API client was found in `src`, `public`, or `scripts`.
- No active DataForSEO integration was found in `src`, `public`, or `scripts`.
- Server-side production integrations were found for email, GHL, Meta CAPI, Twilio, Vapi, IndexNow, CSP reports, and web-vitals collection.
- Admin content exists at `/admin/operations`.
- Admin routes are now protected by Basic Auth through `src/proxy.js`.
- Admin, API, and draft routes are excluded from sitemap generation and blocked in generated robots rules.

Do not delete or rotate live cloud resources until the key owner and active usage are confirmed.

## Google Cloud Manual Checklist

1. Open Google Cloud Console.
2. Select the correct LDN Decks project.
3. Go to `APIs & Services` -> `Credentials`.
4. Review every API key listed.
5. Rename each key by purpose.
6. For Gemini-only keys, open the key and set `API restrictions` to `Restrict key`.
7. Select only `Generative Language API`.
8. For Google Maps browser keys, restrict to only the required Maps APIs.
9. For browser keys, set `Application restrictions` to `HTTP referrers`.
10. Add only approved domains:
    - `https://ldndecks.com/*`
    - `https://www.ldndecks.com/*`
    - Vercel preview domains only if preview deployments need the key.
11. For server keys, set `Application restrictions` to server IP addresses where the hosting platform provides stable egress IPs.
12. If stable server IP restriction is not available, keep API restrictions strict and keep the key server-side only.
13. Delete unused keys only after confirming they are not referenced in Vercel, local env files, scripts, or third-party tools.
14. Rotate any key that may have been exposed.
15. Enable billing budgets and alerts.
16. Enable API usage monitoring.
17. Review IAM members and service accounts.
18. Remove unknown or unnecessary access.
19. Verify there are no unrestricted API keys remaining.

## Current Warning Remediation

Warning:

`Projects enabled with Gemini API / generativelanguage.googleapis.com have unrestricted API keys.`

Exact fix:

1. Open Google Cloud Console.
2. Go to `APIs & Services`.
3. Open `Credentials`.
4. Click each unrestricted API key.
5. Under `API restrictions`, choose `Restrict key`.
6. For Gemini-only keys, select `Generative Language API`.
7. Under `Application restrictions`, choose the safest applicable option:
   - `HTTP referrers` only for browser-safe public keys.
   - `IP addresses` for server keys if stable production egress IPs exist.
   - No browser exposure for Gemini server keys.
8. Save.
9. Wait up to 24 hours for the warning banner to clear.
10. Verify the app and any automation still works.
11. Rotate the key if it may have been exposed in code, logs, screenshots, browser bundles, or third-party systems.

## API Key Restriction Matrix

| Key name | Purpose | API restrictions | Application restrictions | Env var | Server-only | Public | Rotate? | Delete? |
|---|---|---|---|---|---:|---:|---:|---:|
| `prod-gemini-server-key` | Gemini server calls | Generative Language API only | Server IP if possible | `GEMINI_API_KEY` | Yes | No | Yes if exposed | Only if unused |
| `dev-gemini-server-key` | Local Gemini development | Generative Language API only | Developer IP if practical | `GEMINI_API_KEY` | Yes | No | Yes if exposed | Only if unused |
| `prod-maps-browser-key` | Public map UI if needed | Exact Maps APIs required | HTTP referrers for production domains | `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | No | Yes | Yes if unrestricted | Only if unused |
| `dev-maps-browser-key` | Local map UI if needed | Exact Maps APIs required | Localhost and dev referrers | `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | No | Yes | Yes if exposed | Only if unused |
| `seo-dashboard-server-key` | Server-side SEO tools | Exact API only, such as CrUX if used | Server IP if possible | `GOOGLE_CRUX_API_KEY` | Yes | No | Yes if exposed | Only if unused |
| DataForSEO credentials | SEO API access | Not Google API keys | Server-side env only | `DATAFORSEO_LOGIN`, `DATAFORSEO_PASSWORD` | Yes | No | Yes if exposed | Only if unused |

## Environment Variable Guide

Server-only variables must be configured in `.env.local` locally and in production hosting environment variables. They must never be prefixed with `NEXT_PUBLIC_`.

Server-only:

- `GEMINI_API_KEY`
- `GOOGLE_CLOUD_PROJECT_ID`
- `DATAFORSEO_LOGIN`
- `DATAFORSEO_PASSWORD`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `GOOGLE_SEARCH_CONSOLE_SITE_URL`
- `GOOGLE_CRUX_API_KEY`
- `AHREFS_API_TOKEN`
- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_TO`
- `GHL_INBOUND_WEBHOOK_URL`
- `GHL_API_KEY`
- `GHL_LOCATION_ID`
- `GHL_OWNER_USER_ID`
- `GHL_SITE_VISIT_CALENDAR_ID`
- `VAPI_WEBHOOK_SECRET`
- `OWNER_CELL`
- `TWILIO_SID`
- `TWILIO_TOKEN`
- `TWILIO_FROM`
- `META_CAPI_ACCESS_TOKEN`
- `META_CAPI_TEST_EVENT_CODE`

Public:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, only if Maps browser UI is used and the key is referrer/API restricted.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_CLARITY_PROJECT_ID`

## Billing Alert Setup

1. In Google Cloud Console, open `Billing`.
2. Open `Budgets & alerts`.
3. Create a monthly budget for the LDN Decks project.
4. Add alert thresholds at 50%, 75%, 90%, and 100%.
5. Enable email alerts for billing admins.
6. Review API usage weekly after enabling or rotating keys.
7. Set per-API quotas where available.
8. Investigate unexpected spikes immediately.

Do not change billing ownership or payment methods without approval.

## IAM Review Checklist

1. Open `IAM & Admin` -> `IAM`.
2. Review every project member.
3. Remove unknown users only after confirming ownership.
4. Avoid broad `Owner` roles unless necessary.
5. Prefer least-privilege roles.
6. Use separate service accounts for separate systems if needed.
7. Disable unused service accounts.
8. Avoid long-lived service account keys.
9. Rotate any service account key that may have been exposed.

Do not remove IAM members or service accounts automatically without approval.

## Key Rotation Process

1. Create a new restricted key.
2. Add the new key to local `.env.local` or production hosting env vars.
3. Deploy or restart the app if required.
4. Verify the integration works.
5. Disable the old key temporarily if Google Cloud supports it for the key type.
6. Monitor errors and API usage.
7. Delete the old key only after confirmed no longer used.

## Verification Steps

1. Run repository secret scan.
2. Confirm `.env.local` is ignored.
3. Confirm `.env.local.example` contains placeholders only.
4. Run `npm run lint`.
5. Run `npm run build`.
6. Visit `/robots.txt` and verify `/admin/`, `/api/`, and `/draft/` are blocked.
7. Visit `/sitemap.xml` and verify admin/API routes are absent.
8. Visit `/admin/operations` without credentials and verify it is blocked in production.
9. Visit `/admin/operations` with correct `ADMIN_USERNAME` and `ADMIN_PASSWORD`.
10. In Google Cloud, verify no unrestricted Gemini API keys remain.

## Rollback Steps

1. If admin access is blocked unintentionally, set `ADMIN_PASSWORD` and redeploy.
2. If a webhook fails after secret enforcement, set `VAPI_WEBHOOK_SECRET` to match Vapi dashboard configuration.
3. If a Google API call fails after restrictions, confirm the key has the required API enabled and the correct app restriction.
4. If a browser Maps key fails, confirm production and preview referrers are listed.
5. Revert only the specific code change causing the issue; do not expose secrets to restore functionality.

## Remaining Risks

- Google Cloud keys must be restricted manually in the console.
- Billing budgets and IAM changes require account-owner action.
- If Vercel does not provide stable outbound IPs, server API keys may rely on strict API restrictions rather than IP restrictions.
- Any old key that appeared in screenshots, logs, browser bundles, or third-party tools should be rotated.
