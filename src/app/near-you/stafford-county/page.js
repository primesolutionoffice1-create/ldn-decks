import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceVisual from '@/components/ServiceVisual';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import RatingBadge from '@/components/RatingBadge';
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
  path: "/near-you/stafford-county",
  title: "5-Star Deck Builder Stafford County VA | Free Quote in 24h",
  description: "Top-rated deck and outdoor living contractor in Stafford County. ★ 5.0 Google Rated. Custom decks, patios, and porches in Stafford, Aquia Harbour, Falmouth, and Garrisonville.",
});

const staffordCities = [
  "Stafford, VA", "Aquia Harbour, VA", "Falmouth, VA",
  "Garrisonville, VA", "Brooke, VA", "Widewater, VA", "Embrey Mill, VA"
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
  { q: "Do you build decks in Stafford County?", a: "Yes. LDN Decks serves all of Stafford County including Stafford, Aquia Harbour, Falmouth, Garrisonville, Brooke, Widewater, Embrey Mill, and surrounding neighborhoods." },
  { q: "Does Stafford County require a deck permit?", a: "Yes. Most decks attached to a home or over 30 inches above grade require a building permit. Stafford County's Department of Development Services has one of the fastest review times in our service area, typically 2 weeks. We handle all permits." },
  { q: "How much does a deck cost in Stafford County?", a: "Stafford County deck prices are generally 10-15% lower than Fairfax and Loudoun counties due to lower local labor and operational costs. A typical 300 sqft composite deck runs $14,000-$26,000 depending on materials." },
  { q: "Do you work with Stafford HOAs?", a: "Yes. We prepare all architectural review board submission materials and design to your community's guidelines." },
  { q: "How long does a typical deck project take?", a: "Timelines vary with design and weather, but many projects are completed within 2-3 weeks from permit approval. We'll give you a realistic schedule during the estimate process." }
];

export default function StaffordCountyPage() {
  return (
    <main>
      <LocalBusinessSchema
        city="Stafford County"
        areaType="AdministrativeArea"
        description="LDN Decks builds custom decks, screened porches, patios, pergolas, and outdoor living spaces throughout Stafford County, VA."
        url="https://ldndecks.com/near-you/stafford-county"
      />
      <WebPageSchema url="https://ldndecks.com/near-you/stafford-county" name="5-Star Deck Builder Stafford County VA | Free Quote in 24h" description="Top-rated deck and outdoor living contractor in Stafford County. ★ 5.0 Google Rated. Custom decks, patios, and porches in Stafford, Aquia Harbour, Falmouth, and Garrisonville." speakable />
      <ServicesHeader
        subtext="Serving Northern Virginia"
        title="Deck Builder in Stafford County, VA"
        description="Loudoun Decks is a trusted local deck and outdoor living contractor serving homeowners throughout Stafford County. We design and build custom decks, patios, porches, and outdoor spaces."
      />
      <ServiceMain
        subtitle="Expert Craftsmanship"
        title="Custom Outdoor Living for Stafford Homeowners"
        description="Stafford County's growing communities and larger lot sizes offer incredible opportunities for custom outdoor living. From multi-level decks to screened porches, we build it all."
        listTitle="Services We Provide in Stafford:"
        listItems={services}
        image1="/images/img11.jpeg"
        image2="/images/img34.jpeg"
      />
      <section className={styles.permitSection}>
        <div className={styles.container}>
          <div className={styles.permitContent}>
            <div className={styles.permitText}>
              <h2>Permits & Local Requirements in Stafford County</h2>
              <p>
                Many deck and outdoor construction projects in Stafford County require permits and must follow local building codes and inspection rules. Loudoun Decks helps simplify this process by coordinating directly with the county.
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
      <ServiceVisual image="/images/img31.jpeg" />

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Stafford County Homeowners Trust LDN Decks</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Stafford County is one of the fastest-growing counties in Virginia, offering larger lot sizes and highly active communities. Homeowners here invest seriously in expanding their usable square footage with high-performance outdoor features. Whether you live in a newly built colonial in Embrey Mill or a beautiful waterfront estate in Aquia Harbour, a custom-crafted deck or patio adds exceptional luxury and value to your home.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>LDN Decks is a trusted outdoor design-build contractor. As a certified <strong>Trex Platinum Partner</strong> and <strong>TimberTech Certified Installer</strong>, we provide Stafford families with top-tier <Link href="/composite-decks">composite decking</Link> systems that deliver the timeless beauty of real wood without the high maintenance. Our projects are built to endure Virginia's humid summers and frosty winters, backed by comprehensive warranties.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Stafford County Building Permits & Codes</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Stafford County requires structural building permits for all decks attached to a dwelling and all freestanding decks over 30 inches above the surrounding ground. Building permit plans are reviewed by the <strong>Stafford County Department of Development Services</strong>. Stafford boasts one of the fastest permitting timelines in Northern Virginia, with processing times averaging just <strong>10 to 15 business days (2 weeks)</strong>.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Stafford's spacious yards generally offer fewer setback and lot coverage constraints compared to Fairfax or Arlington. This allows for grander, multi-zone outdoor entertainment spaces — including expansive custom decks, outdoor kitchens, and hardscape fire pits. We manage the entire permit cycle, including zoning layouts, plan submission, and inspector walkthroughs for structural footings, framing, and final approval.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Deck Cost in Stafford County (2026)</h3>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project Type</th><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Estimated Cost Range</th><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Average Timeline</th></tr></thead>
              <tbody>
                {[['300 sqft Composite Deck', '$14,000 – $26,000', '1-2 weeks'], ['500 sqft Multi-Level Deck', '$26,000 – $46,000', '2-4 weeks'], ['Screened Porch (250 sqft)', '$28,000 – $52,000', '3-5 weeks'], ['Deck Replacement (wood to composite)', '$15,000 – $30,000', '1-2 weeks'], ['Paver Patio (300 sqft)', '$9,000 – $22,000', '1-2 weeks']].map((r, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>{r.map((c, j) => <td key={j} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: j === 1 ? 600 : 400 }}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Popular Projects by Stafford Neighborhood</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Embrey Mill & Augustine:</strong> Large-scale family composite decks with integrated LED lighting, wide steps to the yard, and lower-level <Link href="/services/patios">paver patios</Link>. Capped composite materials are highly popular here to create low-maintenance backyards for active, growing families.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Aquia Harbour:</strong> Beautiful elevated wood and composite decks designed to take full advantage of sloped lots and woodsy or waterfront views. We integrate stainless steel cable rail systems to ensure unobstructed scenery.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Falmouth & Garrisonville:</strong> Full <Link href="/services/deck-replacement">deck replacements</Link> on older properties, converting worn-out timber decks to modern composite, alongside custom <Link href="/screened-porch-builder-northern-virginia">screened porches</Link> that offer cool shade and complete insect protection in the humid summer months.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>Brooke & Widewater:</strong> Expansive freestanding timber and composite decks paired with custom <Link href="/services/gazebo-pergola">pergolas or gazebos</Link> to create remote backyard retreats on larger acreage lots.</p>
        </div>
      </article>

      <section className={styles.citiesSection}>
        <div className={styles.container}>
          <h2 className={styles.citiesTitle}>Top Areas We Serve in Stafford County</h2>
          <div className={styles.citiesGrid}>
            {staffordCities.map((city, idx) => {
              const href = getCityLink('stafford-county', city);
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

      <ServicesFAQ canonicalUrl="https://ldndecks.com/near-you/stafford-county" title="Frequently Asked Questions About Decks in Stafford County" faqs={faqs} />
      <RatingBadge />
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Stafford" state="VA" height="360px" />
        </div>
      </section>
      <RelatedGuides currentPath="/near-you/stafford-county" />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Deck Builders by City</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <Link key="/deck-builder-stafford-va" href="/deck-builder-stafford-va" style={{ padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem', textDecoration: 'none', color: 'var(--color-dark)' }}>Stafford</Link>
        </div>
      </section>

      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </main>
  );
}
