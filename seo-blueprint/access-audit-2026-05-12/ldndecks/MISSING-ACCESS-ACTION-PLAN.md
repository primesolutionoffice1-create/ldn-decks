# MISSING-ACCESS-ACTION-PLAN — ldndecks.com

**Date:** 2026-05-12  **Base:** main @ d26e458  **Branch:** audit/access-readiness-2026-05-12

This plan converts every ❓ (Unknown) and ❌ (Missing) item in ACCESS-MATRIX.md into a concrete next step. Every action is either (a) granting Claude verified UI access, or (b) a human action that cannot be safely automated.

---

## Section 1 — Access grants (highest leverage, lowest effort)

Granting access converts ~12 Unknowns into Verified or Missing within an hour.

### 1.1 Google Search Console — 15 min
1. Sign in at https://search.google.com/search-console.
2. Add **Domain property** for `ldndecks.com` (not URL-prefix). This automatically covers apex/www × http/https.
3. Verify via DNS TXT — coordinate with DNS owner (see §1.6).
4. Add Claude (or operator email) as **Restricted** user; promote to **Full** only when ready to submit sitemaps or request indexing.
5. Confirm sitemap https://ldndecks.com/sitemap.xml is submitted and Discovered → Indexed.

### 1.2 Google Analytics 4 — 10 min
1. https://analytics.google.com → Admin → Property Access Management.
2. Confirm a GA4 property exists for `G-B52LCDZ6WS`. If multiple properties exist, identify the one receiving live traffic.
3. Add operator email as **Editor** (not Administrator).
4. Verify Conversions list contains `lead_confirmed`, `form_submit`, `phone_click`, `generate_lead` and that they are toggled on as Key Events / Conversions.
5. Verify Google Ads linking under Admin → Product Links → Google Ads links.
6. Set data retention to 14 months.

### 1.3 Google Tag Manager — 10 min
1. https://tagmanager.google.com → container `GTM-N87MG6QS`.
2. Add operator email as **Edit + Publish** on the container (workspace edit only is insufficient for verification).
3. Inventory tags, triggers, variables. Expected to find: GA4 Config tag, GA4 Event tags for the four events, Google Ads conversion linker, Google Ads conversion tag(s), Consent Mode initialization, `dedupe_gclid` and `ads_pageview` variables/tags.
4. Confirm no rogue tags (Hotjar, Clarity, etc.) are firing.

### 1.4 Google Ads — 15 min
1. https://ads.google.com → Tools → Access and security.
2. Grant **Standard access** to operator email (Admin only if ad spend governance is centralized).
3. Tools → Conversions → confirm conversion actions exist:
   - Primary: `Lead — form submit` (sourced from GA4 import or website tag)
   - Secondary: `Phone call — tel: click`
   - Future: `Booked job` (offline import)
4. Check **Enhanced Conversions for Leads** toggle — required because Meta CAPI + GA4 import the hashed fields, but the Ads-side switch must also be on.
5. Note current bidding strategy — should be Manual CPC or Maximize Clicks (NOT Maximize Conversions / Target CPA) until offline import is live.

### 1.5 Vercel — 10 min
1. https://vercel.com → team/project ldn-decks-next.
2. Invite operator email as **Member** (Developer permissions sufficient).
3. Verify env vars present: `META_PIXEL_ID`, `META_CAPI_ACCESS_TOKEN`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, and any GTM_ID override.
4. Confirm **Production protection** = off for the public site, **Preview protection** = password or SSO.
5. Note current production deployment URL and last deployer.

### 1.6 DNS / registrar — 20 min
1. Identify the registrar via WHOIS (`whois ldndecks.com`).
2. Identify the DNS provider via NS records (`dig NS ldndecks.com`).
3. Grant access to operator email at the appropriate level.
4. Inventory current records: A/AAAA, CNAME, MX, TXT (SPF/DKIM/DMARC/verification).
5. Add or repair as needed (see §2.2).

### 1.7 Google Business Profile — 15 min
1. Search https://www.google.com/maps for "Loudoun Decks Centreville VA."
2. If listing is verified, request access via "Own this business?" flow.
3. If unverified, claim by phone or postcard.
4. Once owned, populate: services list, deck-build photos, weekly Posts, Q&A seed, messaging on, attributes (women-owned/veteran if applicable).

### 1.8 GitHub / codebase — already granted
- Operator is logged in as `primesolutionoffice1-create` (repo owner). No further action.
- Branch protection on `main` recommended: require 1 review, status checks pass, no force-push.

---

## Section 2 — Required DNS / domain records

### 2.1 GSC domain-property TXT
Add the TXT record provided by GSC at step 1.1. Required for domain-property verification.

### 2.2 Email deliverability (office@ldndecks.com)
Without SPF/DKIM/DMARC, lead-notification emails from `sendContactEmail` will land in spam — leads will be lost.
- **SPF:** `v=spf1 include:<smtp-provider> -all` (replace with the provider used by the SMTP_HOST env var).
- **DKIM:** publish the provider-issued public key as a TXT record at the provider-instructed selector.
- **DMARC:** start permissive: `v=DMARC1; p=none; rua=mailto:dmarc@ldndecks.com`. Tighten to `p=quarantine` after 30 days of clean reports.

### 2.3 Facebook domain verification (optional)
If Meta CAPI events should attribute to a domain-verified property, add the FB-issued TXT record. Not required for CAPI to function.

---

## Section 3 — Local / trust-profile ownership

| Profile | Action |
|---|---|
| Google Business Profile | Claim (see §1.7) |
| Yelp | Claim Yelp for Business listing for Loudoun Decks (Centreville). |
| Trustpilot | Create business profile; embed review-collection link in /thank-you. |
| TrexPro directory | Login at trex.com/contractor portal; verify listing reflects current address + Platinum status. |
| TimberTech directory | Login at timbertech.com pro portal; verify listing. |
| Houzz | Claim or verify pro account; link from footer in addition to the internal landing page. |
| Nextdoor | Claim Nextdoor for Business; verify Loudoun/Centreville service area. |
| YouTube | Create or verify channel; upload existing project videos. |

---

## Section 4 — Governance hardening (no code required)

1. Document **named owner + backup owner** per surface in a single shared doc (Notion or Sheets):
   GSC, GA4, GTM, Google Ads, Vercel, GitHub, DNS, GBP, Yelp, Trustpilot, Houzz, Trex/TimberTech directories, social.
2. Enable **2FA** on every account in (1).
3. Enable GitHub **branch protection** on `main`: required reviews ≥ 1, signed commits optional.
4. Set Vercel **deploy approval** flow: production deploys gated on GitHub PR merge to `main` (default), preview deploys auto.
5. Document a **GTM publish approval** flow: workspace-edit OK; publish requires 2nd approver review.

---

## Section 5 — Order of operations

1. §1.5 Vercel access (proves env vars set, unblocks CAPI/SMTP confidence).
2. §1.6 DNS access (unblocks §2.1 GSC, §2.2 deliverability).
3. §1.1 GSC, §1.2 GA4, §1.3 GTM (UI-verifies the code-side foundation).
4. §1.7 GBP (highest local-SEO ROI).
5. §1.4 Google Ads (validate conversion actions, Enhanced Conversions toggle).
6. §3 Trust-profile claims (parallelizable).
7. §4 Governance hardening (parallelizable).
