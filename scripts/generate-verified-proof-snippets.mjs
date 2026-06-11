#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp, localIsoTimestamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const LEDGER_PATH = path.join(ROOT, 'seo-blueprint/evidence/project-evidence-ledger.json');
const OUTPUT_DIR = path.join(ROOT, 'docs/seo');
const RUNTIME_OUTPUT_DIR = path.join(ROOT, 'src/data');
const RUNTIME_OUTPUT_PATH = path.join(RUNTIME_OUTPUT_DIR, 'verifiedProofSnippets.json');
const PUBLIC_DIR = path.join(ROOT, 'public');

function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function readJsonIfExists(file) {
  try {
    return readJson(file);
  } catch {
    return null;
  }
}

function withoutGenerated(payload) {
  const { generated, ...rest } = payload || {};
  return rest;
}

function samePayloadIgnoringGenerated(a, b) {
  return JSON.stringify(withoutGenerated(a)) === JSON.stringify(withoutGenerated(b));
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

function proofSnippetForProject(project) {
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

function proofSnippetForReviewSource(source) {
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

function buildMarkdown(snippets, skipped, today) {
  const projectSnippets = snippets.filter((snippet) => snippet.type === 'project_case_study');
  const reviewSnippets = snippets.filter((snippet) => snippet.type === 'public_review_source');

  const lines = [
    `# Verified Proof Snippets — ${today}`,
    '',
    'Purpose: provide publish-safe proof modules generated only from records marked `verified` in the evidence ledger.',
    '',
    '## Summary',
    '',
    `- Project snippets: ${projectSnippets.length}`,
    `- Review/profile source snippets: ${reviewSnippets.length}`,
    `- Skipped non-verified or incomplete records: ${skipped.length}`,
    '',
    '## Rules',
    '',
    '- Only use snippets from this file for public proof modules.',
    '- Do not copy from skipped records into public claims.',
    '- Review/profile snippets are source citations only; they are not rating, review-count, or testimonial proof.',
    '- Regenerate after every owner evidence import.',
    '',
  ];

  lines.push('## Project Case Study Snippets');
  lines.push('');
  if (!projectSnippets.length) {
    lines.push('No verified project case-study snippets are available yet.');
    lines.push('');
  } else {
    for (const snippet of projectSnippets) {
      lines.push(`### ${snippet.suggested_heading}`);
      lines.push('');
      lines.push(`- Project ID: ${snippet.project_id}`);
      lines.push(`- Page: ${snippet.page}`);
      lines.push(`- Summary: ${snippet.suggested_summary}`);
      lines.push(`- Before image: ${snippet.before_photo_path}`);
      lines.push(`- After image: ${snippet.after_photo_path}`);
      lines.push(`- Permit/HOA status: ${snippet.permit_or_hoa_status}`);
      lines.push('');
    }
  }

  lines.push('## Public Review/Profile Source Snippets');
  lines.push('');
  for (const snippet of reviewSnippets) {
    lines.push(`- ${snippet.source_name}: ${snippet.url}`);
  }
  lines.push('');

  lines.push('## Skipped Records');
  lines.push('');
  if (!skipped.length) {
    lines.push('No skipped records.');
  } else {
    lines.push('| Type | ID | Status | Reason |');
    lines.push('|---|---|---|---|');
    for (const item of skipped) {
      lines.push(`| ${item.type} | ${item.id} | ${item.status} | ${item.reason.replace(/\|/g, '/')} |`);
    }
  }
  lines.push('');

  return lines.join('\n');
}

function main() {
  const ledger = readJson(LEDGER_PATH);
  const snippets = [];
  const skipped = [];
  const today = localDateStamp();

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

    const missingAssets = ['before_photo_path', 'after_photo_path']
      .filter((field) => !publicAssetExists(project[field]));
    if (missingAssets.length) {
      skipped.push({
        type: 'project',
        id: project.project_id,
        status: project.evidence_status,
        reason: `Verified project has missing public assets: ${missingAssets.join(', ')}.`,
      });
      continue;
    }

    snippets.push(proofSnippetForProject(project));
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
    snippets.push(proofSnippetForReviewSource(source));
  }

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(RUNTIME_OUTPUT_DIR, { recursive: true });
  const jsonPath = path.join(OUTPUT_DIR, `verified-proof-snippets-${today}.json`);
  const mdPath = path.join(OUTPUT_DIR, `verified-proof-snippets-${today}.md`);
  const previousPayload = readJsonIfExists(RUNTIME_OUTPUT_PATH) || readJsonIfExists(jsonPath);
  const nextPayload = {
    generated: localIsoTimestamp(),
    source_ledger: path.relative(ROOT, LEDGER_PATH),
    publish_rule: 'Only snippets in this file may be used as proof-bearing public modules. Skipped records are not public proof.',
    snippets,
    skipped,
  };
  const payload = samePayloadIgnoringGenerated(previousPayload, nextPayload)
    ? { ...nextPayload, generated: previousPayload.generated }
    : nextPayload;

  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`);
  fs.writeFileSync(mdPath, `${buildMarkdown(snippets, skipped, today)}\n`);
  fs.writeFileSync(RUNTIME_OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`);

  console.log(JSON.stringify({
    ok: true,
    json: path.relative(ROOT, jsonPath),
    report: path.relative(ROOT, mdPath),
    runtimeJson: path.relative(ROOT, RUNTIME_OUTPUT_PATH),
    snippets: snippets.length,
    projectSnippets: snippets.filter((snippet) => snippet.type === 'project_case_study').length,
    reviewSourceSnippets: snippets.filter((snippet) => snippet.type === 'public_review_source').length,
    skipped: skipped.length,
  }, null, 2));
}

main();
