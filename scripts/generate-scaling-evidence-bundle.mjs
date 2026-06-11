#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const OUTPUT_MD = `docs/ads-tracking/scaling-evidence-bundle-${DATE}.md`;
const OUTPUT_JSON = `scripts/output/scaling-evidence-bundle-${DATE}.json`;

const SOURCES = {
  scalingBoard: `docs/seo/scaling-readiness-board-${DATE}.md`,
  evidenceRequest: `docs/ads-tracking/scaling-evidence-request-${DATE}.md`,
  blockerExit: `docs/seo/scaling-blocker-exit-checklist-${DATE}.md`,
  callAttributionTemplate: 'docs/ads-tracking/templates/call-attribution-readonly-evidence-template.csv',
  leadOutcomeTemplate: 'docs/ads-tracking/templates/lead-quality-outcome-sample-template.csv',
  ownerEvidencePacket: `docs/seo/owner-evidence-action-packet-${DATE}.csv`,
};

function parseTrailingJson(output) {
  const start = output.indexOf('{');
  const end = output.lastIndexOf('}');
  if (start === -1 || end === -1 || end <= start) return null;
  return JSON.parse(output.slice(start, end + 1));
}

function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

const boardOutput = execFileSync('node', ['scripts/generate-scaling-readiness-board.mjs'], {
  cwd: ROOT,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
});
const board = parseTrailingJson(boardOutput);

execFileSync('node', ['scripts/generate-scaling-evidence-request.mjs'], {
  cwd: ROOT,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
});

execFileSync('node', ['scripts/generate-scaling-blocker-exit-checklist.mjs'], {
  cwd: ROOT,
  encoding: 'utf8',
  stdio: ['ignore', 'pipe', 'pipe'],
});

const blockers = board?.blockers || [];
const missingSources = Object.entries(SOURCES)
  .filter(([, rel]) => !exists(rel))
  .map(([key, rel]) => `${key}: ${rel}`);

const sections = [
  {
    id: 'google-call-attribution',
    title: 'Google Call Attribution Evidence',
    source: SOURCES.callAttributionTemplate,
    owner: 'external',
    rowsNeeded: '1 real read-only evidence row minimum',
    pasteInto: SOURCES.callAttributionTemplate,
    verify: 'npm run measurement:call-attribution-evidence && npm run measurement:gate && npm run scaling:readiness',
    guardrail: 'Do not make phone_click primary and do not change Google Ads, GTM, GA4, budgets, bidding, or conversions from this packet.',
  },
  {
    id: 'lead-outcome-rows',
    title: 'Lead Outcome Rows',
    source: SOURCES.leadOutcomeTemplate,
    owner: 'owner',
    rowsNeeded: '5-10 real LDN Decks lead outcome rows',
    pasteInto: SOURCES.leadOutcomeTemplate,
    verify: 'npm run measurement:lead-outcomes && npm run scaling:readiness',
    guardrail: 'Do not mark rows upload-eligible unless click IDs or an approved enhanced/offline conversion path exists.',
  },
  {
    id: 'owner-proof-evidence',
    title: 'Owner Proof Evidence',
    source: SOURCES.ownerEvidencePacket,
    owner: 'owner',
    rowsNeeded: 'All P0 owner proof rows needed for blocked proof pages',
    pasteInto: SOURCES.ownerEvidencePacket,
    verify: 'npm run seo:evidence-action-packet:validate && npm run seo:validate-owner-intake && npm run seo:proof-preflight && npm run seo:weekly',
    guardrail: 'Do not publish unverified project proof claims, warranty terms, repair-cost ranges, or private owner/customer details.',
  },
];

const md = `# Scaling Evidence Bundle - ${DATE}

## Summary

This bundle is the single local handoff for clearing the current scaling RED blockers. It does not authorize Ads activation, budget increases, Smart Bidding changes, public proof claims, citation edits, or account-setting changes.

- Scaling status: ${board?.scalingStatus ?? 'unknown'}
- Current blockers: ${blockers.length}
- Local blockers: ${board?.localBlockerCount ?? 'unknown'}
- Owner/external blockers: ${board?.externalBlockerCount ?? 'unknown'}
- Source board: \`${SOURCES.scalingBoard}\`
- Evidence request: \`${SOURCES.evidenceRequest}\`
- Exit checklist: \`${SOURCES.blockerExit}\`

## Evidence Sections

${sections.map((section) => `### ${section.title}

- Blocker id: ${section.id}
- Owner: ${section.owner}
- Rows needed: ${section.rowsNeeded}
- Source/template: \`${section.source}\`
- Paste/update location: \`${section.pasteInto}\`
- Verify: \`${section.verify}\`
- Guardrail: ${section.guardrail}`).join('\n\n')}

## Required Local Sequence

1. Fill the relevant source/template with real source-of-record evidence.
2. Run the section verification command.
3. Run \`npm run scaling:readiness\`.
4. Keep scaling RED until the blocker disappears from the scaling readiness board.

## Missing Sources

${missingSources.length ? missingSources.map((item) => `- ${item}`).join('\n') : '- none'}
`;

const result = {
  ok: missingSources.length === 0,
  date: DATE,
  scalingStatus: board?.scalingStatus ?? null,
  blockers: blockers.length,
  localBlockers: board?.localBlockerCount ?? null,
  externalBlockers: board?.externalBlockerCount ?? null,
  sections: sections.length,
  missingSources,
  outputs: {
    markdown: OUTPUT_MD,
    json: OUTPUT_JSON,
  },
};

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_MD)), { recursive: true });
fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);

console.log(JSON.stringify(result, null, 2));
if (!result.ok) process.exit(1);
