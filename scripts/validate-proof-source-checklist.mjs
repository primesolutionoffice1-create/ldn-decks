#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const REQUIRED_SECTIONS = [
  '## Canonical Public Identity',
  '## Verified Public Profiles In Repo',
  '## Directory Citation Proof Gate',
  '## Evidence Types And Promotion Rules',
  '## Minimum Proof Packet Per Project',
  '## Field Photo Naming Standard',
  '## What Must Stay Non-Citable',
  '## Page-Specific Unlock Rules',
  '## Current Proof Blockers',
  '## Intake Files To Use',
  '## Publish Gate',
];

const REQUIRED_IDENTITY = [
  'Loudoun Decks',
  'https://ldndecks.com',
  '+15716557207',
  'office@ldndecks.com',
  '13704 Winding Oak Cir, Centreville, VA 20121',
];

const REQUIRED_PROFILES = [
  'Google Maps',
  'Houzz',
  'Yelp',
  'BBB',
  'Trustpilot',
  'BuildZoom',
  'Loudoun Chamber',
  'MapQuest',
  'Facebook',
  'Instagram',
  'TikTok',
  'X',
];

const REQUIRED_EVIDENCE_TYPES = [
  'Project record',
  'Original photo',
  'Warranty term',
  'Repair cost range',
  'Public review source',
  'Permit or inspection outcome',
  'Directory citation',
];

const REQUIRED_DIRECTORY_CITATIONS = [
  'NADRA directory',
  'Bing Places',
  'Apple Business Connect',
  'Nextdoor',
  'Angi',
];

const REQUIRED_NON_CITABLE = [
  'Exact review counts or ratings unless checked against the live profile at the time of publication.',
  'Warranty duration, scope, exclusions, or guarantee language unless verified from written terms.',
  'Permit approval outcomes unless supported by a redacted permit/inspection record or owner-confirmed jurisdiction record.',
  'Exact project cost unless backed by invoice, accepted estimate, calculator data, or owner-approved pricing policy.',
  'Completed-project examples unless city, month/year, scope, material, and photo linkage are filled.',
  'Customer names, addresses, phone numbers, email addresses, unredacted documents, or private permit numbers.',
  'Before/after claims from stock images, inspiration images, manufacturer images, or unlinked project photos.',
];

const REQUIRED_UNLOCK_PAGES = [
  '/services/deck-repair',
  '/before-and-after',
  '/showcase',
  '/composite-deck-cost-northern-virginia',
];

const REQUIRED_COMMANDS = [
  'npm run seo:evidence-unblock -- --date latest',
  'npm run seo:evidence-sprint',
  'npm run seo:validate-owner-intake',
  'npm run seo:directory-citations',
  'npm run seo:directory-citations:validate',
  'npm run seo:validate-ai-discovery',
  'npm run seo:import-evidence -- --type projects',
  'npm run seo:ingest-assets',
  'npm run seo:validate-evidence',
  'npm run seo:validate-proof-runtime',
  'npm run seo:publish-readiness',
  'npm run seo:prepublish-evidence',
  'npm run build',
];

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function countTableRows(markdown, sectionTitle) {
  const start = markdown.indexOf(sectionTitle);
  if (start === -1) return 0;
  const rest = markdown.slice(start);
  const nextSection = rest.slice(sectionTitle.length).search(/\n##\s+/);
  const section = nextSection === -1 ? rest : rest.slice(0, sectionTitle.length + nextSection);
  return section
    .split('\n')
    .filter((line) => /^\|.+\|$/.test(line.trim()) && !/^\|\s*-+/.test(line.trim()) && !/^\|\s*Field\s*\|/.test(line.trim()) && !/^\|\s*Profile\s*\|/.test(line.trim()) && !/^\|\s*Evidence type\s*\|/.test(line.trim()) && !/^\|\s*Page\s*\|/.test(line.trim()))
    .length;
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const checklistPath = path.join(DOCS_DIR, `proof-source-checklist-${today}.md`);
  const validationJsonPath = path.join(OUTPUT_DIR, `proof-source-checklist-validation-${today}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `proof-source-checklist-validation-${today}.md`);
  const errors = [];
  const warnings = [];

  assert(fs.existsSync(checklistPath), `Missing proof source checklist: ${path.relative(ROOT, checklistPath)}`, errors);
  const markdown = fs.existsSync(checklistPath) ? fs.readFileSync(checklistPath, 'utf8') : '';

  for (const section of REQUIRED_SECTIONS) {
    assert(markdown.includes(section), `Missing required section: ${section}`, errors);
  }

  for (const item of REQUIRED_IDENTITY) {
    assert(markdown.includes(item), `Missing canonical identity item: ${item}`, errors);
  }

  for (const profile of REQUIRED_PROFILES) {
    assert(new RegExp(`\\|\\s*${profile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\|`, 'i').test(markdown), `Missing verified public profile row: ${profile}`, errors);
  }

  for (const type of REQUIRED_EVIDENCE_TYPES) {
    assert(markdown.includes(`| ${type} |`), `Missing evidence type row: ${type}`, errors);
  }

  for (const directory of REQUIRED_DIRECTORY_CITATIONS) {
    assert(markdown.includes(`| ${directory} |`), `Missing directory citation row: ${directory}`, errors);
  }

  for (const packet of [
    `docs/seo/nadra-directory-verification-packet-${today}.md`,
    `docs/seo/bing-places-verification-packet-${today}.md`,
    `docs/seo/apple-business-connect-verification-packet-${today}.md`,
    `docs/seo/nextdoor-citation-cleanup-packet-${today}.md`,
    `docs/seo/angi-citation-cleanup-packet-${today}.md`,
  ]) {
    assert(markdown.includes(packet), `Missing directory citation packet path: ${packet}`, errors);
  }

  assert(/Do not add Apple Maps to `sameAs`/i.test(markdown), 'Checklist must keep Apple Maps sameAs proof-gated.', errors);
  assert(/Do not add Nextdoor to `sameAs`/i.test(markdown), 'Checklist must keep Nextdoor sameAs proof-gated.', errors);
  assert(/Do not add Angi to `sameAs`/i.test(markdown), 'Checklist must keep Angi sameAs proof-gated.', errors);

  for (const rule of REQUIRED_NON_CITABLE) {
    assert(markdown.includes(rule), `Missing non-citable rule: ${rule}`, errors);
  }

  for (const page of REQUIRED_UNLOCK_PAGES) {
    assert(markdown.includes(`\`${page}\``), `Missing page-specific unlock rule: ${page}`, errors);
  }

  for (const command of REQUIRED_COMMANDS) {
    assert(markdown.includes(command), `Missing publish gate command: ${command}`, errors);
  }

  const profileRows = countTableRows(markdown, '## Verified Public Profiles In Repo');
  const directoryCitationRows = countTableRows(markdown, '## Directory Citation Proof Gate');
  const evidenceTypeRows = countTableRows(markdown, '## Evidence Types And Promotion Rules');
  const proofPacketRows = countTableRows(markdown, '## Minimum Proof Packet Per Project');
  const unlockRows = countTableRows(markdown, '## Page-Specific Unlock Rules');
  const blockerRows = countTableRows(markdown, '## Current Proof Blockers');

  assert(profileRows >= 12, `Expected at least 12 public profile rows, found ${profileRows}.`, errors);
  assert(directoryCitationRows >= 5, `Expected at least 5 directory citation rows, found ${directoryCitationRows}.`, errors);
  assert(evidenceTypeRows >= 7, `Expected at least 7 evidence type rows, found ${evidenceTypeRows}.`, errors);
  assert(proofPacketRows >= 13, `Expected at least 13 minimum proof packet fields, found ${proofPacketRows}.`, errors);
  assert(unlockRows >= 4, `Expected at least 4 page unlock rows, found ${unlockRows}.`, errors);
  assert(blockerRows >= 4, `Expected at least 4 current proof blocker rows, found ${blockerRows}.`, errors);

  assert(/Projects:\s+10 total\s+.+0 verified\./.test(markdown), 'Checklist must preserve 0 verified project proof status.', errors);
  assert(/Assets:\s+11 total\s+.+11 missing\./.test(markdown), 'Checklist must preserve missing asset proof status.', errors);
  assert(/Warranty terms:\s+0 recorded\./.test(markdown), 'Checklist must preserve 0 warranty terms status.', errors);
  assert(/Repair cost ranges:\s+0 recorded\./.test(markdown), 'Checklist must preserve 0 repair cost ranges status.', errors);
  assert(markdown.includes('`seo:prepublish-evidence` is expected to fail until red proof blockers are actually resolved.'), 'Checklist must preserve expected-blocked prepublish warning.', errors);

  assert(!/psolutionservices\.com/i.test(markdown), 'Checklist contains unrelated psolutionservices domain.', errors);
  assert(!/gpt-image-2/i.test(markdown), 'Checklist contains invalid image model wording.', errors);

  const primeMentions = [...markdown.matchAll(/Prime\s+Solutions?/gi)].length;
  if (primeMentions > 0 && !/public variants such as `LDNDECKS`, `Loudoun Decks Builder`, `Prime Solutions`, old Ashburn addresses/i.test(markdown)) {
    errors.push('Prime Solutions may appear only as an explicitly forbidden old public variant.');
  }

  const result = {
    ok: errors.length === 0,
    date: today,
    checklist: path.relative(ROOT, checklistPath),
    profileRows,
    directoryCitationRows,
    evidenceTypeRows,
    proofPacketRows,
    unlockRows,
    blockerRows,
    requiredCommands: REQUIRED_COMMANDS.length,
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const md = [
    `# Proof Source Checklist Validation - ${today}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Public profile rows: ${profileRows}`,
    `- Directory citation rows: ${directoryCitationRows}`,
    `- Evidence type rows: ${evidenceTypeRows}`,
    `- Minimum proof packet rows: ${proofPacketRows}`,
    `- Page unlock rows: ${unlockRows}`,
    `- Current blocker rows: ${blockerRows}`,
    `- Publish gate commands: ${result.requiredCommands}`,
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
