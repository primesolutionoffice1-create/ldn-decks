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
  path: '/deck-builder-reston-va',
  title: 'Expert Deck Builders in Reston VA | Custom Trex Decks',
  description: "Deck builder in Reston, VA. Composite decks designed for wooded lots and Reston Association DRB review  -  Lake Anne, Lake Audubon, South Lakes, North Point. Fairfax County permits handled. Free estimate.",
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Reston Association DRB, Handled",
    desc: "Nearly all of Reston answers to one Design Review Board. We prepare the material samples, color specs and drawings the DRB expects, and we time the submission to its meeting calendar so your project is not stuck waiting on the next agenda."
  },
  {
    title: "Decks Built Among the Trees",
    desc: "Reston's mature canopy is its signature and its challenge. We protect root zones during construction, plan staging for limited-access wooded lots, and detail decks for constant leaf litter and shade."
  },
  {
    title: "Fairfax County Engineering",
    desc: "We file Reston permits through Fairfax County Land Development Services and engineer elevated, multi-level decks for the wooded, sloped lots that define so many Reston yards."
  }
];

const restonFAQs = [
  {
    q: "Do you build custom decks in Reston, VA?",
    a: "Yes  -  across all of Reston, including Lake Anne, Lake Audubon, Lake Newport, South Lakes, North Point and the clusters around Reston Town Center."
  },
  {
    q: "How does the Reston Association Design Review Board affect my deck?",
    a: "Reston is governed almost entirely by the Reston Association, and its Design Review Board (DRB) reviews exterior changes  -  decks included. The DRB has firm expectations on materials and colors and meets on a set schedule. We prepare the full submission and time it to the DRB calendar so review does not stall the build."
  },
  {
    q: "What does a composite deck cost in Reston?",
    a: "Reston composite decks generally run $22,000 to $55,000+. Wooded, sloped lots that need elevated or multi-level framing  -  plus tree-protection during construction  -  sit toward the higher end of that range."
  },
  {
    q: "Why is composite the usual choice in Reston?",
    a: "Reston's tree canopy drops leaves, sap and shade year-round, which is hard on wood. Composite resists the rot, mildew and constant cleaning a shaded Reston lot demands, and darker earth-tone boards blend with the wooded setting Reston's covenants protect."
  },
  {
    q: "Can you build a deck around Reston's trees and lake views?",
    a: "Yes. We design decks that work with the existing canopy rather than clearing it, and on lots facing Lake Anne, Lake Audubon or Lake Newport we use glass or cable railing to keep the water view open."
  },
  {
    q: "How long does a Reston deck take to build?",
    a: "Fairfax County permits run about 2-4 weeks; the Reston Association DRB review runs on its own meeting schedule, so we submit early. A standard build is 1-2 weeks on site  -  elevated, multi-level decks take 3-4 weeks."
  }
];

const expansionSections = [
  {
    title: "One Association, One Design Review Board",
    paragraphs: [
      "Reston works differently from most Northern Virginia communities. Instead of dozens of small HOAs, nearly the entire community falls under the Reston Association, and its Design Review Board reviews every exterior change  -  decks included. The DRB cares about materials, colors and how a structure sits within Reston's wooded character, and it reviews on a fixed meeting calendar rather than on demand.",
      "That means timing is everything. We prepare the DRB package  -  drawings, material samples, color specifications  -  to match what the board expects, and we submit it early enough to land on the right agenda. A recent Reston project, a multi-level TimberTech deck overlooking Lake Audubon, moved through the DRB and Fairfax County permit on parallel tracks so neither review held up the other."
    ]
  },
  {
    title: "America's Planned Community  -  Built Among the Trees",
    paragraphs: [
      "Reston was one of the first master-planned communities in the country, and it was designed around its forest rather than on top of it. The original 1960s and 70s homes are contemporary in style, set on wooded lots where the tree canopy was deliberately preserved. A deck in Reston has to belong in that setting.",
      "Reston rewards patience, and we work to that pace. Instead of running high job volume, we cap how many full Reston builds we accept in a season  -  enough focus that a project off the W&OD Trail or near Lake Anne Plaza stays owner-led from the opening DRB sketch through the closing county inspection.",
      "Two skills decide a Reston deck: reading the Design Review Board correctly, and building cleanly on a sloped, tree-covered lot without tearing up the site. We bring both to the first site visit."
    ]
  },
  {
    title: "Why Composite Wins on a Shaded Reston Lot",
    paragraphs: [
      "Reston's tree canopy is beautiful and unforgiving. Constant shade, falling leaves and sap keep a wood deck damp and feed mildew, which forces a scrub-and-refinish cycle nobody enjoys. Composite sidesteps all of it  -  our TrexPro and TimberTech credentials cover the board lines engineered for precisely this shaded, debris-heavy setting.",
      "Material color matters here too: darker, earth-toned composite blends into the wooded backdrop the Reston covenants are written to protect. On sloped lots  -  common across Reston  -  an elevated or multi-level deck turns the grade into usable rooms, and glass or cable railing keeps lake and woodland views open. Reston projects typically start around $22,000 and scale with elevation, levels and railing choice.",
      "A Reston composite deck trades that seasonal upkeep for a decades-long manufacturer material warranty  -  one that stays enforceable because the certified installation behind it meets the manufacturer's spec."
    ],
    listItems: [
      { label: "TrexPro Installer", text: "TrexPro Platinum tier  -  full Transcend, Enhance and Select catalog for Reston builds." },
      { label: "TimberTech Certified", text: "Certified installer for the complete TimberTech Pro and AZEK product lines." },
      { label: "DRB-Ready Submissions", text: "Material samples, color specs and drawings prepared for Reston Association review." },
      { label: "Tree-Protective Builds", text: "Root-zone protection and limited-access staging for wooded Reston lots." }
    ]
  },
  {
    title: "Screened Porches and Tree-Canopy Outdoor Living",
    paragraphs: [
      "Under a Reston canopy, a screened porch is almost a default upgrade. It shuts out the leaf-fall, pollen and insects the woods deliver year-round while keeping the forest view wide open, and the screen room is built into the deck's frame from the start.",
      "Raising the platform into the canopy is the other Reston signature move. On a sloped, wooded lot an elevated deck reads like a treehouse-grade outdoor room and leaves the forest floor undisturbed; a dry-joist system below converts that shaded ground into covered patio.",
      "Pairing an elevated deck, a screened porch and a covered lower patio gives a Reston backyard three distinct rooms  -  a result that honors the DRB's intent to protect the wooded character and reads well to buyers down the line."
    ]
  }
];

export default function DeckBuilderRestonPage() {
  return (
    <main>
      <LocalBusinessSchema city="Reston" url="https://ldndecks.com/deck-builder-reston-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-reston-va" name="Expert Deck Builders in Reston VA | Custom Trex Decks" description="Deck builder in Reston, VA. Composite decks designed for wooded lots and Reston Association DRB review  -  Lake Anne, Lake Audubon, South Lakes, North Point. Fairfax County permits handled. Free estimate." speakable />
      <ServicesHeader
        subtext="Reston, VA's Trusted Deck Company"
        title="Custom Deck Builder in Reston, VA"
        description="Loudoun Decks builds composite decks designed for wooded lots and Reston Association DRB review. Lake Anne, South Lakes, North Point. Fairfax County permits handled. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Built for Reston's Wooded Lots"
        title="Deck Builder Reston VA  -  Premium Craftsmanship"
        description="We design decks that belong under Reston's tree canopy and pass Design Review Board scrutiny. Elevated, multi-level builds and view-preserving railings from $22k+."
        listItems={[
          "TrexPro & TimberTech Certified",
          "Reston Association DRB submissions prepared and timed",
          "Elevated & multi-level designs for wooded, sloped lots",
          "Glass & cable railing for Lake Anne and Lake Audubon views",
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
            alt="Elevated composite deck built by LDN Decks among the trees on a wooded Reston, Virginia lot"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Reston</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Decks That Belong Under Reston's Canopy  -  and Clear the Design Review Board</h3>
      </div>
      <ServiceInclusions
        title="Why Reston Chooses Loudoun Decks"
        description="We are a Northern Virginia team that knows the Reston Association DRB, Fairfax County permitting and how to build on a wooded, sloping lot."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Reston VA  -  FAQs"
        faqs={restonFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-reston-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
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
            <li key="/deck-builder-northern-virginia" style={{ marginBottom: '0.5rem' }}><Link href="/deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Northern Virginia Deck Builder Guide →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
          </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Reston" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Reston" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-reston-va" />
      <NamedAuthor context="Reston and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </main>
  );
}
