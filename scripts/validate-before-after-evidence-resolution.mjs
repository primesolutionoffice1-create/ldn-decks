#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const REQUIRED_HEADERS = ['project_id', 'page', 'current_status', 'known_assets', 'evidence_needed', 'next_action'];
const REQUIRED_ROWS = new Map([
  ['before-after-project-1', { page: '/before-and-after', status: 'partial', assets: ['project1before.jpeg', 'project1after.jpeg'] }],
  ['before-after-project-2', { page: '/before-and-after', status: 'partial', assets: ['project2before.jpeg', 'project2after.jpeg'] }],
  ['before-after-project-3', { page: '/before-and-after', status: 'partial', assets: ['project3before.jpeg', 'project3after.jpeg'] }],
  ['before-after-project-4', { page: '/before-and-after', status: 'partial', assets: ['project4before.jpeg', 'project4after.jpeg'] }],
  ['composite-cost-examples', { page: '/composite-deck-cost-northern-virginia', status: 'missing', assets: ['none linked to evidence ledger'] }],
]);

const REQUIRED_MARKDOWN_PHRASES = [
  'All four are marked `partial`, not `verified`.',
  'Public copy keeps `[VERIFY ...]` markers for month/year, timeline, final cost, and claim-specific highlights.',
  'Do not remove `[VERIFY ...]` placeholders or describe these entries as verified case studies until the matching project record has:',
  'No customer names, street addresses, phone numbers, emails, permit numbers, or unredacted private documents should be stored in the public repo.',
  '`/composite-deck-cost-northern-virginia` currently treats local examples as estimating scenarios, not verified case studies.',
  'The owner should replace `UNKNOWN - OWNER TO FILL` values and add only facts that can be supported by an estimate, invoice, project record, photo metadata, or direct owner confirmation.',
  'Remove the matching `[VERIFY ...]` markers only for records that are actually verified.',
];

const REQUIRED_PROJECT_SECTIONS = [
  '### before-after-project-1',
  '### before-after-project-2',
  '### before-after-project-3',
  '### before-after-project-4',
  '## Composite Cost Page Evidence Gap',
];

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
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

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const mdPath = path.join(DOCS_DIR, `before-after-evidence-resolution-${today}.md`);
  const csvPath = path.join(DOCS_DIR, `before-after-evidence-resolution-${today}.csv`);
  const validationJsonPath = path.join(OUTPUT_DIR, `before-after-evidence-resolution-validation-${today}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `before-after-evidence-resolution-validation-${today}.md`);
  const errors = [];
  const warnings = [];

  assert(fs.existsSync(mdPath), `Missing before/after evidence resolution markdown: ${path.relative(ROOT, mdPath)}`, errors);
  assert(fs.existsSync(csvPath), `Missing before/after evidence resolution CSV: ${path.relative(ROOT, csvPath)}`, errors);

  const markdown = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8') : '';
  const csvText = fs.existsSync(csvPath) ? fs.readFileSync(csvPath, 'utf8') : '';
  const rows = csvText ? parseCsv(csvText) : [];
  const headers = rows[0] || [];
  const records = headers.length ? toObjects(rows) : [];
  const byId = new Map(records.map((record) => [record.project_id, record]));

  assert(markdown.includes(`Created: ${today}`), `Markdown must use today's date: ${today}`, errors);
  assert(markdown.includes('## Publish Rule'), 'Markdown missing Publish Rule section.', errors);
  assert(markdown.includes('## Current Project Cards'), 'Markdown missing Current Project Cards section.', errors);
  assert(markdown.includes('## Owner Collection Packet'), 'Markdown missing Owner Collection Packet section.', errors);
  assert(markdown.includes('## Next Implementation Step After Evidence Arrives'), 'Markdown missing Next Implementation Step section.', errors);

  for (const phrase of REQUIRED_MARKDOWN_PHRASES) {
    assert(markdown.includes(phrase), `Missing required proof-safety phrase: ${phrase}`, errors);
  }

  for (const section of REQUIRED_PROJECT_SECTIONS) {
    assert(markdown.includes(section), `Missing required section: ${section}`, errors);
  }

  for (const header of REQUIRED_HEADERS) {
    assert(headers.includes(header), `CSV missing required header: ${header}`, errors);
  }

  assert(records.length === REQUIRED_ROWS.size, `Expected ${REQUIRED_ROWS.size} evidence rows, found ${records.length}.`, errors);

  for (const [id, expected] of REQUIRED_ROWS.entries()) {
    const record = byId.get(id);
    assert(Boolean(record), `Missing evidence resolution row: ${id}`, errors);
    if (!record) continue;

    assert(record.page === expected.page, `${id} page drifted: expected ${expected.page}, found ${record.page}.`, errors);
    assert(record.current_status === expected.status, `${id} status must remain ${expected.status}, found ${record.current_status}.`, errors);
    for (const asset of expected.assets) {
      assert(record.known_assets.includes(asset), `${id} missing known asset marker: ${asset}`, errors);
    }
    assert(/owner|estimate|invoice|record|metadata|permit|HOA|cost|range|material|scope/i.test(record.evidence_needed), `${id} evidence_needed is too weak.`, errors);
    if (id.startsWith('before-after-')) {
      assert(record.next_action === 'Collect owner project record before removing VERIFY markers', `${id} next_action must preserve VERIFY marker guard.`, errors);
    }
    if (id === 'composite-cost-examples') {
      assert(record.next_action === 'Keep as estimating scenarios until records are verified', 'Composite cost row must remain estimating-scenario-only.', errors);
    }
  }

  assert(markdown.includes('npm run seo:import-evidence -- --file path/to/owner-filled.csv --dry-run'), 'Markdown missing dry-run import command.', errors);
  assert(markdown.includes('npm run seo:import-evidence -- --file path/to/owner-filled.csv --allow-verified'), 'Markdown missing explicit allow-verified import command after inspection.', errors);
  assert(markdown.includes('npm run seo:validate-evidence'), 'Markdown missing validate-evidence command.', errors);
  assert(markdown.includes('npm run seo:validate-schema'), 'Markdown missing validate-schema command.', errors);
  assert(markdown.includes('npm run build'), 'Markdown missing build command.', errors);

  const combined = `${markdown}\n${csvText}`;
  assert(!/psolutionservices\.com|prime\s+solution/i.test(combined), 'Before/after evidence resolution contains unrelated project/domain wording.', errors);
  assert(!/gpt-image-2/i.test(combined), 'Before/after evidence resolution contains invalid image model wording.', errors);
  assert(!/current_status,?verified/i.test(csvText), 'CSV must not mark any before/after evidence row verified yet.', errors);
  const unsafeVerifiedCaseStudyClaim = /(?:is|are|as|into)\s+verified case stud(?:ies|y)(?! until)/i;
  assert(!unsafeVerifiedCaseStudyClaim.test(combined), 'Artifact appears to claim verified case studies before owner evidence exists.', errors);

  const result = {
    ok: errors.length === 0,
    date: today,
    report: path.relative(ROOT, mdPath),
    csv: path.relative(ROOT, csvPath),
    rows: records.length,
    beforeAfterRows: records.filter((record) => record.page === '/before-and-after').length,
    compositeRows: records.filter((record) => record.page === '/composite-deck-cost-northern-virginia').length,
    partialRows: records.filter((record) => record.current_status === 'partial').length,
    missingRows: records.filter((record) => record.current_status === 'missing').length,
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const md = [
    `# Before/After Evidence Resolution Validation - ${today}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Rows: ${result.rows}`,
    `- Before/after rows: ${result.beforeAfterRows}`,
    `- Composite cost rows: ${result.compositeRows}`,
    `- Partial rows: ${result.partialRows}`,
    `- Missing rows: ${result.missingRows}`,
    `- Errors: ${errors.length}`,
    `- Warnings: ${warnings.length}`,
    '',
    '## Errors',
    '',
    ...(errors.length ? errors.map((error) => `- ${error}`) : ['- None']),
    '',
    '## Warnings',
    '',
    ...(warnings.length ? warnings.map((warning) => `- ${warning}`) : ['- None']),
    '',
  ].join('\n');

  fs.writeFileSync(validationJsonPath, `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(validationMdPath, md);

  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exit(1);
}

main();
