---
brain_schema: ads-brain.v1
created: "2026-05-15"
type: flow
title: "API Version and Connector Readiness Gate"
status: required
updated: "2026-05-15"
sources:
  - "[[Current Platform Requirements 2026]]"
---

# API Version and Connector Readiness Gate

## Purpose

V1 is CSV/manual-export first. Any API connector plan must be read-only by
default and must record version, scope, deprecation, cost, and rollback before
use.

## Checklist

- Active API version recorded.
- Official source URL and retrieval date recorded.
- Deprecation or sunset date recorded when published.
- OAuth/developer-token owner recorded outside the vault.
- Read-only scope preferred; write scope requires explicit human approval.
- Rate limits, cost limits, and retry behavior documented.
- No credential, refresh token, developer token, or client secret stored in
  vault notes.

## Output

Use [[API Connectors Roadmap]] for implementation planning and keep live API
calls outside the core V1 release path.
