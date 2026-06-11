#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const DATE = localDateStamp();
const FALLBACK_DATE = '2026-06-08';
const NADRA_URL = 'https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b';
const OUTPUT_JSON = `scripts/output/directory-citation-packet-validation-${DATE}.json`;
const OUTPUT_MD = `scripts/output/directory-citation-packet-validation-${DATE}.md`;

const PACKETS = [
  {
    platform: 'Bing Places',
    prefix: 'bing-places-verification-packet',
    file: `docs/seo/bing-places-verification-packet-${FALLBACK_DATE}.md`,
    boardSource: 'Bing Places verification packet',
    boardTask: 'Archive and re-verify Bing Places public listing proof',
    expectedStatus: 'owner-verify-live',
    requiredPhrases: [
      'Bing Places / Bing Maps',
      'Canonical public URL: https://www.bing.com/maps?ss=ypid.YND1AFC4105F09B172&mkt=en-US',
      'Screenshot Requirements',
      'Bing Maps can be added to `src/lib/business.js` `sameAs` after',
    ],
    forbiddenSameAs: [/bing\.com\/maps/i],
  },
  {
    platform: 'Apple Business Connect',
    prefix: 'apple-business-connect-verification-packet',
    file: `docs/seo/apple-business-connect-verification-packet-${FALLBACK_DATE}.md`,
    boardSource: 'Apple Business Connect verification packet',
    boardTask: 'Claim or verify Apple Business Connect profile with canonical NAP',
    expectedStatus: 'owner-needed',
    requiredPhrases: [
      'Apple Business Connect / Apple Maps',
      'Do not add an Apple Maps URL to `BUSINESS.sameAs`',
      'Screenshots Required',
      'Add an Apple Maps URL to `src/lib/business.js` `sameAs` only after',
    ],
    forbiddenSameAs: [/maps\.apple\.com/i, /businessconnect\.apple\.com/i],
  },
  {
    platform: 'Nextdoor',
    prefix: 'nextdoor-citation-cleanup-packet',
    file: `docs/seo/nextdoor-citation-cleanup-packet-${FALLBACK_DATE}.md`,
    boardSource: 'Nextdoor cleanup packet',
    boardTask: 'Resolve Nextdoor public profile name/contact contamination',
    expectedStatus: 'owner-needed',
    requiredPhrases: [
      'Nextdoor Citation Cleanup Packet',
      'loudoun decks buildin',
      'Do not add the Nextdoor URL to organization `sameAs`',
      'After Screenshots Required',
    ],
    forbiddenSameAs: [/nextdoor\.com/i],
  },
  {
    platform: 'Angi',
    prefix: 'angi-citation-cleanup-packet',
    file: `docs/seo/angi-citation-cleanup-packet-${FALLBACK_DATE}.md`,
    boardSource: 'Angi cleanup packet',
    boardTask: 'Clean up Angi public profile identity and verify canonical NAP',
    expectedStatus: 'owner-needed',
    requiredPhrases: [
      'Angi Citation Cleanup Packet',
      'Do not add Angi to organization `sameAs`',
      'Prime Solution LLC',
      'After Screenshots Required',
    ],
    forbiddenSameAs: [/angi\.com/i],
  },
  {
    platform: 'NADRA directory',
    prefix: 'nadra-directory-verification-packet',
    file: `docs/seo/nadra-directory-verification-packet-${FALLBACK_DATE}.md`,
    boardSource: 'NADRA supplied profile URL',
    boardTask: 'Archive NADRA directory profile proof and confirm badge link uses unique profile URL',
    expectedStatus: 'owner-verify-live',
    requiredPhrases: [
      'NADRA Directory Verification Packet',
      `Canonical profile URL: ${NADRA_URL}`,
      'The website may link the NADRA Proud Member logo to the supplied profile URL',
      'Do not add additional NADRA, association, award, or certification claims',
    ],
    requiredSameAs: NADRA_URL,
  },
];

function read(rel) {
  const file = path.join(ROOT, rel);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function findDatedArtifact(prefix, extension) {
  const dir = path.join(ROOT, 'docs/seo');
  if (!fs.existsSync(dir)) return null;
  const pattern = new RegExp(`^${prefix}-(\\d{4}-\\d{2}-\\d{2})\\.${extension}$`);
  const candidates = fs.readdirSync(dir)
    .map((name) => {
      const match = name.match(pattern);
      return match ? { name, date: match[1] } : null;
    })
    .filter(Boolean)
    .filter((item) => item.date <= DATE)
    .sort((a, b) => b.date.localeCompare(a.date));
  return candidates[0]?.name ? `docs/seo/${candidates[0].name}` : null;
}

function parseSameAs(source) {
  const match = source.match(/sameAs:\s*\[([\s\S]*?)\]/);
  if (!match) return [];
  return [...match[1].matchAll(/'([^']+)'/g)].map((item) => item[1]);
}

function parseBoardRows(csvText) {
  return csvText
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => {
      const cells = [];
      let field = '';
      let quoted = false;
      for (let index = 0; index < line.length; index += 1) {
        const char = line[index];
        const next = line[index + 1];
        if (quoted) {
          if (char === '"' && next === '"') {
            field += '"';
            index += 1;
          } else if (char === '"') {
            quoted = false;
          } else {
            field += char;
          }
        } else if (char === '"') {
          quoted = true;
        } else if (char === ',') {
          cells.push(field);
          field = '';
        } else {
          field += char;
        }
      }
      cells.push(field);
      return {
        priority: cells[0] || '',
        lane: cells[1] || '',
        task: cells[2] || '',
        page: cells[3] || '',
        status: cells[4] || '',
        source: cells[5] || '',
        ownerNeeded: cells[6] || '',
        evidenceRequired: cells[7] || '',
      };
    });
}

const errors = [];
const warnings = [];
const statusFile = findDatedArtifact('directory-citation-status', 'md') || `docs/seo/directory-citation-status-${FALLBACK_DATE}.md`;
const statusText = read(statusFile);
const businessSource = read('src/lib/business.js');
const trustSectionSource = read('src/components/TrustSection.jsx');
const sameAs = parseSameAs(businessSource);
const boardCsvPath = findDatedArtifact('gbp-maps-proof-ops-board', 'csv');
const boardMdPath = findDatedArtifact('gbp-maps-proof-ops-board', 'md');
const boardCsv = boardCsvPath ? read(boardCsvPath) : '';
const boardMd = boardMdPath ? read(boardMdPath) : '';
const boardRows = boardCsv ? parseBoardRows(boardCsv) : [];

if (!statusText) errors.push(`Missing directory citation status file: ${statusFile}`);
if (!businessSource) errors.push('Missing src/lib/business.js.');
if (!trustSectionSource) errors.push('Missing src/components/TrustSection.jsx.');
if (!boardCsvPath || !boardCsv) errors.push('Missing dated proof ops board CSV.');
if (!boardMdPath || !boardMd) errors.push('Missing dated proof ops board Markdown.');

for (const platform of ['Bing Places', 'Apple Maps', 'Nextdoor', 'Angi', 'NADRA directory']) {
  if (!statusText.includes(platform)) errors.push(`Directory citation status missing platform: ${platform}`);
}

for (const packet of PACKETS) {
  const packetFile = findDatedArtifact(packet.prefix, 'md') || packet.file;
  const text = read(packetFile);
  if (!text) {
    errors.push(`Missing ${packet.platform} packet: ${packetFile}`);
    continue;
  }
  for (const phrase of packet.requiredPhrases) {
    if (!text.includes(phrase)) errors.push(`${packet.platform} packet missing required phrase: ${phrase}`);
  }
  if (!statusText.includes(packetFile)) {
    errors.push(`Directory citation status does not reference ${packet.platform} packet path: ${packetFile}`);
  }
  if (!boardCsv.includes(packet.boardSource)) {
    errors.push(`Proof ops board CSV does not reference ${packet.platform} source: ${packet.boardSource}`);
  }
  const boardRow = boardRows.find((row) => row.task === packet.boardTask);
  if (!boardRow) {
    errors.push(`Proof ops board missing ${packet.platform} task: ${packet.boardTask}`);
  } else {
    if (boardRow.status !== packet.expectedStatus) {
      errors.push(`${packet.platform} board task status should be ${packet.expectedStatus}, got ${boardRow.status}.`);
    }
    if (boardRow.ownerNeeded !== 'yes') {
      errors.push(`${packet.platform} board task must require owner/manual evidence.`);
    }
  }
  if (packet.requiredSameAs && !sameAs.includes(packet.requiredSameAs)) {
    errors.push(`${packet.platform} URL missing from BUSINESS.sameAs: ${packet.requiredSameAs}`);
  }
  for (const pattern of packet.forbiddenSameAs || []) {
    const offender = sameAs.find((url) => pattern.test(url));
    if (offender) errors.push(`${packet.platform} must not be in BUSINESS.sameAs before proof is resolved: ${offender}`);
  }
}

if (!businessSource.includes(`directoryUrl: '${NADRA_URL}'`)) {
  errors.push('NADRA membership directoryUrl does not use the supplied profile URL.');
}
if (!trustSectionSource.includes(`href="${NADRA_URL}"`)) {
  errors.push('NADRA badge link does not use the supplied profile URL.');
}
if (!trustSectionSource.includes('NADRA Member')) {
  warnings.push('NADRA badge text was not found in TrustSection.');
}

const result = {
  ok: errors.length === 0,
  date: DATE,
  statusFile,
  boardCsv: boardCsvPath,
  boardMarkdown: boardMdPath,
  packets: PACKETS.map((packet) => findDatedArtifact(packet.prefix, 'md') || packet.file),
  sameAsCount: sameAs.length,
  errors,
  warnings,
  outputs: {
    json: OUTPUT_JSON,
    markdown: OUTPUT_MD,
  },
};

const md = `# Directory Citation Packet Validation - ${DATE}

## Result

- Status: ${result.ok ? 'PASS' : 'FAIL'}
- Status file: \`${statusFile}\`
- Proof board CSV: \`${boardCsvPath || 'missing'}\`
- Proof board Markdown: \`${boardMdPath || 'missing'}\`
- Packets checked: ${PACKETS.length}
- Organization sameAs URLs: ${sameAs.length}
- Errors: ${errors.length}
- Warnings: ${warnings.length}

## Packets

${PACKETS.map((packet, index) => `- ${packet.platform}: \`${result.packets[index]}\``).join('\n')}

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
