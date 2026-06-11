#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const BOARD_CSV = `docs/seo/dataforseo-n8n-findings-review-board-${DATE}.csv`;
const BOARD_VALIDATION_JSON = `scripts/output/dataforseo-n8n-findings-review-board-validation-${DATE}.json`;
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-promotion-gate-${DATE}.json`;
const OUTPUT_MD = `scripts/output/dataforseo-n8n-promotion-gate-${DATE}.md`;

const PROMOTION_BLOCKERS = [
  'DataForSEO findings are not verified project proof.',
  'Owner/source review is required before any SEO or citation work item.',
  'Public claims require the separate evidence ledger and proof preflight gates.',
  'Ads actions require measurement and scaling readiness gates to move out of RED.',
  'Sample-only rows must be replaced by real read-only findings before review.',
];

function readText(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let value = '';
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (inQuotes && char === '"' && next === '"') {
      value += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }

    if (!inQuotes && char === ',') {
      row.push(value);
      value = '';
      continue;
    }

    if (!inQuotes && (char === '\n' || char === '\r')) {
      if (char === '\r' && next === '\n') index += 1;
      row.push(value);
      if (row.some((cell) => cell.trim() !== '')) rows.push(row);
      row = [];
      value = '';
      continue;
    }

    value += char;
  }

  if (value || row.length) {
    row.push(value);
    if (row.some((cell) => cell.trim() !== '')) rows.push(row);
  }

  return rows;
}

function toObjects(rows) {
  const [headers, ...body] = rows;
  return body.map((row) => Object.fromEntries(headers.map((header, index) => [header, row[index] ?? ''])));
}

const errors = [];
const warnings = [];
const boardText = readText(BOARD_CSV);
const validationText = readText(BOARD_VALIDATION_JSON);

if (!boardText) errors.push(`Missing findings review board CSV: ${BOARD_CSV}`);

let boardValidation = null;
if (validationText) {
  try {
    boardValidation = JSON.parse(validationText);
  } catch (error) {
    errors.push(`Review board validation JSON is invalid: ${error.message}`);
  }
}

if (!boardValidation?.ok) {
  errors.push('Findings review board validation must pass before promotion gate can run.');
}

const rows = boardText ? toObjects(parseCsv(boardText)) : [];
const sampleRows = rows.filter((row) => row.review_decision === 'sample_only_no_action');
const rejectedRows = rows.filter((row) => row.review_decision === 'rejected_no_action');
const candidateRows = rows.filter((row) => row.review_decision === 'needs_owner_review');
const unsafeRows = rows.filter((row) => row.public_claim_allowed !== 'no' || row.ads_action_allowed !== 'no');

if (unsafeRows.length) {
  errors.push(`Promotion gate found rows with public claims or Ads actions allowed: ${unsafeRows.map((row) => row.finding_id).join(', ')}`);
}

for (const row of candidateRows) {
  if (row.owner_review_required !== 'yes') {
    errors.push(`${row.finding_id}: candidate rows must require owner review.`);
  }
  if (!/Owner\/source review|required before any SEO|review/i.test(row.next_step)) {
    warnings.push(`${row.finding_id}: candidate next_step should spell out owner/source review.`);
  }
}

const promotableRows = [];
const blockedRows = rows.map((row) => ({
  finding_id: row.finding_id,
  review_decision: row.review_decision,
  promotion_status: 'blocked',
  reason: row.review_decision === 'sample_only_no_action'
    ? 'sample-only row; replace with a real read-only finding before review'
    : 'requires separate proof, owner-review, measurement, and scaling gates',
}));

const status = candidateRows.length
  ? 'CANDIDATES_BLOCKED_PENDING_REVIEW'
  : 'NO_PROMOTABLE_FINDINGS';

const result = {
  ok: errors.length === 0,
  date: DATE,
  status,
  rows: rows.length,
  sampleRows: sampleRows.length,
  rejectedRows: rejectedRows.length,
  candidateRows: candidateRows.length,
  promotableRows: promotableRows.length,
  publicClaimsAllowed: unsafeRows.filter((row) => row.public_claim_allowed !== 'no').length,
  adsActionsAllowed: unsafeRows.filter((row) => row.ads_action_allowed !== 'no').length,
  blockers: PROMOTION_BLOCKERS,
  blockedRows,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# DataForSEO n8n Promotion Gate - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Mode: ${result.status}
- Rows reviewed: ${result.rows}
- Sample rows: ${result.sampleRows}
- Candidate rows: ${result.candidateRows}
- Promotable rows: ${result.promotableRows}
- Public claims allowed: ${result.publicClaimsAllowed}
- Ads actions allowed: ${result.adsActionsAllowed}
- Errors: ${errors.length}
- Warnings: ${warnings.length}

## Promotion Rule

DataForSEO/n8n findings are review inputs only. They cannot be promoted to public claims, verified proof, content rewrites, citation edits, Ads actions, budget changes, bidding changes, or conversion-setting changes until separate owner/source review, proof, measurement, and scaling gates pass.

## Required Blockers

${PROMOTION_BLOCKERS.map((item) => `- ${item}`).join('\n')}

## Blocked Rows

${blockedRows.length ? blockedRows.map((row) => `- ${row.finding_id}: ${row.reason}`).join('\n') : '- none'}

## Errors

${errors.length ? errors.map((item) => `- ${item}`).join('\n') : '- none'}

## Warnings

${warnings.length ? warnings.map((item) => `- ${item}`).join('\n') : '- none'}
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);

console.log(JSON.stringify(result, null, 2));
if (!result.ok) process.exit(1);
