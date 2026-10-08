import { resolveCutoff, resolveMode } from '@/lib/lead-triage/config.mjs';
import { listToday } from '@/lib/lead-triage/pipeline.mjs';
import { leadJobLabel, sourceLabel } from '@/lib/lead-triage/summary.mjs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Lead triage — internal',
  description: 'Internal morning lead queue for Loudoun Decks. Not for the public site.',
  robots: { index: false, follow: false, nocache: true },
};

export default async function LeadTriagePage() {
  const mode = resolveMode();
  const cutoff = resolveCutoff();
  let today = null;
  let errorMessage = '';
  try {
    today = await listToday({ mode, cutoff });
  } catch (error) {
    errorMessage = error?.message || 'Storage is not available.';
  }

  return (
    <main id="main" style={{ maxWidth: 960, margin: '2rem auto', padding: '0 1.25rem 3rem' }}>
      <p style={{ letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 13, color: '#d14817' }}>
        Internal · not sent to customers
      </p>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Today&apos;s leads</h1>
      <p style={{ color: '#333' }}>
        {today ? today.date : 'Eastern time'} · mode {mode} · cutoff {cutoff}. Drafts stay in storage until someone at the office sends them.
      </p>
      {errorMessage ? (
        <p role="alert">The lead store could not be read. Set DATABASE_URL on Vercel, or run a local dry run. ({errorMessage})</p>
      ) : null}
      {today ? <Counts counts={today.counts} /> : null}
      {today ? <LeadTable title="Cleared the cutoff" rows={today.passed} empty="No leads cleared the cutoff yet today." /> : null}
      {today ? <LeadTable title="Needs a person" rows={today.review} empty="Nothing is waiting for review." /> : null}
    </main>
  );
}

function Counts({ counts }) {
  const items = [
    ['Passed', counts.passed],
    ['Review', counts.needs_human_review],
    ['Set aside', counts.rejected],
    ['Waiting', counts.pending],
    ['Errors', counts.error],
  ];
  return (
    <ul style={{ display: 'flex', gap: '1rem', padding: 0, listStyle: 'none', flexWrap: 'wrap' }}>
      {items.map(([label, value]) => (
        <li key={label} style={{ border: '1px solid #ddd', padding: '0.6rem 0.8rem', minWidth: 90 }}>
          <strong style={{ display: 'block', fontSize: '1.25rem' }}>{value || 0}</strong>
          {label}
        </li>
      ))}
    </ul>
  );
}

function LeadTable({ title, rows, empty }) {
  return (
    <section style={{ marginTop: '1.5rem' }}>
      <h2 style={{ fontSize: '1.25rem' }}>{title}</h2>
      {rows.length === 0 ? <p>{empty}</p> : rows.map((record) => <LeadCard key={record.id} record={record} />)}
    </section>
  );
}

function LeadCard({ record }) {
  return (
    <article style={{ borderTop: '1px solid #ddd', padding: '0.9rem 0' }}>
      <h3 style={{ margin: '0 0 0.3rem', fontSize: '1.05rem' }}>
        {record.contactName || record.address || 'Permit prospect'} · {record.city || 'City unknown'}
      </h3>
      <p style={{ margin: '0.2rem 0' }}>
        {sourceLabel(record.source)} · {leadJobLabel(record)} · score {record.classification?.rank ?? '—'}
      </p>
      <p style={{ margin: '0.2rem 0', color: '#444' }}>
        {record.phone || 'No phone'} · {record.email || 'No email'}
      </p>
      {record.draft?.text ? (
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'Georgia, serif', background: '#faf7f4', padding: '0.8rem' }}>
          {record.draft.text}
        </pre>
      ) : (
        <p>No draft stored.</p>
      )}
    </article>
  );
}
