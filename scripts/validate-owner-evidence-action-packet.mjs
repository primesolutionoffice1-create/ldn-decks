#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const OUTPUT_JSON = `scripts/output/owner-evidence-action-packet-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/owner-evidence-action-packet-validation-${DATE}.md`;

const REQUIRED_HEADERS = [
  'priority',
  'page',
  'readiness_page',
  'page_verdict',
  'page_top_issue',
  'evidence_type',
  'evidence_id',
  'status',
  'owner_action',
  'required_source',
  'privacy_note',
  'verification_gate',
];

const REQUIRED_PAGES = ['/services/deck-repair', '/before-and-after', '/showcase', '/composite-deck-cost-northern-virginia', 'sitewide'];
const REQUIRED_P0_TYPES = ['asset', 'repair_cost_range', 'warranty'];
const REQUIRED_PRIVACY_PHRASES = ['customer', 'address'];

function parseTrailingJson(output) {
  const start = output.indexOf('{');
  const end = output.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  return JSON.parse(output.slice(start, end + 1));
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

function countBy(rows, key) {
  return rows.reduce((acc, row) => {
    acc[row[key]] = (acc[row[key]] || 0) + 1;
    return acc;
  }, {});
}

const packetOutput = execFileSync('node', ['scripts/generate-owner-evidence-packet.mjs'], {
  cwd: ROOT,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
});
const packet = parseTrailingJson(packetOutput);
const errors = [];
const warnings = [];

if (!packet?.ok) errors.push('Owner evidence packet generator did not return ok=true.');
if (!packet?.csv || !fs.existsSync(path.join(ROOT, packet.csv))) errors.push(`Missing owner evidence action CSV: ${packet?.csv || 'not reported'}`);
if (!packet?.report || !fs.existsSync(path.join(ROOT, packet.report))) errors.push(`Missing owner evidence action report: ${packet?.report || 'not reported'}`);

const csvText = packet?.csv && fs.existsSync(path.join(ROOT, packet.csv)) ? fs.readFileSync(path.join(ROOT, packet.csv), 'utf8') : '';
const reportText = packet?.report && fs.existsSync(path.join(ROOT, packet.report)) ? fs.readFileSync(path.join(ROOT, packet.report), 'utf8') : '';
const parsed = csvText ? parseCsv(csvText) : [];
const headers = parsed[0] || [];
for (const header of REQUIRED_HEADERS) {
  if (!headers.includes(header)) errors.push(`Missing CSV header: ${header}`);
}

const rows = headers.length ? toObjects(parsed) : [];
const byPriority = countBy(rows, 'priority');
const byPage = countBy(rows, 'page');
const byType = countBy(rows, 'evidence_type');

if (rows.length !== 26) errors.push(`Expected 26 owner action rows, found ${rows.length}.`);
if ((byPriority.P0 || 0) !== 13) errors.push(`Expected 13 P0 rows, found ${byPriority.P0 || 0}.`);
if ((byPriority.P1 || 0) !== 13) errors.push(`Expected 13 P1 rows, found ${byPriority.P1 || 0}.`);

for (const page of REQUIRED_PAGES) {
  if (!byPage[page]) errors.push(`Missing required owner action page: ${page}`);
}
for (const type of REQUIRED_P0_TYPES) {
  if (!rows.some((row) => row.priority === 'P0' && row.evidence_type === type)) {
    errors.push(`Missing P0 evidence type: ${type}`);
  }
}

for (const row of rows) {
  const label = `${row.priority || '?'} ${row.page || '?'} ${row.evidence_type || '?'} ${row.evidence_id || '?'}`;
  for (const field of ['owner_action', 'required_source', 'privacy_note', 'verification_gate']) {
    if (!row[field] || row[field].length < 20) errors.push(`${label}: ${field} is too short or missing.`);
  }
  if (!['P0', 'P1'].includes(row.priority)) errors.push(`${label}: priority must be P0 or P1.`);
  if (!['blocked', 'proof-incomplete'].includes(row.page_verdict)) {
    warnings.push(`${label}: page_verdict is ${row.page_verdict || 'missing'}; confirm this is expected.`);
  }
  if (!['missing', 'partial'].includes(row.status)) {
    warnings.push(`${label}: status is ${row.status || 'missing'}; confirm this unresolved action still belongs in packet.`);
  }
  if (!row.verification_gate.includes('verified') && !row.verification_gate.includes('public/')) {
    errors.push(`${label}: verification_gate must describe verified/public promotion criteria.`);
  }
}

const combinedPrivacy = rows.map((row) => row.privacy_note).join(' ').toLowerCase();
for (const phrase of REQUIRED_PRIVACY_PHRASES) {
  if (!combinedPrivacy.includes(phrase)) errors.push(`Privacy notes must mention ${phrase} handling.`);
}

const deckRepairP0 = rows.filter((row) => row.priority === 'P0' && row.page === '/services/deck-repair');
if (deckRepairP0.length < 12) errors.push(`Expected at least 12 /services/deck-repair P0 rows, found ${deckRepairP0.length}.`);
if (!rows.some((row) => row.evidence_id === 'repair-workmanship-warranty-term')) {
  errors.push('Missing repair workmanship warranty term action.');
}

if (!reportText.includes('## Directory Citation Evidence Addendum')) {
  errors.push('Owner evidence action packet must include Directory Citation Evidence Addendum.');
}
if (!reportText.includes('npm run seo:directory-citations:validate')) {
  errors.push('Owner evidence action packet must include directory citation validation command.');
}
if (/npm run seo:import-evidence -- --file/i.test(reportText)) {
  errors.push('Owner evidence action packet must not show generic import-evidence commands without --type.');
}
for (const command of [
  'npm run seo:import-evidence -- --type projects',
  'npm run seo:import-evidence -- --type warranty_terms',
  'npm run seo:import-evidence -- --type repair_cost_ranges',
  'npm run seo:ingest-assets -- --file',
]) {
  if (!reportText.includes(command)) errors.push(`Owner evidence action packet missing typed owner workflow command: ${command}`);
}
for (const directory of ['NADRA directory', 'Bing Places', 'Apple Business Connect', 'Nextdoor', 'Angi']) {
  if (!reportText.includes(`| ${directory} |`)) errors.push(`Owner evidence action packet missing directory row: ${directory}`);
}
for (const phrase of ['Do not add Apple Maps to `sameAs`', 'Do not add Nextdoor to `sameAs`', 'Do not add Angi to `sameAs`']) {
  if (!reportText.includes(phrase)) errors.push(`Owner evidence action packet missing sameAs guard: ${phrase}`);
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  rows: rows.length,
  p0: byPriority.P0 || 0,
  p1: byPriority.P1 || 0,
  pages: Object.keys(byPage).length,
  byPage,
  byType,
  errors,
  warnings,
  packet: {
    report: packet?.report || null,
    csv: packet?.csv || null,
  },
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# Owner Evidence Action Packet Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Rows: ${result.rows}
- P0: ${result.p0}
- P1: ${result.p1}
- Pages: ${result.pages}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- Packet report: \`${result.packet.report || 'missing'}\`
- Packet CSV: \`${result.packet.csv || 'missing'}\`

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
