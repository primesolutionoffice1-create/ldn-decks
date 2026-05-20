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

const LocationIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ color: 'var(--site-color)', marginRight: '10px' }}>
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
  </svg>
);

export const metadata = buildMetadata({
    path: "/near-you/fairfax-county",
    title: "5-Star Deck Builder Fairfax County VA | Free 24h Quote",
    description: "Top-rated deck and outdoor living contractor in Fairfax County. ★ 5.0 Google Rated. Custom decks, patios, and porches in Reston, Vienna, Mclean, and Alexandria.",
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
  { q: "How much does a new deck typically cost in Fairfax County?", a: "In Fairfax County, a 300 sq ft composite deck typically runs $16,000–$32,000 and a 500 sq ft multi-level deck $32,000–$55,000. Final pricing depends on materials, design details, and site conditions. After a free on-site visit, we provide a clear written estimate so you know exactly what to expect." },
  { q: "Can you replace my old wood deck with composite?", a: "Yes. We can inspect your existing structure, let you know what can be reused, and design a new composite surface that fits your home and budget. Deck replacements are especially common on the 1980s–1990s colonials throughout Vienna, Oakton, and Burke." },
  { q: "Do you handle permits for deck projects?", a: "Yes. Fairfax County requires a permit for all attached decks and any deck over 200 square feet, submitted through the FIDO online system. Review typically takes 3–6 weeks plus footing, framing, and final inspections. We prepare the structural drawings and handle the entire FIDO submission and inspector coordination." },
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
            <ServicesHeader
          subtext="Serving Northern Virginia"
          title="Deck Builder in Fairfax County, VA"
          description="Loudoun Decks is a trusted local deck and outdoor living contractor serving homeowners throughout Fairfax County. We design and build custom decks, patios, porches, and outdoor spaces."
        />
                  <ServiceMain
          subtitle="Expert Craftsmanship"
          title="Custom Outdoor Living for Fairfax Homeowners"
          description="From the modern homes of Reston to the estates of Mclean and Great Falls, we provide high-quality workmanship tailored to Fairfax County's high standards."
          listTitle="Services We Provide in Fairfax:"
          listItems={services}
          image1="/images/img17.jpeg"
          image2="/images/img21.jpeg"
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
            </div>
            </div>
            </div>
            </section>
        <ServiceVisual image="/images/img08.jpeg" />

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Why Fairfax County Homeowners Trust LDN Decks</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Fairfax County is the most populous county in Virginia with over 1.1 million residents and median home values exceeding $650,000. The county&apos;s established neighborhoods — from Vienna and McLean to Burke and Springfield — represent decades of homeownership, and many properties are now due for outdoor living upgrades as original decks reach the end of their lifespan.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>LDN Decks brings <strong>Trex Platinum Partner</strong> and <strong>TimberTech Certified Installer</strong> expertise to every Fairfax County project. We understand the county&apos;s detailed building code requirements, HOA architectural review processes, and the high standards Fairfax homeowners expect.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Fairfax County Building Permits & Codes</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Fairfax County requires building permits for all attached decks and any deck over 200 square feet. Applications are submitted through the <strong>FIDO online system</strong> (Fairfax Inspections Database Online). Processing time is <strong>3-6 weeks</strong> — longer than Loudoun or Prince William counties. Three inspections required: footing, framing, final.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>LDN Decks handles the <strong>entire Fairfax County permit process</strong> including structural drawings, FIDO submission, and inspector coordination. We build to exceed Fairfax County&apos;s typical deck detail specifications and maintain a <strong>100% permit approval rate</strong>.</p>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Deck Cost in Fairfax County (2026)</h3>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead><tr style={{ background: '#f5f5f5' }}><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Project</th><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Cost Range</th><th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Timeline</th></tr></thead>
              <tbody>
                {[['300 sqft Composite Deck', '$16,000 – $32,000', '1-2 weeks'], ['500 sqft Multi-Level Deck', '$32,000 – $55,000', '2-4 weeks'], ['Screened Porch', '$35,000 – $65,000', '3-5 weeks'], ['Deck Replacement', '$20,000 – $40,000', '1-2 weeks'], ['Paver Patio', '$12,000 – $28,000', '1-2 weeks']].map((r, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>{r.map((c, j) => <td key={j} style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: j === 1 ? 600 : 400 }}>{c}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: '1.3rem', fontWeight: 600, margin: '2rem 0 1rem' }}>Popular Projects by Fairfax Neighborhood</h3>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>McLean & Great Falls:</strong> Premium AZEK and Trex Transcend decks on estate properties, <Link href="/outdoor-kitchen-builder-northern-virginia">outdoor kitchens</Link>, multi-zone entertainment areas combining deck + screened porch + patio. These high-value homes demand exceptional quality and design.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Vienna & Oakton:</strong> <Link href="/services/deck-replacement">Deck replacements</Link> on 1980s-1990s colonials, <Link href="/screened-porch-builder-northern-virginia">screened porch additions</Link>, and pergola installations. Many homes here have original wood decks that are now 25-30 years old — prime candidates for composite upgrades.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Reston & Herndon:</strong> Reston Association-approved composite builds, townhome deck/patio combos, and elevated deck designs for wooded lots with grade changes. We have extensive experience with Reston&apos;s architectural review requirements.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}><strong>Burke, Springfield & Lorton:</strong> Family-oriented deck builds with integrated lighting, stair systems, and multi-level designs for sloped lots. Budget-friendly Trex Enhance projects are popular here at $30-$50/sqft.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}><strong>Centreville & Chantilly:</strong> Full deck replacements, composite resurfacing, and fence packages. HOA communities like Virginia Run and Sully Station have specific requirements we know well.</p>
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
      <RelatedGuides currentPath="/near-you/fairfax-county" />
      <ContactHome />
  </main>
  );
}
