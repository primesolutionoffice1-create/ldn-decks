import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import GoogleMapEmbed from '@/components/GoogleMapEmbed';
import JsonLd from '@/components/JsonLd';
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/deck-builder-oakton-va',
  title: 'Deck Builder in Oakton, VA | Premium Composite Decks | Loudoun Decks',
  description: 'Custom deck builder in Oakton, VA. 5.0★ Google. Trex Transcend & TimberTech AZEK decks for Oakton estate homes. Multi-level designs, screened porches, outdoor kitchens. Free estimate.',
  image: '/images/img64.jpeg',
});

const inclusions = [
  {
    title: "Wooded Lot Specialists",
    desc: "Oakton's mature tree canopy requires careful construction planning. We design around root systems and canopy lines to preserve your landscape while building a structurally sound deck."
  },
  {
    title: "Fairfax County RPA Knowledge",
    desc: "Properties near Difficult Run and other waterways may require Resource Protection Area review. We manage environmental assessments and mitigation plans as part of every applicable project."
  },
  {
    title: "Premium Material Standards",
    desc: "Oakton homeowners expect the best. We build exclusively with Trex Transcend, TimberTech AZEK, and comparable top-tier composites paired with cable, glass, or custom metal railings."
  }
];

const oaktonFAQs = [
  {
    q: "How much does a custom deck cost in Oakton, VA?",
    a: "Oakton deck projects typically range from $30,000 to $75,000+. This reflects the larger lot sizes, premium material expectations (Trex Transcend, TimberTech AZEK), and the multi-level designs common on Oakton's sloped, wooded properties. Composite decks run $40-$65 per square foot installed depending on material and complexity."
  },
  {
    q: "What permits does Oakton require for a deck?",
    a: "Oakton falls under Fairfax County jurisdiction. All decks require building and zoning permits, with plan review typically taking 3-6 weeks. Properties near Difficult Run or other waterways may require additional Resource Protection Area (RPA) review. We handle all permit submissions and inspections."
  },
  {
    q: "Can you build around mature trees on my Oakton property?",
    a: "Yes — tree preservation is a core part of our Oakton work. Many properties here have mature oaks, hickories, and tulip poplars near the build zone. We design footing layouts that avoid critical root zones, use cantilevered framing where needed, and coordinate with Fairfax County's tree-save requirements to protect your landscape."
  },
  {
    q: "Do Oakton neighborhoods have HOA or architectural review?",
    a: "Fewer Oakton neighborhoods have formal HOAs compared to newer subdivisions, but many have deed restrictions or architectural review committees that govern exterior modifications. Fox Mill Estates, Vale area communities, and several others have specific guidelines. We research your property's restrictions before finalizing designs."
  },
  {
    q: "What deck materials do you recommend for Oakton homes?",
    a: "For Oakton's premium market, we primarily recommend Trex Transcend and TimberTech AZEK. Both offer realistic wood-grain textures, exceptional fade resistance, and 25-50 year warranties. We pair these with Trex Signature cable railings or glass panel systems. AZEK's PVC construction is especially well-suited for Oakton's shaded, wooded lots where moisture retention can be a concern."
  },
  {
    q: "Can you build multi-level decks on sloped Oakton lots?",
    a: "Multi-level design is one of our specialties, and Oakton's terrain makes it a frequent requirement. We engineer cascading deck structures that follow natural grade changes, creating distinct outdoor zones — dining, lounging, grilling — connected by code-compliant stairways. This approach turns a sloped backyard from a limitation into a design feature."
  }
];

const oaktonFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": oaktonFAQs.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

const expansionSections = [
  {
    title: "Oakton's Wooded Estate Lots",
    paragraphs: [
      "Oakton occupies a quiet, affluent corridor between Vienna and Fairfax, defined by its large wooded lots, established homes, and a character that feels distinctly different from the denser suburbs closer to DC. Properties in Oakton proper, Blake Lane, Waples Mill, Vale, Fox Mill Estates, and the Oak Marr area typically sit on half-acre to two-plus-acre lots shaded by mature hardwood canopy. This setting is exactly what draws homeowners to Oakton — and it shapes every deck project we build here.",
      "Building on a wooded Oakton lot requires a deck builder who understands arboriculture as much as construction. Mature oaks, hickories, and tulip poplars often have root systems that extend 30 feet or more from the trunk. Standard footing placement can damage these root zones, leading to tree decline or loss — an outcome no Oakton homeowner wants. We survey the build area with tree protection in mind, positioning footings to avoid critical roots and using cantilevered framing to bridge sensitive zones.",
      "The wooded setting also influences material selection. Shaded lots retain moisture longer than sun-exposed properties, which accelerates the deterioration of wood decking and makes mold growth a persistent maintenance issue. This is one reason we strongly recommend PVC-based products like TimberTech AZEK for Oakton builds — they are impervious to moisture absorption and resist mold without chemical treatments."
    ]
  },
  {
    title: "Premium Materials for Oakton Properties",
    paragraphs: [
      "Oakton's real estate market sets clear expectations for quality. Homes here range from $800,000 to well over $2 million, and homeowners invest accordingly in their outdoor spaces. We build exclusively with Trex Transcend, TimberTech AZEK, and comparable premium composites because these are the materials that match the caliber of Oakton properties. Standard-grade composite or pressure-treated lumber simply does not belong on homes in this market.",
      "For Oakton projects, Trex Signature cable railings and glass panel systems are the most popular choices. Cable railings complement the wooded setting by preserving views of the tree canopy and natural landscape. Hidden fastener systems create a screw-free deck surface that feels like finished furniture. Integrated LED lighting — both in-deck and under-rail — extends the usable hours of your outdoor space through Virginia's long summer evenings and into the fall entertaining season.",
      "The investment in premium materials pays for itself in two ways. First, you eliminate the ongoing maintenance costs that plague wood decks in Virginia's humid climate — no annual staining, no sanding, no board replacement. Second, in Oakton's competitive real estate market, a professionally built composite deck with modern railings and lighting is a genuine asset that buyers prioritize. Our Trex and TimberTech projects are designed to stay beautiful for 25 to 50 years with nothing more than occasional cleaning."
    ]
  },
  {
    title: "Environmental Considerations — Tree Protection and RPA",
    paragraphs: [
      "Several areas of Oakton are adjacent to Difficult Run, one of Fairfax County's significant stream corridors, and other tributaries that feed into the Potomac watershed. Properties near these waterways may fall within a Resource Protection Area (RPA) — an environmental overlay zone that restricts construction activity within 100 feet of the stream buffer. If your Oakton lot has an RPA designation, your deck project will require additional environmental review and potentially a water quality impact assessment.",
      "We have extensive experience with Fairfax County's RPA process. We identify RPA boundaries early in the design phase, work with environmental consultants when required, and design deck footprints that minimize disturbance to the buffer zone. In some cases, we can design a deck that avoids the RPA entirely through strategic placement. In others, we prepare the mitigation plans that Fairfax County requires for approval. Either way, our familiarity with the process prevents the costly delays that catch less experienced builders off guard.",
      "Beyond RPA, Fairfax County's tree-save ordinance applies to many Oakton lots. Mature trees above a certain caliper cannot be removed without replacement or mitigation. We coordinate with the county's tree-save requirements as part of every applicable Oakton project, ensuring that your deck is built in full compliance while preserving the wooded character that makes your property valuable."
    ],
    listItems: [
      { label: "RPA Assessment", text: "Early identification of Resource Protection Area boundaries and environmental review requirements." },
      { label: "Root-Zone Protection", text: "Footing layouts designed to avoid critical root systems of mature Oakton trees." },
      { label: "Tree-Save Compliance", text: "Full coordination with Fairfax County's tree-save ordinance for protected specimens." },
      { label: "Erosion Control", text: "Proper sediment and erosion measures during construction on sloped, wooded lots." }
    ]
  },
  {
    title: "Multi-Level Designs for Oakton's Terrain",
    paragraphs: [
      "Oakton's natural topography is one of its defining features — rolling terrain, gentle slopes, and grade changes that give properties character but also present construction challenges. A flat, single-level deck on a sloped Oakton lot wastes the site's potential and often looks out of place. Multi-level design is the solution, and it is one of our specialties.",
      "We engineer cascading deck structures that follow the natural grade of your property, creating distinct outdoor zones at different elevations. A typical multi-level Oakton project might include an upper dining level adjacent to the home's kitchen, a mid-level lounging area with built-in seating, and a lower grilling station near grade level. Code-compliant stairways connect the levels, and integrated lighting ensures safe navigation after dark. The result transforms a sloped backyard from a limitation into the most compelling feature of your outdoor space.",
      "Structural engineering is critical for multi-level builds. Each level requires its own footing and beam system, and the connections between levels must handle lateral loads as well as vertical. We work with licensed structural engineers on complex Oakton projects to ensure every element meets or exceeds Virginia building code. Our projects are designed to last decades, not just pass inspection."
    ]
  }
];

export default function OaktonDeckBuilderPage() {
  return (
    <main>
      <JsonLd data={oaktonFaqSchema} />
      <LocalBusinessSchema city="Oakton" url="https://ldndecks.com/deck-builder-oakton-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-oakton-va" name="Deck Builder in Oakton, VA | Premium Composite Decks | Loudoun Decks" description="Custom deck builder in Oakton, VA. 5.0★ Google. Trex Transcend &amp; TimberTech AZEK decks for Oakton estate homes. Multi-level designs, screened porches, outdoor kitchens. Free estimate." speakable />
      <ServicesHeader
        subtext="Oakton, VA's Premium Deck Builder"
        title="Custom Deck Builder in Oakton, VA"
        description="Loudoun Decks builds premium composite decks, multi-level structures, and screened porches for Oakton's wooded estate properties. Trex Platinum Partner. 5-Star Google Rated."
      />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>New custom build minimum: $5,000+</strong>
            <br />
            We focus on <strong style={{ color: '#111' }}>full custom Oakton builds</strong>. Need a repair instead? Visit our <a href="/services/deck-repair-and-structural-maintenance" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a> for board replacement, railings, and structural fixes.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Oakton's Trusted Choice"
        title="Deck Builder Oakton VA - Premium Builds for Wooded Estate Lots"
        description="We design and build the luxury outdoor environments Oakton homeowners expect. Multi-level builds, premium composite, tree protection, and full Fairfax County permit management from $30k+."
        listItems={[
          "Trex Platinum & TimberTech AZEK Certified",
          "Specialists in wooded lot construction and tree preservation",
          "Custom multi-level designs for Oakton's sloped terrain",
          "Fairfax County permits including RPA environmental review",
          "5-Star Google Rated - call (571) 655-7207"
        ]}
        image1="/images/img64.jpeg"
        image2="/images/img21.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Premium custom deck built by LDN Decks in Oakton, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' }}>Featured Oakton Project: Fox Mill Estates Multi-Level Deck</h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
          Our featured Oakton project includes a <strong>$52,000 500 sqft TimberTech AZEK multi-level deck</strong> in Fox Mill Estates.
          Built in Dark Hickory with Trex Signature cable railing and integrated LED lighting throughout. This wooded lot required
          careful root-zone protection for several mature oaks, with footings positioned to avoid critical root systems. The
          multi-level design follows the natural grade change, creating an upper dining area connected to a lower lounging
          level. Fairfax County permit with tree-save compliance. 4-week build.
        </p>
      </div>

      <ServiceInclusions
        title="Why Oakton Chooses Loudoun Decks"
        description="Wooded lot expertise, premium materials, and a process built for Oakton's estate properties."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ canonicalUrl="https://ldndecks.com/deck-builder-oakton-va" withSchema={false}
        title="Deck Builder Oakton VA - FAQs"
        faqs={oaktonFAQs}
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK Comparison'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}

            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (5.0★ Google) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Oakton" /></div></section>
      <SimpleCTA title="Build Your Premium Oakton Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-oakton-va" />
      <NamedAuthor context="Oakton and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </main>
  );
}
