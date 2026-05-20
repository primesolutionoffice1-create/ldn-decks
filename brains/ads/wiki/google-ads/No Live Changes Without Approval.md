---
brain_schema: ads-brain.v1
type: rule
platform: google
title: "No Live Changes Without Approval"
created: "2026-05-11"
updated: "2026-05-11"
owner: "Loudoun Decks"
status: enforced
---

# Rule: No Live Changes Without Approval

This vault is **approval-first**. The assistant (Ads Brain / Claude) never mutates the Google Ads account, never edits campaigns, ad groups, keywords, ads, assets, budgets, bids, or conversion actions directly.

## Scope

Applies to:
- Google Ads (and by extension Meta, YouTube, TikTok, LinkedIn, Microsoft, Apple — same rule, different platforms).
- The Google Ads account linked to ldndecks.com.
- Any sub-MCC, manager link, or script-level access.

## What the assistant **MAY** do

- Read CSV exports from `.raw/google-ads/`.
- Generate normalized notes in `imports/google-ads/`.
- Write `action-queue/*.md` proposals with the schema in [[Manual Google Ads Action Queue Template]].
- Render `reports/google-ads/*.html` weekly reports.
- Maintain `wiki/google-ads/*.md` knowledge.

## What the assistant **MUST NOT** do

- Log into Google Ads.
- Run Google Ads Editor changes.
- Run Google Ads API mutate calls (CREATE, UPDATE, REMOVE).
- Run Google Ads scripts that mutate state.
- Push changes via Make, Zapier, n8n, or any orchestrator with a write scope.
- Approve its own proposals.

## Approval workflow

1. Assistant writes an action file to `action-queue/` with `status: proposed`.
2. Owner reviews. Decision options:
   - **Approve** — set `status: approved`, write `approved_by`, then execute manually in Google Ads.
   - **Reject** — set `status: rejected`, write a one-line reason. File stays for memory.
   - **Defer** — leave `status: proposed`, add a note.
3. After the owner executes the change in the Google Ads UI:
   - Owner sets `status: applied` and `applied_on`.
   - Owner creates a paired file in `decisions/google-ads/` with the same slug.
4. Two weeks later, the assistant compares pre/post metrics from the next ingest and writes the **Reviewed** line.

## Hard exceptions (never auto-approved)

The following always require explicit, file-by-file owner approval, no matter the priority:

- Bid strategy **type** changes (e.g., Manual CPC → Max Conversions).
- Conversion action edits (count, attribution, primary/secondary).
- Account-level budget changes.
- Geo-targeting expansion to new states or countries.
- Adding or removing user access.
- Linking / unlinking GA4, Search Console, Merchant Center, or MCC.
- Enabling Auto-applied recommendations.
- Turning on or off Consent Mode.

## Quality gates restated from CODEX.md

- No scaling before [[Day 0 Tracking and Privacy Gate - Google Ads]] is closed.
- No Broad Match recommendation without Smart Bidding context + verified conversion quality.
- No budget scaling during active learning phase.
- No incrementality claim without holdout evidence.
- Every ROAS statement is **reported**, not incremental, unless the source proves otherwise.

## How this rule is enforced

- Every action file requires `owner_approval_required: true` by default.
- The weekly report flags any `applied` change with no paired `decisions/` file.
- `scripts/lint_vault.py` (verification helper) reports orphan approvals.
- If you (the owner) ever see the assistant claim it "made a change in Google Ads", reject it and link this page.
