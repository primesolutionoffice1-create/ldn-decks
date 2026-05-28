import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServicesFAQ from '@/components/ServicesFAQ';
import ProcessSteps from '@/components/ProcessSteps';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: '/services/deck-stair-lighting',
  title: 'Deck Stair Lighting Loudoun VA | LDN Decks',
  description: 'Custom-built LED lighting systems installed directly into your deck stairs - clean, modern, and built to last in Loudoun, Fairfax & Prince William County.',
});

const whyLdnDecks = [
  {
    title: "Local Loudoun County experts",
    desc: "We understand local building codes and design trends."
  },
  {
    title: "Clean and professional installations",
    desc: "Our installers ensure all wiring is hidden and the finish is flawless."
  },
  {
    title: "Built for long-term durability",
    desc: "Lighting integrated directly into the build, designed to withstand Northern Virginia weather."
  }
];

const expansionSections = [
  {
    title: "Recessed LED Stair Lights",
    paragraphs: [
      "Installed directly into each step, recessed LED stair lights provide a clean, modern flush finish. This is our most popular option for a seamless look that enhances both safety and aesthetics without protruding fixtures."
    ]
  },
  {
    title: "Side Rail Lighting",
    paragraphs: [
      "Subtle glow along railings that adds depth and ambiance to your deck's architecture, perfectly complementing the steps while guiding the way."
    ]
  },
  {
    title: "Post Cap & Smart Lighting Systems",
    paragraphs: [
      "We also offer elegant lighting on deck posts for soft top-down illumination, as well as smart lighting systems featuring motion sensors, timers, and remote or app-controlled capabilities to manage your deck's lighting effortlessly."
    ]
  },
  {
    title: "Types of deck lighting systems",
    paragraphs: [
      "Modern deck lighting goes far beyond a single porch light. Combining multiple fixture types creates layered illumination that is both functional and visually striking.",
    ],
    listItems: [
      { label: "Post cap lights", text: "Mounted on top of railing posts, these provide a soft downward glow that defines the deck perimeter without glare." },
      { label: "Stair riser lights", text: "Recessed into the vertical face of each step, riser lights illuminate the tread below for safe nighttime use." },
      { label: "Under-rail LED strips", text: "Continuous LED strips mounted beneath the top rail cast an even wash of light along the deck edge and seating areas." },
      { label: "Fascia lights", text: "Small fixtures installed on the deck fascia board light up walkways and landscaping below the deck." },
      { label: "In-deck recessed lights", text: "Flush-mounted into the decking surface, these are ideal for marking pathways, hot tub surrounds, or seating zones." },
      { label: "String and bistro lights", text: "Draped overhead between posts or pergola beams, string lights add warm ambiance for entertaining and are easy to install." },
    ]
  },
  {
    title: "LED vs low-voltage vs solar",
    paragraphs: [
      "Choosing the right power source affects brightness, reliability, installation complexity, and long-term cost. Here is how the three main options compare for Northern Virginia decks.",
    ],
    listItems: [
      { label: "Low-voltage LED (recommended)", text: "Runs on a 12V transformer, delivers consistent brightness, lasts 50,000+ hours, and uses minimal electricity. Wiring is safe to handle and easy to route through framing during construction." },
      { label: "Solar-powered", text: "No wiring required, but output depends on daily sun exposure. Best suited for accent lighting in sunny locations, not primary stair safety lighting in shaded yards." },
      { label: "Line-voltage (120V)", text: "Brightest option but requires a licensed electrician, conduit, and GFCI protection. Typically reserved for large commercial installations rather than residential decks." },
    ]
  },
  {
    title: "Pre-wiring during deck construction",
    paragraphs: [
      "The most cost-effective time to install deck lighting is during the original build. Pre-wiring adds only a fraction of the cost compared to a retrofit because the framing is exposed and accessible.",
      "During a [new deck build](/services/new-decks), our crew routes low-voltage wiring through the joists and stair stringers before decking boards go down. Conduit is placed for post-cap feeds, and a properly sized transformer is mounted in a concealed, accessible location. Planning lighting at the design stage also ensures that fixture placement aligns with stair treads, railing sections, and seating zones for the best visual result.",
    ]
  },
  {
    title: "Adding lighting to existing decks",
    paragraphs: [
      "If your deck was built without lighting, a retrofit is still very achievable. The approach depends on how much of the deck structure you are willing to open up.",
    ],
    listItems: [
      { label: "Surface-mount fixtures", text: "Post cap lights, rail-mounted fixtures, and fascia lights can be added without removing any decking. Wiring is routed along the underside of the frame or inside hollow railing channels." },
      { label: "Partial-access retrofit", text: "When the underside of the deck is accessible, low-voltage wire can be fished through joists and up through small holes drilled in stair risers for a fully recessed look." },
      { label: "Battery and solar alternatives", text: "For decks where running wire is impractical, battery-powered riser lights and solar post caps provide a no-wire option with easy seasonal replacement." },
      { label: "Typical cost range", text: "Retrofit lighting on an existing Northern Virginia deck typically runs $1,200 to $3,500 depending on fixture count, power source, and accessibility. A pre-wired installation during construction saves roughly 30 to 40 percent." },
    ]
  },
];

const lightingFaqs = [
  {
    q: "How much does deck stair lighting cost in Northern Virginia?",
    a: "A typical low-voltage LED stair lighting package for a residential deck in Loudoun, Fairfax, or Prince William County ranges from $1,500 to $3,500 installed, depending on the number of fixtures and whether wiring is pre-run during construction or retrofitted."
  },
  {
    q: "How long does a deck lighting installation take?",
    a: "Pre-wired installations during a new build add no extra time to the project. Retrofit installations on existing decks typically take one to two days depending on fixture count and wiring complexity."
  },
  {
    q: "Do LED deck lights work in Northern Virginia winters?",
    a: "Yes. Low-voltage LED fixtures are rated for outdoor use in temperatures well below zero. They perform reliably through Northern Virginia's freeze-thaw cycles and are not affected by snow or ice buildup."
  },
  {
    q: "Can I add lighting to my deck without running new wiring?",
    a: "Solar post cap lights and battery-powered riser lights can be installed without any wiring. However, for consistent brightness and stair safety, we recommend low-voltage LED wiring routed through the deck framing."
  },
  {
    q: "Should I add lighting when building a new deck or wait?",
    a: "Pre-wiring during construction is significantly cheaper and produces a cleaner result because cables are hidden inside the framing before boards go down. Retrofitting later is possible but costs 30 to 40 percent more."
  },
  {
    q: "Can deck lighting be bundled with other services?",
    a: "Absolutely. Most clients add lighting during a new deck build, deck resurfacing, or railing upgrade. Bundling lighting with another project reduces the overall cost because the crew is already on site and the structure is accessible."
  },
];

export default function DeckStairLightingPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/services/deck-stair-lighting" name="Deck Stair Lighting Loudoun VA | LDN Decks" description="Custom-built LED lighting systems installed directly into your deck stairs - clean, modern, and built to last in Loudoun, Fairfax &amp; Prince William County." speakable />
      <ServiceSchema
        name="Deck & Stair Lighting"
        description="Integrated LED deck lighting, stair riser lights, post cap lights, and under-rail strips for Northern Virginia decks."
        url="https://ldndecks.com/services/deck-stair-lighting"
        category="Deck Accessories"
        price="2000"
        relatedServices={['https://ldndecks.com/services/new-decks', 'https://ldndecks.com/services/trex-railings']}
      />
      <ServicesHeader
        subtext="Deck Stair Lighting Loudoun VA"
        title="Deck Stair Lighting That Looks Amazing & Keeps Your Family Safe"
        description="Custom-built LED lighting systems installed directly into your deck stairs - clean, modern, and built to last."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="May 2026" />
      </section>

      <ServiceMain
        subtitle="Why It Matters"
        title="Why Add Lights to Your Deck Stairs?"
        description="Installed by LDN Decks – Loudoun County. Enhance the safety and beauty of your outdoor living space with premium lighting solutions."
        listItems={[
          "Prevent slips and accidents at night",
          "Increase home value instantly",
          "Create a luxury outdoor atmosphere",
          "Perfect for entertaining and family use",
          "Energy-efficient LED solutions"
        ]}
        image1="/showcase/light-img.jpeg"
        image2="/showcase/img01.jpg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>See the Transformation</h2>
        <p style={{ marginBottom: '40px', fontSize: '18px', color: '#555' }}>Same deck. Completely different experience.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/light-img.jpeg" alt="Before deck stair lighting — unlit Northern Virginia composite deck stairs" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
            <Image src="/showcase/img01.jpg" alt="After integrated LED stair lighting installation on a Loudoun Decks Northern Virginia deck" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem 3rem' }}>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.75, color: '#444' }}>
          Stair lighting works best when it is planned with the stair structure, not added as an afterthought. Homeowners can use the <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair calculator</Link> to estimate step count, rise, run, and stair angle before choosing light spacing, then review our <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair construction diagram</Link> to understand tread depth, riser height, stringers, and landing details before choosing lighting locations. For inspection details, the <Link href="/education/deck-stair-code-rise-run-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Virginia deck stair code guide</Link> explains rise, run, handrails, guards, and landing requirements. Older stairs with missing lighting should also be checked against the <Link href="/education/deck-stair-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair safety checklist</Link> and the <Link href="/education/common-deck-stair-inspection-failures-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>common stair inspection failures guide</Link>.
        </p>
      </section>

      <ServiceInclusions
        title="Why Choose Us"
        description="At LDN Decks, we provide licensed and insured lighting installations integrated into your build."
        items={whyLdnDecks}
      />

      <ProcessSteps />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/deck-stair-lighting" title="Deck & Stair Lighting FAQs" faqs={lightingFaqs} />

      <ServiceAreasGrid />

      <RelatedGuides currentPath="/services/deck-stair-lighting" />
      <SimpleCTA title="Light Up Your Deck" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
}
