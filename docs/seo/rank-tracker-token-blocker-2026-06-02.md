# Rank Tracker Token Blocker - 2026-06-02

## Scope

Attempted to refresh the local rank-tracker report. No Ahrefs, Google Ads, GTM, GA4, budgets, bidding, or external account settings were changed.

## Command Run

- `npm run seo:rank-track`

## Result

- Status: blocked
- Exit code: 2
- Blocker: `AHREFS_API_TOKEN` is not present in the local environment.

## Script Guidance

The script requires one of the following:

1. Generate an Ahrefs API token in Ahrefs and rerun with `AHREFS_API_TOKEN`.
2. Use an Ahrefs MCP-enabled agent to refresh the report for project `Ldndecks` / id `9182691`.

## Gate Impact

This does not affect website SEO health checks. It blocks fresh keyword/rank movement reporting only.

## Execution Ledger

- Task 599: Ran the rank tracker refresh command.
- Task 600: Confirmed the blocker is missing `AHREFS_API_TOKEN`.
