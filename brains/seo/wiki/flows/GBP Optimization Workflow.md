---
type: "flow"
title: "GBP Optimization Workflow"
created: "{{date}}"
updated: "{{date}}"
status: "active"
---

# GBP Optimization Workflow

Phase 2 of [[the-3-phases-of-local-seo|The 3 Phases of Local SEO]]. Run
**after** the property is audited. The Map Pack captures 60–70% of local
clicks — this is where leverage lives.

## Pre-flight

- Property audit complete (Phase 1) or at minimum, the Quick Wins pass.
- NAP locked in `wiki/locations/<location-slug>.md`.
- Client GBP access confirmed (Manager or Owner).
- Raw GBP Insights export under `.raw/clients/<client>/gbp/<date>-insights.csv`.
- Read [[gbp-overview|GBP Overview]] and [[warning-for-gbp-changes|Warning for GBP Changes]] first.

## Hard rule

**No GBP profile mutation in V1.** All changes go through the client.
The brain produces the diff; the human ships it. See [[Approval Queue]].

## Steps

### 1. Verification check

Confirm verification status. Read [[gbp-verification|GBP Verification]].
If unverified, that's blocker #1.

### 2. Description

Use the [[gbp-description-claude-prompt-1|GBP Description Claude Prompt]]
chain to draft. Read [[gbp-description|GBP Description]] for context.

### 3. Categories

Read [[gbp-categories|GBP Categories]] and the
[[gbp-categories-edge-cases-re-theming|Edge Cases]]. Use the
[[gbp-categories-prompt|GBP Categories Prompt]]. Categories drive 80% of
GBP relevance — get this right.

### 4. Services

Read [[gbp-services|GBP Services]]. Use the
[[gbp-services-prompt|GBP Services Prompt]]. Mirror site service pages.

### 5. Optimization pass

Read [[gbp-optimization|GBP Optimization]]. Apply geotagged images
(see [[gbp-website-image-geotagging|GBP + Website Image Geotagging]]).

### 6. Posts cadence

Read [[gbp-posts|GBP Posts]]. Set weekly post cadence. Brain refuses
auto-posting in V1.

### 7. Holiday hours

Read [[gbp-holiday-hours-maintenance-automated-calls|GBP Holiday Hours]].
Schedule reminders.

## Done when

- Every GBP change is documented in [[Approval Queue]] with rollback steps.
- Client has signed off on the diff.
- Geotagged images uploaded (advisory, client uploads).
- Post cadence is on the client's calendar.

## Related

- [[wiki/gbp/_index|GBP Hub]]
- [[Property Audit Workflow]]
- [[Citation Audit Workflow]]
- [[Index]]
