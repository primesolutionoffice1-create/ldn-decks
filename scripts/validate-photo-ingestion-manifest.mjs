#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const REQUIRED_HEADERS = [
  'asset_id',
  'source_path',
  'public_path',
  'evidence_status',
  'city',
  'month_year',
  'caption',
  'owner_notes',
];

const PAIR_ASSET_IDS = [
  'deck-repair-hero-before-after',
  'stair-rebuild-before-after',
  'railing-repair-before-after',
  'resurfacing-before-after',
  'before-after-project-records',
  'before-after-image-metadata',
];

const SINGLE_ASSET_IDS = [
  'ledger-failure-photo',
  'post-rot-photo',
  'joist-sistering-photo',
  'redacted-permit-or-inspection-screenshot',
  'composite-cost-example-records',
];

const REQUIRED_MARKDOWN_PHRASES = [
  'Use original LDN Decks project photos only.',
  'Do not use stock imagery.',
  'Do not mark rows `verified` unless project linkage, city, month/year, publication permission, and source file are reviewed.',
  'Remove or crop private homeowner information before publishing.',
  'For before/after pairs, keep both rows tied to the same `asset_id`.',
  'npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-',
  '--preflight',
  '--dry-run',
  '--allow-verified',
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

  const mdPath = path.join(DOCS_DIR, `photo-ingestion-manifest-${today}.md`);
  const csvPath = path.join(DOCS_DIR, `photo-ingestion-manifest-${today}.csv`);
  const validationJsonPath = path.join(OUTPUT_DIR, `photo-ingestion-manifest-validation-${today}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `photo-ingestion-manifest-validation-${today}.md`);
  const errors = [];
  const warnings = [];

  assert(fs.existsSync(mdPath), `Missing photo ingestion markdown: ${path.relative(ROOT, mdPath)}`, errors);
  assert(fs.existsSync(csvPath), `Missing photo ingestion CSV: ${path.relative(ROOT, csvPath)}`, errors);

  const markdown = fs.existsSync(mdPath) ? fs.readFileSync(mdPath, 'utf8') : '';
  const csvText = fs.existsSync(csvPath) ? fs.readFileSync(csvPath, 'utf8') : '';
  const rows = csvText ? parseCsv(csvText) : [];
  const headers = rows[0] || [];
  const records = headers.length ? toObjects(rows) : [];
  const assetIds = new Set(records.map((record) => record.asset_id));

  assert(markdown.includes(`# Photo Ingestion Manifest - ${today}`) || markdown.includes(`# Photo Ingestion Manifest — ${today}`), `Markdown title must use today's date: ${today}`, errors);
  assert(markdown.includes('- Manifest rows: 17'), 'Markdown must preserve 17 manifest rows.', errors);
  assert(markdown.includes('- Asset IDs covered: 11'), 'Markdown must preserve 11 asset IDs.', errors);
  assert(markdown.includes('- Default status: `partial`'), 'Markdown must preserve partial default status.', errors);
  assert(markdown.includes('- Required owner field before ingest: `source_path`'), 'Markdown must preserve source_path owner requirement.', errors);

  for (const phrase of REQUIRED_MARKDOWN_PHRASES) {
    assert(markdown.includes(phrase), `Missing required photo manifest phrase: ${phrase}`, errors);
  }

  assert(headers.length === REQUIRED_HEADERS.length, `Expected ${REQUIRED_HEADERS.length} CSV headers, found ${headers.length}.`, errors);
  for (const [index, header] of REQUIRED_HEADERS.entries()) {
    assert(headers[index] === header, `CSV header ${index + 1} must be ${header}, found ${headers[index] ?? 'missing'}.`, errors);
  }

  assert(records.length === 17, `Expected 17 photo manifest rows, found ${records.length}.`, errors);
  assert(assetIds.size === 11, `Expected 11 unique asset IDs, found ${assetIds.size}.`, errors);

  for (const [rowIndex, record] of records.entries()) {
    const rowNumber = rowIndex + 2;
    assert(record.asset_id, `Row ${rowNumber}: asset_id is required.`, errors);
    assert(record.source_path === '', `Row ${rowNumber}: source_path must remain empty until owner supplies a real file.`, errors);
    assert(record.evidence_status === 'partial', `Row ${rowNumber}: evidence_status must remain partial, found ${record.evidence_status}.`, errors);
    assert(record.city === '', `Row ${rowNumber}: city must remain empty until owner verification.`, errors);
    assert(record.month_year === '', `Row ${rowNumber}: month_year must remain empty until owner verification.`, errors);
    assert(/^\/images\/evidence\/[a-z0-9-]+\.jpg$/.test(record.public_path), `Row ${rowNumber}: public_path must be a lowercase /images/evidence/*.jpg path.`, errors);
    assert(record.caption.includes('Replace this caption after owner verification.'), `Row ${rowNumber}: caption must keep owner verification placeholder.`, errors);
    assert(record.owner_notes.length > 20, `Row ${rowNumber}: owner_notes must be descriptive.`, errors);
  }

  for (const assetId of PAIR_ASSET_IDS) {
    const matching = records.filter((record) => record.asset_id === assetId);
    assert(matching.length === 2, `${assetId} must have exactly two before/after rows, found ${matching.length}.`, errors);
    assert(matching.some((record) => record.public_path === `/images/evidence/${assetId}-before.jpg`), `${assetId} missing before public_path.`, errors);
    assert(matching.some((record) => record.public_path === `/images/evidence/${assetId}-after.jpg`), `${assetId} missing after public_path.`, errors);
  }

  for (const assetId of SINGLE_ASSET_IDS) {
    const matching = records.filter((record) => record.asset_id === assetId);
    assert(matching.length === 1, `${assetId} must have exactly one row, found ${matching.length}.`, errors);
    assert(matching[0]?.public_path === `/images/evidence/${assetId}.jpg`, `${assetId} public_path must be /images/evidence/${assetId}.jpg.`, errors);
  }

  const expectedIds = new Set([...PAIR_ASSET_IDS, ...SINGLE_ASSET_IDS]);
  for (const assetId of assetIds) {
    assert(expectedIds.has(assetId), `Unexpected asset_id in manifest: ${assetId}`, errors);
  }
  for (const assetId of expectedIds) {
    assert(assetIds.has(assetId), `Missing required asset_id in manifest: ${assetId}`, errors);
  }

  const combined = `${markdown}\n${csvText}`;
  assert(!/psolutionservices\.com|prime\s+solution/i.test(combined), 'Photo manifest contains unrelated project/domain wording.', errors);
  assert(!/gpt-image-2/i.test(combined), 'Photo manifest contains invalid image model wording.', errors);
  assert(!/evidence_status,?verified/i.test(csvText), 'CSV must not mark any photo manifest row verified yet.', errors);
  assert(!/(?:verified\s+case\s+stud(?:y|ies)|verified\s+project|verified\s+photo|verified\s+proof)/i.test(csvText), 'CSV must not use verified proof wording before owner/source review.', errors);
  assert(!/stock\s+image|stock\s+photo/i.test(csvText), 'CSV must not point owner toward stock imagery.', errors);

  const result = {
    ok: errors.length === 0,
    date: today,
    report: path.relative(ROOT, mdPath),
    csv: path.relative(ROOT, csvPath),
    rows: records.length,
    assetIds: assetIds.size,
    pairAssetIds: PAIR_ASSET_IDS.length,
    singleAssetIds: SINGLE_ASSET_IDS.length,
    emptySourceRows: records.filter((record) => record.source_path === '').length,
    partialRows: records.filter((record) => record.evidence_status === 'partial').length,
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const md = [
    `# Photo Ingestion Manifest Validation - ${today}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Rows: ${result.rows}`,
    `- Asset IDs: ${result.assetIds}`,
    `- Before/after pair asset IDs: ${result.pairAssetIds}`,
    `- Single asset IDs: ${result.singleAssetIds}`,
    `- Empty source_path rows: ${result.emptySourceRows}`,
    `- Partial rows: ${result.partialRows}`,
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
