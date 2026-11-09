import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceVisual from '@/components/ServiceVisual';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import RatingBadge from '@/components/RatingBadge';
import CountyRecentProjects from '@/components/CountyRecentProjects';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { getCityLink } from '@/data/cityData';
import styles from '../LocationPage.module.css';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import CountyConversionLinks from '@/components/CountyConversionLinks';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';
import {
  OPEN_DECK_RANGE,
  PORCH_QUOTED,
  PVC_QUOTED,
  QUOTE_SOURCE,
  RESURFACE_QUOTED,
  UNDER_DECK_PATIO_QUOTED,
} from '@/lib/quotedPrices';

function quotedPriceCell(source, display) {
  const amounts = display.match(/\$[\d,]+/g) || [];
  if (amounts.length === 0 || amounts.some((amount) => !source.includes(amount))) {
    throw new Error(`Quoted price is not in quotedPrices.js: ${display}`);
  }
  return display;
}

const quotedPriceRows = [
  ['New open deck', quotedPriceCell(OPEN_DECK_RANGE, '$61–$102 per sq ft (most $64–$68)'), 'Stairs, railings, height and premium boards push toward the top.'],
  ['Roofed or screened porch with attached open deck', quotedPriceCell(PORCH_QUOTED, '$77,000–$112,500'), '3-season versions were at the top of the range.'],
  ['Trex deck resurfacing', quotedPriceCell(RESURFACE_QUOTED, '$9,020–$12,678'), 'One recent Chantilly quote; frame must pass inspection.'],
  ['Under-deck concrete patio (7×12)', quotedPriceCell(UNDER_DECK_PATIO_QUOTED, '$5,215'), 'One written quote, not a rate.'],
  ['PVC under-deck ceiling', quotedPriceCell(PVC_QUOTED, '$3,872–$5,632'), 'Ceiling only, not a full drainage system.'],
];

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--site-color)', marginRight: '10px' }}>
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
  </svg>
);

export const metadata = buildMetadata({
  path: "/near-you/arlington-county",
  title: "Premium Deck Builder Arlington County VA | Free Quote in 24h",
  description: "Deck and outdoor living contractor in Arlington County with public review profile links, permit guidance, and custom decks, patios, and porches.",
  image: "/social/arlington-county-deck-builder-hub-social.png",
});

const arlingtonCities = [
  "Arlington, VA", "Crystal City, VA", "Ballston, VA", "Clarendon, VA",
  "Rosslyn, VA", "Pentagon City, VA", "Shirlington, VA", "Cherrydale, VA",
  "Lyon Village, VA", "Bluemont, VA", "Fairlington, VA", "Williamsburg, VA"
];

const services = [
  "Custom deck design and construction",
  "Deck resurfacing and upgrades",
  "Deck and outdoor washing (decks, siding, concrete, fences)",
  "Patios and hardscapes",
  "Porches and entry areas",
  "Pergolas and gazebos",
  "Fences and related outdoor structures"
];

const faqs = [
  { q: "Do you build decks in Arlington County?", a: "Yes. LDN Decks serves all of Arlington County including Arlington, Crystal City, Ballston, Clarendon, Rosslyn, Pentagon City, Shirlington, Cherrydale, Lyon Village, Bluemont, Fairlington, and surrounding neighborhoods." },
  { q: "Does Arlington County require a deck permit?", a: "Yes. Most decks attached to a home or over 30 inches above grade require a building permit. Permits are processed online through the Permit Arlington portal. Arlington also has historic district overlays in some areas. Review time varies with county workload; check current timing with Arlington County (Permit Arlington). LDN Decks helps homeowners plan the Arlington County permit path, including drawing needs, inspection milestones and HOA coordination where applicable. Permit scope, fees and responsibility are confirmed in the written project proposal before construction begins." },
  { q: "How much does a deck cost in Arlington?", a: `${OPEN_DECK_RANGE} These are Northern Virginia quoted prices, not an Arlington County rate. ${QUOTE_SOURCE}` },
  { q: "Do you work with Arlington HOAs and community groups?", a: "Yes. We prepare HOA submission documents and design within your community's architectural and historic overlay requirements." },
  { q: "How long does a typical deck project take?", a: "Timelines vary with design and weather, but many projects are completed within a few weeks from permit approval. We'll give you a realistic schedule during the estimate process." }
];

export default function ArlingtonCountyPage() {
  return (
    <main>
      <LocalBusinessSchema
        city="Arlington County"
        areaType="AdministrativeArea"
        description="LDN Decks builds custom decks, screened porches, patios, pergolas, and outdoor living spaces throughout Arlington County, VA."
        url="https://ldndecks.com/near-you/arlington-county"
      />
      <WebPageSchema dateModified="2026-11-09" url="https://ldndecks.com/near-you/arlington-county" name="Premium Deck Builder Arlington County VA | Free Quote in 24h" description="Deck and outdoor living contractor in Arlington County with public review profile links, permit guidance, and custom decks, patios, and porches." speakable />
      <ServicesHeader
        subtext="Serving Northern Virginia"
        title="Deck Builder in Arlington County, VA"
        description="Loudoun Decks is a trusted local deck and outdoor living contractor serving homeowners throughout Arlington County. We design and build custom decks, patios, porches, and outdoor spaces."
      />
      <p style={{ maxWidth: 900, margin: '1rem auto 0', padding: '0 1.5rem', lineHeight: 1.7 }}>
        Planning a full rebuild in this county? See <Link href="/services/deck-replacement">deck replacement in Northern Virginia</Link>.
      </p>
      <ServiceMain
        subtitle="Expert Craftsmanship"
        title="Custom Outdoor Living for Arlington Homeowners"
        description="Arlington's urban lots and historic neighborhoods require careful design and precise construction. Our team builds custom decks that maximize your outdoor space while meeting Arlington's strict codes."
        listTitle="Services We Provide in Arlington:"
        listItems={services}
        image1="/images/img11.jpeg"
        image2="/images/img32.jpeg"
      />
      <GeoAnswerBlock
        question="What makes Arlington County deck projects different?"
        answer="Arlington County deck projects often involve compact lots, strict setbacks, stormwater concerns, historic-area review, rooftop or balcony constraints, and CPHD permit requirements. Homeowners should plan privacy, drainage, railing style, access, structural load, composite material options, and screened porch scope before approving a deck replacement or new outdoor living project."
        facts={[
          'Primary buyer intent: Arlington County deck builder, compact-lot planning, composite decks, and historic-review awareness.',
          'Conversion path: Arlington page, composite cost guide, and written estimate.'
        ]}
        links={[
          { href: '/deck-builder-arlington-va', label: 'Arlington city page' },
          { href: '/composite-deck-cost-northern-virginia', label: 'Composite deck cost' },
          { href: '/get-estimate', label: 'Get an Arlington County estimate' }
        ]}
      />
      <section className={styles.permitSection}>
        <div className={styles.container}>
          <div className={styles.permitContent}>
            <div className={styles.permitText}>
              <h2>Permits & Local Requirements in Arlington County</h2>
              <p>
                Many deck and outdoor construction projects in Arlington County require permits and must follow local building codes and inspection rules. Loudoun Decks helps simplify this process by coordinating directly with the county.
              </p>
              <ul className={styles.permitList}>
                <li>Reviewing your project requirements</li>
                <li>Preparing basic plans for permitting</li>
                <li>Coordinating with the county for necessary approvals</li>
                <li>Building according to local standards and guidelines</li>
              </ul>
              <p className={styles.permitFooter}>
                This means you don&apos;t have to worry about paperwork or code compliance - we include this as part of a smooth, start-to-finish experience.
              </p>
              <p>
                New to the process? Our{' '}
                <Link href="/northern-virginia-deck-building-guide">Northern Virginia deck building guide</Link>{' '}
                walks through permits, HOA approval, and timelines step by step.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServiceVisual image="/images/img14.jpeg" />

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Arlington County Homeowners Trust LDN Decks</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Arlington County features some of the highest property values in Virginia, with compact urban lots that demand creative design. Whether you reside in a classic craftsman bungalow in Cherrydale or a contemporary home in Clarendon, maximizing every square foot of your outdoor living space is essential to your home's functionality and resale value.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>LDN Decks is a premier outdoor living specialist in Northern Virginia. We bring Trex, TimberTech, and AZEK material planning capabilities to Arlington. Our design-build approach ensures that your custom <Link href="/composite-decks">composite deck</Link> or <Link href="/screened-porch-builder-northern-virginia">screened porch</Link> is engineered for maximum durability, visual elegance, and long-term low maintenance.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Arlington County Building Permits & Codes</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Arlington County requires structural building permits for all decks attached to a building, as well as freestanding decks higher than 30 inches above the surrounding grade. Permits are processed online through the <strong>Permit Arlington</strong> portal. Review time varies with county workload; check current timing with Arlington County (Permit Arlington).</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Because lot sizes in Arlington are often compact, setback requirements, lot coverage ratios, and stormwater management guidelines are strictly enforced. Additionally, historic overlay districts in neighborhoods like Maywood require exterior modifications to match specific guidelines. LDN Decks helps homeowners plan the Arlington County permit path, including drawing needs, inspection milestones and HOA coordination where applicable. Permit scope, fees and responsibility are confirmed in the written project proposal before construction begins.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Deck Cost in Arlington County (2026)</h3>
          <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Recent quoted price (Sep–Oct 2026)</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {quotedPriceRows.map((row, i) => (
                  <tr key={row[0]} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: j === 1 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>{QUOTE_SOURCE}</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Project types we plan in Arlington County</h3>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            Homeowners in Arlington County can plan <Link href="/services/deck-replacement">deck replacement</Link>, <Link href="/services/deck-post-replacement">deck post replacement</Link>, <Link href="/screened-porch-builder-northern-virginia">screened porches</Link>, <Link href="/services/patios">patios</Link>, and <Link href="/screened-porch-contractor-arlington-county">Arlington County screened porch work</Link>.
          </p>
        </div>
      </article>

      <section className={styles.citiesSection}>
        <div className={styles.container}>
          <h2 className={styles.citiesTitle}>Top Areas We Serve in Arlington County</h2>
          <div className={styles.citiesGrid}>
            {arlingtonCities.map((city, idx) => {
              const href = getCityLink('arlington-county', city);
              return href ? (
                <Link key={idx} href={href} className={styles.cityItem} style={{ color: '#333', textDecoration: 'none' }}>
                  <LocationIcon />
                  <span>{city}</span>
                </Link>
              ) : (
                <div key={idx} className={styles.cityItem}>
                  <LocationIcon />
                  <span>{city}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesFAQ canonicalUrl="https://ldndecks.com/near-you/arlington-county" title="Frequently Asked Questions About Decks in Arlington County" faqs={faqs} />
      <RatingBadge />
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Arlington" state="VA" height="360px" />
        </div>
      </section>
      <CountyRecentProjects countySlug="arlington-county" limit={6} />
      <RelatedGuides currentPath="/near-you/arlington-county" />
      <CountyConversionLinks county="Arlington County" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Builders by City</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <Link key="/deck-builder-arlington-va" href="/deck-builder-arlington-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Arlington</Link>
              <Link key="/deck-builder-falls-church-va" href="/deck-builder-falls-church-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Falls Church</Link>
              <Link key="/deck-builder-alexandria-va" href="/deck-builder-alexandria-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Alexandria</Link>
        </div>
      </section>

      <NamedAuthor context="Northern Virginia" lastUpdated="2026-11-09" />

      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Explore Our Services</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (Google reviews) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/get-estimate" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>
      <ContactHome />
    </main>
  );
}
