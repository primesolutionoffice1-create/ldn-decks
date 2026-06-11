#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const REQUIRED_HEADERS = ['block', 'priority', 'action', 'source_file', 'done_criteria'];
const REQUIRED_BLOCKS = new Map([
  ['Repair media', { priority: 'P0', source: `docs/seo/photo-ingestion-manifest-${today}.csv` }],
  ['Commercial proof', { priority: 'P0', source: `docs/seo/warranty-terms-intake-${today}.csv + docs/seo/repair-cost-ranges-intake-${today}.csv` }],
  ['Project linkage', { priority: 'P1', source: `docs/seo/project-evidence-intake-${today}.csv` }],
  ['Privacy pass', { priority: 'P0', source: 'All owner-supplied media and documents' }],
  ['Dry-run pass', { priority: 'P0', source: 'Owner-filled intake files' }],
]);

const REQUIRED_TARGET_LINES = [
  '- Owner action rows: 26',
  '- P0 actions: 13',
  '- P1 actions: 13',
  '- Photo or asset actions: 11',
  '- Project record actions: 10',
  '- Warranty term actions: 1',
  '- Repair cost range actions: 4',
];

const REQUIRED_RULE_PHRASES = [
  'Original media only',
  'private address/customer details redacted',
  'Warranty wording and cost ranges come from written policy, invoices, accepted estimates, calculator data, or owner-approved pricing policy.',
  'Project fields are concrete',
  'unknown details remain partial',
  'No private homeowner data appears in public paths, reports, screenshots, or proof-bearing captions.',
  'Dry-runs pass; `seo:validate-owner-intake`, `seo:validate-evidence`, and `seo:proof-preflight` pass before promotion.',
  'No blocked proof page becomes publish-ready until verified evidence is imported',
  '`npm run seo:prepublish-evidence` passes without expected-blocked status.',
  'Directory Citation Evidence Addendum',
  'npm run seo:directory-citations:validate',
  'Do not add Apple Maps to `sameAs`',
  'Do not add Nextdoor to `sameAs`',
  'Do not add Angi to `sameAs`',
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

  const reportPath = path.join(DOCS_DIR, `owner-evidence-sprint-${today}.md`);
  const csvPath = path.join(DOCS_DIR, `owner-evidence-sprint-${today}.csv`);
  const validationJsonPath = path.join(OUTPUT_DIR, `owner-evidence-sprint-validation-${today}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `owner-evidence-sprint-validation-${today}.md`);
  const errors = [];
  const warnings = [];

  assert(fs.existsSync(reportPath), `Missing owner evidence sprint report: ${path.relative(ROOT, reportPath)}`, errors);
  assert(fs.existsSync(csvPath), `Missing owner evidence sprint CSV: ${path.relative(ROOT, csvPath)}`, errors);

  const markdown = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, 'utf8') : '';
  const csvText = fs.existsSync(csvPath) ? fs.readFileSync(csvPath, 'utf8') : '';
  const rows = csvText ? parseCsv(csvText) : [];
  const headers = rows[0] || [];
  const records = headers.length ? toObjects(rows) : [];
  const byBlock = new Map(records.map((record) => [record.block, record]));

  assert(markdown.includes('## Sprint Targets'), 'Sprint report missing Sprint Targets section.', errors);
  assert(markdown.includes('## Sprint Blocks'), 'Sprint report missing Sprint Blocks section.', errors);
  assert(markdown.includes('## Directory Citation Evidence Addendum'), 'Sprint report missing Directory Citation Evidence Addendum section.', errors);
  assert(markdown.includes('## Publish Rule'), 'Sprint report missing Publish Rule section.', errors);

  for (const line of REQUIRED_TARGET_LINES) {
    assert(markdown.includes(line), `Missing sprint target line: ${line}`, errors);
  }

  for (const header of REQUIRED_HEADERS) {
    assert(headers.includes(header), `Sprint CSV missing required header: ${header}`, errors);
  }

  assert(records.length === REQUIRED_BLOCKS.size, `Expected ${REQUIRED_BLOCKS.size} sprint blocks, found ${records.length}.`, errors);

  for (const [block, config] of REQUIRED_BLOCKS.entries()) {
    const record = byBlock.get(block);
    assert(Boolean(record), `Missing sprint block: ${block}`, errors);
    if (!record) continue;

    assert(record.priority === config.priority, `${block} priority must be ${config.priority}, found ${record.priority}.`, errors);
    assert(record.source_file === config.source, `${block} source_file drifted: expected "${config.source}", found "${record.source_file}".`, errors);
    assert(record.action.length >= 25, `${block} action is too short.`, errors);
    assert(record.done_criteria.length >= 50, `${block} done_criteria is too short.`, errors);
  }

  assert(byBlock.get('Repair media')?.action.includes('11 photo/asset actions'), 'Repair media block must preserve 11 photo/asset actions.', errors);
  assert(byBlock.get('Repair media')?.action.includes('8 deck repair assets'), 'Repair media block must prioritize 8 deck repair assets.', errors);
  assert(byBlock.get('Commercial proof')?.action.includes('1 warranty term action'), 'Commercial proof block must preserve 1 warranty action.', errors);
  assert(byBlock.get('Commercial proof')?.action.includes('4 repair cost range actions'), 'Commercial proof block must preserve 4 repair cost actions.', errors);
  assert(byBlock.get('Project linkage')?.action.includes('10 project record actions'), 'Project linkage block must preserve 10 project record actions.', errors);

  for (const directory of ['NADRA directory', 'Bing Places', 'Apple Business Connect', 'Nextdoor', 'Angi']) {
    assert(markdown.includes(`| ${directory} |`), `Sprint directory addendum missing row: ${directory}`, errors);
  }

  for (const packet of [
    `docs/seo/nadra-directory-verification-packet-${today}.md`,
    `docs/seo/bing-places-verification-packet-${today}.md`,
    `docs/seo/apple-business-connect-verification-packet-${today}.md`,
    `docs/seo/nextdoor-citation-cleanup-packet-${today}.md`,
    `docs/seo/angi-citation-cleanup-packet-${today}.md`,
  ]) {
    assert(markdown.includes(packet), `Sprint directory addendum missing packet path: ${packet}`, errors);
  }

  for (const phrase of REQUIRED_RULE_PHRASES) {
    assert(markdown.includes(phrase) || csvText.includes(phrase), `Missing sprint proof-safety phrase: ${phrase}`, errors);
  }

  const referencedFiles = [
    `docs/seo/photo-ingestion-manifest-${today}.csv`,
    `docs/seo/warranty-terms-intake-${today}.csv`,
    `docs/seo/repair-cost-ranges-intake-${today}.csv`,
    `docs/seo/project-evidence-intake-${today}.csv`,
  ];
  for (const file of referencedFiles) {
    assert(fs.existsSync(path.join(ROOT, file)), `Referenced sprint source file missing: ${file}`, errors);
  }

  const combined = `${markdown}\n${csvText}`;
  assert(!/psolutionservices\.com|prime\s+solution/i.test(combined), 'Owner evidence sprint contains unrelated project/domain wording.', errors);
  assert(!/gpt-image-2/i.test(combined), 'Owner evidence sprint contains invalid image model wording.', errors);
  assert(!/mark(ed)?\s+.*verified/i.test(combined), 'Owner evidence sprint must not instruct marking rows verified during collection sprint.', errors);

  const result = {
    ok: errors.length === 0,
    date: today,
    report: path.relative(ROOT, reportPath),
    csv: path.relative(ROOT, csvPath),
    blocks: records.length,
    p0Blocks: records.filter((record) => record.priority === 'P0').length,
    p1Blocks: records.filter((record) => record.priority === 'P1').length,
    ownerRows: 26,
    assetActions: 11,
    projectActions: 10,
    warrantyActions: 1,
    repairCostActions: 4,
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const md = [
    `# Owner Evidence Sprint Validation - ${today}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Blocks: ${result.blocks}`,
    `- P0 blocks: ${result.p0Blocks}`,
    `- P1 blocks: ${result.p1Blocks}`,
    `- Owner rows: ${result.ownerRows}`,
    `- Asset actions: ${result.assetActions}`,
    `- Project actions: ${result.projectActions}`,
    `- Warranty actions: ${result.warrantyActions}`,
    `- Repair cost actions: ${result.repairCostActions}`,
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
