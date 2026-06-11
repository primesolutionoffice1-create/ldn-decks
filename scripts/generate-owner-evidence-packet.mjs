#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');
const OUTPUT_DIR = path.join(ROOT, 'docs/seo');
const PUBLISH_READINESS_PATH = path.join(ROOT, 'scripts/publish-readiness-gate.mjs');
const PROJECT_INTAKE_PATH = path.join(ROOT, 'scripts/generate-project-evidence-intake.mjs');
const PHOTO_MANIFEST_PATH = path.join(ROOT, 'scripts/generate-photo-ingestion-manifest.mjs');
const COMMERCIAL_INTAKE_PATH = path.join(ROOT, 'scripts/generate-commercial-evidence-intake.mjs');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function csvEscape(value) {
  const text = value == null ? '' : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function runJsonScript(scriptPath) {
  try {
    const output = execFileSync('node', [scriptPath], { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
    const match = output.match(/\{[\s\S]*?\}\s*$/);
    return match ? JSON.parse(match[0]) : null;
  } catch {
    return null;
  }
}

function readLatestReadiness() {
  const summary = runJsonScript(PUBLISH_READINESS_PATH);
  if (!summary?.json) return { pages: [], byPage: new Map(), summary };
  const full = readJson(path.join(ROOT, summary.json));
  const byPage = new Map((full.pages || []).map((row) => [row.page, row]));
  return { pages: full.pages || [], byPage, summary };
}

function ownerActionForProject(project) {
  const missing = [];
  const fields = [
    'city',
    'neighborhood',
    'month_year',
    'materials',
    'verified_scope',
    'verified_failure',
    'work_performed',
    'permit_or_hoa_status',
    'before_photo_path',
    'after_photo_path',
  ];
  const incompletePattern = /\b(unknown|not recorded|not specified|unspecified|unverified|verify from owner|evidence missing)\b|OWNER TO FILL/i;

  for (const field of fields) {
    const value = project[field];
    if (value == null || value === '' || (typeof value === 'string' && incompletePattern.test(value))) {
      missing.push(field);
    }
  }

  return missing.length
    ? `Complete project fields: ${missing.join(', ')}.`
    : 'Review source evidence and promote only after validator passes.';
}

function ownerActionForAsset(asset) {
  const needed = asset.needed || 'Provide owner-confirmed source asset.';
  if (needed.length >= 20) return needed;
  return `Provide owner-confirmed ${needed.toLowerCase()} with source, city/date context when available, and privacy-safe publish approval.`;
}

function pageFromProject(project) {
  if (project.project_id?.startsWith('before-after-')) return '/before-and-after';
  if (project.project_id?.startsWith('showcase-')) return '/showcase';
  return 'unmapped';
}

function buildRows(ledger) {
  const rows = [];

  for (const project of ledger.projects || []) {
    if (project.evidence_status === 'verified') continue;
    rows.push({
      priority: project.evidence_status === 'missing' ? 'P0' : 'P1',
      page: pageFromProject(project),
      evidence_type: 'project',
      evidence_id: project.project_id,
      status: project.evidence_status,
      owner_action: ownerActionForProject(project),
      required_source: 'Owner-supplied project record, accepted estimate/invoice, and original before/after media where applicable.',
      privacy_note: 'Do not include customer names, full addresses, phone numbers, permit numbers, or unredacted documents.',
      verification_gate: 'May become verified only after required fields are concrete, photo paths resolve in public/, and npm run seo:validate-evidence passes.',
    });
  }

  for (const asset of ledger.asset_requirements || []) {
    if (asset.evidence_status === 'verified') continue;
    rows.push({
      priority: asset.page === '/services/deck-repair' ? 'P0' : 'P1',
      page: asset.page,
      evidence_type: 'asset',
      evidence_id: asset.asset_id,
      status: asset.evidence_status,
      owner_action: ownerActionForAsset(asset),
      required_source: 'Original LDN Decks project photo or redacted owner-supplied document.',
      privacy_note: asset.owner_notes || 'Remove private homeowner and address information before public use.',
      verification_gate: 'Asset should be added to public/ only after it is confirmed original, relevant, and safe to publish.',
    });
  }

  for (const warranty of ledger.warranty_terms || []) {
    if (warranty.evidence_status === 'verified') continue;
    rows.push({
      priority: 'P0',
      page: 'sitewide',
      evidence_type: 'warranty',
      evidence_id: warranty.warranty_id,
      status: warranty.evidence_status,
      owner_action: `Verify warranty term and scope for ${warranty.service_type}.`,
      required_source: 'Written warranty policy, proposal language, or owner-approved warranty wording.',
      privacy_note: 'Do not infer terms from marketing copy.',
      verification_gate: 'May be used publicly only after exact term, scope, and limitations are recorded.',
    });
  }

  for (const cost of ledger.repair_cost_ranges || []) {
    if (cost.evidence_status === 'verified') continue;
    rows.push({
      priority: 'P0',
      page: '/services/deck-repair',
      evidence_type: 'repair_cost_range',
      evidence_id: cost.cost_id,
      status: cost.evidence_status,
      owner_action: `Verify low/high range for ${cost.repair_type}.`,
      required_source: 'Historical invoice, accepted estimate, calculator data, or owner-confirmed pricing policy.',
      privacy_note: 'Remove customer and address details from any supporting document.',
      verification_gate: 'May become verified and public only after low/high values are numeric, source-backed, and pass npm run seo:validate-evidence.',
    });
  }

  if (!(ledger.warranty_terms || []).length) {
    rows.push({
      priority: 'P0',
      page: 'sitewide',
      evidence_type: 'warranty',
      evidence_id: 'repair-workmanship-warranty-term',
      status: 'missing',
      owner_action: 'Provide exact verified repair workmanship warranty term, scope, and limitations.',
      required_source: 'Written warranty policy, proposal language, or owner-approved warranty wording.',
      privacy_note: 'Do not guess duration or coverage.',
      verification_gate: 'Add to warranty_terms as verified only after exact wording is confirmed.',
    });
  }

  if (!(ledger.repair_cost_ranges || []).length) {
    for (const repairType of ['joist sistering', 'ledger reflash/rebolt', 'post replacement', 'emergency stabilization']) {
      rows.push({
        priority: 'P0',
        page: '/services/deck-repair',
        evidence_type: 'repair_cost_range',
        evidence_id: repairType.replace(/[^a-z0-9]+/g, '-'),
        status: 'missing',
        owner_action: `Provide verified low/high range for ${repairType}.`,
        required_source: 'Historical invoice, accepted estimate, calculator data, or owner-confirmed pricing policy.',
        privacy_note: 'Remove customer and address details from any supporting document.',
        verification_gate: 'May become verified and public only after low/high values are numeric, source-backed, and pass npm run seo:validate-evidence.',
      });
    }
  }

  return rows.sort((a, b) => {
    if (a.priority !== b.priority) return a.priority.localeCompare(b.priority);
    if (a.page !== b.page) return a.page.localeCompare(b.page);
    return a.evidence_id.localeCompare(b.evidence_id);
  });
}

function readinessPageForRow(row) {
  if (row.evidence_type === 'warranty') return '/services/deck-repair';
  return row.page;
}

function attachReadiness(rows, readiness) {
  return rows.map((row) => {
    const readinessPage = readinessPageForRow(row);
    const pageReadiness = readiness.byPage.get(readinessPage);
    return {
      ...row,
      readiness_page: readinessPage,
      page_verdict: pageReadiness?.verdict || 'untracked',
      page_top_issue: pageReadiness?.issues?.[0]?.message || '',
    };
  });
}

function workloadSummary(rows) {
  const totals = rows.reduce((acc, row) => {
    if (row.evidence_type === 'asset') acc.assets += 1;
    if (row.evidence_type === 'project') acc.projects += 1;
    if (row.evidence_type === 'warranty') acc.warrantyTerms += 1;
    if (row.evidence_type === 'repair_cost_range') acc.repairCostRanges += 1;
    return acc;
  }, { assets: 0, projects: 0, warrantyTerms: 0, repairCostRanges: 0 });

  const byPage = rows.reduce((acc, row) => {
    acc[row.page] ||= { assets: 0, projects: 0, warrantyTerms: 0, repairCostRanges: 0 };
    if (row.evidence_type === 'asset') acc[row.page].assets += 1;
    if (row.evidence_type === 'project') acc[row.page].projects += 1;
    if (row.evidence_type === 'warranty') acc[row.page].warrantyTerms += 1;
    if (row.evidence_type === 'repair_cost_range') acc[row.page].repairCostRanges += 1;
    return acc;
  }, {});

  return { totals, byPage };
}

function buildMarkdown(rows, ledger, readiness, today) {
  const byPriority = rows.reduce((acc, row) => {
    acc[row.priority] = (acc[row.priority] || 0) + 1;
    return acc;
  }, {});
  const byPage = rows.reduce((acc, row) => {
    acc[row.page] = (acc[row.page] || 0) + 1;
    return acc;
  }, {});
  const workload = workloadSummary(rows);

  return [
    `# Owner Evidence Action Packet — ${today}`,
    '',
    'Purpose: convert partial SEO proof architecture into verified, publish-safe evidence without fabricating project details, reviews, warranties, costs, or photos.',
    '',
    '## Current Proof Status',
    '',
    `- Projects: ${(ledger.projects || []).length} total · ${(ledger.projects || []).filter((item) => item.evidence_status === 'verified').length} verified`,
    `- Asset requirements: ${(ledger.asset_requirements || []).length} total · ${(ledger.asset_requirements || []).filter((item) => item.evidence_status !== 'verified').length} unresolved`,
    `- Warranty terms: ${(ledger.warranty_terms || []).length} recorded`,
    `- Repair cost ranges: ${(ledger.repair_cost_ranges || []).length} recorded`,
    `- Action rows: ${rows.length}`,
    `- Publish readiness: ${readiness.summary?.publishReady ?? 0} ready · ${readiness.summary?.proofIncomplete ?? 0} incomplete · ${readiness.summary?.blocked ?? 0} blocked`,
    '',
    '## Publish Readiness Snapshot',
    '',
    '| Page | Verdict | Top issue |',
    '|---|---|---|',
    ...(readiness.pages || []).map((row) => `| ${row.page} | ${row.verdict} | ${(row.issues?.[0]?.message || '').replace(/\|/g, '/')} |`),
    '',
    '## Evidence Workload Summary',
    '',
    `- Photo or asset actions: ${workload.totals.assets}`,
    `- Project record actions: ${workload.totals.projects}`,
    `- Warranty term actions: ${workload.totals.warrantyTerms}`,
    `- Repair cost range actions: ${workload.totals.repairCostRanges}`,
    '',
    '| Page | Assets | Projects | Warranty Terms | Repair Cost Ranges |',
    '|---|---:|---:|---:|---:|',
    ...Object.entries(workload.byPage).map(([page, counts]) => `| ${page} | ${counts.assets} | ${counts.projects} | ${counts.warrantyTerms} | ${counts.repairCostRanges} |`),
    '',
    '## Priority Counts',
    '',
    ...Object.entries(byPriority).map(([priority, count]) => `- ${priority}: ${count}`),
    '',
    '## Page Counts',
    '',
    ...Object.entries(byPage).map(([page, count]) => `- ${page}: ${count}`),
    '',
    '## Red Gates',
    '',
    '- Do not mark a record `verified` while it contains unknown, unverified, not recorded, not specified, owner-fill, or placeholder values.',
    '- Do not mark a record `verified` without concrete `owner_notes` naming the reviewed source type and what was confirmed.',
    '- Do not use `owner verification still required`, `verification still required`, `source pending`, or vague source notes in verified rows.',
    '- Do not publish project cards as proof until project fields are concrete and original media is tied to the project.',
    '- Do not publish exact warranty terms until written wording is confirmed.',
    '- Do not publish repair cost ranges until low/high values are source-backed and numeric.',
    '- Do not promote Bing, Apple, Nextdoor, or Angi into `sameAs`, proof snippets, or public trust copy until directory packet evidence is complete.',
    '- Do not include customer names, full addresses, phone numbers, permit numbers, or unredacted documents.',
    '',
    '## Directory Citation Evidence Addendum',
    '',
    'These directory-citation proof items support the entity graph, not project proof. Keep them separate from project/warranty/cost rows and validate them with `npm run seo:directory-citations:validate` before any citation URL promotion.',
    '',
    '| Directory | Evidence needed | Packet | Promotion rule |',
    '|---|---|---|---|',
    `| NADRA directory | Live profile or member-dashboard screenshot showing Loudoun Decks membership and badge-link confirmation. | \`docs/seo/nadra-directory-verification-packet-${today}.md\` | Allowed in \`sameAs\`; screenshot proof still required before resolved status. |`,
    `| Bing Places | Public Bing Maps screenshot plus dashboard claim/sync, NAP, category, website, and email screenshots. | \`docs/seo/bing-places-verification-packet-${today}.md\` | Do not promote as fresh proof without current screenshots. |`,
    `| Apple Business Connect | Dashboard claim/verification, NAP, category/service, website field, and public Apple Maps URL if available. | \`docs/seo/apple-business-connect-verification-packet-${today}.md\` | Do not add Apple Maps to \`sameAs\` until canonical NAP is verified. |`,
    `| Nextdoor | Before/after public screenshots proving corrected name, website/contact, category cleanup, and claim/admin state if accessible. | \`docs/seo/nextdoor-citation-cleanup-packet-${today}.md\` | Do not add Nextdoor to \`sameAs\` until cleanup is public. |`,
    `| Angi | Public/admin before-after screenshots, corrected profile URL, claim status, canonical NAP/website, category screenshot, and duplicate/name cleanup proof. | \`docs/seo/angi-citation-cleanup-packet-${today}.md\` | Do not add Angi to \`sameAs\` until corrected public identity is verified. |`,
    '',
    '## Owner Collection Workflow',
    '',
    '1. Use the CSV paired with this report as the collection checklist.',
    '2. Gather original photos and source documents for the P0 rows first.',
    '3. Rename image files with city, service type, and month/year after confirmation.',
    '4. Fill the intake CSV with concrete values; leave unknown items as `partial`.',
    '5. Add concrete `owner_notes` before promoting any row to `verified`.',
    '6. Dry-run imports with the correct evidence type before promotion:',
    `   - Projects: \`npm run seo:import-evidence -- --type projects --file docs/seo/project-evidence-intake-${today}.csv --dry-run\``,
    `   - Warranty terms: \`npm run seo:import-evidence -- --type warranty_terms --file docs/seo/warranty-terms-intake-${today}.csv --dry-run\``,
    `   - Repair cost ranges: \`npm run seo:import-evidence -- --type repair_cost_ranges --file docs/seo/repair-cost-ranges-intake-${today}.csv --dry-run\``,
    `   - Photos/assets: \`npm run seo:ingest-assets -- --file docs/seo/photo-ingestion-manifest-${today}.csv --dry-run\``,
    '7. Promote verified rows only with `--allow-verified` after source review.',
    '8. Run `npm run seo:validate-evidence`, `npm run seo:audit-placeholders`, and `npm run build` before public proof use.',
    '',
    '## Top Actions',
    '',
    '| Priority | Page | Verdict | Type | ID | Status | Owner action |',
    '|---|---|---|---|---|---|---|',
    ...rows.slice(0, 25).map((row) => `| ${row.priority} | ${row.page} | ${row.page_verdict} | ${row.evidence_type} | ${row.evidence_id} | ${row.status} | ${row.owner_action.replace(/\|/g, '/')} |`),
    '',
  ].join('\n');
}

function main() {
  const ledger = readJson(LEDGER_PATH);
  const today = localDateStamp();
  const readiness = readLatestReadiness();
  const projectIntake = runJsonScript(PROJECT_INTAKE_PATH);
  const photoManifest = runJsonScript(PHOTO_MANIFEST_PATH);
  const commercialIntake = runJsonScript(COMMERCIAL_INTAKE_PATH);
  const rows = attachReadiness(buildRows(ledger), readiness);
  const workload = workloadSummary(rows);
  const csvHeaders = [
    'priority',
    'page',
    'readiness_page',
    'page_verdict',
    'page_top_issue',
    'evidence_type',
    'evidence_id',
    'status',
    'owner_action',
    'required_source',
    'privacy_note',
    'verification_gate',
  ];
  const csv = [
    csvHeaders.join(','),
    ...rows.map((row) => csvHeaders.map((header) => csvEscape(row[header])).join(',')),
  ].join('\n');
  const md = buildMarkdown(rows, ledger, readiness, today);

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const mdPath = path.join(OUTPUT_DIR, `owner-evidence-action-packet-${today}.md`);
  const csvPath = path.join(OUTPUT_DIR, `owner-evidence-action-packet-${today}.csv`);
  fs.writeFileSync(mdPath, `${md}\n`);
  fs.writeFileSync(csvPath, `${csv}\n`);

  console.log(JSON.stringify({
    ok: true,
    report: path.relative(ROOT, mdPath),
    csv: path.relative(ROOT, csvPath),
    projectIntakeCsv: projectIntake?.csv || null,
    projectIntakeReport: projectIntake?.report || null,
    projectIntakeRows: projectIntake?.rows ?? 0,
    photoManifestCsv: photoManifest?.csv || null,
    photoManifestReport: photoManifest?.report || null,
    photoManifestRows: photoManifest?.rows ?? 0,
    commercialIntakeReport: commercialIntake?.report || null,
    warrantyCsv: commercialIntake?.warrantyCsv || null,
    repairCostCsv: commercialIntake?.repairCostCsv || null,
    warrantyRows: commercialIntake?.warrantyRows ?? 0,
    repairCostRows: commercialIntake?.repairCostRows ?? 0,
    rows: rows.length,
    p0: rows.filter((row) => row.priority === 'P0').length,
    p1: rows.filter((row) => row.priority === 'P1').length,
    assetActions: workload.totals.assets,
    projectActions: workload.totals.projects,
    warrantyActions: workload.totals.warrantyTerms,
    repairCostActions: workload.totals.repairCostRanges,
    publishReady: readiness.summary?.publishReady ?? 0,
    proofIncomplete: readiness.summary?.proofIncomplete ?? 0,
    blocked: readiness.summary?.blocked ?? 0,
  }, null, 2));
}

main();
