#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const root = process.cwd();
const outputDir = path.join(root, 'scripts/output');
const stamp = localDateStamp();
const jsonOut = path.join(outputDir, `entity-profile-consistency-${stamp}.json`);
const mdOut = path.join(outputDir, `entity-profile-consistency-${stamp}.md`);

const canonicalProfiles = [
  {
    id: 'google-business-profile',
    label: 'Google Business Profile',
    url: 'https://www.google.com/maps/place/Loudoun+Decks/',
    requiredInSameAs: true,
    requiredInProofSnippets: true,
    dailySignal: 'google.com/maps/place/Loudoun+Decks',
  },
  {
    id: 'bbb-profile',
    label: 'Better Business Bureau',
    url: 'https://www.bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241',
    requiredInSameAs: true,
    requiredInProofSnippets: true,
    dailySignal: 'bbb.org/us/va/centreville/profile/deck-builder/loudoun-decks-0241-236091241',
  },
  {
    id: 'yelp-profile',
    label: 'Yelp',
    url: 'https://www.yelp.com/biz/loudoun-decks-centreville',
    requiredInSameAs: true,
    requiredInProofSnippets: true,
    dailySignal: 'yelp.com/biz/loudoun-decks-centreville',
  },
  {
    id: 'houzz-profile',
    label: 'Houzz',
    url: 'https://www.houzz.com/pro/webuser-782541997/loudoun-decks',
    requiredInSameAs: true,
    requiredInProofSnippets: true,
    dailySignal: 'houzz.com/pro/webuser-782541997/loudoun-decks',
  },
  {
    id: 'buildzoom-profile',
    label: 'BuildZoom',
    url: 'https://www.buildzoom.com/contractor/loudoun-decks',
    requiredInSameAs: true,
    requiredInProofSnippets: true,
    dailySignal: 'buildzoom.com/contractor/loudoun-decks',
  },
  {
    id: 'loudoun-chamber-profile',
    label: 'Loudoun Chamber',
    url: 'https://business.loudounchamber.org/list/member/loudoun-decks-30047',
    requiredInSameAs: true,
    requiredInProofSnippets: false,
    dailySignal: 'business.loudounchamber.org/list/member/loudoun-decks-30047',
  },
  {
    id: 'mapquest-profile',
    label: 'MapQuest',
    url: 'https://www.mapquest.com/us/virginia/loudoun-decks-532352487',
    requiredInSameAs: true,
    requiredInProofSnippets: false,
    dailySignal: 'mapquest.com/us/virginia/loudoun-decks-532352487',
  },
];

const forbiddenPublicPatterns = [
  {
    label: 'old Manassas Yelp profile',
    pattern: /yelp\.com\/biz\/ldn-decks-manassas/i,
  },
  {
    label: 'old Manassas BBB profile',
    pattern: /bbb\.org\/us\/va\/manassas\/profile\/deck-builder\/ldn-decks/i,
  },
  {
    label: 'singular Loudoun Chamber URL',
    pattern: /business\.loudounchamber\.org\/list\/member\/loudoun-deck-30047\.htm/i,
  },
  {
    label: 'non-canonical deck-replacement profile URL',
    pattern: /ldndecks\.com\/deck-replacement(?![a-z0-9/-])/i,
  },
];

function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function extractSameAs() {
  const source = read(path.join(root, 'src/lib/business.js'));
  const block = source.match(/sameAs:\s*\[([\s\S]+?)\],/);
  if (!block) return [];
  return [...block[1].matchAll(/['"]([^'"]+)['"]/g)].map((match) => match[1]);
}

function readProofSnippets() {
  const file = path.join(root, 'src/data/verifiedProofSnippets.json');
  if (!fs.existsSync(file)) return [];
  const json = JSON.parse(read(file));
  return (json.snippets || []).filter((snippet) => snippet.type === 'public_review_source');
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === 'output') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (/\.(js|jsx|ts|tsx|mjs|json)$/.test(entry.name)) {
      out.push(full);
    }
  }
  return out;
}

function lineNumber(text, index) {
  return text.slice(0, index).split('\n').length;
}

function isAllowedForbiddenSignalReference(file, text, index) {
  if (path.relative(root, file) !== 'scripts/seo-daily-check.mjs') return false;
  const blockStart = text.indexOf('const forbiddenCitationSignals = [');
  if (blockStart === -1 || index < blockStart) return false;
  const blockEnd = text.indexOf('];', blockStart);
  return blockEnd !== -1 && index < blockEnd;
}

function scanForbiddenPatterns() {
  const files = [
    ...walk(path.join(root, 'src')),
    ...walk(path.join(root, 'scripts')),
  ];
  const findings = [];
  for (const file of files) {
    const text = read(file);
    for (const item of forbiddenPublicPatterns) {
      const match = text.match(item.pattern);
      if (match?.index != null) {
        if (isAllowedForbiddenSignalReference(file, text, match.index)) continue;
        findings.push({
          file: path.relative(root, file),
          line: lineNumber(text, match.index),
          label: item.label,
          match: match[0],
        });
      }
    }
  }
  return findings;
}

function renderMarkdown(result) {
  const lines = [
    '# Entity Profile Consistency',
    '',
    `Date: ${result.date}`,
    `Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `Canonical profiles: ${result.canonicalProfiles.length}`,
    `sameAs URLs: ${result.sameAs.length}`,
    `Review/profile proof snippets: ${result.proofSnippetUrls.length}`,
    `Errors: ${result.errors.length}`,
    `Warnings: ${result.warnings.length}`,
    '',
    '## Canonical Profiles',
    '',
    '| Profile | Canonical URL | sameAs | Proof snippet | Daily signal |',
    '|---|---|---|---|---|',
    ...result.canonicalProfiles.map((profile) =>
      `| ${profile.label} | ${profile.url} | ${profile.inSameAs ? 'OK' : 'MISSING'} | ${profile.requiredInProofSnippets ? (profile.inProofSnippets ? 'OK' : 'MISSING') : 'n/a'} | ${profile.inDailyCheck ? 'OK' : 'MISSING'} |`,
    ),
    '',
    '## Forbidden Public Source Findings',
    '',
    ...(result.forbiddenFindings.length
      ? result.forbiddenFindings.map((finding) => `- ${finding.file}:${finding.line} ${finding.label}: ${finding.match}`)
      : ['- None']),
    '',
    '## Errors',
    '',
    ...(result.errors.length ? result.errors.map((item) => `- ${item}`) : ['- None']),
    '',
    '## Warnings',
    '',
    ...(result.warnings.length ? result.warnings.map((item) => `- ${item}`) : ['- None']),
    '',
  ];
  return lines.join('\n');
}

function main() {
  const errors = [];
  const warnings = [];
  const sameAs = extractSameAs();
  const proofSnippets = readProofSnippets();
  const proofSnippetUrls = proofSnippets.map((snippet) => snippet.url);
  const dailyCheckSource = read(path.join(root, 'scripts/seo-daily-check.mjs'));
  const sameAsSet = new Set(sameAs);
  const proofSnippetSet = new Set(proofSnippetUrls);
  const forbiddenFindings = scanForbiddenPatterns();

  const profileResults = canonicalProfiles.map((profile) => {
    const inSameAs = sameAsSet.has(profile.url);
    const inProofSnippets = proofSnippetSet.has(profile.url);
    const inDailyCheck = dailyCheckSource.includes(profile.dailySignal);

    if (profile.requiredInSameAs && !inSameAs) {
      errors.push(`${profile.label} canonical URL missing from BUSINESS.sameAs: ${profile.url}`);
    }
    if (profile.requiredInProofSnippets && !inProofSnippets) {
      errors.push(`${profile.label} canonical URL missing from verified proof snippets: ${profile.url}`);
    }
    if (!inDailyCheck) {
      warnings.push(`${profile.label} canonical signal missing from seo-daily-check expected citation signals: ${profile.dailySignal}`);
    }

    return { ...profile, inSameAs, inProofSnippets, inDailyCheck };
  });

  for (const finding of forbiddenFindings) {
    errors.push(`Forbidden public source URL found in ${finding.file}:${finding.line} (${finding.label})`);
  }

  const duplicateSameAs = sameAs.filter((url, index) => sameAs.indexOf(url) !== index);
  if (duplicateSameAs.length) errors.push(`Duplicate BUSINESS.sameAs URLs: ${[...new Set(duplicateSameAs)].join(', ')}`);

  const result = {
    ok: errors.length === 0,
    date: stamp,
    canonicalProfiles: profileResults,
    sameAs,
    proofSnippetUrls,
    forbiddenFindings,
    errors,
    warnings,
    outputs: { jsonOut, mdOut },
  };

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(jsonOut, `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(mdOut, renderMarkdown(result));

  console.log(JSON.stringify({
    ok: result.ok,
    canonicalProfiles: result.canonicalProfiles.length,
    sameAs: result.sameAs.length,
    proofSnippetUrls: result.proofSnippetUrls.length,
    errors: result.errors.length,
    warnings: result.warnings.length,
    json: jsonOut,
    report: mdOut,
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
