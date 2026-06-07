import Link from 'next/link';

const defaultLinks = [
  { href: '/deck-cost-calculator', label: 'Deck Cost Calculator' },
  { href: '/deck-payment-estimator', label: 'Deck Payment Estimator' },
  { href: '/reviews', label: 'Customer Reviews' },
  { href: '/bbb-accredited-deck-builder-virginia', label: 'BBB Accredited Builder' },
  { href: '/before-and-after', label: 'Before & After Projects' },
  { href: '/get-estimate', label: 'Request Written Estimate' },
];

export default function CountyConversionLinks({ county, permitHref }) {
  const links = permitHref
    ? [{ href: permitHref, label: `${county} Permit Guide` }, ...defaultLinks]
    : defaultLinks;

  return (
    <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
        Plan Your {county} Deck Project
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              border: '1px solid #e5e5e5',
              borderRadius: 8,
              color: 'var(--color-dark)',
              fontWeight: 700,
              padding: '0.85rem 1rem',
              textDecoration: 'none',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
