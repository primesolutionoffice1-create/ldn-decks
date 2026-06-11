#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { resolveGbpOpsDir } from './lib/report-paths.mjs';
import { localDateStamp } from './lib/local-date.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const gbpOpsDir = resolveGbpOpsDir(repoRoot);

const calendarPath = path.join(gbpOpsDir, 'post-calendar-90day.md');
const thisWeekPath = path.join(gbpOpsDir, 'this-week.md');
const qaPath = path.join(gbpOpsDir, 'qa-seed-list.md');
const reviewPath = path.join(gbpOpsDir, 'review-response-templates.md');
const outputDir = path.join(repoRoot, 'scripts/output');

const today = new Date();
const stamp = localDateStamp(today);
const jsonOut = path.join(outputDir, `gbp-cadence-validation-${stamp}.json`);
const mdOut = path.join(outputDir, `gbp-cadence-validation-${stamp}.md`);

const PUBLIC_CLAIM_RISKS = [
  /\bcompleted project\b/i,
  /\bcustomer story\b/i,
  /\bverified project\b/i,
  /\b5[- ]?star\b/i,
  /\breview count\b/i,
  /\brated\s+#?1\b/i,
  /\bbest rated\b/i,
  /\bguaranteed\b/i,
  /\bpermit approved\b/i,
  /\bbefore and after\b/i,
  /\bwarranty terms?\b/i,
];

function readRequired(file, label, errors) {
  if (!fs.existsSync(file)) {
    errors.push(`${label} missing: ${file}`);
    return '';
  }
  return fs.readFileSync(file, 'utf8');
}

function parseCalendar(md) {
  const headerRe = /^## Week (\d+) \(Tue ([A-Za-z]+ \d{2}, \d{4})\) — ([A-Z ]+)$/gm;
  const headers = [];
  let match;
  while ((match = headerRe.exec(md)) !== null) {
    headers.push({
      week: Number(match[1]),
      tuesdayLabel: match[2],
      tuesday: new Date(match[2]),
      kind: match[3].trim(),
      idx: match.index,
    });
  }

  return headers.map((header, index) => {
    const end = index + 1 < headers.length ? headers[index + 1].idx : md.length;
    const section = md.slice(header.idx, end);
    const title = (section.match(/^\*\*Title:\*\*\s*(.+)$/m) || [])[1]?.trim() || '';
    const body = (section.match(/\*\*Body:\*\*\s*\n```\n([\s\S]+?)\n```/) || [])[1]?.trim() || '';
    const button = (section.match(/^\*\*Button:\*\*\s*(.+)$/m) || [])[1]?.trim() || '';
    const image = (section.match(/^\*\*Image:\*\*\s*(.+)$/m) || [])[1]?.trim() || '';
    const arrowParts = button.includes('→') ? button.split('→') : button.split('->');
    const buttonText = arrowParts.length === 2 ? arrowParts[0].trim() : '';
    const buttonLink = arrowParts.length === 2 ? arrowParts[1].trim() : '';

    return { ...header, section, title, body, button, buttonText, buttonLink, image };
  });
}

function pickWeek(weeks) {
  const upcoming = weeks
    .filter(week => {
      const diffDays = (week.tuesday - today) / (1000 * 60 * 60 * 24);
      return diffDays >= -2;
    })
    .sort((a, b) => a.tuesday - b.tuesday);
  return upcoming[0] || weeks[weeks.length - 1] || null;
}

function pathExistsForLocalRoute(url) {
  try {
    const parsed = new URL(url);
    if (parsed.origin !== 'https://ldndecks.com') return false;
    const routePath = parsed.pathname.replace(/^\/|\/$/g, '');
    const candidates = routePath
      ? ['page.js', 'page.jsx', 'page.tsx', 'page.ts'].map(file => path.join(repoRoot, 'src/app', routePath, file))
      : ['page.js', 'page.jsx', 'page.tsx', 'page.ts'].map(file => path.join(repoRoot, 'src/app', file));
    return candidates.some(candidate => fs.existsSync(candidate));
  } catch {
    return false;
  }
}

function collectClaimRisks(text) {
  return PUBLIC_CLAIM_RISKS
    .filter(pattern => pattern.test(text))
    .map(pattern => pattern.source);
}

function validateCalendar(weeks, errors, warnings) {
  if (weeks.length !== 12) {
    errors.push(`GBP calendar should contain exactly 12 weeks; found ${weeks.length}.`);
  }

  weeks.forEach((week, index) => {
    const label = `Week ${week.week}`;
    if (week.week !== index + 1) errors.push(`${label} is out of sequence.`);
    if (!week.title) errors.push(`${label} missing title.`);
    if (!week.body) errors.push(`${label} missing body.`);
    if (!week.buttonText) errors.push(`${label} missing button text.`);
    if (!week.buttonLink) errors.push(`${label} missing button link.`);
    if (!week.image) errors.push(`${label} missing image guidance.`);
    if (week.body.length > 1500) errors.push(`${label} body is ${week.body.length} chars, over GBP 1,500 char limit.`);
    if (week.title.length > 58) warnings.push(`${label} title is ${week.title.length} chars; keep GBP titles short.`);
    if (week.kind !== 'EDUCATION SAFE') warnings.push(`${label} kind is "${week.kind}", expected EDUCATION SAFE.`);

    if (week.buttonLink && !week.buttonLink.startsWith('https://ldndecks.com/')) {
      errors.push(`${label} button link is not an ldndecks.com URL: ${week.buttonLink}`);
    } else if (week.buttonLink && !pathExistsForLocalRoute(week.buttonLink)) {
      errors.push(`${label} button link has no matching local app route: ${week.buttonLink}`);
    }

    const risks = collectClaimRisks(`${week.title}\n${week.body}`);
    if (risks.length) errors.push(`${label} public copy contains proof-risk phrase(s): ${risks.join(', ')}`);

    const imageSafe = /\b(owner-approved|verified|neutral branded|branded educational|branded checklist|branded financing|branded material)\b/i.test(week.image);
    if (!imageSafe) warnings.push(`${label} image guidance does not explicitly require verified/owner-approved or neutral branded assets.`);
  });
}

function validateThisWeek(md, selectedWeek, errors, warnings) {
  const frontWeek = Number((md.match(/^auto_generated_for_week:\s*(\d+)$/m) || [])[1]);
  if (!frontWeek) errors.push('this-week.md missing auto_generated_for_week frontmatter.');
  if (selectedWeek && frontWeek && frontWeek !== selectedWeek.week) {
    warnings.push(`this-week.md is generated for Week ${frontWeek}; current cadence selection is Week ${selectedWeek.week}.`);
  }

  if (selectedWeek) {
    if (!md.includes(selectedWeek.title)) errors.push(`this-week.md does not include selected Week ${selectedWeek.week} title.`);
    if (!md.includes(selectedWeek.body)) errors.push(`this-week.md does not include selected Week ${selectedWeek.week} body.`);
    if (!md.includes(selectedWeek.buttonLink)) errors.push(`this-week.md does not include selected Week ${selectedWeek.week} button link.`);
    const countLine = md.match(/\*\*Character count:\*\*\s*(\d+)\s*chars/);
    const renderedCount = countLine ? Number(countLine[1]) : null;
    if (renderedCount === null) errors.push('this-week.md missing character count line.');
    if (renderedCount !== null && renderedCount !== selectedWeek.body.length) {
      errors.push(`this-week.md character count is ${renderedCount}; selected body is ${selectedWeek.body.length}.`);
    }
  }
}

function validateQa(md, errors, warnings) {
  const questions = [...md.matchAll(/^###\s+\d+\.\s+(.+)$/gm)].map(match => match[1].trim());
  if (questions.length < 12) errors.push(`Q&A seed list should contain at least 12 priority questions; found ${questions.length}.`);
  if (!/Do not impersonate customers/i.test(md)) warnings.push('Q&A seed list should explicitly forbid customer impersonation.');
  if (!/Do not include prices unless source-approved/i.test(md)) warnings.push('Q&A use rules should forbid unsourced prices.');
  const risks = collectClaimRisks(md);
  if (risks.length) errors.push(`Q&A seed list contains proof-risk phrase(s): ${risks.join(', ')}`);
}

function validateReviewTemplates(md, errors, warnings) {
  const required = ['5-Star Review', '4-Star Review', '3-Star Review', 'Low-Star Review'];
  required.forEach(header => {
    if (!md.includes(`## ${header}`)) errors.push(`Review templates missing "${header}".`);
  });
  if (!/Do not include addresses/i.test(md)) warnings.push('Review templates should explicitly forbid private addresses/details.');
  if (!/Do not copy review text into website content/i.test(md)) warnings.push('Review templates should forbid copying review text into website content without approval.');
  if (/\bguarantee(d|s)?\b/i.test(md)) errors.push('Review templates contain guarantee language.');
}

function renderMarkdown(result) {
  const lines = [
    '# GBP Cadence Validation',
    '',
    `Date: ${result.date}`,
    `Status: ${result.ok ? 'PASS' : 'FAIL'}`,
    `Calendar weeks: ${result.calendarWeeks}`,
    `Selected week: ${result.selectedWeek ?? 'n/a'}`,
    `Errors: ${result.errors.length}`,
    `Warnings: ${result.warnings.length}`,
    '',
    '## Calendar Link Checks',
    '',
    ...result.links.map(link => `- Week ${link.week}: ${link.url} — ${link.localRouteExists ? 'OK' : 'MISSING'}`),
    '',
    '## Errors',
    '',
    ...(result.errors.length ? result.errors.map(item => `- ${item}`) : ['- None']),
    '',
    '## Warnings',
    '',
    ...(result.warnings.length ? result.warnings.map(item => `- ${item}`) : ['- None']),
    '',
    '## Source Files',
    '',
    `- Calendar: ${calendarPath}`,
    `- This week: ${thisWeekPath}`,
    `- Q&A seeds: ${qaPath}`,
    `- Review templates: ${reviewPath}`,
    '',
  ];
  return lines.join('\n');
}

function main() {
  const errors = [];
  const warnings = [];
  const calendarMd = readRequired(calendarPath, 'GBP calendar', errors);
  const thisWeekMd = readRequired(thisWeekPath, 'GBP this-week file', errors);
  const qaMd = readRequired(qaPath, 'GBP Q&A seed list', errors);
  const reviewMd = readRequired(reviewPath, 'GBP review templates', errors);

  const weeks = calendarMd ? parseCalendar(calendarMd) : [];
  const selectedWeek = pickWeek(weeks);

  if (calendarMd) validateCalendar(weeks, errors, warnings);
  if (thisWeekMd) validateThisWeek(thisWeekMd, selectedWeek, errors, warnings);
  if (qaMd) validateQa(qaMd, errors, warnings);
  if (reviewMd) validateReviewTemplates(reviewMd, errors, warnings);

  const links = weeks.map(week => ({
    week: week.week,
    url: week.buttonLink,
    localRouteExists: Boolean(week.buttonLink && pathExistsForLocalRoute(week.buttonLink)),
  }));

  const result = {
    ok: errors.length === 0,
    date: stamp,
    calendarWeeks: weeks.length,
    selectedWeek: selectedWeek?.week ?? null,
    errors,
    warnings,
    links,
    sources: {
      calendarPath,
      thisWeekPath,
      qaPath,
      reviewPath,
    },
    outputs: {
      jsonOut,
      mdOut,
    },
  };

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(jsonOut, `${JSON.stringify(result, null, 2)}\n`);
  fs.writeFileSync(mdOut, renderMarkdown(result));

  console.log(JSON.stringify({
    ok: result.ok,
    calendarWeeks: result.calendarWeeks,
    selectedWeek: result.selectedWeek,
    errors: errors.length,
    warnings: warnings.length,
    json: jsonOut,
    report: mdOut,
  }, null, 2));

  if (!result.ok) process.exit(1);
}

main();
