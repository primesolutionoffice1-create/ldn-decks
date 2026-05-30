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
  { kpi: 'Google reviews count', current: BUSINESS.reviewSummary.reviewCount, target30: '53', target90: '60+', target365: '100+' },
  { kpi: 'Composite authority score', current: '~85', target30: '87', target90: '90', target365: '93+' },
  { kpi: 'GBP weekly post cadence', current: '0', target30: '4', target90: '12', target365: '52' },
  { kpi: 'Manufacturer locator verifications', current: 'unconfirmed', target30: '3 verified', target90: '3 maintained', target365: '3 maintained' },
  { kpi: 'PR placements with backlinks', current: '0', target30: '0', target90: '2-4', target365: '8-15' },
  { kpi: 'HOA newsletter placements', current: '0', target30: '0', target90: '1-2', target365: '4-6' },
  { kpi: '.edu / .k12 scholarship listings', current: '0', target30: '0', target90: '6-10', target365: '10-15' },
  { kpi: 'Review velocity (per month)', current: '~2-3', target30: '3-4', target90: '5-7', target365: '5-8 sustained' },
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
    background: status === 'awaiting-execution' ? '#fff3e0' : '#fce4ec',
    color: status === 'awaiting-execution' ? '#e65100' : '#c2185b',
  }),
  meta: { fontSize: '0.85rem', color: '#666', margin: '0.4rem 0' },
  next: { background: '#f5f7fa', borderLeft: '3px solid var(--color-primary)', padding: '0.6rem 0.9rem', fontSize: '0.9rem', marginTop: '0.5rem' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginTop: '0.5rem' },
  th: { textAlign: 'left', padding: '0.6rem 0.5rem', borderBottom: '2px solid #ddd', background: '#fafafa', fontWeight: 700 },
  td: { padding: '0.6rem 0.5rem', borderBottom: '1px solid #eee' },
  warn: { background: '#fffbe6', border: '1px solid #ffe082', padding: '1rem 1.25rem', borderRadius: 8, marginBottom: '1.5rem', fontSize: '0.9rem' },
};

export default function OperationsDashboardPage() {
  const today = new Date().toISOString().split('T')[0];
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
