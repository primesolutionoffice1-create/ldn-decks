import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import JsonLd from '@/components/JsonLd';
import ServiceSchema from '@/components/ServiceSchema';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/porches/front-porch",
  title: "Front Porch Builder Northern Virginia | Custom Curb Appeal Upgrades",
  description: "Custom front porches in Northern Virginia. Premium porticos, wraparound entries & curb appeal upgrades in Loudoun & Fairfax County. Free estimate.",
  image: "/social/front-porch-social.png",
});

const inclusions = [
  { title: "Architectural Roofline Design", desc: "We design front porch rooflines that seamlessly integrate with your home's existing roofline, fascia, and soffit — creating a cohesive architectural statement rather than a bolt-on addition." },
  { title: "Premium Column & Railing Systems", desc: "Smooth PVC-wrapped columns, natural cedar posts, or fiber cement architectural columns. Matching railings in composite, aluminum, or painted wood — all coordinated with your home's exterior palette." },
  { title: "Durable Decking & Flooring", desc: "Premium composite decking, pressure-treated wood, or natural stone pavers for the porch floor — selected to complement your home's foundation material and style." },
  { title: "Full Structural Engineering", desc: "Front porches attach directly to your home's structure. Every build we do includes engineered drawings, footing calculations for Virginia's frost line, and permit-ready documentation." }
];

const expansionSections = [
  {
    title: "What a Front Porch Does for Your Home — and Your Life",
    paragraphs: [
      "A custom front porch is one of the highest-ROI outdoor investments a Northern Virginia homeowner can make. In markets like Ashburn, Leesburg, Reston, and Herndon, a well-designed front porch doesn't just improve the look of your home — it changes how the home is perceived from the street, how quickly it sells, and at what price. A front porch signals permanence, craftsmanship, and livability to buyers, neighbors, and appraisers alike.",
      "Beyond resale, a front porch transforms how you live in your home. It creates a transitional space between public and private, a place where you can be outdoors while still feeling connected to your entry. In Northern Virginia's mild spring and fall seasons, a covered front porch becomes one of the most-used spaces in the house — for morning coffee, evening conversations, or simply watching the neighborhood. For families with children, it becomes an extension of the indoor living area and a safe, supervised outdoor zone.",
      "The permitting and structural requirements for a front porch are more rigorous than for a backyard deck. A front porch typically integrates into your home's primary roofline — which means it affects the load path of your home's structure, must be engineered to handle snow and wind loads, and requires a full building permit. Our design team handles all of this from start to finish."
    ]
  },
  {
    title: "Design Options: From Simple Porticos to Full Wraparound Porches",
    paragraphs: [
      "Front porch projects range significantly in scope and complexity. A portico — the simplest version — is a small roofed entry structure over your front door with a set of columns and a brief floor extension. This adds instant curb appeal and protected entry at a relatively modest cost, and is often possible without requiring changes to your home's existing roofline.",
      "A full front porch extends the covered floor area across some or all of your home's front facade, typically with a full integrated roofline, multiple columns or posts, and a full railing system along the open edge. These projects require more structural engineering and permitting, but deliver the maximum visual and functional impact. Wraparound porches continue around one or both sides of the home, connecting the front entry to a side yard or back outdoor space.",
      "Material selection defines the aesthetic. Traditional colonial homes in neighborhoods like Lansdowne and South Riding suit painted wood or smooth PVC-wrapped square or tapered columns with classic painted railings. Modern or transitional homes benefit from clean-lined aluminum columns, cable railing systems, and composite decking in a contemporary color palette. We walk you through all options during your free on-site design consultation."
    ],
    listItems: [
      { label: "Portico", text: "Roof over front door only. Minimum footprint. Maximum curb appeal per dollar." },
      { label: "Full Front Porch", text: "Extends across full or partial facade. Full railing and roofline." },
      { label: "Wraparound Porch", text: "Continues around one or both sides. Traditional and highly desirable." },
      { label: "Second-Story Porch", text: "Above-garage or dormer porch. Premium complexity and character." }
    ]
  },
  {
    title: "What to Expect: Process, Permitting & Pricing",
    paragraphs: [
      "Front porch projects in Loudoun County, Fairfax County, and Prince William County require a building permit. This involves structural drawings, a site plan, and coordination with your county's building department. We coordinate this through permit-ready documentation, including all engineering documentation. Permit processing typically takes 3-6 weeks in Northern Virginia, after which construction begins.",
      "Construction timelines vary by project scope. A simple portico can be completed in 1-2 weeks. A full-width front porch with integrated roofline and full railing system typically takes 3-5 weeks. We coordinate all required inspections and do not consider a project complete until it has received its certificate of occupancy.",
      "Front porch projects typically start at $20,000+ in Northern Virginia, depending on the scope, size, materials, and roofline complexity. Projects involving HOA-required materials, custom column styles, or wraparound configurations are priced at the higher end. We provide a detailed itemized estimate at your free on-site consultation with no obligation to proceed."
    ]
  },
  {
    title: "HOA Compliance and Architectural Review in Northern Virginia",
    paragraphs: [
      "Many neighborhoods in Loudoun and Fairfax County — Brambleton, Ashburn Village, Lansdowne on the Potomac, South Riding, and others — are governed by homeowner associations with architectural review boards that must approve exterior modifications including porch additions.",
      "We have extensive experience navigating HOA architectural review processes in these communities. We can prepare the required submission documents, renderings, and material specifications on your behalf, and we design our porches to meet the specific material and color requirements of your community's governing documents.",
      "Our recommendation: bring us your HOA's architectural guidelines at the outset of your project so we can design to spec from day one, avoiding revisions and delays. We have successfully completed permitted porch projects in dozens of planned communities across Northern Virginia."
    ]
  }
];

const faqs = [
  { q: "Do I need a permit to build a front porch in Northern Virginia?", a: "Yes. Any roofed structure attached to your home — including a front porch or portico — requires a building permit in Loudoun, Fairfax, and Prince William Counties. We coordinate permit-ready documentation and inspection planning including structural engineering, site plans, and inspection coordination." },
  { q: "How much does a custom front porch cost in Northern Virginia?", a: "Front porch projects typically start at $20,000+ in Northern Virginia, depending on scope, size, materials, and roofline complexity. A simple portico over the front door costs less than a full wraparound porch. We provide a detailed itemized estimate at your free on-site consultation." },
  { q: "Does a front porch require HOA approval?", a: "In many Northern Virginia neighborhoods — Brambleton, Lansdowne, Ashburn Village, South Riding, and others — yes. HOA architectural review boards must approve exterior modifications. We prepare all submission documents and can design specifically to your HOA's material and color requirements." },
  { q: "How long does front porch construction take?", a: "A simple portico typically takes 1-2 weeks of construction after permit approval. A full-width front porch with integrated roofline typically takes 3-5 weeks. Permit processing in Northern Virginia typically takes 3-6 weeks before construction can begin." },
  { q: "What is the return on investment for a front porch?", a: "A well-designed front porch in the Northern Virginia market typically returns 65-85% of its cost at resale, while significantly reducing days on market. In neighborhoods where front porches are architecturally consistent, the return can be higher. The functional and lifestyle value while you live in the home is separate from the resale value." },
  { q: "Can I add a railing to my front porch?", a: "Yes. Front porch railings are required by code when the porch floor is more than 30 inches above grade. We offer composite, aluminum, and painted wood railing systems in styles appropriate for your home's architectural character." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function FrontPorchPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/services/porches/front-porch" name="Front Porch Builder Northern Virginia | Custom Curb Appeal Upgrades" description="Custom front porches in Northern Virginia. Premium porticos, wraparound entries &amp; curb appeal upgrades in Loudoun &amp; Fairfax County. Free estimate." speakable />
      <ServiceSchema
        name="Front Porch Construction"
        description="Custom front porch design and construction in Northern Virginia. Enhance curb appeal with covered or open porches."
        url="https://ldndecks.com/services/porches/front-porch"
        category="Porch Construction"
        lowPrice="15000"
        highPrice="50000"
        relatedServices={['https://ldndecks.com/services/porches', 'https://ldndecks.com/services/porches/open-porch', 'https://ldndecks.com/covered-deck-builder-northern-virginia']}
      />
      <JsonLd data={faqSchema} />
      <ServicesHeader
        subtext="Front Porch Builder Northern Virginia"
        title="Custom Front Porch Design & Construction"
        description="Transform your home's entrance and curb appeal with a professionally designed and built front porch. Loudoun Decks serves homeowners in Loudoun County, Fairfax County, and Prince William County."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>

      {/* Pricing Anchor */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '20px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
        <p style={{ fontSize: '15px', color: '#555', margin: '0 auto', maxWidth: '800px' }}>
          <strong style={{ color: '#222' }}>Front porch projects typically start at $20,000+</strong>
          {' '}— scope, size, HOA requirements, and roofline complexity affect final pricing.{' '}
          <strong>Free in-home estimate included.</strong>
        </p>
      </section>

      <ServiceMain
        subtitle="Welcoming Entrances & Maximum Curb Appeal"
        title="Professional Front Porch Design & Build in Northern Virginia"
        description="Your front porch is your home's first impression. We specialize in creating high-impact front entries that combine structural permanence with beautiful aesthetics — serving homeowners across Loudoun County, Fairfax County, and Prince William County."
        listTitle="Front Porch Options:"
        listItems={[
          "Traditional full-width covered front porches",
          "Porticos and modern minimalist entry canopies",
          "Wraparound front and side porches",
          "Steps, column systems, and railing integration",
          "HOA architectural review submission support"
        ]}
        image1="/images/img22.jpeg"
        image2="/images/img23.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="What Every Front Porch Build Includes"
        description="End-to-end construction management from design to certificate of occupancy."
        items={inclusions}
      />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/porches/front-porch" withSchema={false} title="Front Porch FAQs" faqs={faqs} />

      {/* Navigation to porch types */}
      <section style={{ padding: '40px 20px', background: '#f9f9f9', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: '#666' }}>
            Considering a different porch type?{' '}
            <Link href="/services/porches/open-porch" style={{ color: 'var(--site-color)', fontWeight: '600' }}>Open Porch</Link>
            {' '}|{' '}
            <Link href="/screened-porch-builder-northern-virginia" style={{ color: 'var(--site-color)', fontWeight: '600' }}>Screened Porch</Link>
            {' '}|{' '}
            <Link href="/services/porches" style={{ color: 'var(--site-color)', fontWeight: '600' }}>All Porch Types</Link>
          </p>
        </div>
      </section>

      <ServiceAreasGrid />
      <SimpleCTA title="Design Your Front Porch" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/services/porches/front-porch" />
      <ContactHome />
    </main>
  );
}
