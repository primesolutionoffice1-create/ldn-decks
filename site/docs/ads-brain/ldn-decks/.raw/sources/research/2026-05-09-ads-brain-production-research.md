# Ads Brain — 2026 Production Research Brief

**Date of research:** May 9, 2026. All retrieval dates below are May 2026 unless noted.
**Scope:** Google Ads, Meta Ads, YouTube Ads, TikTok Ads, LinkedIn Ads, Microsoft Ads, Apple Ads.
**Audience:** Production engineers and product owners building an Obsidian-based AI operating brain for paid media.

---

## 1. Executive Verdict — What "Ultimate but Honest" Looks Like

A best-in-class paid-media AI brain in 2026 must be **read-first, audit-grade, and source-cited**. It cannot pretend to optimize; it must reason over verified exports and refuse recommendations when evidence is missing. It must:

1. **Treat raw exports as immutable evidence.** Every number in a recommendation must trace back to a column, a date range, and a source platform export. The vault must store the original CSV/JSON beside the markdown reasoning.
2. **Verify tracking before anything else.** Every platform has a 2025–2026 measurement reset (Meta engage-through, Google Consent Mode v2, Apple AdAttributionKit registration, LinkedIn QUALIFIED_LEAD, TikTok dual Pixel/Events API, Microsoft UET). The brain's first-pass output for any account must be a **tracking-trust score**, not a performance score.
3. **Be read-only at V1.** No mutations, no budget changes, no bid changes through APIs. The brain proposes; humans approve in-platform. This eliminates an entire class of liability and avoids the strictest API access tiers (Google developer-token Standard access, LinkedIn Standard tier, Meta Advanced Access, Microsoft Advertising production token).
4. **Use a stable Obsidian schema** — markdown + YAML frontmatter — so the same vault feeds Claude/GPT/Gemini equally. Filenames, frontmatter keys, and folder structure are the API.
5. **Acknowledge uncertainty explicitly.** Modeled conversions, view-through, engage-through, AAK postbacks, and PMax/AI Max black-box surfaces all have known measurement gaps. The brain must label those gaps in every report.
6. **Cross-platform reasoning is the moat.** Single-platform audit tools already exist (Optmyzr, Adalysis, Opteo). Persistent memory across weeks, clients, and the seven platforms combined — with one vocabulary — is the only defensible product wedge.

What the brain must **never** claim: that it has "fixed" attribution, that it knows incrementality without a holdout, that PMax/Smart+ asset performance is fully observable, or that it can "scale" without verified conversion infrastructure.

---

## 2. Platform-by-Platform Summary Table

| Platform | Current API Version (May 2026) | Tracking Stack | Key 2025–2026 Risks | Must-Have Export Fields |
|---|---|---|---|---|
| **Google Ads** | v24 (announced April 2026), v23 still supported; v19 sunset Feb 11 2026; **monthly cadence in 2026**, 1-year support | gtag/GTM, Consent Mode v2 (mandatory EEA/UK since Mar 2024), Enhanced Conversions for web/leads, Offline Conversion Imports, Data Manager API | AI Max GA replaces DSA/ACA in Sept 2026; v19 sunset; Merchant API replaces Content API for Shopping (Aug 18 2026 sunset); modeled conversions require ≥700 ad clicks/7 days/country/domain | campaign, ad_group, ad_strength, search_terms, conversions (incl. modeled), conversion_action.type, asset_group, ai_max_search_term_ad_combination_view |
| **Meta Ads** | Exact Graph/Marketing API version and expiration must be source-verified at connector time; the 2026-05-11 release does not treat the imported newer-version/sunset claim as production truth | Pixel + Conversions API with `event_id` + `event_name` deduplication, EMQ score 0–10 (target ≥8 for purchase), Limited Data Use, action_source | Engage-through attribution replaces engaged-view (Mar 2026); 7-day-view + 28-day-view removed Jan 12 2026; Advantage+ migration claims require official source verification before connector work; webhook trust-store changes require official source verification | account, campaign, adset, ad, action_source, event_id, attribution_setting, conversions, EMQ_score, deduplication_rate |
| **YouTube/Demand Gen** | Inside Google Ads API v24 | Same as Google Ads + view-through, engaged-view | Demand Gen replaced Discovery (2024); creative needs 1.91:1 + 1:1 + 4:5 + 9:16 ("rule of three" — ≥3 assets per ratio); AI-generated content disclosure label required (2026) | asset_type, aspect_ratio, video_length_sec, ad_strength, view_through_conv, engaged_view_conv |
| **TikTok Ads** | Events API evidence is the V1 blocking surface; Business API version must be source-verified before connector work | Pixel + Events API (server) with `event_id` deduplication; match keys: hashed email, hashed phone, IP, user agent, ttclid, _ttp | Smart+ and ownership/data-residency claims require monthly official-source review; deduplication windows: 5 min–48 h between Pixel/Events API | advertiser_id, campaign_id, adgroup_id, ad_id, event_source, event_id, match_keys_present, EMQ-equivalent diagnostics |
| **LinkedIn Ads** | Versioned monthly headers `Linkedin-Version: 202604` (1-year support floor); 202504 sunset confirmed | Insight Tag + Conversions API with deduplication; `LINKEDIN_FIRST_PARTY_ADS_TRACKING_UUID` (li_fat_id); CRM Sync; QUALIFIED_LEAD conversion rule type | MAX_QUALIFIED_LEAD optimization (202602); Lead Sync API webhook validation enforced Mar 16 2026; CAPI rate limits: 600 req/min, 300K req/day, 5K events/batch; Dev Tier limited to 5 ad accounts edit | account, campaign_group, campaign, creative, conversion_rule, conversion_value_type (FIXED/DYNAMIC), match_rate_status, qualifiedLeads, paidQualifiedLeads |
| **Microsoft Ads** | REST API is the standard; **SOAP retiring Jan 31 2027**; new features REST-only from **Oct 1 2026** | UET tag (required for any conversion-based bid strategy), Enhanced Conversions, Offline Conversion Imports, Performance Max with conversion goals | SOAP→REST migration mandatory; Bing Search API retired Aug 2025; Xandr/Invest sunset Feb 28 2026; Google Import requires audit (PMax/AI Max may not import 1:1) | account, campaign, ad_group, keyword, search_query, UET_tag_status, conversion_goal, performance_max_asset_group |
| **Apple Ads** | Apple Ads Campaign Management API (REST, OAuth2, JWT client secret) + AdServices framework (client) + AdAttributionKit (successor to SKAN) | AdServices attribution token (24-h TTL) → REST `api-adservices.apple.com/api/v1/`; AAK postbacks since Apr 10 2025 (ASA registered); SKAN 1–3 click-through only at launch | "Apple Search Ads" rebranded **"Apple Ads"** (Apr 2025); multiple App Store ad placements rolling out 2026 (auto-enrolled); AAK iOS 26.2 changes: apps without AAK config lose attribution; CPP keyword assignment now powers organic search (since Jul 2025) | orgId, campaignId, adGroupId, keywordId, creativeSetId/CPP_id, conversionType, clickDate (detailed payload only with ATT consent), countryOrRegion |

---

## 3. Tracking, Attribution, and Conversion-Quality Requirements (2026 State)

### 3.1 Google Ads — FACTS
- **Consent Mode v2** is mandatory for EEA/UK personalization since March 2024; the four parameters are `ad_storage`, `analytics_storage`, `ad_user_data`, `ad_personalization` (`support.google.com/google-ads/answer/13695607`).
- Conversion modeling requires "advanced" Consent Mode and **≥700 ad clicks over 7 days per country and domain** (`support.google.com/google-ads/answer/10548233`).
- **Enhanced Conversions** (web and leads) sends hashed first-party data (email, phone, name, address) to Google for cross-device match. Required for high-quality Smart Bidding under privacy restrictions.
- **AI Max for Search** exited beta and will auto-upgrade DSA, ACA, and campaign-level broad match starting **September 2026**; new DSA campaign creation will be blocked in Google Ads UI, Editor, and the Ads API once auto-upgrade begins (`support.google.com/google-ads/answer/15910187`, `blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/`).
- AI Max settings are partially **not yet available in the API or Editor** as of v23/v24 — toggling AI Max may break API mutations affecting text customization and brand settings (per `support.google.com/google-ads/answer/15910187`).
- **API**: v23 released Jan 28 2026, v24 announced April 2026; monthly cadence with 4 majors/year and 1-year support floor (`developers.google.com/google-ads/api/docs/release-notes`).
- **Reporting view for AI Max:** `ai_max_search_term_ad_combination_view`.

### 3.2 Meta Ads — FACTS
- **Conversions API + Pixel deduplication** requires identical `event_id` AND `event_name` per event; user identifiers (email, phone, fbp, fbc) do not perform deduplication (Meta dev docs; `developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events`).
- **`fbp` and `fbc` must be sent unhashed**; `fbc` only when an actual `fbclid` exists in the URL.
- **EMQ (Event Match Quality)** scale 1–10. Practitioner consensus: ≥6 acceptable, 8.0–9.3 ideal for Purchase. Source: Meta Events Manager UI.
- **Attribution windows in 2026** (FACTS):
  - Jan 12 2026: 7-day-view and 28-day-view removed from Ads Insights API.
  - Mar 3 2026: Click-through redefined to **link clicks only**. Non-link interactions (likes, shares, saves, comments) moved to **engage-through** with a fixed 1-day window. Engaged-view threshold lowered from 10 s to 5 s for video.
  - Default attribution: **7-day click + 1-day engage-through + 1-day view**.
- Earlier imported research asserted a February 2026 Graph/Marketing API launch and related sunset dates. The 2026-05-11 release verification did not corroborate those claims strongly enough to encode them as production truth. Treat exact Meta API version, expiration, and migration dates as connector-gate data that must be verified from official Meta documentation before use.
- **Webhook mTLS** trust-store update required by **March 31, 2026** to trust new Meta CA.

### 3.3 TikTok Ads — FACTS
- **Pixel + Events API** dual setup with `event_id` deduplication is the official recommended pattern (`ads.tiktok.com/help/article/event-deduplication`). Deduplication windows: Pixel↔Pixel 48 h, Events API↔Events API 48 h, Pixel↔Events API merged after 5 min and within 48 h.
- Match keys required for high match rate: hashed email, hashed phone, IP, user agent, ttclid, `_ttp` cookie. `event_source` ∈ {web, app, offline, crm}.
- **Smart+** is TikTok's automated campaign equivalent of Advantage+: Web Conversion, Product Sales, App Promotion, Lead Generation. Unified manual/automated setup since Feb 2026.
- API base: `https://business-api.tiktok.com/open_api/v1.3/`. Smart+ endpoints: `/smart_plus/campaign/create/`, `/smart_plus/material_report/overview/`. (Practitioner note: TikTok does not publish a public "monthly version" sunset schedule like Meta or LinkedIn; v1.3 has been the stable surface since 2023.)

### 3.4 LinkedIn Ads — FACTS
- **Insight Tag + Conversions API** deduplication keyed on event ID per conversion rule. When duplicate, **the Insight Tag event is retained** (LinkedIn docs: `learn.microsoft.com/en-us/linkedin/marketing/conversions/conversions-usecase`).
- **`LINKEDIN_FIRST_PARTY_ADS_TRACKING_UUID` (li_fat_id)** is LinkedIn's first-party click ID; must be passed to CAPI as a user-match identifier.
- **API versioning is monthly**; header `Linkedin-Version: YYYYMM`. Versions are supported a **minimum of 1 year** before sunset. Marketing 202504 has already been sunset; 202604 is current as of April 2026 view (`learn.microsoft.com/en-us/linkedin/marketing/versioning`).
- **MAX_QUALIFIED_LEAD optimization** added in 202602 — uses QUALIFIED_LEAD conversion rule from CAPI or CRM via Business Manager.
- **Lead Sync webhook validation enforced March 16, 2026** for `LEAD_ACTION` push events.
- **CAPI rate limits (FACTS):** 600 requests/minute and 300,000 requests/day per member access token; up to 5,000 events per batch (`learn.microsoft.com/en-us/linkedin/marketing/conversions/conversions-faq`).
- **Tier limits:** Advertising API Development tier = read-only on unlimited accounts, edit on **5 ad accounts max**; Standard tier required for unlimited edit.

### 3.5 Microsoft Ads — FACTS
- **UET tag** is the foundation. Required for **any** automated bid strategy (Maximize Conversions, Max Conversion Value, Target CPA, Target ROAS) (`about.ads.microsoft.com/en/blog/post/november-2024/how-to-increase-conversions-with-performance-max-campaigns`).
- **Enhanced Conversions** available; uses hashed email/phone (`about.ads.microsoft.com/en/blog/post/february-2024/enhanced-conversions-and-other-updates-for-february`).
- **Offline conversion imports** supported via UET tag conversion goals.
- **Performance Max** is live in Microsoft and uses Maximize Conversions / Maximize Conversion Value with optional Target CPA/ROAS.
- **REST API is the standard**; SOAP retiring Jan 31 2027; new features REST-only from **Oct 1 2026** (`about.ads.microsoft.com/en/blog/post/april-2026/evolving-the-microsoft-advertising-api-platform`, `learn.microsoft.com/en-us/advertising/guides/migrate-to-rest`).
- **Google Import** is the most common onboarding shortcut, but **PMax, AI Max, and asset-group nuance do not import 1:1** — every imported account needs a manual reconciliation pass. (Practitioner interpretation, supported by `about.ads.microsoft.com` docs noting structural differences.)

### 3.6 Apple Ads — FACTS
- **AdServices framework** (client-side) returns an attribution token (24-h TTL) that is POSTed to `https://api-adservices.apple.com/api/v1/` to retrieve campaign/adGroup/keyword/creativeSet IDs (`developer.apple.com/documentation/adservices`).
- **Detailed payload** (with `clickDate`/`impressionDate`) requires ATT user opt-in. **Standard payload** is returned otherwise.
- **AdAttributionKit (AAK)** is Apple's successor to SKAdNetwork. SKAN 4.0 is still operational; AAK adds re-engagement, configurable attribution windows, configurable cooldowns, overlapping re-engagement windows, country codes in postbacks (per WWDC 2025).
- **Apple Ads registered with AAK on April 10, 2025** for click-through attribution at SKAN 1–3 levels initially (`ads.apple.com/app-store/help/attribution/0028-measuring-ad-performance`, `appsflyer.com/blog/measurement-analytics/apple-search-ads-skan/`).
- **Custom Product Pages (CPPs):** up to 35 per app (35 confirmed by Apple/AppTweak; some sources reference 70 for ad variations specifically — practitioner reports differ; treat 35 as the safe planning number). Each CPP supports keyword assignment for organic search results since July 2025 and ad-variation use in search results campaigns.
- **Campaign Structure** (Apple official best practice): four campaign types — Brand, Category, Competitor, Discovery (with broad match + Search Match ad groups for keyword mining). Add winning Discovery search terms as exact-match keywords in Brand/Category/Competitor; add as exact-match negatives in Discovery (`ads.apple.com/app-store/best-practices/campaign-structure`).
- **Apple Search Ads → Apple Ads** rebrand confirmed April 2025.
- **2026 inventory expansion**: multiple App Store search ad placements rolling out, auto-enrolling existing campaigns; advertisers cannot bid for specific placements (`ads.apple.com` documentation, December 18, 2025 announcement).

### 3.7 YouTube/Demand Gen — FACTS
- **Demand Gen** replaced Discovery campaigns (2024) and now runs across YouTube in-stream, YouTube Shorts, YouTube in-feed, Gmail, Discover, and Display Network.
- Asset specs (per `support.google.com/google-ads/answer/13704860` and `business.google.com/aunz/accelerate/resources/articles/creative-excellence-guide-for-demand-gen-campaigns/`):
  - Landscape image 1.91:1 (recommended 1200×628; min 600×314), Square 1:1 (1200×1200, min 300×300), Portrait 4:5 (960×1200, min 480×600), Vertical 9:16 for Shorts.
  - Video: 16:9, 1:1, 9:16; Shorts ≤60 s vertical; logo 1:1 (1200×1200, min 144×144).
  - "Rule of three" — at least three unique assets per aspect ratio for "Excellent" Ad Strength.
- **AI-generated content label** required in 2026 on ads with AI assets (Google policy).
- **Lookalike segments** transitioning from strict gating to AI signals starting March 15, 2026.

---

## 4. Export/Import Schemas Per Platform (Adapter Specs)

### 4.1 Google Ads Adapter

**Required exports (read-only, GAQL):**
- `campaign` — campaign.id, campaign.name, campaign.status, campaign.advertising_channel_type, campaign.advertising_channel_sub_type, campaign.bidding_strategy_type, campaign.target_cpa.target_cpa_micros, campaign.target_roas.target_roas, campaign_budget.amount_micros
- `ad_group` — id, name, status, type, cpc_bid_micros
- `ad_group_ad` — ad.id, ad.type, ad_strength, ad.responsive_search_ad.headlines, ad.responsive_search_ad.descriptions
- `search_term_view` and `campaign_search_term_view` — search_term, status (added/excluded/none), match_type, metrics
- `asset` and `asset_group_asset` — for PMax/Demand Gen creative coverage
- `conversion_action` — id, name, type (incl. enhanced_conversions_for_leads), status, primary_for_goal, attribution_model_settings
- `customer` — pay_per_conversion_eligibility_failure_reasons, conversion_tracking_setting.conversion_tracking_status
- `ai_max_search_term_ad_combination_view` (v23+)
- `metrics` segmented by date — clicks, impressions, cost_micros, conversions, conversions_value, all_conversions, view_through_conversions

**Required validation columns to flag broken tracking:**
- `conversion_tracking_setting.conversion_tracking_status` ≠ "CONVERSION_TRACKING_MANAGED_BY_SELF_NONE_ZERO"
- `enhanced_conversions_for_leads_enabled = true` for B2B accounts
- Per-conversion modeled_attribution counts vs. observed
- `consent_status` from conversion diagnostics tab (not directly in API; read from `support.google.com/google-ads/answer/13695607` diagnostics)

**Dangerous missing fields:** `conversions` total = 0 for >7 days at >$10/day spend; missing `conversion_action.type = ENHANCED_CONVERSIONS_FOR_LEADS` for lead-gen; PMax campaigns with no asset_group_asset reporting.

### 4.2 Meta Ads Adapter

**Required exports:**
- `/act_{id}/campaigns` — id, name, objective, status, special_ad_categories, buying_type, smart_promotion_type
- `/act_{id}/adsets` — id, name, optimization_goal, billing_event, attribution_spec, targeting (keep schema-only, never PII), bid_strategy, daily_budget
- `/act_{id}/ads` — id, name, status, creative
- `/act_{id}/insights` — date_start, date_stop, action_values, actions, cost_per_action_type, attribution_setting, **action_attribution_windows** (1d_click, 7d_click, 1d_view, 1d_eng), conversions, purchase_roas
- Events Manager dataset diagnostics — EMQ score per event, deduplication % per event, event volume by source (browser/server/MMP)
- `action_source` per event (website, mobile_app, email, phone_call, chat, physical_store, system_generated)

**Dangerous missing fields:**
- `event_id` not present on a Pixel event paired with CAPI → no deduplication possible.
- EMQ < 6.0 on Purchase → match quality failure.
- `attribution_setting` undefined on ad set → reporting ambiguity.
- Any reliance on 7-day-view or 28-day-view in dashboards (removed Jan 12 2026).

**Detection rules:**
- Server event count < browser event count for the same event_name → CAPI under-firing.
- Server event count > 1.1× browser → likely no deduplication.
- Empty `fbc` on >50% of click-driven events → consent or URL-parameter loss.

### 4.3 TikTok Ads Adapter

**Required exports (`/open_api/v1.3/`):**
- `/campaign/get/`, `/adgroup/get/`, `/ad/get/`
- `/report/integrated/get/` — synchronous report; `/report/task/create/` for async
- `/pixel/list/`, `/pixel/event/stats/` — event volume, dedup health
- `/smart_plus/campaign/get/` and `/smart_plus/material_report/overview/`

**Required fields:** advertiser_id, campaign_id, adgroup_id, ad_id, objective, optimization_goal, billing_event, smart_plus_setting, identity_id, video_id, event_source, event_id, event_name, ttclid, _ttp.

**Dangerous missing fields:** `event_id` absent on Purchase events; Pixel-only setup with no Events API; missing match keys (no email + no phone + no IP) on conversion event.

### 4.4 LinkedIn Ads Adapter (Header `Linkedin-Version: 202604`)

**Required endpoints:** `/rest/adAccounts`, `/rest/adCampaignGroups`, `/rest/adCampaigns`, `/rest/creatives`, `/rest/conversions`, `/rest/adAnalytics`, `/rest/accountIntelligence`, `/rest/leadFormSubmissions`.

**Required fields:** account, campaignGroup, campaign (objectiveType, optimizationTargetType, costType, dailyBudget, totalBudget), creative, conversion (rule type incl. QUALIFIED_LEAD, valueType FIXED|DYNAMIC), li_fat_id capture status, paidQualifiedLeads, conversions (Insight Tag + CAPI combined).

**Dangerous missing fields:** No `LINKEDIN_FIRST_PARTY_ADS_TRACKING_UUID` on CAPI events; missing conversion rule for offline; CAPI rule and Insight Tag rule lack matching event identifiers (deduplication breaks, Insight Tag wins by default).

### 4.5 Microsoft Ads Adapter (REST)

**Required exports:** Account, Campaign, AdGroup, Ad (RSA, PMAX asset groups), Keyword, NegativeKeyword, ConversionGoal, UET tag status, OfflineConversion, Audiences, ProductFilter (Shopping).

**Required fields:** Id, Name, Status, BudgetType, BiddingScheme, TargetCpa, TargetRoas, FinalUrls, UetTagId, GoalType, RevenueValue, AttributionModelType.

**Dangerous missing fields:** No UET tag installed but bid strategy = Maximize Conversions/Target CPA → algorithmic blind firing. Missing offline conversion import on lead-gen accounts. Imported-from-Google PMax campaigns without asset group reconciliation.

### 4.6 Apple Ads Adapter (Campaign Management API + AdServices)

**Required exports:** Org, Campaign, AdGroup, Keyword (with bid amount, match type, status), CreativeSet/CPP, NegativeKeyword, SearchTerm, Report (campaign/adGroup/keyword/searchTerm).

**Required fields:** orgId, campaignId, adGroupId, keywordId, matchType (BROAD|EXACT), bidAmount, conversionType (Download|Redownload), countryOrRegion, creativeSetId/CPP_id, searchMatch (on/off).

**Dangerous missing fields:** No CPP linked to ad variation in search results campaign (default ad runs instead); no AAK config in app `Info.plist` (attribution breaks for users on iOS 26.2+, per Branch documentation); no four-campaign structure (Brand/Category/Competitor/Discovery) — flag as structural debt.

### 4.7 Demand Gen / YouTube Adapter (subset of Google Ads adapter)

**Required fields:** asset.type, asset.image_asset.full_size, asset.youtube_video_asset.youtube_video_id, asset_group_asset.field_type (HEADLINE, DESCRIPTION, MARKETING_IMAGE, SQUARE_MARKETING_IMAGE, PORTRAIT_MARKETING_IMAGE, LOGO, YOUTUBE_VIDEO), ad_strength.

**Dangerous missing fields:** Fewer than 3 assets per aspect ratio; no 9:16 video for Shorts placements; no portrait image for vertical placements; ad_strength below "Good".

---

## 5. API/Version/Deprecation Risk Register (May 2026)

| Platform | Current | Versioning Model | Hard Sunset Dates | OAuth/Token | V1 Brain Should Avoid |
|---|---|---|---|---|---|
| Google Ads | v24 (Apr 2026); v23 (Jan 2026) | Monthly releases, 4 majors/year, 1-year support floor | v19 sunset Feb 11 2026; Content API for Shopping sunset Aug 18 2026 | OAuth2 + developer token (Basic/Standard); manager (MCC) account preferred | All write/mutate; AI Max toggling via API (incomplete coverage); offline conversion uploads at V1 |
| Meta | Exact Graph/Marketing API version and expiration must be source-verified | Quarterly Graph/MAPI majors; support window must be confirmed from official docs | Do not rely on imported sunset claims without official source proof | OAuth2; **Advanced Access** required for ad management; system-user tokens for production | Campaign mutations; budget changes; webhook subscriptions before official version and trust-store evidence is captured |
| TikTok | Events API evidence required; Business API version must be source-verified | Public sunset cadence must be confirmed from official docs | None encoded as production truth in V1 | OAuth2; advertiser_id-scoped access tokens | Smart+ campaign creation/update; offline event uploads; CRM identity transfers |
| LinkedIn | 202604 (April 2026) | **Monthly versioned APIs**, 1-year minimum support | 202504 already sunset; rolling monthly sunset cadence | 3-legged OAuth (`rw_conversions`, `r_ads`, `r_ads_reporting`); Dev Tier = 5 ad accounts edit max | Standard-tier-only mutations; Lead Sync without validated webhook (after Mar 16 2026) |
| Microsoft | REST (current); SOAP retiring | REST is canonical; SOAP frozen-feature mode | New features REST-only Oct 1 2026; SOAP fully retired Jan 31 2027 | OAuth2 + Developer Token; production token requires app review | All SOAP integrations for new builds; Google Import without manual structural reconciliation |
| Apple | Apple Ads Campaign Management API + AdServices + AAK | OAuth2 (JWT client_secret w/ ES256 key) | None; AAK supersedes SKAN gradually | Public/private key pair generated in ASA UI; user with API role | App-side AAK config changes; SKAN postback handling at V1 (rely on MMP) |

**General V1 brain rules:** Read-only scopes only. No write/mutate. No billing. No campaign creation. All write actions surface as **proposed changes** in markdown for human approval, with the exact API call documented but not executed.

---

## 6. Platform-Specific Audit Checks (V1 Coverage)

### 6.1 Tracking / Privacy
- **Google:** Consent Mode v2 status from conversion diagnostics; Enhanced Conversions on for web + leads; modeled conversion eligibility (≥700 clicks/7 d/country/domain).
- **Meta:** EMQ ≥6 across Purchase/Lead; deduplication rate visible per event; `fbc` not hashed; `action_source` set; CAPI events flowing within 5 minutes of Pixel.
- **TikTok:** Pixel + Events API both firing; deduplication enabled with `event_id`; ≥2 match keys per event.
- **LinkedIn:** Insight Tag verified; CAPI events with li_fat_id; conversion rules per source (browser + server); QUALIFIED_LEAD rule present for B2B.
- **Microsoft:** UET tag firing on every page; conversion goal status "Recording"; Enhanced Conversions enabled for accounts with first-party data.
- **Apple:** AAK config present in `Info.plist`; SKAdNetwork IDs declared; attribution payload fetched at first launch; CPP IDs aligned with ad variations.

### 6.2 Campaign Structure
- Naming convention parser (regex match on `<brand>_<channel>_<objective>_<audience>_<geo>_<creative-theme>`); flag inconsistent rows.
- Ad group themes: TF-IDF on keywords vs. RSA assets; flag thematic drift >0.4 cosine.
- Asset coverage: ≥3 RSA headlines unique, ≥4 descriptions; PMax asset groups with ≥5 images, ≥3 videos, ≥5 logos, ≥5 headlines/descriptions; Demand Gen "rule of three" per aspect ratio; Apple Ads four-campaign structure (Brand/Category/Competitor/Discovery).

### 6.3 Budget / Bidding
- Bid strategy must match conversion volume baseline: Target CPA/ROAS only with **≥30 conversions in trailing 30 days**.
- Learning phase detection (Meta: "Learning"/"Learning Limited" status; Google: bid_strategy_state `LEARNING`); never recommend pause during learning.
- Budget pacing: actual spend vs. daily budget × days_elapsed; flag >120% or <60%.

### 6.4 Search-Term Hygiene
- Negative keyword overlap detection (Apple Ads: Discovery exact-match negatives = winners in Brand/Category/Competitor).
- Irrelevant terms: cosine similarity between search term and ad group theme <0.3.
- Match type audit: % of spend on broad match without smart bidding → flag.

### 6.5 Creative Fatigue / Diversity
- Frequency: Meta >3.0 with declining CTR over 7 days → fatigue.
- CTR decay: 7-day CTR vs. trailing 30-day CTR drop >25% → fatigue.
- Asset count: < platform minimum (see 6.2).

### 6.6 Attribution / CRM Quality
- Offline conversion upload age: last upload >3 days → stale.
- LinkedIn QUALIFIED_LEAD rule presence on lead-gen accounts.
- Meta CAPI/Pixel ratio per event; LinkedIn match rate flag "Low Match Rate".
- Apple AAK postback presence vs. AdServices attribution coverage.

### 6.7 Compliance Risk
- Disapproval count by ad and reason (Meta `ad_review_feedback`, Google `policy_summary`, LinkedIn rejection reason symbols, TikTok ad review status webhook).
- Restricted category flags (gambling, healthcare, employment, financial, political — LinkedIn 6 new symbols incl. `LEGITSCRIPT_APPROVAL_MISSING`, `MEDICAL_DEVICES_AND_TREATMENTS`, `PHARMACY_AND_TELEHEALTH`).

### 6.8 Reporting Quality
- Data freshness per export (timestamp on file; flag >24 h).
- Attribution model consistency (don't compare 7-day-click Meta to 28-day-click Google in the same row).
- Modeled vs. observed conversion split disclosed in every report.

---

## 7. What the Brain Must NEVER Recommend Without More Evidence

1. **No scaling before tracking is verified.** Required gates: Meta EMQ ≥6 on Purchase, deduplication >80%; TikTok Pixel + Events API both firing with `event_id`; Google Enhanced Conversions on + Consent Mode v2 active; Microsoft UET firing on conversion page; LinkedIn deduplication active and li_fat_id captured; Apple AAK + AdServices both wired.
2. **No pausing campaigns during learning phase** without an explicit reason logged. Meta "Learning"/"Learning Limited" status, Google `bid_strategy_state = LEARNING`, TikTok 7-day no-edit window — all are evidence-blocking states.
3. **No broad match recommendation without smart bidding + verified conversion quality** (≥30 conv/30d at the campaign or portfolio level, EMQ/match-rate verified for the conversion source).
4. **No CAPI/Events API "confidence" without deduplication proof** — explicit `event_id` overlap percentage from Events Manager, not assumed.
5. **No Apple Ads scaling without CPP/attribution evidence.** CPP must be live, ad variation must point to it, AAK/AdServices coverage must be measured, and `Info.plist` AAK config must be confirmed (especially for iOS 26.2+).
6. **No Performance Max changes without asset group performance data.** v23 added asset_group-level metrics; pre-v23 changes flew blind. The brain must demand the new fields before recommending.
7. **No bid strategy changes without 14+ day conversion volume baseline** (most platforms recommend 30 days; 14 is the absolute floor; below that, any change resets learning).
8. **No creative pausing based on short-window data** — minimum 7-day window with ≥1,000 impressions per asset, except for clearly disapproved/policy-flagged creative.
9. **No incrementality claims without a holdout.** Ads Manager attribution ≠ incrementality. The brain must label all attribution-based ROAS as "reported, not incremental".
10. **No recommendation that depends on a deprecated metric** (Meta 7-day-view, Meta 28-day-view, Google v19 endpoints, LinkedIn 202504 fields, Microsoft SOAP-only fields).

---

## 8. Monetizable Template Expectations by Buyer Segment

| Buyer | What they pay for | Operational must-have |
|---|---|---|
| **PPC agencies** | White-label client reporting, multi-client roll-up, audit speed (<10 min per account) | Multi-vault folders per client; brand-customizable report headers; weekly pre-built audit checklist; CSV-to-markdown ingestion |
| **Freelancers** | Solo-operator efficiency, polished client deliverables | Single-account quickstart; one-click report generation; 80/20 issue prioritization |
| **Founders/operators** | Plain-English decision support; no jargon | Glossary frontmatter; "what to do this week" section; flagging of vendor lock-in risk |
| **In-house performance teams** | Governance, approvals, attribution rigor | Approval workflow templates; change-log frontmatter; audit trail of every recommendation |
| **E-commerce teams** | ROAS, AOV, attribution sanity, GA4/Shopify alignment | Shopify CAPI confirmation; GA4 cross-check; revenue-per-asset reporting; Demand Gen + PMax retail asset coverage |
| **B2B lead-gen teams** | Lead quality, CRM sync, MQL/SQL feedback loops | LinkedIn QUALIFIED_LEAD rule check; Google Enhanced Conversions for Leads; offline conversion freshness; CRM-source-of-truth flag |
| **Mobile app marketers** | SKAN/AAK reality, MMP integration, CPP testing | AAK config presence audit; CPP-keyword alignment matrix; MMP source-of-truth declaration; Apple Ads four-campaign structure check |

---

## 9. Competitive Comparison

| Category | Existing Tools | Gap the Ads Brain Fills |
|---|---|---|
| Paid-media audit | Optmyzr, Adalysis, Opteo | Single-platform, recommendation-firehose, no persistent memory across weeks; rarely cite which column triggered the rec |
| Agency reporting templates | Looker Studio, Whatagraph, Swydo, AgencyAnalytics | Visualization-first, not reasoning-first; cannot explain *why* a number is wrong |
| Notion/Obsidian marketing OS | Notion templates, marketing OS Obsidian vaults | No platform-specific knowledge; no audit logic; no API ingestion |
| Data pipelines | Supermetrics, Fivetran, Funnel.io | Data plumbing only — no opinion, no audit |
| Attribution platforms | Triple Whale, Northbeam, Polar, Rockerbox | E-commerce ROAS focus; black-box modeling; weak on B2B and apps |
| Platform-native recs | Google Ads "Recommendations" tab, Meta Advantage+ suggestions | Vendor-aligned; conflict of interest; no cross-platform reasoning; no persistent client memory |

**Differentiation pillars (for product copy and roadmap):**
1. **Persistent memory across weeks/clients** — week-over-week diffs, regression detection, narrative continuity.
2. **Source-cited decisions** — every recommendation links to a specific export column, date range, and platform doc URL.
3. **Action approval workflow (human-in-the-loop)** — no mutations; every recommended change is a markdown checkbox awaiting human sign-off.
4. **Raw export immutability (audit trail)** — original CSVs/JSONs are stored and hashed; the markdown reasoning is rebuildable from them.
5. **AI-readable vault structure** — markdown + YAML frontmatter, stable folder taxonomy, consistent filename schema.
6. **Cross-platform reasoning** — one brain reads all 7 platforms with the same vocabulary; can compare LinkedIn QUALIFIED_LEAD rate vs. Google Enhanced Conversions for Leads rate in a single report.

---

## 10. Release Blocker Checklist (V1 Cannot Ship Without These)

- [ ] Read-only adapter for each of the 7 platforms with documented OAuth scopes and rate-limit handling.
- [ ] Export ingestion path that preserves the raw file (immutable evidence) and emits markdown.
- [ ] **Tracking-trust scorecard per platform** before any performance recommendation runs.
- [ ] Deduplication detection (Meta event_id, TikTok event_id, LinkedIn dedupe rule).
- [ ] Consent Mode v2 status check for Google.
- [ ] EMQ score ingestion for Meta.
- [ ] UET firing check for Microsoft.
- [ ] AAK config presence flag for Apple.
- [ ] li_fat_id capture flag for LinkedIn.
- [ ] Attribution-window labeling on every Meta number (1d_click vs 7d_click vs 1d_view vs 1d_eng).
- [ ] API version pin per platform with a sunset countdown surfaced in the report header.
- [ ] "Never-recommend-without-evidence" rule list (Section 7) implemented as hard guards.
- [ ] Frontmatter schema spec versioned (`brain_schema: v1`).
- [ ] Folder taxonomy: `/clients/<client>/<account>/<platform>/<YYYY-MM-DD>/raw/`, `/reports/`, `/audits/`, `/proposals/`.
- [ ] Test fixture matrix (Section 13) covered.
- [ ] Disclosure boilerplate: "Reported, not incremental" on all ROAS.
- [ ] Modeled vs. observed conversion split visible.
- [ ] No write/mutate paths anywhere in the codebase.
- [ ] License/disclaimer: cannot replace platform-certified consultants for compliance-sensitive verticals.

---

## 11. Nice-to-Have Later (V2+)

- Approved-action executor (write API integration with explicit per-call human confirmation).
- Incrementality experiment templates (geo holdouts, conversion-lift studies, ghost-bidding checks).
- Cross-platform budget pacing and reallocation suggestions (read-only proposal).
- Server-side GTM gateway audit ("Signals Gateway" pattern).
- Anomaly detection (statistical, not LLM) over weekly metrics.
- LLM-driven naming-convention rewrite proposals.
- Auto-generated negative keyword lists (cross-account learnings).
- MMP integration audit (AppsFlyer, Adjust, Singular, Kochava — verify AAK + SKAN parallel reporting).
- Compliance pre-flight for restricted categories (LegitScript, healthcare, employment, financial).
- Vault-wide cost-per-action benchmarking with privacy-preserving aggregation.
- Scheduled re-audits with diff reports.

---

## 12. Suggested Adapter Schema (Frontmatter + Field Validation)

Every platform export normalized into a markdown file with YAML frontmatter:

```yaml
---
brain_schema: v1
client: acme
account_id: "1234567890"
platform: google_ads | meta | tiktok | linkedin | microsoft | apple_ads | demand_gen
api_version: "v24" | "meta-source-verified" | "tiktok-source-verified" | "202604" | "rest-2026-04" | "ads-api-2026-04"
api_version_sunset: "2027-04-15"   # ISO date; required
export_type: campaign | adgroup | ad | search_terms | assets | conversions | events_health
date_range_start: "2026-04-01"
date_range_end: "2026-04-30"
currency: USD
timezone: "America/New_York"
generated_at: "2026-05-09T14:30:00Z"
generated_by: ads_brain_v1.0
raw_file_sha256: "abc123..."
tracking_trust_score: 0.0-1.0
tracking_flags:
  - consent_mode_v2: ok | missing | partial
  - enhanced_conversions: ok | missing
  - emq_purchase: 8.4
  - dedup_rate_purchase: 0.92
  - uet_firing: ok | missing
  - aak_config_present: true | false | n_a
attribution_setting: "7d_click_1d_engage_1d_view"
modeled_conversion_share: 0.18  # 0–1, share of conversions that are modeled
---
```

**Validation rules:**
- All fields above are required; missing fields → ingestion error, not silent default.
- `api_version_sunset` < today + 30 days → header warning banner in report.
- `tracking_trust_score < 0.7` → block performance recommendations; render only tracking remediation plan.
- `modeled_conversion_share > 0.3` → label all ROAS as "model-heavy".
- Numeric fields must be typed (no string numbers).
- Currency strings ISO 4217.

**Field-level dictionary (excerpt — full version goes in `/schemas/` folder):**
- `event_id` (Meta/TikTok/LinkedIn): string, required when both Pixel and CAPI fire same event.
- `event_name` (all): string, must match platform's standard event names.
- `action_source` (Meta): enum {website, mobile_app, email, phone_call, chat, physical_store, system_generated}.
- `bidding_strategy_type` (Google): enum from API.
- `optimizationTargetType` (LinkedIn): enum incl. MAX_QUALIFIED_LEAD as of 202602.

---

## 13. Suggested Weekly Client Report Structure

```
# {Client} — Week of {ISO Week}

## Header
- Accounts covered, platforms, date range, currency, attribution setting
- API version + sunset countdown per platform
- Tracking trust score per platform (red/yellow/green)
- "Reported, not incremental" disclaimer
- Modeled-conversion share

## 1. Tracking Health (audit-first)
- Per-platform scorecard
- New tracking issues this week
- Remediation list ranked by revenue-at-risk

## 2. Performance Snapshot
- Spend, conversions (observed vs. modeled), CPA, ROAS
- WoW delta with attribution-method consistency call-out
- Top 3 wins, top 3 risks

## 3. Recommendations (proposals only)
- Each recommendation tagged: [Tracking], [Structure], [Bidding], [Creative], [Compliance]
- Each recommendation cites: source export column, date range, platform doc URL
- Each recommendation includes evidence threshold met/not met (per Section 7 rules)
- Approval checkbox for human reviewer

## 4. Compliance and Risk
- Disapprovals, policy flags, restricted-category notes

## 5. API/Platform Change Watch
- Sunsets in next 90 days
- Required migrations with official source proof

## 6. Appendix
- Raw export inventory with SHA hashes
- Methodology footnotes per metric
- Glossary
```

---

## 14. Recommended Test Fixture Matrix

| Platform | Required test fixtures |
|---|---|
| Google Ads | (a) Search campaign w/ Enhanced Conversions on; (b) PMax with full asset group; (c) Demand Gen with all 4 aspect ratios; (d) AI Max-enabled campaign; (e) account with `consent_mode_v2 = missing`; (f) account on v19 (sunset edge case); (g) account with offline conversion uploads stale >7 days |
| Meta | (a) Pixel-only fixture; (b) Pixel + CAPI deduped fixture (event_id matched); (c) Pixel + CAPI mismatched event_id (broken dedupe); (d) EMQ < 6 on Purchase; (e) Account with default 7d_click_1d_eng_1d_view; (f) Account with Advantage+ migration risk requiring official-source proof; (g) future Marketing API field-type change fixture |
| TikTok | (a) Pixel-only; (b) Pixel + Events API deduped; (c) Smart+ Web Conversion campaign; (d) Spark Ads (organic-as-paid); (e) Match keys missing (no email + no phone) |
| LinkedIn | (a) Insight Tag only; (b) Insight Tag + CAPI with li_fat_id; (c) QUALIFIED_LEAD conversion rule; (d) MAX_QUALIFIED_LEAD optimization; (e) Lead Sync webhook unvalidated; (f) Dev tier 5-account limit edge case; (g) Sunset version 202504 (must error gracefully) |
| Microsoft | (a) UET firing; (b) UET missing on key page; (c) Enhanced Conversions on; (d) Performance Max campaign; (e) Google Import account with structural reconciliation pending; (f) SOAP-vs-REST migration in progress |
| Apple Ads | (a) Four-campaign structure (Brand/Category/Competitor/Discovery); (b) CPP linked to ad variation; (c) AAK config present in Info.plist; (d) AAK config missing (iOS 26.2+ failure); (e) AdServices token retrieved; (f) Standard payload (ATT denied) and Detailed payload (ATT granted); (g) ASA registered with AAK postback present |
| Demand Gen | (a) "Excellent" Ad Strength (≥3 assets per ratio + video); (b) Below-minimum asset count; (c) AI-generated content label present; (d) Lookalike segments under March-2026 AI-signal mode |

---

## 15. Official Source URLs (Retrieved May 2026)

**Google Ads**
- Sunset and deprecation policy: `https://developers.google.com/google-ads/api/docs/sunset-dates`
- Versioning: `https://developers.google.com/google-ads/api/docs/concepts/versioning`
- Release notes: `https://developers.google.com/google-ads/api/docs/release-notes`
- v23 announcement: `https://ads-developers.googleblog.com/2026/01/announcing-v23-of-google-ads-api.html`
- v24 announcement: `https://ads-developers.googleblog.com/2026/04/announcing-v24-of-google-ads-api.html`
- AI Max overview: `https://support.google.com/google-ads/answer/15910187`
- AI Max for API: `https://developers.google.com/google-ads/api/docs/campaigns/ai-max-for-search-campaigns/getting-started`
- DSA→AI Max upgrade: `https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/`
- Consent Mode v2 (EEA): `https://support.google.com/google-ads/answer/13695607`
- Consent Mode modeling: `https://support.google.com/google-ads/answer/10548233`
- Demand Gen creative specs: `https://support.google.com/google-ads/answer/13704860`
- Demand Gen creative excellence: `https://business.google.com/aunz/accelerate/resources/articles/creative-excellence-guide-for-demand-gen-campaigns/`
- AI Max new features (Apr 2026): `https://blog.google/products/ads-commerce/ai-max-new-features/`

**Meta**
- Marketing API versioning: `https://developers.facebook.com/docs/marketing-api/overview/versioning/`
- Versions list: `https://developers.facebook.com/docs/marketing-api/marketing-api-changelog/versions/`
- CAPI deduplication: `https://developers.facebook.com/documentation/ads-commerce/conversions-api/deduplicate-pixel-and-server-events`

**TikTok**
- Events API: `https://ads.tiktok.com/help/article/events-api`
- Event deduplication: `https://ads.tiktok.com/help/article/event-deduplication`
- API portal: `https://business-api.tiktok.com/portal`
- API overview: `https://business-api.tiktok.com/portal/docs?id=1735713713137730`
- Authentication: `https://ads.tiktok.com/marketing_api/docs?id=1738373164380162`

**LinkedIn**
- Marketing API overview: `https://learn.microsoft.com/en-us/linkedin/marketing/overview?view=li-lms-2026-04`
- Versioning: `https://learn.microsoft.com/en-us/linkedin/marketing/versioning?view=li-lms-2026-04`
- Recent changes: `https://learn.microsoft.com/en-us/linkedin/marketing/integrations/recent-changes?view=li-lms-2026-04`
- Conversions FAQ: `https://learn.microsoft.com/en-us/linkedin/marketing/conversions/conversions-faq?view=li-lms-2026-03`
- Conversions API use case: `https://learn.microsoft.com/en-us/linkedin/marketing/conversions/conversions-usecase?view=li-lms-2026-04`
- Conversions API best practices (help): `https://www.linkedin.com/help/lms/answer/a5538676`
- Increasing access (tiers): `https://learn.microsoft.com/en-us/linkedin/marketing/increasing-access?view=li-lms-2026-04`
- LinkedIn Conversions API help: `https://www.linkedin.com/help/lms/answer/a1655394`

**Microsoft Advertising**
- REST migration: `https://learn.microsoft.com/en-us/advertising/guides/migrate-to-rest?view=bingads-13`
- Bing Ads Overview: `https://learn.microsoft.com/en-us/advertising/guides/?view=bingads-13`
- Python SDK SOAP→REST migration: `https://learn.microsoft.com/en-us/advertising/guides/python-sdk-migration-soap-to-rest?view=bingads-13`
- API platform announcement (Apr 2026): `https://about.ads.microsoft.com/en/blog/post/april-2026/evolving-the-microsoft-advertising-api-platform`
- Conversion tracking: `https://about.ads.microsoft.com/en/tools/performance/conversion-tracking`
- Performance Max in Microsoft: `https://about.ads.microsoft.com/en/solutions/ad-products-formats/performance-max`
- Enhanced Conversions launch post: `https://about.ads.microsoft.com/en/blog/post/february-2024/enhanced-conversions-and-other-updates-for-february`

**Apple Ads**
- AdServices framework: `https://developer.apple.com/documentation/adservices`
- AAAttribution.attributionToken(): `https://developer.apple.com/documentation/adservices/aaattribution/attributiontoken()`
- AdAttributionKit / SKAN interoperability: `https://developer.apple.com/documentation/adattributionkit/adattributionkit-skadnetwork-interoperability`
- Custom Product Pages (developer): `https://developer.apple.com/app-store/custom-product-pages/`
- Apple Ads campaign structure best practices: `https://ads.apple.com/app-store/best-practices/campaign-structure`
- Apple Ads create campaigns: `https://ads.apple.com/app-store/help/campaigns/0005-create-campaigns`
- Apple Ads ad variations: `https://ads.apple.com/app-store/help/ads/0077-create-ad-variations`
- Apple Ads ad placements: `https://ads.apple.com/app-store/help/ad-placements/0081-ad-placement-options`
- Apple Ads attribution measurement: `https://ads.apple.com/app-store/help/attribution/0028-measuring-ad-performance`

---

## 16. Things Marked "Uncertain or Changing Fast" (Brain Must Re-check Monthly)

- **Google Ads API monthly cadence** — versions ship every month in 2026; the brain's `api_version_sunset` field must be re-pulled monthly from the sunset doc.
- **AI Max API parity** — text customization and brand settings may break API requests during AI Max toggle until parity ships; do not script AI Max activation through the API at V1.
- **Meta's engage-through window mechanics** — March 2026 reshuffle is recent; remarketing campaigns will continue to look "worse" for several weeks until baselines reset; treat all WoW comparisons spanning Mar 2026 with extra caution.
- **Meta v26 (Sept 2026)** — will pause remaining ASC/AAC; brain must surface this to any client still on legacy structures.
- **TikTok ownership and platform stability** — USDS Joint Venture as of Jan 22 2026; operationally unchanged for advertisers but legal/data-residency footnote may matter for EU clients.
- **Apple AAK + iOS 26.2** — Branch (and other MMPs) note that apps without AAK config in `Info.plist` will lose Apple Ads attribution as users upgrade; this is a moving line dependent on iOS adoption rate.
- **Apple Ads multiple placement rollout (2026)** — placement-level reporting transparency unknown as of May 2026.
- **Microsoft REST-only feature gate Oct 1 2026** — agencies still on SOAP need migration plans; brain should warn if it detects SOAP usage signatures.
- **LinkedIn Lead Sync webhook validation enforced Mar 16 2026** — already live; legacy webhook integrations stop receiving lead pushes if not validated.
- **Modeled conversions (Google) and engage-through (Meta)** — both are share-of-conversions metrics that the brain should explicitly disclose every report; the share is unstable week-to-week.

---

## 17. Final Operational Notes (Practitioner Interpretation, Clearly Labeled)

These are not platform docs; they are field-tested patterns the brain should encode as defaults but allow the operator to override:

- **EMQ ≥6 floor for any "scale" recommendation** (Practitioner — Meta benchmark cited across multiple agency sources; Meta's own internal benchmark sits around 6).
- **Pause the brain's "scale" branch when `modeled_conversion_share > 0.3`** (Practitioner — modeling above this share makes Smart Bidding decisions opaque).
- **Apple Ads four-campaign structure as default** (Apple official best practice — but campaign count and budget caps are practitioner judgment).
- **TikTok Smart+ requires ~100+ conversion events before switching from manual** (Practitioner — TikTok's recommendation, surfaced in Smart+ educational material).
- **Meta requires 50 conversions/week per ad set to exit learning** (Meta documentation — long-standing).
- **Google Smart Bidding requires ≥30 conversions in trailing 30 days for Target CPA stability** (Practitioner consensus and Google guidance).
- **CRMs are the source of truth for B2B lead quality, not ad platform leads count** (Operational invariant — the brain should fail closed if no CRM-source-of-truth flag is set on lead-gen accounts).

These defaults must be visible in the brain's frontmatter (`thresholds: ...`) so users can override them per client.

---

**End of brief.** This document is the production specification. Every claim above is either pulled from a platform's official docs (Section 15), labeled as practitioner interpretation, or marked uncertain (Section 16). The brain that ships against this spec is read-only at V1, audit-grade, source-cited, and refuses to scale anything before tracking is verified — which is the only honest position a 2026 paid-media AI brain can take.
