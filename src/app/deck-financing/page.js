import React from 'react';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import CallLink from '@/components/CallLink';
import FinancingCTA from '@/components/FinancingCTA';
import RelatedGuides from '@/components/RelatedGuides';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';
import { BUSINESS } from '@/lib/business';

const path = '/deck-financing';
const pageUrl = `${BUSINESS.url}${path}`;

export const metadata = buildMetadata({
  path,
  title: 'Deck Financing in Northern Virginia | We Finance Your Deck Project',
  description: 'Explore deck financing options for new decks, resurfacing, repairs, and composite deck upgrades in Northern Virginia. Build now and pay over time.',
});

const faqItems = [
  {
    question: 'Can I finance a new deck project?',
    answer: 'Financing options may be available for eligible new deck projects in Northern Virginia. Approval, terms, and available payment options depend on the financing provider and your application.',
  },
  {
    question: 'Can financing be used for deck resurfacing or composite upgrades?',
    answer: 'Ask us about current financing options for resurfacing, composite decking upgrades, railings, stairs, lighting, and related outdoor living improvements. Terms may vary by provider and project scope.',
  },
  {
    question: 'Do you guarantee financing approval?',
    answer: 'No. Loudoun Decks does not guarantee approval, rates, terms, or monthly payment amounts. Financing, when available, is subject to approval by the financing provider.',
  },
  {
    question: 'Is Loudoun Decks a lender?',
    answer: 'No. Loudoun Decks is a deck builder, not a lender. We can help homeowners understand which project scopes may be eligible and how to ask about current financing options.',
  },
  {
    question: 'What deck repair work may be eligible?',
    answer: 'Deck repair and safety improvement projects may include structural repair, resurfacing, board replacement, railing or stair repair, and replacement decisions after inspection. Eligibility depends on the financing provider and project details.',
  },
];

const eligibleProjects = [
  {
    title: 'New decks',
    href: '/services/new-decks',
    body: 'Custom wood, composite, Trex, and TimberTech deck builds planned around your home, permit needs, and outdoor living goals.',
  },
  {
    title: 'Deck resurfacing',
    href: '/services/deck-resurfacing',
    body: 'Board, railing, stair, and surface upgrades when the existing frame is safe and suitable for reuse.',
  },
  {
    title: 'Composite decking upgrades',
    href: '/composite-decks',
    body: 'Low-maintenance Trex, TimberTech, and AZEK upgrades for homeowners who want a longer-lasting deck surface.',
  },
  {
    title: 'Deck repair and safety improvements',
    href: '/services/deck-repair',
    body: 'Structural repair, board replacement, railing or stair repair, and repair-vs-replacement guidance after inspection.',
  },
];

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: 'Deck Financing in Northern Virginia',
    description: 'Deck financing options for new decks, resurfacing, repairs, and composite deck upgrades in Northern Virginia.',
    isPartOf: { '@id': `${BUSINESS.url}/#website` },
    about: { '@id': `${pageUrl}#service` },
    primaryImageOfPage: `${BUSINESS.url}/og-default.webp`,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.deck-financing-summary'],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: 'Deck Financing Guidance',
    serviceType: 'Deck project financing guidance',
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BUSINESS.url}/#localbusiness`,
      name: BUSINESS.name,
      telephone: BUSINESS.telephone,
      url: BUSINESS.url,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS.address.streetAddress,
        addressLocality: BUSINESS.address.addressLocality,
        addressRegion: BUSINESS.address.addressRegion,
        postalCode: BUSINESS.address.postalCode,
        addressCountry: BUSINESS.address.addressCountry,
      },
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
    description: 'Financing options may be available for eligible deck projects, including new decks, resurfacing, composite upgrades, deck repair, and safety improvements. Subject to approval. Terms may vary.',
    url: pageUrl,
    termsOfService: `${BUSINESS.url}/terms-of-service`,
    relatedLink: [
      `${BUSINESS.url}/services/new-decks`,
      `${BUSINESS.url}/services/deck-resurfacing`,
      `${BUSINESS.url}/services/deck-repair`,
      `${BUSINESS.url}/deck-cost-calculator`,
      `${BUSINESS.url}/contact`,
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BUSINESS.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Deck Financing',
        item: pageUrl,
      },
    ],
  },
];

const S = {
  section: { padding: '4rem 0' },
  container: { maxWidth: 1040, margin: '0 auto', padding: '0 1.5rem' },
  h2: { fontSize: '2rem', lineHeight: 1.2, fontWeight: 800, color: 'var(--color-dark)', margin: '0 0 1rem' },
  p: { color: '#475569', fontSize: '1rem', lineHeight: 1.75, margin: '0 0 1rem' },
  card: { background: '#fff', border: '1px solid #e2e8f0', borderRadius: 8, padding: '1.4rem' },
};

export default function DeckFinancingPage() {
  return (
    <main>
      {schemas.map((schema) => (
        <JsonLd key={schema['@id']} data={schema} />
      ))}

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '5rem 0 4rem' }}>
        <div style={{ ...S.container, maxWidth: 960 }}>
          <p style={{ color: 'var(--color-primary)', fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.9rem' }}>
            Deck Financing - Northern Virginia
          </p>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.6rem)', lineHeight: 1.05, fontWeight: 900, maxWidth: 800, margin: '0 0 1rem' }}>
            We Finance Your Deck Project
          </h1>
          <p className="deck-financing-summary" style={{ color: 'rgba(255,255,255,0.84)', fontSize: '1.18rem', lineHeight: 1.65, maxWidth: 760, margin: '0 0 1.8rem' }}>
            Build now. Pay over time. Flexible deck financing options for homeowners in Northern Virginia.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link href="/get-estimate" style={{ background: 'var(--color-primary)', color: '#fff', padding: '1rem 1.35rem', borderRadius: 8, textDecoration: 'none', fontWeight: 800 }}>
              Request a Free Estimate
            </Link>
            <Link href="#financing-options" style={{ background: '#fff', color: 'var(--color-dark)', padding: '1rem 1.35rem', borderRadius: 8, textDecoration: 'none', fontWeight: 800 }}>
              Check Financing Options
            </Link>
            <CallLink style={{ color: '#fff', fontWeight: 800, textDecoration: 'none', padding: '1rem 0' }}>
              Call Loudoun Decks
            </CallLink>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.62)', fontSize: '0.86rem', lineHeight: 1.55, marginTop: '1.35rem', maxWidth: 760 }}>
            Financing options may be available. Subject to approval. Terms may vary. Loudoun Decks is not a lender and does not guarantee approval, rates, terms, or monthly payment amounts.
          </p>
        </div>
      </section>

      <section style={{ ...S.section, background: '#f8fafc' }}>
        <div style={S.container}>
          <NamedAuthor context="deck financing guidance for Northern Virginia homeowners" lastUpdated="May 2026" />
          <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'minmax(0, 1.05fr) minmax(280px, 0.95fr)', gap: '2rem', alignItems: 'start' }}>
            <div>
              <h2 style={S.h2}>Why finance your deck project?</h2>
              <p style={S.p}>
                A deck is often a major home improvement project, especially when it includes composite decking, railings, stairs, lighting, screened porch work, or structural repair. Financing can help qualified homeowners move forward sooner while keeping cash available for other household priorities.
              </p>
              <p style={S.p}>
                The right approach starts with a clear scope. Loudoun Decks can inspect the existing structure, define whether repair, resurfacing, replacement, or a new build makes sense, and provide an estimate you can use when asking about current financing options.
              </p>
            </div>
            <div style={{ ...S.card, borderTop: '4px solid var(--color-primary)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 0.75rem' }}>Good fit when you want to:</h3>
              <ul style={{ paddingLeft: '1.2rem', color: '#475569', lineHeight: 1.8, margin: 0 }}>
                <li>Replace an unsafe or aging deck before another season of damage.</li>
                <li>Upgrade from wood to Trex, TimberTech, or AZEK composite decking.</li>
                <li>Bundle railings, stairs, lighting, or resurfacing into one project scope.</li>
                <li>Plan a higher-quality outdoor living project without cutting key safety or material decisions.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="financing-options" style={S.section}>
        <div style={S.container}>
          <h2 style={S.h2}>Deck projects eligible for financing</h2>
          <p style={{ ...S.p, maxWidth: 760 }}>
            Financing options may be available for several deck project types. Eligibility depends on the provider, approval, and final project details.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {eligibleProjects.map((project) => (
              <Link key={project.href} href={project.href} style={{ ...S.card, color: 'inherit', textDecoration: 'none', display: 'block' }}>
                <h3 style={{ color: 'var(--color-primary)', fontSize: '1.08rem', fontWeight: 800, margin: '0 0 0.5rem' }}>{project.title}</h3>
                <p style={{ ...S.p, fontSize: '0.94rem', margin: 0 }}>{project.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#fff7ed' }}>
        <div style={S.container}>
          <h2 style={S.h2}>How the financing process works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
            {[
              ['1', 'Request a free estimate', 'Tell us about the deck, resurfacing, repair, or upgrade you want to plan.'],
              ['2', 'Confirm the right project scope', 'We inspect, measure, and explain the difference between repair, resurfacing, replacement, and a new build.'],
              ['3', 'Ask about current financing options', 'Once the scope is clear, you can ask about financing options that may be available for your project.'],
              ['4', 'Review terms before deciding', 'Any financing decision should be reviewed carefully. Approval, terms, and payment details are provided by the financing provider.'],
            ].map(([step, title, body]) => (
              <div key={step} style={S.card}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, marginBottom: '0.9rem' }}>
                  {step}
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: '0 0 0.45rem' }}>{title}</h3>
                <p style={{ ...S.p, fontSize: '0.94rem', margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={S.section}>
        <div style={{ ...S.container, maxWidth: 880 }}>
          <h2 style={S.h2}>Financing FAQ</h2>
          <div style={{ display: 'grid', gap: '0.85rem', marginTop: '1.5rem' }}>
            {faqItems.map((item) => (
              <details key={item.question} style={{ ...S.card, padding: '1rem 1.2rem' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 800, color: 'var(--color-dark)' }}>{item.question}</summary>
                <p style={{ ...S.p, margin: '0.85rem 0 0' }}>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...S.section, background: '#f8fafc' }}>
        <div style={{ ...S.container, maxWidth: 900 }}>
          <h2 style={S.h2}>Plan the project before you choose financing</h2>
          <p style={S.p}>
            Start with a realistic project range, then review financing options around the actual scope. These pages help homeowners compare the most common paths:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', marginTop: '1rem' }}>
            {[
              ['/services/new-decks', 'New decks'],
              ['/services/deck-resurfacing', 'Deck resurfacing'],
              ['/services/deck-repair', 'Deck repair'],
              ['/deck-cost-calculator', 'Deck cost calculator'],
              ['/contact', 'Contact Loudoun Decks'],
            ].map(([href, label]) => (
              <Link key={href} href={href} style={{ background: '#fff', color: 'var(--color-primary)', border: '1px solid #e2e8f0', borderRadius: 8, padding: '0.75rem 0.95rem', fontWeight: 800, textDecoration: 'none' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinancingCTA />
      <RelatedGuides currentPath={path} />
    </main>
  );
}
