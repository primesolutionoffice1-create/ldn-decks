import Link from 'next/link';
import CallLink, { BUSINESS_PHONE_DISPLAY } from '@/components/CallLink';
import PaidSearchLeadForm from '@/components/PaidSearchLeadForm';

// Above-the-fold conversion CTA for paid-search service landing pages.
// Mirrors the pattern proven on /deck-repair (orange banner, phone + estimate).
// Phone link delegates to <CallLink> so phone_click tracking and the
// centralized BUSINESS_PHONE constant stay in one place.
export default function AboveFoldCTA({
  headline = 'Same-week estimate openings are available for Northern Virginia homeowners.',
  estimateHref = '/get-estimate',
  estimateLabel = 'Request Estimate',
  showQuickForm = false,
  quickFormService = 'Composite Decks',
  quickFormLocation = 'paid_search_above_fold',
  quickFormHeading = 'Get a written estimate path today',
  pageContext,
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
        <p style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.35rem', lineHeight: 1.35 }}>
          {headline}
        </p>
        <p style={{ color: '#5f4f47', fontSize: '0.95rem', margin: '0 0 0.85rem' }}>
          {showQuickForm
            ? 'For fastest scheduling today, call first. The form below is the backup path.'
            : 'For fastest scheduling today, call first or request a written estimate online.'}
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
          >
            Call Now: {BUSINESS_PHONE_DISPLAY}
          </CallLink>
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
        {showQuickForm && (
          <PaidSearchLeadForm
            service={quickFormService}
            formLocation={quickFormLocation}
            heading={quickFormHeading}
            pageContext={pageContext}
          />
        )}
      </div>
    </section>
  );
}
