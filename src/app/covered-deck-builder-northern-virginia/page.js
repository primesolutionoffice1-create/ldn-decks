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
import GeoAnswerBlock from '@/components/GeoAnswerBlock';

export const metadata = buildMetadata({
  path: "/covered-deck-builder-northern-virginia",
  title: "Covered Deck Builder Northern Virginia | Open-Air Outdoor Living",
  description: "Custom covered deck design and construction in Northern Virginia. We build roofed open-air decks, covered porches, and pavilions for premium outdoor living.",
  image: "/social/covered-deck-builder-northern-virginia-social.png",
});

const inclusions = [
  { title: "Structural Roofline Integration", desc: "We engineer covered-deck rooflines to tie directly into your home's existing structure, creating a seamless architectural extension instead of an afterthought addition." },
  { title: "Premium Finish Materials", desc: "Tongue-and-groove cedar ceilings, exposed timber beams, pressure-treated columns, or low-maintenance composite decking floors — selected to match your home's aesthetic." },
  { title: "Electrical & Comfort Systems", desc: "Ceiling fans for humid Northern Virginia summers, recessed LED lighting on dimmers, GFCI outlets for outdoor appliances, and optional infrared heaters for fall evenings." },
  { title: "Permit Planning Support", desc: "We handle engineering drawings, building permit applications, and inspection coordination with Loudoun, Fairfax, or Prince William County on your behalf." }
];

const expansionSections = [
  {
    title: "What a Covered Deck Is — and Why Northern Virginia Homeowners Want One",
    paragraphs: [
      "A covered deck is a roofed outdoor living space that stays open on the sides. Some homeowners call it an open porch, covered porch, pavilion, or roofed deck. Unlike a screened porch, it preserves full airflow and an unobstructed connection to the yard. Unlike an uncovered deck, it gives you shade, weather protection, and far more usable days outside across Northern Virginia.",
      "Covered decks are especially valuable for homeowners who want to combine dining, lounging, grilling, or an outdoor kitchen in one premium space. Because the structure stays open to the air, it works well for gas grills, smokers, pizza ovens, and fire features that would not belong inside a screened enclosure.",
      "In neighborhoods across Loudoun County, Fairfax County, and Prince William County, covered outdoor living spaces are among the most desirable upgrades for resale, entertaining, and year-round use. They read as a major architectural improvement, not a small accessory."
    ]
  },
  {
    title: "Design Considerations: Rooflines, Materials, and How the Space Gets Used",
    paragraphs: [
      "The most important design decision on a covered deck is the roofline. A colonial or craftsman home in Ashburn or Herndon often looks best with a gable or hip roof. A more modern home may call for a cleaner shed roof with a lower profile. We review your exterior lines, deck footprint, and drainage constraints before recommending the right structural approach.",
      "Material choice matters just as much. Posts can range from pressure-treated structural columns to smoother PVC-wrapped or fiber cement finishes. Ceilings can be cedar, beadboard PVC, or cleaner contemporary panel systems. Flooring is usually composite decking for lower maintenance, but wood or pavers may fit certain designs better depending on whether the structure is attached or freestanding.",
      "Structural capacity has to be calculated before the first post goes in. Every covered deck we build is engineered for roof load, furniture load, and Virginia weather loads so the finished space feels permanent, safe, and code-ready."
    ],
    listItems: [
      { label: "Gable Roof", text: "Classic peaked ridge. Maximum height and drama. Works on most home styles." },
      { label: "Hip Roof", text: "All four sides slope down. Elegant, traditional, and strong in wind." },
      { label: "Shed Roof", text: "Single-slope profile. Cleaner look, lower profile, and often faster to build." },
      { label: "Vaulted / Cathedral", text: "High-end volume and visual impact. Requires more structural engineering." }
    ]
  },
  {
    title: "Process, Permitting, and Realistic Budget Expectations",
    paragraphs: [
      "Every attached covered deck or open-air porch in Northern Virginia requires a building permit because the roof structure changes the load path of your home. We prepare the structural drawings, site information, and permit package, then coordinate directly with the county during review.",
      "Once permits are approved, a typical attached covered deck often takes 2 to 4 weeks of construction depending on roof complexity, electrical, stairs, and finish scope. Freestanding pavilions or simpler detached structures can move faster.",
      "Most custom covered deck projects in Northern Virginia start around $25,000+, and larger premium outdoor living builds can climb from there depending on size, framing complexity, ceiling treatment, lighting, rails, and tie-in work. We provide itemized estimates during the on-site consultation so homeowners can see where the dollars are actually going."
    ]
  },
  {
    title: "Best Pairings: Covered Decks, Screened Porches, Fire Features, and Multi-Zone Outdoor Living",
    paragraphs: [
      "A covered deck is often one zone in a larger outdoor-living plan. Many Northern Virginia homeowners pair it with adjacent [custom deck construction](/services/new-decks), creating a layout with one shaded entertaining area and one open-sun lounging area.",
      "Covered decks also pair well with [custom fire pits](/services/fire-pits), under-deck patio drainage systems, and premium railing or lighting packages. The result is a more complete backyard environment instead of a single isolated feature.",
      "If insect protection is a higher priority than open-air cooking and ventilation, we may recommend a [screened porch](/screened-porch-builder-northern-virginia) instead. We can also help design hybrid spaces with both screened and fully open sections."
    ]
  }
];

const faqs = [
  { q: "What is the difference between a covered deck and a screened porch?", a: "A covered deck has a roof but remains open on the sides, which preserves airflow and supports outdoor kitchens, grills, and fire features more naturally. A screened porch has a roof and screen walls, which adds bug protection but changes ventilation and how the space is used." },
  { q: "How much does a covered deck cost in Northern Virginia?", a: "Most custom covered deck projects in Northern Virginia start around $25,000+ and increase based on roof design, decking material, electrical scope, railing package, stairs, and site complexity. Premium outdoor living projects with kitchens or high-end finishes cost more." },
  { q: "Do I need a permit for a covered deck in Loudoun County or Fairfax County?", a: "Yes. Any roofed structure attached to the home generally requires a building permit in Northern Virginia jurisdictions. We handle the permit package, structural coordination, and inspection scheduling." },
  { q: "Can you build a roof over an existing deck?", a: "In many cases, yes, but only if the existing deck framing, footings, and attachment details can safely support the added roof load. We evaluate the structure before recommending a covered-deck conversion." },
  { q: "Are covered decks good for outdoor kitchens?", a: "Yes. Covered decks work especially well for outdoor kitchens, grills, smokers, and pizza ovens because they provide weather protection while keeping the space open to the air." },
  { q: "How long does covered-deck construction take?", a: "After permit approval, many covered-deck builds take about 2 to 4 weeks of active construction. More complex designs, detached pavilions, vaulted ceilings, and integrated utilities can extend the schedule." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://ldndecks.com/covered-deck-builder-northern-virginia#faq",
  "mainEntity": faqs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function CoveredDeckPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/covered-deck-builder-northern-virginia" name="Covered Deck Builder Northern Virginia | Open-Air Outdoor Living" description="Custom covered deck design and construction in Northern Virginia. We build roofed open-air decks, covered porches, and pavilions for premium outdoor living." speakable />
      <ServiceSchema
        name="Covered Deck Construction"
        description="Custom covered deck and roof-covered outdoor structures in Northern Virginia. Engineered for weather protection with premium materials."
        url="https://ldndecks.com/covered-deck-builder-northern-virginia"
        category="Outdoor Living"
        lowPrice="20000"
        highPrice="60000"
        relatedServices={['https://ldndecks.com/screened-porch-builder-northern-virginia', 'https://ldndecks.com/services/new-decks', 'https://ldndecks.com/outdoor-living-northern-virginia']}
      />
      <JsonLd data={faqSchema} />
      <ServicesHeader
        subtext="Covered Deck Builder Northern Virginia"
        title="Custom Covered Deck Design & Construction"
        description="Build a roofed open-air outdoor living space with maximum airflow, weather protection, and premium design. Loudoun Decks creates covered decks, covered porches, and pavilion-style entertaining zones across Northern Virginia."
      />

      <GeoAnswerBlock
        question="What is a covered deck, and when is it better than a screened porch?"
        answer="A covered deck is a roofed outdoor living space that stays open on the sides for airflow, grilling, dining, and shade. It is usually better than a screened porch when homeowners want open-air cooking, stronger yard connection, and a pavilion-style entertaining area. A screened porch is better when insect protection is the main priority. In Northern Virginia, roofed deck projects need structural planning, permit review, roof-load details, and electrical coordination."
        facts={[
          'Best use: shade, rain protection, grilling, outdoor kitchens, open-air entertaining',
          'Approval path: roofed structures usually require permit and structural review',
          'Proof status: project photos need proof-lock before exact city/customer claims',
        ]}
        links={[
          { href: '/screened-porch-builder-northern-virginia', label: 'Screened porch builder' },
          { href: '/covered-deck-cost-northern-virginia', label: 'Covered deck cost' },
          { href: '/outdoor-living-northern-virginia', label: 'Outdoor living' },
        ]}
      />

      <section style={{ backgroundColor: '#f9f9f9', padding: '20px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
        <p style={{ fontSize: '15px', color: '#555', margin: '0 auto', maxWidth: '800px' }}>
          <strong style={{ color: '#222' }}>Covered deck projects typically start at $25,000+</strong>
          {' '}— roof complexity, size, materials, and electrical integration affect final pricing.{' '}
          <strong>Free in-home estimate included.</strong>
        </p>
      </section>

      <ServiceMain
        subtitle="Open-Air Outdoor Living"
        title="Professional Covered Deck Construction in Northern Virginia"
        description="A covered deck gives you the comfort of shade and weather protection without closing off the space. We build roofed outdoor living areas with integrated structure, premium ceilings, lighting, and composite or wood deck surfaces for homeowners across Loudoun, Fairfax, and Prince William County."
        listTitle="Covered Deck Features:"
        listItems={[
          "Custom roof styles: gable, hip, shed, and vaulted",
          "Integrated ceiling fans and recessed LED lighting",
          "Outdoor kitchen and fire-feature ready layouts",
          "Architectural columns and composite or wood railings",
          "Full structural engineering and permit management"
        ]}
        image1="/images/img19.jpeg"
        image2="/images/img17.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="What Every Covered Deck Build Includes"
        description="Our end-to-end covered-deck projects are managed from engineering through final inspection."
        items={inclusions}
      />
      <ServicesFAQ title="Covered Deck FAQs" faqs={faqs} withSchema={false} />

      <section style={{ padding: '40px 20px', background: '#f9f9f9', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: '#666' }}>
            Comparing porch and covered-living options?{' '}
            <Link href="/screened-porch-builder-northern-virginia" style={{ color: 'var(--site-color)', fontWeight: '600' }}>Screened Porch</Link>
            {' '}|{' '}
            <Link href="/services/porches/front-porch" style={{ color: 'var(--site-color)', fontWeight: '600' }}>Front Porch</Link>
            {' '}|{' '}
            <Link href="/services/porches" style={{ color: 'var(--site-color)', fontWeight: '600' }}>All Porch Types</Link>
          </p>
        </div>
      </section>

      <ServiceAreasGrid />

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Covered Deck Pricing &amp; Planning</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/covered-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Covered Deck Cost &amp; Payment Planning (pergola / hip / gable / screened) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/screened-porch-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Screened Porch Cost Guide →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/mclean-great-falls-premium-deck-budget" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>McLean &amp; Great Falls Premium Deck Budget →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Payment Estimator →</Link></li>
        </ul>
      </section>

      <SimpleCTA title="Build Your Covered Deck" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/covered-deck-builder-northern-virginia" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </main>
  );
}
