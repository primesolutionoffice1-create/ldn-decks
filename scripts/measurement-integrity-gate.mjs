#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const today = new Date().toISOString().slice(0, 10);
const REPORT_PATH = path.join(ROOT, `docs/ads-tracking/MEASUREMENT-INTEGRITY-GATE-${today}.md`);

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), 'utf8');
}

function exists(rel) {
  return fs.existsSync(path.join(ROOT, rel));
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(path.join(ROOT, dir))) {
    const rel = path.join(dir, entry);
    const abs = path.join(ROOT, rel);
    const stat = fs.statSync(abs);
    if (stat.isDirectory()) {
      walk(rel, files);
    } else if (/\.(js|jsx|ts|tsx)$/.test(entry)) {
      files.push(rel);
    }
  }
  return files;
}

function check(id, label, status, evidence, risk = '') {
  return { id, label, status, evidence, risk };
}

function statusIcon(status) {
  if (status === 'PASS') return '[PASS]';
  if (status === 'WARN') return '[WARN]';
  return '[FAIL]';
}

const layout = read('src/app/layout.js');
const consent = read('src/components/ConsentBanner.jsx');
const tracking = read('src/lib/tracking.js');
const thankYouTracking = read('src/components/ThankYouTracking.jsx');
const callLink = read('src/components/CallLink.jsx');
const proofRuntime = read('src/lib/verifiedProof.js');
const proofData = JSON.parse(read('src/data/verifiedProofSnippets.json'));
const appAndComponents = walk('src/app').concat(walk('src/components'), walk('src/lib'));
const callAttributionRunbookExists = exists('docs/ads-tracking/CALL-ATTRIBUTION-READONLY-RUNBOOK-2026-06-02.md');
const callAttributionEvidencePath = `docs/ads-tracking/live-call-attribution-evidence-${today}.csv`;

function parseCsvLine(line) {
  const values = [];
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
      values.push(field);
      field = '';
    } else {
      field += char;
    }
  }
  values.push(field);
  return values.map((value) => value.trim());
}

function readCallAttributionEvidence() {
  if (!exists(callAttributionEvidencePath)) {
    return { rows: 0, primaryQualifiedRows: 0, activeRows: 0, source: callAttributionEvidencePath };
  }
  const lines = read(callAttributionEvidencePath).split(/\r?\n/).filter(Boolean);
  const [headerLine, ...bodyLines] = lines;
  const headers = parseCsvLine(headerLine || '');
  const rows = bodyLines.map((line) => {
    const values = parseCsvLine(line);
    return Object.fromEntries(headers.map((header, index) => [header, values[index] || '']));
  });
  const primaryQualifiedRows = rows.filter((row) => (
    row.source_system === 'google_ads_conversions'
    && row.conversion_name.toLowerCase().includes('qualified call')
    && row.call_source.toLowerCase().includes('calls from ads')
    && row.primary_status === 'primary'
    && row.count_setting === 'one'
    && Number.parseInt(row.min_call_duration_seconds || '0', 10) >= 60
    && row.phone_click_primary_risk === 'no'
  )).length;
  const activeRows = rows.filter((row) => row.status.toLowerCase().includes('active')).length;
  return { rows: rows.length, primaryQualifiedRows, activeRows, source: callAttributionEvidencePath };
}

const rawTelMatches = appAndComponents
  .filter((rel) => rel !== 'src/components/CallLink.jsx')
  .flatMap((rel) => {
    const source = read(rel);
    return source.includes('tel:') ? [rel] : [];
  });

const consentDefaultIndex = layout.indexOf('id="gtm-consent-defaults"');
const gtmScriptIndex = layout.indexOf('id="gtm-script"');
const proofProjectCount = (proofData?.snippets || []).filter((item) => item.type === 'project_case_study').length;
const reviewSourceCount = (proofData?.snippets || []).filter((item) => item.type === 'public_review_source').length;
const skippedProofCount = (proofData?.skipped || []).length;
const callEvidence = readCallAttributionEvidence();
const hasQualifiedCallEvidence = callEvidence.primaryQualifiedRows > 0 && callEvidence.activeRows > 0;

const checks = [
  check(
    'cmp-banner',
    'Consent banner is mounted globally',
    layout.includes('<ConsentBanner />') && exists('src/components/ConsentBanner.jsx') ? 'PASS' : 'FAIL',
    'Root layout renders ConsentBanner under ContactProvider.'
  ),
  check(
    'consent-mode-default',
    'Consent Mode defaults run before GTM',
    consentDefaultIndex !== -1 && gtmScriptIndex !== -1 && consentDefaultIndex < gtmScriptIndex ? 'PASS' : 'FAIL',
    'gtm-consent-defaults appears before gtm-script in src/app/layout.js.'
  ),
  check(
    'consent-actions',
    'CMP has accept/decline and updates consent state',
    consent.includes("updateConsent('accepted')") && consent.includes("updateConsent('declined')") && consent.includes("gtag('consent', 'update'") ? 'PASS' : 'FAIL',
    'ConsentBanner stores ldn_cookie_consent and updates ad/analytics consent.'
  ),
  check(
    'click-id-capture',
    'Paid click IDs are captured on landing',
    ['gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'].every((key) => layout.includes(key)) && layout.includes('click-id-capture') ? 'PASS' : 'FAIL',
    'beforeInteractive click-id-capture script stores paid IDs in 90-day cookies.'
  ),
  check(
    'raw-tel-scan',
    'Visible phone links route through tracked CallLink',
    rawTelMatches.length === 0 ? 'PASS' : 'FAIL',
    rawTelMatches.length ? rawTelMatches.join(', ') : 'No raw tel: usage outside src/components/CallLink.jsx.',
    rawTelMatches.length ? 'Raw tel links can bypass phone_click tracking.' : ''
  ),
  check(
    'phone-click',
    'Phone click event exists but remains a secondary signal',
    callLink.includes('trackPhoneClick') && tracking.includes("event: 'phone_click'") ? 'PASS' : 'FAIL',
    'CallLink calls trackPhoneClick; tracking.js documents phone_click as vanity/engagement signal.',
    'A click is not proof of a qualified phone call.'
  ),
  check(
    'lead-confirmed',
    'Form lead conversion requires server-confirmed proof token',
    thankYouTracking.includes('/api/lead-confirmation/verify') && tracking.includes("event: 'lead_confirmed'") ? 'PASS' : 'FAIL',
    'ThankYouTracking verifies token before pushing lead_confirmed.'
  ),
  check(
    'lead-dedup',
    'lead_confirmed has source-side anti-replay',
    tracking.includes('leadFiredKey') && tracking.includes('consumeLeadConfirmationPending') && tracking.includes('recordDedupHit') ? 'PASS' : 'FAIL',
    'tracking.js guards lead_confirmed with pending and fired session keys.'
  ),
  check(
    'vapi-call-webhook',
    'Voice AI end-of-call webhook can attach call evidence to CRM',
    exists('src/app/api/vapi/call-completed/route.js') && read('src/app/api/vapi/call-completed/route.js').includes('end-of-call-report') ? 'PASS' : 'FAIL',
    'Vapi call-completed endpoint stores transcript/recording note when GHL credentials and contact match exist.',
    'This is call evidence plumbing, not Google Ads website-call attribution.'
  ),
  check(
    'google-call-attribution',
    'Google Ads qualified call attribution needs external proof',
    hasQualifiedCallEvidence ? 'PASS' : callAttributionRunbookExists && tracking.includes("event: 'phone_click'") ? 'WARN' : 'FAIL',
    hasQualifiedCallEvidence
      ? `Read-only evidence in ${callEvidence.source} shows ${callEvidence.primaryQualifiedRows} active primary qualified call conversion row.`
      : callAttributionRunbookExists
        ? 'Website-side phone clicks are tracked as secondary events and a read-only Google Ads/GTM evidence runbook exists.'
      : 'No local evidence proves Google Ads website call forwarding numbers or qualified-call conversion diagnostics are configured.',
    hasQualifiedCallEvidence ? 'Diagnostics tab was not separately captured; keep monitoring before aggressive scaling.' : 'Owner/GTM/Google Ads evidence is still required before call conversions can be used for scaling.'
  ),
  check(
    'verified-proof-runtime',
    'Verified proof runtime is guarded against unverified case studies',
    proofRuntime.includes('getVerifiedProjectProofSnippets') && proofProjectCount === 0 ? 'PASS' : 'WARN',
    `Verified project case studies: ${proofProjectCount}; public review sources: ${reviewSourceCount}; skipped owner-evidence records: ${skippedProofCount}.`,
    proofProjectCount === 0 ? 'Lead quality proof remains missing until owner evidence is verified.' : ''
  ),
];

const failed = checks.filter((item) => item.status === 'FAIL');
const warned = checks.filter((item) => item.status === 'WARN');
const scalingGate =
  failed.length > 0 || proofProjectCount === 0 || warned.some((item) => item.id === 'google-call-attribution')
    ? 'RED'
    : 'GREEN';

const report = `# Measurement Integrity Gate - ${today}

## Result

- Scaling gate: ${scalingGate}
- Checks: ${checks.length}
- Pass: ${checks.filter((item) => item.status === 'PASS').length}
- Warn: ${warned.length}
- Fail: ${failed.length}

## Checks

${checks.map((item) => `- ${statusIcon(item.status)} ${item.label}
  - Evidence: ${item.evidence}${item.risk ? `
  - Risk: ${item.risk}` : ''}`).join('\n')}

## Readiness Assessment

The website-side form attribution layer is strong enough for controlled reporting: click IDs are captured, Consent Mode defaults precede GTM, the CMP can grant or deny optional tracking, and the authoritative form event is server-confirmed before \`lead_confirmed\` fires.

The account is not ready for aggressive scaling because verified project lead-quality proof is still missing and offline/upload eligibility is not complete. \`phone_click\` should stay secondary/observational; the current qualified call evidence supports controlled reporting but not full Smart Bidding scale by itself.

## Next Actions

- Verify Google Ads call conversion action status, source, counting, and diagnostic history in read-only mode.
- Confirm website call forwarding or call asset attribution is active for the canonical phone number.
- Collect 5-10 real leads with outcome notes and compare CRM lead quality against Ads conversions.
- Add owner-verified project proof packets before using project case studies as trust proof.
`;

fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
fs.writeFileSync(REPORT_PATH, report);

console.log(JSON.stringify({
  ok: failed.length === 0,
  scalingGate,
  checks: checks.length,
  pass: checks.filter((item) => item.status === 'PASS').length,
  warn: warned.length,
  fail: failed.length,
  failed: failed.map((item) => item.id),
  report: REPORT_PATH,
}, null, 2));
