import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import CityLeadFormSection from '@/components/CityLeadFormSection';
import CallLink from '@/components/CallLink';
import CountyHubLinks from '@/components/CountyHubLinks';
import { buildMetadata } from '@/lib/seo';

const PAGE_PATH = '/deck-builder-sterling-va';
const PAGE_URL = 'https://ldndecks.com/deck-builder-sterling-va';
const PAGE_TITLE = 'Deck Builder in Sterling, VA | Loudoun Decks';
const PAGE_DESCRIPTION = 'Virginia Class A deck builder serving Sterling in Loudoun County. Composite and wood decks, repair, porches, railings, and stairs. Call (571) 655-7207.';

const DIRECT_ANSWER = 'Loudoun Decks is a Virginia Class A contractor (license #2705191673) serving Loudoun County, including Sterling. We repair and replace decks, build new composite and wood decks, and add screened porches, railings, stairs, and under-deck drainage. Call (571) 655-7207 to schedule a free on-site estimate.';
const INTRO_ANSWER = 'Loudoun Decks is a Virginia Class A contractor (license #2705191673), Trex Platinum Partner & TimberTech Certified, serving Loudoun County, including Sterling. We repair and replace decks, build new composite and wood decks, and add screened porches, railings, stairs, and under-deck drainage. Call (571) 655-7207 to schedule a free on-site estimate.';

const services = [
  { href: '/services/deck-repair', label: 'Deck repair', detail: 'Repair for ledger, framing, stairs, and railings after the structure is inspected.' },
  { href: '/services/deck-replacement', label: 'Deck replacement', detail: 'Replacement when an older wood deck should not be resurfaced.' },
  { href: '/deck-resurfacing-vs-replacement', label: 'Resurface or replace', detail: 'The frame inspection decides whether the existing structure can stay.' },
  { href: '/services/new-decks', label: 'New decks', detail: 'New composite and wood decks when the project is not a repair of the current frame.' },
  { href: '/composite-decks', label: 'Composite decks', detail: 'Composite surfaces, including Trex, TimberTech, and AZEK product lines.' },
  { href: '/wood-decks', label: 'Wood decks', detail: 'Wood deck construction where that material is the right fit.' },
  { href: '/screened-porch-builder-northern-virginia', label: 'Screened porches', detail: 'Screened porch work planned with the deck structure.' },
  { href: '/services/trex-railings', label: 'Railings', detail: 'Railing replacement and new railing layouts, including townhome decks.' },
  { href: '/education/deck-stair-code-rise-run-virginia', label: 'Stairs', detail: 'Stair rebuilds and new stair runs are part of repair and replacement work.' },
  { href: '/services/under-deck-patios', label: 'Under-deck drainage', detail: 'Dry space under an elevated deck when the frame and grade allow it.' },
];

const sterlingFAQs = [
  {
    q: 'Who handles deck repair in Sterling, VA?',
    a: DIRECT_ANSWER,
  },
  {
    q: 'What deck services does Loudoun Decks provide in Sterling?',
    a: 'In Sterling, Loudoun Decks repairs and replaces decks, builds new composite and wood decks, and adds screened porches, railings, stairs, and under-deck drainage. Resurfacing is recommended only after the ledger, joists, posts, stairs, railings, and footings are inspected.',
  },
  {
    q: 'Who permits a deck in Sterling, VA?',
    a: 'Sterling deck permits are Loudoun County permits. Loudoun County states that all decks require a building permit and a zoning permit, and applications are filed through the county LandMARC portal. HOA approval does not replace the county permits. This page does not state a review time in days.',
  },
  {
    q: 'Do Sterling neighborhoods require HOA review?',
    a: 'HOA review is common in Cascades and Lowes Island. Other Sterling communities, including Sterling Park, Countryside, Sugarland Run, and Potomac Falls, may have their own association rules. Confirm the association for the property before materials are chosen. This page does not claim a submission history with those associations.',
  },
  {
    q: 'What kinds of homes and lots are typical in Sterling?',
    a: 'Sterling housing in the site data includes split-levels, colonials, townhomes, and established suburban homes, with aging wood decks and family backyards called out as the local context. Deck size, stair layout, and access depend on that lot. Townhome decks and single-family decks are both in scope.',
  },
  {
    q: 'Which Sterling projects are published?',
    a: 'The project showcase lists DECK/BALCONY RESURFACING, Sterling, December 2024. That record does not include a price. No other Sterling project is claimed on this page.',
  },
];

export const metadata = buildMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: '/social/deck-builder-sterling-va-social.png',
});

export default function DeckBuilderSterlingPage() {
  return (
    <main>
      <WebPageSchema
        dateModified="2026-10-31"
        url={PAGE_URL}
        name={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        speakable
      />
      <LocalBusinessSchema
        city="Sterling"
        url={PAGE_URL}
        description="Loudoun Decks, a Virginia Class A contractor (license #2705191673), repairs and builds decks in Sterling, Loudoun County. Call (571) 655-7207 for a free on-site estimate."
      />
      <header style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 1.5rem 2.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ margin: '0 0 0.75rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.8rem', color: '#d7e6f5' }}>
            Sterling, Loudoun County, VA
          </p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', lineHeight: 1.15, fontWeight: 800, margin: '0 0 1.25rem' }}>
            {PAGE_TITLE}
          </h1>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.75rem 1.25rem', fontWeight: 700, borderRadius: 6, textDecoration: 'none' }}>
              Call (571) 655-7207
            </CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.7rem 1.25rem', fontWeight: 700, borderRadius: 6, textDecoration: 'none' }}>
              Request a free on-site estimate
            </Link>
          </div>
        </div>
      </header>
      <GeoAnswerBlock
        question="Who handles deck repair in Sterling, VA?"
        answer={INTRO_ANSWER}
        facts={[
          'Business address: 13704 Winding Oak Cir, Centreville, VA 20121. Sterling is a Loudoun County service area.',
          'License: Virginia Class A Contractor License #2705191673. Verify current status with Virginia DPOR.',
        ]}
        links={[
          { href: '/deck-repair/sterling', label: 'Deck repair in Sterling' },
          { href: '/get-estimate', label: 'Request a Sterling estimate' },
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun County permit guide' },
        ]}
      />
      <section style={{ padding: '2.5rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.75rem' }}>Deck repair and building services in Sterling</h2>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1.25rem' }}>
          Sterling work often starts with an older wood deck. Loudoun Decks repairs and replaces decks, builds new composite and wood decks, and adds screened porches, railings, stairs, and under-deck drainage. A resurfacing recommendation follows a frame inspection. Manufacturer warranty terms are separate from the written workmanship terms in the project agreement.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem' }}>
          {services.map((service) => (
            <li key={service.href} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '0.9rem 1rem' }}>
              <Link href={service.href} style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{service.label}</Link>
              <p style={{ margin: '0.35rem 0 0', lineHeight: 1.6, color: '#444' }}>{service.detail}</p>
            </li>
          ))}
        </ul>
      </section>
      <section style={{ padding: '0 1.5rem 2.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.75rem' }}>Sterling permits, HOAs, and lots</h2>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1rem' }}>
          Sterling is in Loudoun County. Deck permits are county permits filed through LandMARC. Loudoun County states that all decks require a building permit and a zoning permit. Use the <Link href="/deck-permit-loudoun-county-virginia">Loudoun County deck permit guide</Link> and the <a href="https://www.loudoun.gov/1166/Decks">official Loudoun County deck page</a>. This page does not rank county review speed or give a day count.
        </p>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1rem' }}>
          HOA review is common in Cascades and Lowes Island. Neighborhood names already in the site data also include Sterling Park, Countryside, Sugarland Run, and Potomac Falls. Confirm the association for the address. The <Link href="/deck-builder-cascades-va">Cascades deck builder page</Link> covers that community in more detail.
        </p>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: 0 }}>
          The published housing mix is split-levels, colonials, townhomes, and established suburban homes. Many local projects begin as maintenance or safety problems on older wood decks. Stair layout and access follow the lot. Footing depth follows the current Loudoun County requirement and is confirmed on the plans.
        </p>
      </section>
      <section style={{ padding: '0 1.5rem 2.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.75rem' }}>Published Sterling project</h2>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1rem' }}>
          One Sterling record is in the project showcase. The title and date are copied from that data. No price is attached.
        </p>
        <article style={{ border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ position: 'relative', width: '100%', height: 280 }}>
            <Image src="/images/img04.jpeg" alt="Deck and balcony resurfacing, Sterling, December 2024" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" />
          </div>
          <p style={{ margin: 0, padding: '0.9rem 1rem', lineHeight: 1.5 }}>
            <Link href="/showcase/deck-resurfacing-sterling">DECK/BALCONY RESURFACING</Link>
            {' '}— Sterling, December 2024.
          </p>
        </article>
      </section>
      <ServicesFAQ
        title="Sterling deck repair and builder questions"
        faqs={sterlingFAQs}
        canonicalUrl={PAGE_URL}
      />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>Related Sterling and Loudoun pages</h2>
        <ul style={{ lineHeight: 1.8, paddingLeft: '1.2rem' }}>
          <li><Link href="/deck-repair/sterling">Deck repair in Sterling</Link></li>
          <li><Link href="/composite-decks/sterling">Composite decks in Sterling</Link></li>
          <li><Link href="/screened-porches/sterling">Screened porches in Sterling</Link></li>
          <li><Link href="/services/deck-inspection">Deck inspection</Link></li>
          <li><Link href="/deck-builder-ashburn-va">Deck builder in Ashburn, VA</Link></li>
          <li><Link href="/deck-builder-leesburg-va">Deck builder in Leesburg, VA</Link></li>
          <li><Link href="/deck-builders-loudoun">Loudoun County deck builders</Link></li>
          <li><Link href="/get-estimate">Request a written estimate</Link></li>
        </ul>
      </section>
      <CityLeadFormSection
        city="Sterling"
        county="Loudoun County"
        service="deck repair, deck replacement, or composite deck"
        formLocation="local_city_sterling_deck_builder"
      />
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Sterling" />
        </div>
      </section>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <NamedAuthor context="Sterling and Loudoun County" lastUpdated="2026-10-31" />
      </div>
      <CountyHubLinks countySlug="loudoun-county" />
      <RelatedGuides currentPath={PAGE_PATH} />
      <SimpleCTA title="Request a Sterling deck estimate" buttonText="Request Estimate" link="/get-estimate" />
      <ContactHome />
    </main>
  );
}
