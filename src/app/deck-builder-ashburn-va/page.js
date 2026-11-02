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
import { QUOTE_SOURCE, RESURFACE_QUOTED } from '@/lib/quotedPrices';

const PAGE_PATH = '/deck-builder-ashburn-va';
const PAGE_URL = 'https://ldndecks.com/deck-builder-ashburn-va';
const PAGE_TITLE = 'Deck Builder in Ashburn, VA | Loudoun Decks';
const PAGE_DESCRIPTION = 'Virginia Class A deck builder serving Ashburn in Loudoun County. Composite and wood decks, repair, porches, railings, and stairs. Call (571) 655-7207.';

const DIRECT_ANSWER = 'Loudoun Decks is a Virginia Class A contractor (license #2705191673) serving Loudoun County, including Ashburn. We build new composite and wood decks, repair and replace decks, and add screened porches, railings, stairs, and under-deck drainage. Call (571) 655-7207 to schedule a free on-site estimate.';
const INTRO_ANSWER = 'Loudoun Decks is a Virginia Class A contractor (license #2705191673), Trex Platinum Partner & TimberTech Certified, serving Loudoun County, including Ashburn. We build new composite and wood decks, repair and replace decks, and add screened porches, railings, stairs, and under-deck drainage. Call (571) 655-7207 to schedule a free on-site estimate.';
const RESURFACE_DECISION = `Whether an Ashburn builder deck is resurfaced or fully replaced depends on what the inspection finds, not on a fixed percentage. ${RESURFACE_QUOTED} ${QUOTE_SOURCE}`;

const services = [
  { href: '/services/new-decks', label: 'New decks', detail: 'New composite and wood decks sized to the lot and the house.' },
  { href: '/composite-decks', label: 'Composite decks', detail: 'Composite deck planning, including Trex, TimberTech, and AZEK product lines.' },
  { href: '/wood-decks', label: 'Wood decks', detail: 'Wood deck construction when that material fits the house and the review packet.' },
  { href: '/services/deck-repair', label: 'Deck repair', detail: 'Ledger, framing, stair, and railing repairs after an on-site look at the structure.' },
  { href: '/services/deck-replacement', label: 'Deck replacement', detail: 'Full replacement when the existing frame should not be reused.' },
  { href: '/screened-porch-builder-northern-virginia', label: 'Screened porches', detail: 'Screened porch additions planned with the deck, not as an unrelated add-on.' },
  { href: '/services/trex-railings', label: 'Railings', detail: 'Railing layouts for the deck height, the stair runs, and the community rules.' },
  { href: '/education/deck-stair-code-rise-run-virginia', label: 'Stairs', detail: 'Stair layout is part of new decks, repairs, and replacements.' },
  { href: '/services/under-deck-patios', label: 'Under-deck drainage', detail: 'Dry space under an elevated deck when the frame and grade allow it.' },
];

const ashburnFAQs = [
  {
    q: 'Who is a deck builder in Ashburn, VA?',
    a: DIRECT_ANSWER,
  },
  {
    q: 'What deck services does Loudoun Decks provide in Ashburn?',
    a: `In Ashburn, Loudoun Decks builds new composite and wood decks, repairs and replaces decks, and adds screened porches, railings, stairs, and under-deck drainage. ${RESURFACE_DECISION}`,
  },
  {
    q: 'Who permits a deck in Ashburn, VA?',
    a: 'Ashburn deck permits are Loudoun County permits. Loudoun County states that all decks require a building permit and a zoning permit, and applications are filed through the county LandMARC portal. HOA approval does not replace those county permits. Confirm the current instructions on the official Loudoun County deck page before filing.',
  },
  {
    q: 'Do Ashburn deck projects need HOA approval?',
    a: 'Most Ashburn neighborhoods need an architectural review packet in addition to the Loudoun County permit. Named communities on this site include Brambleton, Broadlands, Ashburn Village, and Moorefield Station. Confirm the association that governs the property, including color and material rules, before the drawings are submitted.',
  },
  {
    q: 'What should Ashburn homeowners check on the lot?',
    a: 'Ashburn is largely planned-community housing, including colonial, craftsman, and newer production homes. Setbacks, grade, drainage, and any common-area edge should be taken from the plat for that lot. Footing depth follows the current Loudoun County requirement and should be confirmed on the plans before filing.',
  },
  {
    q: 'Which Ashburn projects are published?',
    a: 'The project showcase lists two Ashburn records: BUILD NEW COMPOSITE DECK, Ashburn, October 2024, and NEW CUSTOM WOOD FENCE, Ashburn, October 2024. Those records do not include a price. No other Ashburn deck is claimed on this page.',
  },
];

export const metadata = buildMetadata({
  path: PAGE_PATH,
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  image: '/social/deck-builder-ashburn-va-social.png',
});

export default function DeckBuilderAshburnPage() {
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
        city="Ashburn"
        url={PAGE_URL}
        description="Loudoun Decks, a Virginia Class A contractor (license #2705191673), builds and repairs decks in Ashburn, Loudoun County. Call (571) 655-7207 for a free on-site estimate."
      />
      <header style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 1.5rem 2.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ margin: '0 0 0.75rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.8rem', color: '#d7e6f5' }}>
            Ashburn, Loudoun County, VA
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
        question="Who is a deck builder in Ashburn, VA?"
        answer={INTRO_ANSWER}
        facts={[
          'Business address: 13704 Winding Oak Cir, Centreville, VA 20121. Ashburn is a Loudoun County service area.',
          'License: Virginia Class A Contractor License #2705191673. Verify current status with Virginia DPOR.',
        ]}
        links={[
          { href: '/get-estimate', label: 'Request an Ashburn estimate' },
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun County permit guide' },
          { href: '/deck-builders-loudoun', label: 'Loudoun County deck builders' },
        ]}
      />
      <section style={{ padding: '2.5rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.75rem' }}>Deck services in Ashburn</h2>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1.25rem' }}>
          The Ashburn scope is new composite and wood decks, deck repair, deck replacement, screened porches, railings, stairs, and under-deck drainage. Material lines such as Trex, TimberTech, and AZEK are product options. Manufacturer warranty terms are separate from the written workmanship terms in the project agreement.
        </p>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1.25rem' }}>
          {RESURFACE_DECISION}{' '}
          <Link href="/deck-resurfacing-vs-replacement">Compare resurfacing and replacement</Link>.
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
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.75rem' }}>Ashburn permits, HOAs, and lots</h2>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1rem' }}>
          Ashburn is in Loudoun County. Deck permits are county permits filed through LandMARC. Loudoun County states that all decks require a building permit and a zoning permit. Start with the <Link href="/deck-permit-loudoun-county-virginia">Loudoun County deck permit guide</Link> and the <a href="https://www.loudoun.gov/1166/Decks">official Loudoun County deck page</a>. Review time depends on the application and the county workload. This page does not state a number of days.
        </p>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1rem' }}>
          Most Ashburn neighborhoods also need an HOA architectural packet. Communities already named in the site data include Brambleton, Broadlands, Ashburn Village, and Moorefield Station, along with Belmont Country Club, One Loudoun, and Loudoun Valley Estates. Each association sets its own material and color rules. Related pages: <Link href="/ashburn-village-hoa-deck-rules">Ashburn Village HOA deck rules</Link>, <Link href="/deck-builder-brambleton-va">Brambleton</Link>, <Link href="/deck-builder-broadlands-va">Broadlands</Link>, <Link href="/deck-builder-one-loudoun-va">One Loudoun</Link>, and <Link href="/hoa-deck-rules-northern-virginia">HOA deck rules in Northern Virginia</Link>.
        </p>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: 0 }}>
          The housing stock is planned-community construction: colonial, craftsman, and newer production homes. Lot size, grade, drainage, and any shared edge should be read from that property&apos;s plat. Footing depth follows the current Loudoun County requirement and is confirmed on the plans before filing.
        </p>
      </section>
      <section style={{ padding: '0 1.5rem 2.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 800, marginBottom: '0.75rem' }}>Published Ashburn projects</h2>
        <p style={{ lineHeight: 1.7, color: '#333', marginBottom: '1rem' }}>
          These are the Ashburn records in the project showcase. Titles and dates are copied from that data. No price is attached.
        </p>
        <div style={{ display: 'grid', gap: '1rem' }}>
          <article style={{ border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: 280 }}>
              <Image src="/images/img13.jpeg" alt="New composite deck, Ashburn, October 2024" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" />
            </div>
            <p style={{ margin: 0, padding: '0.9rem 1rem', lineHeight: 1.5 }}>
              <Link href="/showcase/new-composite-deck-ashburn">BUILD NEW COMPOSITE DECK</Link>
              {' '}— Ashburn, October 2024.
            </p>
          </article>
          <article style={{ border: '1px solid #e5e5e5', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', height: 280 }}>
              <Image src="/fence2.avif" alt="New custom wood fence, Ashburn, October 2024" fill style={{ objectFit: 'cover' }} sizes="(max-width: 900px) 100vw, 900px" />
            </div>
            <p style={{ margin: 0, padding: '0.9rem 1rem', lineHeight: 1.5 }}>
              <Link href="/showcase/custom-wood-fence-ashburn">NEW CUSTOM WOOD FENCE</Link>
              {' '}— Ashburn, October 2024. This record is a fence, not a deck.
            </p>
          </article>
        </div>
      </section>
      <ServicesFAQ
        title="Ashburn deck builder questions"
        faqs={ashburnFAQs}
        canonicalUrl={PAGE_URL}
      />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>Related Ashburn and Loudoun pages</h2>
        <ul style={{ lineHeight: 1.8, paddingLeft: '1.2rem' }}>
          <li><Link href="/composite-decks/ashburn">Composite decks in Ashburn</Link></li>
          <li><Link href="/deck-repair/ashburn">Deck repair in Ashburn</Link></li>
          <li><Link href="/screened-porches/ashburn">Screened porches in Ashburn</Link></li>
          <li><Link href="/deck-resurfacing-vs-replacement">Resurface or replace a deck</Link></li>
          <li><Link href="/services/deck-inspection">Deck inspection</Link></li>
          <li><Link href="/deck-builder-leesburg-va">Deck builder in Leesburg, VA</Link></li>
          <li><Link href="/deck-builder-sterling-va">Deck builder in Sterling, VA</Link></li>
          <li><Link href="/get-estimate">Request a written estimate</Link></li>
        </ul>
      </section>
      <CityLeadFormSection
        city="Ashburn"
        county="Loudoun County"
        service="deck replacement, deck repair, or composite deck"
        formLocation="local_city_ashburn_deck_builder"
      />
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Ashburn" />
        </div>
      </section>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <NamedAuthor context="Ashburn and Loudoun County" lastUpdated="2026-10-31" />
      </div>
      <CountyHubLinks countySlug="loudoun-county" />
      <RelatedGuides currentPath={PAGE_PATH} />
      <SimpleCTA title="Request an Ashburn deck estimate" buttonText="Request Estimate" link="/get-estimate" />
      <ContactHome />
    </main>
  );
}
