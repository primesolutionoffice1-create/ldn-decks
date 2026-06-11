#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const RAW_DIR = 'docs/seo/dataforseo-n8n-raw-findings';
const README = `${RAW_DIR}/README.md`;
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-raw-findings-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/dataforseo-n8n-raw-findings-validation-${DATE}.md`;

const ALLOWED_TYPES = new Set([
  'serp_context',
  'citation_context',
  'backlink_context',
  'ai_visibility_context',
  'competitor_context',
]);

const ALLOWED_STRENGTHS = new Set(['sample', 'weak', 'medium', 'strong']);
const ALLOWED_CONFIDENCE = new Set(['low', 'medium', 'high']);

const FORBIDDEN_PATTERNS = [
  {
    label: 'Basic auth header',
    pattern: /Basic\s+[A-Za-z0-9+/=]{20,}/i,
  },
  {
    label: 'Bearer token',
    pattern: /Bearer\s+[A-Za-z0-9._~+/=-]{20,}/i,
  },
  {
    label: 'secret-like field',
    pattern: /(api[_-]?key|access[_-]?token|refresh[_-]?token|password|secret|client[_-]?secret|auth[_-]?token)\s*[:=]\s*[^,\s"}]{8,}/i,
  },
  {
    label: 'cookie header',
    pattern: /cookie\s*[:=]\s*[^,\s"}]{12,}/i,
  },
  {
    label: 'unrelated-domain text',
    pattern: /prime\s+solution|psolutionservices\.com/i,
  },
];

function readText(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function listJsonFiles() {
  const dir = path.join(ROOT, RAW_DIR);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => `${RAW_DIR}/${file}`);
}

function isLdnUrl(value) {
  if (!value) return false;
  try {
    const url = new URL(value);
    return url.hostname === 'ldndecks.com' || url.hostname.endsWith('.ldndecks.com');
  } catch {
    return false;
  }
}

function flattenStrings(value, output = []) {
  if (typeof value === 'string') output.push(value);
  if (Array.isArray(value)) {
    for (const item of value) flattenStrings(item, output);
  } else if (value && typeof value === 'object') {
    for (const item of Object.values(value)) flattenStrings(item, output);
  }
  return output;
}

const errors = [];
const warnings = [];
const readmeText = readText(README);
const files = listJsonFiles();

if (!readmeText) errors.push(`Missing raw findings README: ${README}`);
if (!files.length) errors.push(`No raw findings JSON files found in ${RAW_DIR}.`);

for (const phrase of [
  'ldndecks.com',
  'read-only',
  'npm run dataforseo:n8n-mcp:raw-findings:validate',
  'Do not store credentials',
  'Do not allow public claims',
]) {
  if (!readmeText.includes(phrase)) errors.push(`Raw findings README missing required phrase: ${phrase}`);
}

for (const item of FORBIDDEN_PATTERNS) {
  if (item.pattern.test(readmeText)) errors.push(`Raw findings README contains forbidden content: ${item.label}`);
}

const ids = new Set();
const fileSummaries = [];
let sampleFiles = 0;
let realFiles = 0;
let findings = 0;
let sampleFindings = 0;
let realFindings = 0;

for (const rel of files) {
  const text = readText(rel);
  const fileErrors = [];
  const fileWarnings = [];
  let payload = null;

  for (const item of FORBIDDEN_PATTERNS) {
    if (item.pattern.test(text)) fileErrors.push(`${rel}: contains forbidden content: ${item.label}`);
  }

  try {
    payload = JSON.parse(text);
  } catch (error) {
    fileErrors.push(`${rel}: invalid JSON: ${error.message}`);
  }

  if (payload) {
    if (payload.targetDomain !== 'ldndecks.com') fileErrors.push(`${rel}: targetDomain must be ldndecks.com.`);
    if (payload.mode !== 'read_only') fileErrors.push(`${rel}: mode must be read_only.`);
    if (typeof payload.sourceWorkflow !== 'string' || !payload.sourceWorkflow.endsWith('.json')) {
      fileErrors.push(`${rel}: sourceWorkflow must name a sanitized workflow export JSON file.`);
    }
    if (typeof payload.sampleOnly !== 'boolean') fileErrors.push(`${rel}: sampleOnly must be boolean.`);
    if (!Array.isArray(payload.findings)) fileErrors.push(`${rel}: findings must be an array.`);
    if (Array.isArray(payload.findings) && payload.findings.length === 0) {
      fileWarnings.push(`${rel}: findings array is empty.`);
    }

    if (payload.sampleOnly === true) sampleFiles += 1;
    if (payload.sampleOnly === false) realFiles += 1;

    for (const [index, finding] of (payload.findings || []).entries()) {
      const row = `${rel} finding ${index + 1}`;
      findings += 1;
      if (payload.sampleOnly === true) sampleFindings += 1;
      if (payload.sampleOnly === false) realFindings += 1;

      if (!finding.id) fileErrors.push(`${row}: id is required.`);
      if (finding.id && ids.has(finding.id)) fileErrors.push(`${row}: duplicate id ${finding.id}.`);
      if (finding.id) ids.add(finding.id);

      if (!ALLOWED_TYPES.has(finding.type)) fileErrors.push(`${row}: unsupported type ${finding.type}.`);
      if (!finding.source) fileErrors.push(`${row}: source is required.`);
      if (!isLdnUrl(finding.affectedUrl)) fileErrors.push(`${row}: affectedUrl must be an ldndecks.com URL.`);
      if (!finding.summary || !/read-only|sample-only|review/i.test(finding.summary)) {
        fileWarnings.push(`${row}: summary should explicitly say read-only, sample-only, or review.`);
      }
      if (!ALLOWED_STRENGTHS.has(finding.evidenceStrength)) {
        fileErrors.push(`${row}: unsupported evidenceStrength ${finding.evidenceStrength}.`);
      }
      if (!ALLOWED_CONFIDENCE.has(finding.confidence)) {
        fileErrors.push(`${row}: unsupported confidence ${finding.confidence}.`);
      }
      if (finding.reviewOnly !== true) fileErrors.push(`${row}: reviewOnly must be true.`);
      if (finding.publicClaimAllowed !== false) fileErrors.push(`${row}: publicClaimAllowed must be false.`);
      if (finding.adsActionAllowed !== false) fileErrors.push(`${row}: adsActionAllowed must be false.`);
      if (finding.ownerReviewRequired !== true) fileErrors.push(`${row}: ownerReviewRequired must be true.`);
    }

    const combined = flattenStrings(payload).join('\n');
    if (!combined.includes('ldndecks.com')) fileErrors.push(`${rel}: payload text must include ldndecks.com.`);
    if (/change|update|activate|increase|publish|claim/i.test(combined) && !/do not|blocked|review/i.test(combined)) {
      fileWarnings.push(`${rel}: action-oriented wording appears without an explicit blocker/review qualifier.`);
    }
  }

  errors.push(...fileErrors);
  warnings.push(...fileWarnings);
  fileSummaries.push({
    file: rel,
    ok: fileErrors.length === 0,
    sampleOnly: payload?.sampleOnly ?? null,
    findings: Array.isArray(payload?.findings) ? payload.findings.length : null,
    errors: fileErrors.length,
    warnings: fileWarnings.length,
  });
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  status: realFiles ? 'REAL_RAW_FINDINGS_REVIEW_REQUIRED' : 'SAMPLE_ONLY',
  rawDirectory: RAW_DIR,
  files: files.length,
  sampleFiles,
  realFiles,
  findings,
  sampleFindings,
  realFindings,
  errors,
  warnings,
  fileSummaries,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# DataForSEO n8n Raw Findings Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Mode: ${result.status}
- Files: ${result.files}
- Sample files: ${result.sampleFiles}
- Real files: ${result.realFiles}
- Findings: ${result.findings}
- Sample findings: ${result.sampleFindings}
- Real findings: ${result.realFindings}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- Raw directory: \`${RAW_DIR}\`

## Files

| File | Status | Mode | Findings | Errors | Warnings |
|---|---|---|---:|---:|---:|
${fileSummaries.map((item) => `| ${item.file} | ${item.ok ? 'PASS' : 'FAIL'} | ${item.sampleOnly === true ? 'sample' : item.sampleOnly === false ? 'real' : 'unknown'} | ${item.findings ?? '?'} | ${item.errors} | ${item.warnings} |`).join('\n')}

## Errors

${errors.length ? errors.map((item) => `- ${item}`).join('\n') : '- none'}

## Warnings

${warnings.length ? warnings.map((item) => `- ${item}`).join('\n') : '- none'}
`;

fs.mkdirSync(path.dirname(path.join(ROOT, OUTPUT_JSON)), { recursive: true });
fs.writeFileSync(path.join(ROOT, OUTPUT_JSON), `${JSON.stringify(result, null, 2)}\n`);
fs.writeFileSync(path.join(ROOT, OUTPUT_MD), md);

console.log(JSON.stringify(result, null, 2));
if (!result.ok) process.exit(1);
