#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const REQUIRED_SECTIONS = [
  '## Current Readiness',
  '## Evidence Workload Summary',
  '## Intake Files',
  '## Red Gates',
  '## Operator Commands',
  '## /before-and-after',
  '## /composite-deck-cost-northern-virginia',
  '## /services/deck-repair',
  '## /showcase',
  '## Publish Rule',
];

const REQUIRED_READINESS_LINES = [
  '- Publish-ready pages: 0',
  '- Blocked pages: 3',
  '- Proof-incomplete pages: 1',
  '- Runtime proof synced: yes',
  '- Public placeholder findings: 0',
];

const REQUIRED_WORKLOAD_LINES = [
  '- Missing/partial photo or asset items: 11',
  '- Missing/partial project records: 10',
  '- Missing warranty term records: 1',
  '- Missing repair cost range records: 4',
];

const REQUIRED_INTAKE_FILES = [
  `docs/seo/photo-ingestion-manifest-${today}.csv`,
  `docs/seo/warranty-terms-intake-${today}.csv`,
  `docs/seo/repair-cost-ranges-intake-${today}.csv`,
  `docs/seo/project-evidence-intake-${today}.csv`,
  `docs/seo/before-after-evidence-resolution-${today}.csv`,
];

const REQUIRED_PAGE_ROWS = [
  ['/before-and-after', 'blocked', 2, 4, 0, 0],
  ['/composite-deck-cost-northern-virginia', 'blocked', 1, 0, 0, 0],
  ['/services/deck-repair', 'blocked', 8, 0, 1, 4],
  ['/showcase', 'proof-incomplete', 0, 6, 0, 0],
];

const REQUIRED_RED_GATES = [
  'Do not mark rows `verified` while owner-fill, unknown, unspecified, placeholder, or not-recorded values remain.',
  'Do not use stock images as proof-bearing project media.',
  'Do not publish exact repair cost ranges without source-backed low/high values.',
  'Do not publish exact warranty durations, exclusions, or coverage scopes until the owner verifies written policy text.',
  'Do not publish customer names, private addresses, phone numbers, permit numbers, or unredacted documents.',
];

const REQUIRED_COMMANDS = [
  'npm run seo:ingest-assets -- --file',
  '--preflight',
  '--dry-run',
  'npm run seo:import-evidence -- --type warranty_terms',
  'npm run seo:import-evidence -- --type repair_cost_ranges',
  'npm run seo:import-evidence -- --type projects',
  '--allow-verified',
  'npm run seo:validate-evidence',
  'npm run seo:proof-snippets',
  'npm run seo:validate-proof-runtime',
  'npm run seo:audit-placeholders',
  'npm run seo:prepublish-evidence',
  'npm run seo:evidence-regression',
  'npm run seo:validate-schema',
  'npm run build',
];

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const runbookPath = path.join(DOCS_DIR, `evidence-unblock-runbook-${today}.md`);
  const validationJsonPath = path.join(OUTPUT_DIR, `evidence-unblock-runbook-validation-${today}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `evidence-unblock-runbook-validation-${today}.md`);
  const errors = [];
  const warnings = [];

  assert(fs.existsSync(runbookPath), `Missing evidence unblock runbook: ${path.relative(ROOT, runbookPath)}`, errors);
  const markdown = fs.existsSync(runbookPath) ? fs.readFileSync(runbookPath, 'utf8') : '';

  for (const section of REQUIRED_SECTIONS) {
    assert(markdown.includes(section), `Missing required section: ${section}`, errors);
  }

  for (const line of REQUIRED_READINESS_LINES) {
    assert(markdown.includes(line), `Missing readiness line: ${line}`, errors);
  }

  for (const line of REQUIRED_WORKLOAD_LINES) {
    assert(markdown.includes(line), `Missing workload line: ${line}`, errors);
  }

  for (const file of REQUIRED_INTAKE_FILES) {
    assert(markdown.includes(`\`${file}\``), `Runbook missing intake file reference: ${file}`, errors);
    assert(fs.existsSync(path.join(ROOT, file)), `Referenced intake file missing: ${file}`, errors);
  }

  for (const [page, verdict, assets, projects, warrantyTerms, repairCostRanges] of REQUIRED_PAGE_ROWS) {
    const pattern = new RegExp(`\\|\\s*${page.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\|\\s*${verdict}\\s*\\|\\s*${assets}\\s*\\|\\s*${projects}\\s*\\|\\s*${warrantyTerms}\\s*\\|\\s*${repairCostRanges}\\s*\\|`, 'i');
    assert(pattern.test(markdown), `Missing workload row for ${page}: ${verdict}, ${assets}/${projects}/${warrantyTerms}/${repairCostRanges}.`, errors);
    assert(markdown.includes(`## ${page}`), `Missing page detail section: ${page}`, errors);
  }

  for (const gate of REQUIRED_RED_GATES) {
    assert(markdown.includes(gate), `Missing red gate: ${gate}`, errors);
  }

  for (const command of REQUIRED_COMMANDS) {
    assert(markdown.includes(command), `Missing operator command/guard: ${command}`, errors);
  }

  assert(markdown.includes('Required warranty record: `repair-workmanship-warranty-term`'), 'Deck repair section must include warranty requirement.', errors);
  assert(markdown.includes('Required repair cost records: `joist-sistering`, `ledger-reflash-rebolt`, `post-replacement`, `emergency-stabilization`.'), 'Deck repair section must include all repair cost records.', errors);
  assert(markdown.includes('A page is publish-ready only when tracked proof dependencies are verified, public placeholders are absent, runtime proof is synced, and the prepublish evidence gate passes.'), 'Runbook must preserve publish-ready rule.', errors);

  assert(!/psolutionservices\.com|prime\s+solution/i.test(markdown), 'Evidence unblock runbook contains unrelated project/domain wording.', errors);
  assert(!/gpt-image-2/i.test(markdown), 'Evidence unblock runbook contains invalid image model wording.', errors);
  assert(!/Publish-ready pages:\s*[1-9]/i.test(markdown), 'Runbook must not imply proof pages are publish-ready yet.', errors);

  const result = {
    ok: errors.length === 0,
    date: today,
    report: path.relative(ROOT, runbookPath),
    publishReady: 0,
    blockedPages: 3,
    proofIncompletePages: 1,
    missingAssets: 11,
    partialProjects: 10,
    missingWarrantyTerms: 1,
    missingRepairCostRanges: 4,
    pageRows: REQUIRED_PAGE_ROWS.length,
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const md = [
    `# Evidence Unblock Runbook Validation - ${today}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Publish-ready pages: ${result.publishReady}`,
    `- Blocked pages: ${result.blockedPages}`,
    `- Proof-incomplete pages: ${result.proofIncompletePages}`,
    `- Missing/partial assets: ${result.missingAssets}`,
    `- Missing/partial project records: ${result.partialProjects}`,
    `- Missing warranty terms: ${result.missingWarrantyTerms}`,
    `- Missing repair cost ranges: ${result.missingRepairCostRanges}`,
    `- Page workload rows: ${result.pageRows}`,
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
