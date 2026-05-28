#!/usr/bin/env node
/**
 * GBP this-week generator
 *
 * Reads `wiki/.../gbp/post-calendar-90day.md`, finds the week whose published
 * Tuesday is closest to today (and not in the past unless we've already
 * rolled over), extracts that week's Title/Body/Button/Image, and rewrites
 * `wiki/.../gbp/this-week.md` keeping the existing surrounding scaffold
 * (login + dashboard preamble, Q&A seeds, review-response, cadence footer).
 *
 * The Q&A seeds + review-response sections are NOT rotated by this script —
 * they live in `qa-seed-list.md` and `review-response-templates.md` and are
 * managed manually. This script only swaps the Post block.
 *
 * Invocation:
 *   node scripts/gbp-this-week.mjs                  # rotates to current week
 *   node scripts/gbp-this-week.mjs --week 3         # force a specific week
 *
 * Designed to be run weekly via cron or manually every Monday morning.
 */
import fs from 'node:fs';
import path from 'node:path';

const VAULT_ROOT = '/Users/ldndecks/ldn-decks-growth-brain-vaults/ldn-decks/wiki/deliverables/local-seo-fixes/gbp';
const CALENDAR_PATH = path.join(VAULT_ROOT, 'post-calendar-90day.md');
const THIS_WEEK_PATH = path.join(VAULT_ROOT, 'this-week.md');

function parseArgs() {
  const out = { week: null };
  for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i] === '--week') out.week = Number(process.argv[++i]);
  }
  return out;
}

function parseCalendar(md) {
  const headerRe = /^## Week (\d+) \(Tue ([A-Za-z]+ \d{2}, \d{4})\) — ([A-Z ]+)$/gm;
  const headers = [];
  let m;
  while ((m = headerRe.exec(md)) !== null) {
    headers.push({
      week: Number(m[1]),
      tuesday: new Date(m[2]),
      kind: m[3].trim(),
      idx: m.index,
    });
  }
  return headers.map((h, i) => {
    const start = h.idx;
    const end = i + 1 < headers.length ? headers[i + 1].idx : md.length;
    const section = md.slice(start, end);
    return { ...h, section };
  });
}

function extractWeekBlock(section) {
  const title = (section.match(/^\*\*Title:\*\*\s*(.+)$/m) || [])[1] || '';
  const body = (section.match(/\*\*Body:\*\*\s*\n```\n([\s\S]+?)\n```/) || [])[1] || '';
  const buttonLine = (section.match(/^\*\*Button:\*\*\s*(.+)$/m) || [])[1] || '';
  const image = (section.match(/^\*\*Image:\*\*\s*(.+)$/m) || [])[1] || '';
  let buttonText = '';
  let buttonLink = '';
  const arrow = buttonLine.split('→');
  if (arrow.length === 2) {
    buttonText = arrow[0].trim();
    buttonLink = arrow[1].trim();
  }
  return { title, body, buttonText, buttonLink, image };
}

function pickWeek(weeks, forced) {
  if (forced) return weeks.find(w => w.week === forced);
  const now = new Date();
  const upcoming = weeks
    .filter(w => {
      const diff = (w.tuesday - now) / (1000 * 60 * 60 * 24);
      return diff >= -2;
    })
    .sort((a, b) => a.tuesday - b.tuesday);
  return upcoming[0] || weeks[weeks.length - 1];
}

function fmtDate(d) {
  return d.toISOString().slice(0, 10);
}

function renderThisWeek(week, blk) {
  const today = new Date();
  const front = [
    '---',
    'type: deliverable',
    'title: "GBP This Week — Copy-Paste Ready"',
    'created: 2026-05-27',
    `updated: ${fmtDate(today)}`,
    'status: ready-to-publish-this-week',
    'owner: Nicolae Zugrav',
    'parent: "[[GBP Optimization Playbook]]"',
    'priority: HIGH',
    'tags: [gbp, this-week, copy-paste, weekly-cadence]',
    `auto_generated_for_week: ${week.week}`,
    '---',
  ].join('\n');

  return `${front}

# GBP This Week — Copy-Paste Ready

> Auto-rotated from \`post-calendar-90day.md\` Week ${week.week} (${week.kind}) — Tuesday ${week.tuesday.toDateString()}.
>
> Open Monday morning. Open the GBP dashboard in one tab, this file in another, paste. Friction target: under 5 minutes.

## Login + dashboard

**URL:** [business.google.com](https://business.google.com)
**Account:** the Google account that owns the Loudoun Decks GBP listing
**Time required:** 5 minutes

---

## ☐ POST FOR THIS WEEK — ${week.kind}

**Where to paste:** GBP Dashboard → Posts → "+ Create post" → "What's new"

### Title (paste exactly)

\`\`\`
${blk.title}
\`\`\`

### Body (paste exactly)

\`\`\`
${blk.body}
\`\`\`

**Character count:** ${blk.body.length} chars (Google max: 1,500). ${blk.body.length <= 1500 ? '✓' : '⚠ OVER LIMIT'}

### Button (select from GBP dropdown)

- **Type:** ${blk.buttonText ? `"${blk.buttonText}"` : '"Learn more"'}
- **Link:** \`${blk.buttonLink}\`

### Image

${blk.image}

**Pre-upload step:** confirm the file has been geo-EXIF tagged to the relevant NoVA location and IPTC-captioned with the project city + "Loudoun Decks".

---

## ☐ Q&A SEEDS — see [[qa-seed-list]]

Pick the top 3 priority questions you haven't seeded yet. Workflow: ask from a personal Gmail account → answer as Loudoun Decks owner from the business account.

---

## ☐ REVIEW RESPONSE — only if a new review arrived this week

**Where to check:** GBP Dashboard → Reviews tab. Look for any review without a response.

**If a new review:** open [[review-response-templates]] and pick the matching template (5-star vs 4-star vs 3-star vs lower). Customize customer name + project type, then paste.

**General rule:** respond to every review within 48 hours.

---

## ☐ AFTER PUBLISHING — log what you did

Update the tracker in [[wiki/deliverables/local-seo-fixes/execution-blockers|execution-blockers]] OR mark this week as done in [[wiki/deliverables/local-seo-fixes/dominance-scorecard|dominance-scorecard]].

### Self-check (60 seconds)

- [ ] Post is live and visible in the GBP card
- [ ] Q&A seeds visible in the "Questions and answers" section
- [ ] Review response (if any) is posted
- [ ] No typos in name, business name, or phone number

---

## Next week — automated pivot

Run \`node scripts/gbp-this-week.mjs\` on Monday morning. It re-reads \`post-calendar-90day.md\` and rewrites this file to the next week's content.

Related: [[GBP Optimization Playbook]] | [[post-calendar-90day]] | [[qa-seed-list]] | [[review-response-templates]] | [[wiki/deliverables/local-seo-fixes/dominance-scorecard|dominance-scorecard]]
`;
}

function main() {
  const args = parseArgs();
  if (!fs.existsSync(CALENDAR_PATH)) {
    console.error(`Calendar not found: ${CALENDAR_PATH}`);
    process.exit(1);
  }
  const md = fs.readFileSync(CALENDAR_PATH, 'utf8');
  const weeks = parseCalendar(md);
  if (!weeks.length) {
    console.error('No weeks parsed from calendar.');
    process.exit(1);
  }
  const chosen = pickWeek(weeks, args.week);
  if (!chosen) {
    console.error(`Could not select a week (forced=${args.week}).`);
    process.exit(1);
  }
  const blk = extractWeekBlock(chosen.section);
  if (!blk.title || !blk.body) {
    console.error(`Failed to parse Week ${chosen.week} block.`);
    process.exit(1);
  }
  const out = renderThisWeek(chosen, blk);
  fs.writeFileSync(THIS_WEEK_PATH, out);
  console.log(`Wrote ${THIS_WEEK_PATH} for Week ${chosen.week} (${chosen.kind}) — ${chosen.tuesday.toDateString()}`);
}

main();
