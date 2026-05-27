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
  path: '/deck-builder-lorton-va',
  title: 'Deck Builder in Lorton, VA | Trex Certified | Loudoun Decks',
  description: 'Deck builder in Lorton, VA. Custom Trex & composite decks for Laurel Hill, Crosspointe, Newington & Gunston. Fairfax County permits handled. Free estimate  -  (571) 655-7207.',
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Laurel Hill Upgrade Specialists",
    desc: "Laurel Hill homes were built starting in 2005, and their original builder-grade pressure-treated decks are now entering the upgrade window. We replace them with composite decking that matches the quality of the home  -  not the budget the builder had at closing."
  },
  {
    title: "Designed for Wooded Conservation Lots",
    desc: "Many Lorton properties back to wooded conservation easements and parkland. We design decks that frame those views with cable or glass railing rather than blocking them, and we work around mature trees and root zones during footing placement."
  },
  {
    title: "Fairfax County Permits, Start to Finish",
    desc: "Lorton falls under Fairfax County jurisdiction. We prepare structural drawings, file the permit application electronically and schedule all inspections  -  footing, framing and final  -  so the build stays on track without you visiting the county office."
  }
];

const lortonFAQs = [
  {
    q: "How much does a new deck cost in Lorton, VA?",
    a: "Lorton composite deck projects typically range from $22,000 to $50,000. A standard 300-350 sqft Trex Transcend deck with aluminum railings runs $26,000-$36,000 installed. Laurel Hill builder-grade replacements tend toward the middle of that range, while larger builds with cable railing, multiple levels or screened-porch additions reach higher."
  },
  {
    q: "Do Laurel Hill and Crosspointe HOAs allow composite decking?",
    a: "Yes. Both Laurel Hill Community Association and Crosspointe permit composite decking. Each has its own architectural review process with guidelines on board color, railing style and overall design. We prepare the full submission package and file it on your behalf  -  turnaround is typically 2-4 weeks."
  },
  {
    q: "Do I need a permit for a deck in Lorton?",
    a: "Yes. Lorton is in Fairfax County, and any new deck or structural replacement requires a building permit. Plan review runs 3-6 weeks. We handle the full process: structural drawings, electronic filing, and scheduling of footing, framing and final inspections."
  },
  {
    q: "How long does a Lorton deck project take to build?",
    a: "Construction typically takes 2 to 3 weeks once the permit is approved and materials are on site. The Fairfax County permit adds 3-6 weeks of plan review before construction starts. We submit HOA architectural review applications in parallel with the permit so both approvals arrive around the same time."
  },
  {
    q: "Can you build a deck that preserves wooded views in Lorton?",
    a: "Yes. Many Lorton lots  -  especially in Laurel Hill and near Mason Neck  -  back to wooded conservation areas. We use cable railing and glass panel systems to keep sight lines open rather than blocking them with solid picket railing. The view is often the best feature of these lots, and the deck should frame it."
  },
  {
    q: "Is it worth replacing a 15-year-old builder-grade deck?",
    a: "In most cases, yes. Builder-grade pressure-treated decks installed in Laurel Hill and similar communities were built to minimum standards  -  basic PT boards, simple railings, often undersized footings. By 12-15 years, the surface boards are splitting, the fasteners are rusting and the structure may not meet current code. A composite replacement provides a 25-year material warranty, zero maintenance and a finished look that matches the home."
  }
];

const expansionSections = [
  {
    title: "Laurel Hill's Builder-Grade Upgrade Cycle",
    paragraphs: [
      "Laurel Hill is the defining community in Lorton  -  a large-scale residential development built on the former Lorton Prison site starting around 2005. The homes are well-built, but the decks that came with them were not. Builders installed basic pressure-treated wood decks as standard features, using minimum-spec lumber, simple picket railings and the smallest footings that would pass inspection. These decks were designed to look finished on closing day, not to last two decades.",
      "That upgrade cycle is now well underway. Homes built in 2005-2010 have decks that are 15-20 years old, and the PT lumber is showing its age: splitting surface boards, rusted fastener heads, wobbly railings and in some cases soft spots in the framing where moisture has settled. The good news is that the homes themselves are solid and the lots are generous, which means there is room to build a better deck  -  often larger than the original  -  without pushing against setback limits.",
      "We have completed multiple deck replacements in Laurel Hill and understand the community's lot layouts, rear-yard grades and HOA requirements. Most projects involve removing the old deck entirely, inspecting or replacing the ledger connection, and building a new composite deck on fresh framing engineered to current Virginia code."
    ]
  },
  {
    title: "Decks for Wooded Lorton Lots",
    paragraphs: [
      "Lorton's geography sets it apart from the rest of inner Fairfax County. Many properties back to wooded conservation easements, Mason Neck State Park and Pohick Bay Regional Park. These lots offer privacy and natural views that most Northern Virginia subdivisions cannot match  -  and the deck should take advantage of that rather than ignore it.",
      "Cable railing is our most recommended option for Lorton's wooded lots. The thin horizontal cables virtually disappear from the seated eye level, letting the tree line serve as the backdrop instead of a wall of white pickets. For homeowners who want even less visual interruption, tempered glass panel systems eliminate the horizontal lines entirely. Both options meet Fairfax County code for guardrail height and opening size.",
      "We also account for the trees themselves. Mature hardwoods close to the deck footprint have root zones that extend well beyond the drip line. Rather than cutting roots to place footings  -  which risks destabilizing the tree  -  we adjust footing locations or use helical piers that thread between major roots. The goal is a deck that coexists with the landscape, not one that compromises it."
    ]
  },
  {
    title: "Fairfax County Permits for Lorton Properties",
    paragraphs: [
      "Lorton is unincorporated Fairfax County, so all deck permits are processed through the county's Land Development Services office. The standard deck permit requires a site plan, structural drawings showing footing dimensions and spacing, ledger attachment details and guardrail specifications. Current plan review times run 3-6 weeks, with occasional delays during the spring peak.",
      "Some Lorton properties  -  particularly those near Mason Neck and along Pohick Creek  -  fall within Resource Protection Areas (RPAs) or Environmental Protection Corridors. These zones carry additional setback and disturbance requirements that affect where deck footings can be placed. We identify RPA status early in the design process and adjust the deck footprint accordingly, so the permit application is not returned for revision.",
      "The permit fee for a typical Lorton deck runs $300-$500 depending on project valuation. We prepare and file the complete submission package electronically and schedule the three required inspections  -  footing, framing and final  -  at the appropriate build phases."
    ]
  },
  {
    title: "Outdoor Living for South County Homes",
    paragraphs: [
      "Lorton and the broader South County area have a stronger connection to the outdoors than most of inner Fairfax County. Mason Neck State Park, Pohick Bay Regional Park, and the Occoquan River are minutes away, and many homeowners chose Lorton specifically for that access. A well-designed deck extends that outdoor lifestyle to the backyard  -  a place to eat, relax and spend time outside without driving somewhere first.",
      "For Lorton families, a deck-and-screened-porch combination is one of the most practical builds. The open deck section handles grilling and open-air seating, while the screened porch provides a bug-free zone from May through October  -  critical in Lorton's tree-heavy environment where mosquitoes are a fact of life. We frame the porch into the deck structure from the start so it reads as one intentional build rather than an addition.",
      "Lorton's lot sizes  -  typically a quarter acre to a third of an acre in Laurel Hill and Crosspointe  -  support these larger builds without crowding the yard. Combined deck-and-screened-porch projects here typically run $40,000-$60,000, creating a three-season outdoor room that adds genuine living space to the home."
    ]
  }
];

export default function DeckBuilderLortonPage() {
  return (
    <main>
      <LocalBusinessSchema city="Lorton" url="https://ldndecks.com/deck-builder-lorton-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-lorton-va" name="Deck Builder in Lorton, VA | Trex Certified | Loudoun Decks" description="Deck builder in Lorton, VA. Custom Trex &amp; composite decks for Laurel Hill, Crosspointe, Newington &amp; Gunston. Fairfax County permits handled. Free estimate  -  (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Lorton, VA's Trusted Deck Company"
        title="Custom Deck Builder in Lorton, VA"
        description="Loudoun Decks builds composite decks and outdoor living spaces across Laurel Hill, Crosspointe, Newington and the South County area. Fairfax County permits handled. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Upgrading Lorton's Outdoor Living"
        title="Deck Builder Lorton VA  -  Premium Quality"
        description="Lorton's newer communities have builder-grade decks ready for a real upgrade. We replace them with Trex and TimberTech composite  -  cable railing for wooded views, proper engineering for conservation lots. Projects from $22k+."
        listItems={[
          "TrexPro & TimberTech Certified installer",
          "Laurel Hill & Crosspointe HOA submissions handled",
          "Cable railing for wooded and conservation lot views",
          "Fairfax County permits filed and inspected",
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
            alt="Composite deck built by LDN Decks in Lorton, Virginia with wooded views"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Lorton</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Composite Decks for Laurel Hill, Crosspointe and South County</h3>
      </div>
      <ServiceInclusions
        title="Why Lorton Chooses Loudoun Decks"
        description="We are a local Northern Virginia team that understands Lorton's newer communities, its wooded lots and the Fairfax County permit process from start to finish."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Lorton VA  -  FAQs"
        faqs={lortonFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-lorton-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/deck-permit-fairfax-county-virginia', 'Fairfax County Deck Permit Guide'],
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/how-much-does-a-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Lorton" /></div></section>
      <SimpleCTA title="Get Your Lorton Deck Quote" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-lorton-va" />
      <NamedAuthor context="Lorton and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </main>
  );
}
