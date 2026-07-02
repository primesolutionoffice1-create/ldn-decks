# Lead Delivery Runbook

## Current Issue

Production form submissions reach the server action, but Gmail SMTP rejects the configured email credential with `535-5.7.8 BadCredentials`. That means the site can accept a lead through a backup path while the owner notification email does not arrive.

## Root Cause

Gmail SMTP does not accept a normal Google account password for this use case. `EMAIL_PASS` must be a Google App Password generated from the sender account after 2-Step Verification is enabled.

## Required Vercel Variables

All of these are server-only and must not use `NEXT_PUBLIC_`:

```bash
EMAIL_USER=office@ldndecks.com
EMAIL_PASS=<google-app-password>
EMAIL_TO=office@ldndecks.com
GHL_INBOUND_WEBHOOK_URL=<optional-backup-webhook>
N8N_WEBSITE_INTAKE_WEBHOOK_URL=<optional-backup-webhook>
```

## Manual Fix

1. Open the Google account used for `EMAIL_USER`.
2. Enable 2-Step Verification if it is not already enabled.
3. Open Google Account -> Security -> App passwords.
4. Create a new app password for Mail.
5. Copy the 16-character app password.
6. Open Vercel -> LDN Decks project -> Settings -> Environment Variables.
7. Set Production `EMAIL_USER`, `EMAIL_PASS`, and `EMAIL_TO`.
8. Save the variables.
9. Redeploy production so the server action receives the new values.
10. Submit one test lead from the live form.
11. Check the inbox for `EMAIL_TO`.
12. Check Vercel Runtime Logs for no `gmail_bad_credentials` errors.

## Verification

Local env:

```bash
npm run lead:delivery-env
```

Production logs should not contain:

```text
[sendContactEmail] email delivery failed
[sendContactEmail] lead accepted but email notification failed
[sendContactEmail] all website lead delivery sinks failed
```

Production logs may contain `attempting to send lead email` for normal form submissions.

## Backup Channels

GHL and n8n are backup delivery paths. They are useful, but they should not be treated as a replacement for direct owner notification email.

If email fails but GHL or n8n succeeds, the code logs:

```text
[sendContactEmail] lead accepted but email notification failed
```

This is intentional. It means the lead was not fully lost, but the email notification still needs repair.

## Recommended Upgrade

For production reliability, move lead notifications from Gmail SMTP to a transactional provider such as Resend, Postmark, or SendGrid. Configure SPF, DKIM, and DMARC for `ldndecks.com`, then send from a verified domain address.

## Rollback

If a new email credential breaks production delivery:

1. Restore the previous Vercel `EMAIL_PASS` value if it was known working.
2. Redeploy production.
3. Submit a test lead.
4. If Gmail continues rejecting SMTP, temporarily rely on GHL while switching to a transactional email provider.
