---
brain_schema: "ads-brain.v1"
created: "2026-05-15"
type: "overview"
title: "Overview"
updated: "2026-06-11"
---

# Overview

LDN Decks Ads Brain is the persistent paid-media operating layer for
local-service campaigns.

![[tracking-trust-gates.svg]]

## Current Status

- Status: Synthesis complete. Ads Health Score 57 (D). Import guardrails are enforced for call phone, call schedule, high-ticket repair separation, and landing-page final URL alignment. Attribution docs now match the current code state for shared lead submission, event IDs, browser Meta Pixel source, `event_source_url`, and CAPI enrichment. Scaling remains blocked until 5-10 real production leads validate clean attribution.
- Owner: LDN Decks
- Site: https://www.ldndecks.com
- Platform exports imported: 22
- Report notes present: 2

## Safety Posture

The vault is advisory until [[Day 0 Tracking and Privacy Gate]] is complete,
5-10 real production leads validate cleanly, and the [[Tracking and Attribution Risk Register]] has been reviewed.

Every reported ROAS is reported, not incremental, unless an incrementality
source or holdout experiment is explicitly linked.
