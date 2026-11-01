import React from 'react';
import Link from 'next/link';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CallLink from '@/components/CallLink';
import { BUSINESS, BUSINESS_PHONE_DISPLAY } from '@/lib/business';
import { buildMetadata } from '@/lib/seo';

const PATH = '/composite-trex-deck-builder-northern-virginia';
const CANONICAL = `https://ldndecks.com${PATH}`;
const TITLE = 'Composite & Trex Deck Builder in Northern Virginia';
const DESCRIPTION = 'Loudoun Decks is a Virginia Class A contractor for composite and Trex decks in Loudoun, Fairfax, and Prince William. Call (571) 655-7207.';

const DIRECT_ANSWER = 'Loudoun Decks is a Virginia Class A contractor that builds composite and Trex decks for homeowners in Loudoun, Fairfax, and Prince William counties. We install Trex, TimberTech and other composite brands. Call (571) 655-7207 to schedule a free on-site estimate.';

const faqs = [
  {
    q: 'Who is a composite deck contractor in Northern Virginia?',
    a: DIRECT_ANSWER,
  },
  {
    q: 'Who is a Trex deck installer in Northern Virginia?',
    a: 'Loudoun Decks installs Trex decks in Loudoun, Fairfax, and Prince William counties and is a Virginia Class A contractor. We install Trex, TimberTech and other composite brands. Call (571) 655-7207 to schedule a free on-site estimate.',
  },
  {
    q: 'How does composite decking compare with wood in Northern Virginia?',
    a: 'Pressure-treated wood and cedar can splinter, gray, and cup in humid summers and freeze-thaw winters, and they need repeating cleaning plus stain or sealer if the color is meant to hold. Capped composite, including Trex and TimberTech, does not need staining or sealing, but it still needs washing because pollen, wet leaves, and tannins can mark the surface. Composite usually costs more to install than wood, wood usually needs more recurring upkeep, and neither surface is maintenance-free. This page does not publish a price.',
  },
  {
    q: 'What warranty covers Trex or TimberTech decking?',
    a: 'Trex publishes a Decking, Fascia and Cladding Limited Warranty. The copy read for the deck warranty guide on October 18, 2026 lists residential product terms of 25 years for Enhance, 35 years for Select, and 50 years for Transcend and Signature. Fade and stain coverage in that warranty is conditional. Those are Trex product terms, not a Loudoun Decks labor warranty, and Loudoun Decks does not state a TrexPro level. TimberTech publishes warranties for its composite and AZEK lines; this page does not state a year count for them. Workmanship terms, if any, are in the signed project agreement.',
  },
  {
    q: 'Which published Loudoun Decks projects show Trex decking?',
    a: 'A published deck in Gainesville, Virginia uses Trex Enhance decking in Foggy Wharf, matching fascia, a Foggy Wharf cocktail rail top, and Trex Enhance Classic Black-on-Black railings. A published screened porch in Purcellville, in Loudoun County, uses Trex Select decking with a roof, screened openings, and backyard stairs. That porch is not a Fairfax project. Its photos are digitally retouched, and Eze-Breeze is not installed on it.',
  },
  {
    q: 'How do I request a composite or Trex deck estimate?',
    a: 'Call (571) 655-7207 or request a free on-site estimate. Share the address and whether the job is a new deck or a replacement. Loudoun Decks confirms the service area and prices the project in a written estimate.',
  },
];

const areaServed = [
  ...BUSINESS.areaServed.map((name) => ({ '@type': 'AdministrativeArea', name })),
  { '@type': 'City', name: 'City of Fairfax, VA' },
];

export const metadata = buildMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: '/social/composite-decks-social.png',
});

const sectionStyle = { padding: '2.5rem 1.5rem' };
const wrapStyle = { maxWidth: 900, margin: '0 auto' };
const h2Style = { fontSize: '1.55rem', fontWeight: 800, margin: '0 0 0.85rem', lineHeight: 1.3 };
const pStyle = { margin: '0 0 1rem', lineHeight: 1.75, color: '#253344' };

export default function CompositeTrexDeckBuilderPage() {
  return (
    <main>
      <WebPageSchema
        dateModified="2026-10-31"
        url={CANONICAL}
        name={TITLE}
        description={DESCRIPTION}
        speakable
      />
      <ServiceSchema
        name="Composite and Trex Deck Installation"
        serviceType="Composite and Trex deck installation"
        description="Composite and Trex deck installation by Loudoun Decks, a Virginia Class A contractor, for Loudoun, Fairfax, and Prince William counties. We install Trex, TimberTech and other composite brands."
        url={CANONICAL}
        category="Deck Construction"
        areaServed={areaServed}
        relatedServices={[
          'https://ldndecks.com/composite-decks',
          'https://ldndecks.com/trex-decks',
          'https://ldndecks.com/timbertech-decks',
          'https://ldndecks.com/screened-porches/fairfax',
        ]}
      />

      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '3.5rem 1.5rem' }}>
        <div style={wrapStyle}>
          <p style={{ margin: '0 0 0.75rem', letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.78rem', fontWeight: 700, color: '#f0d2c4' }}>
            Northern Virginia deck contractor
          </p>
          <h1 style={{ fontSize: '2.1rem', fontWeight: 800, lineHeight: 1.2, margin: '0 0 1rem' }}>{TITLE}</h1>
          <p data-speakable style={{ margin: 0, fontSize: '1.08rem', lineHeight: 1.7, color: '#f3f4f6' }}>
            {DIRECT_ANSWER}
          </p>
          <p style={{ margin: '1rem 0 0', color: '#d1d5db', lineHeight: 1.7 }}>
            Virginia Class A Contractor License #2705191673. The published service area also includes Arlington County, Alexandria, Falls Church, Stafford County, and the City of Fairfax.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}>
            <CallLink style={{ background: 'var(--color-primary)', color: '#fff', padding: '0.8rem 1.4rem', fontWeight: 700, borderRadius: 6, textDecoration: 'none' }}>
              Call {BUSINESS_PHONE_DISPLAY}
            </CallLink>
            <Link href="/get-estimate" style={{ border: '2px solid #fff', color: '#fff', padding: '0.75rem 1.3rem', fontWeight: 700, borderRadius: 6, textDecoration: 'none' }}>
              Free on-site estimate
            </Link>
          </div>
        </div>
      </section>

      <article>
        <section style={sectionStyle}>
          <div style={wrapStyle}>
            <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="2026-10-31" />
            <h2 style={h2Style}>Brands installed</h2>
            <p style={pStyle}>We install Trex, TimberTech and other composite brands.</p>
            <p style={pStyle}>
              Product-line comparisons stay on the <Link href="/composite-decks">composite deck materials page</Link>, the <Link href="/trex-decks">Trex product-line page</Link>, the <Link href="/timbertech-decks">TimberTech and AZEK page</Link>, and the <Link href="/trex-vs-timbertech-vs-azek">Trex vs TimberTech vs AZEK comparison</Link>. This page names the contractor. It does not assign a manufacturer partner tier.
            </p>
          </div>
        </section>

        <section style={{ ...sectionStyle, background: '#f7f8f6' }}>
          <div style={wrapStyle}>
            <h2 style={h2Style}>Composite and wood, without a price</h2>
            <p style={pStyle}>
              Pressure-treated wood and cedar are familiar deck surfaces. In Northern Virginia they face humid summers, freeze-thaw winters, pollen, and leaf debris. Wood can splinter, gray, and cup. Keeping the color means repeating cleaning plus stain or sealer.
            </p>
            <p style={pStyle}>
              Capped composite boards do not need staining or sealing. They still need washing. Pollen, wet leaves, and tannins can mark the surface if they sit. Darker boards can feel hotter in full sun than lighter boards. Shade, color, and the specific collection change that feel.
            </p>
            <p style={pStyle}>
              Composite usually costs more to install than wood. Wood usually asks for more recurring upkeep. Neither material is maintenance-free. The written estimate is the project price. A longer material discussion is on the <Link href="/composite-deck-vs-wood-deck-virginia">composite vs wood guide</Link>.
            </p>
          </div>
        </section>

        <section style={sectionStyle}>
          <div style={wrapStyle}>
            <h2 style={h2Style}>Manufacturer warranties</h2>
            <p style={pStyle}>
              Trex publishes a Decking, Fascia and Cladding Limited Warranty. The copy read for the <Link href="/deck-warranty-guide-northern-virginia">deck warranty guide</Link> on October 18, 2026 lists residential product terms of 25 years for Enhance decking and fascia, 35 years for Select, and 50 years for Transcend and Signature. Fade and stain coverage in that warranty is conditional. Lineage was not named in the table checked that day. These are Trex product terms. They are not a Loudoun Decks labor warranty. Loudoun Decks does not state a TrexPro level.
            </p>
            <p style={pStyle}>
              TimberTech publishes warranties for its composite and AZEK lines. This page does not state a year count for those warranties. Read the current manufacturer warranty for the collection named in the estimate. The <a href="https://www.trex.com/customer-support/trex-owners/warranty/">Trex warranty page</a> and the <a href="https://www.timbertech.com/products/decking/azek/">TimberTech AZEK decking page</a> are the manufacturer sources. Workmanship terms, if any, are in the signed project agreement.
            </p>
          </div>
        </section>

        <section style={{ ...sectionStyle, background: '#f7f8f6' }}>
          <div style={wrapStyle}>
            <h2 style={h2Style}>Published projects</h2>
            <p style={pStyle}>
              Loudoun Decks built a deck in Gainesville, Virginia with Trex Enhance decking in Foggy Wharf, matching fascia, a Foggy Wharf cocktail rail top, and Trex Enhance Classic Black-on-Black railings. See the <Link href="/blog/trex-foggy-wharf-deck-gainesville-va">Gainesville Trex Foggy Wharf project</Link>.
            </p>
            <p style={pStyle}>
              A screened porch in Purcellville, in Loudoun County, uses Trex Select decking, a roof, screened openings, and backyard stairs. Eze-Breeze is not installed on that project, and the photos are digitally retouched. See the <Link href="/blog/screened-porch-trex-select-purcellville-va">Purcellville screened porch</Link>. It is not a Fairfax project. This site does not publish a Fairfax composite deck case study on this page.
            </p>
            <p style={pStyle}>
              For a screened porch at a Fairfax address, use the <Link href="/screened-porches/fairfax">screened porch builder page for Fairfax</Link>. County deck permits are on the <Link href="/deck-permit-loudoun-county-virginia">Loudoun</Link>, <Link href="/deck-permit-fairfax-county-virginia">Fairfax</Link>, and <Link href="/deck-permit-prince-william-county-virginia">Prince William</Link> permit guides.
            </p>
          </div>
        </section>
      </article>

      <ServicesFAQ
        title="Composite and Trex deck questions"
        faqs={faqs}
        canonicalUrl={CANONICAL}
      />
      <ContactHome />
    </main>
  );
}
