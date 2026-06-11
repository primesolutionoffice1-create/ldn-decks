#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp, localIsoTimestamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function countByStatus(records = []) {
  return records.reduce((acc, record) => {
    const status = record.evidence_status || 'unknown';
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});
}

function pageFromProject(project) {
  if (project.project_id?.startsWith('before-after-')) return '/before-and-after';
  if (project.project_id?.startsWith('showcase-')) return '/showcase';
  return 'unmapped';
}

function pageRows(ledger) {
  const pages = new Map();

  for (const project of ledger.projects || []) {
    const page = pageFromProject(project);
    if (!pages.has(page)) {
      pages.set(page, { page, projects: [], assets: [], verified: 0, partial: 0, missing: 0, blocked: 0 });
    }
    const entry = pages.get(page);
    entry.projects.push(project.project_id);
    entry[project.evidence_status] = (entry[project.evidence_status] || 0) + 1;
  }

  for (const asset of ledger.asset_requirements || []) {
    const page = asset.page || 'unmapped';
    if (!pages.has(page)) {
      pages.set(page, { page, projects: [], assets: [], verified: 0, partial: 0, missing: 0, blocked: 0 });
    }
    const entry = pages.get(page);
    entry.assets.push(asset.asset_id);
    entry[asset.evidence_status] = (entry[asset.evidence_status] || 0) + 1;
  }

  return [...pages.values()].sort((a, b) => {
    const aRisk = (a.missing || 0) + (a.partial || 0) + (a.blocked || 0);
    const bRisk = (b.missing || 0) + (b.partial || 0) + (b.blocked || 0);
    if (aRisk !== bRisk) return bRisk - aRisk;
    return a.page.localeCompare(b.page);
  });
}

function statusForPage(row) {
  if ((row.blocked || 0) > 0) return 'blocked';
  if ((row.missing || 0) > 0) return 'missing';
  if ((row.partial || 0) > 0) return 'partial';
  if ((row.verified || 0) > 0) return 'verified';
  return 'unknown';
}

function main() {
  const ledger = readJson(LEDGER_PATH);
  const today = localDateStamp();
  const rows = pageRows(ledger).map((row) => ({
    ...row,
    status: statusForPage(row),
    projectCount: row.projects.length,
    assetRequirementCount: row.assets.length,
  }));

  const summary = {
    generated: localIsoTimestamp(),
    ledger: path.relative(ROOT, LEDGER_PATH),
    projects: {
      total: ledger.projects?.length || 0,
      byStatus: countByStatus(ledger.projects),
    },
    assets: {
      total: ledger.asset_requirements?.length || 0,
      byStatus: countByStatus(ledger.asset_requirements),
    },
    warrantyTerms: {
      total: ledger.warranty_terms?.length || 0,
      byStatus: countByStatus(ledger.warranty_terms),
    },
    repairCostRanges: {
      total: ledger.repair_cost_ranges?.length || 0,
      byStatus: countByStatus(ledger.repair_cost_ranges),
    },
    publicReviewSources: {
      total: ledger.public_review_sources?.length || 0,
      byStatus: countByStatus(ledger.public_review_sources),
    },
    pages: rows,
  };

  const md = [
    `# Evidence Coverage Report — ${today}`,
    '',
    `Generated: ${summary.generated}`,
    '',
    '## Summary',
    '',
    `- Projects: ${summary.projects.total} total · ${summary.projects.byStatus.verified || 0} verified · ${summary.projects.byStatus.partial || 0} partial · ${summary.projects.byStatus.missing || 0} missing · ${summary.projects.byStatus.blocked || 0} blocked`,
    `- Asset requirements: ${summary.assets.total} total · ${summary.assets.byStatus.missing || 0} missing`,
    `- Warranty terms: ${summary.warrantyTerms.total}`,
    `- Repair cost ranges: ${summary.repairCostRanges.total}`,
    `- Public review sources: ${summary.publicReviewSources.total} total · ${summary.publicReviewSources.byStatus.verified || 0} verified`,
    '',
    '## Page Coverage',
    '',
    '| Page | Status | Projects | Assets | Verified | Partial | Missing | Blocked |',
    '|---|---|---:|---:|---:|---:|---:|---:|',
    ...rows.map((row) => `| ${row.page} | ${row.status} | ${row.projectCount} | ${row.assetRequirementCount} | ${row.verified || 0} | ${row.partial || 0} | ${row.missing || 0} | ${row.blocked || 0} |`),
    '',
    '## Next Evidence Actions',
    '',
    '- Verify `/before-and-after` project records before converting partial project summaries into proof-backed case studies.',
    '- Collect deck repair photos and repair cost ranges before converting repair placeholders into proof claims.',
    '- Add warranty terms only after owner confirms exact wording and scope.',
    '',
  ].join('\n');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const jsonPath = path.join(OUTPUT_DIR, `evidence-coverage-${today}.json`);
  const mdPath = path.join(OUTPUT_DIR, `evidence-coverage-${today}.md`);
  fs.writeFileSync(jsonPath, JSON.stringify(summary, null, 2));
  fs.writeFileSync(mdPath, md);

  console.log(JSON.stringify({
    ok: true,
    report: path.relative(ROOT, mdPath),
    json: path.relative(ROOT, jsonPath),
    projects: summary.projects,
    assets: summary.assets,
    pages: rows.length,
  }, null, 2));
}

main();
