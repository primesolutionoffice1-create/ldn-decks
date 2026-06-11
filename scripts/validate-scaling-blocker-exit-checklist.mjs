#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const MD_PATH = `docs/seo/scaling-blocker-exit-checklist-${DATE}.md`;
const CSV_PATH = `docs/seo/scaling-blocker-exit-checklist-${DATE}.csv`;
const OUTPUT_JSON = `scripts/output/scaling-blocker-exit-checklist-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/scaling-blocker-exit-checklist-validation-${DATE}.md`;

const REQUIRED_BLOCKERS = [
  'google-call-attribution',
  'lead-outcome-rows',
  'owner-proof-evidence',
];

const REQUIRED_HEADERS = ['priority', 'blocker_id', 'owner', 'current_evidence', 'exit_evidence', 'exit_command', 'expected_after_exit', 'red_flag'];

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

function read(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

const markdown = read(MD_PATH);
const csvText = read(CSV_PATH);
const errors = [];
const warnings = [];

if (!markdown) errors.push(`Missing Markdown checklist: ${MD_PATH}`);
if (!csvText) errors.push(`Missing CSV checklist: ${CSV_PATH}`);

const parsed = csvText ? parseCsv(csvText) : [];
const headers = parsed[0] || [];
for (const header of REQUIRED_HEADERS) {
  if (!headers.includes(header)) errors.push(`Missing CSV header: ${header}`);
}

const rows = headers.length ? toObjects(parsed) : [];
const ids = rows.map((row) => row.blocker_id);
for (const id of REQUIRED_BLOCKERS) {
  const row = rows.find((item) => item.blocker_id === id);
  if (!row) {
    errors.push(`Missing required blocker: ${id}`);
    continue;
  }
  if (row.priority !== 'P0') errors.push(`${id}: priority must be P0.`);
  for (const field of ['current_evidence', 'exit_evidence', 'exit_command', 'expected_after_exit', 'red_flag']) {
    if (!row[field] || row[field].length < 30) errors.push(`${id}: ${field} is too short or missing.`);
  }
  if (!row.exit_command.includes('npm run')) errors.push(`${id}: exit_command must include npm run.`);
  if (!markdown.includes(`### P0 - ${id}`)) errors.push(`Markdown missing section for ${id}.`);
}

const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
if (duplicateIds.length) errors.push(`Duplicate blocker IDs: ${[...new Set(duplicateIds)].join(', ')}`);
if (rows.length !== REQUIRED_BLOCKERS.length) warnings.push(`Expected ${REQUIRED_BLOCKERS.length} blockers, found ${rows.length}.`);
if (!markdown.includes('Do not mark scaling YELLOW or GREEN')) errors.push('Markdown must include the scaling promotion operating rule.');

const result = {
  ok: errors.length === 0,
  date: DATE,
  blockers: rows.length,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# Scaling Blocker Exit Checklist Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Blockers: ${result.blockers}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- Checklist: \`${MD_PATH}\`

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
