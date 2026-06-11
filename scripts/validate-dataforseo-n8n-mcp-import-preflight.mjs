#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const WORKFLOW_DIR = 'docs/seo/n8n-workflows';
const MANIFEST = 'docs/seo/dataforseo-n8n-mcp-workflow-manifest-2026-06-03.json';
const PREFLIGHT_DOC = 'docs/seo/dataforseo-n8n-mcp-import-preflight-2026-06-03.md';
const OUTPUT_JSON = `scripts/output/dataforseo-n8n-mcp-import-preflight-${DATE}.json`;
const OUTPUT_MD = `scripts/output/dataforseo-n8n-mcp-import-preflight-${DATE}.md`;

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
    label: 'DataForSEO password assignment',
    pattern: /DATAFORSEO_PASSWORD\s*[:=]\s*["']?(?!\$DATAFORSEO_PASSWORD|your_password)[^"'\s,}]+/i,
  },
  {
    label: 'n8n credential reference',
    pattern: /"credentials"\s*:|"credentialId"\s*:|"credentialType"\s*:/i,
  },
  {
    label: 'secret-like key',
    pattern: /"(apiKey|accessToken|refreshToken|password|secret|clientSecret|authToken)"\s*:\s*"(?!\$|your_|REDACTED|redacted)[^"]{8,}"/i,
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

function listWorkflowExports() {
  const dir = path.join(ROOT, WORKFLOW_DIR);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.json'))
    .sort()
    .map((file) => path.join(WORKFLOW_DIR, file));
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

function hasNodeName(workflow, pattern) {
  return Array.isArray(workflow?.nodes) && workflow.nodes.some((node) => pattern.test(`${node.name ?? ''} ${node.type ?? ''}`));
}

function findNode(workflow, name) {
  return Array.isArray(workflow?.nodes) ? workflow.nodes.find((node) => node.name === name) : null;
}

function hasConnection(workflow, from, channel, to, type) {
  const groups = workflow?.connections?.[from]?.[channel];
  if (!Array.isArray(groups)) return false;
  return groups.some((group) => (
    Array.isArray(group)
    && group.some((edge) => edge?.node === to && (!type || edge?.type === type))
  ));
}

function validateWorkflowExport(rel) {
  const text = readText(rel);
  const errors = [];
  const warnings = [];
  let workflow = null;

  for (const item of FORBIDDEN_PATTERNS) {
    if (item.pattern.test(text)) errors.push(`${rel}: contains forbidden content: ${item.label}`);
  }

  try {
    workflow = JSON.parse(text);
  } catch (error) {
    errors.push(`${rel}: invalid JSON: ${error.message}`);
    return { rel, ok: false, errors, warnings };
  }

  if (workflow.active === true) {
    errors.push(`${rel}: exported workflow must not be active before manual review.`);
  }

  if (!hasNodeName(workflow, /AI Agent|langchain\.agent/i)) {
    errors.push(`${rel}: missing AI Agent node.`);
  }

  if (!hasNodeName(workflow, /MCP Client Tool|mcp/i)) {
    errors.push(`${rel}: missing MCP Client Tool node.`);
  }

  const requiredNodes = [
    {
      name: 'Manual Trigger',
      type: 'n8n-nodes-base.manualTrigger',
    },
    {
      name: 'AI Agent',
      type: 'n8n-nodes-langchain.agent',
    },
    {
      name: 'MCP Client Tool',
      type: 'n8n-nodes-langchain.mcpClientTool',
    },
    {
      name: 'Review Summary',
      type: 'n8n-nodes-base.noOp',
    },
  ];

  for (const expected of requiredNodes) {
    const node = findNode(workflow, expected.name);
    if (!node) {
      errors.push(`${rel}: missing required node named ${expected.name}.`);
      continue;
    }
    if (node.type !== expected.type) {
      errors.push(`${rel}: node ${expected.name} must use type ${expected.type}.`);
    }
    if (!Array.isArray(node.position) || node.position.length !== 2) {
      errors.push(`${rel}: node ${expected.name} must include a two-value position array.`);
    }
  }

  const mcpNode = findNode(workflow, 'MCP Client Tool');
  if (mcpNode?.parameters?.endpointUrl !== 'http://localhost:3000') {
    errors.push(`${rel}: MCP Client Tool parameters.endpointUrl must be http://localhost:3000.`);
  }

  if (!hasConnection(workflow, 'Manual Trigger', 'main', 'AI Agent', 'main')) {
    errors.push(`${rel}: Manual Trigger must connect to AI Agent on main.`);
  }

  if (!hasConnection(workflow, 'MCP Client Tool', 'ai_tool', 'AI Agent', 'ai_tool')) {
    errors.push(`${rel}: MCP Client Tool must connect to AI Agent on ai_tool.`);
  }

  if (!hasConnection(workflow, 'AI Agent', 'main', 'Review Summary', 'main')) {
    errors.push(`${rel}: AI Agent must connect to Review Summary on main.`);
  }

  if (workflow.settings?.saveExecutionProgress !== false) {
    errors.push(`${rel}: settings.saveExecutionProgress must be false for sanitized samples.`);
  }

  if (workflow.settings?.saveManualExecutions !== false) {
    errors.push(`${rel}: settings.saveManualExecutions must be false for sanitized samples.`);
  }

  if (workflow.staticData?.targetDomain !== 'ldndecks.com') {
    errors.push(`${rel}: staticData.targetDomain must be ldndecks.com.`);
  }

  if (workflow.staticData?.status !== 'sample-disabled-sanitized') {
    errors.push(`${rel}: staticData.status must be sample-disabled-sanitized.`);
  }

  const strings = flattenStrings(workflow);
  const combined = strings.join('\n');

  if (!combined.includes('ldndecks.com')) {
    errors.push(`${rel}: workflow text must include ldndecks.com.`);
  }

  if (!combined.includes('http://localhost:3000')) {
    errors.push(`${rel}: workflow must point MCP Client Tool to http://localhost:3000.`);
  }

  if (!/read-only/i.test(combined)) {
    errors.push(`${rel}: workflow prompts must explicitly say read-only.`);
  }

  if (!/cost cap|cost caps|maxSeedKeywordsPerRun|maxSerpTasksPerRun/i.test(combined)) {
    errors.push(`${rel}: workflow must reference manifest cost caps.`);
  }

  if (/https:\/\/mcp\.dataforseo\.com\/mcp/i.test(combined)) {
    warnings.push(`${rel}: remote MCP endpoint appears in workflow; local MCP is preferred for this manifest.`);
  }

  return { rel, ok: errors.length === 0, errors, warnings };
}

const errors = [];
const warnings = [];

const manifestText = readText(MANIFEST);
const preflightText = readText(PREFLIGHT_DOC);
const workflowExports = listWorkflowExports();

if (!manifestText) errors.push(`Missing manifest: ${MANIFEST}`);
if (!preflightText) errors.push(`Missing preflight doc: ${PREFLIGHT_DOC}`);

for (const phrase of [
  'ldndecks.com',
  'docs/seo/n8n-workflows',
  'npm run dataforseo:n8n-mcp:import-preflight',
  'AI Agent',
  'MCP Client Tool',
  'http://localhost:3000',
  'Base64 auth headers',
]) {
  if (!preflightText.includes(phrase)) {
    errors.push(`Preflight doc missing required phrase: ${phrase}`);
  }
}

const workflowResults = workflowExports.map(validateWorkflowExport);
for (const result of workflowResults) {
  errors.push(...result.errors);
  warnings.push(...result.warnings);
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  status: workflowExports.length ? 'EXPORTS_VALIDATED' : 'READY_NO_EXPORTS',
  workflowDirectory: WORKFLOW_DIR,
  workflowExports: workflowExports.length,
  structuralChecks: {
    requiredNodes: 4,
    requiredConnections: 3,
    endpoint: 'http://localhost:3000',
  },
  manifest: MANIFEST,
  preflightDoc: PREFLIGHT_DOC,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# DataForSEO n8n MCP Import Preflight - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Mode: ${result.status}
- Workflow exports: ${result.workflowExports}
- Required nodes checked: ${result.structuralChecks.requiredNodes}
- Required connections checked: ${result.structuralChecks.requiredConnections}
- Required MCP endpoint: ${result.structuralChecks.endpoint}
- Errors: ${errors.length}
- Warnings: ${warnings.length}
- Workflow directory: \`${WORKFLOW_DIR}\`
- Manifest: \`${MANIFEST}\`
- Preflight doc: \`${PREFLIGHT_DOC}\`

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
