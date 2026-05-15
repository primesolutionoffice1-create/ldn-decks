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
  path: "/near-you/prince-william-county",
  title: "5-Star Deck Builder Prince William County VA | Free Quote in 24h",
  description: "Professional deck contractor in Prince William County. ★ 5.0 Google Rated. Custom decks, patios, and porches in Manassas, Woodbridge, and Haymarket. Free estimates.",
});

const pwcCities = [
  "Manassas, VA", "Manassas Park, VA", "Woodbridge, VA", "Dumfries, VA",
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
  { q: "Do you work throughout all of Prince William County?", a: "Yes. We serve homeowners across Prince William County, including Manassas, Manassas Park, Woodbridge, Dumfries, Quantico, Haymarket, Gainesville, Bristow, Nokesville, Lake Ridge, Montclair, Triangle and nearby communities." },
  { q: "How much does a new deck typically cost in Prince William County?", a: "Deck pricing depends on size, materials, design details, and site conditions. After a free on-site visit, we provide a clear written estimate so you know exactly what to expect." },
  { q: "Can you replace my old wood deck with composite?", a: "Yes. We can inspect your existing structure, let you know what can be reused, and design a new composite surface that fits your home and budget." },
  { q: "Do you handle permits for deck projects?", a: "Yes. For projects that require permits in Prince William County, we help prepare the necessary information and coordinate with the county as part of the project." },
  { q: "How long does a typical deck project take?", a: "Timelines vary with design and weather, but many projects are completed within a few weeks from permit approval. We'll give you a realistic schedule during the estimate process." }
];

export default function PrinceWilliamCountyPage() {
  return (
    <main>
      <ServicesHeader
        subtext="Serving Northern Virginia"
        title="Deck Builder in Prince William County, VA"
        description="Loudoun Decks is a trusted local deck and outdoor living contractor serving homeowners throughout Prince William County. We design and build custom decks, patios, porches, and outdoor spaces."
      />
      <ServiceMain
        subtitle="Professional Excellence"
        title="Custom Outdoor Living for Prince William Homeowners"
        description="From the growing communities of Gainesville and Haymarket to the historic areas of Manassas, we deliver quality craftsmanship and reliable service throughout Prince William County."
        listTitle="Services We Provide in PWC:"
        listItems={services}
        image1="/images/img05.jpeg"
        image2="/images/img13.jpeg"
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
            </div>
          </div>
        </div>
      </section>
      <ServiceVisual image="/images/img02.jpeg" />

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Prince William County Homeowners Choose LDN Decks</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Prince William County offers some of the best value in Northern Virginia real estate, with median home prices around $500,000 and rapidly growing communities in Gainesville, Haymarket, and Bristow. Homeowners here are investing in outdoor living to maximize their property value and extend their usable living space.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Our second office is located at <strong>8735 Quarry Rd., Unit 102, Manassas, VA 20110</strong> — right in the heart of Prince William County. This means faster response times, local material sourcing, and deep familiarity with county requirements.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Prince William County Permits</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Prince William County requires building permits for decks over 200 sqft or 30 inches above grade. Processing time is typically <strong>2-3 weeks</strong> — the fastest of the three major Northern Virginia counties. We handle the full permit process including submission, plan review coordination, and all three required inspections.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Deck Cost in Prince William County (2026)</h3>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project</th><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Cost Range</th></tr></thead>
              <tbody>
                {[['300 sqft Composite Deck', '$14,000 – $28,000'], ['500 sqft Multi-Level Deck', '$28,000 – $48,000'], ['Screened Porch', '$30,000 – $55,000'], ['Deck Replacement', '$16,000 – $32,000'], ['Fence Installation', '$4,000 – $12,000']].map((r, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>{r.map((c, j) => <td key={j} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: j === 1 ? 600 : 400 }}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7, fontSize: '0.9rem', color: '#666' }}>Prince William County pricing is typically 10-15% lower than Fairfax or Loudoun due to lower labor costs and less complex HOA requirements.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Popular Projects by Area</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Manassas & Manassas Park:</strong> Full deck replacements on 1990s-2000s homes, composite upgrades from aging pressure-treated wood, and combined deck + fence packages for privacy.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Gainesville & Haymarket:</strong> New construction decks on recently built homes in Heritage Hunt, Dominion Valley, and Piedmont communities. Multi-level designs for walkout basements are especially popular on the rolling terrain.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Woodbridge & Lake Ridge:</strong> Budget-friendly Trex Enhance composite builds ($30-$50/sqft), screened porch additions for waterfront and lakeside properties, and under-deck patio systems that create dry space below elevated decks.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>Bristow & Nokesville:</strong> Large estate decks with panoramic views, outdoor kitchens, and fire pit integration. The larger lot sizes in western Prince William allow for expansive outdoor living packages.</p>
        </div>
      </article>

      <section className={styles.citiesSection}>
        <div className={styles.container}>
          <h2 className={styles.citiesTitle}>Top Areas We Serve in Prince William County</h2>
          <div className={styles.citiesGrid}>
            {pwcCities.map((city, idx) => (
              <div key={idx} className={styles.cityItem}>
                <LocationIcon />
                <span>{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServicesFAQ canonicalUrl="https://ldndecks.com/near-you/prince-william-county" title="Frequently Asked Questions About Decks in Prince William County" faqs={faqs} />
      <RatingBadge />
      <RelatedGuides currentPath="/near-you/prince-william-county" />
      <ContactHome />
    </main>
  );
}
