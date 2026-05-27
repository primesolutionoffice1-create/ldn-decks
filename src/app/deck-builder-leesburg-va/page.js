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
  path: '/deck-builder-leesburg-va',
  title: 'Deck Builder in Leesburg, VA | Trex Certified | Loudoun Decks',
  description: 'Deck builder in Leesburg, VA. Custom Trex & cedar decks for River Creek, Lansdowne, Tavistock Farms & the historic district. Town of Leesburg + Loudoun County permits handled. Free estimate  -  (571) 655-7207.',
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Two Permit Desks, One Contractor",
    desc: "A Leesburg address can fall under the Town of Leesburg building department or Loudoun County, depending on where the corporate line runs. We confirm jurisdiction first and file with the correct office  -  no applications stalled at the wrong desk."
  },
  {
    title: "Historic District to River Creek",
    desc: "From period-sensitive decks behind King Street colonials to contemporary builds in River Creek and Lansdowne, we match the design to the neighborhood rather than reuse a template."
  },
  {
    title: "Slope and View Engineering",
    desc: "Many Leesburg lots fall away toward the Potomac. We engineer multi-level decks for those grades and specify cable or glass railing where a river or fairway view is worth preserving."
  }
];

const leesburgFAQs = [
  {
    q: "Do you build custom decks in Leesburg, VA?",
    a: "Yes  -  across all of Leesburg, from the historic downtown around King Street to River Creek, Lansdowne on the Potomac, Tavistock Farms, Potomac Station and Exeter."
  },
  {
    q: "Will my Leesburg deck need a Town permit or a County permit?",
    a: "It depends on the address. Properties inside the Town of Leesburg corporate limits permit through the Town's own building department; properties in the surrounding area go through Loudoun County. We confirm which jurisdiction applies before design and handle the filing either way."
  },
  {
    q: "What does a deck cost in Leesburg?",
    a: "Leesburg composite decks generally run $20,000 to $50,000+. Sloped, Potomac-facing lots in River Creek and Lansdowne often call for multi-level designs and added engineering, which sits toward the higher end of that range."
  },
  {
    q: "Which Leesburg HOAs have you worked with?",
    a: "River Creek, Lansdowne on the Potomac, Tavistock Farms, Potomac Station and Exeter. River Creek's architectural review can take 3-4 weeks in peak season, so we prepare and submit that package early."
  },
  {
    q: "What deck materials are popular in Leesburg?",
    a: "Composite (Trex and TimberTech AZEK) leads, but cedar and IPE remain popular in River Creek for the natural-wood aesthetic, and AZEK's premium lines suit the historic district where a refined, traditional finish matters."
  },
  {
    q: "Can you design a Leesburg deck around a Potomac or golf-course view?",
    a: "Yes. On Leesburg's view lots we favor cable and glass railing to keep sight lines open, and we set deck height and stair runs to frame the river or fairway rather than block it."
  }
];

const expansionSections = [
  {
    title: "Two Jurisdictions, One Town: Permitting in Leesburg",
    paragraphs: [
      "Leesburg is unusual among Loudoun County towns: it runs its own building department. Whether your deck is reviewed by the Town of Leesburg or by Loudoun County depends entirely on whether your lot sits inside the town's corporate limits  -  and the line is not always where homeowners assume. Our first step on any Leesburg project is confirming jurisdiction, because filing with the wrong office is the most common cause of a delayed deck.",
      "From there we manage the full process: drawings, structural details, the architectural review submission for your HOA, and the footing, framing and final inspections. A recent Leesburg project  -  a multi-level TimberTech deck stepping down a sloped lot in Lansdowne on the Potomac  -  ran through that exact sequence, with the HOA review handled in parallel with the permit so neither held up the build."
    ]
  },
  {
    title: "From the Historic District to the Potomac",
    paragraphs: [
      "Leesburg is the historic seat of Loudoun County, and its housing reflects two centuries of building. Colonial and Federal homes line the historic district near King Street; larger-lot communities like River Creek, Lansdowne and Tavistock Farms spread toward the Potomac on a third of an acre and up. A deck that suits one rarely suits the other, and we design accordingly.",
      "We build for Leesburg the way the town itself was built  -  deliberately. Loudoun Decks keeps a limited roster of full Leesburg projects rather than chasing job volume, so a deck near Morven Park gets the same hands-on attention as one in River Creek: the owner on site, the same crew from footing to final board.",
      "Hire a Leesburg deck builder who can tell you, before you sign anything, whether your address answers to the Town or the County and how your HOA expects drawings packaged. That answer is built into every Leesburg estimate we write."
    ]
  },
  {
    title: "Composite, Cedar and the Leesburg View Lot",
    paragraphs: [
      "Material choice in Leesburg is more varied than in most NoVA towns. Composite leads for its low maintenance, and as a TrexPro installer and TimberTech Certified contractor we install the top-tier lines. But River Creek homeowners often still choose cedar or IPE for a natural-wood aesthetic, and the historic district frequently calls for AZEK's premium boards where a traditional finish matters. We build all of them well.",
      "Leesburg's larger, sloped lots shape the design as much as the material. Where a yard falls toward the Potomac, a multi-level deck turns an awkward grade into usable rooms, and cable or glass railing keeps the river or golf-course view intact. Leesburg projects typically start around $20,000 and scale with slope, levels and railing choice.",
      "Composite boards ship with a long manufacturer material warranty; pairing it with a certified installation is what keeps that warranty enforceable a decade or two down the road."
    ],
    listItems: [
      { label: "TrexPro installer", text: "TrexPro Platinum tier  -  full Transcend, Enhance and Select catalog for Leesburg builds." },
      { label: "TimberTech Certified", text: "Certified installer for the complete TimberTech Pro and AZEK product lines." },
      { label: "Cedar & IPE Capable", text: "Natural-wood decks built to last for River Creek and historic-district homes." },
      { label: "Dual-Jurisdiction Permits", text: "Filing handled for both the Town of Leesburg and Loudoun County." }
    ]
  },
  {
    title: "Screened Porches and Multi-Level Living in Leesburg",
    paragraphs: [
      "A screened porch is the natural second phase for a Leesburg deck. Tied into the structure at the framing stage rather than bolted on afterward, it stretches the usable season well past the first cool Potomac-side evening.",
      "Where the grade falls away  -  which is most of River Creek and Lansdowne  -  a stepped layout earns its keep: a cooking-and-dining level off the kitchen, a lounge level nearer the yard, and a dry-joist ceiling that claims the shaded zone underneath as covered patio.",
      "Combined builds  -  deck, screened porch and a covered lower patio  -  suit the larger lots in Leesburg's river communities, and outdoor square footage remains one of the clearer resale levers in that market."
    ]
  }
];

export default function DeckBuilderLeesburgPage() {
  return (
    <main>
      <LocalBusinessSchema city="Leesburg" url="https://ldndecks.com/deck-builder-leesburg-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-leesburg-va" name="Deck Builder in Leesburg, VA | Trex Certified | Loudoun Decks" description="Deck builder in Leesburg, VA. Custom Trex &amp; cedar decks for River Creek, Lansdowne, Tavistock Farms &amp; the historic district. Town of Leesburg + Loudoun County permits handled. Free estimate  -  (571) 655-7207." speakable />
      <ServicesHeader
        subtext="Leesburg, VA's Trusted Deck Company"
        title="Custom Deck Builder in Leesburg, VA"
        description="Loudoun Decks builds composite, cedar and IPE decks across River Creek, Lansdowne and the historic district. Town of Leesburg + Loudoun County permits handled. 5-Star Google Rated."
      />
      <ServiceMain
        subtitle="Historic Loudoun Craftsmanship"
        title="Deck Builder Leesburg VA  -  Premium Quality"
        description="We build decks suited to Leesburg's two worlds  -  the historic district and the river communities. Slope-engineered designs, view-preserving railings, materials from $20k+."
        listItems={[
          "TrexPro, TimberTech, cedar & IPE",
          "Town of Leesburg & Loudoun County permits confirmed and filed",
          "Multi-level designs for sloped Potomac-facing lots",
          "Cable & glass railing for river and fairway views",
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
            alt="Multi-level composite deck built by LDN Decks on a sloped lot in Leesburg, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Leesburg</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Decks for Leesburg's Two Worlds  -  The Historic District and the River Communities</h3>
      </div>
      <ServiceInclusions
        title="Why Leesburg Chooses Loudoun Decks"
        description="We are a local Loudoun County team that knows the town's permit lines, its HOAs and its sloped river lots from the ground up."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Leesburg VA  -  FAQs"
        faqs={leesburgFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-leesburg-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Leesburg" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Leesburg" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-leesburg-va" />
      <NamedAuthor context="Leesburg and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </main>
  );
}
