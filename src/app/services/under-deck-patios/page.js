import React from 'react';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServicesFAQ from '@/components/ServicesFAQ';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/services/under-deck-patios",
  title: "Under Deck Patio Systems Loudoun VA | Waterproofing & Ceilings",
  description: "Maximize your outdoor living space with a custom waterproof under deck ceiling system in Northern Virginia. Turn your under-deck space into a dry, stylish patio."
});

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Under Deck Patio System Installation",
  "provider": { "@id": "https://ldndecks.com/#organization" },
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
    { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
    { "@type": "AdministrativeArea", "name": "Prince William County, VA" }
  ],
  "description": "Custom under deck patio waterproofing and ceiling systems in Northern Virginia. Drainage systems, aluminum ceiling panels, recessed lighting, and electrical integration."
};

const expansionSections = [
  {
    title: "Under Deck System Options",
    paragraphs: [ "Built for Performance & Comfort." ],
    listItems: [
      { label: "1. Drainage Systems", text: "Channels water away from the deck above, keeps the patio below completely dry, clean finished ceiling look." },
      { label: "2. Ceiling Systems", text: "Vinyl or aluminum ceiling panels with a modern, polished appearance. Easy to maintain." },
      { label: "3. Lighting Integration", text: "Recessed LED lights provide safe, functional ambient lighting for evenings." },
      { label: "4. Ceiling Fans & Electrical", text: "Improve airflow and comfort. Great for summer use." }
    ]
  },
  {
    title: "Benefits of Under Deck Patios",
    paragraphs: [ "Why Homeowners Love Under Deck Patios." ],
    listItems: [
      { label: "Protection", text: "Protects from rain and weather." },
      { label: "Space", text: "Creates a second outdoor living area." },
      { label: "Value", text: "Increases home value." },
      { label: "Entertaining", text: "Ideal for entertaining and relaxing." },
      { label: "Aesthetics", text: "Clean, finished look vs. exposed framing." }
    ]
  },
  {
    title: "Design Ideas",
    paragraphs: [ "Customize Your Space." ],
    listItems: [
      { label: "Lounge", text: "Lounge seating areas." },
      { label: "Dining", text: "Outdoor dining setups." },
      { label: "Entertainment", text: "TV and entertainment areas." },
      { label: "Heating", text: "Fire pit or heater integration." },
      { label: "Organization", text: "Storage solutions." }
    ]
  }
];

const underDeckProcess = [
  { title: "Step 1: Evaluation", desc: "Free consultation and site evaluation." },
  { title: "Step 2: Design", desc: "Drainage and layout design." },
  { title: "Step 3: Waterproofing", desc: "Installation of waterproof system." },
  { title: "Step 4: Finishing", desc: "Ceiling finish and lighting setup." },
  { title: "Step 5: Review", desc: "Final inspection and clean finish." }
];

const whyLdnDecks = [
  { title: "Local Team", desc: "Loudoun County-based team." },
  { title: "Trusted", desc: "Licensed and insured." },
  { title: "Experience", desc: "Experience with premium under-deck systems." },
  { title: "Craftsmanship", desc: "Clean, detail-focused installation." },
  { title: "Longevity", desc: "Built for long-term durability." }
];

const faqs = [
  {
    q: "How much does an under deck patio system cost in Northern Virginia?",
    a: "Under deck patio systems in Loudoun County and Fairfax County typically range from $15 to $30 per square foot installed, putting a 300 sq ft project between $4,500 and $9,000. The final cost depends on the drainage system chosen, ceiling finish, lighting, and whether electrical work is needed."
  },
  {
    q: "What is the RainEscape drainage system and how does it work?",
    a: "RainEscape by Trex is a trough-and-downspout drainage system installed between the deck joists above. It captures rainwater as it falls through the deck boards and channels it to downspouts at the perimeter, keeping the patio below completely dry. It's one of the most popular systems we install across Ashburn, Leesburg, and Chantilly."
  },
  {
    q: "Will the under deck patio stay dry during heavy rain?",
    a: "Yes — a properly installed drainage system like RainEscape or a similar aluminum trough system effectively channels water away even during the heavy summer thunderstorms common in Northern Virginia. We design each system with adequate slope and downspout capacity for the rainfall patterns in Loudoun and Prince William County."
  },
  {
    q: "How much usable space does an under deck patio create?",
    a: "An under deck patio utilizes the full footprint of the deck above, which for most Northern Virginia homes ranges from 200 to 600 square feet. This effectively doubles your outdoor living area without any additional foundation work or zoning changes, making it one of the highest-value additions available to homeowners in Herndon, Sterling, and Reston."
  },
  {
    q: "Do I need a permit for an under deck patio system in Northern Virginia?",
    a: "In most cases, a drainage and ceiling system installed beneath an existing deck does not require a separate permit in Loudoun or Fairfax County, since no new structural elements are added. However, if electrical work such as recessed lighting or ceiling fans is included, an electrical permit is typically required. We coordinate all permitting for our clients."
  },
  {
    q: "What ceiling finish options are available for under deck patios?",
    a: "We offer vinyl tongue-and-groove ceiling panels, aluminum ceiling systems, and beadboard-style finishes — all moisture-resistant and designed for outdoor use in NoVA's climate. Recessed LED lighting, ceiling fans, and painted finishes can be added to create a polished, finished patio feel beneath decks in communities across Loudoun and Fairfax County."
  }
];

export default function UnderDeckPatiosPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <ServicesHeader
        subtext="Under Deck Patio Loudoun VA"
        title="Turn the Space Under Your Deck Into a Beautiful, Dry Patio"
        description="Maximize your outdoor living space with a custom under-deck patio system - protected from rain, clean, and perfect for relaxing or entertaining year-round."
      />
      <ServiceMain
        subtitle="Double Your Outdoor Living Space"
        title="What is an Under Deck Patio?"
        description="Custom Under Deck Patio by LDN Decks – Loudoun County. An under-deck patio transforms the unused area beneath your deck into a functional, dry, and stylish space."
        listItems={[
          "Stay dry during rain",
          "Create a shaded, comfortable area",
          "Add value and usable square footage",
          "Perfect for seating, dining, or storage"
        ]}
        image1="/showcase/img19.jpg"
        image2="/showcase/img20.jpg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <ServiceInclusions
        title="Our Layout Process"
        description="How We Build Your Under Deck Space."
        items={underDeckProcess}
      />
      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>From unused space to a fully functional outdoor area.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img19.jpg" alt="Before under deck upgrade" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img20.jpg" alt="After waterproof patio system" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <ServiceInclusions
        title="Why LDN Decks"
        description="Your dedicated local contractor."
        items={whyLdnDecks}
      />
      <ServiceAreasGrid />
      <RelatedGuides currentPath="/services/under-deck-patios" />
      <ServicesFAQ title="Under Deck Patio FAQs" faqs={faqs} />
      <SimpleCTA title="Create Your Under-Deck Living Space" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
