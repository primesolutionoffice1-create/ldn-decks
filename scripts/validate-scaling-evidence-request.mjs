#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const MD_PATH = `docs/ads-tracking/scaling-evidence-request-${DATE}.md`;
const CSV_PATH = `docs/ads-tracking/scaling-evidence-request-${DATE}.csv`;
const OUTPUT_JSON = `scripts/output/scaling-evidence-request-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/scaling-evidence-request-validation-${DATE}.md`;

const REQUIRED_BLOCKERS = [
  {
    id: 'google-call-attribution',
    owner: 'external',
    verifyCommand: 'npm run measurement:call-attribution-evidence && npm run measurement:gate && npm run scaling:readiness',
    requiredPhrases: ['Google Ads', 'GTM', 'qualified-call attribution', 'live-call-attribution-evidence'],
  },
  {
    id: 'lead-outcome-rows',
    owner: 'owner',
    verifyCommand: 'npm run measurement:lead-outcomes && npm run scaling:readiness',
    requiredPhrases: ['5-10 real', 'lead outcome rows', 'click ID'],
  },
  {
    id: 'owner-proof-evidence',
    owner: 'owner',
    verifyCommand: 'npm run seo:proof-preflight && npm run seo:weekly',
    requiredPhrases: ['Owner-approved proof packets', 'blocked/proof-incomplete', 'privacy confirmation'],
  },
];

const REQUIRED_HEADERS = ['priority', 'blocker_id', 'owner', 'evidence_needed', 'where_to_collect', 'done_when', 'verify_command'];

function read(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (char !== '\r') {
      field += char;
    }
  }

  if (field || row.length) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter((items) => items.some((item) => item.trim()));
}

function toObjects(rows) {
  const [headers, ...body] = rows;
  return body.map((items) => Object.fromEntries(headers.map((header, index) => [header, String(items[index] ?? '').trim()])));
}

function renderMarkdown(result) {
  return `# Scaling Evidence Request Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Requests: ${result.requests}
- Errors: ${result.errors.length}
- Warnings: ${result.warnings.length}
- Markdown: \`${MD_PATH}\`
- CSV: \`${CSV_PATH}\`

## Errors

${result.errors.length ? result.errors.map((item) => `- ${item}`).join('\n') : '- none'}

## Warnings

${result.warnings.length ? result.warnings.map((item) => `- ${item}`).join('\n') : '- none'}
`;
}

const errors = [];
const warnings = [];
const markdown = read(MD_PATH);
const csvText = read(CSV_PATH);

if (!markdown) errors.push(`Missing Markdown packet: ${MD_PATH}`);
if (!csvText) errors.push(`Missing CSV packet: ${CSV_PATH}`);

const parsedCsv = csvText ? parseCsv(csvText) : [];
const headers = parsedCsv[0] || [];
for (const header of REQUIRED_HEADERS) {
  if (!headers.includes(header)) errors.push(`Missing CSV header: ${header}`);
}

const rows = headers.length ? toObjects(parsedCsv) : [];
const ids = rows.map((row) => row.blocker_id);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) errors.push(`Duplicate blocker rows: ${[...new Set(duplicateIds)].join(', ')}`);

for (const blocker of REQUIRED_BLOCKERS) {
  const row = rows.find((item) => item.blocker_id === blocker.id);
  if (!row) {
    errors.push(`Missing required blocker row: ${blocker.id}`);
    continue;
  }

  if (row.priority !== 'P0') errors.push(`${blocker.id}: priority must be P0.`);
  if (row.owner !== blocker.owner) errors.push(`${blocker.id}: owner must be ${blocker.owner}.`);
  if (row.verify_command !== blocker.verifyCommand) errors.push(`${blocker.id}: verify_command mismatch.`);
  for (const field of ['evidence_needed', 'where_to_collect', 'done_when']) {
    if (!row[field] || row[field].length < 30) errors.push(`${blocker.id}: ${field} is too short or missing.`);
  }
  for (const phrase of blocker.requiredPhrases) {
    if (!row.evidence_needed.includes(phrase) && !markdown.includes(phrase)) {
      errors.push(`${blocker.id}: missing required phrase "${phrase}".`);
    }
  }
  if (!markdown.includes(`### P0 - ${blocker.id}`)) errors.push(`Markdown missing section for ${blocker.id}.`);
  if (!markdown.includes(`Verification command: \`${blocker.verifyCommand}\``)) {
    errors.push(`Markdown missing verification command for ${blocker.id}.`);
  }
}

if (rows.length !== REQUIRED_BLOCKERS.length) {
  warnings.push(`Expected ${REQUIRED_BLOCKERS.length} request rows, found ${rows.length}.`);
}

if (!markdown.includes('does not authorize Google Ads activation or budget increases')) {
  errors.push('Markdown must include the no-activation/no-budget-increase warning.');
}
if (!markdown.includes('Keep scaling RED until all P0 requests are satisfied')) {
  errors.push('Markdown must include the scaling RED operating rule.');
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  requests: rows.length,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), renderMarkdown(result));

console.log(JSON.stringify(result, null, 2));
if (!result.ok) process.exit(1);
