#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const today = localDateStamp();
const jsonPath = path.join(ROOT, 'scripts/output', `brainstein-task-packets-${today}.json`);
const reportPath = path.join(ROOT, 'docs/seo', `brainstein-task-packets-${today}.md`);
const csvPath = path.join(ROOT, 'docs/seo', `brainstein-task-packets-${today}.csv`);

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function main() {
  const errors = [];
  assert(fs.existsSync(jsonPath), `Missing task packet JSON: ${path.relative(ROOT, jsonPath)}`, errors);
  assert(fs.existsSync(reportPath), `Missing task packet report: ${path.relative(ROOT, reportPath)}`, errors);
  assert(fs.existsSync(csvPath), `Missing task packet CSV: ${path.relative(ROOT, csvPath)}`, errors);

  const data = fs.existsSync(jsonPath) ? JSON.parse(fs.readFileSync(jsonPath, 'utf8')) : {};
  const report = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, 'utf8') : '';
  const csv = fs.existsSync(csvPath) ? fs.readFileSync(csvPath, 'utf8') : '';
  const records = data.records || [];
  const packetIds = new Set(records.map((record) => record.packet_id));

  assert(data.date === today, `Task packet date must be ${today}, found ${data.date}.`, errors);
  assert(data.packets === 5, `Expected 5 task packets, found ${data.packets}.`, errors);
  assert(data.blockedPagePackets === 3, `Expected 3 blocked-page task packets, found ${data.blockedPagePackets}.`, errors);
  assert(packetIds.has('proof-services-deck-repair'), 'Missing deck repair proof packet.', errors);
  assert(packetIds.has('proof-before-and-after'), 'Missing before/after proof packet.', errors);
  assert(packetIds.has('proof-composite-deck-cost-northern-virginia'), 'Missing composite cost proof packet.', errors);
  assert(packetIds.has('proof-privacy-redaction'), 'Missing privacy redaction packet.', errors);
  assert(packetIds.has('proof-final-dry-run'), 'Missing final dry-run packet.', errors);

  const finalDryRun = records.find((record) => record.packet_id === 'proof-final-dry-run') || {};
  assert(
    finalDryRun.validator?.includes('npm run seo:directory-citations:validate'),
    'Final dry-run packet must include directory citation validation before publish-ready promotion.',
    errors,
  );

  for (const record of records) {
    assert(record.done_criteria?.length >= 80, `${record.packet_id} done criteria is too short.`, errors);
    assert(record.do_not_do?.includes('Do not'), `${record.packet_id} must include a do-not-do guard.`, errors);
    assert(!/mark(ed)?\s+.*verified/i.test(JSON.stringify(record)), `${record.packet_id} must not instruct verified promotion during collection.`, errors);
    assert(!/invent/i.test(record.task || ''), `${record.packet_id} task wording must not suggest invention.`, errors);
  }

  for (const phrase of [
    'Original owner evidence only',
    'Unknown fields remain partial',
    'No project, cost, warranty, review, credential, permit, date, or technician detail may be invented',
    'No blocked proof page is promoted',
  ]) {
    assert(report.includes(phrase), `Report missing proof-safety rule: ${phrase}`, errors);
  }

  for (const header of ['packet_id', 'owner', 'reviewer', 'page', 'priority', 'task', 'source_of_truth', 'evidence_needed', 'done_criteria', 'do_not_do', 'validator']) {
    assert(csv.split('\n')[0]?.includes(header), `CSV missing header: ${header}`, errors);
  }

  const result = {
    ok: errors.length === 0,
    date: today,
    report: path.relative(ROOT, reportPath),
    csv: path.relative(ROOT, csvPath),
    json: path.relative(ROOT, jsonPath),
    packets: data.packets || 0,
    errors,
  };

  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exit(1);
}

main();
