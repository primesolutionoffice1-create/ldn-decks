#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const MANIFEST = 'docs/seo/dataforseo-n8n-mcp-workflow-manifest-2026-06-03.json';
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-mcp-workflow-manifest-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/dataforseo-n8n-mcp-workflow-manifest-validation-${DATE}.md`;

const REQUIRED_ROOT_FIELDS = [
  'workflowName',
  'targetDomain',
  'brand',
  'sourceGuide',
  'mcp',
  'n8nNodes',
  'allowedUseCases',
  'disallowedUseCases',
  'safety',
  'costCaps',
  'workflowPrompts',
  'validationCommand',
];

const REQUIRED_ENV = [
  'DATAFORSEO_USERNAME',
  'DATAFORSEO_PASSWORD',
  'DATAFORSEO_SIMPLE_FILTER',
];

const REQUIRED_NODE_NAMES = [
  'AI Agent',
  'MCP Client Tool',
];

const REQUIRED_COST_CAPS = [
  'maxSeedKeywordsPerRun',
  'maxSerpTasksPerRun',
  'maxBacklinkTargetsPerRun',
  'maxBusinessListingTargetsPerRun',
  'maxRunsPerDay',
  'requiresManualApprovalAboveCap',
];

const FORBIDDEN_PATTERNS = [
  {
    label: 'literal Basic auth header',
    pattern: /Basic\s+[A-Za-z0-9+/=]{20,}/,
  },
  {
    label: 'inline DataForSEO password assignment',
    pattern: /DATAFORSEO_PASSWORD\s*=\s*["']?(?!\$DATAFORSEO_PASSWORD|your_password)[^"'\s,}]+/i,
  },
  {
    label: 'unrelated-domain contamination',
    pattern: /prime\s+solution/i,
  },
  {
    label: 'non-LDN production domain contamination',
    pattern: /psolutionservices\.com/i,
  },
];

function readText(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function hasPositiveInteger(value) {
  return Number.isInteger(value) && value > 0;
}

const text = readText(MANIFEST);
const errors = [];
const warnings = [];
let manifest = null;

if (!text) {
  errors.push(`Missing workflow manifest: ${MANIFEST}`);
} else {
  try {
    manifest = JSON.parse(text);
  } catch (error) {
    errors.push(`Manifest is not valid JSON: ${error.message}`);
  }
}

if (text) {
  for (const item of FORBIDDEN_PATTERNS) {
    if (item.pattern.test(text)) errors.push(`Manifest contains forbidden content: ${item.label}`);
  }
}

if (manifest) {
  for (const field of REQUIRED_ROOT_FIELDS) {
    if (!(field in manifest)) errors.push(`Manifest missing root field: ${field}`);
  }

  if (manifest.targetDomain !== 'ldndecks.com') {
    errors.push('Manifest targetDomain must be exactly ldndecks.com.');
  }

  if (manifest.brand !== 'LDN Decks') {
    errors.push('Manifest brand must be exactly LDN Decks.');
  }

  if (manifest.sourceGuide !== 'https://dataforseo.com/help-center/connecting-dataforseo-mcp-server-to-your-n8n-workflows') {
    errors.push('Manifest sourceGuide must point to the checked DataForSEO n8n MCP guide.');
  }

  const mcp = manifest.mcp || {};
  if (mcp.mcpMode !== 'local') errors.push('MCP mode must be local.');
  if (mcp.mcpServerCommand !== 'npx dataforseo-mcp-server http') {
    errors.push('MCP server command must be npx dataforseo-mcp-server http.');
  }
  if (mcp.localEndpoint !== 'http://localhost:3000') {
    errors.push('Local MCP endpoint must be http://localhost:3000.');
  }
  if (mcp.remoteEndpoint !== 'https://mcp.dataforseo.com/mcp') {
    warnings.push('Remote endpoint reference should match the DataForSEO source guide.');
  }
  if (mcp.remoteEndpointAllowed !== false) {
    errors.push('Remote MCP endpoint must remain disabled in this LDN workflow manifest.');
  }
  if (mcp.simpleFilter !== true) {
    errors.push('DATAFORSEO_SIMPLE_FILTER workflow mode must be true for this local MCP manifest.');
  }

  for (const envName of REQUIRED_ENV) {
    if (!asArray(mcp.requiredEnv).includes(envName)) {
      errors.push(`Manifest missing required MCP env var: ${envName}`);
    }
  }

  if (mcp.envMapping?.DATAFORSEO_USERNAME !== '$DATAFORSEO_LOGIN') {
    errors.push('Manifest must map DATAFORSEO_USERNAME from $DATAFORSEO_LOGIN.');
  }
  if (mcp.envMapping?.DATAFORSEO_PASSWORD !== '$DATAFORSEO_PASSWORD') {
    errors.push('Manifest must map DATAFORSEO_PASSWORD from $DATAFORSEO_PASSWORD.');
  }
  if (mcp.envMapping?.DATAFORSEO_SIMPLE_FILTER !== 'true') {
    errors.push('Manifest must map DATAFORSEO_SIMPLE_FILTER to true.');
  }

  const nodeNames = asArray(manifest.n8nNodes).map((node) => node.name);
  for (const nodeName of REQUIRED_NODE_NAMES) {
    if (!nodeNames.includes(nodeName)) errors.push(`Manifest missing n8n node: ${nodeName}`);
  }

  const mcpNode = asArray(manifest.n8nNodes).find((node) => node.name === 'MCP Client Tool');
  if (!mcpNode || mcpNode.endpoint !== 'http://localhost:3000') {
    errors.push('MCP Client Tool must point to http://localhost:3000.');
  }

  const safety = manifest.safety || {};
  if (safety.readOnly !== true) errors.push('Manifest safety.readOnly must be true.');
  if (safety.requiresManualReview !== true) errors.push('Manifest safety.requiresManualReview must be true.');
  if (safety.storeCredentialsInRepo !== false) errors.push('Manifest must forbid repo-stored credentials.');
  if (safety.storeBase64AuthHeadersInRepo !== false) errors.push('Manifest must forbid repo-stored Base64 auth headers.');
  if (safety.allowClientSideCredentialExposure !== false) errors.push('Manifest must forbid client-side credential exposure.');
  if (!asArray(safety.allowedDomains).includes('ldndecks.com')) {
    errors.push('Manifest safety.allowedDomains must include ldndecks.com.');
  }
  if (asArray(safety.allowedDomains).some((domain) => domain !== 'ldndecks.com')) {
    errors.push('Manifest safety.allowedDomains must be LDN-only.');
  }

  const costCaps = manifest.costCaps || {};
  for (const key of REQUIRED_COST_CAPS) {
    if (!(key in costCaps)) errors.push(`Manifest missing cost cap: ${key}`);
  }
  for (const key of REQUIRED_COST_CAPS.filter((key) => key !== 'requiresManualApprovalAboveCap')) {
    if (!hasPositiveInteger(costCaps[key])) {
      errors.push(`Manifest cost cap must be a positive integer: ${key}`);
    }
  }
  if (costCaps.requiresManualApprovalAboveCap !== true) {
    errors.push('Manifest must require manual approval above cost caps.');
  }

  if (asArray(manifest.allowedUseCases).length < 4) {
    errors.push('Manifest should include at least 4 read-only allowed use cases.');
  }
  if (asArray(manifest.disallowedUseCases).length < 4) {
    errors.push('Manifest should include at least 4 disallowed use cases.');
  }
  if (asArray(manifest.workflowPrompts).length < 3) {
    errors.push('Manifest should include at least 3 workflow prompt blueprints.');
  }
  if (asArray(manifest.workflowPrompts).some((item) => !item.prompt?.includes('read-only'))) {
    errors.push('Every workflow prompt must explicitly say read-only.');
  }
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  manifest: MANIFEST,
  workflowName: manifest?.workflowName ?? null,
  targetDomain: manifest?.targetDomain ?? null,
  mcpMode: manifest?.mcp?.mcpMode ?? null,
  readOnly: manifest?.safety?.readOnly ?? null,
  costCaps: manifest?.costCaps ? Object.keys(manifest.costCaps).length : 0,
  workflowPrompts: asArray(manifest?.workflowPrompts).length,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# DataForSEO n8n MCP Workflow Manifest Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Workflow: ${result.workflowName ?? 'unknown'}
- Target domain: ${result.targetDomain ?? 'unknown'}
- MCP mode: ${result.mcpMode ?? 'unknown'}
- Read-only: ${result.readOnly === true ? 'yes' : 'no'}
- Cost cap fields: ${result.costCaps}
- Workflow prompts: ${result.workflowPrompts}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- Manifest: \`${MANIFEST}\`

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
