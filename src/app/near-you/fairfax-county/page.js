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
    path: "/near-you/fairfax-county",
    title: "Premium Deck Builder Fairfax County VA | Written Estimates",
    description: "Deck and outdoor living contractor in Fairfax County with public review profile links, permit guidance, and custom decks, patios, and porches.",
    image: "/social/fairfax-county-deck-builder-hub-social.png",
});

const fairfaxCities = [
    "Alexandria, VA", "Fairfax, VA", "Vienna, VA", "Reston, VA",
    "Herndon, VA", "Mclean, VA", "Falls Church, VA", "Annandale, VA",
    "Burke, VA", "Springfield, VA", "Chantilly, VA", "Centreville, VA",
    "Oakton, VA", "Great Falls, VA", "Lorton, VA", "Tysons, VA",
    "West Springfield, VA"
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
  { q: "Do you work throughout all of Fairfax County?", a: "Yes. We serve homeowners across Fairfax County, including Alexandria, Fairfax, Vienna, Reston, Herndon, Mclean, Falls Church, Annandale, Burke, Springfield, Chantilly, Centreville, Oakton, Great Falls, Lorton, Tysons, West Springfield and nearby communities." },
  { q: "How much does a new deck typically cost in Fairfax County?", a: `${OPEN_DECK_RANGE} Stairs, railings, height and premium boards push toward the top. ${QUOTE_SOURCE}` },
  { q: "Can you replace my old wood deck with composite?", a: "Yes. We can inspect your existing structure, let you know what can be reused, and design a new composite surface that fits your home and budget." },
  { q: "Do you handle permits for deck projects?", a: "Yes. Fairfax County requires a permit for all attached decks and any deck over 200 square feet, submitted through the FIDO online system. Review time varies with county workload; check current timing with Fairfax County (FIDO). Three inspections are required: footing, framing, and final. LDN Decks helps homeowners plan the Fairfax County permit path, including drawing needs, inspection milestones and HOA coordination where applicable. Permit scope, fees and responsibility are confirmed in the written project proposal before construction begins." },
  { q: "How long does a typical deck project take?", a: "Timelines vary with design and weather, but many projects are completed within a few weeks from permit approval. We'll give you a realistic schedule during the estimate process." }
  ];

export default function FairfaxCountyPage() {
    return (
          <main>
            <LocalBusinessSchema
          city="Fairfax County"
          areaType="AdministrativeArea"
          description="LDN Decks builds custom decks, screened porches, patios, and outdoor living spaces throughout Fairfax County, VA."
          url="https://ldndecks.com/near-you/fairfax-county"
        />
      <WebPageSchema dateModified="2026-11-08" url="https://ldndecks.com/near-you/fairfax-county" name="Premium Deck Builder Fairfax County VA | Written Estimates" description="Deck and outdoor living contractor in Fairfax County with public review profile links, permit guidance, and custom decks, patios, and porches." speakable />
            <ServicesHeader
          subtext="Serving Northern Virginia"
          title="Deck Builder in Fairfax County, VA"
          description="Loudoun Decks is a trusted local deck and outdoor living contractor serving homeowners throughout Fairfax County. We design and build custom decks, patios, porches, and outdoor spaces."
        >
          <AnswerBlock
            where="Fairfax County"
            price="A new open deck was $61–$102 per sq ft, most $64–$68 per sq ft."
          />
        </ServicesHeader>
        <p style={{ maxWidth: 900, margin: '1rem auto 0', padding: '0 1.5rem', lineHeight: 1.7 }}>
          Planning a full rebuild in this county? See <Link href="/services/deck-replacement">deck replacement in Northern Virginia</Link>.
        </p>
                  <ServiceMain
          subtitle="Expert Craftsmanship"
          title="Custom Outdoor Living for Fairfax Homeowners"
          description="From the modern homes of Reston to the estates of Mclean and Great Falls, we provide high-quality workmanship tailored to Fairfax County's high standards."
          listTitle="Services We Provide in Fairfax:"
          listItems={services}
          image1="/images/img17.jpeg"
          image2="/images/img21.jpeg"
        />
      <GeoAnswerBlock
        question="What should Fairfax County homeowners know before building or replacing a deck?"
        answer="Fairfax County deck projects should start with jurisdiction, permit, HOA, and structural planning because requirements can differ between Fairfax County, City of Fairfax, Vienna, Herndon, Arlington-adjacent areas, and local associations. Homeowners should inspect older framing, compare composite materials, confirm setbacks, and choose resurfacing or replacement before approving a written estimate."
        facts={[
          'Primary buyer intent: Fairfax County deck builder, permit-safe replacement, composite upgrades, and structural review.',
          'Conversion path: Fairfax permit guide, safety checklist, city pages, and written estimate.'
        ]}
        links={[
          { href: '/deck-permit-fairfax-county-virginia', label: 'Fairfax permit guide' },
          { href: '/patio-contractor-fairfax-county', label: 'Fairfax County patio contractor' },
          { href: '/deck-resurfacing-fairfax-county', label: 'Fairfax County deck resurfacing' },
          { href: '/screened-porches/fairfax', label: 'Screened porch builder in Fairfax' },
          { href: '/get-estimate', label: 'Get a Fairfax County estimate' }
        ]}
      />
                  <section className={styles.permitSection}>
        <div className={styles.container}>
          <div className={styles.permitContent}>
            <div className={styles.permitText}>
              <h2>Permits & Local Requirements in Fairfax County</h2>
                <p>
                            Many deck and outdoor construction projects in Fairfax County require permits and must follow local building codes and inspection rules. Loudoun Decks helps simplify this process by coordinating directly with the county.
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
                For full details on FIDO submissions, fees, and inspection timelines, see our{' '}
                <Link href="/deck-permit-fairfax-county-virginia">Fairfax County deck permit guide</Link>.
            </p>
                <p>
                For HOA-controlled neighborhoods, compare the{' '}
                <Link href="/hoa-deck-rules-northern-virginia">Northern Virginia HOA deck rules guide</Link>,{' '}
                <Link href="/sully-station-hoa-deck-rules">Sully Station HOA guide</Link>, and{' '}
                <Link href="/virginia-run-hoa-deck-rules">Virginia Run HOA guide</Link> before finalizing materials, railings, stairs, and permit drawings.
            </p>
            </div>
            </div>
            </div>
            </section>
        <ServiceVisual image="/images/img08.jpeg" />

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Fairfax County Homeowners Trust LDN Decks</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Fairfax County is the most populous county in Virginia with over 1.1 million residents (U.S. Census Bureau). The county&apos;s established neighborhoods — from Vienna and McLean to Burke and Springfield — represent decades of homeownership, and many properties are now due for outdoor living upgrades as original decks reach the end of their lifespan.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>LDN Decks brings <strong>Trex, TimberTech, AZEK, and pressure-treated framing</strong> experience to every Fairfax County project. We understand the county&apos;s detailed building code requirements, HOA architectural review processes, and the high standards Fairfax homeowners expect.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Fairfax County Building Permits & Codes</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Fairfax County requires building permits for all attached decks and any deck over 200 square feet. Applications are submitted through the <strong>FIDO online system</strong> (Fairfax Inspections Database Online). Review time varies with county workload; check current timing with Fairfax County (FIDO). Three inspections required: footing, framing, final.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>LDN Decks helps homeowners plan the Fairfax County permit path, including drawing needs, inspection milestones and HOA coordination where applicable. Permit scope, fees and responsibility are confirmed in the written project proposal before construction begins.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Deck Cost in Fairfax County (2026)</h3>
          <QuotedPricesBlock paragraphs={[OPEN_DECK_QUOTED]} />
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The quoted range above is for recent Northern Virginia open-deck quotes. It is not a separate Fairfax County rate.</p>
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

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Project types we plan in Fairfax County</h3>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            Homeowners in Fairfax County can plan <Link href="/services/deck-replacement">deck replacement</Link>, <Link href="/screened-porch-contractor-fairfax-county">screened porches</Link>, <Link href="/screened-porch-builder-northern-virginia">screened porch building</Link>, <Link href="/patio-contractor-fairfax-county">patios</Link>, <Link href="/services/patios">patio service</Link>, and <Link href="/services/deck-resurfacing">deck resurfacing</Link>.
          </p>
        </div>
      </article>

                  <section className={styles.citiesSection}>
        <div className={styles.container}>
          <h2 className={styles.citiesTitle}>Top Areas We Serve in Fairfax County</h2>
            <div className={styles.citiesGrid}>
          {fairfaxCities.map((city, idx) => {
            const href = getCityLink('fairfax-county', city);
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
      <ServicesFAQ canonicalUrl="https://ldndecks.com/near-you/fairfax-county" title="Frequently Asked Questions About Decks in Fairfax County" faqs={faqs} />
        <RatingBadge />
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Fairfax" state="VA" height="360px" />
        </div>
      </section>
      <CountyRecentProjects countySlug="fairfax-county" limit={6} />
      <RelatedGuides currentPath="/near-you/fairfax-county" />
      <CountyConversionLinks county="Fairfax County" permitHref="/deck-permit-fairfax-county-virginia" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Builders by City</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <Link key="/deck-builder-reston-va" href="/deck-builder-reston-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Reston</Link>
              <Link key="/deck-builder-mclean-va" href="/deck-builder-mclean-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>McLean</Link>
              <Link key="/deck-builder-vienna-va" href="/deck-builder-vienna-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Vienna</Link>
              <Link key="/deck-builder-great-falls-va" href="/deck-builder-great-falls-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Great Falls</Link>
              <Link key="/deck-builder-oakton-va" href="/deck-builder-oakton-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Oakton</Link>
              <Link key="/deck-builder-falls-church-va" href="/deck-builder-falls-church-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Falls Church</Link>
              <Link key="/deck-builder-fairfax-va" href="/deck-builder-fairfax-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Fairfax</Link>
              <Link key="/deck-builder-burke-va" href="/deck-builder-burke-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Burke</Link>
              <Link key="/deck-builder-springfield-va" href="/deck-builder-springfield-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Springfield</Link>
              <Link key="/deck-builder-herndon-va" href="/deck-builder-herndon-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Herndon</Link>
              <Link key="/deck-builder-chantilly-va" href="/deck-builder-chantilly-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Chantilly</Link>
              <Link key="/deck-builder-tysons-va" href="/deck-builder-tysons-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Tysons</Link>
              <Link key="/deck-builder-lorton-va" href="/deck-builder-lorton-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Lorton</Link>
              <Link key="/deck-builder-centreville-va" href="/deck-builder-centreville-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Centreville</Link>
        </div>
      </section>

      <NamedAuthor context="Fairfax County" lastUpdated="2026-11-08" />

      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Explore Our Services</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/patio-contractor-fairfax-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Patio Contractor in Fairfax County →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-resurfacing-fairfax-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Resurfacing in Fairfax County →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/screened-porch-contractor-fairfax-county" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Screened Porch Contractor in Fairfax County →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/screened-porches/fairfax" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Screened Porch Builder in Fairfax →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/patios" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Patio Service →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/deck-resurfacing" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Resurfacing Service →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Northern Virginia Deck Builder Guide →</Link></li>
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
