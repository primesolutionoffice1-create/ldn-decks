---
brain_schema: ads-brain.v1
created: "2026-05-11"
type: flow
title: "Server-Side Conversion API Gate"
status: required
updated: "2026-05-11"
sources:
  - "[[Current Platform Requirements 2026]]"
---

# Server-Side Conversion API Gate

## Purpose

Server-side conversion data is optimization truth only after event identity,
deduplication, consent, and latency are proven.

## Required Evidence

| Platform | Required Proof |
|---|---|
| Google Ads | Consent Mode status, enhanced conversions/offline import status, primary conversion action, upload source. |
| Meta Ads | Pixel plus Conversions API event match, `event_id`/`event_name` deduplication, domain verification, Events Manager diagnostics. |
| TikTok Ads | Pixel plus Events API deduplication, match keys, Web Conversions objective prerequisite status. |
| LinkedIn Ads | Insight Tag plus Conversions API deduplication, conversion rule association, CRM or qualified lead source. |
| Microsoft Ads | UET tag, enhanced/offline conversion source, import safety after Google Ads imports. |
| Apple Ads | AdServices API and/or AdAttributionKit measurement status, app conversion mapping. |

## Output

Update [[Tracking and Attribution Risk Register]] with source, owner, confidence,
and next verification date.
