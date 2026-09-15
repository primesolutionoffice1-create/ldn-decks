#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { buildOfflinePreview } from './generate-google-ads-offline-preview.mjs';

const DEFAULT_OUTPUT = 'scripts/output/google-ads-offline-conversions-from-lead-outcomes.csv';

try {
  if (!process.argv[2]) {
    throw new Error('An explicit lead-outcomes CSV is required. Usage: node scripts/generate-google-ads-offline-from-lead-outcomes.mjs <input.csv> [output.csv].');
  }
  const inputPath = path.resolve(process.argv[2]);
  const outputPath = path.resolve(process.argv[3] || DEFAULT_OUTPUT);
  if (inputPath === outputPath) throw new Error('Input and output CSV paths must be different.');

  const { candidates, csv, skipped, warnings } = buildOfflinePreview(fs.readFileSync(inputPath, 'utf8'));
  for (const warning of warnings) console.warn('WARNING: ' + warning);
  if (!candidates.length) {
    console.log('NO_UPLOAD_ROWS: no files written; existing output files are unchanged.');
  } else {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, csv + '\n');
    console.log('Wrote ' + candidates.length + ' Google Ads offline preview rows to ' + path.relative(process.cwd(), outputPath) + '; ' + skipped.length + ' held/excluded rows. No upload performed.');
  }
} catch (error) {
  console.error('Offline export failed: ' + error.message + '\nUse a recorded gclid and actual qualified_at / estimate_scheduled_at / contract_signed_at / closed_paid_at timestamps with UTC offsets for the applicable stages. Braid-only leads must remain on hold. Do not upload an existing CSV based on this failed run; correct the input and rerun validation.');
  process.exitCode = 1;
}
