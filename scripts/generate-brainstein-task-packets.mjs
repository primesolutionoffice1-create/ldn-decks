#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const today = localDateStamp();

function readJson(relativePath) {
  const fullPath = path.join(ROOT, relativePath);
  if (!fs.existsSync(fullPath)) throw new Error(`Missing required JSON: ${relativePath}`);
  return JSON.parse(fs.readFileSync(fullPath, 'utf8'));
}

function csvEscape(value) {
  const text = value == null ? '' : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function pagePacket(page) {
  const counts = page.missingItemCounts || {};
  const topItems = page.topMissingItems || [];
  const missingSummary = [
    counts.assets ? `${counts.assets} asset(s)` : null,
    counts.projects ? `${counts.projects} project record(s)` : null,
    counts.warrantyTerms ? `${counts.warrantyTerms} warranty term(s)` : null,
    counts.repairCostRanges ? `${counts.repairCostRanges} repair cost range(s)` : null,
  ].filter(Boolean).join('; ');

  return {
    packet_id: `proof-${page.page.replace(/^\//, '').replace(/[^a-z0-9]+/gi, '-').replace(/-$/, '')}`,
    owner: 'Owner evidence collector',
    reviewer: 'SEO proof operator',
    page: page.page,
    priority: page.page === '/services/deck-repair' ? 'P0' : 'P1',
    task: `Resolve proof blockers for ${page.page}`,
    source_of_truth: 'scripts/output/brainstein-readiness-audit-' + today + '.json',
    evidence_needed: missingSummary || page.topIssue,
    first_items: topItems.slice(0, 5).map((item) => `${item.id}: ${item.needed}`).join(' | '),
    done_criteria: 'Owner-supplied evidence is entered into the relevant intake CSV, private data is redacted, dry-run validators pass, and the page no longer appears as blocked in proof preflight.',
    do_not_do: 'Do not invent projects, dates, technician names, reviews, costs, warranty terms, permit outcomes, or photo metadata. Leave unknown details partial.',
    validator: 'npm run seo:validate-owner-intake && npm run seo:proof-preflight',
  };
}

function globalPackets(readiness) {
  return [
    {
      packet_id: 'proof-privacy-redaction',
      owner: 'Owner evidence collector',
      reviewer: 'SEO proof operator',
      page: 'all proof assets',
      priority: 'P0',
      task: 'Redact private homeowner and permit data before public proof use',
      source_of_truth: readiness.sourceFiles.ownerEvidenceSprint,
      evidence_needed: 'Original media/documents with addresses, permit numbers, customer names, phone numbers, emails, and private notes removed from public paths and captions.',
      first_items: 'Check photo EXIF/filenames, screenshots, PDFs, invoice snippets, permit screenshots, and caption text before ingest.',
      done_criteria: 'No private homeowner data appears in public image paths, captions, reports, screenshots, or proof-bearing copy.',
      do_not_do: 'Do not upload unredacted customer documents or cite private owner data in public copy.',
      validator: 'npm run seo:audit-placeholders && npm run seo:proof-preflight',
    },
    {
      packet_id: 'proof-final-dry-run',
      owner: 'SEO proof operator',
      reviewer: 'Release reviewer',
      page: 'release gate',
      priority: 'P0',
      task: 'Run final dry-run gate before publish-ready promotion',
      source_of_truth: readiness.sourceFiles.proofPreflight,
      evidence_needed: 'Owner-filled intake CSVs, asset paths, warranty term source, repair cost source, and project records ready for dry-run validation.',
      first_items: 'Run owner intake validation, evidence ledger validation, directory citation validation, proof runtime validation, schema validation, proof preflight, and build.',
      done_criteria: '`npm run seo:prepublish-evidence` passes without expected-blocked status and Brainstein readiness no longer reports proof-blocked.',
      do_not_do: 'Do not deploy, merge, or request indexing while the gate remains expected-blocked.',
      validator: 'npm run seo:directory-citations:validate && npm run seo:prepublish-evidence && npm run brainstein:readiness && npm run brainstein:readiness:validate && npm run build',
    },
  ];
}

function main() {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const readinessPath = `scripts/output/brainstein-readiness-audit-${today}.json`;
  const readiness = readJson(readinessPath);
  const packets = [
    ...((readiness.blockedPages || []).map(pagePacket)),
    ...globalPackets(readiness),
  ];

  const csvHeaders = ['packet_id', 'owner', 'reviewer', 'page', 'priority', 'task', 'source_of_truth', 'evidence_needed', 'first_items', 'done_criteria', 'do_not_do', 'validator'];
  const csv = [
    csvHeaders.join(','),
    ...packets.map((packet) => csvHeaders.map((header) => csvEscape(packet[header])).join(',')),
  ].join('\n');

  const blockedRows = packets.map((packet) => [
    `### ${packet.packet_id}`,
    '',
    `- Page/scope: ${packet.page}`,
    `- Priority: ${packet.priority}`,
    `- Owner: ${packet.owner}`,
    `- Reviewer: ${packet.reviewer}`,
    `- Task: ${packet.task}`,
    `- Source of truth: ${packet.source_of_truth}`,
    `- Evidence needed: ${packet.evidence_needed}`,
    `- First items: ${packet.first_items}`,
    `- Done criteria: ${packet.done_criteria}`,
    `- Do not do: ${packet.do_not_do}`,
    `- Validator: \`${packet.validator}\``,
    '',
  ].join('\n'));

  const report = [
    `# Brainstein Task Packets - ${today}`,
    '',
    'Purpose: convert the Brainstein readiness audit into execution packets for owner evidence collection and release gating.',
    '',
    '## Rules',
    '',
    '- Original owner evidence only.',
    '- Unknown fields remain partial.',
    '- No project, cost, warranty, review, credential, permit, date, or technician detail may be invented.',
    '- No blocked proof page is promoted until validators pass and Brainstein readiness is no longer proof-blocked.',
    '',
    '## Packets',
    '',
    ...blockedRows,
  ].join('\n');

  const reportPath = path.join(DOCS_DIR, `brainstein-task-packets-${today}.md`);
  const csvPath = path.join(DOCS_DIR, `brainstein-task-packets-${today}.csv`);
  const jsonPath = path.join(OUTPUT_DIR, `brainstein-task-packets-${today}.json`);

  const result = {
    ok: true,
    date: today,
    source: readinessPath,
    packets: packets.length,
    p0: packets.filter((packet) => packet.priority === 'P0').length,
    p1: packets.filter((packet) => packet.priority === 'P1').length,
    blockedPagePackets: (readiness.blockedPages || []).length,
    outputs: {
      report: path.relative(ROOT, reportPath),
      csv: path.relative(ROOT, csvPath),
      json: path.relative(ROOT, jsonPath),
    },
    packetIds: packets.map((packet) => packet.packet_id),
  };

  fs.writeFileSync(reportPath, report);
  fs.writeFileSync(csvPath, `${csv}\n`);
  fs.writeFileSync(jsonPath, `${JSON.stringify({ ...result, records: packets }, null, 2)}\n`);
  console.log(JSON.stringify(result, null, 2));
}

main();
