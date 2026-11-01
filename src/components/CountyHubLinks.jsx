import Link from 'next/link';

const HUBS = {
  'loudoun-county': {
    name: 'Loudoun County',
    links: [
      { href: '/near-you/loudoun-county', label: 'Deck builder' },
      { href: '/screened-porch-contractor-loudoun-county', label: 'Screened porches' },
      { href: '/patio-contractor-loudoun-county', label: 'Patios' },
      { href: '/deck-resurfacing-loudoun-county', label: 'Deck resurfacing' },
    ],
  },
  'fairfax-county': {
    name: 'Fairfax County',
    links: [
      { href: '/near-you/fairfax-county', label: 'Deck builder' },
      { href: '/screened-porches/fairfax', label: 'Screened porches' },
      { href: '/patio-contractor-fairfax-county', label: 'Patios' },
      { href: '/deck-resurfacing-fairfax-county', label: 'Deck resurfacing' },
    ],
  },
  'prince-william-county': {
    name: 'Prince William County',
    links: [
      { href: '/near-you/prince-william-county', label: 'Deck builder' },
      { href: '/screened-porch-contractor-prince-william-county', label: 'Screened porches' },
      { href: '/patio-contractor-prince-william-county', label: 'Patios' },
      { href: '/deck-resurfacing-prince-william-county', label: 'Deck resurfacing' },
    ],
  },
};

export default function CountyHubLinks({ countySlug }) {
  const hub = HUBS[countySlug];
  if (!hub) return null;

  return (
    <section
      aria-labelledby={`serving-${countySlug}`}
      style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem 2rem' }}
    >
      <h2 id={`serving-${countySlug}`} style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.5rem' }}>
        {`Serving all of ${hub.name}`}
      </h2>
      <ul style={{ margin: 0, paddingLeft: '1.2rem', lineHeight: 1.8 }}>
        {hub.links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <p style={{ margin: '0.75rem 0 0', fontSize: '0.85rem', color: '#666' }}>
        Last reviewed <time dateTime="2026-11-01">November 1, 2026</time>.
      </p>
    </section>
  );
}
