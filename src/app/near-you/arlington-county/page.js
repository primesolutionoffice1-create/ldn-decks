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
  path: "/near-you/arlington-county",
  title: "Deck Builder in Arlington County VA | LDN Decks",
  description: "Custom deck builder serving Arlington County, VA. Composite decks, screened porches, pergolas & patios. Licensed, insured & 5-star rated. Free estimate.",
});

const cities = [
  "Arlington, VA", "Crystal City, VA", "Ballston, VA", "Clarendon, VA",
  "Rosslyn, VA", "Pentagon City, VA", "Shirlington, VA", "Cherrydale, VA",
  "Lyon Village, VA", "Bluemont, VA"
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
  { q: "Do you build decks in Arlington County?", a: "Yes. LDN Decks serves all of Arlington County including Arlington, Crystal City, Ballston, Clarendon, Rosslyn, and surrounding neighborhoods." },
  { q: "Does Arlington County require a deck permit?", a: "Yes. Most decks attached to a home or over 200 sqft require a building permit. Arlington also has strict historic district overlays in some areas. We handle all permits." },
  { q: "How much does a deck cost in Arlington?", a: "Arlington deck costs run 25-35% above the Virginia average due to proximity to DC. A typical 300 sqft composite deck runs $18,000-$35,000 depending on materials and complexity." },
  { q: "Do you work with Arlington HOAs?", a: "Yes. We prepare all HOA submission documents and design within your community's architectural requirements." },
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
      <ServicesHeader
        subtext="Serving Northern Virginia"
        title="Deck Builder in Arlington County, VA"
        description="LDN Decks is a trusted deck and outdoor living contractor serving homeowners throughout Arlington County. Custom decks, porches, patios, and more."
      />
      <ServiceMain
        subtitle="Local Expertise"
        title="Custom Outdoor Living for Arlington Homeowners"
        description="Arlington's urban lots and historic neighborhoods require careful design and precise construction. Our team builds custom decks that maximize your outdoor space while meeting Arlington's strict codes."
        listTitle="Services We Provide in Arlington:"
        listItems={services}
        image1="/images/img11.jpeg"
        image2="/images/img32.jpeg"
      />

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Communities We Serve in Arlington</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
            {cities.map(city => (
              <span key={city} style={{ display: 'inline-block', padding: '0.4rem 0.8rem', border: '1px solid #e5e5e5', borderRadius: 20, fontSize: '0.9rem' }}>{city}</span>
            ))}
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Building in Arlington County</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Arlington County&apos;s compact urban lots and proximity to Washington DC create unique challenges and opportunities for outdoor living projects. Many Arlington homes have smaller backyards that benefit from multi-level deck designs that maximize vertical space, or low-profile ground-level decks that create the illusion of a larger yard.</p>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>Arlington also has historic preservation overlay districts in neighborhoods like Maywood, Cherrydale, and parts of Lyon Village where exterior modifications must comply with additional architectural review requirements. Our team has experience navigating these requirements and designing decks that respect the neighborhood&apos;s character while delivering modern outdoor living functionality.</p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>Building permits in Arlington County typically take 3–4 weeks for review. We handle the entire process — structural drawings, site plans, and inspection coordination — so you never visit the county office.</p>
        </div>
      </article>

      <ServicesFAQ canonicalUrl="https://ldndecks.com/near-you/arlington-county" title="Deck Building in Arlington County — FAQ" faqs={faqs} />
      <section style={{ padding: '2rem 1.5rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <GoogleMapEmbed city="Arlington" state="VA" height="360px" />
        </div>
      </section>
      <RelatedGuides currentPath="/near-you/arlington-county" />
      <ContactHome />
    </main>
  );
}
