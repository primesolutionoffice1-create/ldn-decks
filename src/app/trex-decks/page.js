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
import AboveFoldCTA from '@/components/AboveFoldCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/trex-decks',
  title: 'Trex Platinum Deck Builder NoVA | 5.0★ Rated Contractor',
  description: 'Looking for a Trex Platinum Partner in Northern Virginia? Loudoun Decks specializes in premium Trex Transcend & Lineage installations. Free 24h estimates!',
  image: '/images/img01.jpeg',
});

const inclusions = [
  {
    title: "Trex Transcend® Mastery",
    desc: "We specialize in the Transcend line, offering the highest level of scratch resistance and deep wood grain available in Northern Virginia."
  },
  {
    title: "Integrated Lighting",
    desc: "Seamless integration of Trex Reveal® and Trex Wedge® lighting systems for 5-Star nighttime aesthetics in Loudoun and Fairfax."
  },
  {
    title: "Pro-Solar® Post Caps",
    desc: "Adding custom solar or wired post caps to your Trex railing for enhanced safety and beauty across Arlington and Stafford."
  }
];

const trexFAQs = [
  {
    q: "Why should I choose a certified Trex builder in Loudoun County?",
    a: "Certified builders like Loudoun Decks have gone through rigorous training and audits by Trex. This ensures that your installation qualifies for Trex's 25 to 50-year limited residential warranty."
  },
  {
    q: "Is Trex better than regular wood for Northern Virginia weather?",
    a: "Absolutely. Trex will not warp, rot, or splinter even with NoVA's high humidity and intense seasonal shifts. It requires zero staining, saving you time and money annually."
  },
  {
    q: "How many colors does Trex offer for Fairfax homeowners?",
    a: "Trex offers over 20 distinct colors categorized into tiers like Transcend (high-end tropicals), Select (classic earth tones), and Enhance (budget-friendly)."
  },
  {
    q: "What is the lifespan of a Trex Transcend deck?",
    a: "Trex Transcend decks are designed to last 25 to 50 years. The capped surface is essentially indestructible under normal residential use in Prince William County."
  },
  {
    q: "Do Trex decks fade over time in the sun?",
    a: "Trex Transcend and Select lines are engineered with high-stain and fade resistance. Any fading is barely perceptible over several decades, unlike natural cedar or pine."
  },
  {
    q: "Is Trex decking made from recycled materials?",
    a: "Yes. Trex is one of the most sustainable builders in the world, using 95% recycled wood and plastic film. No trees are ever cut down for Trex decking."
  },
  {
    q: "How do I clean my Trex deck in Arlington?",
    a: "A simple seasonal cleaning with mild soap and water is all that's required. You never need to sand, stain, or seal a Trex deck."
  },
  {
    q: "Will a Trex deck improve my home's resale value in NoVA?",
    a: "Yes. Trex is a highly recognized premium brand. Having a 'Certified Trex Deck' is a major selling point for premium homes in Loudoun and Fairfax Counties."
  }
];

const expansionSections = [
  {
    title: "The Gold Standard of Outdoor Living: Trex Decks in Northern Virginia",
    paragraphs: [
      "When homeowners in Northern Virginia think of low-maintenance outdoor living, one name stands above the rest: Trex. As a certified Trex deck builder in Loudoun County, Fairfax County, and Prince William County, Loudoun Decks has seen first-hand how this material has redefined the backyard experience. Our clients in Ashburn and Leesburg are increasingly opting for Trex because it provides the perfect balance of luxury aesthetics and rugged durability.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We specialize in the full Trex ecosystem, from the industry-leading Transcend® decking boards to the sophisticated Trex Signature® aluminum railing systems. A Trex deck is not just a platform; it is a high-performance floor designed to handle the active lifestyles of Northern Virginia families, from summer graduation parties to quiet mornings with coffee in the crisp NoVA air.",
      "Choosing a custom deck builder who is intimately familiar with the Trex product line is critical for a valid warranty. Trex has specific installation requirements regarding joist spacing and hidden fastener torque settings. Our team is trained to meet and exceed these standards, ensuring your 5-Star Google Rated build is as safe as it is beautiful."
    ]
  },
  {
    title: "Navigating the Trex Product Tiers: Finding Your Perfect Match",
    paragraphs: [
      "Trex offers a variety of product 'collections' to suit different architectural styles and budgets across areas like Fairfax Station and Arlington. The 'Transcend' line is our most requested collection for premium projects. It features the thickest protective 'cap,' making it virtually immune to scratches, stains, and mold. The Transcend Tropicals collection offers stunning, multi-tonal boards that capture the look of exotic hardwoods like Ipe or Mahogany without the ethical or maintenance concerns of real wood.",
      "For homeowners in Great Falls and Mclean, the ability to mix and match colors between the decking and the railing is a major design advantage. We often design decks with a 'picture frame' border in a darker Trex color, which creates a clean, sophisticated look that highlights the custom craftsmanship of your build. The 'Select' line remains a popular mid-tier option for families in Sterling and Herndon who want the Trex name and quality at a slightly more accessible price point.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. As your dedicated Trex contractor near you, we guide you through these selections, helping you visualize how different colors and textures will integrate with your home’s existing siding and trim."
    ],
    listItems: [
      { label: "Trex Transcend®", text: "The flagship line featuring high-definition wood grain and the most robust scratch-resistance." },
      { label: "Trex Signature® Railing", text: "Powder-coated aluminum railing that offers slim profiles and maximum views of your yard." },
      { label: "Trex RainEscape®", text: "An under-deck drainage system that allows you to create a dry living space beneath your elevated deck." },
      { label: "Trex Outdoor Lighting™", text: "Post cap, stair riser, and recessed deck lights that are fully integrated into the Trex system." }
    ]
  },
  {
    title: "The Science of Sustainability: 95% Recycled, 100% Luxury",
    paragraphs: [
      "In modern Northern Virginia, sustainability is more than just a buzzword-it is a priority. One of the reasons we are proud to be a Trex builder in regions like Vienna and Reston is Trex's commitment to the environment. Every Trex deck board is made from 95% recycled material, including reclaimed industrial wood scraps and recycled plastic film from grocery bags and dry cleaning wrap. Trex is one of the largest recyclers of plastic film in North America.",
      "This eco-friendly approach does not mean sacrificing quality. In fact, Trex material science produces a board that is more durable than natural wood. It won't splinter, making it much safer for bare feet and pets. It won't rot, even in the shaded, damp environments found in some parts of Prince William County and Stafford. You are essentially turning tons of waste into a permanent, high-value asset for your property.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. By choosing a 5-Star Google Rated Trex installer, you are supporting sustainable construction practices while ensuring your home features the world's most trusted name in outdoor living."
    ]
  },
  {
    title: "Integrated Features: Beyond the Deck Boards",
    paragraphs: [
      "What separates a Loudoun Decks project from a standard installation is our use of the complete Trex ecosystem. For our elevated deck builds in Stafford and Arlington, we often recommend the Trex RainEscape system. This unique drainage system is installed over the joists and under the decking, diverting water away into a gutter system. This allows the area under the deck to stay completely dry, essentially creating a 'covered patio' for no-cost additional living space.",
      "We also specialize in Trex lighting. These low-voltage LED systems are designed to fit perfectly into Trex posts and stairs, providing a warm, sophisticated glow that enhances safety and allows you to enjoy your deck long after the sun goes down. As your custom deck builder, we handle all the electrical integration, ensuring your new outdoor space is fully ready for nighttime entertaining from day one.",
      "Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. Our 'Full projects only' approach ensures that your Trex deck is a complete, cohesive architectural statement that increases your home value and provides a lifetime of 5-Star memories."
    ]
  }
];

export default function TrexDecksPage() {
  return (
    <main>
      <ServiceSchema name="Trex Deck Installation" description="Certified Trex Platinum Partner installer in Northern Virginia. Trex Enhance, Select, and Transcend product lines. 25-year warranty." price="18000" />
      <ServicesHeader
        subtext="Certified Trex Pro Builder"
        title="Custom Trex Deck Building & Installation"
        description="Loudoun Decks is the premier certified Trex installer in Loudoun County, Fairfax County, and Prince William County. Experience the ultimate in low-maintenance luxury."
      />

      <AboveFoldCTA headline="Planning a Trex Transcend, Select or Enhance deck in NoVA? Talk to a certified Trex Platinum specialist today." />

      {/* Pricing Anchor - Conversion Filtering */}
      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: '500' }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>New Trex deck projects from $15,000+</strong>
            <br />
            On this page we focus on <strong style={{ color: '#111' }}>full custom Trex builds</strong>. Looking for repair work, board replacement, railing or structural fixes? See our <a href="/services/deck-repair-and-structural-maintenance" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</a>.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="World #1 Brand"
        title="Expert Trex Contractor Serving Northern Virginia"
        description="Trex Transcend® provides a beautiful, splinter-free surface that lasts for decades. We specialize in custom brand-name builds across Arlington, Stafford, and total NoVA."
        listItems={[
          "Certified Trex Pro installation specialists",
          "Trex Transcend® & Signature® collections",
          "Low-maintenance (never stain or sand again)",
          "Integrated Trex lighting and drainage systems",
          "95% recycled, eco-friendly construction"
        ]}
        image1="/images/img12.jpeg"
        image2="/images/img13.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions
        title="The Trex Distinction"
        description="Loudoun Decks is a trusted deck builder serving Loudoun County, Fairfax County, and Prince William County. We bring Trex excellence to every home."
        items={inclusions}
      />

      <ProcessSteps />

      <ServicesFAQ
        title="Trex Decking & Warranty FAQs"
        faqs={trexFAQs}
      />

      <ServiceAreasGrid />

      <RelatedGuides currentPath="/trex-decks" />
      <ContactHome />
    </main>
  );
}
