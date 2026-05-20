import Link from 'next/link';
import CallLink from '@/components/CallLink';

// Above-the-fold conversion CTA for paid-search service landing pages.
// Mirrors the pattern proven on /deck-repair (orange banner, phone + estimate).
// Phone link delegates to <CallLink> so phone_click tracking and the
// centralized BUSINESS_PHONE constant stay in one place.
export default function AboveFoldCTA({
  headline = 'Ready to start your project? Talk to a NoVA deck specialist today.',
  estimateHref = '/get-estimate',
  estimateLabel = 'Get Free Estimate',
}) {
  return (
    <section
      aria-label="Free estimate call to action"
      style={{
        background: '#fff3e0',
        borderLeft: '4px solid var(--color-primary)',
        padding: '1.5rem 0',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
        <p style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.75rem' }}>
          {headline}
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <CallLink
            style={{
              display: 'inline-block',
              background: 'var(--color-primary)',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          />
          <Link
            href={estimateHref}
            style={{
              display: 'inline-block',
              background: 'var(--color-dark)',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            {estimateLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
