import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AboutHeader from '@/components/AboutHeader';
import QualityLeader from '@/components/QualityLeader';
import StatsRow from '@/components/StatsRow';
import AboutDetails from '@/components/AboutDetails';
import TeamGrid from '@/components/TeamGrid';
import ContactHome from '@/components/ContactHome';
import SimpleCTA from '@/components/SimpleCTA';
import RelatedGuides from '@/components/RelatedGuides';
import JsonLd from '@/components/JsonLd';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import { BUSINESS } from '@/lib/business';
import AboutTrustExpansion from '@/components/AboutTrustExpansion';

export const metadata = buildMetadata({
  path: '/about',
  title: 'About Loudoun Decks | Trusted Deck Builder Northern Virginia',
  description: "Meet the team behind Northern Virginia's trusted deck builder. VA Class A Licensed, Trex Platinum Partner, Google reviews. Founded by Nicolae Zugrav. Serving Loudoun, Fairfax & Prince William.",
  image: '/social/about-loudoun-decks-social.png',
});

const aboutFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://ldndecks.com/about#faq",
  "mainEntity": [
    { "@type": "Question", "name": "Who owns Loudoun Decks?", "acceptedAnswer": { "@type": "Answer", "text": "Loudoun Decks was founded and is operated by Nicolae Zugrav, a Virginia Class A Licensed contractor specializing in composite deck construction and outdoor living projects across Northern Virginia." } },
    { "@type": "Question", "name": "Is Loudoun Decks licensed and insured?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Loudoun Decks holds a Virginia Class A Contractor License issued by the Department of Professional and Occupational Regulation (DPOR), carries comprehensive general liability insurance and workers' compensation coverage, and maintains Trex Pro and TimberTech certifications." } },
    { "@type": "Question", "name": "What areas does Loudoun Decks serve?", "acceptedAnswer": { "@type": "Answer", "text": "Loudoun Decks serves Loudoun County, Fairfax County, Prince William County, Arlington County, and Stafford County in Northern Virginia. We regularly work in Ashburn, Leesburg, Sterling, Reston, McLean, Vienna, Centreville, Manassas, Haymarket, and surrounding communities." } },
    { "@type": "Question", "name": "What is Loudoun Decks' Google reviews?", "acceptedAnswer": { "@type": "Answer", "text": "Loudoun Decks maintains a public Google review profile from Northern Virginia homeowners. Review text, dates, counts, and ratings should be verified directly on the public Google profile before quoting them." } },
    { "@type": "Question", "name": "What certifications does Loudoun Decks hold?", "acceptedAnswer": { "@type": "Answer", "text": "Loudoun Decks publishes verification paths for Trex Pro, TimberTech, BBB, Houzz, Virginia DPOR license, and North American Deck and Railing Association (NADRA) profiles. Current profile details should be verified directly with each public source." } },
    { "@type": "Question", "name": "Does Loudoun Decks offer a warranty?", "acceptedAnswer": { "@type": "Answer", "text": "Loudoun Decks provides written workmanship warranty terms with project paperwork. Manufacturer material warranties vary by selected product line, so homeowners should review the current Trex, TimberTech, AZEK, or other manufacturer warranty documents before signing." } },
  ],
};

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://ldndecks.com/about#aboutpage',
  url: 'https://ldndecks.com/about',
  name: 'About Loudoun Decks',
  description: "Company trust, process, local expertise, planning standards and homeowner resources for Loudoun Decks in Northern Virginia.",
  isPartOf: { '@id': 'https://ldndecks.com/#website' },
  about: { '@id': 'https://ldndecks.com/#organization' },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://ldndecks.com/home-page-ldn.webp',
  },
  significantLink: [
    'https://ldndecks.com/reviews',
    'https://ldndecks.com/before-and-after',
    'https://ldndecks.com/about/certifications-and-licenses',
    'https://ldndecks.com/tools',
    'https://ldndecks.com/composite-deck-cost-northern-virginia',
    'https://ldndecks.com/contact',
  ],
};

export default function AboutPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-02" url="https://ldndecks.com/about" name="About Loudoun Decks | Trusted Deck Builder Northern Virginia" description="Meet the team behind Loudoun Decks. Verify Virginia DPOR license, Trex, TimberTech, BBB, Houzz, and public review profile links." speakable />
      <JsonLd data={aboutFaqSchema} />
      <JsonLd data={aboutPageSchema} />
      <AboutHeader />
      <QualityLeader />
      <StatsRow />

      <section style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-27" />

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem', marginTop: '2rem' }}>Founded by a Builder, Not a Salesman</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Loudoun Decks was founded by <strong>Nicolae Zugrav</strong>, a Virginia Class A Licensed contractor who started in construction framing houses and learned every phase of residential building before specializing in deck construction and outdoor living.</p>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The business exists because Nick saw a gap in Northern Virginia: homeowners could either hire a large national franchise with high overhead and middlemen, or take a chance on an unlicensed handyman. There was no local, owner-operated deck company that combined structural expertise with transparent pricing and direct communication.</p>
              <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Today, Nick is involved from the first walkthrough to project closeout. When you call Loudoun Decks, you work with a local team that can discuss design, permitting, materials, and construction details directly instead of routing every decision through layers of sales handoff.</p>
            </div>
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Credentials You Can Verify</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { badge: 'VA Class A License', title: 'Virginia Contractor License', text: 'Class A Licensed by DPOR — authorized for projects of any value in Virginia.' },
              { badge: 'TrexPro', title: 'Trex Profile Verification', text: 'TrexPro profile details should be verified directly through Trex before citing current status.' },
              { badge: 'TimberTech', title: 'TimberTech Profile Verification', text: 'TimberTech installer details should be verified directly through AZEK/TimberTech before citing current status.' },
              { badge: 'BBB', title: 'BBB Business Profile', text: 'Better Business Bureau profile details, accreditation status, rating, and complaint history should be verified directly on BBB.' },
              { badge: 'NADRA', title: 'NADRA Member', text: 'North American Deck and Railing Association — Builder/Contractor/Remodeler member.' },
              { badge: 'Google reviews', title: 'Public Google Review Profile', text: 'Public Google Business Profile reviews from Northern Virginia homeowners. Verify current count and review text directly on Google Maps.' },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f9f9f9', borderRadius: 8, padding: '1.25rem', border: '1px solid #e5e5e5' }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.badge}</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#555' }}>{item.text}</p>
              </div>
            ))}
          </div>
          <p style={{ marginBottom: '2.5rem' }}><Link href="/about/certifications-and-licenses" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>View all certifications with verification links →</Link></p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>What We Build</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>We specialize in composite deck construction and outdoor living projects across Northern Virginia. Every service listed below is work we do ourselves — no subcontractors, no referral fees, no middlemen.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {[
              ['/services/new-decks', 'Custom Deck Building'],
              ['/composite-decks', 'Composite Decks'],
              ['/trex-decks', 'Trex Decks'],
              ['/timbertech-decks', 'TimberTech Decks'],
              ['/services/deck-replacement', 'Deck Replacement'],
              ['/services/deck-resurfacing', 'Deck Resurfacing'],
              ['/screened-porch-builder-northern-virginia', 'Screened Porches'],
              ['/covered-deck-builder-northern-virginia', 'Covered Decks'],
              ['/outdoor-kitchen-builder-northern-virginia', 'Outdoor Kitchens'],
              ['/services/gazebo-pergola', 'Pergolas & Gazebos'],
              ['/services/patios', 'Patios'],
              ['/services/deck-repair', 'Deck Repair'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ display: 'block', padding: '0.6rem 1rem', background: '#f9f9f9', border: '1px solid #e5e5e5', borderRadius: 6, textDecoration: 'none', color: 'var(--color-dark)', fontSize: '0.9rem', fontWeight: 500 }}>{text}</Link>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Where We Work</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Loudoun Decks operates exclusively in Northern Virginia. We are based in Centreville and serve homeowners within a 40-mile radius — close enough that Nick can be on any jobsite within 45 minutes.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { county: 'Loudoun County', cities: 'Ashburn, Leesburg, Sterling, Brambleton, South Riding, Purcellville', href: '/areas-we-serve' },
              { county: 'Fairfax County', cities: 'Reston, McLean, Vienna, Great Falls, Centreville, Herndon, Chantilly, Oakton', href: '/areas-we-serve' },
              { county: 'Prince William County', cities: 'Manassas, Haymarket, Gainesville, Bristow, Woodbridge', href: '/areas-we-serve' },
              { county: 'Also Serving', cities: 'Arlington, Alexandria, Falls Church, Stafford, and surrounding areas', href: '/areas-we-serve' },
            ].map((area) => (
              <div key={area.county}>
                <h3 style={{ fontWeight: 600, marginBottom: '0.25rem', fontSize: '0.95rem' }}>{area.county}</h3>
                <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.5 }}>{area.cities}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Public Review Profiles</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
            Loudoun Decks maintains public review profiles on Google, Yelp, and BBB. We link to those sources directly so homeowners can verify current review text, dates, and platform details at the source.
          </p>
          <p style={{ marginBottom: '2.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Open public review profiles →</Link></p>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>How We Work</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { step: '1', title: 'Free Consultation', text: 'Call or submit the online form. We discuss your project, answer questions, and schedule a site visit if it is a good fit.' },
              { step: '2', title: 'Site Visit & Design', text: 'On-site walkthrough to measure, assess structural conditions, discuss materials, and produce a dimensioned design with a written scope.' },
              { step: '3', title: 'Permits & HOA', text: 'We prepare and submit the county building permit and HOA architectural review package concurrently. You sign nothing until both are approved.' },
              { step: '4', title: 'Build & Inspect', text: 'Construction with scheduled county inspections at each phase. You get a clean closeout with passed final inspection and warranty registration.' },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: 'center', padding: '1.25rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem', fontWeight: 700 }}>{item.step}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#555' }}>{item.text}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: 'Who owns Loudoun Decks?', a: 'Loudoun Decks was founded and is operated by Nicolae Zugrav, a Virginia Class A Licensed contractor specializing in composite deck construction and outdoor living projects across Northern Virginia.' },
            { q: 'Is Loudoun Decks licensed and insured?', a: 'Yes. We hold a Virginia Class A Contractor License, carry comprehensive general liability insurance and workers\' compensation, and maintain Trex Pro and TimberTech certifications. Verify at dpor.virginia.gov.' },
            { q: 'What areas does Loudoun Decks serve?', a: 'We serve Loudoun, Fairfax, Prince William, Arlington, and Stafford counties in Northern Virginia — including Ashburn, Leesburg, Sterling, Reston, McLean, Vienna, Centreville, Manassas, Haymarket, and 25+ other communities.' },
            { q: 'What is your Google reviews?', a: 'Loudoun Decks maintains a public Google Business Profile. Verify current count, rating, and review text directly on Google Maps.' },
            { q: 'What certifications do you hold?', a: 'We publish verification paths for Trex Pro, TimberTech, BBB, Houzz, Virginia DPOR license, and NADRA profiles. Current profile details should be verified directly with each public source.' },
            { q: 'Do you offer a warranty?', a: 'Yes. Project paperwork includes written workmanship warranty terms, and manufacturer material coverage depends on the selected product line. We review those documents with homeowners before signing.' },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: '2.5rem 0 1rem' }}>Learn More</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/about/certifications-and-licenses', 'Certifications & Licenses — verify our credentials'],
              ['/reviews', 'Customer Reviews — public profile verification'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder in Northern Virginia'],
              ['/services', 'All Services'],
              ['/before-and-after', 'Before & After Gallery'],
              ['/deck-cost-calculator', 'Free Deck Cost Calculator'],
              ['/get-estimate', 'Get a Free Estimate'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}><Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link></li>
            ))}
          </ul>
        </div>
      </section>

      <AboutDetails />
      <AboutTrustExpansion />
      <TeamGrid />
      <SimpleCTA title="Ready to Transform Your Outdoor Space?" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/about" />
      <ContactHome />
    </main>
  );
}
