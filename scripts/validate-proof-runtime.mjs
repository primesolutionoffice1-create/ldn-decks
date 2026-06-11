#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');
const RUNTIME_PATH = path.join(ROOT, 'src/data/verifiedProofSnippets.json');
const PUBLIC_DIR = path.join(ROOT, 'public');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function publicAssetExists(assetPath) {
  if (!assetPath || typeof assetPath !== 'string' || !assetPath.startsWith('/')) return false;
  return fs.existsSync(path.join(PUBLIC_DIR, assetPath.replace(/^\/+/, '')));
}

function pageFromProject(project) {
  if (project.project_id?.startsWith('before-after-')) return '/before-and-after';
  if (project.project_id?.startsWith('showcase-')) return '/showcase';
  return 'unmapped';
}

function expectedProjectSnippet(project) {
  return {
    type: 'project_case_study',
    source: 'seo-blueprint/evidence/project-evidence-ledger.json',
    project_id: project.project_id,
    page: pageFromProject(project),
    city: project.city,
    neighborhood: project.neighborhood,
    month_year: project.month_year,
    service_type: project.service_type,
    materials: project.materials,
    verified_scope: project.verified_scope,
    verified_failure: project.verified_failure,
    work_performed: project.work_performed,
    permit_or_hoa_status: project.permit_or_hoa_status,
    before_photo_path: project.before_photo_path,
    after_photo_path: project.after_photo_path,
    suggested_heading: `${project.service_type} in ${project.city}`,
    suggested_summary: `${project.month_year}: LDN Decks completed ${project.service_type.toLowerCase()} in ${project.city}${project.neighborhood ? ` (${project.neighborhood})` : ''}. Verified scope: ${project.verified_scope}. Work performed: ${project.work_performed}.`,
    safe_alt_text_before: `${project.service_type} before photo in ${project.city}`,
    safe_alt_text_after: `${project.service_type} after photo in ${project.city}`,
  };
}

function expectedReviewSourceSnippet(source) {
  return {
    type: 'public_review_source',
    source: 'seo-blueprint/evidence/project-evidence-ledger.json',
    source_id: source.source_id,
    source_name: source.source_name,
    url: source.url,
    suggested_anchor: `${source.source_name} profile`,
    safe_usage_note: 'Use as a profile/source citation only. Do not quote ratings, counts, or review text unless separately verified and recorded.',
  };
}

function buildExpected(ledger) {
  const snippets = [];
  const skipped = [];

  for (const project of ledger.projects || []) {
    if (project.evidence_status !== 'verified') {
      skipped.push({
        type: 'project',
        id: project.project_id,
        status: project.evidence_status || 'unknown',
        reason: 'Only verified projects can become public proof snippets.',
      });
      continue;
    }

    const missingAssets = ['before_photo_path', 'after_photo_path'].filter((field) => !publicAssetExists(project[field]));
    if (missingAssets.length) {
      skipped.push({
        type: 'project',
        id: project.project_id,
        status: project.evidence_status,
        reason: `Verified project has missing public assets: ${missingAssets.join(', ')}.`,
      });
      continue;
    }

    snippets.push(expectedProjectSnippet(project));
  }

  for (const source of ledger.public_review_sources || []) {
    if (source.evidence_status !== 'verified') {
      skipped.push({
        type: 'public_review_source',
        id: source.source_id,
        status: source.evidence_status || 'unknown',
        reason: 'Only verified public review/profile sources can be cited.',
      });
      continue;
    }

    snippets.push(expectedReviewSourceSnippet(source));
  }

  return {
    source_ledger: path.relative(ROOT, LEDGER_PATH),
    snippets,
    skipped,
  };
}

function stableStringify(value) {
  return JSON.stringify(value, Object.keys(value).sort());
}

function byIdentity(item) {
  if (item.type === 'project_case_study') return `project:${item.project_id}`;
  if (item.type === 'public_review_source') return `review:${item.source_id}`;
  return `${item.type}:${item.id || 'unknown'}`;
}

function diffCollections(expected, actual, label) {
  const expectedMap = new Map(expected.map((item) => [byIdentity(item), item]));
  const actualMap = new Map(actual.map((item) => [byIdentity(item), item]));
  const errors = [];

  for (const [key, item] of expectedMap) {
    if (!actualMap.has(key)) {
      errors.push(`${label} missing expected item: ${key}`);
      continue;
    }
    if (stableStringify(item) !== stableStringify(actualMap.get(key))) {
      errors.push(`${label} stale or mismatched item: ${key}`);
    }
  }

  for (const key of actualMap.keys()) {
    if (!expectedMap.has(key)) {
      errors.push(`${label} has unexpected item: ${key}`);
    }
  }

  return errors;
}

function main() {
  const ledger = readJson(LEDGER_PATH);
  const runtime = readJson(RUNTIME_PATH);
  const expected = buildExpected(ledger);
  const errors = [];

  if (runtime.source_ledger !== expected.source_ledger) {
    errors.push(`Runtime source_ledger mismatch: expected ${expected.source_ledger}, got ${runtime.source_ledger}`);
  }

  errors.push(...diffCollections(expected.snippets, runtime.snippets || [], 'snippets'));
  errors.push(...diffCollections(expected.skipped, runtime.skipped || [], 'skipped'));

  const summary = {
    ok: errors.length === 0,
    runtime: path.relative(ROOT, RUNTIME_PATH),
    sourceLedger: expected.source_ledger,
    projectSnippets: (runtime.snippets || []).filter((item) => item.type === 'project_case_study').length,
    reviewSourceSnippets: (runtime.snippets || []).filter((item) => item.type === 'public_review_source').length,
    skipped: (runtime.skipped || []).length,
    errors,
  };

  console.log(JSON.stringify(summary, null, 2));
  if (!summary.ok) process.exit(1);
}

main();
