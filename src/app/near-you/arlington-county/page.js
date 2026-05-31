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

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--site-color)', marginRight: '10px' }}>
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
  </svg>
);

export const metadata = buildMetadata({
  path: "/near-you/arlington-county",
  title: "Premium Deck Builder Arlington County VA | Free Quote in 24h",
  description: "Trusted deck and outdoor living contractor in Arlington County. review-backed. Custom decks, patios, and porches in Rosslyn, Ballston, Clarendon, and Crystal City.",
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
  { q: "Does Arlington County require a deck permit?", a: "Yes. Most decks attached to a home or over 30 inches above grade require a building permit. Arlington also has strict historic district overlays in some areas. We handle all permits." },
  { q: "How much does a deck cost in Arlington?", a: "Arlington deck costs run 25-35% above the Virginia average due to tight urban lots and premium materials. A typical 300 sqft composite deck runs $17,000-$34,000 depending on materials and complexity." },
  { q: "Do you work with Arlington HOAs and community groups?", a: "Yes. We prepare all HOA submission documents and design within your community's architectural and historic overlay requirements." },
  { q: "How long does a typical deck project take?", a: "Timelines vary with design and weather, but many projects are completed within 2-4 weeks from permit approval. We'll give you a realistic schedule during the estimate process." }
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
      <WebPageSchema url="https://ldndecks.com/near-you/arlington-county" name="Premium Deck Builder Arlington County VA | Free Quote in 24h" description="Trusted deck and outdoor living contractor in Arlington County. review-backed. Custom decks, patios, and porches in Rosslyn, Ballston, Clarendon, and Crystal City." speakable />
      <ServicesHeader
        subtext="Serving Northern Virginia"
        title="Deck Builder in Arlington County, VA"
        description="Loudoun Decks is a trusted local deck and outdoor living contractor serving homeowners throughout Arlington County. We design and build custom decks, patios, porches, and outdoor spaces."
      />
      <ServiceMain
        subtitle="Expert Craftsmanship"
        title="Custom Outdoor Living for Arlington Homeowners"
        description="Arlington's urban lots and historic neighborhoods require careful design and precise construction. Our team builds custom decks that maximize your outdoor space while meeting Arlington's strict codes."
        listTitle="Services We Provide in Arlington:"
        listItems={services}
        image1="/images/img11.jpeg"
        image2="/images/img32.jpeg"
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
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>LDN Decks is a premier outdoor living specialist in Northern Virginia. We bring certified <strong>Trex Platinum Partner</strong> and <strong>TimberTech Certified Installer</strong> capabilities to Arlington. Our design-build approach ensures that your custom <Link href="/composite-decks">composite deck</Link> or <Link href="/screened-porch-builder-northern-virginia">screened porch</Link> is engineered for maximum durability, visual elegance, and long-term low maintenance.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Arlington County Building Permits & Codes</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Arlington County requires structural building permits for all decks attached to a building, as well as freestanding decks higher than 30 inches above the surrounding grade. Permits are processed online through the <strong>Permit Arlington</strong> portal. Review timelines generally run <strong>3–4 weeks</strong>.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Because lot sizes in Arlington are often compact, setback requirements, lot coverage ratios, and stormwater management guidelines are strictly enforced. Additionally, historic overlay districts in neighborhoods like Maywood require exterior modifications to match specific guidelines. LDN Decks handles the entire process — from zoning analysis and engineering layout to permit submission and inspection walkthroughs.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Deck Cost in Arlington County (2026)</h3>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project Type</th><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Estimated Cost Range</th><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Average Timeline</th></tr></thead>
              <tbody>
                {[['300 sqft Composite Deck', '$17,000 – $34,000', '1-2 weeks'], ['500 sqft Multi-Level Deck', '$33,000 – $56,000', '2-4 weeks'], ['Screened Porch (250 sqft)', '$36,000 – $66,000', '3-5 weeks'], ['Deck Replacement (wood to composite)', '$19,000 – $38,000', '1-2 weeks'], ['Paver Patio (300 sqft)', '$11,000 – $26,000', '1-2 weeks']].map((r, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>{r.map((c, j) => <td key={j} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: j === 1 ? 600 : 400 }}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Popular Projects by Arlington Neighborhood</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Clarendon & Ballston:</strong> High-end townhome <Link href="/services/deck-replacement">deck replacements</Link> and compact multi-tier composite decks designed to maximize private courtyard spaces. Privacy panels and custom integrated lighting are popular additions to block street noise and create cozy evening environments.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Rosslyn & Crystal City:</strong> Elevated decks and structural rooftop/balcony deck systems designed to offer gorgeous skyline and tree-canopy views. Capped polymer materials (AZEK) are widely used for their light weight and advanced thermal properties.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Lyon Village & Cherrydale:</strong> Wraparound porches and craftsman-style <Link href="/screened-porch-builder-northern-virginia">screened porch additions</Link> that preserve the historic architectural charm of the neighborhoods. We match existing siding, paint profiles, and trim details to create seamless additions.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>Shirlington & Fairlington:</strong> Walk-out composite decks and ground-level <Link href="/services/patios">patios</Link> that integrate into mature garden environments. Low-profile steps and curved designs work beautifully on the rolling terrain of these communities.</p>
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
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Builders by City</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <Link key="/deck-builder-arlington-va" href="/deck-builder-arlington-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Arlington</Link>
              <Link key="/deck-builder-falls-church-va" href="/deck-builder-falls-church-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Falls Church</Link>
              <Link key="/deck-builder-alexandria-va" href="/deck-builder-alexandria-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Alexandria</Link>
        </div>
      </section>

      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Explore Our Services</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Customer Reviews (Google reviews) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>About Loudoun Decks →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Get a Free Estimate →</Link></li>
        </ul>
      </section>
      <ContactHome />
    </main>
  );
}
