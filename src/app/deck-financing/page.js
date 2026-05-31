import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import CallLink from '@/components/CallLink';
import FinancingCTA from '@/components/FinancingCTA';
import { buildMetadata, SITE_URL } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-financing',
  title: 'Deck Financing in Northern Virginia | We Finance Your Deck Project',
  description: 'Explore deck financing options for new decks, resurfacing, repairs, and composite deck upgrades in Northern Virginia. Build now and pay over time.',
  image: '/images/img01.jpeg',
});

const faqItems = [
  {
    q: 'Do you offer deck financing?',
    a: 'Financing options may be available for qualifying Loudoun Decks projects. Approval, terms, payment options, and available programs depend on the financing provider and the homeowner application.',
  },
  {
    q: 'Is financing guaranteed?',
    a: 'No. Financing is subject to approval. We can discuss current financing options during your estimate, but we do not guarantee approval, terms, rates, or monthly payments.',
  },
  {
    q: 'What deck projects may be eligible for financing?',
    a: 'New deck builds, deck resurfacing, composite decking upgrades, larger repair scopes, railing and stair improvements, screened porches, and related outdoor living upgrades may be eligible depending on project scope and provider terms.',
  },
  {
    q: 'Can I ask about financing before I have a final quote?',
    a: 'Yes. The best first step is a free estimate. We review the project scope, likely budget range, and whether financing options may fit the project before you make a decision.',
  },
  {
    q: 'Do you list interest rates or monthly payments online?',
    a: 'No. Rates, terms, and payment amounts may vary and must come from the financing provider. We avoid publishing unconfirmed payment promises because every homeowner and project is different.',
  },
  {
    q: 'Can financing help with urgent deck repair or safety work?',
    a: 'It may. If a deck has unsafe stairs, failing railings, rotted framing, ledger issues, or other structural concerns, financing options may help homeowners address safety work without delaying the project unnecessarily.',
  },
];

const webpageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/deck-financing#webpage`,
  url: `${SITE_URL}/deck-financing`,
  name: 'Deck Financing in Northern Virginia',
  headline: 'We Finance Your Deck Project',
  description: 'Flexible deck financing options may be available for homeowners planning new decks, resurfacing, repairs, and composite decking upgrades in Northern Virginia.',
  isPartOf: { '@type': 'WebSite', '@id': `${SITE_URL}/#website` },
  about: { '@id': `${SITE_URL}/#organization` },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/images/img01.jpeg`,
  },
  mainEntity: {
    '@type': 'Service',
    '@id': `${SITE_URL}/deck-financing#service`,
    name: 'Deck Project Financing Support',
    serviceType: 'Deck financing consultation',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Loudoun County, VA' },
      { '@type': 'AdministrativeArea', name: 'Fairfax County, VA' },
      { '@type': 'AdministrativeArea', name: 'Prince William County, VA' },
      { '@type': 'AdministrativeArea', name: 'Arlington County, VA' },
      { '@type': 'AdministrativeArea', name: 'Stafford County, VA' },
    ],
    description: 'Financing guidance for eligible deck builds, resurfacing, repair, and composite upgrade projects. Financing options may be available and are subject to approval. Terms may vary.',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Deck Financing', item: `${SITE_URL}/deck-financing` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const eligibleProjects = [
  {
    title: 'New decks',
    href: '/services/new-decks',
    text: 'Custom pressure-treated, cedar, Trex, TimberTech, and AZEK deck builds for Northern Virginia homes.',
  },
  {
    title: 'Deck resurfacing',
    href: '/services/deck-resurfacing',
    text: 'Replace old surface boards and railings when the existing framing is still structurally sound.',
  },
  {
    title: 'Composite decking upgrades',
    href: '/composite-decks',
    text: 'Upgrade to low-maintenance composite or PVC decking with stronger long-term durability.',
  },
  {
    title: 'Deck repair and safety improvements',
    href: '/services/deck-repair',
    text: 'Address unsafe stairs, railings, rot, ledger concerns, board replacement, and structural repair scopes.',
  },
];

const processSteps = [
  'Request a free estimate and tell us you want to discuss financing options.',
  'We inspect the site, define the project scope, and prepare a realistic project range.',
  'We explain current financing options that may be available for the project type.',
  'You review provider terms directly and decide whether financing makes sense for your situation.',
  'If approved and accepted, we schedule the project through the normal design, permit, and build process.',
];

const S = {
  section: { padding: '4rem 0' },
  wrap: { maxWidth: 1080, margin: '0 auto', padding: '0 1.5rem' },
  h2: { fontSize: '2rem', fontWeight: 800, lineHeight: 1.15, margin: '0 0 1rem', color: '#151515' },
  p: { fontSize: '1rem', lineHeight: 1.75, color: '#444', margin: '0 0 1rem' },
};

export default function DeckFinancingPage() {
  return (
    <main>
      <JsonLd data={webpageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      <section style={{ background: '#151515', color: '#fff', padding: '5rem 0 4.5rem' }}>
        <div style={{ ...S.wrap, maxWidth: 980 }}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', margin: '0 0 1rem' }}>
            Deck Financing - Northern Virginia
          </p>
          <h1 style={{ fontSize: 'clamp(2.35rem, 5vw, 4.25rem)', fontWeight: 900, letterSpacing: 0, lineHeight: 1.02, margin: '0 0 1.15rem', maxWidth: 760 }}>
            We Finance Your Deck Project
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1.18rem', lineHeight: 1.65, maxWidth: 760, margin: '0 0 2rem' }}>
            Build now. Pay over time. Flexible deck financing options for homeowners in Northern Virginia.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
            <Link href="/contact" style={{ display: 'inline-block', background: 'var(--color-primary)', color: '#fff', padding: '1rem 1.5rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
              Check Financing Options
            </Link>
            <Link href="/get-estimate" style={{ display: 'inline-block', background: '#fff', color: '#151515', padding: '1rem 1.5rem', borderRadius: 8, fontWeight: 800, textDecoration: 'none' }}>
              Request a Free Estimate
            </Link>
            <CallLink style={{ display: 'inline-block', color: '#fff', padding: '0.95rem 1.25rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.3)' }} />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.88rem', lineHeight: 1.55, margin: '1.4rem 0 0', maxWidth: 760 }}>
            Financing options may be available. Subject to approval. Terms may vary. Loudoun Decks is not a lender and does not guarantee financing approval, rates, terms, or monthly payment amounts.
          </p>
        </div>
      </section>

      <section style={{ ...S.section, background: '#fff' }}>
        <div style={S.wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            <div>
              <h2 style={S.h2}>Why finance your deck project?</h2>
              <p style={S.p}>
                A deck project can unlock years of outdoor living, but many homeowners do not want to delay the work until every dollar is saved in cash. Financing may help you move forward with a safer deck, a larger outdoor living plan, or a lower-maintenance composite upgrade while spreading payments over time.
              </p>
              <p style={S.p}>
                The right financing conversation starts with a real project scope. We first clarify what you want to build, what must be repaired for safety, and which upgrades are worth considering. Then we can discuss current financing options that may be available.
              </p>
            </div>
            <div style={{ background: '#fff8f1', border: '1px solid #f2d6c7', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem', borderRadius: 8 }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 0.75rem' }}>Compliant financing promise</h3>
              <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#444', lineHeight: 1.75 }}>
                <li>Financing options may be available.</li>
                <li>Approval is not guaranteed.</li>
                <li>Rates, terms, and payments may vary.</li>
                <li>Ask us about current financing options during your estimate.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#f7f7f7' }}>
        <div style={S.wrap}>
          <h2 style={S.h2}>Deck projects eligible for financing</h2>
          <p style={{ ...S.p, maxWidth: 760 }}>
            Financing may apply to complete build scopes, meaningful upgrades, and safety-driven repair work. The project still needs to make practical sense for your home, structure, timeline, and budget.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {eligibleProjects.map((item) => (
              <Link key={item.href} href={item.href} style={{ display: 'block', background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', color: 'inherit', textDecoration: 'none' }}>
                <h3 style={{ color: 'var(--color-primary)', fontSize: '1.05rem', fontWeight: 800, margin: '0 0 0.55rem' }}>{item.title}</h3>
                <p style={{ color: '#555', fontSize: '0.94rem', lineHeight: 1.55, margin: 0 }}>{item.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#fff' }}>
        <div style={S.wrap}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h2 style={S.h2}>How the financing process works</h2>
              <ol style={{ margin: 0, paddingLeft: '1.25rem', color: '#444', lineHeight: 1.8 }}>
                {processSteps.map((step) => (
                  <li key={step} style={{ marginBottom: '0.75rem' }}>{step}</li>
                ))}
              </ol>
            </div>
            <div>
              <h2 style={S.h2}>Helpful planning tools</h2>
              <p style={S.p}>
                Start with the deck cost calculator to understand a rough project range, then request a field estimate so we can price real dimensions, access, material choices, railings, stairs, and permit needs.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <Link href="/deck-cost-calculator" style={{ background: '#151515', color: '#fff', borderRadius: 8, padding: '0.85rem 1rem', fontWeight: 800, textDecoration: 'none' }}>
                  Deck Cost Calculator
                </Link>
                <Link href="/contact" style={{ background: 'var(--color-primary)', color: '#fff', borderRadius: 8, padding: '0.85rem 1rem', fontWeight: 800, textDecoration: 'none' }}>
                  Request a Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#f7f7f7' }}>
        <div style={{ ...S.wrap, maxWidth: 900 }}>
          <h2 style={S.h2}>Financing FAQ</h2>
          {faqItems.map((item) => (
            <details key={item.q} style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.15rem 1.25rem', marginBottom: '0.85rem' }}>
              <summary style={{ fontWeight: 800, cursor: 'pointer', color: '#151515' }}>{item.q}</summary>
              <p style={{ ...S.p, marginTop: '0.9rem', marginBottom: 0 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <FinancingCTA />
      <RelatedGuides currentPath="/deck-financing" />
      <ContactHome />
    </main>
  );
}
