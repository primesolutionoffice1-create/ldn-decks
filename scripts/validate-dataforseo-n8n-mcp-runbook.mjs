#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const RUNBOOK = 'docs/seo/dataforseo-n8n-mcp-runbook-2026-06-03.md';
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-mcp-runbook-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/dataforseo-n8n-mcp-runbook-validation-${DATE}.md`;

const REQUIRED_PHRASES = [
  'npx dataforseo-mcp-server http',
  'DATAFORSEO_USERNAME',
  'DATAFORSEO_PASSWORD',
  'DATAFORSEO_SIMPLE_FILTER',
  'DATAFORSEO_LOGIN',
  'http://localhost:3000',
  'https://mcp.dataforseo.com/mcp',
  'Header Authentication',
  'Base64',
  'MCP Client Tool',
  'AI Agent',
  'Do not commit real values',
  'Do not store Base64 auth headers',
  'LDN Decks',
];

const FORBIDDEN_PATTERNS = [
  {
    label: 'literal placeholder-free basic auth header',
    pattern: /Basic\s+[A-Za-z0-9+/=]{20,}/,
  },
  {
    label: 'inline DataForSEO password assignment',
    pattern: /DATAFORSEO_PASSWORD\s*=\s*["']?(?!\$DATAFORSEO_PASSWORD|your_password)[^"'\s]+/i,
  },
  {
    label: 'Prime Solution domain contamination',
    pattern: /psolutionservices\.com|prime\s+solution/i,
  },
];

function read(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

const text = read(RUNBOOK);
const errors = [];
const warnings = [];

if (!text) {
  errors.push(`Missing runbook: ${RUNBOOK}`);
}

for (const phrase of REQUIRED_PHRASES) {
  if (!text.includes(phrase)) errors.push(`Runbook missing required phrase: ${phrase}`);
}

for (const item of FORBIDDEN_PATTERNS) {
  if (item.pattern.test(text)) errors.push(`Runbook contains forbidden content: ${item.label}`);
}

if (!/DATAFORSEO_USERNAME="\$DATAFORSEO_LOGIN"/.test(text) && !/DATAFORSEO_USERNAME='\$DATAFORSEO_LOGIN'/.test(text)) {
  warnings.push('Runbook should show DATAFORSEO_USERNAME mapped from DATAFORSEO_LOGIN.');
}

if (!/DATAFORSEO_SIMPLE_FILTER=["']true["']/.test(text)) {
  errors.push('Runbook must explicitly set DATAFORSEO_SIMPLE_FILTER="true".');
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  runbook: RUNBOOK,
  requiredPhrases: REQUIRED_PHRASES.length,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# DataForSEO n8n MCP Runbook Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Required phrases: ${REQUIRED_PHRASES.length}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- Runbook: \`${RUNBOOK}\`

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
