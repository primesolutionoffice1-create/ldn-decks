#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const REQUIRED_SECTIONS = [
  '## Current Status',
  '## Evidence Workload Summary',
  '## Owner Files To Complete',
  '## Recommended Completion Order',
  '## 48-Hour Owner Collection Sprint',
  '## Directory Citation Evidence Addendum',
  '## Minimum Proof Packet',
  '## What Must Stay Non-Citable',
  '## Dry-Run Commands',
  '## Verified Import Commands',
  '## Red Gates',
  '## Page Verdicts',
  '## Intake Suite Check',
];

const REQUIRED_OWNER_FILES = [
  `docs/seo/owner-evidence-action-packet-${today}.csv`,
  `docs/seo/owner-evidence-sprint-${today}.md`,
  `docs/seo/owner-evidence-sprint-${today}.csv`,
  `docs/seo/project-evidence-intake-${today}.csv`,
  `docs/seo/photo-ingestion-manifest-${today}.csv`,
  `docs/seo/warranty-terms-intake-${today}.csv`,
  `docs/seo/repair-cost-ranges-intake-${today}.csv`,
  `docs/seo/directory-citation-status-${today}.md`,
  `docs/seo/nadra-directory-verification-packet-${today}.md`,
  `docs/seo/bing-places-verification-packet-${today}.md`,
  `docs/seo/apple-business-connect-verification-packet-${today}.md`,
  `docs/seo/nextdoor-citation-cleanup-packet-${today}.md`,
  `docs/seo/angi-citation-cleanup-packet-${today}.md`,
];

const REQUIRED_DRY_RUN_COMMANDS = [
  'npm run seo:proof-preflight',
  'npm run seo:proof-staging-manifest',
  'npm run seo:proof-staging-check',
  'npm run seo:proof-staging-plan',
  'npm run seo:directory-citations:validate',
  'npm run seo:evidence-unblock -- --date latest',
  'npm run seo:validate-owner-intake',
  'npm run seo:import-evidence -- --type projects',
  'npm run seo:ingest-assets',
  'npm run seo:import-evidence -- --type warranty_terms',
  'npm run seo:import-evidence -- --type repair_cost_ranges',
];

const REQUIRED_VERIFIED_IMPORT_COMMANDS = [
  'npm run seo:import-evidence -- --type projects',
  'npm run seo:ingest-assets',
  'npm run seo:import-evidence -- --type warranty_terms',
  'npm run seo:import-evidence -- --type repair_cost_ranges',
  'npm run seo:validate-evidence',
  'npm run seo:validate-proof-runtime',
  'npm run seo:publish-readiness',
  'npm run seo:prepublish-evidence',
  'npm run build',
];

const REQUIRED_RED_GATES = [
  'Do not use stock imagery.',
  'Do not publish customer names, full addresses, phone numbers, permit numbers, or unredacted documents.',
  'Do not mark any project `verified` while owner-fill, unknown, not recorded, or unverifiable values remain.',
  'Do not mark any row `verified` without concrete `owner_notes` describing reviewed evidence source.',
  'Do not invent technician identities, certifications, project stories, warranty terms, before/after photos, permit outcomes, or structural claims.',
  'Do not publish repair cost ranges unless `low`, `high`, and `source` are filled from real pricing evidence.',
  'Do not publish exact warranty language until the term, scope, exclusions, and coverage differences are confirmed.',
  'Do not add Apple Maps, Nextdoor, or Angi to `sameAs` until canonical public identity is verified with current screenshots or admin evidence.',
  'Do not promote Bing Places as fresh public proof until current public and dashboard screenshots confirm canonical NAP.',
];

const REQUIRED_PAGE_VERDICTS = [
  ['/before-and-after', 'blocked'],
  ['/composite-deck-cost-northern-virginia', 'blocked'],
  ['/services/deck-repair', 'blocked'],
  ['/showcase', 'proof-incomplete'],
];

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const reportPath = path.join(DOCS_DIR, `owner-evidence-handoff-${today}.md`);
  const validationJsonPath = path.join(OUTPUT_DIR, `owner-evidence-handoff-validation-${today}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `owner-evidence-handoff-validation-${today}.md`);
  const errors = [];
  const warnings = [];

  assert(fs.existsSync(reportPath), `Missing owner evidence handoff: ${path.relative(ROOT, reportPath)}`, errors);
  const markdown = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, 'utf8') : '';

  for (const section of REQUIRED_SECTIONS) {
    assert(markdown.includes(section), `Missing required section: ${section}`, errors);
  }

  assert(markdown.includes('- Handoff status: ready for owner collection'), 'Handoff must remain ready for owner collection.', errors);
  assert(markdown.includes('- Publish readiness: 0 ready · 1 incomplete · 3 blocked'), 'Handoff must preserve current proof-gated publish readiness.', errors);
  assert(markdown.includes('- Owner action rows: 26'), 'Handoff must preserve 26 owner action rows.', errors);
  assert(markdown.includes('- P0 actions: 13'), 'Handoff must preserve 13 P0 actions.', errors);
  assert(markdown.includes('- P1 actions: 13'), 'Handoff must preserve 13 P1 actions.', errors);
  assert(markdown.includes('- Projects: 10 total · 10 partial'), 'Handoff must preserve 10 partial project records.', errors);
  assert(markdown.includes('- Asset requirements: 11 total · 11 missing'), 'Handoff must preserve 11 missing asset requirements.', errors);
  assert(markdown.includes('- Photo or asset actions: 11'), 'Handoff must preserve 11 photo/asset actions.', errors);
  assert(markdown.includes('- Project record actions: 10'), 'Handoff must preserve 10 project record actions.', errors);
  assert(markdown.includes('- Warranty term actions: 1'), 'Handoff must preserve 1 warranty action.', errors);
  assert(markdown.includes('- Repair cost range actions: 4'), 'Handoff must preserve 4 repair cost actions.', errors);
  assert(markdown.includes('Directory-citation pass'), 'Handoff sprint must include directory-citation collection pass.', errors);

  for (const ownerFile of REQUIRED_OWNER_FILES) {
    assert(markdown.includes(`\`${ownerFile}\``), `Handoff missing owner file reference: ${ownerFile}`, errors);
    assert(fs.existsSync(path.join(ROOT, ownerFile)), `Referenced owner file does not exist: ${ownerFile}`, errors);
  }

  for (const command of REQUIRED_DRY_RUN_COMMANDS) {
    assert(markdown.includes(command), `Missing dry-run command: ${command}`, errors);
  }

  for (const directory of ['NADRA directory', 'Bing Places', 'Apple Business Connect', 'Nextdoor', 'Angi']) {
    assert(markdown.includes(directory), `Handoff missing directory citation row: ${directory}`, errors);
  }

  for (const phrase of [
    'Do not add Apple Maps to `sameAs`',
    'Do not add Nextdoor to `sameAs`',
    'Do not add Angi to `sameAs`',
    'Do not promote as fresh public proof',
  ]) {
    assert(markdown.includes(phrase), `Handoff missing directory citation guard phrase: ${phrase}`, errors);
  }

  assert(markdown.includes('--dry-run'), 'Dry-run command block must include --dry-run guards.', errors);
  assert(markdown.includes('--preflight'), 'Dry-run command block must include asset preflight guard.', errors);

  for (const command of REQUIRED_VERIFIED_IMPORT_COMMANDS) {
    assert(markdown.includes(command), `Missing verified import command: ${command}`, errors);
  }

  assert(markdown.includes('--allow-verified'), 'Verified import command block must include --allow-verified.', errors);

  for (const gate of REQUIRED_RED_GATES) {
    assert(markdown.includes(gate), `Missing red gate: ${gate}`, errors);
  }

  for (const [page, verdict] of REQUIRED_PAGE_VERDICTS) {
    const pattern = new RegExp(`\\|\\s*${page.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\|\\s*${verdict}\\s*\\|`, 'i');
    assert(pattern.test(markdown), `Missing page verdict ${page} -> ${verdict}.`, errors);
  }

  assert(markdown.includes('- Status: pass'), 'Intake suite check must pass.', errors);
  assert(markdown.includes('- Project intake rows: 10'), 'Intake suite must preserve 10 project intake rows.', errors);
  assert(markdown.includes('- Photo manifest rows: 17'), 'Intake suite must preserve 17 photo manifest rows.', errors);
  assert(markdown.includes('- Warranty rows: 1'), 'Intake suite must preserve 1 warranty row.', errors);
  assert(markdown.includes('- Repair cost rows: 4'), 'Intake suite must preserve 4 repair cost rows.', errors);
  assert(markdown.includes('- Errors: 0'), 'Intake suite must preserve 0 errors.', errors);

  assert(!/psolutionservices\.com|prime\s+solution/i.test(markdown), 'Handoff contains unrelated project/domain wording.', errors);
  assert(!/gpt-image-2/i.test(markdown), 'Handoff contains invalid image model wording.', errors);
  assert(!/verified\s+project\s+proof/i.test(markdown), 'Handoff appears to imply verified project proof before owner evidence exists.', errors);

  const result = {
    ok: errors.length === 0,
    date: today,
    report: path.relative(ROOT, reportPath),
    ownerRows: 26,
    p0: 13,
    p1: 13,
    projectIntake: 10,
    photoManifest: 17,
    warrantyRows: 1,
    repairCostRows: 4,
    blockedPages: 3,
    proofIncomplete: 1,
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const md = [
    `# Owner Evidence Handoff Validation - ${today}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Owner rows: ${result.ownerRows}`,
    `- P0 actions: ${result.p0}`,
    `- P1 actions: ${result.p1}`,
    `- Project intake rows: ${result.projectIntake}`,
    `- Photo manifest rows: ${result.photoManifest}`,
    `- Warranty rows: ${result.warrantyRows}`,
    `- Repair cost rows: ${result.repairCostRows}`,
    `- Blocked pages: ${result.blockedPages}`,
    `- Proof-incomplete pages: ${result.proofIncomplete}`,
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
