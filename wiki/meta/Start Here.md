---
brain_schema: ads-brain.v1
created: "2026-05-11"
type: meta
title: "Start Here"
updated: "2026-05-11"
status: active
related:
  - "[[Dashboard]]"
  - "[[Onboarding Canvas.canvas|Onboarding Canvas]]"
  - "[[Day 0 Tracking and Privacy Gate]]"
  - "[[Campaign Export Import Workflow]]"
  - "[[Ads Health Scorecard]]"
sources:
  - "[[Ads Brain 2026 Production Research Brief]]"
---

# Start Here

![[ads-brain-operating-map.svg]]

![[vault-relationship-graph.svg]]

## First Session

1. Read [[Hot]].
2. Open [[Dashboard]] and [[Onboarding Canvas.canvas|Onboarding Canvas]] for the
   visual map.
3. Read [[RESOLVER]].
4. Read [[Export Intake Guide]] and choose one platform export to import first.
5. Complete [[Day 0 Tracking and Privacy Gate]] with the evidence you have.
6. Import one export through [[Campaign Export Import Workflow]].
7. Run synthesis, open [[Ads Health Scorecard]], and review [[Approval Queue]].

## Required Context

- Business type: local-service
- Owner: Loudoun Decks
- Site: https://ldndecks.com
- Active platforms: Google, Meta, YouTube, TikTok, LinkedIn, Microsoft, Apple

## What Good Looks Like

The brain has raw exports, source notes, campaign pages, deliverables, and a
next action that names the relevant source.

## 5-Minute Operator Path

Run this path from the source checkout after scaffolding a client vault:

1. `python -m ads_brain.cli import --vault <vault> --platform google --file <export.csv>`
2. `python -m ads_brain.cli synthesize --vault <vault>`
3. `python -m ads_brain.cli visuals --vault <vault>`
4. `python -m ads_brain.cli report --vault <vault> --html-only`
5. `python -m ads_brain.cli next --vault <vault>`

## Trust Rule

The first useful result is tracking trust, not optimization. If [[Tracking and Attribution Risk Register]] shows missing evidence, fix that before budget, bidding, or creative recommendations.
