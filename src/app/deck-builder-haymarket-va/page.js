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
  path: '/deck-builder-haymarket-va',
  title: 'Deck Builder in Haymarket VA | Multi-Level Decks for Sloped Lots',
  description: "Deck builder in Haymarket, VA. Multi-level composite decks for sloped lots and mountain views  -  Dominion Valley, Piedmont, Heathcote, Winterwood. Prince William County permits handled. Free estimate.",
  image: '/images/img36.jpeg',
});

const inclusions = [
  {
    title: "Multi-Level Designs for Sloped Lots",
    desc: "Haymarket's terrain drops and rises across most of its communities. We engineer elevated and multi-level decks that turn grade changes into distinct outdoor rooms  -  upper dining, mid-level lounge, ground-level patio  -  rather than fighting the slope with retaining walls."
  },
  {
    title: "Dominion Valley & Piedmont HOA Navigation",
    desc: "Dominion Valley and Piedmont run strict architectural review boards with detailed material and color requirements. We prepare the full submission package  -  drawings, material samples, color specs  -  and time it to the review calendar so your project stays on schedule."
  },
  {
    title: "Prince William County Permits",
    desc: "We file all permits through Prince William County  -  plan review runs 2-4 weeks. Elevated and multi-level decks require engineered drawings, and we handle the structural engineering, application, inspections and final sign-off."
  }
];

const haymarketFAQs = [
  {
    q: "How much does a deck cost in Haymarket, VA?",
    a: "Haymarket composite decks typically run $22,000 to $55,000+. Larger lots in Dominion Valley and Piedmont support bigger builds, and multi-level designs on sloped lots add engineering and framing cost. Composite boards install at roughly $32-$58 per square foot depending on the product line. Cable and glass railing systems  -  common on view lots  -  add $150-$250 per linear foot over standard aluminum."
  },
  {
    q: "Can you build a multi-level deck on a sloped Haymarket lot?",
    a: "Yes  -  multi-level decks are one of our core specialties and a natural fit for Haymarket's terrain. We design 2-3 level cascading decks that follow the grade, with each level serving a distinct function. Elevated sections require engineered drawings for Prince William County permit review, and we handle that engineering in-house."
  },
  {
    q: "How does the Dominion Valley HOA process work for decks?",
    a: "Dominion Valley's architectural review board requires a full submission including site plan, material specifications, color samples and elevation drawings. The board reviews on a set meeting schedule  -  typically monthly. We prepare the complete package and submit it early enough to land on the next agenda. Review usually takes 2-4 weeks. We run the HOA and county permit submissions in parallel so neither holds up the other."
  },
  {
    q: "Do I need a permit for a deck in Haymarket?",
    a: "Yes. Haymarket falls under Prince William County jurisdiction. A building permit is required for new decks and structural modifications. Plan review runs 2-4 weeks. Multi-level and elevated decks require engineered structural drawings. We prepare and submit the full application, schedule all inspections and handle final sign-off."
  },
  {
    q: "What railing works best for Haymarket's mountain and golf course views?",
    a: "Cable railing and glass panel railing both maximize views from elevated Haymarket decks. Cable railing uses horizontal stainless steel cables between posts  -  the cables are nearly invisible from 10 feet away. Glass panel railing eliminates all vertical and horizontal lines for a completely open sightline. Both options meet code for residential decks and work well on multi-level designs where the upper deck is the primary viewing platform."
  },
  {
    q: "How long does a Haymarket deck project take?",
    a: "A standard single-level deck takes 2-3 weeks on site. Multi-level builds with cable or glass railing run 3-4 weeks. Add 2-4 weeks for Prince William County permit review and 2-4 weeks for HOA approval in communities like Dominion Valley and Piedmont. We submit permits and HOA packages in parallel and schedule material delivery so construction starts the week permits clear."
  }
];

const expansionSections = [
  {
    title: "Haymarket's Unique Landscape  -  Slopes and Views",
    paragraphs: [
      "Haymarket sits at the rural-suburban transition in Prince William County, where the flat Piedmont plain begins to rise toward the Bull Run Mountains. Lot sizes range from a quarter acre in newer developments to 2+ acres in the surrounding countryside. Elevation changes are the norm, not the exception  -  and that terrain shapes every deck we design here.",
      "A sloped lot is not a limitation; it is an opportunity. Where a flat lot gives you one deck level, a Haymarket slope gives you two or three  -  an upper dining platform at door height, a mid-level lounge stepped down 3-4 feet, and a ground-level patio or fire pit area at grade. Each level becomes its own outdoor room with its own character, and the transitions between levels create visual interest that a single flat platform cannot match.",
      "The mountain and golf course views available in communities like Dominion Valley and Piedmont add another design dimension. An elevated deck oriented toward the Bull Run ridgeline or a Dominion Valley fairway demands railing that stays out of the way. Cable railing and glass panels cost more than standard aluminum balusters, but on a view lot they are the difference between a deck that frames the landscape and one that blocks it."
    ]
  },
  {
    title: "Premium Materials for Haymarket Estates",
    paragraphs: [
      "Haymarket's larger homes and lots call for materials that match the scale. Trex Transcend and TimberTech AZEK  -  the premium composite and PVC lines  -  are the most common choices in Dominion Valley and Piedmont, where homeowners expect a finished product consistent with $600,000-$1M+ homes. These lines offer deeper wood-grain textures, richer color palettes and the strongest fade-and-stain warranties in the industry.",
      "Material selection also has to account for Haymarket's exposure. Elevated decks on open lots catch full sun and wind in ways that a sheltered suburban backyard does not. Premium composite lines are engineered with UV-resistant caps that hold color under direct Southern exposure  -  important on a west-facing Haymarket deck that takes afternoon sun from April through October. The 25-year fade-and-stain warranties on Trex Transcend and TimberTech AZEK are backed by the manufacturer, and certified installation keeps them enforceable.",
      "For the largest builds  -  450+ square feet, multi-level, with cable railing and integrated lighting  -  we use 2x8 or 2x10 joists at 12-inch centers rather than the minimum 16-inch spacing. The tighter joist spacing eliminates any flex or bounce underfoot, which matters on an elevated platform where occupants are acutely aware of deck movement. It adds material cost but changes the feel of the finished deck entirely."
    ],
    listItems: [
      { label: "TrexPro Platinum", text: "Full Transcend, Enhance and Select catalog  -  installed to manufacturer spec for warranty compliance." },
      { label: "TimberTech Certified", text: "Complete TimberTech Pro and AZEK product lines for Haymarket's premium builds." },
      { label: "Cable & Glass Railing", text: "View-preserving railing systems engineered for elevated, multi-level Haymarket decks." },
      { label: "Structural Engineering", text: "In-house engineered drawings for elevated and multi-level decks  -  required for Prince William County permits." }
    ]
  },
  {
    title: "HOA Navigation for Dominion Valley and Piedmont",
    paragraphs: [
      "Dominion Valley and Piedmont are the two largest and most active HOA communities in Haymarket, and both run strict architectural review boards. The boards care about material type, color selection, railing style and how the deck relates to the home's existing architecture. Submitting a vague or incomplete package results in delays and revision requests.",
      "We prepare Dominion Valley and Piedmont submissions with the same level of detail we would put in a county permit application: a scaled site plan showing the deck footprint relative to property lines and setbacks, elevation drawings showing height and railing, material specification sheets with manufacturer color samples, and a written scope of work. This level of preparation moves the application through review on the first pass rather than bouncing back for clarification.",
      "Smaller Haymarket communities  -  Heathcote, Winterwood, Madison Crescent, Villages of Piedmont  -  have their own covenants and review processes, though they tend to be less formal than Dominion Valley or Piedmont. We check each community's requirements at the estimate stage so the homeowner knows exactly what approvals are needed before we start."
    ]
  },
  {
    title: "Multi-Level Decks and Outdoor Living",
    paragraphs: [
      "A multi-level deck on a Haymarket lot is not just a design choice  -  it is often the most practical way to build. When the grade drops 4-8 feet from the back door to the yard line, a single-level elevated deck leaves unusable dead space underneath and requires long stair runs to reach the ground. Stepping the deck down in 2-3 levels follows the terrain naturally, reduces the height of any single elevation, and turns the entire slope into usable space.",
      "Below the upper level, a dry-joist drainage system captures water and channels it away, creating a covered patio underneath the deck. That covered area becomes a rain-protected outdoor room  -  useful for storage, a shaded seating area, or a hot tub pad that stays dry year-round. On a sloped Haymarket lot, a dry-joist system effectively doubles the usable outdoor space from a single structure.",
      "Screened porches, built-in grilling stations, and fire pit pads at the lowest level round out the outdoor living package. Haymarket's lot sizes support these additions without crowding, and the community's semi-rural character means neighbors are farther away  -  so an outdoor kitchen or fire pit gets used more often than it would on a tight suburban lot."
    ]
  }
];

export default function DeckBuilderHaymarketPage() {
  return (
    <main>
      <LocalBusinessSchema city="Haymarket" url="https://ldndecks.com/deck-builder-haymarket-va" />
      <WebPageSchema url="https://ldndecks.com/deck-builder-haymarket-va" name="Deck Builder in Haymarket VA | Multi-Level Decks for Sloped Lots" description="Deck builder in Haymarket, VA. Multi-level composite decks for sloped lots and mountain views  -  Dominion Valley, Piedmont, Heathcote, Winterwood. Prince William County permits handled. Free estimate." speakable />
      <ServicesHeader
        subtext="Haymarket, VA's Trusted Deck Company"
        title="Custom Deck Builder in Haymarket, VA"
        description="Loudoun Decks builds multi-level composite decks designed for Haymarket's sloped lots and mountain views. Dominion Valley, Piedmont, Heathcote, Winterwood. Prince William County permits handled. review-supported reputation."
      />
      <ServiceMain
        subtitle="Multi-Level Designs for Haymarket's Terrain"
        title="Deck Builder Haymarket VA  -  Premium Craftsmanship"
        description="Haymarket's larger lots and elevation changes call for decks engineered to the site. Multi-level builds, cable railing for mountain and golf course views, and premium composite from $22k+."
        listItems={[
          "TrexPro & TimberTech Certified",
          "Multi-level designs for sloped lots  -  2-3 level cascading decks",
          "Cable & glass railing for Bull Run Mountain and golf course views",
          "Dominion Valley & Piedmont HOA packages prepared",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <ServiceContentExpansion sections={expansionSections} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img26.jpeg"
            alt="Multi-level composite deck built by LDN Decks on a sloped lot in Haymarket, Virginia"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Featured Haymarket Project</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>$38,000  -  450 sqft Multi-Level Deck in Dominion Valley</h3>
        <p style={{ lineHeight: 1.7, marginBottom: '1.5rem' }}>Three-level cascading deck on a sloped lot backing to mountain views. Upper dining level (220 sqft) at door height, mid-level lounge (150 sqft) stepped down 3.5 feet, ground-level fire pit pad (80 sqft) at grade. Trex Transcend in Spiced Rum with cable railing on upper levels for unobstructed sightlines. Integrated LED stair and post lighting throughout. Dominion Valley HOA approved on first submission. Prince William County permit. 3-week build.</p>
      </div>
      <ServiceInclusions
        title="Why Haymarket Homeowners Choose Loudoun Decks"
        description="A Northern Virginia team that knows Haymarket's terrain, its HOA review boards and how to engineer elevated, multi-level decks for sloped lots."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Haymarket VA  -  FAQs"
        faqs={haymarketFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-haymarket-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/composite-deck-vs-wood-deck-virginia', 'Composite Deck vs Wood Deck'],
          ].map(([href, text]) => (
            <li key={href} style={{ marginBottom: '0.5rem' }}>
              <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} →</Link>
            </li>
          ))}
            <li key="/reviews" style={{ marginBottom: '0.5rem' }}><Link href="/reviews" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun Decks Reviews (Google reviews) →</Link></li>
            <li key="/deck-cost-calculator" style={{ marginBottom: '0.5rem' }}><Link href="/deck-cost-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Free Deck Cost Calculator →</Link></li>
            <li key="/services/new-decks" style={{ marginBottom: '0.5rem' }}><Link href="/services/new-decks" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Custom Deck Building Services →</Link></li>
        </ul>
      </section>
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Haymarket" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Haymarket" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-haymarket-va" />
      <NamedAuthor context="Haymarket and Northern Virginia" lastUpdated="2026-05-26" />
      <ContactHome />
    </main>
  );
}
