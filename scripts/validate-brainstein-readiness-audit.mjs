#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { localDateStamp } from './lib/local-date.mjs';

const ROOT = process.cwd();
const today = localDateStamp();
const jsonPath = path.join(ROOT, 'scripts/output', `brainstein-readiness-audit-${today}.json`);
const reportPath = path.join(ROOT, 'docs/seo', `brainstein-readiness-audit-${today}.md`);

function assert(condition, message, errors) {
  if (!condition) errors.push(message);
}

function main() {
  const errors = [];
  assert(fs.existsSync(jsonPath), `Missing JSON audit: ${path.relative(ROOT, jsonPath)}`, errors);
  assert(fs.existsSync(reportPath), `Missing Markdown audit: ${path.relative(ROOT, reportPath)}`, errors);

  const json = fs.existsSync(jsonPath) ? JSON.parse(fs.readFileSync(jsonPath, 'utf8')) : {};
  const markdown = fs.existsSync(reportPath) ? fs.readFileSync(reportPath, 'utf8') : '';

  assert(json.date === today, `Audit date must be ${today}, found ${json.date}.`, errors);
  assert(json.maturity?.stage === 'domain-adapted', `Current maturity should remain domain-adapted while blocked pages exist, found ${json.maturity?.stage}.`, errors);
  assert(json.maturity?.gate === 'proof-blocked', `Expected proof-blocked gate, found ${json.maturity?.gate}.`, errors);
  assert(json.topBlocker?.id === 'OWNER_EVIDENCE_COLLECTION', 'Top blocker must be owner evidence collection.', errors);
  assert((json.proofSummary?.blocked || 0) === 3, `Expected 3 blocked proof pages, found ${json.proofSummary?.blocked}.`, errors);
  assert((json.proofSummary?.publicPlaceholderFindings || 0) === 0, `Expected 0 public placeholder findings, found ${json.proofSummary?.publicPlaceholderFindings}.`, errors);
  assert(json.proofSummary?.prepublishExpectedBlocked === true, 'Prepublish evidence gate should remain expected-blocked until owner evidence is verified.', errors);
  assert(json.directoryCitationGate?.ok === true, 'Directory citation gate must pass inside Brainstein readiness audit.', errors);
  assert(json.directoryCitationGate?.packetCount === 5, `Expected 5 directory citation packets, found ${json.directoryCitationGate?.packetCount}.`, errors);
  assert((json.directoryCitationGate?.errors || []).length === 0, 'Directory citation gate must report 0 errors.', errors);
  assert((json.directoryCitationGate?.warnings || []).length === 0, 'Directory citation gate must report 0 warnings.', errors);
  assert(Boolean(json.directoryCitationGate?.statusFile), 'Directory citation gate must cite the status file.', errors);
  assert(Boolean(json.directoryCitationGate?.validationReport), 'Directory citation gate must cite the validation report.', errors);
  assert(Boolean(json.sourceFiles?.proofPreflight), 'Audit must cite proof preflight source.', errors);
  assert(Boolean(json.sourceFiles?.ownerEvidenceSprint), 'Audit must cite owner evidence sprint source.', errors);
  assert(Boolean(json.sourceFiles?.directoryCitationValidation), 'Audit must cite directory citation validation source.', errors);

  for (const heading of ['## Brainstein Maturity', '## Evidence Gate', '## Directory Citation Gate', '## Top Blocker', '## Blocked Pages', '## Next Actions', '## Publish Rule']) {
    assert(markdown.includes(heading), `Markdown audit missing heading: ${heading}`, errors);
  }

  assert(!/Current stage:\s*market-ready/i.test(markdown), 'Audit must not call the current state market-ready while proof is blocked.', errors);
  assert(!/SSS\+/i.test(markdown), 'Audit must not use SSS+ language without a formal passing Brainstein gate.', errors);
  assert(/Bing, Apple, Nextdoor, and Angi remain proof-gated/i.test(markdown), 'Directory citation section must keep unresolved platforms proof-gated.', errors);
  assert(!/deploy proof-dependent pages as publish-ready/i.test(markdown) || markdown.includes('Do not deploy'), 'Publish rule must remain no-deploy until evidence clears.', errors);

  const result = {
    ok: errors.length === 0,
    date: today,
    report: path.relative(ROOT, reportPath),
    json: path.relative(ROOT, jsonPath),
    maturity: json.maturity,
    topBlocker: json.topBlocker,
    errors,
  };

  console.log(JSON.stringify(result, null, 2));
  if (!result.ok) process.exit(1);
}

main();
