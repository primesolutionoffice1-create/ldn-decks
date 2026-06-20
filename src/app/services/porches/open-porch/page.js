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
  path: "/services/porches/open-porch",
  title: "Open Porch Builder & Design | Northern Virginia",
  description: "Custom open porch design and construction in Northern Virginia. We build covered open-air porches, pavilions, and outdoor living rooms. Free estimates.",
  image: "/social/open-porch-social.png",
});

const inclusions = [
  { title: "Structural Roofline Integration", desc: "We engineer open porch rooflines to tie directly into your home's existing structure, creating a seamless architectural extension rather than an afterthought addition." },
  { title: "Premium Finish Materials", desc: "Tongue-and-groove cedar ceilings, exposed timber beams, pressure-treated columns, or low-maintenance composite decking floors — selected to match your home's aesthetic." },
  { title: "Electrical & Comfort Systems", desc: "Ceiling fans for humid Northern Virginia summers, recessed LED lighting on dimmers, GFCI outlets for outdoor appliances, and optional infrared heaters for fall evenings." },
  { title: "Permit Planning Support", desc: "We handle all engineering drawings, building permit applications, and inspection coordination with Loudoun, Fairfax, or Prince William County on your behalf." }
];

const expansionSections = [
  {
    title: "What is an Open Porch — and Who Is It For?",
    paragraphs: [
      "An open porch — also called a covered porch, pavilion, or covered deck — is a roofed outdoor living space that remains open on the sides. Unlike a screened porch, it offers unobstructed airflow and a direct connection to the surrounding landscape. Unlike an uncovered deck, it provides essential shade and protection from light rain, dramatically extending the usable outdoor season in Northern Virginia.",
      "Open porches are the ideal choice for homeowners who want to integrate outdoor kitchens, gas grills, pizza ovens, or fire features into their outdoor living space — all of which require proper ventilation that a screened or enclosed porch cannot provide. They are also ideal for homeowners who simply prefer the open, airy feel of being outside without a screen barrier between them and their yard.",
      "In neighborhoods across Loudoun County — from Lansdowne and Brambleton to Leesburg and Purcellville — open porches are one of the most requested outdoor upgrades. Homes with covered outdoor living spaces consistently command higher appraisal values and spend significantly fewer days on market."
    ]
  },
  {
    title: "Design Considerations: Materials, Rooflines & Architectural Style",
    paragraphs: [
      "The most important design decision for an open porch is the roofline style, which must complement your home's existing architecture. A colonial or craftsman home in Ashburn or Herndon typically suits a gable or hip roof with exposed rafters. A modern or transitional home may benefit from a clean shed roof with minimal trim profile. Our design team reviews your home's architectural drawings and exterior profile before recommending a structural approach.",
      "Material selection is equally critical. Post materials range from 6x6 pressure-treated wood columns to smooth PVC-wrapped or fiber cement columns for a cleaner finish. Ceiling materials include tongue-and-groove cedar (premium aesthetic, natural warmth), beadboard PVC (zero maintenance, crisp coastal look), or simple drywall-style bead board paneling. Flooring options include your choice of composite decking, natural wood, or concrete pavers depending on whether the porch is freestanding or attached.",
      "Structural load capacity must be calculated before a single post is set. Every open porch we build is engineered to support not just the dead load of the roof, but Virginia's 25 lb/sq ft snow load requirement and the live load of outdoor furniture, grills, and people. This engineering is included in our permit package at no additional cost."
    ],
    listItems: [
      { label: "Gable Roof", text: "Classic peaked ridge. Maximum height and drama. Works on most home styles." },
      { label: "Hip Roof", text: "All four sides slope down. Elegant, traditional. Excellent wind resistance." },
      { label: "Shed Roof", text: "Single-slope. Clean, modern. Lower profile, faster build time." },
      { label: "Vaulted / Cathedral", text: "Dramatic interior height. Premium aesthetic. Requires more structural engineering." }
    ]
  },
  {
    title: "Process, Permitting & Timeline",
    paragraphs: [
      "Every open porch project in Northern Virginia requires a building permit. Any roofed structure attached to your home changes its load path and must be reviewed by your county's building department. The permit process in Loudoun County typically takes 3-6 weeks; Fairfax County is similar. We submit all required documentation — structural drawings, site plans, energy compliance — and coordinate directly with the building department so you never have to.",
      "Once permits are approved, construction of a typical attached open porch takes 2-4 weeks depending on complexity. A detached pavilion or freestanding structure can be completed in 1-3 weeks. We coordinate all inspections required during the framing, electrical rough-in, and final inspection phases, and we do not hand over a project until it has received its certificate of occupancy.",
      "Pricing for custom open porches in Northern Virginia typically starts at $25,000+ for a basic covered porch with simple roofline, composite decking, and basic electrical. Integrated outdoor kitchens, stone flooring, premium timber framing, or complex architectural rooflines increase project scope and cost. We provide itemized estimates during your free on-site consultation."
    ]
  },
  {
    title: "Pairing Your Open Porch with Other Outdoor Living Elements",
    paragraphs: [
      "An open porch is rarely the only outdoor project on a homeowner's list. Most of our Northern Virginia clients combine a new open porch with adjacent [custom deck construction](/services/new-decks) to create a multi-level outdoor living system — the porch for shaded entertaining and cooking, the deck for open-air sunning and casual use.",
      "Fire pits and outdoor fireplaces are particularly popular additions to open porch projects. The open-air nature of the space means there are no ventilation concerns for a wood-burning feature, and the overhead roof creates a dramatic and sheltered fire experience even on rainy evenings. We offer [custom fire pit integration](/services/fire-pits) as part of our porch design package.",
      "For homeowners who do want some insect protection, open porches can also be designed with optional retractable screens or Eze-Breeze panels that allow the space to function as a screened porch when desired and as a fully open-air porch the rest of the time."
    ]
  }
];

const faqs = [
  { q: "Do I need a permit for an open porch in Loudoun County?", a: "Yes. Any roofed structure attached to your home requires a building permit in Loudoun County and all Northern Virginia jurisdictions. We coordinate permit-ready documentation and inspection planning including structural engineering drawings, site plan preparation, and coordination with county inspectors." },
  { q: "How much does a custom open porch cost in Northern Virginia?", a: "Open porch projects in Northern Virginia typically start at $25,000+ for a basic attached covered porch with standard roofline and composite decking. Projects with integrated outdoor kitchens, premium timber framing, stone flooring, or complex architectural rooflines cost more. We provide a detailed itemized estimate during your free on-site consultation." },
  { q: "How long does open porch construction take?", a: "After permit approval (typically 3-6 weeks in Northern Virginia), construction of an attached open porch typically takes 2-4 weeks. A detached pavilion or freestanding covered structure can often be completed in 1-3 weeks, depending on complexity." },
  { q: "What is the difference between an open porch and a screened porch?", a: "An open porch has a roof but is open on the sides, offering maximum airflow and an unobstructed outdoor experience. A screened porch has a roof and screening on all open sides, providing full protection from insects and light rain. Open porches are ideal for cooking, fire features, and homeowners who prefer full openness. Screened porches are preferred by families who spend long hours outdoors during mosquito season." },
  { q: "Can I convert an existing deck into an open porch?", a: "In many cases, yes. If your existing deck's foundation and framing are structurally sound and the footings are sized appropriately, we can add a roof structure on top. We conduct a full structural evaluation before designing any conversion project to ensure the existing foundation can safely support the added load of a roof." },
  { q: "Can an open porch have an outdoor kitchen?", a: "Yes — and this is one of the primary advantages of choosing an open porch over a screened porch. Open-air porches provide the ventilation required for gas grills, smokers, and pizza ovens. We integrate full outdoor kitchen setups including built-in grill stations, bar tops, refrigerator cutouts, and countertop surfaces." }
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

export default function OpenPorchPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/services/porches/open-porch" name="Open Porch Builder &amp; Design | Northern Virginia" description="Custom open porch design and construction in Northern Virginia. We build covered open-air porches, pavilions, and outdoor living rooms. Free estimates." speakable />
      <ServiceSchema
        name="Open Porch Construction"
        description="Open-air porch design and build in Northern Virginia. Covered or uncovered with composite or wood decking."
        url="https://ldndecks.com/services/porches/open-porch"
        category="Porch Construction"
        lowPrice="12000"
        highPrice="40000"
        relatedServices={['https://ldndecks.com/services/porches', 'https://ldndecks.com/services/porches/front-porch']}
      />
      <JsonLd data={faqSchema} />
      <ServicesHeader
        subtext="Open Porch Builder Northern Virginia"
        title="Custom Open Porch Design & Construction"
        description="Enjoy maximum airflow, unobstructed views, and premium outdoor living with a custom open porch built by Loudoun Decks. Ideal for outdoor kitchens, fire features, and year-round entertaining in Northern Virginia."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>

      {/* Pricing Anchor */}
      <section style={{ backgroundColor: '#f9f9f9', padding: '20px', borderBottom: '1px solid #eee', textAlign: 'center' }}>
        <p style={{ fontSize: '15px', color: '#555', margin: '0 auto', maxWidth: '800px' }}>
          <strong style={{ color: '#222' }}>Open porch projects typically start at $25,000+</strong>
          {' '}— roofing complexity, size, materials, and electrical integration affect final pricing.{' '}
          <strong>Free in-home estimate included.</strong>
        </p>
      </section>

      <ServiceMain
        subtitle="Outdoor Lounging, Cooking & Entertaining"
        title="Professional Open Porch Construction in Northern Virginia"
        description="An open porch provides a beautiful, airy covered space to relax and entertain without worrying about direct sun or light rain. We build custom open-air porches that perfectly match your home's architectural style — with integrated rooflines, premium ceilings, and full electrical across Loudoun and Fairfax County."
        listTitle="Open Porch Features:"
        listItems={[
          "Custom roof styles: Gable, Hip, Shed, Vaulted",
          "Integrated ceiling fans and recessed LED lighting",
          "Outdoor kitchen and fire feature ready",
          "Architectural columns and composite or wood railings",
          "Full structural engineering and permit management"
        ]}
        image1="/images/img19.jpeg"
        image2="/images/img17.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="What Every Open Porch Includes"
        description="Our end-to-end open porch builds are fully managed from engineering to final inspection."
        items={inclusions}
      />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/porches/open-porch" withSchema={false} title="Open Porch FAQs" faqs={faqs} />

      {/* Navigation to porch types */}
      <section style={{ padding: '40px 20px', background: '#f9f9f9', borderTop: '1px solid #eee' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '15px', color: '#666' }}>
            Considering a different porch type?{' '}
            <Link href="/screened-porch-builder-northern-virginia" style={{ color: 'var(--site-color)', fontWeight: '600' }}>Screened Porch</Link>
            {' '}|{' '}
            <Link href="/services/porches/front-porch" style={{ color: 'var(--site-color)', fontWeight: '600' }}>Front Porch</Link>
            {' '}|{' '}
            <Link href="/services/porches" style={{ color: 'var(--site-color)', fontWeight: '600' }}>All Porch Types</Link>
          </p>
        </div>
      </section>

      <ServiceAreasGrid />
      <SimpleCTA title="Build Your Open Porch" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/services/porches/open-porch" />
      <ContactHome />
    </main>
  );
}
