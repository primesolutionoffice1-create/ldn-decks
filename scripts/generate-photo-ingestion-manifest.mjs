#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');
const OUTPUT_DIR = path.join(ROOT, 'docs/seo');
const DEFAULT_PUBLIC_PREFIX = '/images/evidence/';
const DEFAULT_EXTENSION = '.jpg';

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function csvEscape(value) {
  const text = value == null ? '' : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function slug(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function suggestedPublicPath(asset, variant = null) {
  const suffix = variant ? `-${variant}` : '';
  return `${DEFAULT_PUBLIC_PREFIX}${slug(asset.asset_id)}${suffix}${DEFAULT_EXTENSION}`;
}

function rowsForAsset(asset) {
  const base = {
    asset_id: asset.asset_id,
    source_path: '',
    evidence_status: 'partial',
    city: '',
    month_year: '',
    owner_notes: asset.owner_notes || '',
  };

  if (/before\/after|before-after|image pair/i.test(asset.needed || asset.asset_id)) {
    return [
      {
        ...base,
        public_path: suggestedPublicPath(asset, 'before'),
        caption: `${asset.needed} - before photo. Replace this caption after owner verification.`,
      },
      {
        ...base,
        public_path: suggestedPublicPath(asset, 'after'),
        caption: `${asset.needed} - after photo. Replace this caption after owner verification.`,
      },
    ];
  }

  return [
    {
      ...base,
      public_path: suggestedPublicPath(asset),
      caption: `${asset.needed}. Replace this caption after owner verification.`,
    },
  ];
}

function buildManifest(ledger) {
  return (ledger.asset_requirements || [])
    .filter((asset) => asset.evidence_status !== 'verified')
    .flatMap(rowsForAsset);
}

function buildMarkdown(rows, today) {
  const byAsset = rows.reduce((acc, row) => {
    acc[row.asset_id] = (acc[row.asset_id] || 0) + 1;
    return acc;
  }, {});

  return [
    `# Photo Ingestion Manifest — ${today}`,
    '',
    'Purpose: give the owner/team a prefilled CSV for original photo collection without inventing project proof.',
    '',
    '## Summary',
    '',
    `- Manifest rows: ${rows.length}`,
    `- Asset IDs covered: ${Object.keys(byAsset).length}`,
    '- Default status: `partial`',
    '- Required owner field before ingest: `source_path`',
    '',
    '## Rules',
    '',
    '- Use original LDN Decks project photos only.',
    '- Do not use stock imagery.',
    '- Do not mark rows `verified` unless project linkage, city, month/year, publication permission, and source file are reviewed.',
    '- Remove or crop private homeowner information before publishing.',
    '- For before/after pairs, keep both rows tied to the same `asset_id`.',
    '',
    '## Ingest Command',
    '',
    'Before owner photo paths are filled:',
    '',
    '```bash',
    `npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-${today}.csv --preflight`,
    '```',
    '',
    'After `source_path` is filled:',
    '',
    '```bash',
    `npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-${today}.csv --dry-run`,
    '```',
    '',
    'After source review:',
    '',
    '```bash',
    `npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-${today}.csv --allow-verified`,
    '```',
    '',
  ].join('\n');
}

function main() {
  const ledger = readJson(LEDGER_PATH);
  const today = localDateStamp();
  const rows = buildManifest(ledger);
  const headers = [
    'asset_id',
    'source_path',
    'public_path',
    'evidence_status',
    'city',
    'month_year',
    'caption',
    'owner_notes',
  ];
  const csv = [
    headers.join(','),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(',')),
  ].join('\n');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const csvPath = path.join(OUTPUT_DIR, `photo-ingestion-manifest-${today}.csv`);
  const mdPath = path.join(OUTPUT_DIR, `photo-ingestion-manifest-${today}.md`);
  fs.writeFileSync(csvPath, `${csv}\n`);
  fs.writeFileSync(mdPath, `${buildMarkdown(rows, today)}\n`);

  console.log(JSON.stringify({
    ok: true,
    csv: path.relative(ROOT, csvPath),
    report: path.relative(ROOT, mdPath),
    rows: rows.length,
    assetIds: new Set(rows.map((row) => row.asset_id)).size,
  }, null, 2));
}

main();
