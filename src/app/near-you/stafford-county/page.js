import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/near-you/stafford-county",
  title: "Deck Builder in Stafford County VA | LDN Decks",
  description: "Custom deck builder serving Stafford County, VA. Composite decks, screened porches, pergolas & patios. Licensed, insured & 5-star rated. Free estimate.",
});

const cities = [
  "Stafford, VA", "Aquia Harbour, VA", "Falmouth, VA",
  "Garrisonville, VA", "Brooke, VA", "Widewater, VA"
];

const services = [
  "Custom composite deck design and construction",
  "Deck resurfacing and upgrades",
  "Screened porches and open porches",
  "Pergolas and gazebos",
  "Patio installation (pavers, flagstone, stamped concrete)",
  "Fence installation and cleaning",
  "Deck and outdoor pressure washing"
];

const faqs = [
  { q: "Do you build decks in Stafford County?", a: "Yes. LDN Decks serves all of Stafford County including Stafford, Aquia Harbour, Falmouth, Garrisonville, and surrounding communities." },
  { q: "Does Stafford County require a deck permit?", a: "Yes. Most decks attached to a home require a building permit. Stafford has one of the fastest permit turnaround times in our service area — typically 2-3 weeks. We handle all permits." },
  { q: "How much does a deck cost in Stafford County?", a: "Stafford County deck prices are generally 10-15% lower than Loudoun and Fairfax due to lower labor rates. A typical 300 sqft composite deck runs $15,000-$28,000." },
  { q: "Do you work with Stafford HOAs?", a: "Yes. We prepare all architectural review submissions and design within your community's requirements." },
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
      <ServicesHeader
        subtext="Serving Northern Virginia"
        title="Deck Builder in Stafford County, VA"
        description="LDN Decks is a trusted deck and outdoor living contractor serving homeowners throughout Stafford County. Custom decks, porches, patios, and outdoor living spaces."
      />
      <ServiceMain
        subtitle="Local Expertise"
        title="Custom Outdoor Living for Stafford Homeowners"
        description="Stafford County's growing communities and larger lot sizes offer incredible opportunities for custom outdoor living. From multi-level decks to screened porches, we build it all."
        listTitle="Services We Provide in Stafford:"
        listItems={services}
        image1="/images/img11.jpeg"
        image2="/images/img34.jpeg"
      />

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Communities We Serve in Stafford</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {cities.map(city => (
              <span key={city} style={{ display: 'inline-block', padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem' }}>{city}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Building in Stafford County</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Stafford County is one of the fastest-growing counties in Virginia, with new construction communities expanding rapidly along the I-95 corridor. Many of these homes feature walkout basements and sloped lots that are ideal for elevated and multi-level deck designs.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>The Stafford County building permit process is the most straightforward in our service area, with typical review times of just 2–3 weeks. We handle all documentation, submission, and inspection coordination as part of your project.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Stafford&apos;s larger lot sizes and fewer HOA restrictions (compared to Loudoun and Fairfax) give homeowners more design freedom. We take full advantage of this to build larger, more creative outdoor living spaces — including deck and patio combinations, freestanding pergolas, and outdoor kitchens.</p>
        </div>
      </article>

      <ServicesFAQ canonicalUrl="https://ldndecks.com/near-you/stafford-county" title="Deck Building in Stafford County — FAQ" faqs={faqs} />
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Stafford" state="VA" height="360px" />
        </div>
      </section>
      <RelatedGuides currentPath="/near-you/stafford-county" />
      <ContactHome />
    </main>
  );
}
