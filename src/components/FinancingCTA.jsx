import Link from 'next/link';

export default function FinancingCTA({
  title = 'Need financing for your deck project?',
  text = 'Financing options may be available for new decks, resurfacing, repairs, and composite upgrades. Ask us about current options during your estimate.',
}) {
  return (
    <section style={{ background: '#151515', color: '#fff', padding: '2.75rem 0' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', alignItems: 'center' }}>
        <div>
          <h2 style={{ fontSize: '1.55rem', fontWeight: 850, lineHeight: 1.15, margin: '0 0 0.65rem', letterSpacing: 0 }}>
            {title}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.76)', lineHeight: 1.65, margin: 0, fontSize: '0.98rem' }}>
            {text}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.52)', lineHeight: 1.5, margin: '0.75rem 0 0', fontSize: '0.78rem' }}>
            Subject to approval. Terms may vary. Loudoun Decks is not a lender.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'flex-start' }}>
          <Link href="/deck-financing" style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '0.9rem 1.15rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
            Check Financing Options
          </Link>
          <Link href="/get-estimate" style={{ display: 'inline-block', background: '#fff', color: '#151515', padding: '0.9rem 1.15rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
            Request a Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
