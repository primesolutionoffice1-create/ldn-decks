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
import LocalBusinessSchema from '@/components/LocalBusinessSchema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-builder-ashburn-va',
  title: 'Deck Builder in Ashburn, VA | Trex Certified | Loudoun Decks',
  description: 'Deck builder in Ashburn, VA. TrexPro installer for Brambleton, Broadlands, Ashburn Village & One Loudoun. Builder-grade deck upgrades, HOA-ready designs. Free estimate  -  call (571) 655-7207.',
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Every Ashburn HOA, Already Mapped",
    desc: "Brambleton, Broadlands, Ashburn Village and Moorefield Station each run their own architectural review committee. We keep current submission packages for all of them, so your CAD drawings reach the right desk on day one."
  },
  {
    title: "Builder-Grade Deck Upgrades",
    desc: "Most Ashburn homes were handed a builder-grade pressure-treated deck in the 2000s. We replace and resurface them with TrexPro-tier composite  -  Transcend, Enhance and Select."
  },
  {
    title: "Engineered for Tight Loudoun Lots",
    desc: "Quarter- and third-acre Ashburn lots put your build close to the neighbors. We stage construction to limit disruption and design around shared sight lines and common-area buffers."
  }
];

const ashburnFAQs = [
  {
    q: "Do you build custom decks in Ashburn, VA?",
    a: "Yes. Loudoun Decks builds across every Ashburn community  -  Brambleton, Broadlands, Ashburn Village, Ashburn Farm, Moorefield Station and One Loudoun. Our Centreville HQ is roughly 20 minutes from most Ashburn neighborhoods."
  },
  {
    q: "What does a composite deck cost in Ashburn?",
    a: "Most Ashburn composite decks run $22,000 to $55,000+. Trex Transcend in Spiced Rum and Island Mist are the most-requested finishes here; multi-level designs, pergola covers and outdoor kitchens push toward the top of that range."
  },
  {
    q: "Which Ashburn HOAs have you worked with?",
    a: "Brambleton Community Association, Broadlands HOA, Ashburn Village, Ashburn Farm and Moorefield Station, plus Belmont Country Club. Each runs its own ARC with its own color and material rules  -  we prepare and submit the full package for you."
  },
  {
    q: "How long does an Ashburn deck take start to finish?",
    a: "Loudoun County permits run 2-4 weeks through the LOLA portal; the Brambleton and Broadlands ARCs typically return in 1-2 weeks. A standard 400-600 sq ft build then takes 1-2 weeks on site  -  multi-level or screened-porch projects, 3-4 weeks."
  },
  {
    q: "Are there design considerations specific to Ashburn homes?",
    a: "Many Ashburn homes face west, so afternoon-sun control matters  -  we plan pergola shading and fan-ready wiring up front. Lots that back to common-area buffers or wooded edges are well suited to multi-level designs."
  },
  {
    q: "Can you upgrade a builder-grade Ashburn deck instead of rebuilding?",
    a: "Often, yes. A large share of Ashburn homes still have their original pressure-treated builder deck. If the framing inspects sound, resurfacing the surface boards and railings with composite saves 40-60% versus a full tear-down rebuild."
  }
];

const expansionSections = [
  {
    title: "Ashburn's HOA Map  -  And How We Clear It",
    paragraphs: [
      "Almost every Ashburn home sits inside an HOA, and each major community runs its own architectural review committee with distinct rules. Brambleton's committee favors composite over wood for a consistent streetscape; Broadlands and Ashburn Village publish their own approved color lists; Moorefield Station has tighter setback expectations along its garage-loaded streets. We keep current submission packages for all of them and prepare the CAD drawings and color samples each ARC asks for.",
      "Recent Ashburn work includes a 480 sq ft Trex Transcend deck in Brambleton designed around a west-facing yard with an attached pergola for afternoon shade, a screened porch in One Loudoun, and a cable-railing deck replacement in Moorefield Station  -  each permitted through Loudoun County's LOLA portal."
    ]
  },
  {
    title: "Building in the Loudoun Tech Corridor",
    paragraphs: [
      "Ashburn grew up around the data-center corridor, and its housing stock reflects that  -  largely transitional and craftsman homes built from the early 2000s onward on compact, tightly platted lots. Outdoor space is at a premium, which is exactly why Ashburn homeowners invest in decks that work harder than the builder original.",
      "Loudoun Decks is a selective, craftsmanship-first builder rather than a volume operation. We take on a limited number of full Ashburn projects each year so every build  -  from the One Loudoun and Loudoun Station neighborhoods to the established streets near Ashburn Village and the Ashburn Ice House  -  gets senior attention from design through final inspection.",
      "If you want a deck builder near you in Ashburn who knows which ARC reviews which street and how Loudoun County reads a framing plan, that local fluency is what we bring to every estimate."
    ]
  },
  {
    title: "Composite Decking for Ashburn's West-Facing Yards",
    paragraphs: [
      "Ashburn homeowners overwhelmingly choose composite, and not only for the low maintenance. Many of these yards take direct western sun, and a quality composite board with good heat performance  -  paired with smart shade design  -  makes the difference between a deck you use and one you avoid in July. As a TrexPro installer and TimberTech Certified contractor, we install the top-tier lines built for that exposure.",
      "Multi-level decks are especially popular on Ashburn lots that back to common areas or wooded buffers, where a stepped design captures more usable square footage than a single wide platform. Built-in seating, pergola covers and low-voltage lighting are standard requests, and Ashburn projects typically start around $22,000 and scale with size and features.",
      "Every composite deck we build carries the manufacturer's material warranty backed by our installation certification  -  a meaningful pairing on a deck you expect to own for decades."
    ],
    listItems: [
      { label: "TrexPro installer", text: "TrexPro Platinum tier  -  full Transcend, Enhance and Select catalog for Ashburn builds." },
      { label: "TimberTech Certified", text: "Certified installer for the complete TimberTech Pro and AZEK product lines." },
      { label: "ARC-Ready Drawings", text: "Full CAD plans and color samples prepared for every Ashburn HOA submission." },
      { label: "Loudoun County Permits", text: "We file through the LOLA portal and coordinate footing, framing and final inspections." }
    ]
  },
  {
    title: "Outdoor Kitchens, Pergolas and Screened Porches in Ashburn",
    paragraphs: [
      "For many Ashburn homeowners the deck is the anchor of a larger outdoor build. A screened porch turns a Loudoun County backyard into three-season living space, free of the insects and pollen; we frame screen rooms that integrate structurally with a new or existing deck rather than bolting on as an afterthought.",
      "Pergolas do double duty in Ashburn  -  architectural definition plus genuine sun control for those west-facing yards. We build traditional open-rafter cedar pergolas and motorized louvered systems that adjust shade on demand.",
      "Full outdoor-living packages  -  deck, screened porch, pergola and outdoor kitchen  -  are among our most-requested Ashburn and Brambleton projects, typically landing between $45,000 and $90,000+ for a complete backyard transformation."
    ]
  }
];

export default function DeckBuilderAshburnPage() {
  return (
    <main>
      <LocalBusinessSchema city="Ashburn" url="https://ldndecks.com/deck-builder-ashburn-va" />
      <ServicesHeader
        subtext="Ashburn, VA's #1 Rated Builder"
        title="Custom Deck Builder in Ashburn, VA"
        description="Loudoun Decks builds premium composite and wood decks across Brambleton, Broadlands, Ashburn Village and One Loudoun. TrexPro Platinum. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Ashburn's Trusted Choice"
        title="Deck Builder Ashburn VA  -  Premium Craftsmanship"
        description="We upgrade builder-grade Ashburn decks into outdoor spaces homeowners are proud to show off. HOA-ready CAD plans and TrexPro-tier materials from $22k+."
        listItems={[
          "TrexPro & TimberTech installer experience",
          "Brambleton, Broadlands & Ashburn Village ARC submissions handled",
          "Builder-grade deck replacement & composite resurfacing",
          "Multi-level designs for common-area-backing lots",
          "5-Star Google Rated  -  call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Premium custom Trex deck built by LDN Decks in Brambleton, Ashburn, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Ashburn</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>From Brambleton to One Loudoun  -  Outdoor Living Done to the Corridor's Standard</h3>
      </div>
      <ServiceInclusions
        title="Why Ashburn Chooses Loudoun Decks"
        description="We are not a franchise. We are a local Loudoun County team with deep roots in Ashburn and the credentials to back every build."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Ashburn VA  -  FAQs"
        faqs={ashburnFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-ashburn-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/deck-payment-estimator', 'Estimate Deck Costs by Monthly Payment'],
            ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
        </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Ashburn" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Ashburn" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-ashburn-va" />
      <ContactHome />
    </main>
  );
}
