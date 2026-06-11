#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'docs/seo');

function parseTrailingJson(output) {
  const match = output.match(/\{[\s\S]*?\}\s*$/);
  if (!match) throw new Error(`Expected trailing JSON output, received:\n${output}`);
  return JSON.parse(match[0]);
}

function runJson(scriptPath) {
  const output = execFileSync('node', [scriptPath], {
    cwd: ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return parseTrailingJson(output);
}

function csvEscape(value) {
  const text = value == null ? '' : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function sprintRows(ownerPacket) {
  return [
    {
      block: 'Repair media',
      priority: 'P0',
      action: `Collect ${ownerPacket.assetActions ?? '?'} photo/asset actions, starting with the 8 deck repair assets.`,
      source_file: ownerPacket.photoManifestCsv || 'docs/seo/photo-ingestion-manifest-YYYY-MM-DD.csv',
      done_criteria: 'Original media only; city/month-year known when available; private address/customer details redacted; unresolved rows remain partial.',
    },
    {
      block: 'Commercial proof',
      priority: 'P0',
      action: `Confirm ${ownerPacket.warrantyActions ?? '?'} warranty term action and ${ownerPacket.repairCostActions ?? '?'} repair cost range actions.`,
      source_file: `${ownerPacket.warrantyCsv || 'docs/seo/warranty-terms-intake-YYYY-MM-DD.csv'} + ${ownerPacket.repairCostCsv || 'docs/seo/repair-cost-ranges-intake-YYYY-MM-DD.csv'}`,
      done_criteria: 'Warranty wording and cost ranges come from written policy, invoices, accepted estimates, calculator data, or owner-approved pricing policy.',
    },
    {
      block: 'Project linkage',
      priority: 'P1',
      action: `Complete ${ownerPacket.projectActions ?? '?'} project record actions with city, month/year, scope, materials, permit/HOA status, and photo linkage.`,
      source_file: ownerPacket.projectIntakeCsv || 'docs/seo/project-evidence-intake-YYYY-MM-DD.csv',
      done_criteria: 'Project fields are concrete; before/after media is linked to the correct job; unknown details remain partial.',
    },
    {
      block: 'Privacy pass',
      priority: 'P0',
      action: 'Redact addresses, permit numbers, customer names, phone numbers, emails, and private notes before public proof use.',
      source_file: 'All owner-supplied media and documents',
      done_criteria: 'No private homeowner data appears in public paths, reports, screenshots, or proof-bearing captions.',
    },
    {
      block: 'Dry-run pass',
      priority: 'P0',
      action: 'Run dry-runs and validators before any verified import.',
      source_file: 'Owner-filled intake files',
      done_criteria: 'Dry-runs pass; `seo:validate-owner-intake`, `seo:validate-evidence`, and `seo:proof-preflight` pass before promotion.',
    },
  ];
}

function markdown(rows, ownerPacket, today) {
  const lines = [
    `# Owner Evidence Sprint Checklist — ${today}`,
    '',
    'Purpose: a short working checklist for the owner evidence collection sprint. This does not replace the full handoff; it turns the proof blockers into execution blocks.',
    '',
    '## Sprint Targets',
    '',
    `- Owner action rows: ${ownerPacket.rows ?? '?'}`,
    `- P0 actions: ${ownerPacket.p0 ?? '?'}`,
    `- P1 actions: ${ownerPacket.p1 ?? '?'}`,
    `- Photo or asset actions: ${ownerPacket.assetActions ?? '?'}`,
    `- Project record actions: ${ownerPacket.projectActions ?? '?'}`,
    `- Warranty term actions: ${ownerPacket.warrantyActions ?? '?'}`,
    `- Repair cost range actions: ${ownerPacket.repairCostActions ?? '?'}`,
    '',
    '## Sprint Blocks',
    '',
    '| Block | Priority | Action | Source file | Done criteria |',
    '|---|---|---|---|---|',
    ...rows.map((row) => `| ${row.block} | ${row.priority} | ${row.action.replace(/\|/g, '/')} | \`${row.source_file.replace(/\|/g, '/')}\` | ${row.done_criteria.replace(/\|/g, '/')} |`),
    '',
    '## Directory Citation Evidence Addendum',
    '',
    'Collect these directory screenshots alongside the owner proof sprint, but do not count them as page-proof rows until the matching packet is complete and `npm run seo:directory-citations:validate` passes.',
    '',
    '| Directory | Evidence needed | Packet | sameAs rule |',
    '|---|---|---|---|',
    `| NADRA directory | Live profile or member-dashboard screenshot showing Loudoun Decks membership and confirmation that the website badge links to the supplied profile URL. | \`docs/seo/nadra-directory-verification-packet-${today}.md\` | Allowed in \`sameAs\`; still archive screenshot proof before marking resolved. |`,
    `| Bing Places | Current public Bing Maps screenshot plus Bing Places dashboard claim/sync, NAP, category, website, and email screenshots. | \`docs/seo/bing-places-verification-packet-${today}.md\` | Do not promote as fresh public proof until current screenshots confirm canonical NAP. |`,
    `| Apple Business Connect | Dashboard claim/verification screenshot, NAP screen, category/service screen, website field, and public Apple Maps URL if available. | \`docs/seo/apple-business-connect-verification-packet-${today}.md\` | Do not add Apple Maps to \`sameAs\` until dashboard or public place card confirms canonical NAP. |`,
    `| Nextdoor | Before/after public screenshots showing corrected Loudoun Decks name, canonical website/contact, clean categories, and claim/admin state if accessible. | \`docs/seo/nextdoor-citation-cleanup-packet-${today}.md\` | Do not add Nextdoor to \`sameAs\` until public cleanup is visible. |`,
    `| Angi | Public/admin before-after screenshots, corrected profile URL, claim status, canonical NAP/website, category screenshot, and duplicate/name cleanup proof. | \`docs/seo/angi-citation-cleanup-packet-${today}.md\` | Do not add Angi to \`sameAs\` until corrected public identity is verified. |`,
    '',
    '## Publish Rule',
    '',
    'No blocked proof page becomes publish-ready until verified evidence is imported, runtime proof is regenerated, public placeholders are clean, and `npm run seo:prepublish-evidence` passes without expected-blocked status.',
    '',
  ];
  return `${lines.join('\n')}\n`;
}

function main() {
  const today = localDateStamp();
  const ownerPacket = runJson('scripts/generate-owner-evidence-packet.mjs');
  const rows = sprintRows(ownerPacket);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const reportPath = path.join(OUTPUT_DIR, `owner-evidence-sprint-${today}.md`);
  const csvPath = path.join(OUTPUT_DIR, `owner-evidence-sprint-${today}.csv`);

  const csvHeaders = ['block', 'priority', 'action', 'source_file', 'done_criteria'];
  const csv = [
    csvHeaders.join(','),
    ...rows.map((row) => csvHeaders.map((header) => csvEscape(row[header])).join(',')),
  ].join('\n');

  fs.writeFileSync(reportPath, markdown(rows, ownerPacket, today));
  fs.writeFileSync(csvPath, `${csv}\n`);

  console.log(JSON.stringify({
    ok: true,
    report: path.relative(ROOT, reportPath),
    csv: path.relative(ROOT, csvPath),
    blocks: rows.length,
    ownerRows: ownerPacket.rows ?? null,
    p0: ownerPacket.p0 ?? null,
    p1: ownerPacket.p1 ?? null,
    assetActions: ownerPacket.assetActions ?? null,
    projectActions: ownerPacket.projectActions ?? null,
    warrantyActions: ownerPacket.warrantyActions ?? null,
    repairCostActions: ownerPacket.repairCostActions ?? null,
  }, null, 2));
}

main();
