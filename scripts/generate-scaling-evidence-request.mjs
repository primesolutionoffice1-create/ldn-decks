#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const OUTPUT_MD = `docs/ads-tracking/scaling-evidence-request-${DATE}.md`;
const OUTPUT_CSV = `docs/ads-tracking/scaling-evidence-request-${DATE}.csv`;

function parseTrailingJson(output) {
  const start = output.indexOf('{');
  const end = output.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  return JSON.parse(output.slice(start, end + 1));
}

function csvEscape(value) {
  const text = String(value ?? '');
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function evidenceNeed(blocker) {
  if (blocker.id === 'google-call-attribution') {
    return {
      evidenceNeeded: 'Screenshots or read-only export showing Google Ads call conversion action source, status, counting, diagnostics, and GTM/website-call forwarding setup for the canonical LDN Decks phone number.',
      whereToCollect: `Google Ads conversions, Google Ads call assets/call reporting, GTM tags/triggers, and docs/ads-tracking/live-call-attribution-evidence-${DATE}.csv. Use docs/ads-tracking/templates/call-attribution-readonly-evidence-template.csv only as the shape reference.`,
      doneWhen: '`npm run measurement:call-attribution-evidence` no longer returns SAMPLE_ONLY/LIVE_EMPTY and `npm run measurement:gate` can be updated from external-proof WARN only after the evidence proves qualified-call attribution.',
      verifyCommand: 'npm run measurement:call-attribution-evidence && npm run measurement:gate && npm run scaling:readiness',
    };
  }

  if (blocker.id === 'lead-outcome-rows') {
    return {
      evidenceNeeded: '5-10 real LDN Decks lead outcome rows with lead date, click ID when present, source/medium/campaign, city, service type, qualification status, call/form evidence, sales notes, and Ads action.',
      whereToCollect: `CRM/GHL, call notes or recordings, form lead records, and docs/ads-tracking/live-lead-outcomes-${DATE}.csv. Use docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv only as the shape reference.`,
      doneWhen: '`npm run measurement:lead-outcomes` returns PASS with at least 5 real rows and 0 errors.',
      verifyCommand: 'npm run measurement:lead-outcomes && npm run scaling:readiness',
    };
  }

  if (blocker.id === 'owner-proof-evidence') {
    return {
      evidenceNeeded: 'Owner-approved proof packets for blocked/proof-incomplete pages: project photos, allowed project descriptions, service scope, location permission, warranty/repair-cost evidence where relevant, and privacy confirmation.',
      whereToCollect: `docs/seo/project-evidence-intake-${DATE}.csv, docs/seo/photo-ingestion-manifest-${DATE}.csv, docs/seo/warranty-terms-intake-${DATE}.csv, docs/seo/repair-cost-ranges-intake-${DATE}.csv, plus docs/seo/owner-evidence-sprint-${DATE}.md and docs/seo/owner-evidence-handoff-${DATE}.md for the exact collection order and privacy gates.`,
      doneWhen: '`npm run seo:validate-owner-intake` and `npm run seo:proof-preflight` show no blocked/proof-incomplete pages and prepublish is no longer expected-blocked.',
      verifyCommand: 'npm run seo:validate-owner-intake && npm run seo:proof-preflight && npm run seo:weekly',
    };
  }

  return {
    evidenceNeeded: blocker.action,
    whereToCollect: 'Owner/external source of record.',
    doneWhen: 'The blocker no longer appears in scaling readiness.',
    verifyCommand: 'npm run scaling:readiness',
  };
}

const boardOutput = execFileSync('node', ['scripts/generate-scaling-readiness-board.mjs'], {
  cwd: ROOT,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
});
const board = parseTrailingJson(boardOutput);
const blockers = board.blockers || [];
const rows = blockers.map((blocker) => ({
  ...blocker,
  ...evidenceNeed(blocker),
}));

const csvHeaders = ['priority', 'blocker_id', 'owner', 'evidence_needed', 'where_to_collect', 'done_when', 'verify_command'];
const csv = [
  csvHeaders.join(','),
  ...rows.map((row) => [
    row.priority,
    row.id,
    row.owner,
    row.evidenceNeeded,
    row.whereToCollect,
    row.doneWhen,
    row.verifyCommand,
  ].map(csvEscape).join(',')),
].join('\n');

const md = `# Scaling Evidence Request - ${DATE}

## Summary

This packet converts the current scaling readiness blockers into owner/external evidence requests. It does not authorize Google Ads activation or budget increases.

- Scaling status: ${board.scalingStatus}
- Local blockers: ${board.localBlockerCount}
- Owner/external blockers: ${board.externalBlockerCount}
- Source board: \`${board.outputs?.markdown || 'docs/seo/scaling-readiness-board-' + DATE + '.md'}\`

## Requests

${rows.map((row) => `### ${row.priority} - ${row.id}

- Owner: ${row.owner}
- Evidence needed: ${row.evidenceNeeded}
- Where to collect: ${row.whereToCollect}
- Done when: ${row.doneWhen}
- Verification command: \`${row.verifyCommand}\`
- Current evidence: ${row.evidence}`).join('\n\n')}

## Operating Rule

Keep scaling RED until all P0 requests are satisfied by source-of-record evidence and the verification commands pass.
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_MD)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);
fs.writeFileSync(path.join(ROOT, OUTPUT_CSV), `${csv}\n`);

console.log(JSON.stringify({
  ok: true,
  date: DATE,
  requests: rows.length,
  scalingStatus: board.scalingStatus,
  localBlockers: board.localBlockerCount,
  externalBlockers: board.externalBlockerCount,
  markdown: OUTPUT_MD,
  csv: OUTPUT_CSV,
}, null, 2));
