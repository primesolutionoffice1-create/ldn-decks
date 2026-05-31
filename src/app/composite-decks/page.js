import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/composite-decks',
  title: 'Premier Composite Deck Builder NoVA | 5-Star Custom Decks',
  description: 'Premier composite deck builder in Northern Virginia. Trex Platinum Partner & TimberTech Certified. Custom low-maintenance decks from $15k+ in Ashburn, Fairfax & Leesburg.',
  image: '/images/img10.jpeg',
});

const inclusions = [
  {
    title: "Fade & Stain Protection",
    desc: "Premium composite materials that withstand the intense Virginia sun and spills without fading or permanent staining."
  },
  {
    title: "Hidden Fasteners",
    desc: "A completely smooth, splinter-free surface using industrial-grade hidden clips for a 5-Star luxury finish."
  },
  {
    title: "Structural Integrity",
    desc: "Framing systems engineered specifically to support the increased weight of composite decking in Loudoun and Fairfax."
  },
  {
    title: "Permits & HOA Handled",
    desc: "We manage the entire permit process and HOA architectural review submissions so you don't have to."
  },
  {
    title: "Typical Timeline: 2–4 Weeks",
    desc: "Most composite deck projects are completed in 2–4 weeks from permit approval, depending on size and complexity."
  }
];

const compositeFAQs = [
  {
    q: "Is composite decking worth the extra cost in Northern Virginia?",
    a: "Yes. While composite costs about 1.5x to 2x more than pressure-treated wood upfront, it saves thousands in staining and repair costs over its 25+ year lifespan in the NoVA climate."
  },
  {
    q: "Does composite decking get too hot for bare feet?",
    a: "Modern composite brands like Trex and AZEK use heat-reflective technology. While they can get warm, they are significantly cooler than earlier generations of PVC and composite."
  },
  {
    q: "How many years does a composite deck last in Fairfax County?",
    a: "A professionally installed composite deck by Loudoun Decks is designed to last 25 to 50 years with minimal maintenance."
  },
  {
    q: "Do composite decks require any maintenance at all?",
    a: "They require a periodic soap-and-water rinse to remove pollen and dust. No sanding, staining, or sealing is ever needed."
  },
  {
    q: "Can you install composite decking in Arlington and Stafford?",
    a: "Absolutely. We provide custom composite deck installation across all major Northern Virginia hubs, including Arlington, Stafford, and Prince William Counties."
  },
  {
    q: "Is composite decking slippery when wet?",
    a: "High-quality composites feature embossed wood grain textures that provide excellent slip resistance, meeting or exceeding local safety codes."
  },
  {
    q: "What is the best composite brand for NoVA homes?",
    a: "We often recommend Trex and AZEK for their unmatched warranty support and specialized material science adapted to Mid-Atlantic seasonal cycles."
  },
  {
    q: "Does composite decking increase home resale value?",
    a: "Yes. In the high-demand Northern Virginia market, buyers prioritize low-maintenance features, often resulting in a high ROI for composite outdoor spaces."
  }
];

const expansionSections = [
  {
    title: "The Future of Outdoor Living: The Composite Revolution in NoVA",
    paragraphs: [
      "In the competitive Northern Virginia real estate market, homeowners are increasingly moving away from traditional wood in favor of high-performance composite decking. As a leading composite deck builder in Loudoun County, Fairfax County, and Prince William County, Loudoun Decks has mastered the art and science of these advanced materials. Our clients in Ashburn and Leesburg are looking for more than just a deck; they are looking for a permanent extension of their indoor luxury-one that doesn't require annual maintenance weekends.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. The transition to composite is driven by the desire for longevity and consistent aesthetics. Unlike natural wood, which can warp, splinter, and gray within just a few years of NoVA's humid cycles, composite materials maintain their rich color and structural integrity for decades. This 'set it and forget it' mentality is perfect for busy professionals in Arlington and the growing families in Gainesville.",
      "As your custom deck builder, we don't just 'install' composite; we engineer it. This includes specialized joist spacing and structural reinforcement that compensates for the unique thermal expansion and weight characteristics of high-end composite boards. When you choose a 5-Star Google Rated local expert, you are ensuring your deck remains a beautiful, safe sanctuary year after year."
    ]
  },
  {
    title: "The Science of High-Performance Material: Why It Wins",
    paragraphs: [
      "Modern composite decking is a marvel of material science. Leading brands like Trex and AZEK use a combination of recycled wood fibers and high-density polyethylene (HDPE) to create a board that is impervious to rot, insects, and moisture. In regions like Sterling and Herndon, where moisture-driven fungal growth is common on older wooden structures, composite stands as a rot-proof alternative. The 'capped' surface of the board acts as a protective shield against UV rays, ensuring that the deep browns and grays you choose during the design phase are the same colors you see 20 years later.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We prioritize material knowledge, helping you navigate the various 'tiers' of composite-from basic scalloped-back boards to ultra-premium solid-core PVC. Each has its place depending on your project's vertical architecture and budget. For instance, if you're building a deck with an integrated fire pit or outdoor kitchen, certain high-heat resistant composites are mandatory.",
      "Beyond just the boards, we utilize hidden fastener systems. These industrial-grade clips are installed between the gaps of the boards, meaning there are no visible screws on the surface of your deck. This creates a smooth, barefoot-friendly floor that is safer for children and pets, and provides the high-ticket, seamless look expected in areas like Great Falls and Mclean."
    ],
    listItems: [
      { label: "Durability", text: "Composite decking is designed to withstand the freezing winters and scorching summers of Northern Virginia without cracking." },
      { label: "Sustainability", text: "Most composite brands use up to 95% recycled content, including reclaimed sawdust and recycled plastic film." },
      { label: "Warranty", text: "Enjoy peace of mind with 25 to 50-year limited residential stain and fade warranties from top manufacturers." },
      { label: "Variety", text: "Choose from dozens of variegated colors and realistic textures that mimic Ipe, Cedar, or Redwood." }
    ]
  },
  {
    title: "Low Maintenance vs. Zero Maintenance: Real Expectations",
    paragraphs: [
      "While many contractors promise 'zero maintenance,' we prefer to be honest with our Northern Virginia clients. A composite deck is 'low-maintenance,' meaning it does not require sanding, staining, painting, or sealing-ever. However, like any outdoor surface in areas like Fairfax Station or Burke, it will collect dust, pollen, and leaves. A simple seasonal wash with mild soap and water is all that's required to keep your 5-Star space looking pristine.",
      "The beauty of this low-maintenance profile is the time and money it saves. Homeowners in Prince William County can spend their weekends enjoying their outdoor living space rather than laboring over it. Over a 10-year period, the cost of staining and professional sanding for a wood deck can easily exceed $5,000 to $8,000. When you factor in these savings, composite decking often pays for its price premium in just 5 to 7 years.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We provide our clients with a custom maintenance guide for their specific composite brand, ensuring they know exactly how to care for their investment for maximum longevity."
    ]
  },
  {
    title: "Engineering Excellence in NoVA and Beyond",
    paragraphs: [
      "A composite deck is only as good as the structure beneath it. Because composite boards are more flexible than natural wood, they require a tighter joist spacing (often 12 inches on center vs the standard 16 inches) to prevent any 'bouncing' or sponginess when walking. We specialize in these structural adjustments for homes in Stafford and Arlington, ensuring that your foundation is as high-performance as your surface.",
      "We handle the entire planning process, from CAD designs to building permits. Whether you are in Loudoun County or Prince William, we ensure that every aspect of your composite build is 'to code' and built to exceed local standards. Our 'Full projects only' philosophy means we manage everything: the design, the frame, the decking, and the final 5-Star walkthrough.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Choosing a composite deck builder near you who is dedicated to this material means you are getting an expert who knows exactly how to handle thermal expansion, fastener torquing, and color matching in our specific Mid-Atlantic environment."
    ]
  }
];

export default function CompositeDecksPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/composite-decks" name="Premier Composite Deck Builder NoVA | 5-Star Custom Decks" description="Premier composite deck builder in Northern Virginia. Trex Platinum Partner &amp; TimberTech Certified. Custom low-maintenance decks from $15k+ in Ashburn, Fairfax &amp; Leesburg." speakable />
      <ServiceSchema
        name="Composite Deck Installation"
        description="Expert composite deck installation in Northern Virginia. Trex Platinum Partner and TimberTech Certified. 25-50 year warranties."
        url="https://ldndecks.com/composite-decks"
        category="Deck Construction"
        lowPrice="20000"
        highPrice="80000"
        relatedServices={['https://ldndecks.com/trex-decks', 'https://ldndecks.com/timbertech-decks', 'https://ldndecks.com/services/new-decks']}
      />
      <ServicesHeader 
        subtext="5-Star Google Rated Specialist"
        title="Premier Composite Deck Builder in Northern Virginia"
        description="Loudoun Decks is the leading composite deck builder in Loudoun County, Fairfax County, and Prince William County. High-performance, low-maintenance outdoor luxury."
      />

      <AboveFoldCTA headline="Planning a custom composite deck in Northern Virginia? Talk to a 5-star Trex Platinum specialist today." />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>Custom composite deck projects from $15,000+</strong>
            <br />
            On this page we focus on <strong style={{ color: '#111' }}>full custom composite builds</strong>. In Loudoun County? See our <a href="/composite-deck-builder-loudoun" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>Loudoun composite deck builder page</a>. Comparing brands? See our <a href="/trex-decks" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>Trex deck page</a> or <a href="/timbertech-decks" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>TimberTech/AZEK deck page</a>. Looking for repair work, board replacement, railing or structural fixes? See our <a href="/services/deck-repair-and-structural-maintenance" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a>.
          </p>
          <p style={{ fontSize: '15px', color: '#555', margin: '12px 0 0' }}>
            For the broader service-area overview, compare materials, permits, and county planning on our <a href="/deck-builder-northern-virginia" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>Northern Virginia deck builder hub</a>.
          </p>
          <p style={{ fontSize: '15px', color: '#555', margin: '12px 0 0' }}>
            Want to see estimated monthly payments for Trex and TimberTech projects? Use our <a href="/deck-payment-estimator" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck payment estimator</a>.
          </p>
        </div>
      </section>

      <ServiceMain 
        subtitle="Built for Life"
        title="Expert Composite Deck Contractor Serving NoVA"
        description="Ditch the staining and sanding. We specialize in premium composite deck installation for homeowners in Arlington, Stafford, and across Northern Virginia."
        listItems={[
          "Certified Trex and AZEK installers",
          "Low-maintenance surfaces (no staining)",
          "Hidden fastener systems for seamless looks",
          "Scratch, stain, and fade resistant",
          "Comprehensive 25-50 year warranties",
          "All permits + HOA approvals handled",
          "See our before & after transformations"
        ]}
        image1="/images/img10.jpeg"
        image2="/images/img11.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions 
        title="The Low-Maintenance Advantage"
        description="Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our composite builds are designed for Northern Virginia's climate."
        items={inclusions}
      />

      <ProcessSteps />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/composite-decks"
        title="Composite Decking & Material FAQs"
        faqs={compositeFAQs}
      />

      <ServiceAreasGrid />

      <ServicesCallToAction />

      <RelatedGuides currentPath="/composite-decks" />
      <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />

      <ContactHome />
    </main>
  );
}
