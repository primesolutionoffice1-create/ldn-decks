import {
  COMPETITOR_SNAPSHOT_DATE,
  COMPETITOR_SNAPSHOT_SOURCE,
  coverageRows,
  gapCities,
  unassignedCompetitors,
} from '@/lib/lead-triage/competitorMap.mjs';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Competitor coverage — internal',
  description: 'Internal snapshot of competitor coverage for Loudoun Decks. Not for the public site.',
  robots: { index: false, follow: false, nocache: true },
};

export default function CompetitorMapPage() {
  const rows = coverageRows();
  const gaps = gapCities();
  const unassigned = unassignedCompetitors();

  return (
    <main id="main" style={{ maxWidth: 960, margin: '2rem auto', padding: '0 1.25rem 3rem' }}>
      <p style={{ letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: 13, color: '#d14817' }}>
        Internal snapshot · {COMPETITOR_SNAPSHOT_DATE}
      </p>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>Competitor coverage</h1>
      <p style={{ color: '#333' }}>
        Source: {COMPETITOR_SNAPSHOT_SOURCE}. This page does not scrape the web, and it does not change the public site.
        {' '}
        <a href="/admin/lead-triage">Today&apos;s leads</a>
      </p>
      <p>
        Organic gaps in that head-query set: {gaps.length ? gaps.join(', ') : 'none recorded'}.
        Other cities were not scored in the snapshot.
      </p>
      {rows.map((row) => (
        <section key={row.city} style={{ borderTop: '1px solid #ddd', padding: '0.9rem 0' }}>
          <h2 style={{ fontSize: '1.15rem', margin: '0 0 0.3rem' }}>{row.city}</h2>
          <p style={{ margin: '0.2rem 0' }}>{row.organicNote}</p>
          {row.competitors.length === 0 ? (
            <p style={{ margin: '0.2rem 0' }}>No competitor in the snapshot lists this city.</p>
          ) : (
            <ul>
              {row.competitors.map((competitor) => (
                <li key={competitor.id}>
                  {competitor.name} ({competitor.domain}) · {competitor.threat} threat · {competitor.reviewNote}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <section style={{ borderTop: '1px solid #ddd', padding: '0.9rem 0' }}>
        <h2 style={{ fontSize: '1.15rem' }}>Not tied to a city in the snapshot</h2>
        <ul>
          {unassigned.map((competitor) => (
            <li key={competitor.id}>
              {competitor.name} ({competitor.domain}) · {competitor.hq} · {competitor.reviewNote}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
