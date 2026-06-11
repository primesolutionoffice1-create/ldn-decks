#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

const REQUIRED_TARGETS = [
  { path: '/services/deck-repair', minimumInbound: 18 },
  { path: '/deck-cost-calculator', minimumInbound: 30 },
  { path: '/composite-deck-cost-northern-virginia', minimumInbound: 35 },
  { path: '/services/deck-resurfacing', minimumInbound: 18 },
  { path: '/services/deck-replacement', minimumInbound: 18 },
  { path: '/education/deck-stair-code-rise-run-virginia', minimumInbound: 18 },
  { path: '/education/deck-stair-construction-diagram', minimumInbound: 18 },
  { path: '/education/ledger-board-flashing-deck-attachment-virginia', minimumInbound: 25 },
  { path: '/deck-permit-loudoun-county-virginia', minimumInbound: 45 },
  { path: '/deck-permit-fairfax-county-virginia', minimumInbound: 40 },
  { path: '/composite-decks', minimumInbound: 22 },
  { path: '/trex-decks', minimumInbound: 15 },
  { path: '/timbertech-decks', minimumInbound: 10 },
  { path: '/trex-vs-timbertech-vs-azek', minimumInbound: 18 },
  { path: '/covered-deck-builder-northern-virginia', minimumInbound: 14 },
  { path: '/deck-builder-northern-virginia', minimumInbound: 30 },
];

const REQUIRED_RULES = [
  'Add only links that help the user choose the next useful step.',
  'Do not add proof links to pages that still have evidence blockers as if they are verified case studies.',
  'Use varied, natural anchors. Do not repeat exact-match anchors mechanically.',
  'Prefer contextual links inside cost, repair, permit, local, and service sections over footer-only links.',
  'If a page is already linking to a target, do not add a duplicate link unless there is a clear UX reason.',
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const reportPath = path.join(DOCS_DIR, `internal-link-gap-report-${today}.md`);
  const jsonPath = path.join(OUTPUT_DIR, `internal-link-gap-report-${today}.json`);
  const validationJsonPath = path.join(OUTPUT_DIR, `internal-link-gap-report-validation-${today}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `internal-link-gap-report-validation-${today}.md`);

  const errors = [];
  const warnings = [];

  assert(fs.existsSync(reportPath), `Missing markdown report: ${path.relative(ROOT, reportPath)}`, errors);
  assert(fs.existsSync(jsonPath), `Missing JSON report: ${path.relative(ROOT, jsonPath)}`, errors);

  const reportMd = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, 'utf8') : '';
  const reportJson = fs.existsSync(jsonPath) ? readJson(jsonPath) : {};
  const targets = Array.isArray(reportJson.targets) ? reportJson.targets : [];
  const reports = Array.isArray(reportJson.reports) ? reportJson.reports : [];

  assert(reportJson.ok === true, 'Generator output must have ok=true.', errors);
  assert((reportJson.pagesScanned ?? 0) >= 200, `Expected at least 200 scanned pages, found ${reportJson.pagesScanned ?? 'unknown'}.`, errors);
  assert(targets.length === REQUIRED_TARGETS.length, `Expected ${REQUIRED_TARGETS.length} priority targets, found ${targets.length}.`, errors);
  assert(reports.length === REQUIRED_TARGETS.length, `Expected ${REQUIRED_TARGETS.length} detailed reports, found ${reports.length}.`, errors);

  const targetByPath = new Map(targets.map((target) => [target.path, target]));
  const reportByPath = new Map(reports.map((report) => [report.path, report]));

  for (const required of REQUIRED_TARGETS) {
    const target = targetByPath.get(required.path);
    const detail = reportByPath.get(required.path);

    assert(Boolean(target), `Missing required target summary: ${required.path}`, errors);
    assert(Boolean(detail), `Missing required target detail: ${required.path}`, errors);
    if (!target || !detail) continue;

    assert(target.minimumInbound === required.minimumInbound, `${required.path} minimumInbound drifted: expected ${required.minimumInbound}, found ${target.minimumInbound}.`, errors);
    assert(target.inboundCount >= required.minimumInbound, `${required.path} inboundCount below threshold: ${target.inboundCount}/${required.minimumInbound}.`, errors);
    assert(target.gap === 0, `${required.path} must have 0 gap, found ${target.gap}.`, errors);
    assert(target.status === 'healthy', `${required.path} must be healthy, found ${target.status}.`, errors);
    assert((target.recommendations ?? 0) >= 1, `${required.path} should keep at least one reviewed recommendation for future link planning.`, errors);
    assert(Array.isArray(detail.inbound) && detail.inbound.length === target.inboundCount, `${required.path} inbound detail count does not match summary.`, errors);
    assert(Array.isArray(detail.recommendations) && detail.recommendations.length === target.recommendations, `${required.path} recommendation detail count does not match summary.`, errors);
  }

  for (const rule of REQUIRED_RULES) {
    assert(reportMd.includes(rule), `Missing proof-safe internal-linking rule: ${rule}`, errors);
  }

  const unrelatedProjectPattern = new RegExp('prime\\s+solution|p' + 'solutionservices\\.com', 'i');
  assert(!unrelatedProjectPattern.test(reportMd), 'Internal link gap report contains unrelated Prime/psolution wording.', errors);
  assert(!/gpt-image-2/i.test(reportMd), 'Internal link gap report contains invalid image model wording.', errors);

  const proofPageTargets = targets.filter((target) => /proof|before-and-after|showcase|reviews/i.test(target.path));
  assert(proofPageTargets.length === 0, `Priority targets must not be proof pages while evidence blockers remain: ${proofPageTargets.map((target) => target.path).join(', ')}`, errors);

  const result = {
    ok: errors.length === 0,
    date: today,
    report: path.relative(ROOT, reportPath),
    json: path.relative(ROOT, jsonPath),
    pagesScanned: reportJson.pagesScanned ?? null,
    targets: targets.length,
    healthyTargets: targets.filter((target) => target.status === 'healthy').length,
    gaps: targets.reduce((sum, target) => sum + (target.gap ?? 0), 0),
    minimumInboundTotal: targets.reduce((sum, target) => sum + (target.minimumInbound ?? 0), 0),
    inboundTotal: targets.reduce((sum, target) => sum + (target.inboundCount ?? 0), 0),
    proofSafeRules: REQUIRED_RULES.length,
    anchorVariantRuleGuarded: reportMd.includes('Use varied, natural anchors. Do not repeat exact-match anchors mechanically.'),
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const md = [
    `# Internal Link Gap Validation - ${today}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Pages scanned: ${result.pagesScanned ?? 'unknown'}`,
    `- Priority targets: ${result.targets}`,
    `- Healthy targets: ${result.healthyTargets}`,
    `- Total gaps: ${result.gaps}`,
    `- Total inbound links to priority targets: ${result.inboundTotal}`,
    `- Proof-safe rules checked: ${result.proofSafeRules}`,
    `- Errors: ${errors.length}`,
    `- Warnings: ${warnings.length}`,
    '',
    '## Target Thresholds',
    '',
    '| Target | Inbound | Minimum | Gap | Status |',
    '|---|---:|---:|---:|---|',
    ...targets.map((target) => `| \`${target.path}\` | ${target.inboundCount} | ${target.minimumInbound} | ${target.gap} | ${target.status} |`),
    '',
    '## Warnings',
    '',
    ...(warnings.length ? warnings.map((warning) => `- ${warning}`) : ['- None']),
    '',
    '## Errors',
    '',
    ...(errors.length ? errors.map((error) => `- ${error}`) : ['- None']),
    '',
  ].join('\n');

  fs.writeFileSync(validationJsonPath, `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(validationMdPath, md);

  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exit(1);
}

main();
