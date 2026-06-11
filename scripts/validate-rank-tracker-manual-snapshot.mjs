#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const CSV = 'docs/seo/rank-tracker-manual-snapshot-2026-06-03.csv';
const DOC = 'docs/seo/rank-tracker-manual-snapshot-2026-06-03.md';
const OUTPUT_JSON = `scripts/output/rank-tracker-manual-snapshot-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/rank-tracker-manual-snapshot-validation-${DATE}.md`;

const REQUIRED_COLUMNS = [
  'snapshot_date',
  'source',
  'target_domain',
  'keyword',
  'device',
  'location',
  'position',
  'previous_position',
  'volume',
  'keyword_difficulty',
  'url',
  'intent',
  'status',
  'notes',
];

const ALLOWED_SOURCES = new Set(['SAMPLE_ONLY', 'AHREFS_API', 'AHREFS_MCP', 'MANUAL_VERIFIED_EXPORT']);
const ALLOWED_DEVICES = new Set(['desktop', 'mobile']);
const ALLOWED_STATUS = new Set(['sample_only', 'ranking', 'not_ranking', 'needs_review']);
const ALLOWED_INTENTS = new Set(['local_commercial', 'local_service', 'pricing', 'repair', 'education', 'brand', 'other']);

const FORBIDDEN_PATTERNS = [
  {
    label: 'unrelated-domain text',
    pattern: /prime\s+solution|psolutionservices\.com/i,
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

function isIsoDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function isNumericOrBlank(value) {
  return value === '' || /^-?\d+(\.\d+)?$/.test(value);
}

function isLdnUrl(value) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.hostname === 'ldndecks.com' || url.hostname.endsWith('.ldndecks.com');
  } catch {
    return false;
  }
}

const errors = [];
const warnings = [];
const csvText = read(CSV);
const docText = read(DOC);

if (!csvText) errors.push(`Missing rank snapshot CSV: ${CSV}`);
if (!docText) errors.push(`Missing rank snapshot doc: ${DOC}`);

for (const item of FORBIDDEN_PATTERNS) {
  if (item.pattern.test(csvText) || item.pattern.test(docText)) {
    errors.push(`Rank snapshot contains forbidden content: ${item.label}`);
  }
}

const parsed = csvText ? parseCsv(csvText) : [];
const headers = parsed[0] || [];
for (const column of REQUIRED_COLUMNS) {
  if (!headers.includes(column)) errors.push(`CSV missing required column: ${column}`);
}

const rows = headers.length ? toObjects(parsed) : [];
if (!rows.length && csvText) errors.push('Rank snapshot must include at least one row.');

const seenKeys = new Set();
let sampleRows = 0;
let realRows = 0;
let rankingRows = 0;
let notRankingRows = 0;

rows.forEach((row, index) => {
  const rowNumber = index + 2;
  const key = `${row.keyword}|${row.device}|${row.location}`;

  if (seenKeys.has(key)) errors.push(`Row ${rowNumber}: duplicate keyword/device/location ${key}.`);
  seenKeys.add(key);

  if (row.target_domain !== 'ldndecks.com') errors.push(`Row ${rowNumber}: target_domain must be ldndecks.com.`);
  if (!ALLOWED_SOURCES.has(row.source)) errors.push(`Row ${rowNumber}: unsupported source ${row.source}.`);
  if (!ALLOWED_DEVICES.has(row.device)) errors.push(`Row ${rowNumber}: unsupported device ${row.device}.`);
  if (!ALLOWED_STATUS.has(row.status)) errors.push(`Row ${rowNumber}: unsupported status ${row.status}.`);
  if (!ALLOWED_INTENTS.has(row.intent)) errors.push(`Row ${rowNumber}: unsupported intent ${row.intent}.`);
  if (!row.keyword) errors.push(`Row ${rowNumber}: keyword is required.`);
  if (!row.location) errors.push(`Row ${rowNumber}: location is required.`);
  if (!isLdnUrl(row.url)) errors.push(`Row ${rowNumber}: url must be an ldndecks.com URL.`);
  if (!isNumericOrBlank(row.position)) errors.push(`Row ${rowNumber}: position must be numeric or blank.`);
  if (!isNumericOrBlank(row.previous_position)) errors.push(`Row ${rowNumber}: previous_position must be numeric or blank.`);
  if (!isNumericOrBlank(row.volume)) errors.push(`Row ${rowNumber}: volume must be numeric or blank.`);
  if (!isNumericOrBlank(row.keyword_difficulty)) errors.push(`Row ${rowNumber}: keyword_difficulty must be numeric or blank.`);

  if (row.status === 'sample_only') {
    sampleRows += 1;
    if (row.source !== 'SAMPLE_ONLY') errors.push(`Row ${rowNumber}: sample_only rows must use source SAMPLE_ONLY.`);
    if (!/sample-only|placeholder|no live ranking/i.test(row.notes)) {
      errors.push(`Row ${rowNumber}: sample row notes must explicitly block live ranking claims.`);
    }
  } else {
    realRows += 1;
    if (!isIsoDate(row.snapshot_date)) errors.push(`Row ${rowNumber}: real rows must include ISO snapshot_date.`);
    if (row.source === 'SAMPLE_ONLY') errors.push(`Row ${rowNumber}: real rows cannot use source SAMPLE_ONLY.`);
    if (!/verified|Ahrefs|export|MCP|source-of-record/i.test(row.notes)) {
      warnings.push(`Row ${rowNumber}: notes should name the source-of-record evidence.`);
    }
  }

  if (row.status === 'ranking') {
    rankingRows += 1;
    if (!row.position) errors.push(`Row ${rowNumber}: ranking rows must include position.`);
  }
  if (row.status === 'not_ranking') notRankingRows += 1;
});

for (const phrase of [
  'ldndecks.com',
  'AHREFS_API_TOKEN',
  'npm run seo:rank-snapshot:validate',
  'Do not invent live rankings',
  'Do not change Ahrefs',
]) {
  if (!docText.includes(phrase)) errors.push(`Rank snapshot doc missing required phrase: ${phrase}`);
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  status: realRows ? 'REAL_ROWS_REVIEW_REQUIRED' : 'SAMPLE_ONLY',
  csv: CSV,
  doc: DOC,
  rows: rows.length,
  sampleRows,
  realRows,
  rankingRows,
  notRankingRows,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# Rank Tracker Manual Snapshot Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Mode: ${result.status}
- Rows: ${result.rows}
- Sample rows: ${result.sampleRows}
- Real rows: ${result.realRows}
- Ranking rows: ${result.rankingRows}
- Not-ranking rows: ${result.notRankingRows}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- CSV: \`${CSV}\`
- Doc: \`${DOC}\`

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
