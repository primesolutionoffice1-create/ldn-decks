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
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: '/deck-builder-south-riding-va',
  title: 'Deck Builder in South Riding, VA | Custom Trex Decks',
  description: "Deck builder in South Riding, VA. Composite decks built for South Riding Proprietary (SRP) Design Review Committee approval. Builder-grade upgrades, under-deck drainage, aluminum railings. Loudoun County permits handled. Free estimate.",
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "SRP Design Review, Handled",
    desc: "South Riding Proprietary's Design Review Committee reviews every exterior modification. We prepare drawings, material samples and color specifications to match DRC expectations and submit on the committee's fixed meeting schedule so your project stays on track."
  },
  {
    title: "Builder-Grade Upgrade Specialists",
    desc: "Most South Riding homes were built between 1998 and 2015 with basic pressure-treated decks. We replace aging PT wood with composite  -  Trex Enhance and Transcend are the most common upgrades  -  and pair new decking with aluminum railings and hidden fasteners."
  },
  {
    title: "Loudoun County Permits",
    desc: "We file South Riding permits through Loudoun County and manage the 2-4 week plan review. Permit and DRC submissions run on parallel tracks so neither holds up the other."
  }
];

const southRidingFAQs = [
  {
    q: "Do you build custom decks in South Riding, VA?",
    a: "Yes  -  across all of South Riding, the entire master-planned community governed by South Riding Proprietary (SRP). We handle DRC submissions, Loudoun County permits and every phase of the build."
  },
  {
    q: "How does the South Riding Proprietary Design Review Committee affect my deck?",
    a: "SRP's Design Review Committee (DRC) reviews all exterior modifications, decks included. The DRC has specific requirements for materials, colors and design. We prepare the full submission package  -  drawings, material samples, color specs  -  and time it to the committee's meeting calendar so approval does not stall the project."
  },
  {
    q: "What does a composite deck cost in South Riding?",
    a: "South Riding composite decks generally run $20,000 to $45,000. Most projects involve replacing a 10-25 year old builder-grade PT deck with Trex or TimberTech composite. Typical builds are 300-500 sqft on standard suburban lots."
  },
  {
    q: "How long does a South Riding deck project take?",
    a: "Loudoun County permits run 2-4 weeks. The SRP Design Review Committee meets on a fixed schedule, so we submit early to align with the next agenda. A standard 300-500 sqft build takes 1-2 weeks on site once permits clear."
  },
  {
    q: "Do I need both a Loudoun County permit and SRP approval?",
    a: "Yes. The Loudoun County building permit covers structural code compliance. SRP's DRC approval covers aesthetics  -  materials, colors, how the deck fits the community's design guidelines. We prepare and manage both submissions in parallel."
  },
  {
    q: "Can you add under-deck drainage to my South Riding deck?",
    a: "Yes. Under-deck drainage systems are one of the most popular upgrades in South Riding because many homes have walkout basements or patios below the deck. A dry-joist system channels water away and converts the space beneath the deck into a covered, usable patio."
  }
];

const expansionSections = [
  {
    title: "One Community, One Design Review Committee",
    paragraphs: [
      "South Riding is a single master-planned community of roughly 7,000 homes, all governed by South Riding Proprietary (SRP). Unlike areas with dozens of small HOAs, every exterior modification in South Riding goes through one Design Review Committee (DRC). The DRC cares about materials, colors and how a structure fits the community's visual standards, and it meets on a fixed schedule rather than reviewing on demand.",
      "That fixed schedule means timing the submission correctly is as important as getting the drawings right. We prepare the full DRC package  -  site plan, material samples, color specifications  -  to match what the committee expects, and we submit early enough to land on the right agenda. A recent South Riding project, a 350 sqft Trex Enhance deck replacing a 15-year-old PT original, cleared the DRC on the first submission because the package was complete and the Toasted Sand color was already within SRP's approved palette.",
      "Working with one governing body rather than many also means we know the DRC's patterns. Certain composite colors and railing styles have a strong approval track record in South Riding, and we steer material selection toward those proven choices from the first design meeting."
    ]
  },
  {
    title: "South Riding's Builder-Grade Upgrade Cycle",
    paragraphs: [
      "South Riding was built in phases from 1998 through 2015, and nearly every home came with a basic pressure-treated wood deck. Those early decks are now 10 to 25 years old  -  graying, splintering, and past the point where annual staining makes economic sense. The community is in the middle of a generational upgrade cycle, and composite decking is the standard replacement.",
      "The typical South Riding upgrade replaces the old PT boards with Trex Enhance or Transcend composite, swaps out the original wood railings for aluminum or composite railings, and adds hidden fasteners for a clean surface. If the existing frame is structurally sound  -  and on decks under 15 years old it often is  -  resurfacing saves 40-60% compared to a full tear-down and rebuild.",
      "What makes South Riding projects predictable is lot consistency. Most homes sit on similar suburban lots with similar deck footprints (300-500 sqft), similar floor heights and similar access paths. That consistency lets us estimate accurately and build efficiently, keeping most projects in the $20,000-$45,000 range."
    ]
  },
  {
    title: "Composite vs Wood for South Riding's Climate",
    paragraphs: [
      "Northern Virginia's climate  -  hot, humid summers and freeze-thaw winters  -  is hard on wood decks. South Riding's PT originals show it: cupping, cracking, mildew growth and the gray patina that comes from years of UV and moisture exposure. Composite boards are engineered to resist all of it, and the manufacturer warranties that back them (25-year limited on Trex Enhance, lifetime limited on Transcend) stay enforceable when the deck is installed by a certified crew.",
      "Color selection in South Riding is partly aesthetic and partly practical. Earth tones  -  Toasted Sand, Saddle, Spiced Rum  -  have the strongest DRC approval record and blend with the community's neutral siding palettes. Darker tones absorb more heat but hide dirt and leaf stain; lighter tones stay cooler underfoot but show debris sooner. We walk through the tradeoffs at the design meeting and recommend based on the home's orientation and the DRC's track record."
    ],
    listItems: [
      { label: "TrexPro Installer", text: "TrexPro Platinum tier  -  full Transcend, Enhance and Select catalog for South Riding builds." },
      { label: "TimberTech Certified", text: "Certified installer for the complete TimberTech Pro and AZEK product lines." },
      { label: "DRC-Ready Submissions", text: "Material samples, color specs and drawings prepared for SRP Design Review Committee." },
      { label: "Loudoun County Permits", text: "Full permit filing and 2-4 week plan review managed on your behalf." }
    ]
  },
  {
    title: "Deck + Patio Combinations for South Riding Lots",
    paragraphs: [
      "Many South Riding homes have a walkout basement or a concrete patio directly below the deck. An under-deck drainage system turns that lower area into a dry, covered outdoor room  -  effectively doubling the usable outdoor space without adding square footage to the footprint. The drainage system is installed between the deck joists and channels rainwater into gutters at the perimeter.",
      "The combination of a composite deck above and a covered patio below is one of the most popular upgrades in South Riding. The upper deck handles grilling and dining; the lower patio works as a shaded lounge or play area. Cable or glass railing on the upper level keeps sightlines open to the yard, and post cap lights on the railing double as ambient lighting for both levels.",
      "On South Riding lots that back to common area or tree lines, extending the deck with a bump-out or angled corner makes the most of the rear setback. We confirm setback requirements with Loudoun County and DRC guidelines before finalizing the design so there are no surprises at permit review."
    ]
  }
];

export default function SouthRidingDeckBuilderPage() {
  return (
    <main>
      <LocalBusinessSchema city="South Riding" url="https://ldndecks.com/deck-builder-south-riding-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-south-riding-va" name="Deck Builder in South Riding, VA | Custom Trex Decks" description="Deck builder in South Riding, VA. Composite decks built for South Riding Proprietary (SRP) Design Review Committee approval. Builder-grade upgrades, under-deck drainage, aluminum railings. Loudoun County permits handled. Free estimate." speakable />
      <ServicesHeader
        subtext="South Riding, VA's Trusted Deck Company"
        title="Custom Deck Builder in South Riding, VA"
        description="Loudoun Decks builds composite decks designed for South Riding Proprietary (SRP) Design Review Committee approval. Builder-grade upgrades, under-deck drainage, aluminum railings. Loudoun County permits handled. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Built for South Riding's DRC Standards"
        title="Deck Builder South Riding VA  -  Premium Craftsmanship"
        description="We replace aging builder-grade PT decks with composite and handle the SRP Design Review Committee process from drawings to approval. Most projects $20k-$45k."
        listItems={[
          "TrexPro & TimberTech Certified",
          "SRP Design Review Committee submissions prepared and timed",
          "Builder-grade PT replacement  -  homes built 1998-2015",
          "Under-deck drainage for walkout basements and lower patios",
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
            alt="Composite deck built by LDN Decks in South Riding, Virginia replacing builder-grade pressure-treated wood"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder South Riding</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Builder-Grade Upgrades That Clear the SRP Design Review Committee</h3>
      </div>
      <ServiceInclusions
        title="Why South Riding Chooses Loudoun Decks"
        description="We are a Northern Virginia team that knows the SRP Design Review Committee, Loudoun County permitting and how to upgrade builder-grade decks efficiently."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder South Riding VA  -  FAQs"
        faqs={southRidingFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-south-riding-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck'],
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="South Riding" /></div></section>
      <SimpleCTA title="Upgrade Your South Riding Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-south-riding-va" />
      <NamedAuthor context="South Riding and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </main>
  );
}
