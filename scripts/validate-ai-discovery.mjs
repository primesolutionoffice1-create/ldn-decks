#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const DATE = localDateStamp();

const FILES = [
  'public/llms.txt',
  'public/llms-full.txt',
  'src/app/llms.txt/route.js',
  'src/app/llms-full.txt/route.js',
];

const FORBIDDEN_ADDRESS_PATTERNS = [
  { label: 'street number', pattern: /\b13704\b/i },
  { label: 'street name', pattern: /\bWinding\s+Oak\b/i },
  { label: 'HQ shorthand', pattern: /\bHQ\s*,/i },
  { label: 'headquarters wording', pattern: /\bHeadquarters\b/i },
  { label: 'showroom wording', pattern: /office\s*\+\s*material\s+showroom/i },
];

const REQUIRED_PRIORITY_URLS = [
  'https://ldndecks.com/education/deck-stair-code-rise-run-virginia',
  'https://ldndecks.com/education/deck-stair-construction-diagram',
  'https://ldndecks.com/education/common-deck-stair-inspection-failures-virginia',
  'https://ldndecks.com/education/ledger-board-flashing-deck-attachment-virginia',
  'https://ldndecks.com/deck-permit-loudoun-county-virginia',
  'https://ldndecks.com/deck-permit-fairfax-county-virginia',
  'https://ldndecks.com/composite-deck-cost-northern-virginia',
  'https://ldndecks.com/composite-decks',
  'https://ldndecks.com/trex-decks',
  'https://ldndecks.com/timbertech-decks',
  'https://ldndecks.com/trex-vs-timbertech-vs-azek',
  'https://ldndecks.com/services/deck-repair',
  'https://ldndecks.com/services/deck-replacement',
  'https://ldndecks.com/covered-deck-builder-northern-virginia',
  'https://ldndecks.com/get-estimate',
];

function lineNumber(text, index) {
  return text.slice(0, index).split('\n').length;
}

function countOccurrences(text, needle) {
  let count = 0;
  let index = text.indexOf(needle);
  while (index !== -1) {
    count += 1;
    index = text.indexOf(needle, index + needle.length);
  }
  return count;
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const errors = [];
  const warnings = [];
  const fileResults = [];

  for (const relativePath of FILES) {
    const absolutePath = path.join(ROOT, relativePath);
    if (!fs.existsSync(absolutePath)) {
      errors.push(`Missing AI discovery file: ${relativePath}`);
      fileResults.push({ path: relativePath, exists: false });
      continue;
    }

    const text = fs.readFileSync(absolutePath, 'utf8');
    const forbiddenMatches = [];

    for (const forbidden of FORBIDDEN_ADDRESS_PATTERNS) {
      for (const match of text.matchAll(new RegExp(forbidden.pattern, forbidden.pattern.flags.includes('g') ? forbidden.pattern.flags : `${forbidden.pattern.flags}g`))) {
        forbiddenMatches.push({
          label: forbidden.label,
          match: match[0],
          line: lineNumber(text, match.index || 0),
        });
      }
    }

    for (const match of forbiddenMatches) {
      errors.push(`${relativePath}:${match.line} contains forbidden exact-address amplification (${match.label}): ${match.match}`);
    }

    const urlCoverage = REQUIRED_PRIORITY_URLS.map((url) => ({
      url,
      count: countOccurrences(text, url),
    }));

    for (const coverage of urlCoverage) {
      if (coverage.count === 0) {
        errors.push(`${relativePath} is missing priority AI retrieval URL: ${coverage.url}`);
      }
    }

    fileResults.push({
      path: relativePath,
      exists: true,
      bytes: Buffer.byteLength(text, 'utf8'),
      forbiddenMatches,
      requiredUrls: urlCoverage,
      presentRequiredUrls: urlCoverage.filter((entry) => entry.count > 0).length,
      missingRequiredUrls: urlCoverage.filter((entry) => entry.count === 0).map((entry) => entry.url),
    });
  }

  const result = {
    ok: errors.length === 0,
    date: DATE,
    filesChecked: FILES.length,
    existingFiles: fileResults.filter((file) => file.exists).length,
    requiredUrls: REQUIRED_PRIORITY_URLS.length,
    forbiddenPatterns: FORBIDDEN_ADDRESS_PATTERNS.map((entry) => entry.label),
    files: fileResults,
    warnings,
    errors,
    outputs: {
      json: `scripts/output/ai-discovery-validation-${DATE}.json`,
      markdown: `scripts/output/ai-discovery-validation-${DATE}.md`,
    },
  };

  const markdown = [
    `# AI Discovery Validation - ${DATE}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Files checked: ${result.filesChecked}`,
    `- Existing files: ${result.existingFiles}`,
    `- Required priority URLs per file: ${result.requiredUrls}`,
    `- Forbidden exact-address patterns: ${result.forbiddenPatterns.length}`,
    `- Errors: ${errors.length}`,
    `- Warnings: ${warnings.length}`,
    '',
    '## File Coverage',
    '',
    '| File | Required URLs Present | Forbidden Matches | Bytes |',
    '|---|---:|---:|---:|',
    ...fileResults.map((file) => `| \`${file.path}\` | ${file.presentRequiredUrls ?? 0}/${REQUIRED_PRIORITY_URLS.length} | ${file.forbiddenMatches?.length ?? 0} | ${file.bytes ?? 0} |`),
    '',
    '## Required URLs',
    '',
    ...REQUIRED_PRIORITY_URLS.map((url) => `- ${url}`),
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

  fs.writeFileSync(path.join(ROOT, result.outputs.json), `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(path.join(ROOT, result.outputs.markdown), `${markdown}\n`);

  console.log(JSON.stringify({
    ok: result.ok,
    date: result.date,
    filesChecked: result.filesChecked,
    existingFiles: result.existingFiles,
    requiredUrls: result.requiredUrls,
    errors: result.errors,
    warnings: result.warnings,
    outputs: result.outputs,
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
