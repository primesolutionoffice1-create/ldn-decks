import React from 'react';
import Link from 'next/link';
import { BUSINESS } from '@/lib/business';

// Operations Dashboard — internal-only growth control surface.
// no-indexed (robots: noindex), no schema, no AI-search exposure.
// Bookmark this page (https://ldndecks.com/admin/operations) and use it
// weekly to drive the operational items that compound entity trust +
// rankings outside of the website code itself.
//
// Content is hard-coded in the file (not from a DB) so editing the
// dashboard is the same workflow as editing any other page in the repo.

export const metadata = {
  title: 'Operations Dashboard — Internal',
  description: 'Internal operations dashboard for weekly growth execution. Not for public consumption.',
  robots: { index: false, follow: false, nocache: true },
};

const OPERATIONS_TIME_ZONE = 'America/New_York';

function operationsDateStamp(date = new Date()) {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: OPERATIONS_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

const TIER1_ACTIONS = [
  {
    id: 'gbp-weekly',
    title: 'GBP weekly post + 3 Q&A',
    cadence: 'Every Monday',
    timeMinutes: 5,
    leverage: 'Highest sustained ROI in the entire growth plan. 12-week cadence shifts GBP score 15-25%.',
    ready: 'THIS WEEK packet ready: wiki/deliverables/local-seo-fixes/gbp/this-week.md (copy-paste ready, 5-min execution)',
    nextStep: 'Open wiki/.../gbp/this-week.md → login business.google.com → paste post + 3 Q&A',
    status: 'awaiting-execution',
  },
  {
    id: 'houzz-ashburn-fix',
    title: 'Reconcile Houzz Pro address',
    cadence: 'One-time',
    timeMinutes: 5,
    leverage: 'Closes the single remaining cross-platform NAP inconsistency. Citation-trust composite jumps 7.0 → 8.5/10.',
    ready: 'See wiki/deliverables/local-seo-fixes/citation-live-state-audit.md',
    nextStep: 'Login Houzz Pro → Edit profile → change street to 13704 Winding Oak Cir, Centreville, VA 20121',
    status: 'awaiting-execution',
  },
  {
    id: 'review-automation',
    title: 'Activate review automation',
    cadence: 'One-time setup',
    timeMinutes: 90,
    leverage: 'Lifts review velocity from 2-3/mo to 5-7/mo within 60 days. Compounds permanently.',
    ready: 'See wiki/deliverables/local-seo-fixes/reviews/Review Automation Spec.md',
    nextStep: 'Decide Jobber built-in vs NiceVoice → wire webhook → activate trigger at project completion',
    status: 'awaiting-decision',
  },
  {
    id: 'measurement-quality-rows',
    title: 'Complete lead/call quality proof rows',
    cadence: 'One-time gate, then weekly',
    timeMinutes: 45,
    leverage: 'Closes the measurement proof gap that keeps paid scaling red. Gives Smart Bidding a quality filter instead of raw lead volume.',
    ready: 'Measurement integrity report + lead outcome validator + current owner evidence action packet',
    nextStep: 'Verify Google Ads qualified-call attribution, add at least five real lead outcome rows from CRM/Jobber/call notes, run npm run measurement:lead-outcomes, then rerun npm run measurement:gate.',
    status: 'awaiting-execution',
  },
  {
    id: 'crux-api-key',
    title: 'Enable CrUX API key',
    cadence: 'One-time',
    timeMinutes: 5,
    leverage: 'Unblocks Core Web Vitals field-data tracking. Closes the audit data gap.',
    ready: 'Free at console.cloud.google.com — enable Chrome UX Report API + create credential',
    nextStep: 'Google Cloud Console → APIs → enable CrUX → create credential → paste into .env.local',
    status: 'awaiting-execution',
  },
  {
    id: 'loudoun-proximity',
    title: 'Loudoun proximity decision (A/B/C/D)',
    cadence: 'One-time strategic',
    timeMinutes: 10,
    leverage: 'Single largest move in the entire growth plan. Option A → +60-120% Loudoun map-pack lift. 12-month revenue lift estimate: $300K-$800K.',
    ready: '1-pager decision memo ready: wiki/.../proximity/decision-memo.md (decision tree + recommendation + cost analysis side-by-side)',
    nextStep: 'Open wiki/.../proximity/decision-memo.md → read 10 min → write your A/B/C/D answer at bottom + commit',
    status: 'awaiting-decision',
  },
];

const WEEK1_OUTREACH = [
  { name: 'Send PR pitch — Loudoun Now', file: 'wiki/.../outreach-pack/01-pr-pitches.md', section: 'Pitch 1' },
  { name: 'Send PR pitch — Patch Ashburn', file: 'wiki/.../outreach-pack/01-pr-pitches.md', section: 'Pitch 2' },
  { name: 'Send PR pitch — Patch Leesburg', file: 'wiki/.../outreach-pack/01-pr-pitches.md', section: 'Pitch 2' },
  { name: 'Send PR pitch — NoVA Magazine', file: 'wiki/.../outreach-pack/01-pr-pitches.md', section: 'Pitch 3' },
  { name: 'Send PR pitch — Washingtonian', file: 'wiki/.../outreach-pack/01-pr-pitches.md', section: 'Pitch 4' },
  { name: 'Verify Trex Pro Locator listing', file: 'wiki/.../outreach-pack/04-manufacturer-verifications.md', section: 'Verification 1' },
  { name: 'Verify TimberTech Pro Locator listing', file: 'wiki/.../outreach-pack/04-manufacturer-verifications.md', section: 'Verification 2' },
  { name: 'Verify NADRA member directory', file: 'wiki/.../outreach-pack/04-manufacturer-verifications.md', section: 'Verification 3' },
];

const WEEK2_OUTREACH = [
  { name: 'Send HOA pitch — Lansdowne', file: 'wiki/.../outreach-pack/02-hoa-newsletter-outreach.md', section: 'Email 1' },
  { name: 'Send HOA pitch — One Loudoun', file: 'wiki/.../outreach-pack/02-hoa-newsletter-outreach.md', section: 'Email 2' },
  { name: 'Send HOA pitch — Stone Ridge', file: 'wiki/.../outreach-pack/02-hoa-newsletter-outreach.md', section: 'Email 3' },
  { name: 'Send HOA pitch — Belmont Country Club', file: 'wiki/.../outreach-pack/02-hoa-newsletter-outreach.md', section: 'Email 4' },
];

const WEEK3_OUTREACH = [
  'Send scholarship pitch — NVCC Loudoun',
  'Send scholarship pitch — NVCC Annandale',
  'Send scholarship pitch — NVCC Manassas',
  'Send scholarship pitch — NVCC Alexandria',
  'Send scholarship pitch — NVCC Woodbridge',
  'Send scholarship pitch — George Mason University',
  'Send scholarship pitch — Marymount University',
  'Send scholarship pitch — Strayer University',
  'Send scholarship pitch — Loudoun County Public Schools CTE',
  'Send scholarship pitch — Fairfax County Public Schools Academies',
];

const KPI_TARGETS = [
  { kpi: 'Google reviews count', current: BUSINESS.aggregateRating.reviewCount, target30: '53', target90: '60+', target365: '100+' },
  { kpi: 'Composite authority score', current: '~85', target30: '87', target90: '90', target365: '93+' },
  { kpi: 'GBP weekly post cadence', current: '0', target30: '4', target90: '12', target365: '52' },
  { kpi: 'Manufacturer locator verifications', current: 'unconfirmed', target30: '3 verified', target90: '3 maintained', target365: '3 maintained' },
  { kpi: 'PR placements with backlinks', current: '0', target30: '0', target90: '2-4', target365: '8-15' },
  { kpi: 'HOA newsletter placements', current: '0', target30: '0', target90: '1-2', target365: '4-6' },
  { kpi: '.edu / .k12 scholarship listings', current: '0', target30: '0', target90: '6-10', target365: '10-15' },
  { kpi: 'Review velocity (per month)', current: '~2-3', target30: '3-4', target90: '5-7', target365: '5-8 sustained' },
];

const TECHNICAL_GATES = [
  {
    area: 'Website + lead routing',
    status: 'active',
    evidence: 'Production site, email backup, Sheets backup, and estimate form routing verified.',
    nextStep: 'Keep weekly form-submit smoke test in the operating cadence.',
  },
  {
    area: 'Consent / CMP',
    status: 'active',
    evidence: 'Consent banner and Consent Mode defaults are live; optional pixels load only after accepted consent.',
    nextStep: 'Monitor consent acceptance rate after traffic volume grows.',
  },
  {
    area: 'Lead quality proof',
    status: 'partial',
    evidence: 'Measurement gate passes website-side form proof; lead outcome CSV validation is available, but verified project case studies are still 0 and real lead outcome rows are missing.',
    nextStep: 'Use the current owner evidence action packet, measurement integrity gate report, and npm run measurement:lead-outcomes to complete owner proof and validate lead outcomes.',
  },
  {
    area: 'Vapi webhook secret',
    status: 'active',
    evidence: 'Vercel production/development secret is set and automation stack verification passes.',
    nextStep: 'Confirm the same secret is configured in the Vapi dashboard.',
  },
  {
    area: 'Phone click attribution',
    status: 'partial',
    evidence: 'All site phone links now route through CallLink and push event_id, UTMs, and click IDs.',
    nextStep: 'Configure answered-call attribution through Google forwarding numbers, CallRail, or another call-tracking provider.',
  },
  {
    area: 'DataForSEO',
    status: 'partial',
    evidence: 'Payload fallback deployed for 40501 Invalid Field errors on optional filters/location_code. Admin/API remain protected by 401 without a session.',
    nextStep: 'If the DataForSEO UI still shows 40501, capture the task metadata; if it shows 401, replace API Login/API Password and rerun admin SEO checks.',
  },
  {
    area: 'Scaling gate',
    status: 'red',
    evidence: 'Measurement gate result: 10 PASS, 1 WARN, 0 FAIL. The remaining warning is external Google Ads/GTM qualified-call attribution proof.',
    nextStep: 'Do not scale aggressively until qualified-call attribution and 5-10 real lead outcomes validate with npm run measurement:lead-outcomes.',
  },
];

function proofPaths(date) {
  return {
    actionPacket: `docs/seo/owner-evidence-action-packet-${date}.csv`,
    directoryCitationStatus: `docs/seo/directory-citation-status-${date}.md`,
    directoryCitationValidation: `scripts/output/directory-citation-packet-validation-${date}.md`,
    photoManifest: `docs/seo/photo-ingestion-manifest-${date}.csv`,
    projectIntake: `docs/seo/project-evidence-intake-${date}.csv`,
    warrantyIntake: `docs/seo/warranty-terms-intake-${date}.csv`,
    repairCostIntake: `docs/seo/repair-cost-ranges-intake-${date}.csv`,
    handoff: `docs/seo/owner-evidence-handoff-${date}.md`,
    sprintReport: `docs/seo/owner-evidence-sprint-${date}.md`,
    sprintCsv: `docs/seo/owner-evidence-sprint-${date}.csv`,
    unblockRunbook: `docs/seo/evidence-unblock-runbook-${date}.md`,
    proofChecklist: `docs/seo/proof-source-checklist-${date}.md`,
  };
}

function directoryCitationGate(paths) {
  return {
    command: 'npm run seo:directory-citations:validate',
    statusFile: paths.directoryCitationStatus,
    validationReport: paths.directoryCitationValidation,
    nadraProfileUrl: 'https://www.nadra.org/membership/directory#!biz/id/69f274b54078d1282501ee3b',
    platforms: [
      'NADRA directory',
      'Bing Places',
      'Apple Business Connect',
      'Nextdoor',
      'Angi',
    ],
    nadraProfileAffordance: 'Profile link affordance is present in the current proof gate; original/NADRA-approved logo asset is still owner-needed before replacing the text badge.',
    rule: 'Only NADRA is currently allowed in organization sameAs from this batch. Bing, Apple, Nextdoor, and Angi stay proof-gated until screenshots/admin proof confirm canonical public identity.',
  };
}

function ownerEvidenceSprint(paths) {
  return {
    report: paths.sprintReport,
    csv: paths.sprintCsv,
    command: 'npm run seo:evidence-sprint',
    blocks: [
      'Repair media',
      'Commercial proof',
      'Project linkage',
      'Privacy pass',
      'Dry-run pass',
    ],
  };
}

function proofSourceWorkflow(paths) {
  return [
    {
      step: '1. Capture original photos',
      ownerAction: 'Collect original files for ledger failure, post rot, stair rebuild, railing repair, resurfacing before/after, joist sistering, and optional redacted permit/inspection proof.',
      sourceFile: paths.photoManifest,
      gate: 'No stock imagery. No public caption unless the photo is tied to a real project row.',
    },
    {
      step: '2. Complete project rows',
      ownerAction: 'Fill city/neighborhood, month/year, scope, materials, failure found, work performed, permit/HOA status, and before/after paths where known.',
      sourceFile: paths.projectIntake,
      gate: 'Unknown fields stay unknown. Do not promote rows to verified while placeholders remain.',
    },
    {
      step: '3. Verify repair warranty wording',
      ownerAction: 'Enter the exact workmanship warranty term, scope, exclusions, and whether structural/labor/resurfacing coverage differs.',
      sourceFile: paths.warrantyIntake,
      gate: 'Do not publish warranty duration or scope from memory.',
    },
    {
      step: '4. Verify repair cost ranges',
      ownerAction: 'Fill low/high/source for joist sistering, ledger reflash/rebolt, post replacement, and emergency stabilization from invoices, accepted estimates, calculator data, or owner-approved pricing policy.',
      sourceFile: paths.repairCostIntake,
      gate: 'No public repair cost range without a source and evidence status.',
    },
    {
      step: '5. Dry-run, then promote',
      ownerAction: 'Run dry-runs first. Promote to verified only after source review, then regenerate proof snippets and rerun prepublish evidence.',
      sourceFile: paths.handoff,
      gate: 'Prepublish must fail until every red proof blocker is actually resolved.',
    },
  ];
}

const PROOF_BLOCKERS = [
  { page: '/before-and-after', verdict: 'blocked', issue: '2 missing evidence items; 4 partial project records; no verified project proof snippets.' },
  { page: '/composite-deck-cost-northern-virginia', verdict: 'blocked', issue: '1 missing evidence item before project examples can become proof-backed.' },
  { page: '/services/deck-repair', verdict: 'blocked', issue: 'No verified repair warranty term, no verified repair cost ranges, and missing repair photos.' },
  { page: '/showcase', verdict: 'proof-incomplete', issue: '6 partial showcase records; verify photos, scope, city, date, and completion details before proof use.' },
];

function gbpMapsReportPath(date) {
  return `docs/seo/gbp-maps-proof-ops-board-${date}.md`;
}

const GBP_MAPS_PRIORITY_ACTIONS = [
  {
    priority: 'P0',
    lane: 'GBP identity',
    action: 'Verify GBP public identity matches canonical NAP.',
    evidence: 'Screenshot showing Loudoun Decks, 13704 Winding Oak Cir, Centreville, VA 20121, and +15716557207.',
    rule: 'Do not claim live GBP profile status from memory.',
  },
  {
    priority: 'P0',
    lane: 'GBP photos',
    action: 'Upload original project photos tied to evidence-ledger priorities.',
    evidence: 'Original files with city, month/year, project linkage, and publication permission where available.',
    rule: 'No stock imagery and no project captions unless linked to a real project row.',
  },
  {
    priority: 'P0',
    lane: 'Citation cleanup',
    action: 'Escalate BuildZoom license verification mismatch.',
    evidence: 'Corrected public profile or support-thread screenshot.',
    rule: 'Do not claim the listing is fixed until the live public profile reflects it.',
  },
  {
    priority: 'P0',
    lane: 'Citation cleanup',
    action: 'Resolve Facebook NAP/name conflict or old Prime Solutions/Ashburn variant.',
    evidence: 'Before/after screenshot or public URL showing corrected public identity.',
    rule: 'Keep the canonical entity clean before adding new citations.',
  },
  {
    priority: 'P1',
    lane: 'GBP cadence',
    action: 'Publish one weekly education-safe GBP post and seed/refine owner-controlled Q&A.',
    evidence: 'Published post screenshot or GBP post URL plus Q&A screenshot.',
    rule: 'Do not impersonate customers or fabricate customer questions.',
  },
  {
    priority: 'P1',
    lane: 'Directories',
    action: 'Claim or complete Apple Business Connect, Bing Places, Trex, and TimberTech/AZEK profiles.',
    evidence: 'Live profile URL, claim status, NAP screenshot, and target service URL used.',
    rule: 'Use canonical NAP and truthful services only.',
  },
  {
    priority: 'P1',
    lane: 'Reviews',
    action: 'Respond promptly to all new Google reviews and log reusable review-source evidence.',
    evidence: 'Owner response screenshot or dashboard status.',
    rule: 'Do not copy review excerpts into site content until source is logged.',
  },
];

const GBP_WEEKLY_CADENCE = [
  'Monday: run npm run gbp:this-week, choose an education-safe or verified-project GBP post, and publish manually.',
  'Tuesday: upload original project photos tied to the evidence ledger; skip stock photos.',
  'Wednesday: review GBP Q&A, services, categories, and unanswered questions.',
  'Thursday: respond to new reviews and log any reusable public review source before surfacing it on site.',
  'Friday: update citation cleanup statuses and attach screenshots or URLs to the owner evidence packet.',
];

function proofUnblockRunbook(paths) {
  return {
    report: paths.unblockRunbook,
    checklist: paths.proofChecklist,
    command: 'npm run seo:evidence-unblock -- --date latest',
    ownerRows: 26,
    photoRows: 17,
    warrantyRows: 1,
    repairCostRows: 4,
    currentGate: '0 publish-ready, 1 proof-incomplete, 3 blocked',
  };
}

function proofPreflightCommands(paths) {
  return [
    'npm run seo:evidence-unblock -- --date latest',
    'npm run seo:evidence-sprint',
    'npm run seo:evidence-sprint:validate',
    'npm run seo:evidence-action-packet',
    'npm run seo:evidence-action-packet:validate',
    'npm run seo:validate-owner-intake',
    'npm run seo:directory-citations:validate',
    'npm run seo:proof-source-checklist:validate',
    'npm run seo:proof-ops-board:validate',
    `npm run seo:ingest-assets -- --file ${paths.photoManifest} --preflight`,
    `npm run seo:ingest-assets -- --file ${paths.photoManifest} --dry-run`,
    `npm run seo:import-evidence -- --type warranty_terms --file ${paths.warrantyIntake} --dry-run`,
    `npm run seo:import-evidence -- --type repair_cost_ranges --file ${paths.repairCostIntake} --dry-run`,
    `npm run seo:import-evidence -- --type projects --file ${paths.projectIntake} --dry-run`,
  ];
}

function proofPromoteCommands(paths) {
  return [
    `npm run seo:ingest-assets -- --file ${paths.photoManifest} --allow-verified`,
    `npm run seo:import-evidence -- --type warranty_terms --file ${paths.warrantyIntake} --allow-verified`,
    `npm run seo:import-evidence -- --type repair_cost_ranges --file ${paths.repairCostIntake} --allow-verified`,
    `npm run seo:import-evidence -- --type projects --file ${paths.projectIntake} --allow-verified`,
  ];
}

const PROOF_FINAL_GATE_COMMANDS = [
  'npm run seo:validate-evidence',
  'npm run seo:directory-citations:validate',
  'npm run seo:proof-snippets',
  'npm run seo:validate-proof-runtime',
  'npm run seo:audit-placeholders',
  'npm run seo:prepublish-evidence',
  'npm run seo:evidence-regression',
  'npm run seo:validate-schema',
  'npm run build',
];

const PROOF_MINIMUM_PACKET = [
  'City/county and month/year are filled without full address exposure.',
  'Scope, materials, failure found, and work performed are concrete source-reviewed fields.',
  'Permit/HOA status is documented or explicitly left unknown.',
  'Before/after paths resolve after ingest and publication permission is confirmed.',
  'Warranty, cost, review count, and permit outcomes are not quoted unless source verified.',
];

const RECENT_VERIFIED_BATCHES = [
  {
    name: 'RelatedGuides deck-core cleanup',
    deployment: 'dpl_HjTJ1FRWyjgHB8HYuk8hm4C4JagU',
    evidence: 'docs/seo/related-guides-deck-core-cleanup-2026-06-02.md',
    result: 'Calculator now shows deck-core budget, permit, material and builder guides.',
  },
  {
    name: 'Deck cost calculator OG asset',
    deployment: 'dpl_4KZ7hyLj2XjeHJXJX4euq46Yaouu',
    evidence: 'docs/seo/deck-cost-calculator-og-asset-2026-06-02.md',
    result: 'Live OG/Twitter image uses /social/deck-cost-calculator-social.png.',
  },
  {
    name: 'DataForSEO error hardening',
    deployment: 'dpl_7LTkbb1ePB7oQysuU9sj5fJB2ic2',
    evidence: 'docs/seo/dataforseo-error-hardening-2026-06-02.md',
    result: 'Local API retries without optional fields if DataForSEO rejects them.',
  },
  {
    name: 'Measurement integrity gate',
    deployment: 'local report',
    evidence: 'docs/ads-tracking/MEASUREMENT-INTEGRITY-GATE-2026-06-02.md',
    result: 'Scaling gate remains RED because qualified call attribution is not proven.',
  },
];

const S = {
  h1: { fontSize: '2rem', fontWeight: 800, margin: '0 0 0.5rem' },
  h2: { fontSize: '1.4rem', fontWeight: 700, margin: '2.5rem 0 1rem', borderBottom: '2px solid var(--color-primary)', paddingBottom: '0.5rem' },
  h3: { fontSize: '1.1rem', fontWeight: 700, margin: '1.25rem 0 0.5rem' },
  card: { background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' },
  badge: (status) => ({
    display: 'inline-block',
    padding: '0.2rem 0.6rem',
    borderRadius: 12,
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    background: status === 'awaiting-execution' ? '#fff3e0' : status === 'active' ? '#e8f5e9' : status === 'partial' ? '#fff8e1' : '#fce4ec',
    color: status === 'awaiting-execution' ? '#e65100' : status === 'active' ? '#1b5e20' : status === 'partial' ? '#8a5a00' : '#c2185b',
  }),
  meta: { fontSize: '0.85rem', color: '#666', margin: '0.4rem 0' },
  next: { background: '#f5f7fa', borderLeft: '3px solid var(--color-primary)', padding: '0.6rem 0.9rem', fontSize: '0.9rem', marginTop: '0.5rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginTop: '0.5rem' },
  th: { textAlign: 'left', padding: '0.6rem 0.5rem', borderBottom: '2px solid #ddd', background: '#fafafa', fontWeight: 700 },
  td: { padding: '0.6rem 0.5rem', borderBottom: '1px solid #eee' },
  warn: { background: '#fffbe6', border: '1px solid #ffe082', padding: '1rem 1.25rem', borderRadius: 8, marginBottom: '1.5rem', fontSize: '0.9rem' },
};

export default function OperationsDashboardPage() {
  const today = operationsDateStamp();
  const paths = proofPaths(today);
  const sourceWorkflow = proofSourceWorkflow(paths);
  const ownerSprint = ownerEvidenceSprint(paths);
  const citationGate = directoryCitationGate(paths);
  const unblockRunbook = proofUnblockRunbook(paths);
  const preflightCommands = proofPreflightCommands(paths);
  const promoteCommands = proofPromoteCommands(paths);
  const mapsReport = gbpMapsReportPath(today);

  return (
    <main style={{ background: '#f7f9fc', minHeight: '100vh', padding: '2rem 1.5rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <p style={{ ...S.meta, marginBottom: '0.25rem' }}>Internal — not indexed, not for clients</p>
        <h1 style={S.h1}>Operations Dashboard</h1>
        <p style={S.meta}>{BUSINESS.name} · {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion} {BUSINESS.address.postalCode} · {today}</p>

        <div style={S.warn}>
          <strong>This page is the single weekly operational surface.</strong> Bookmark it.
          Open it every Monday morning. Work the queue top-down. Every item below has
          a vault deliverable backing it — the content is already written; the
          remaining work is execution by you (the things I cannot do for you because
          they need a login, capital, or a business decision).
        </div>

        <h2 style={S.h2}>Technical gates — current readiness</h2>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Area</th>
              <th style={S.th}>Status</th>
              <th style={S.th}>Evidence</th>
              <th style={S.th}>Next step</th>
            </tr>
          </thead>
          <tbody>
            {TECHNICAL_GATES.map((gate) => (
              <tr key={gate.area}>
                <td style={S.td}><strong>{gate.area}</strong></td>
                <td style={S.td}><span style={S.badge(gate.status)}>{gate.status}</span></td>
                <td style={S.td}>{gate.evidence}</td>
                <td style={S.td}>{gate.nextStep}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={S.h2}>Proof source workflow — publish blockers</h2>
        <div style={S.warn}>
          <strong>Proof layer is the current growth ceiling.</strong> Do not deploy proof-heavy
          claims until owner evidence is collected, imported, validated, and the prepublish gate passes.
          The live unblock runbook is regenerated with <code>{unblockRunbook.command}</code>.
        </div>
        <div style={S.card}>
          <h3 style={{ ...S.h3, marginTop: 0 }}>Evidence unblock runbook</h3>
          <p style={S.meta}><strong>Report:</strong> <code>{unblockRunbook.report}</code></p>
          <p style={S.meta}><strong>Proof checklist:</strong> <code>{unblockRunbook.checklist}</code></p>
          <p style={S.meta}><strong>Current gate:</strong> {unblockRunbook.currentGate}</p>
          <p style={S.meta}>
            Intake scope: {unblockRunbook.ownerRows} owner rows · {unblockRunbook.photoRows} photo rows · {unblockRunbook.warrantyRows} warranty row · {unblockRunbook.repairCostRows} repair cost rows.
          </p>
          <div style={S.next}>
            <strong>Use this before owner calls:</strong> regenerate the runbook, fill only source-backed fields, dry-run every import, then promote verified rows intentionally.
          </div>
        </div>
        <div style={S.card}>
          <h3 style={{ ...S.h3, marginTop: 0 }}>Owner evidence sprint</h3>
          <p style={S.meta}><strong>Command:</strong> <code>{ownerSprint.command}</code></p>
          <p style={S.meta}><strong>Report:</strong> <code>{ownerSprint.report}</code></p>
          <p style={S.meta}><strong>CSV:</strong> <code>{ownerSprint.csv}</code></p>
          <p style={S.meta}><strong>Blocks:</strong> {ownerSprint.blocks.join(' · ')}</p>
          <div style={S.next}>
            <strong>Operator rule:</strong> complete the sprint checklist before importing proof. If a row still has unknowns, keep it partial and leave the publish gate closed.
          </div>
        </div>
        <h3 style={S.h3}>Minimum proof packet before anything becomes citable</h3>
        <ul style={{ ...S.card, paddingLeft: '2rem', lineHeight: 1.8, marginTop: 0 }}>
          {PROOF_MINIMUM_PACKET.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Step</th>
              <th style={S.th}>Owner action</th>
              <th style={S.th}>Source file</th>
              <th style={S.th}>Red gate</th>
            </tr>
          </thead>
          <tbody>
            {sourceWorkflow.map((row) => (
              <tr key={row.step}>
                <td style={S.td}><strong>{row.step}</strong></td>
                <td style={S.td}>{row.ownerAction}</td>
                <td style={S.td}><code>{row.sourceFile}</code></td>
                <td style={S.td}>{row.gate}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Current proof blockers</h3>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Page</th>
              <th style={S.th}>Verdict</th>
              <th style={S.th}>What is missing</th>
            </tr>
          </thead>
          <tbody>
            {PROOF_BLOCKERS.map((row) => (
              <tr key={row.page}>
                <td style={S.td}><code>{row.page}</code></td>
                <td style={S.td}><span style={S.badge(row.verdict === 'blocked' ? 'red' : 'partial')}>{row.verdict}</span></td>
                <td style={S.td}>{row.issue}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h3 style={S.h3}>Proof preflight / dry-run commands</h3>
        <div style={{ ...S.card, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: '0.82rem', lineHeight: 1.75, overflowX: 'auto' }}>
          {preflightCommands.map((command) => (
            <div key={command}>{command}</div>
          ))}
        </div>

        <h3 style={S.h3}>Directory citation proof gate</h3>
        <div style={S.card}>
          <p style={S.meta}><strong>Command:</strong> <code>{citationGate.command}</code></p>
          <p style={S.meta}><strong>Status file:</strong> <code>{citationGate.statusFile}</code></p>
          <p style={S.meta}><strong>Validation report:</strong> <code>{citationGate.validationReport}</code></p>
          <p style={S.meta}><strong>Platforms:</strong> {citationGate.platforms.join(' · ')}</p>
          <p style={S.meta}><strong>NADRA profile URL:</strong> <code>{citationGate.nadraProfileUrl}</code></p>
          <p style={S.meta}><strong>NADRA profile:</strong> {citationGate.nadraProfileAffordance}</p>
          <div style={S.next}>
            <strong>sameAs rule:</strong> {citationGate.rule}
          </div>
        </div>

        <h3 style={S.h3}>Proof promote commands — only after source review</h3>
        <div style={{ ...S.card, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: '0.82rem', lineHeight: 1.75, overflowX: 'auto' }}>
          {promoteCommands.map((command) => (
            <div key={command}>{command}</div>
          ))}
        </div>

        <h3 style={S.h3}>Final proof gates before merge/deploy</h3>
        <div style={{ ...S.card, fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', fontSize: '0.82rem', lineHeight: 1.75, overflowX: 'auto' }}>
          {PROOF_FINAL_GATE_COMMANDS.map((command) => (
            <div key={command}>{command}</div>
          ))}
        </div>

        <h2 style={S.h2}>GBP / Maps proof ops — owner-only queue</h2>
        <div style={S.warn}>
          <strong>Maps growth is now operational, not a copywriting task.</strong> This board does not claim
          live GBP rankings, photo counts, review velocity, or profile status without screenshots or API/source evidence.
          Latest generated board: <code>{mapsReport}</code>.
        </div>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Priority</th>
              <th style={S.th}>Lane</th>
              <th style={S.th}>Owner action</th>
              <th style={S.th}>Evidence required</th>
              <th style={S.th}>Red gate</th>
            </tr>
          </thead>
          <tbody>
            {GBP_MAPS_PRIORITY_ACTIONS.map((row) => (
              <tr key={`${row.lane}-${row.action}`}>
                <td style={S.td}><span style={S.badge(row.priority === 'P0' ? 'red' : 'partial')}>{row.priority}</span></td>
                <td style={S.td}><strong>{row.lane}</strong></td>
                <td style={S.td}>{row.action}</td>
                <td style={S.td}>{row.evidence}</td>
                <td style={S.td}>{row.rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={S.card}>
          <h3 style={{ ...S.h3, marginTop: 0 }}>Weekly Maps cadence</h3>
          <ol style={{ paddingLeft: '1.25rem', lineHeight: 1.8, marginBottom: 0 }}>
            {GBP_WEEKLY_CADENCE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>

        <h2 style={S.h2}>Latest verified code-side batches</h2>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Batch</th>
              <th style={S.th}>Deployment</th>
              <th style={S.th}>Evidence</th>
              <th style={S.th}>Result</th>
            </tr>
          </thead>
          <tbody>
            {RECENT_VERIFIED_BATCHES.map((batch) => (
              <tr key={batch.name}>
                <td style={S.td}><strong>{batch.name}</strong></td>
                <td style={S.td}><code>{batch.deployment}</code></td>
                <td style={S.td}><code>{batch.evidence}</code></td>
                <td style={S.td}>{batch.result}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={S.h2}>Tier 1 — highest ROI / blocked on you</h2>
        {TIER1_ACTIONS.map((action) => (
          <div key={action.id} style={S.card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem' }}>
              <div>
                <h3 style={S.h3}>{action.title}</h3>
                <p style={S.meta}>{action.cadence} · {action.timeMinutes} min · {action.leverage}</p>
              </div>
              <span style={S.badge(action.status)}>{action.status.replace('-', ' ')}</span>
            </div>
            <p style={{ ...S.meta, fontStyle: 'italic' }}>{action.ready}</p>
            <div style={S.next}><strong>Next step:</strong> {action.nextStep}</div>
          </div>
        ))}

        <h2 style={S.h2}>Week 1 — outreach (1.5 hours total)</h2>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Action</th><th style={S.th}>Done?</th><th style={S.th}>Result</th></tr></thead>
          <tbody>
            {WEEK1_OUTREACH.map((item, i) => (
              <tr key={i}>
                <td style={S.td}>{item.name}<br /><span style={{ fontSize: '0.75rem', color: '#888' }}>{item.file} · {item.section}</span></td>
                <td style={S.td}>☐</td>
                <td style={S.td}>—</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={S.h2}>Week 2 — HOA newsletter outreach (2 hours total)</h2>
        <table style={S.table}>
          <thead><tr><th style={S.th}>Action</th><th style={S.th}>Done?</th><th style={S.th}>Result</th></tr></thead>
          <tbody>
            {WEEK2_OUTREACH.map((item, i) => (
              <tr key={i}>
                <td style={S.td}>{item.name}<br /><span style={{ fontSize: '0.75rem', color: '#888' }}>{item.file} · {item.section}</span></td>
                <td style={S.td}>☐</td>
                <td style={S.td}>—</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={S.h2}>Week 3 — scholarship outreach (2 hours total)</h2>
        <p style={S.meta}>Send all 10 scholarship outreach emails — see <code>wiki/.../outreach-pack/03-scholarship-outreach.md</code> for each personalized variant. <strong>Pre-requisite:</strong> confirm scholarship terms (award amount, deadline, eligibility) are live on <Link href="/scholarship" style={{ color: 'var(--color-primary)' }}>/scholarship</Link> before sending.</p>
        <table style={S.table}>
          <thead><tr><th style={S.th}>School / Program</th><th style={S.th}>Done?</th><th style={S.th}>Listed?</th></tr></thead>
          <tbody>
            {WEEK3_OUTREACH.map((item, i) => (
              <tr key={i}>
                <td style={S.td}>{item}</td>
                <td style={S.td}>☐</td>
                <td style={S.td}>—</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={S.h2}>KPI targets — 30 / 90 / 365 days</h2>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>KPI</th>
              <th style={S.th}>Current</th>
              <th style={S.th}>30 days</th>
              <th style={S.th}>90 days</th>
              <th style={S.th}>365 days</th>
            </tr>
          </thead>
          <tbody>
            {KPI_TARGETS.map((row, i) => (
              <tr key={i}>
                <td style={S.td}><strong>{row.kpi}</strong></td>
                <td style={S.td}>{row.current}</td>
                <td style={S.td}>{row.target30}</td>
                <td style={S.td}>{row.target90}</td>
                <td style={S.td}>{row.target365}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 style={S.h2}>Vault deliverables — full reference</h2>
        <p style={S.meta}>Everything below is in your Obsidian vault under <code>wiki/deliverables/local-seo-fixes/</code>. Every item in Tier 1 above has a corresponding deliverable with full detail.</p>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
          <li><strong>00 Overview.md</strong> — initiative hub, scorecard, KPI targets</li>
          <li><strong>execution-blockers.md</strong> — full list of what only you can do</li>
          <li><strong>citation-live-state-audit.md</strong> — Houzz Ashburn fix details</li>
          <li><strong>citations/NAP Source of Truth.md</strong> — canonical NAP record (the source of truth for every external listing)</li>
          <li><strong>master-location-registry.json</strong> — machine-readable canonical location data</li>
          <li><strong>canonical-nap-matrix.csv</strong> — per-platform NAP verification status</li>
          <li><strong>entity-truth-system.md</strong> — 10-rule governance for keeping the entity clean</li>
          <li><strong>local-authority-domination-strategy.md</strong> — Loudoun proximity decision frame</li>
          <li><strong>proximity/Loudoun Satellite Strategy.md</strong> — 4 options (A/B/C/D) with risk/ROI</li>
          <li><strong>topical-authority-map.md</strong> — content cluster gaps + publishing cadence</li>
          <li><strong>youtube-authority-plan.md</strong> — channel setup + 3 ready-to-film scripts</li>
          <li><strong>link-acquisition-roadmap.md</strong> — 7-tier link plan, 30-50 durable links over 12 months</li>
          <li><strong>dominance-scorecard.md</strong> — composite score + 30-day execution chain</li>
          <li><strong>roadmap/90-Day Execution Plan.md</strong> — week-by-week task list</li>
          <li><strong>gbp/this-week.md</strong> — THIS WEEK's GBP post + 3 Q&A, copy-paste ready (5-min execution)</li>
          <li><strong>gbp/post-calendar-90day.md</strong> — 12 GBP posts ready to publish</li>
          <li><strong>gbp/qa-seed-list.md</strong> — 12 Q&A pairs ready to seed</li>
          <li><strong>proximity/decision-memo.md</strong> — Loudoun proximity A/B/C/D 1-pager decision memo (the highest-leverage strategic decision in the entire plan)</li>
          <li><strong>gbp/services-products.md</strong> — GBP services + products data</li>
          <li><strong>gbp/review-response-templates.md</strong> — review reply templates</li>
          <li><strong>reviews/Review Automation Spec.md</strong> — Jobber vs NiceVoice implementation</li>
          <li><strong>citations/citation-tracker.md</strong> — Tier 1 + Tier 2 citation submission list</li>
          <li><strong>schema/Schema Implementation Plan.md</strong> — schema policy + deprecated types</li>
          <li><strong>outreach-pack/01-pr-pitches.md</strong> — 4 PR emails ready to send</li>
          <li><strong>outreach-pack/02-hoa-newsletter-outreach.md</strong> — 4 HOA emails ready to send</li>
          <li><strong>outreach-pack/03-scholarship-outreach.md</strong> — 10 scholarship emails ready to send</li>
          <li><strong>outreach-pack/04-manufacturer-verifications.md</strong> — Trex/TimberTech/NADRA verifications</li>
          <li><strong>multi-office-implementation-blueprint.md</strong> — code + content blueprint for when (if) a second office becomes real</li>
        </ul>

        <h2 style={S.h2}>Operating rules</h2>
        <ol style={{ paddingLeft: '1.5rem', lineHeight: 1.8 }}>
          <li><strong>Open this page every Monday.</strong> Work the queue top-down. Tier 1 first. If Tier 1 is blocked on someone else, drop to the weekly outreach.</li>
          <li><strong>One item per session.</strong> Don&apos;t try to do all of Tier 1 in one sitting. GBP cadence is 15 minutes; review automation is 90 minutes. Pick one and finish it.</li>
          <li><strong>Track every action.</strong> The tables above are for your own use — fill them in. Outreach without tracking turns into double-pitching and missed responses.</li>
          <li><strong>Send from <code>office@ldndecks.com</code></strong> for all outreach — consistency with canonical NAP.</li>
          <li><strong>One follow-up max per recipient,</strong> 7 days after the original. After that, the relationship pauses until next quarter.</li>
          <li><strong>If a number, KPI, or vault file looks stale,</strong> update <code>src/app/admin/operations/page.js</code> — the dashboard is just a Next.js page, edit it like any other.</li>
        </ol>

        <hr style={{ margin: '3rem 0 1.5rem', border: 'none', borderTop: '1px solid #e5e5e5' }} />
        <p style={S.meta}>This page is server-rendered, robots-noindex, never exposed in the sitemap. Safe to bookmark publicly without affecting SEO.</p>
      </div>
    </main>
  );
}
