import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceVisual from '@/components/ServiceVisual';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import RatingBadge from '@/components/RatingBadge';
import styles from '../LocationPage.module.css';
import { buildMetadata } from '@/lib/seo';

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--site-color)', marginRight: '10px' }}>
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
  </svg>
);

export const metadata = buildMetadata({
  path: "/near-you/loudoun-county",
  title: "Deck Builder in Loudoun County VA | LDN Decks",
  description: "Trusted local deck and outdoor living contractor serving Loudoun County, VA. Custom decks, patios, and porches in Ashburn, Leesburg, Sterling, and more.",
});

const loudounCities = [
  "Ashburn, VA", "Leesburg, VA", "Sterling, VA", "Aldie, VA",
  "Middleburg, VA", "Round Hill, VA", "Purcellville, VA", "Lovettsville, VA",
  "Hamilton, VA", "Waterford, VA", "Brambleton, VA", "South Riding, VA",
  "Stone Ridge, VA", "Broadlands, VA"
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
  { q: "Do you work throughout all of Loudoun County?", a: "Yes. We serve homeowners across Loudoun County, including Ashburn, Leesburg, Sterling, Aldie, Middleburg, Round Hill, Purcellville, Lovettsville, Hamilton, Waterford, Brambleton, South Riding, Stone Ridge, Broadlands and nearby communities." },
  { q: "How much does a new deck typically cost in Loudoun County?", a: "Deck pricing depends on size, materials, design details, and site conditions. After a free on-site visit, we provide a clear written estimate so you know exactly what to expect." },
  { q: "Can you replace my old wood deck with composite?", a: "Yes. We can inspect your existing structure, let you know what can be reused, and design a new composite surface that fits your home and budget." },
  { q: "Do you handle permits for deck projects?", a: "Yes. For projects that require permits in Loudoun County, we help prepare the necessary information and coordinate with the county as part of the project." },
  { q: "How long does a typical deck project take?", a: "Timelines vary with design and weather, but many projects are completed within a few weeks from permit approval. We'll give you a realistic schedule during the estimate process." }
];

export default function LoudounCountyPage() {
  return (
    <main>
      <ServicesHeader
        subtext="Serving Northern Virginia"
        title="Deck Builder in Loudoun County, VA"
        description="Loudoun Decks is a trusted local deck and outdoor living contractor serving homeowners throughout Loudoun County. We design and build custom decks, patios, porches, and outdoor spaces."
      />
      <ServiceMain
        subtitle="Local Expertise"
        title="Custom Outdoor Living for Loudoun Homeowners"
        description="Whether you live in Ashburn, Leesburg, or Middleburg, we provide high-quality workmanship and end-to-end support. Our team understands Loudoun's unique neighborhood styles and property layouts."
        listTitle="Services We Provide in Loudoun:"
        listItems={services}
        image1="/images/img03.jpeg"
        image2="/images/img32.jpeg"
      />
      <section className={styles.permitSection}>
        <div className={styles.container}>
          <div className={styles.permitContent}>
            <div className={styles.permitText}>
              <h2>Permits & Local Requirements in Loudoun County</h2>
              <p>
                Many deck and outdoor construction projects in Loudoun County require permits and must follow local building codes and inspection rules. Loudoun Decks helps simplify this process by coordinating directly with the county.
              </p>
              <ul className={styles.permitList}>
                <li>Reviewing your project requirements</li>
                <li>Preparing basic plans for permitting</li>
                <li>Coordinating with the county for necessary approvals</li>
                <li>Building according to local standards and guidelines</li>
                <li>Ensuring all work meets VUSBC (Virginia Uniform Statewide Building Code)</li>
              </ul>
              <p className={styles.permitFooter}>
                This means you don&apos;t have to worry about paperwork or code compliance we include this as part of a smooth, start-to-finish experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServiceVisual image="/images/img58.jpeg" />

      {/* Deep local content — SEO content expansion for authority */}
      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Loudoun County Homeowners Choose LDN Decks</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Loudoun County is one of the wealthiest and fastest-growing counties in the United States, with median home values exceeding $700,000. Homeowners here demand premium outdoor living spaces that match the quality of their homes — and they expect contractors who understand the unique requirements of building in Loudoun.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>LDN Decks is based in the heart of Northern Virginia and has completed <strong>200+ custom deck projects</strong> across Loudoun County communities including Ashburn, Leesburg, Sterling, Brambleton, Broadlands, South Riding, Stone Ridge, Purcellville, and Aldie. We are a <strong>Trex Platinum Partner</strong> (highest certification tier) and <strong>TimberTech Certified Installer</strong>, meaning we install the best composite decking materials available with manufacturer-backed warranties up to 50 years.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Navigating Loudoun County HOA Requirements</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Over 80% of Loudoun County homes are in HOA-governed communities. Architectural Review Board (ARB) approval is required before any exterior modification — including decks, porches, patios, fences, and pergolas. Each community has different material restrictions, color requirements, setback rules, and height limits.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>We have extensive experience submitting compliant proposals to Loudoun County HOAs including <strong>Brambleton Community Association</strong>, <strong>Broadlands HOA</strong>, <strong>Ashburn Village Corporation</strong>, <strong>Lansdowne on the Potomac</strong>, <strong>Stone Ridge Association</strong>, and <strong>South Riding Proprietary</strong>. Our approval rate is <strong>100%</strong> — we design specifically to your community&apos;s requirements so revisions are rare.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Loudoun County Building Permits</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>All decks attached to a home or more than 30 inches above grade require a building permit from Loudoun County Department of Building and Development. The permit process typically takes <strong>10-15 business days</strong> for review. Three inspections are required: footings, framing, and final.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>LDN Decks handles the <strong>entire permit process</strong> — from preparing structural drawings to coordinating with county inspectors. This is included as part of every project at no additional charge. We are fully familiar with Loudoun County&apos;s residential deck detail requirements and build to exceed code minimums.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Deck Cost in Loudoun County (2026 Pricing)</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Loudoun County deck prices run <strong>25-35% above the Virginia state average</strong> due to higher labor rates, stricter building codes, and HOA requirements. Here are typical project ranges for Loudoun homeowners:</p>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project Type</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Typical Cost</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Timeline</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['300 sqft Composite Deck', '$15,000 – $30,000', '1-2 weeks'],
                  ['500 sqft Multi-Level Deck', '$30,000 – $50,000', '2-3 weeks'],
                  ['Screened Porch (250 sqft)', '$35,000 – $60,000', '3-4 weeks'],
                  ['Deck Replacement (wood → composite)', '$18,000 – $35,000', '1-2 weeks'],
                  ['Pergola or Gazebo', '$8,000 – $20,000', '1 week'],
                  ['Paver Patio (300 sqft)', '$10,000 – $25,000', '1-2 weeks'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: j === 1 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Popular Projects in Loudoun County</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Ashburn & Brambleton:</strong> Multi-level composite Trex and TimberTech decks with integrated screened porches. Homes in Brambleton, Broadlands, and Ashburn Village are reaching the age where original pressure-treated wood decks need replacement — composite upgrades are the most requested service.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Leesburg:</strong> Front porch additions on historic in-town homes, screened porch construction on newer colonials, and estate-lot outdoor living packages combining deck + patio + fire feature.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Sterling & Cascades:</strong> Deck resurfacing for aging subdivisions, ground-level patios with pavers, and privacy fence installations to complement deck projects.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Purcellville & Western Loudoun:</strong> Large custom decks on estate properties with scenic views, pergola installations, and outdoor kitchen builds that take advantage of the rural landscape.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Virginia Climate Considerations for Loudoun County Decks</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Loudoun County experiences <strong>50-80 freeze-thaw cycles per winter</strong>, humid summers with 70-90% humidity, and 200+ sunny days per year. This combination is exceptionally hard on wood decking — pressure-treated boards can crack, warp, and gray within 2-3 years without annual maintenance.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>We recommend <strong>capped composite decking</strong> (Trex Transcend or TimberTech AZEK) for Loudoun County homes. The polymer cap prevents moisture penetration, resists UV fading, and requires zero staining or sealing — just wash with soap and water once or twice per year. Manufacturer warranties cover 25-50 years of performance.</p>
        </div>
      </article>

      <section className={styles.citiesSection}>
        <div className={styles.container}>
          <h2 className={styles.citiesTitle}>Top Areas We Serve in Loudoun County</h2>
          <div className={styles.citiesGrid}>
            {loudounCities.map((city, idx) => (
              <div key={idx} className={styles.cityItem}>
                <LocationIcon />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicesFAQ title="Frequently Asked Questions About Decks in Loudoun County" faqs={faqs} />
      <RatingBadge />
      <RelatedGuides currentPath="/near-you/loudoun-county" />
      <ContactHome />
    </main>
  );
}
