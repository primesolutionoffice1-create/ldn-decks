#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const REQUIRED_SECTIONS = [
  '## Executive Read',
  '## Current Inventory',
  '## Route Cluster Map',
  '## What We Have',
  '## What Must Be Improved First',
  '### P0 — Evidence and Proof Layer',
  '### P0 — Deck Repair Publish Readiness',
  '### Create After Evidence Arrives',
  '### Create Now Without Fabrication',
  '### Candidate New Pages, In Order',
  '## Next 10 Execution Moves',
];

const REQUIRED_PHRASES = [
  'The site should not enter another mass-content phase until the evidence blockers are resolved',
  'Do not claim live GBP metrics unless API/source evidence is available.',
  'Add proof modules only from `src/data/verifiedProofSnippets.json`, not from handcrafted copy.',
  'Do not create all at once. Create only when they have a clear internal-link target and unique value.',
  'Live robots/sitemap/IndexNow were verified with network access on 2026-06-02 and passed 6/6.',
];

const REQUIRED_BLOCKED_PAGES = [
  '/before-and-after',
  '/composite-deck-cost-northern-virginia',
  '/services/deck-repair',
  '/showcase',
];

const REQUIRED_CANDIDATE_PAGES = [
  '/deck-repair-cost-northern-virginia',
  '/deck-ledger-repair-northern-virginia',
  '/deck-stair-repair-northern-virginia',
  '/deck-railing-repair-northern-virginia',
  '/deck-post-rot-repair-northern-virginia',
  '/patio-cost-northern-virginia',
];

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function parseNumberLine(markdown, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const match = markdown.match(new RegExp(`${escaped}:\\s+(\\d+)`));
  return match ? Number(match[1]) : null;
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const reportPath = path.join(DOCS_DIR, `ldndecks-deep-seo-growth-map-${today}.md`);
  const validationJsonPath = path.join(OUTPUT_DIR, `deep-seo-growth-map-validation-${today}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `deep-seo-growth-map-validation-${today}.md`);
  const errors = [];
  const warnings = [];

  assert(fs.existsSync(reportPath), `Missing growth map report: ${path.relative(ROOT, reportPath)}`, errors);
  const markdown = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, 'utf8') : '';

  for (const section of REQUIRED_SECTIONS) {
    assert(markdown.includes(section), `Missing required section: ${section}`, errors);
  }

  for (const phrase of REQUIRED_PHRASES) {
    assert(markdown.includes(phrase), `Missing required proof-safety phrase: ${phrase}`, errors);
  }

  for (const route of REQUIRED_BLOCKED_PAGES) {
    assert(markdown.includes(`\`${route}\``), `Missing blocked/proof-gated page in growth map: ${route}`, errors);
  }

  for (const route of REQUIRED_CANDIDATE_PAGES) {
    assert(markdown.includes(route), `Missing candidate page guard/order item: ${route}`, errors);
  }

  const appPages = parseNumberLine(markdown, '- App page modules scanned');
  const internalLinks = parseNumberLine(markdown, '- Internal links audited');
  const jsonLdFiles = parseNumberLine(markdown, '- JSON-LD files scanned');
  const freshPages = parseNumberLine(markdown, '- Freshness audit');

  assert((appPages ?? 0) >= 200, `Expected at least 200 app page modules, found ${appPages ?? 'unknown'}.`, errors);
  assert((internalLinks ?? 0) >= 700, `Expected at least 700 audited internal links, found ${internalLinks ?? 'unknown'}.`, errors);
  assert((jsonLdFiles ?? 0) >= 100, `Expected at least 100 JSON-LD files, found ${jsonLdFiles ?? 'unknown'}.`, errors);
  assert((freshPages ?? 0) >= 180, `Expected at least 180 fresh pages, found ${freshPages ?? 'unknown'}.`, errors);

  assert(/Projects:\s+10 total\s+.+0 verified\./.test(markdown), 'Growth map must preserve 0 verified project proof status.', errors);
  assert(/Asset requirements:\s+11 total\s+.+11 missing\./.test(markdown), 'Growth map must preserve missing asset proof status.', errors);
  assert(/Owner action packet:\s+26 actions\s+.+13 P0\s+.+13 P1\./.test(markdown), 'Growth map must preserve owner evidence action counts.', errors);
  assert(!/gpt-image-2/i.test(markdown), 'Growth map contains invalid image model wording.', errors);
  assert(!new RegExp('prime\\s+solution|p' + 'solutionservices\\.com', 'i').test(markdown), 'Growth map contains unrelated Prime/psolution wording.', errors);
  assert(!/verified\s+project\s+examples/i.test(markdown), 'Growth map appears to claim verified project examples before owner evidence exists.', errors);

  const result = {
    ok: errors.length === 0,
    date: today,
    report: path.relative(ROOT, reportPath),
    appPages,
    internalLinks,
    jsonLdFiles,
    freshPages,
    blockedPagesGuarded: REQUIRED_BLOCKED_PAGES.length,
    candidatePagesGuarded: REQUIRED_CANDIDATE_PAGES.length,
    requiredSections: REQUIRED_SECTIONS.length,
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const md = [
    `# Deep SEO Growth Map Validation - ${today}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- App page modules: ${appPages ?? 'unknown'}`,
    `- Internal links audited: ${internalLinks ?? 'unknown'}`,
    `- JSON-LD files: ${jsonLdFiles ?? 'unknown'}`,
    `- Fresh pages: ${freshPages ?? 'unknown'}`,
    `- Blocked/proof-gated pages guarded: ${result.blockedPagesGuarded}`,
    `- Candidate pages guarded: ${result.candidatePagesGuarded}`,
    `- Required sections: ${result.requiredSections}`,
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
