#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const OUTPUT_JSON = `scripts/output/scaling-readiness-board-${DATE}.json`;
const OUTPUT_MD = `docs/seo/scaling-readiness-board-${DATE}.md`;
const LIVE_CALL_ATTRIBUTION = `docs/ads-tracking/live-call-attribution-evidence-${DATE}.csv`;
const LIVE_LEAD_OUTCOMES = `docs/ads-tracking/live-lead-outcomes-${DATE}.csv`;
const OWNER_PROJECT_INTAKE = `docs/seo/project-evidence-intake-${DATE}.csv`;
const OWNER_PHOTO_MANIFEST = `docs/seo/photo-ingestion-manifest-${DATE}.csv`;
const OWNER_WARRANTY_TERMS = `docs/seo/warranty-terms-intake-${DATE}.csv`;
const OWNER_REPAIR_COSTS = `docs/seo/repair-cost-ranges-intake-${DATE}.csv`;

function parseTrailingJson(output) {
  const start = output.indexOf('{');
  const end = output.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  try {
    return JSON.parse(output.slice(start, end + 1));
  } catch {
    return null;
  }
}

function runGate(id, label, args) {
  const started = Date.now();
  try {
    const output = execFileSync('node', args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return {
      id,
      label,
      ok: true,
      ms: Date.now() - started,
      json: parseTrailingJson(output),
    };
  } catch (error) {
    const output = `${error.stdout || ''}\n${error.stderr || ''}`;
    return {
      id,
      label,
      ok: false,
      ms: Date.now() - started,
      json: parseTrailingJson(output),
      error: error.message,
    };
  }
}

function statusIcon(status) {
  if (status === 'GREEN') return '[GREEN]';
  if (status === 'YELLOW') return '[YELLOW]';
  return '[RED]';
}

function gateRow(gate, summary) {
  return `| ${gate.label} | ${gate.ok ? 'pass' : 'fail'} | ${summary} |`;
}

const gates = [
  runGate('measurement', 'Measurement integrity gate', ['scripts/measurement-integrity-gate.mjs']),
  runGate('call-attribution-evidence', 'Call attribution evidence', ['scripts/validate-call-attribution-evidence.mjs']),
  runGate('lead-outcomes', 'Lead outcome rows', ['scripts/validate-lead-outcome-rows.mjs']),
  runGate('owner-evidence-action-packet', 'Owner evidence action packet', ['scripts/validate-owner-evidence-action-packet.mjs']),
  runGate('proof-preflight', 'Proof system preflight', ['scripts/proof-system-preflight.mjs']),
  runGate('ads-imports', 'Google Ads import pack', ['scripts/validate-google-ads-imports.mjs']),
];

const measurement = gates.find((gate) => gate.id === 'measurement')?.json || {};
const callAttributionEvidence = gates.find((gate) => gate.id === 'call-attribution-evidence')?.json || {};
const leadOutcomes = gates.find((gate) => gate.id === 'lead-outcomes')?.json || {};
const ownerEvidenceActionPacket = gates.find((gate) => gate.id === 'owner-evidence-action-packet')?.json || {};
const proofPreflight = gates.find((gate) => gate.id === 'proof-preflight')?.json || {};
const adsImports = gates.find((gate) => gate.id === 'ads-imports')?.json || {};

const blockers = [];
const readySignals = [];

if ((callAttributionEvidence.primaryQualifiedRows ?? 0) < 1) {
  blockers.push({
    id: 'google-call-attribution',
    owner: 'external',
    priority: 'P0',
    action: `Add real Google Ads/GTM proof rows to ${LIVE_CALL_ATTRIBUTION}; then run \`npm run measurement:call-attribution-evidence && npm run measurement:gate && npm run scaling:readiness\`.`,
    evidence: `Measurement gate remains RED while google-call-attribution is WARN/external-proof-needed. Call attribution evidence status: ${callAttributionEvidence.status ?? 'unknown'}, ${callAttributionEvidence.rows ?? 0} real rows.`,
  });
} else {
  readySignals.push(`${callAttributionEvidence.primaryQualifiedRows} active primary qualified-call evidence row validates.`);
}

if ((leadOutcomes.rows ?? 0) < 5) {
  blockers.push({
    id: 'lead-outcome-rows',
    owner: 'owner',
    priority: 'P0',
    action: `Add 5-10 real lead outcome rows to ${LIVE_LEAD_OUTCOMES}; then run \`npm run measurement:lead-outcomes && npm run scaling:readiness\`.`,
    evidence: `${leadOutcomes.rows ?? 0} real rows, ${leadOutcomes.qualifiedRows ?? 0} qualified, status ${leadOutcomes.status ?? 'unknown'}.`,
  });
} else if ((leadOutcomes.errors || []).length) {
  blockers.push({
    id: 'lead-outcome-validation-errors',
    owner: 'local',
    priority: 'P0',
    action: 'Fix lead outcome CSV validation errors before any Ads upload or scaling decision.',
    evidence: `${leadOutcomes.errors.length} validation errors.`,
  });
} else {
  readySignals.push(`${leadOutcomes.rows} real lead outcome rows validate.`);
}

if ((leadOutcomes.rows ?? 0) >= 5 && (leadOutcomes.uploadEligibleRows ?? 0) < 3) {
  blockers.push({
    id: 'offline-upload-eligibility',
    owner: 'owner',
    priority: 'P0',
    action: `Make at least 3 qualified lead rows upload-eligible in ${LIVE_LEAD_OUTCOMES} by adding click IDs or an approved Enhanced/Offline conversion path; then run \`npm run measurement:lead-outcomes && npm run scaling:readiness\`.`,
    evidence: `${leadOutcomes.rows ?? 0} real rows validate, but only ${leadOutcomes.uploadEligibleRows ?? 0} are upload-eligible.`,
  });
}

if ((proofPreflight.blocked ?? 0) > 0 || (proofPreflight.proofIncomplete ?? 0) > 0) {
  blockers.push({
    id: 'owner-proof-evidence',
    owner: 'owner',
    priority: 'P0',
    action: `Complete ${OWNER_PROJECT_INTAKE}, ${OWNER_PHOTO_MANIFEST}, ${OWNER_WARRANTY_TERMS}, and ${OWNER_REPAIR_COSTS}; then run \`npm run seo:validate-owner-intake && npm run seo:proof-preflight && npm run seo:weekly\`.`,
    evidence: `${proofPreflight.blocked ?? 0} blocked, ${proofPreflight.proofIncomplete ?? 0} proof-incomplete, prepublish expected-blocked ${Boolean(proofPreflight.prepublishExpectedBlocked)}. Owner action packet: ${ownerEvidenceActionPacket.rows ?? '?'} rows, ${ownerEvidenceActionPacket.p0 ?? '?'} P0, ${ownerEvidenceActionPacket.errors?.length ?? '?'} errors.`,
  });
} else {
  readySignals.push('Proof preflight has no blocked or proof-incomplete pages.');
}

if (!adsImports.ok || (adsImports.errors || []).length) {
  blockers.push({
    id: 'ads-import-pack',
    owner: 'local',
    priority: 'P0',
    action: 'Fix Google Ads import validation before any Ads Editor import.',
    evidence: `${adsImports.errors?.length ?? 'unknown'} Ads import errors.`,
  });
} else {
  readySignals.push(`Google Ads import pack validates locally: ${adsImports.campaigns ?? '?'} campaigns, ${adsImports.keywords ?? '?'} keywords.`);
}

const localFailures = gates.filter((gate) => !gate.ok);
const localBlockers = blockers.filter((blocker) => blocker.owner === 'local');
const externalBlockers = blockers.filter((blocker) => blocker.owner !== 'local');
const scalingStatus = localFailures.length || localBlockers.length || externalBlockers.length ? 'RED' : 'GREEN';

const result = {
  ok: localFailures.length === 0 && localBlockers.length === 0,
  date: DATE,
  scalingStatus,
  localFailures: localFailures.map((gate) => gate.id),
  blockerCount: blockers.length,
  localBlockerCount: localBlockers.length,
  externalBlockerCount: externalBlockers.length,
  readySignals,
  blockers,
  gates: gates.map((gate) => ({
    id: gate.id,
    label: gate.label,
    ok: gate.ok,
    ms: gate.ms,
  })),
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# Scaling Readiness Board - ${DATE}

## Result

- Scaling status: ${statusIcon(scalingStatus)} ${scalingStatus}
- Local gate failures: ${localFailures.length}
- Local blockers: ${localBlockers.length}
- External/owner blockers: ${externalBlockers.length}
- Ready signals: ${readySignals.length}

## Gate Evidence

| Gate | Local status | Summary |
|---|---:|---|
${[
  gateRow(gates[0], `${measurement.pass ?? '?'} pass, ${measurement.warn ?? '?'} warn, ${measurement.fail ?? '?'} fail, scaling ${measurement.scalingGate ?? 'unknown'}`),
  gateRow(gates[1], `${callAttributionEvidence.status ?? 'unknown'}, ${callAttributionEvidence.rows ?? 0} real rows, ${callAttributionEvidence.primaryQualifiedRows ?? 0} primary qualified-call rows, ${callAttributionEvidence.errors?.length ?? 0} errors`),
  gateRow(gates[2], `${leadOutcomes.status ?? 'unknown'}, ${leadOutcomes.rows ?? 0} real rows, ${leadOutcomes.qualifiedRows ?? 0} qualified, ${leadOutcomes.uploadEligibleRows ?? 0} upload-eligible`),
  gateRow(gates[3], `${ownerEvidenceActionPacket.rows ?? '?'} rows, ${ownerEvidenceActionPacket.p0 ?? '?'} P0, ${ownerEvidenceActionPacket.p1 ?? '?'} P1, ${ownerEvidenceActionPacket.errors?.length ?? 0} errors`),
  gateRow(gates[4], `${proofPreflight.publishReady ?? 0} ready, ${proofPreflight.proofIncomplete ?? 0} incomplete, ${proofPreflight.blocked ?? 0} blocked, expected-blocked ${Boolean(proofPreflight.prepublishExpectedBlocked)}`),
  gateRow(gates[5], `${adsImports.campaigns ?? '?'} campaigns, ${adsImports.keywords ?? '?'} keywords, $${adsImports.totalDailyBudget ?? '?'} daily budget, ${(adsImports.errors || []).length} errors`),
].join('\n')}

## Blockers

${blockers.length ? blockers.map((blocker) => `- ${blocker.priority} ${blocker.id} (${blocker.owner}): ${blocker.action}
  - Evidence: ${blocker.evidence}`).join('\n') : '- none'}

## Ready Signals

${readySignals.length ? readySignals.map((signal) => `- ${signal}`).join('\n') : '- none'}

## Operating Rule

Keep scaling RED while any P0 blocker remains. Use the exact files listed in Blockers, then rerun the listed commands. Do not activate or raise budgets based only on local import readiness; qualified-call attribution, real lead outcomes, and owner proof evidence must be proven first.
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_MD)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);

console.log(JSON.stringify(result, null, 2));
