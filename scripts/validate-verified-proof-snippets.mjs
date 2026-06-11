#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const RUNTIME_JSON = path.join(ROOT, 'src/data/verifiedProofSnippets.json');
const today = localDateStamp();

const REQUIRED_REVIEW_SOURCE_IDS = new Set([
  'google-business-profile',
  'bbb-profile',
  'yelp-profile',
  'houzz-profile',
  'buildzoom-profile',
]);

const REQUIRED_RULES = [
  'Only use snippets from this file for public proof modules.',
  'Do not copy from skipped records into public claims.',
  'Review/profile snippets are source citations only; they are not rating, review-count, or testimonial proof.',
  'Regenerate after every owner evidence import.',
];

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function sameJson(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const docJsonPath = path.join(DOCS_DIR, `verified-proof-snippets-${today}.json`);
  const docMdPath = path.join(DOCS_DIR, `verified-proof-snippets-${today}.md`);
  const validationJsonPath = path.join(OUTPUT_DIR, `verified-proof-snippets-validation-${today}.json`);
  const validationMdPath = path.join(OUTPUT_DIR, `verified-proof-snippets-validation-${today}.md`);
  const errors = [];
  const warnings = [];

  assert(fs.existsSync(docJsonPath), `Missing proof snippets JSON: ${path.relative(ROOT, docJsonPath)}`, errors);
  assert(fs.existsSync(docMdPath), `Missing proof snippets Markdown: ${path.relative(ROOT, docMdPath)}`, errors);
  assert(fs.existsSync(RUNTIME_JSON), `Missing runtime proof snippets JSON: ${path.relative(ROOT, RUNTIME_JSON)}`, errors);

  const docPayload = fs.existsSync(docJsonPath) ? readJson(docJsonPath) : {};
  const runtimePayload = fs.existsSync(RUNTIME_JSON) ? readJson(RUNTIME_JSON) : {};
  const markdown = fs.existsSync(docMdPath) ? fs.readFileSync(docMdPath, 'utf8') : '';
  const snippets = Array.isArray(docPayload.snippets) ? docPayload.snippets : [];
  const skipped = Array.isArray(docPayload.skipped) ? docPayload.skipped : [];
  const projectSnippets = snippets.filter((snippet) => snippet.type === 'project_case_study');
  const reviewSourceSnippets = snippets.filter((snippet) => snippet.type === 'public_review_source');
  const reviewSourceIds = new Set(reviewSourceSnippets.map((snippet) => snippet.source_id));

  assert(sameJson(docPayload, runtimePayload), 'Docs proof snippets JSON and runtime src/data/verifiedProofSnippets.json must match exactly.', errors);
  assert(docPayload.source_ledger === 'seo-blueprint/evidence/project-evidence-ledger.json', 'Proof snippets must use the project evidence ledger as source.', errors);
  assert(docPayload.publish_rule === 'Only snippets in this file may be used as proof-bearing public modules. Skipped records are not public proof.', 'Missing or changed publish_rule guard.', errors);
  assert(projectSnippets.length === 0, `Expected 0 project case-study snippets until projects are verified, found ${projectSnippets.length}.`, errors);
  assert(reviewSourceSnippets.length === REQUIRED_REVIEW_SOURCE_IDS.size, `Expected ${REQUIRED_REVIEW_SOURCE_IDS.size} review/profile snippets, found ${reviewSourceSnippets.length}.`, errors);
  assert(skipped.length === 10, `Expected 10 skipped partial project records, found ${skipped.length}.`, errors);

  for (const id of REQUIRED_REVIEW_SOURCE_IDS) {
    assert(reviewSourceIds.has(id), `Missing required review/profile source snippet: ${id}`, errors);
  }

  for (const snippet of reviewSourceSnippets) {
    assert(snippet.source === 'seo-blueprint/evidence/project-evidence-ledger.json', `Review source ${snippet.source_id} must cite the evidence ledger.`, errors);
    assert(/^https?:\/\//.test(snippet.url || ''), `Review source ${snippet.source_id} must have an absolute URL.`, errors);
    assert(/source citation only/i.test(snippet.safe_usage_note || ''), `Review source ${snippet.source_id} must be source-citation-only.`, errors);
    assert(/Do not quote ratings, counts, or review text/i.test(snippet.safe_usage_note || ''), `Review source ${snippet.source_id} must forbid unverified rating/count/review text.`, errors);
  }

  for (const item of skipped) {
    assert(item.type === 'project', `Skipped item ${item.id} should be a project record.`, errors);
    assert(item.status === 'partial', `Skipped project ${item.id} should remain partial until owner evidence exists.`, errors);
    assert(item.reason === 'Only verified projects can become public proof snippets.', `Skipped project ${item.id} has unsafe or changed reason.`, errors);
  }

  for (const rule of REQUIRED_RULES) {
    assert(markdown.includes(rule), `Markdown missing proof snippet rule: ${rule}`, errors);
  }

  assert(markdown.includes('No verified project case-study snippets are available yet.'), 'Markdown must preserve no verified project snippet warning.', errors);
  assert(!/AggregateRating|rating:\s*\d|review count|review-count:\s*\d|testimonial proof/i.test(JSON.stringify(docPayload)), 'Proof snippets contain rating/count/testimonial proof language.', errors);
  assert(!/psolutionservices\.com|prime\s+solution/i.test(JSON.stringify(docPayload)), 'Proof snippets contain unrelated project/domain wording.', errors);
  assert(!/gpt-image-2/i.test(JSON.stringify(docPayload) + markdown), 'Proof snippets contain invalid image model wording.', errors);

  const result = {
    ok: errors.length === 0,
    date: today,
    json: path.relative(ROOT, docJsonPath),
    report: path.relative(ROOT, docMdPath),
    runtimeJson: path.relative(ROOT, RUNTIME_JSON),
    snippets: snippets.length,
    projectSnippets: projectSnippets.length,
    reviewSourceSnippets: reviewSourceSnippets.length,
    skipped: skipped.length,
    runtimeSynced: sameJson(docPayload, runtimePayload),
    warnings,
    errors,
    outputs: {
      json: path.relative(ROOT, validationJsonPath),
      report: path.relative(ROOT, validationMdPath),
    },
  };

  const md = [
    `# Verified Proof Snippets Validation - ${today}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Snippets: ${result.snippets}`,
    `- Project snippets: ${result.projectSnippets}`,
    `- Review/profile source snippets: ${result.reviewSourceSnippets}`,
    `- Skipped records: ${result.skipped}`,
    `- Runtime synced: ${result.runtimeSynced ? 'yes' : 'no'}`,
    `- Errors: ${errors.length}`,
    `- Warnings: ${warnings.length}`,
    '',
    '## Errors',
    '',
    ...(errors.length ? errors.map((error) => `- ${error}`) : ['- None']),
    '',
    '## Warnings',
    '',
    ...(warnings.length ? warnings.map((warning) => `- ${warning}`) : ['- None']),
    '',
  ].join('\n');

  fs.writeFileSync(validationJsonPath, `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(validationMdPath, md);

  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exit(1);
}

main();
