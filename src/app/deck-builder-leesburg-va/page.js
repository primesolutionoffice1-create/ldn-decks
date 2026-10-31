import React from 'react';
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

const PAGE_PATH = '/deck-builder-leesburg-va';
const PAGE_URL = 'https://ldndecks.com/deck-builder-leesburg-va';
const PAGE_TITLE = 'Deck Builder in Leesburg, VA | Loudoun Decks';
const PAGE_DESCRIPTION = 'Virginia Class A deck builder serving Leesburg in Loudoun County. Composite and wood decks, repair, porches, railings, and stairs. Call (571) 655-7207.';

const DIRECT_ANSWER = 'Loudoun Decks is a Virginia Class A contractor (license #2705191673) serving Loudoun County, including Leesburg. We build new composite and wood decks, repair and replace decks, and add screened porches, railings, stairs, and under-deck drainage. Call (571) 655-7207 to schedule a free on-site estimate.';
const INTRO_ANSWER = 'Loudoun Decks is a Virginia Class A contractor (license #2705191673), Trex Platinum Partner & TimberTech Certified, serving Loudoun County, including Leesburg. We build new composite and wood decks, repair and replace decks, and add screened porches, railings, stairs, and under-deck drainage. Call (571) 655-7207 to schedule a free on-site estimate.';

const services = [
  { href: '/services/new-decks', label: 'New decks', detail: 'New composite and wood decks for downtown houses and larger-lot communities.' },
  { href: '/composite-decks', label: 'Composite decks', detail: 'Composite deck planning, including Trex, TimberTech, and AZEK product lines.' },
  { href: '/wood-decks', label: 'Wood decks', detail: 'Wood decks, including cedar, when that finish fits the house and the review rules.' },
  { href: '/services/deck-repair', label: 'Deck repair', detail: 'Structural repair after the ledger, frame, stairs, and railings are inspected.' },
  { href: '/services/deck-replacement', label: 'Deck replacement', detail: 'Replacement when the existing frame should not stay in place.' },
  { href: '/screened-porch-builder-northern-virginia', label: 'Screened porches', detail: 'Screened porches planned with the deck framing.' },
  { href: '/services/trex-railings', label: 'Railings', detail: 'Railing choices for the deck height, the stairs, and any view the owner wants to keep.' },
  { href: '/education/deck-stair-code-rise-run-virginia', label: 'Stairs', detail: 'Stair layout is part of new decks, repairs, and replacements.' },
  { href: '/services/under-deck-patios', label: 'Under-deck drainage', detail: 'Drainage and dry space under an elevated deck when the grade allows it.' },
];

const leesburgFAQs = [
  {
    q: 'Who is a deck builder in Leesburg, VA?',
    a: DIRECT_ANSWER,
  },
  {
    q: 'What deck services does Loudoun Decks provide in Leesburg?',
    a: 'In Leesburg, Loudoun Decks builds new composite and wood decks, repairs and replaces decks, and adds screened porches, railings, stairs, and under-deck drainage. The written estimate is based on the property, the structure, and the approvals that address requires.',
  },
  {
    q: 'Which office permits a deck in Leesburg, VA?',
    a: 'A Leesburg mailing address does not establish jurisdiction. Town of Leesburg review or Loudoun County review can apply, depending on the property address. Loudoun County states that requirements can differ inside incorporated towns, and that all decks need a building permit and a zoning permit where the county is the reviewing authority. Confirm the address with the Town of Leesburg and Loudoun County before filing. This page does not assign the building permit to one office.',
  },
  {
    q: 'Do Leesburg deck projects need HOA or historic review?',
    a: 'Some Leesburg-area communities have architectural review, and exterior changes in the historic district may need additional Town review. Confirm the association and any historic-district rules for the property. Lansdowne has a published guide on this site. Do not assume a neighboring community uses the same material list.',
  },
  {
    q: 'What lot and terrain notes apply in Leesburg?',
    a: 'Leesburg includes historic downtown houses and larger-lot communities such as River Creek and Lansdowne toward the Potomac. Estate lots and older houses need different layouts. Slope, drainage, and setbacks should be confirmed on the property before the deck is drawn. A fixed review period is not stated here.',
  },
  {
    q: 'Are there published Leesburg deck projects?',
    a: 'No. The project showcase does not list a Leesburg deck. This page does not describe a Leesburg build, a price, or a list of associations already completed.',
  },
];

export const metadata = buildMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: '/social/deck-builder-leesburg-va-social.png',
});

export default function DeckBuilderLeesburgPage() {
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
        city="Leesburg"
        url={PAGE_URL}
        description="Loudoun Decks, a Virginia Class A contractor (license #2705191673), builds and repairs decks in Leesburg, Loudoun County. Call (571) 655-7207 for a free on-site estimate."
      />
      <header style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 1.5rem 2.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ margin: '0 0 0.75rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.8rem', color: '#d7e6f5' }}>
            Leesburg, Loudoun County, VA
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
        question="Who is a deck builder in Leesburg, VA?"
        answer={INTRO_ANSWER}
        facts={[
          'Business address: 13704 Winding Oak Cir, Centreville, VA 20121. Leesburg is a Loudoun County service area.',
          'License: Virginia Class A Contractor License #2705191673. Verify current status with Virginia DPOR.',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request a Leesburg estimate' },
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun County permit guide' },
          { href: '/lansdowne-hoa-deck-rules', label: 'Lansdowne HOA deck rules' },
        ]}
      />
      <section style={{ padding: '2.5rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.75rem' }}>Deck services in Leesburg</h2>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1.25rem' }}>
          The Leesburg scope is new composite and wood decks, deck repair, deck replacement, screened porches, railings, stairs, and under-deck drainage. Cedar remains a wood option where the house and the review rules call for it. Manufacturer warranty terms are separate from the written workmanship terms in the project agreement.
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
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.75rem' }}>Leesburg permits, HOAs, and lots</h2>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1rem' }}>
          Leesburg is an incorporated town inside Loudoun County, and a Leesburg mailing address alone does not decide the reviewing office. Site data says Town of Leesburg or Loudoun County review can apply, depending on the property address. Confirm that address before filing. Official starting points: <a href="https://www.leesburgva.gov/departments/community-development/community-development-faqs">Town of Leesburg community development FAQ</a> and <a href="https://www.loudoun.gov/1166/Decks">Loudoun County deck permits</a>. The <Link href="/deck-permit-loudoun-county-virginia">Loudoun County permit guide</Link> states that requirements can differ inside incorporated towns.
        </p>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1rem' }}>
          Neighborhood names already published for Leesburg include Downtown Leesburg, Tuscarora Creek, Lansdowne, River Creek, and Beacon Hill. Some of those communities have architectural review. Historic-district exterior work may need a separate Town review. Read the <Link href="/lansdowne-hoa-deck-rules">Lansdowne HOA deck rules</Link> and the <Link href="/deck-builder-lansdowne-va">Lansdowne deck builder page</Link> when the property is in Lansdowne, then check the current association documents.
        </p>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: 0 }}>
          The local housing mix is historic homes, brick colonials, and larger estate properties. River Creek and Lansdowne sit toward the Potomac. Grade, drainage, and the view from the lot should be checked on that property before railings and stair runs are chosen. This page does not publish a lot-size minimum.
        </p>
      </section>
      <section style={{ padding: '0 1.5rem 2.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.75rem' }}>Published Leesburg projects</h2>
        <p style={{ lineHeight: 1.7, color: '#333', margin: 0 }}>
          The project showcase does not list a Leesburg deck. No Leesburg project photo, price, or completed-association list is claimed here. The estimate is written for the property in front of the crew.
        </p>
      </section>
      <ServicesFAQ
        title="Leesburg deck builder questions"
        faqs={leesburgFAQs}
        canonicalUrl={PAGE_URL}
      />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>Related Leesburg and Loudoun pages</h2>
        <ul style={{ lineHeight: 1.8, paddingLeft: '1.2rem' }}>
          <li><Link href="/composite-decks/leesburg">Composite decks in Leesburg</Link></li>
          <li><Link href="/deck-repair/leesburg">Deck repair in Leesburg</Link></li>
          <li><Link href="/screened-porches/leesburg">Screened porches in Leesburg</Link></li>
          <li><Link href="/deck-resurfacing-vs-replacement">Resurface or replace a deck</Link></li>
          <li><Link href="/hoa-deck-rules-northern-virginia">HOA deck rules in Northern Virginia</Link></li>
          <li><Link href="/deck-builder-ashburn-va">Deck builder in Ashburn, VA</Link></li>
          <li><Link href="/deck-builder-sterling-va">Deck builder in Sterling, VA</Link></li>
          <li><Link href="/deck-builders-loudoun">Loudoun County deck builders</Link></li>
          <li><Link href="/get-estimate">Request a written estimate</Link></li>
        </ul>
      </section>
      <CityLeadFormSection
        city="Leesburg"
        county="Loudoun County"
        service="deck replacement, deck repair, or composite deck"
        formLocation="local_city_leesburg_deck_builder"
      />
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Leesburg" />
        </div>
      </section>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <NamedAuthor context="Leesburg and Loudoun County" lastUpdated="2026-10-31" />
      </div>
      <CountyHubLinks countySlug="loudoun-county" />
      <RelatedGuides currentPath={PAGE_PATH} />
      <SimpleCTA title="Request a Leesburg deck estimate" buttonText="Request Estimate" link="/get-estimate" />
      <ContactHome />
    </main>
  );
}
