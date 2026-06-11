#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

function datedFiles(dir, prefix, extension) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .map((name) => {
      const match = name.match(new RegExp(`^${prefix}-(\\d{4}-\\d{2}-\\d{2})\\.${extension}$`));
      if (!match) return null;
      return { name, date: match[1], path: path.join(dir, name) };
    })
    .filter(Boolean)
    .filter((file) => file.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date));
}

function latestJson(prefix) {
  const [file] = datedFiles(OUTPUT_DIR, prefix, 'json');
  if (!file) throw new Error(`Missing ${prefix} JSON in ${path.relative(ROOT, OUTPUT_DIR)}.`);
  return { file, data: JSON.parse(fs.readFileSync(file.path, 'utf8')) };
}

function maturityFromPreflight(preflight) {
  if ((preflight.blocked || 0) > 0 || preflight.prepublishExpectedBlocked) {
    return {
      stage: 'domain-adapted',
      cap: 84,
      score: 82,
      gate: 'proof-blocked',
      reason: 'Architecture, schema, and proof operations are in place, but owner evidence blocks market-ready release.',
    };
  }

  if ((preflight.proofIncomplete || 0) > 0) {
    return {
      stage: 'demo-verified candidate',
      cap: 89,
      score: 87,
      gate: 'proof-incomplete',
      reason: 'No hard blockers remain, but partial proof records still need confirmation before market-ready release.',
    };
  }

  return {
    stage: 'market-ready candidate',
    cap: null,
    score: 91,
    gate: 'release-review',
    reason: 'Proof preflight has no blocked or incomplete pages; final deployment and live QA can proceed.',
  };
}

function flattenMissing(blockedPages = []) {
  return blockedPages.flatMap((page) => (page.topMissingItems || []).map((item) => ({
    page: page.page,
    type: item.type,
    id: item.id,
    status: item.status,
    needed: item.needed,
  })));
}

function main() {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const { file: preflightFile, data: preflight } = latestJson('proof-system-preflight');
  const sprintFiles = datedFiles(DOCS_DIR, 'owner-evidence-sprint', 'md');
  const sprintFile = sprintFiles[0] || null;
  const maturity = maturityFromPreflight(preflight);
  const missingItems = flattenMissing(preflight.blockedPages);

  const topBlocker = {
    id: 'OWNER_EVIDENCE_COLLECTION',
    label: 'Owner evidence collection + placeholder resolution',
    status: maturity.gate,
    blockedPages: preflight.blocked || 0,
    proofIncompletePages: preflight.proofIncomplete || 0,
    ownerSprintBlocks: preflight.ownerSprintBlocks || 0,
    publicPlaceholderFindings: preflight.publicPlaceholderFindings || 0,
  };
  const directoryValidation = latestJson('directory-citation-packet-validation')?.data || null;
  const directoryCitationGate = directoryValidation || preflight.directoryCitationPackets || {
    ok: false,
    packets: [],
    sameAsCount: 0,
    errors: ['Directory citation validation did not run in proof preflight.'],
    warnings: [],
  };

  const nextActions = [
    'Collect original owner media for deck repair, before/after, and composite-cost proof modules.',
    'Fill warranty term and repair cost range intake files only from written policy, invoices, accepted estimates, calculator data, or owner-approved pricing policy.',
    'Keep NADRA/Bing/Apple/Nextdoor/Angi citation packets sameAs-safe; do not promote external directory URLs without current proof screenshots or admin evidence.',
    'Keep unknown project details partial; do not promote any row to verified until provenance is concrete.',
    'Dry-run owner-filled intake files, then rerun evidence, schema, proof preflight, and build gates before publish.',
  ];

  const result = {
    ok: true,
    date: today,
    generatedAt: new Date().toISOString(),
    maturity,
    topBlocker,
    sourceFiles: {
      proofPreflight: path.relative(ROOT, preflightFile.path),
      ownerEvidenceSprint: sprintFile ? path.relative(ROOT, sprintFile.path) : null,
      directoryCitationValidation: directoryCitationGate.outputs?.markdown || null,
    },
    proofSummary: {
      publishReady: preflight.publishReady || 0,
      proofIncomplete: preflight.proofIncomplete || 0,
      blocked: preflight.blocked || 0,
      publicPlaceholderFindings: preflight.publicPlaceholderFindings || 0,
      prepublishExpectedBlocked: Boolean(preflight.prepublishExpectedBlocked),
    },
    directoryCitationGate: {
      ok: Boolean(directoryCitationGate.ok),
      packets: directoryCitationGate.packets || [],
      packetCount: (directoryCitationGate.packets || []).length,
      sameAsCount: directoryCitationGate.sameAsCount || 0,
      errors: directoryCitationGate.errors || [],
      warnings: directoryCitationGate.warnings || [],
      statusFile: directoryCitationGate.statusFile || null,
      validationReport: directoryCitationGate.outputs?.markdown || null,
    },
    blockedPages: preflight.blockedPages || [],
    proofIncompletePages: preflight.proofIncompletePages || [],
    missingItems: missingItems.slice(0, 20),
    nextActions,
    outputs: {
      report: `docs/seo/brainstein-readiness-audit-${today}.md`,
      json: `scripts/output/brainstein-readiness-audit-${today}.json`,
    },
  };

  const blockedRows = (preflight.blockedPages || []).map((page) => (
    `| ${page.page} | ${page.topIssue} | assets ${page.missingItemCounts?.assets || 0}; projects ${page.missingItemCounts?.projects || 0}; warranty ${page.missingItemCounts?.warrantyTerms || 0}; cost ${page.missingItemCounts?.repairCostRanges || 0} |`
  ));

  const md = [
    `# Brainstein Readiness Audit - ${today}`,
    '',
    'Purpose: map the current LDN Decks proof system into Brainstein maturity language without inventing evidence.',
    '',
    '## Brainstein Maturity',
    '',
    `- Current stage: ${maturity.stage}`,
    `- Score: ${maturity.score}${maturity.cap ? ` / capped at ${maturity.cap}` : ''}`,
    `- Gate: ${maturity.gate}`,
    `- Reason: ${maturity.reason}`,
    '',
    '## Evidence Gate',
    '',
    `- Source preflight: ${result.sourceFiles.proofPreflight}`,
    `- Owner sprint checklist: ${result.sourceFiles.ownerEvidenceSprint || 'missing'}`,
    `- Publish-ready pages: ${result.proofSummary.publishReady}`,
    `- Proof-incomplete pages: ${result.proofSummary.proofIncomplete}`,
    `- Blocked pages: ${result.proofSummary.blocked}`,
    `- Public placeholder findings: ${result.proofSummary.publicPlaceholderFindings}`,
    `- Prepublish evidence gate expected blocked: ${result.proofSummary.prepublishExpectedBlocked ? 'yes' : 'no'}`,
    '',
    '## Directory Citation Gate',
    '',
    `- Status: ${result.directoryCitationGate.ok ? 'pass' : 'fail'}`,
    `- Packets: ${result.directoryCitationGate.packetCount}`,
    `- Organization sameAs URLs: ${result.directoryCitationGate.sameAsCount}`,
    `- Errors: ${result.directoryCitationGate.errors.length}`,
    `- Warnings: ${result.directoryCitationGate.warnings.length}`,
    `- Status file: ${result.directoryCitationGate.statusFile || 'missing'}`,
    `- Validation report: ${result.directoryCitationGate.validationReport || 'missing'}`,
    '- Rule: NADRA may remain in `sameAs` because the profile URL was supplied directly; Bing, Apple, Nextdoor, and Angi remain proof-gated until screenshots/admin evidence confirm canonical public identity.',
    '',
    '## Top Blocker',
    '',
    `- ${topBlocker.label}`,
    `- Status: ${topBlocker.status}`,
    `- Owner sprint blocks: ${topBlocker.ownerSprintBlocks}`,
    '',
    '## Blocked Pages',
    '',
    '| Page | Top issue | Missing counts |',
    '|---|---|---|',
    ...(blockedRows.length ? blockedRows : ['| None | None | None |']),
    '',
    '## Next Actions',
    '',
    ...nextActions.map((action) => `- ${action}`),
    '',
    '## Publish Rule',
    '',
    'Do not deploy proof-dependent pages as publish-ready until owner-supplied evidence is imported, verified, regenerated, and `npm run seo:prepublish-evidence` passes without expected-blocked status.',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(ROOT, result.outputs.json), `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(path.join(ROOT, result.outputs.report), md);
  console.log(JSON.stringify(result, null, 2));
}

main();
