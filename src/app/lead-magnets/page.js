import Link from 'next/link';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/lead-magnets',
  title: 'Northern Virginia Deck Planning Resources',
  description: 'Printable deck planning resources from Loudoun Decks, including the 2026 NoVA deck permit checklist for Loudoun, Fairfax, Prince William, and Arlington homeowners.',
  image: '/social/nova-deck-permit-checklist-social.png',
  noIndex: true,
});

const resources = [
  {
    href: '/lead-magnets/nova-deck-permit-checklist-2026',
    title: '2026 NoVA Deck Permit Checklist',
    description: 'A printable checklist for HOA review, site plans, county permits, footing inspection, framing inspection, and final closeout.',
  },
  {
    href: '/deck-permit-loudoun-county-virginia',
    title: 'Loudoun County Deck Permit Guide',
    description: 'County-specific permit planning for Ashburn, Leesburg, Sterling, South Riding, Brambleton, and nearby Loudoun communities.',
  },
  {
    href: '/deck-permit-fairfax-county-virginia',
    title: 'Fairfax County Deck Permit Guide',
    description: 'Permit and inspection planning for Fairfax, McLean, Vienna, Herndon, Reston, Centreville, and surrounding areas.',
  },
  {
    href: '/deck-resurfacing-vs-replacement',
    title: 'Deck Resurfacing vs Replacement',
    description: 'A decision guide for homeowners comparing surface replacement, structural repair, and full deck rebuilds.',
  },
];

export default function LeadMagnetsPage() {
  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: '56px 24px', color: '#1f2933' }}>
      <section style={{ maxWidth: 760, marginBottom: 32 }}>
        <p style={{ margin: '0 0 10px', color: '#d14817', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, fontSize: 13 }}>
          Loudoun Decks resources
        </p>
        <h1 style={{ margin: '0 0 14px', fontSize: 42, lineHeight: 1.08, color: '#111827' }}>
          Northern Virginia deck planning resources
        </h1>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65, color: '#4b5563' }}>
          Practical checklists and planning guides for homeowners preparing a deck, porch, resurfacing, or outdoor living project in Northern Virginia.
        </p>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 34 }}>
        {resources.map((resource) => (
          <Link
            key={resource.href}
            href={resource.href}
            style={{
              display: 'block',
              padding: 20,
              border: '1px solid #e5e7eb',
              borderRadius: 8,
              textDecoration: 'none',
              color: 'inherit',
              background: '#fff',
            }}
          >
            <h2 style={{ margin: '0 0 8px', fontSize: 20, lineHeight: 1.2, color: '#111827' }}>{resource.title}</h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: '#4b5563' }}>{resource.description}</p>
          </Link>
        ))}
      </section>

      <section style={{ borderTop: '1px solid #e5e7eb', paddingTop: 24, display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ margin: 0, color: '#374151', fontSize: 16 }}>
          Planning a deck in Loudoun, Fairfax, Arlington, or Prince William County?
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          <Link href="/get-estimate" style={{ background: '#d14817', color: '#fff', padding: '10px 16px', borderRadius: 6, textDecoration: 'none', fontWeight: 700 }}>
            Get a written estimate
          </Link>
          <CallLink style={{ color: '#d14817', fontWeight: 700, textDecoration: 'none', padding: '10px 0' }}>
            Call 571-655-7207
          </CallLink>
        </div>
      </section>
    </main>
  );
}
