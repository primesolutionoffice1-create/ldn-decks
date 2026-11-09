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
import AnswerBlock from '@/components/AnswerBlock';
import QuotedPricesBlock from '@/components/QuotedPricesBlock';
import {
  OPEN_DECK_QUOTED,
  OPEN_DECK_RANGE,
  PORCH_QUOTED,
  PVC_QUOTED,
  QUOTE_LABEL,
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
  path: "/near-you/prince-william-county",
  title: "Premium Deck Builder Prince William County VA | Free Quote",
  description: "Professional deck contractor in Prince William County with public review profile links, permit guidance, and custom decks, patios, and porches.",
  image: "/social/prince-william-county-deck-builder-hub-social.png",
});

const pwcCities = [
  "Woodbridge, VA", "Dumfries, VA",
  "Quantico, VA", "Haymarket, VA", "Gainesville, VA", "Bristow, VA",
  "Nokesville, VA", "Lake Ridge, VA", "Montclair, VA", "Triangle, VA"
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
  { q: "Do you work throughout all of Prince William County?", a: "Yes. We serve homeowners in Prince William County, including Woodbridge, Dumfries, Haymarket, Gainesville, Bristow, Nokesville, Lake Ridge, Montclair, and Triangle. Manassas and Manassas Park are separate independent cities. We serve them too, and their permit offices are not the Prince William County office." },
  { q: "How much does a new deck typically cost in Prince William County?", a: `${QUOTE_LABEL}: ${OPEN_DECK_RANGE} Those are quoted prices, not one price or a percentage comparison for every Prince William project. The written estimate after a site visit is the only project price.` },
  { q: "Can you replace my old wood deck with composite?", a: "Yes. We can inspect your existing structure, let you know what can be reused, and design a new composite surface that fits your home and budget." },
  { q: "Do you help with permits for deck projects?", a: "Yes. Prince William County may require a permit for decks over 200 square feet or more than 30 inches above grade. We help homeowners identify permit triggers, plan submission requirements, coordinate plan-review questions, and understand inspection milestones before construction begins." },
  { q: "How long does a typical deck project take?", a: "Timelines vary with design and weather, but many projects are completed within a few weeks from permit approval. We'll give you a realistic schedule during the estimate process." }
];

export default function PrinceWilliamCountyPage() {
  return (
    <main>
      <LocalBusinessSchema
        city="Prince William County"
        areaType="AdministrativeArea"
        description="LDN Decks builds custom decks, porches, patios, pergolas, and outdoor living spaces throughout Prince William County, VA."
        url="https://ldndecks.com/near-you/prince-william-county"
      />
      <WebPageSchema dateModified="2026-11-09" url="https://ldndecks.com/near-you/prince-william-county" name="Premium Deck Builder Prince William County VA | Free Quote" description="Professional deck contractor in Prince William County with public review profile links, permit guidance, and custom decks, patios, and porches." speakable />
      <ServicesHeader
        subtext="Serving Northern Virginia"
        title="Deck Builder in Prince William County, VA"
        description="Loudoun Decks is a trusted local deck and outdoor living contractor serving homeowners throughout Prince William County. We design and build custom decks, patios, porches, and outdoor spaces."
      >
        <AnswerBlock
          where="Prince William County"
          price="A new open deck was $61–$102 per sq ft, most $64–$68 per sq ft."
        />
      </ServicesHeader>
      <p style={{ maxWidth: 900, margin: '1rem auto 0', padding: '0 1.5rem', lineHeight: 1.7 }}>
        Planning a full rebuild in this county? See <Link href="/services/deck-replacement">deck replacement in Northern Virginia</Link>.
      </p>
      <ServiceMain
        subtitle="Professional Excellence"
        title="Custom Outdoor Living for Prince William Homeowners"
        description="From Gainesville and Haymarket to Woodbridge and Bristow, we build for Prince William County homeowners. Manassas and Manassas Park are independent cities with their own permit offices."
        listTitle="Services We Provide in PWC:"
        listItems={services}
        image1="/images/img05.jpeg"
        image2="/images/img13.jpeg"
      />
      <GeoAnswerBlock
        question="Who plans deck replacement across Prince William County, VA?"
        answer="Loudoun Decks plans deck replacement, resurfacing, composite upgrades, patios, porches, and outdoor living projects in Prince William County, including Woodbridge, Gainesville, Haymarket, and Bristow. Manassas and Manassas Park are independent cities, not parts of the county. Confirm the parcel before choosing a permit office."
        facts={[
          'Primary buyer intent: Prince William County deck builder, replacement, composite upgrades, and permit guidance.',
          'Conversion path: Prince William permit guide, Manassas page, and written estimate.'
        ]}
        links={[
          { href: '/deck-permit-prince-william-county-virginia', label: 'Prince William permit guide' },
          { href: '/screened-porch-contractor-prince-william-county', label: 'Prince William screened porch contractor' },
          { href: '/patio-contractor-prince-william-county', label: 'Prince William patio contractor' },
          { href: '/deck-resurfacing-prince-william-county', label: 'Prince William deck resurfacing' },
          { href: '/get-estimate', label: 'Get a Prince William estimate' }
        ]}
      />
      <section className={styles.permitSection}>
        <div className={styles.container}>
          <div className={styles.permitContent}>
            <div className={styles.permitText}>
              <h2>Permits & Local Requirements in Prince William County</h2>
              <p>
                Many deck and outdoor construction projects in Prince William County require permits and must follow local building codes and inspection rules. Loudoun Decks helps simplify this process by coordinating directly with the county.
              </p>
              <ul className={styles.permitList}>
                <li>Reviewing your project requirements</li>
                <li>Preparing basic plans for permitting</li>
                <li>Coordinating with the county for necessary approvals</li>
                <li>Building according to local standards and guidelines</li>
              </ul>
              <p className={styles.permitFooter}>
                This means you don&apos;t have to worry about paperwork or code compliance we include this as part of a smooth, start-to-finish experience.
              </p>
              <p>
                For full details on fees, timelines, and inspections, see our{' '}
                <Link href="/deck-permit-prince-william-county-virginia">Prince William County deck permit guide</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServiceVisual image="/images/img02.jpeg" />

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Prince William County Homeowners Choose LDN Decks</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Prince William County includes growing communities in Gainesville, Haymarket, and Bristow. Homeowners there plan <Link href="/outdoor-living-northern-virginia">outdoor living</Link> projects around the county permit office. Manassas and Manassas Park use their own city offices.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>We build in Prince William County, from Gainesville and Haymarket to Bristow, Woodbridge, and Dale City. The written estimate names the permit office for the property.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Prince William County Permits</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Prince William County may require building permits for decks over 200 sqft or 30 inches above grade. Review time varies with county workload; check current timing with Prince William County. LDN Decks helps homeowners plan the Prince William County permit path, including drawing needs, inspection milestones and HOA coordination where applicable. Permit scope, fees and responsibility are confirmed in the written project proposal before construction begins.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Deck Cost in Prince William County</h3>
          <QuotedPricesBlock paragraphs={[OPEN_DECK_QUOTED]} />
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The quoted range above is for recent Northern Virginia open-deck quotes. It is not a separate Prince William County rate.</p>
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

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Project types we plan in Prince William County</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
            Homeowners in Prince William County can plan <Link href="/services/deck-replacement">deck replacement</Link>, <Link href="/services/deck-post-replacement">deck post replacement</Link>, <Link href="/screened-porch-contractor-prince-william-county">screened porches</Link>, <Link href="/patio-contractor-prince-william-county">patios</Link>, and <Link href="/deck-resurfacing-prince-william-county">deck resurfacing</Link>.
          </p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>Manassas and Manassas Park:</strong> These are independent cities next to the county, not county communities. The <Link href="/deck-builder-manassas-va">Manassas deck page</Link> covers city projects. County projects use the Prince William permit office.</p>
        </div>
      </article>

      <section className={styles.citiesSection}>
        <div className={styles.container}>
          <h2 className={styles.citiesTitle}>Top Areas We Serve in Prince William County</h2>
          <div className={styles.citiesGrid}>
            {pwcCities.map((city, idx) => {
              const href = getCityLink('prince-william-county', city);
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
      <ServicesFAQ canonicalUrl="https://ldndecks.com/near-you/prince-william-county" title="Frequently Asked Questions About Decks in Prince William County" faqs={faqs} />
      <RatingBadge />
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Woodbridge" state="VA" height="360px" />
        </div>
      </section>
      <CountyRecentProjects countySlug="prince-william-county" limit={6} />
      <RelatedGuides currentPath="/near-you/prince-william-county" />
      <CountyConversionLinks county="Prince William County" permitHref="/deck-permit-prince-william-county-virginia" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Builders by City</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <Link key="/deck-builder-manassas-va" href="/deck-builder-manassas-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Manassas</Link>
              <Link key="/deck-builder-woodbridge-va" href="/deck-builder-woodbridge-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Woodbridge</Link>
              <Link key="/deck-builder-haymarket-va" href="/deck-builder-haymarket-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Haymarket</Link>
              <Link key="/deck-builder-bristow-va" href="/deck-builder-bristow-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Bristow</Link>
              <Link key="/deck-builder-gainesville-va" href="/deck-builder-gainesville-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Gainesville</Link>
        </div>
      </section>

      <NamedAuthor context="Prince William County" lastUpdated="2026-11-09" />

      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Explore Our Services</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/screened-porch-contractor-prince-william-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Screened Porch Contractor in Prince William County →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/patio-contractor-prince-william-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Patio Contractor in Prince William County →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-resurfacing-prince-william-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Resurfacing in Prince William County →</Link></li>
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
