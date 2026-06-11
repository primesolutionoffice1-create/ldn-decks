#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, 'docs/seo');
const OUTPUT_DIR = path.join(ROOT, 'scripts/output');
const DATE = localDateStamp();

const PACKET_PREFIXES = [
  'directory-citation-status',
  'nadra-directory-verification-packet',
  'bing-places-verification-packet',
  'apple-business-connect-verification-packet',
  'nextdoor-citation-cleanup-packet',
  'angi-citation-cleanup-packet',
];

function latestSource(prefix) {
  const pattern = new RegExp(`^${prefix}-(\\d{4}-\\d{2}-\\d{2})\\.md$`);
  return fs.readdirSync(DOCS_DIR)
    .map((name) => {
      const match = name.match(pattern);
      return match ? { name, date: match[1] } : null;
    })
    .filter(Boolean)
    .filter((entry) => entry.date < DATE)
    .sort((a, b) => b.date.localeCompare(a.date))[0] || null;
}

function refreshPacket(prefix) {
  const source = latestSource(prefix);
  const targetName = `${prefix}-${DATE}.md`;
  const targetPath = path.join(DOCS_DIR, targetName);

  if (!source) {
    return {
      prefix,
      ok: false,
      target: `docs/seo/${targetName}`,
      error: `No prior packet found for ${prefix}.`,
    };
  }

  const sourcePath = path.join(DOCS_DIR, source.name);
  const sourceText = fs.readFileSync(sourcePath, 'utf8');
  const refreshed = sourceText
    .replaceAll(source.date, DATE)
    .replace(/Current-day refresh note:[^\n]*\n\n/g, '')
    .replace(
      /\n## Summary\n/,
      `\nCurrent-day refresh note: refreshed from \`docs/seo/${source.name}\` for local proof-gated operating use. No live citation, profile, sameAs, GBP, Apple, Bing, Nextdoor, Angi, or NADRA change was made.\n\n## Summary\n`,
    );

  fs.writeFileSync(targetPath, refreshed.endsWith('\n') ? refreshed : `${refreshed}\n`);

  return {
    prefix,
    ok: true,
    source: `docs/seo/${source.name}`,
    target: `docs/seo/${targetName}`,
  };
}

function main() {
  fs.mkdirSync(DOCS_DIR, { recursive: true });
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const packets = PACKET_PREFIXES.map(refreshPacket);
  const errors = packets.filter((packet) => !packet.ok).map((packet) => packet.error);
  const result = {
    ok: errors.length === 0,
    date: DATE,
    packets,
    errors,
    outputs: {
      json: `scripts/output/directory-citation-packet-generation-${DATE}.json`,
      markdown: `scripts/output/directory-citation-packet-generation-${DATE}.md`,
    },
  };

  const markdown = [
    `# Directory Citation Packet Generation - ${DATE}`,
    '',
    `- Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `- Packets: ${packets.filter((packet) => packet.ok).length}/${packets.length}`,
    `- Errors: ${errors.length}`,
    '',
    '## Packets',
    '',
    '| Packet | Source | Target | Status |',
    '|---|---|---|---:|',
    ...packets.map((packet) => `| ${packet.prefix} | \`${packet.source || 'missing'}\` | \`${packet.target}\` | ${packet.ok ? 'ok' : 'fail'} |`),
    '',
    '## Errors',
    '',
    ...(errors.length ? errors.map((error) => `- ${error}`) : ['- None']),
    '',
  ].join('\n');

  fs.writeFileSync(path.join(ROOT, result.outputs.json), `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(path.join(ROOT, result.outputs.markdown), `${markdown}\n`);

  console.log(JSON.stringify({
    ok: result.ok,
    date: result.date,
    packets: packets.filter((packet) => packet.ok).length,
    errors,
    outputs: result.outputs,
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
