#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const DATE = localDateStamp();

const REQUIRED_CURRENT_DOCS = [
  `docs/seo/owner-evidence-handoff-${DATE}.md`,
  `docs/seo/owner-evidence-action-packet-${DATE}.md`,
  `docs/seo/owner-evidence-sprint-${DATE}.md`,
  `docs/seo/evidence-unblock-runbook-${DATE}.md`,
  `docs/seo/proof-source-checklist-${DATE}.md`,
  `docs/seo/gbp-maps-proof-ops-board-${DATE}.md`,
  `docs/seo/proof-system-staging-manifest-${DATE}.md`,
  `docs/seo/proof-staging-plan-${DATE}.md`,
  `docs/seo/brainstein-readiness-audit-${DATE}.md`,
  `docs/seo/brainstein-task-packets-${DATE}.md`,
];

const PACKAGE_TEXT = fs.readFileSync(path.join(ROOT, 'package.json'), 'utf8');
const PACKAGE_JSON = JSON.parse(PACKAGE_TEXT);
const SCRIPTS = new Set(Object.keys(PACKAGE_JSON.scripts || {}));
const COMMAND_PATTERN = /\bnpm run ([a-zA-Z0-9:_-]+)\b/g;

function duplicateScriptKeys() {
  const scriptsMatch = PACKAGE_TEXT.match(/"scripts"\s*:\s*\{([\s\S]*?)\n\s*\}/);
  if (!scriptsMatch) return [];
  const keys = [...scriptsMatch[1].matchAll(/^\s*"([^"]+)"\s*:/gm)].map((match) => match[1]);
  const counts = new Map();
  for (const key of keys) counts.set(key, (counts.get(key) || 0) + 1);
  return [...counts.entries()]
    .filter(([, count]) => count > 1)
    .map(([key, count]) => ({ key, count }));
}

function commandRefs(text) {
  const refs = [];
  for (const match of text.matchAll(COMMAND_PATTERN)) {
    refs.push({
      command: match[1],
      index: match.index || 0,
    });
  }
  return refs;
}

function lineNumber(text, index) {
  return text.slice(0, index).split('\n').length;
}

function scriptTarget(command) {
  const script = PACKAGE_JSON.scripts?.[command];
  if (!script) return null;
  const match = script.match(/^node\s+([^\s]+)/);
  if (!match) return { type: 'non-node', script };
  return {
    type: 'node',
    script,
    path: match[1],
    exists: fs.existsSync(path.join(ROOT, match[1])),
  };
}

function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const errors = [];
  const warnings = [];
  const files = [];
  const commands = new Map();
  const duplicateScripts = duplicateScriptKeys();

  for (const duplicate of duplicateScripts) {
    errors.push(`package.json scripts contains duplicate key: ${duplicate.key} (${duplicate.count} entries)`);
  }

  for (const relativePath of REQUIRED_CURRENT_DOCS) {
    const absolutePath = path.join(ROOT, relativePath);
    if (!fs.existsSync(absolutePath)) {
      errors.push(`Missing current proof command reference document: ${relativePath}`);
      files.push({ path: relativePath, exists: false, refs: 0, missing: 0 });
      continue;
    }

    const text = fs.readFileSync(absolutePath, 'utf8');
    const refs = commandRefs(text);
    let missing = 0;

    for (const ref of refs) {
      if (!commands.has(ref.command)) commands.set(ref.command, []);
      commands.get(ref.command).push({
        file: relativePath,
        line: lineNumber(text, ref.index),
      });

      if (!SCRIPTS.has(ref.command)) {
        missing += 1;
        errors.push(`${relativePath}:${lineNumber(text, ref.index)} references missing package script: npm run ${ref.command}`);
      }
    }

    files.push({
      path: relativePath,
      exists: true,
      refs: refs.length,
      missing,
    });
  }

  if (!commands.has('seo:directory-citations:validate')) {
    errors.push('Current proof docs must include npm run seo:directory-citations:validate.');
  }
  if (!commands.has('seo:validate-ai-discovery')) {
    errors.push('Current proof docs must include npm run seo:validate-ai-discovery.');
  }
  if (!commands.has('seo:evidence-handoff:validate')) {
    errors.push('Current proof docs must include npm run seo:evidence-handoff:validate.');
  }
  if (!commands.has('seo:prepublish-evidence')) {
    errors.push('Current proof docs must include npm run seo:prepublish-evidence.');
  }
  if (!commands.has('build')) {
    errors.push('Current proof docs must include npm run build.');
  }

  const commandTargets = [...commands.keys()].map((command) => ({
    command,
    target: scriptTarget(command),
  }));

  for (const entry of commandTargets) {
    if (entry.target?.type === 'node' && !entry.target.exists) {
      errors.push(`package.json script target is missing for npm run ${entry.command}: ${entry.target.path}`);
    }
  }

  const result = {
    ok: errors.length === 0,
    date: DATE,
    checkedFiles: files.length,
    existingFiles: files.filter((file) => file.exists).length,
    commandRefs: [...commands.values()].reduce((total, refs) => total + refs.length, 0),
    uniqueCommands: commands.size,
    missingCommandRefs: errors.filter((error) => /missing package script/i.test(error)).length,
    missingScriptTargets: errors.filter((error) => /script target is missing/i.test(error)).length,
    duplicateScripts,
    files,
    commands: [...commands.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([command, refs]) => ({
        command,
        exists: SCRIPTS.has(command),
        refs: refs.length,
        target: commandTargets.find((entry) => entry.command === command)?.target || null,
        locations: refs,
      })),
    warnings,
    errors,
    outputs: {
      json: `scripts/output/proof-command-reference-validation-${DATE}.json`,
      markdown: `scripts/output/proof-command-reference-validation-${DATE}.md`,
    },
  };

  const markdown = [
    `# Proof Command Reference Validation - ${DATE}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Checked files: ${result.checkedFiles}`,
    `- Existing files: ${result.existingFiles}`,
    `- Command references: ${result.commandRefs}`,
    `- Unique commands: ${result.uniqueCommands}`,
    `- Missing command references: ${result.missingCommandRefs}`,
    `- Missing script targets: ${result.missingScriptTargets}`,
    `- Duplicate package scripts: ${result.duplicateScripts.length}`,
    `- Errors: ${errors.length}`,
    `- Warnings: ${warnings.length}`,
    '',
    '## Commands',
    '',
    '| Command | Exists | References | Script target |',
    '|---|---:|---:|---|',
    ...result.commands.map((entry) => `| \`npm run ${entry.command}\` | ${entry.exists ? 'yes' : 'no'} | ${entry.refs} | ${entry.target?.type === 'node' ? `\`${entry.target.path}\` (${entry.target.exists ? 'exists' : 'missing'})` : 'n/a'} |`),
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

  fs.writeFileSync(path.join(ROOT, result.outputs.json), `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(path.join(ROOT, result.outputs.markdown), `${markdown}\n`);

  console.log(JSON.stringify({
    ok: result.ok,
    date: result.date,
    checkedFiles: result.checkedFiles,
    commandRefs: result.commandRefs,
    uniqueCommands: result.uniqueCommands,
    missingCommandRefs: result.missingCommandRefs,
    missingScriptTargets: result.missingScriptTargets,
    duplicateScripts: result.duplicateScripts.length,
    errors: result.errors,
    warnings: result.warnings,
    outputs: result.outputs,
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
