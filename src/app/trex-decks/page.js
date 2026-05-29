import React from 'react';
import Link from 'next/link';
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
import NamedAuthor from '@/components/NamedAuthor';
import WebPageSchema from '@/components/WebPageSchema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/trex-decks',
  title: 'Trex Platinum Deck Builder NoVA | 5-Star Rated Contractor',
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
      "We specialize in the full Trex ecosystem, from the industry-leading Transcend® decking boards to the sophisticated Trex Signature® aluminum railing systems. A Trex deck is not just a platform; it is a high-performance floor designed to handle the active lifestyles of Northern Virginia families, from summer graduation parties to quiet mornings with coffee in the crisp NoVA air.",
      "Choosing a custom deck builder who is intimately familiar with the Trex product line is critical for a valid warranty. Trex has specific installation requirements regarding joist spacing and hidden fastener torque settings. Our team is trained to meet and exceed these standards, ensuring your 5-Star Google Rated build is as safe as it is beautiful."
    ]
  },
  {
    title: "Navigating the Trex Product Tiers: Finding Your Perfect Match",
    paragraphs: [
      "Trex offers a variety of product 'collections' to suit different architectural styles and budgets across areas like Fairfax Station and Arlington. The 'Transcend' line is our most requested collection for premium projects. It features the thickest protective 'cap,' making it virtually immune to scratches, stains, and mold. The Transcend Tropicals collection offers stunning, multi-tonal boards that capture the look of exotic hardwoods like Ipe or Mahogany without the ethical or maintenance concerns of real wood.",
      "For homeowners in Great Falls and Mclean, the ability to mix and match colors between the decking and the railing is a major design advantage. We often design decks with a 'picture frame' border in a darker Trex color, which creates a clean, sophisticated look that highlights the custom craftsmanship of your build. The 'Select' line remains a popular mid-tier option for families in Sterling and Herndon who want the Trex name and quality at a slightly more accessible price point.",
      "As your dedicated Trex contractor, we guide you through these selections, helping you visualize how different colors and textures will integrate with your home’s existing siding and trim. For a side-by-side material breakdown, see our [Trex vs TimberTech vs AZEK comparison](/trex-vs-timbertech-vs-azek)."
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
      "By choosing a certified Trex installer, you are supporting sustainable construction practices while ensuring your home features the world's most trusted name in outdoor living. Learn more about our [eco-friendly decking approach](/eco-friendly-composite-decking)."
    ]
  },
  {
    title: "Integrated Features: Beyond the Deck Boards",
    paragraphs: [
      "What separates a Loudoun Decks project from a standard installation is our use of the complete Trex ecosystem. For our elevated deck builds in Stafford and Arlington, we often recommend the Trex RainEscape system. This unique drainage system is installed over the joists and under the decking, diverting water away into a gutter system. This allows the area under the deck to stay completely dry, essentially creating a 'covered patio' for no-cost additional living space.",
      "We also specialize in Trex lighting. These low-voltage LED systems are designed to fit perfectly into Trex posts and stairs, providing a warm, sophisticated glow that enhances safety and allows you to enjoy your deck long after the sun goes down. As your custom deck builder, we handle all the electrical integration, ensuring your new outdoor space is fully ready for nighttime entertaining from day one.",
      "Our approach ensures that your Trex deck is a complete, cohesive architectural statement that increases your home value and delivers lasting value. Every Trex project includes the manufacturer warranty backed by our TrexPro Platinum installation certification."
    ]
  }
];

export default function TrexDecksPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/trex-decks" name="Trex Platinum Deck Builder Northern Virginia" description="Certified Trex Platinum Partner in Northern Virginia. Trex Transcend, Select and Enhance installations with 25-year warranty." speakable />
      <ServiceSchema
        name="Trex Deck Installation"
        description="Certified Trex Platinum Partner installer in Northern Virginia. Trex Enhance, Select, and Transcend product lines. 25-year warranty."
        url="https://ldndecks.com/trex-decks"
        category="Deck Construction"
        lowPrice="18000"
        highPrice="75000"
        relatedServices={['https://ldndecks.com/composite-decks', 'https://ldndecks.com/timbertech-decks', 'https://ldndecks.com/services/new-decks']}
      />
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
            On this page we focus on <strong style={{ color: '#111' }}>full custom Trex builds</strong>. Use the <Link href="/deck-payment-estimator" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>payment estimator tool</Link> to model monthly payments, or see our <Link href="/services/deck-repair-and-structural-maintenance" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</Link> for repair work, board replacement, railing, or structural fixes.
          </p>
        </div>
      </section>

      {/* Trex Deck Cost — answers "trex deck cost" SERP intent directly */}
      <section style={{ padding: '3rem 1.5rem', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>
            Trex Deck Cost in Northern Virginia (2026)
          </h2>
          <p data-speakable style={{ marginBottom: '1.5rem', lineHeight: 1.7, color: '#2d3748' }}>
            A Trex deck in Northern Virginia typically runs <strong>$35–$80 per square foot installed</strong>,
            depending on tier. A 350 sqft Trex Enhance project lands $18,000–$26,000; Trex Transcend usually runs
            $22,000–$32,000; Trex Signature (full PVC, 50-year warranty) usually runs $28,000–$40,000+ for the same
            size.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.25rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Trex Tier</th>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Installed /sqft</th>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>350 sqft Project</th>
                  <th style={{ padding: '0.85rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Warranty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee', fontWeight: 700 }}>Trex Enhance</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>$35–$45</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>$18,000–$26,000</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>25-yr residential + 25-yr fade &amp; stain</td>
                </tr>
                <tr style={{ background: '#fafafa' }}>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee', fontWeight: 700 }}>Trex Transcend</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>$45–$60</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>$22,000–$32,000</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>25-yr residential + 25-yr fade &amp; stain</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee', fontWeight: 700 }}>Trex Signature</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>$60–$80</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>$28,000–$40,000+</td>
                  <td style={{ padding: '0.85rem', borderBottom: '1px solid #eee' }}>50-yr residential + 50-yr fade &amp; stain</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.85rem', color: '#666', fontStyle: 'italic', marginBottom: '1rem' }}>
            Pricing includes installation, hidden fasteners, and Trex railing. Composite or aluminum railings, picture-frame border, lighting, and stair flights are priced separately.
          </p>
          <p style={{ marginBottom: 0 }}>
            <Link href="/trex-deck-cost-monthly-payment" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>
              Full Trex cost + monthly payment breakdown →
            </Link>
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

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <NamedAuthor context="Loudoun, Fairfax and Prince William counties" lastUpdated="2026-05-26" />
      </div>
      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions
        title="The Trex Distinction"
        description="As a TrexPro Platinum installer, we bring the full Trex product ecosystem — decking, railings, lighting and drainage — to every Northern Virginia project."
        items={inclusions}
      />

      <ProcessSteps />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/trex-decks"
        title="Trex Decking & Warranty FAQs"
        faqs={trexFAQs}
      />

      <ServiceAreasGrid />

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Trex Pricing &amp; Budget Planning</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/trex-deck-cost-monthly-payment" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Trex Deck Cost vs Monthly Payment (Enhance / Transcend / Signature) →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Full Composite Deck Cost in Northern Virginia →</Link></li>
          <li style={{ marginBottom: '0.5rem' }}><Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Payment Estimator →</Link></li>
        </ul>
      </section>

      <RelatedGuides currentPath="/trex-decks" />
      <ContactHome />
    </main>
  );
}
