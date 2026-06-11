#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const OUTPUT_MD = `docs/seo/scaling-blocker-exit-checklist-${DATE}.md`;
const OUTPUT_CSV = `docs/seo/scaling-blocker-exit-checklist-${DATE}.csv`;

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

function exitPlan(blocker) {
  if (blocker.id === 'google-call-attribution') {
    return {
      exitEvidence: 'Real Google Ads/GTM read-only evidence rows showing qualified-call conversion action source, primary/secondary status, 60s+ duration or approved threshold, clean diagnostics, and no phone_click primary Smart Bidding risk.',
      exitCommand: 'npm run measurement:call-attribution-evidence && npm run measurement:gate && npm run scaling:readiness',
      expectedAfterExit: 'Call attribution evidence is no longer SAMPLE_ONLY/LIVE_EMPTY; measurement gate no longer keeps google-call-attribution as external-proof blocker.',
      redFlag: 'Any phone_click primary risk, missing diagnostics, or unproven Google forwarding/call-source setup keeps this blocker open.',
    };
  }

  if (blocker.id === 'lead-outcome-rows') {
    return {
      exitEvidence: 'At least 5 real lead outcome rows, 0 validation errors, qualified status supported by notes/evidence, and upload eligibility only when click IDs or approved enhanced/offline path exist.',
      exitCommand: 'npm run measurement:lead-outcomes && npm run scaling:readiness',
      expectedAfterExit: 'Lead outcome validation reports PASS with 5+ real rows and this blocker disappears from scaling readiness.',
      redFlag: 'SAMPLE_ONLY, LIVE_EMPTY, fewer than 5 real rows, unqualified upload-eligible rows, or phone rows without duration/evidence keeps this blocker open.',
    };
  }

  if (blocker.id === 'owner-proof-evidence') {
    return {
      exitEvidence: 'Owner-filled proof packet rows imported safely, verified proof regenerated, no blocked/proof-incomplete pages, no public placeholders, and prepublish no longer expected-blocked.',
      exitCommand: 'npm run seo:evidence-action-packet:validate && npm run seo:validate-owner-intake && npm run seo:proof-preflight && npm run seo:weekly',
      expectedAfterExit: 'Proof preflight reports 0 blocked and 0 proof-incomplete pages; owner proof blocker disappears from scaling readiness.',
      redFlag: 'Unknown/placeholder project fields, missing privacy pass, unresolved repair warranty/cost evidence, or prepublish expected-blocked keeps this blocker open.',
    };
  }

  return {
    exitEvidence: blocker.action,
    exitCommand: 'npm run scaling:readiness',
    expectedAfterExit: 'Blocker disappears from scaling readiness.',
    redFlag: 'Any unresolved P0 evidence keeps this blocker open.',
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
  priority: blocker.priority,
  blockerId: blocker.id,
  owner: blocker.owner,
  currentEvidence: blocker.evidence,
  ...exitPlan(blocker),
}));

const csvHeaders = ['priority', 'blocker_id', 'owner', 'current_evidence', 'exit_evidence', 'exit_command', 'expected_after_exit', 'red_flag'];
const csv = [
  csvHeaders.join(','),
  ...rows.map((row) => [
    row.priority,
    row.blockerId,
    row.owner,
    row.currentEvidence,
    row.exitEvidence,
    row.exitCommand,
    row.expectedAfterExit,
    row.redFlag,
  ].map(csvEscape).join(',')),
].join('\n');

const md = `# Scaling Blocker Exit Checklist - ${DATE}

## Summary

- Scaling status: ${board.scalingStatus}
- Current blockers: ${rows.length}
- Local blockers: ${board.localBlockerCount}
- Owner/external blockers: ${board.externalBlockerCount}
- Source board: \`${board.outputs?.markdown || 'docs/seo/scaling-readiness-board-' + DATE + '.md'}\`

## Exit Checklist

${rows.map((row) => `### ${row.priority} - ${row.blockerId}

- Owner: ${row.owner}
- Current evidence: ${row.currentEvidence}
- Exit evidence: ${row.exitEvidence}
- Exit command: \`${row.exitCommand}\`
- Expected after exit: ${row.expectedAfterExit}
- Red flag: ${row.redFlag}`).join('\n\n')}

## Operating Rule

Do not mark scaling YELLOW or GREEN until every P0 blocker has source-of-record evidence, the listed exit command passes, and \`npm run scaling:readiness\` no longer reports that blocker.
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_MD)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);
fs.writeFileSync(path.join(ROOT, OUTPUT_CSV), `${csv}\n`);

console.log(JSON.stringify({
  ok: true,
  date: DATE,
  blockers: rows.length,
  scalingStatus: board.scalingStatus,
  localBlockers: board.localBlockerCount,
  externalBlockers: board.externalBlockerCount,
  markdown: OUTPUT_MD,
  csv: OUTPUT_CSV,
}, null, 2));
