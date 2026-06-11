#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const BOARD_MD = `docs/seo/gbp-maps-proof-ops-board-${DATE}.md`;
const BOARD_CSV = `docs/seo/gbp-maps-proof-ops-board-${DATE}.csv`;
const OUTPUT_JSON = `scripts/output/proof-ops-board-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/proof-ops-board-validation-${DATE}.md`;

const REQUIRED_HEADERS = ['priority', 'lane', 'task', 'page', 'status', 'source', 'owner_needed', 'evidence_required'];
const ALLOWED_PRIORITIES = new Set(['P0', 'P1', 'P2', 'P3']);
const ALLOWED_OWNER_NEEDED = new Set(['yes', 'no']);
const REQUIRED_LANES = new Set(['citations', 'commercial-proof', 'gbp', 'photo-ingestion', 'proof', 'proof-ops', 'reviews']);
const REQUIRED_PHRASES = [
  'does not claim live Google Business Profile metrics',
  'Canonical NAP',
  'Loudoun Decks',
  '13704 Winding Oak Cir',
  '+15716557207',
  'Do not fabricate project stories',
  'Do not publish fake customer Q&A',
  'Do not add AggregateRating',
  'Do not claim BuildZoom/license cleanup is resolved until the public profile reflects it',
];

const FORBIDDEN_PATTERNS = [
  {
    label: 'psolutionservices domain',
    pattern: /psolutionservices\.com/i,
  },
  {
    label: 'invalid image model reference',
    pattern: /gpt-image-2/i,
  },
  {
    label: 'secret-like field',
    pattern: /(api[_-]?key|access[_-]?token|refresh[_-]?token|password|secret|client[_-]?secret|auth[_-]?token)\s*[:=]\s*[^,\s"}]{8,}/i,
  },
];

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

const errors = [];
const warnings = [];
const markdown = read(BOARD_MD);
const csvText = read(BOARD_CSV);

if (!markdown) errors.push(`Missing proof ops board Markdown: ${BOARD_MD}`);
if (!csvText) errors.push(`Missing proof ops board CSV: ${BOARD_CSV}`);

for (const item of FORBIDDEN_PATTERNS) {
  if (item.pattern.test(markdown) || item.pattern.test(csvText)) {
    errors.push(`Proof ops board contains forbidden content: ${item.label}`);
  }
}

const primeMentions = [...`${markdown}\n${csvText}`.matchAll(/Prime\s+Solutions?/gi)].length;
if (primeMentions > 0 && !/old Prime Solutions\/Ashburn variant/.test(markdown) && !/old Prime Solutions\/Ashburn variant/.test(csvText)) {
  errors.push('Prime Solutions may appear only as an old citation cleanup variant, not as an active project/domain.');
}

for (const phrase of REQUIRED_PHRASES) {
  if (!markdown.includes(phrase)) errors.push(`Proof ops board missing required phrase: ${phrase}`);
}

const parsed = csvText ? parseCsv(csvText) : [];
const headers = parsed[0] || [];
for (const header of REQUIRED_HEADERS) {
  if (!headers.includes(header)) errors.push(`CSV missing required header: ${header}`);
}

const rows = headers.length ? toObjects(parsed) : [];
const taskKeys = new Set();
let p0 = 0;
let p1 = 0;
let ownerNeeded = 0;
const lanes = new Set();

rows.forEach((row, index) => {
  const rowNumber = index + 2;
  const taskKey = `${row.priority}|${row.lane}|${row.task}|${row.page}`;

  if (taskKeys.has(taskKey)) errors.push(`Row ${rowNumber}: duplicate task ${taskKey}.`);
  taskKeys.add(taskKey);

  if (!ALLOWED_PRIORITIES.has(row.priority)) errors.push(`Row ${rowNumber}: unsupported priority ${row.priority}.`);
  if (!row.lane) errors.push(`Row ${rowNumber}: lane is required.`);
  if (!row.task) errors.push(`Row ${rowNumber}: task is required.`);
  if (!row.page) errors.push(`Row ${rowNumber}: page is required.`);
  if (!row.status) errors.push(`Row ${rowNumber}: status is required.`);
  if (!row.source) errors.push(`Row ${rowNumber}: source is required.`);
  if (!ALLOWED_OWNER_NEEDED.has(row.owner_needed)) errors.push(`Row ${rowNumber}: owner_needed must be yes or no.`);
  if (!row.evidence_required || row.evidence_required.length < 20) {
    errors.push(`Row ${rowNumber}: evidence_required is too short or missing.`);
  }

  if (row.priority === 'P0') p0 += 1;
  if (row.priority === 'P1') p1 += 1;
  if (row.owner_needed === 'yes') ownerNeeded += 1;
  lanes.add(row.lane);

  if (/stock imagery|fake project|fake customer|AggregateRating/i.test(row.evidence_required) && !/Do not|No stock|not fake/i.test(row.evidence_required)) {
    warnings.push(`Row ${rowNumber}: risk wording should be framed as a prohibition or guardrail.`);
  }
});

for (const lane of REQUIRED_LANES) {
  if (!lanes.has(lane)) errors.push(`Proof ops board missing required lane: ${lane}`);
}

if (rows.length < 40) warnings.push(`Expected at least 40 proof ops tasks, found ${rows.length}.`);
if (p0 < 15) warnings.push(`Expected at least 15 P0 proof ops tasks, found ${p0}.`);
if (ownerNeeded !== rows.length) warnings.push(`Expected all tasks to require owner/manual evidence, ${ownerNeeded}/${rows.length} do.`);

const result = {
  ok: errors.length === 0,
  date: DATE,
  rows: rows.length,
  p0,
  p1,
  ownerNeeded,
  lanes: [...lanes].sort(),
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# Proof Ops Board Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Rows: ${result.rows}
- P0: ${result.p0}
- P1: ${result.p1}
- Owner/manual rows: ${result.ownerNeeded}
- Lanes: ${result.lanes.join(', ')}
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
