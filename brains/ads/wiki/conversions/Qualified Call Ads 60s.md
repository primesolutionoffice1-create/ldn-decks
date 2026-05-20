---
brain_schema: ads-brain.v1
created: "2026-05-14"
updated: "2026-05-14"
type: conversion_action
title: "Qualified Call Ads 60s"
platform: google
status: implemented
confidence: high
source: "[[Google Ads Live Setup Verification 2026-05-14]]"
---

# Qualified Call Ads 60s

## Compiled Truth

Primary Google Ads optimization conversion:

- Name: `Qualified Call (Ads) - 60s`
- Type: `AD_CALL`
- Primary: true
- Include in conversions: true
- Count: one
- Minimum duration: 60 seconds
- Customer goal: `PHONE_CALL_LEAD / CALL_FROM_ADS`, biddable true.

## Interpretation

This is the correct primary conversion for a calls-first, high-ticket local-service Search launch. It filters out short low-quality calls better than all-call tracking.

## Watch Items

- `UNKNOWN / GOOGLE_HOSTED` customer goal remained biddable and could not be mutated through the Google Ads script because Google rejected `UNKNOWN` in the resource name.
- Form submit is intentionally not a primary optimization signal until lead quality is verified.
- Offline conversion import remains a Day 0 tracking gate item.

## Timeline

- 2026-05-14: Verified in live account and used as the Search launch optimization anchor. Source: [[Google Ads Live Setup Verification 2026-05-14]].
