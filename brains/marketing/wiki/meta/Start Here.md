---
type: meta
title: "Start Here"
created: 2026-05-04
updated: 2026-05-04
tags:
  - meta
  - onboarding
  - playbook
status: active
related:
  - "[[Overview]]"
  - "[[Day 0 Measurement Access Gate]]"
  - "[[Claude SEO Install and First Audit]]"
  - "[[Visual Reference Capture Workflow]]"
  - "[[30-Day Sprint]]"
  - "[[Open Questions for Ldndecks]]"
  - "[[Onboarding Canvas.canvas|Onboarding Canvas]]"
  - "[[Verifier Cadence]]"
  - "[[Hot]]"
  - "[[Log]]"
sources:
  - "github.com/AgriciDaniel/claude-seo"
  - "github.com/AgriciDaniel/flow"
  - "github.com/AgriciDaniel/marketing-brain"
---

# Start Here

Welcome, Ldndecks. This is the plain-language sequenced playbook to follow. It is written for someone new to Claude Code and to AI-assisted SEO. Take it one step at a time. Nothing here needs to be done in a single sitting.

This brain (the folder full of these notes) is the strategic scaffold. The actual execution engines are three skills: `marketing-brain` (this scaffolder), `claude-seo` (audits), and `flow` (strategy synthesis). All three live on GitHub. You install them once and then use them by typing slash commands at Claude.

For a visual version of this same checklist, open `[[Onboarding Canvas.canvas|Onboarding Canvas]]` (it's an Obsidian Canvas file — pan and zoom).

## Step 1 — Get Claude Set Up

- Get a Claude subscription (Pro is fine to start; Max gives you more room to run audits).
- Install Claude Code on your machine — follow the official install instructions on Anthropic's site.
- Open Claude in a folder you choose for this work (for example, a folder called `Ldndecks-marketing` on your Desktop).

## Step 2 — Install marketing-brain (you may already have it)

If this vault was scaffolded for you, the skill is already installed. Confirm by typing in Claude:

> `/marketing-brain next`

You should see a message that reads `wiki/hot.md` and tells you the next action with rationale.

If the skill is not installed yet, run:

> `Install this skill https://github.com/AgriciDaniel/marketing-brain`

Then run the scaffolder against your site:

> `/marketing-brain new Ldndecks https://ldndecks.com --business-type local-seo-services`

The scaffolder runs the 6-step DataForSEO research pipeline (find competitors → pull keywords → dedup XLSX → mine PAA → scaffold this vault → synthesize the [[ULTIMATE BEAST Plan]]).

## Step 3 — Install claude-seo

In Claude:

> `Install this skill https://github.com/AgriciDaniel/claude-seo`

Wait for the install to finish. The skill is now available as `/seo-audit` and a few related slash commands. See [[Claude SEO]] for what it does and which API keys help.

## Step 4 — Run the First Audit, Fix, Repeat

> `/seo-audit https://ldndecks.com`

Save the report. Read it. Make the Critical fixes (highest-priority items). Run the audit again.

The standard pattern is **run, fix, repeat at least 3 times** before moving on. The first pass surfaces obvious issues, the second pass catches what the fixes broke or revealed, the third confirms the site is in a stable enough state for strategy work.

Each audit goes into `.raw/sources/audits/audit-N-YYYY-MM-DD.md` so we have a record. See [[Claude SEO Install and First Audit]] for the full procedure.

## Step 5 — Verify Day 0 Access

Open `[[Day 0 Measurement Access Gate]]`. Walk every Required Access row and every Required Baseline row. Every cell must end up Pass with evidence saved to `.raw/sources/day0/` before the 30-day sprint can start.

While you're here, answer the 15 questions in `[[Open Questions for Ldndecks]]`. Answers go in `[[Log]]` as a dated entry.

## Step 6 — Install FLOW (optional but recommended)

After audits stabilize:

> `Install this skill https://github.com/AgriciDaniel/flow`

FLOW is a strategy engine — it consumes 1700+ pages of source material on modern SEO and produces opinionated multi-week plans. The marketing-brain skill's beast-planner subagent uses FLOW under the hood to compose your [[ULTIMATE BEAST Plan]].

## Step 7 — Capture Visual References Before Image Work

Before refreshing hero images, page visuals, screenshots, or generated imagery, open [[Visual Reference Capture Workflow]]. Save the source screenshots and image references under `.raw/sources/visuals/` so future visuals match the real brand style and reuse boundaries are documented.

## Step 8 — Read the BEAST Plan, Read Hot, Pick the Next Action

The beast-planner subagent should have already populated `[[ULTIMATE BEAST Plan]]` with a ranked action list and the [[Implementation Roadmap]] with a day-by-day plan. Read both.

Then go to `[[Hot]]` and look at "Active Threads" — the top item is your next move. The skill's `guide_next_action.py` reads this same section to suggest your next move when you type `/marketing-brain next`.

## Step 9 — Use the Vault as You Work

Three notes are worth checking on every working session:

- `[[Hot]]` — what's most active right now (overwritten in place each session, never appended).
- `[[Log]]` — running record of decisions and answers (newest at top, append-only).
- `[[Open Questions for Ldndecks]]` — anything still pending from you.

When you finish a meaningful action, update those three notes. The brain is most useful when it stays current.

## What's Different From a Pure Content Plan

This vault is structured around the FLOW (Find / Leverage / Optimize / Win) framework adapted to local-seo-services via the [[business-types/_index|business-type overlay]]. The active overlay is `[[Business Type Overlay]]` — read it to anchor revenue model, content priority, measurement focus, and anti-pattern guardrails.

The Karpathy Hot/Index/Wiki read order is enforced in `CODEX.md`. Any Claude or other AI agent that opens this vault should read `wiki/hot.md` first (~500 words), then `wiki/index.md`, then the relevant note. Same rule for humans.

## Next Action

Once Step 4 (first audit) and Step 5 (Day 0 access) are both done, ping Daniel Agrici via the channel agreed in [[Verifier Cadence]] and we move into the 30-day sprint via [[Implementation Roadmap]].
