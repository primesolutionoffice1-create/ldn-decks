#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const BOARD_MD = `docs/seo/dataforseo-n8n-findings-review-board-${DATE}.md`;
const BOARD_CSV = `docs/seo/dataforseo-n8n-findings-review-board-${DATE}.csv`;
const INTAKE_VALIDATION_JSON = `scripts/output/dataforseo-n8n-findings-intake-validation-${DATE}.json`;
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-findings-review-board-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/dataforseo-n8n-findings-review-board-validation-${DATE}.md`;

const REQUIRED_COLUMNS = [
  'finding_id',
  'priority',
  'review_decision',
  'finding_type',
  'affected_url',
  'evidence_strength',
  'confidence',
  'public_claim_allowed',
  'ads_action_allowed',
  'owner_review_required',
  'next_step',
  'source_workflow',
  'notes',
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
const mdText = readText(BOARD_MD);
const csvText = readText(BOARD_CSV);
const validationText = readText(INTAKE_VALIDATION_JSON);

if (!mdText) errors.push(`Missing review board Markdown: ${BOARD_MD}`);
if (!csvText) errors.push(`Missing review board CSV: ${BOARD_CSV}`);

let intakeValidation = null;
if (validationText) {
  try {
    intakeValidation = JSON.parse(validationText);
  } catch (error) {
    errors.push(`Findings intake validation JSON is invalid: ${error.message}`);
  }
}

if (!intakeValidation?.ok) {
  errors.push('Findings intake validation must pass before review board validation.');
}

let rows = [];
if (csvText) {
  const parsed = parseCsv(csvText);
  const headers = parsed[0] || [];
  for (const column of REQUIRED_COLUMNS) {
    if (!headers.includes(column)) errors.push(`Review board CSV missing column: ${column}`);
  }
  rows = toObjects(parsed);
}

if (rows.length !== (intakeValidation?.rows ?? rows.length)) {
  errors.push(`Review board row count ${rows.length} does not match findings intake rows ${intakeValidation?.rows}.`);
}

for (const [index, row] of rows.entries()) {
  const rowNumber = index + 2;
  if (row.public_claim_allowed !== 'no') {
    errors.push(`Row ${rowNumber}: public_claim_allowed must be no.`);
  }
  if (row.ads_action_allowed !== 'no') {
    errors.push(`Row ${rowNumber}: ads_action_allowed must be no.`);
  }
  if (row.owner_review_required !== 'yes') {
    errors.push(`Row ${rowNumber}: owner_review_required must be yes.`);
  }
  if (!['sample_only_no_action', 'rejected_no_action', 'needs_owner_review'].includes(row.review_decision)) {
    errors.push(`Row ${rowNumber}: unsupported review_decision ${row.review_decision}.`);
  }
  if (!/^https:\/\/ldndecks\.com/.test(row.affected_url)) {
    errors.push(`Row ${rowNumber}: affected_url must be an https://ldndecks.com URL.`);
  }
  if (!/review|Replace sample row|Owner\/source review/i.test(row.next_step)) {
    warnings.push(`Row ${rowNumber}: next_step should keep the finding in review mode.`);
  }
}

for (const phrase of [
  'review queue only',
  'must not become public claims',
  'Ads actions',
  'verified project proof',
  'Findings validator',
]) {
  if (!mdText.includes(phrase)) errors.push(`Review board Markdown missing required phrase: ${phrase}`);
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  status: intakeValidation?.status ?? null,
  rows: rows.length,
  realRows: intakeValidation?.realRows ?? null,
  sampleRows: intakeValidation?.sampleRows ?? null,
  publicClaimsAllowed: rows.filter((row) => row.public_claim_allowed !== 'no').length,
  adsActionsAllowed: rows.filter((row) => row.ads_action_allowed !== 'no').length,
  errors,
  warnings,
  board: BOARD_MD,
  csv: BOARD_CSV,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# DataForSEO n8n Findings Review Board Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Intake mode: ${result.status ?? 'unknown'}
- Rows: ${result.rows}
- Real rows: ${result.realRows ?? '?'}
- Sample rows: ${result.sampleRows ?? '?'}
- Public claims allowed: ${result.publicClaimsAllowed}
- Ads actions allowed: ${result.adsActionsAllowed}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- Board: \`${BOARD_MD}\`
- CSV: \`${BOARD_CSV}\`

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
