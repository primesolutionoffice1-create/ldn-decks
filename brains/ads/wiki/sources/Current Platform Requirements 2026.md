---
brain_schema: ads-brain.v1
created: "2026-05-11"
type: source
title: "Current Platform Requirements 2026"
status: reference
updated: "2026-05-11"
source_type: official_docs_digest
retrieved: "2026-05-09"
reviewed: "2026-05-11"
trust_level: high
license: reference-only
sources:
  - "https://developers.google.com/google-ads/api/docs/release-notes"
  - "https://support.google.com/google-ads/answer/15910366"
  - "https://blog.google/products/ads-commerce/dsa-upgrade-to-ai-max-2026/"
  - "https://support.google.com/google-ads/answer/13695607"
  - "https://support.google.com/google-ads/answer/2998031/about-offline-conversion-imports"
  - "https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event"
  - "https://developers.facebook.com/docs/graph-api/changelog/versions"
  - "https://ads.tiktok.com/help/article/events-api"
  - "https://learn.microsoft.com/en-us/linkedin/marketing/integrations/recent-changes"
  - "https://www.linkedin.com/help/lms/answer/a1655394"
  - "https://www.linkedin.com/help/lms/answer/a7123571"
  - "https://learn.microsoft.com/en-us/advertising/guides/migrate-to-rest"
  - "https://learn.microsoft.com/en-us/advertising/guides/performance-max"
  - "https://developer.apple.com/documentation/AdAttributionKit"
  - "https://ads.apple.com/app-store/best-practices/ad-variations"
  - "https://docs.dataforseo.com/v3/appendix-errors/"
  - "[[Ads Brain 2026 Production Research Brief]]"
---

# Current Platform Requirements 2026

## Compiled Truth

This note is a dated official-source baseline for Ads Brain V1. Re-check the
linked docs before changing API connector behavior, attribution guidance,
tracking requirements, or AI-campaign recommendations.

Reviewed for Ads Brain v0.1.6 on 2026-05-11. No release-blocking changes were
found in the official sources checked during that review.

## Current Gates

| Area | Requirement |
|---|---|
| Google Ads | Google Ads API v24 is current in official release notes as of 2026-04-22; AI Max is moving out of beta and legacy DSA/ACA/broad-match settings are scheduled for automatic AI Max upgrade in September 2026. Consent Mode v2 and enhanced/offline conversion evidence are Day 0 gates where relevant. |
| Meta Ads | Conversions API server events require event identity, event time, user data, action source, and `event_id`/`event_name` deduplication evidence when Pixel and CAPI both send the same action. Earlier imported research made newer API version and sunset claims, but connector plans must source-verify the exact Graph/Marketing API release URL, active version, and expiration before use. |
| TikTok Ads | Web conversion clients should use Pixel plus Events API with deduplication, consistent events/parameters, and match keys. |
| LinkedIn Ads | Versioned Marketing APIs require active `Linkedin-Version`; April 2026 docs list 202604 as latest. Conversions API and qualified-lead optimization require source discipline to avoid duplicate qualified lead events; B2B accounts should record qualified-lead or CRM source-of-truth evidence. |
| Microsoft Ads | Microsoft Advertising is transitioning from SOAP to REST. New API features are REST-only starting 2026-10-01, with SOAP scheduled for deprecation on 2027-01-31. PMax requires UET/conversion setup and asset group evidence. |
| Apple Ads | AdAttributionKit and AdServices are the privacy-preserving attribution baseline. Custom product pages/ad variations are required context for App Store intent matching; Apple Ads scaling requires AAK/AdServices and CPP evidence. |
| DataForSEO | DataForSEO can return HTTP 200 with internal `status_code` errors; scripts must validate top-level and task-level statuses and enforce cost caps. |

## Monthly Re-Check Queue

- Google Ads API sunset dates, AI Max API parity, and DSA/ACA upgrade status.
- Meta Graph/Marketing API version table, attribution-window changes, and any engage-through reporting changes.
- TikTok Events API and Smart+ operational requirements.
- LinkedIn monthly API version and Lead Sync validation status.
- Microsoft REST migration deadlines and SOAP usage signatures.
- Apple Ads AAK, AdServices, CPP, and new-placement reporting transparency.

## Timeline

- 2026-05-11 - Reviewed for Ads Brain v0.1.6; no release-blocking official-source changes found.
- 2026-05-11 - Official-source baseline added to the template.
