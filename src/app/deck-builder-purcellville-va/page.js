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
import PlanningUpdate from '@/components/PlanningUpdate';
import GeoAnswerBlock from '@/components/GeoAnswerBlock';

export const metadata = buildMetadata({
  path: '/deck-builder-purcellville-va',
  title: 'Deck Builder in Purcellville, VA | Custom Trex & Cedar Decks',
  description: "Deck builder in Purcellville, VA. Composite and cedar decks for western Loudoun's larger lots and mountain views. Cable railings, pergolas, multi-level designs. Loudoun County permits handled. Free estimate.",
  image: '/social/deck-builder-purcellville-va-social.png',
});

const inclusions = [
  {
    title: "Western Loudoun Specialists",
    desc: "We build on the larger lots and varied terrain that define Purcellville and western Loudoun  -  half-acre to multi-acre properties where deck design has room to expand and where access, grading and soil conditions require on-site problem solving."
  },
  {
    title: "Mountain-View Railing Design",
    desc: "Cable and glass railing systems keep Blue Ridge views open from elevated decks. We match railing style to the view and the home's architecture  -  cable for farmhouse and contemporary, glass for unobstructed panoramic sightlines."
  },
  {
    title: "Loudoun County Permits",
    desc: "Purcellville building permits go through Loudoun County. We file and manage the 2-4 week plan review, including engineering for elevated decks on sloped or graded lots common in western Loudoun."
  }
];

const purcellvilleFAQs = [
  {
    q: "Do you build custom decks in Purcellville, VA?",
    a: "Yes  -  throughout Purcellville, Hillsboro, Between the Hills, Locust Grove, Meadowbrook Farm, Franklin Park and surrounding western Loudoun. We handle Loudoun County permits and build on lots from a quarter acre to multi-acre properties."
  },
  {
    q: "What does a deck cost in Purcellville?",
    a: "Purcellville deck projects generally run $20,000 to $55,000+. Western Loudoun's larger lots allow for bigger decks (400-800+ sqft), multi-level designs, pergolas and outdoor kitchens that push costs toward the higher end. Cedar and IPE builds also run higher than standard composite."
  },
  {
    q: "Do I need a permit for a deck in Purcellville?",
    a: "Yes. Building permits for Purcellville go through Loudoun County, with a 2-4 week plan review. The Town of Purcellville has its own government but deck permits are a county function. We determine jurisdiction and handle the entire filing."
  },
  {
    q: "Are there HOA restrictions in Purcellville?",
    a: "It depends on the neighborhood. Franklin Park has an HOA with architectural review. Many western Loudoun properties  -  especially older homes in town and rural lots outside developments  -  have no HOA, giving homeowners more design freedom on materials, colors and layout."
  },
  {
    q: "Can you build with cedar or IPE in Purcellville?",
    a: "Yes. Natural wood  -  western red cedar and IPE  -  is more popular in western Loudoun than in the suburban communities east of Leesburg. We build in cedar, IPE and composite, and we also do hybrid designs that pair a composite deck surface with a cedar pergola or accent structure."
  },
  {
    q: "How do you design decks for mountain views?",
    a: "We orient the deck to maximize the Blue Ridge sightline, use cable or glass railing to keep the view unobstructed, and design elevation changes (multi-level platforms, raised seating areas) that lift the vantage point above fences and landscaping. The view is the design driver  -  everything else works around it."
  }
];

const expansionSections = [
  {
    title: "Western Loudoun's Unique Character",
    paragraphs: [
      "Purcellville sits on the western edge of Loudoun County where the suburban density of Ashburn and South Riding gives way to rolling farmland, vineyards, and views of the Blue Ridge Mountains. Lots here run from half an acre inside the newer developments to 5, 10, even 50+ acres on the rural parcels that surround the town. That space changes what a deck can be.",
      "In eastern Loudoun a deck is typically 300-400 sqft on a standard suburban lot. In Purcellville and western Loudoun, homeowners have the room and the views for 500-800+ sqft multi-level platforms, wrap-around designs, attached pergolas and outdoor kitchens. The design vocabulary expands because the property allows it, and the views demand it.",
      "The contractor market is thinner out here too. Many deck builders are clustered around Ashburn and the Route 7 corridor, and western Loudoun often falls at the edge of their service area. We build actively in Purcellville, Hillsboro, Hamilton and the surrounding communities, which means shorter response times and familiarity with the terrain, soil conditions and permitting nuances specific to this part of the county."
    ]
  },
  {
    title: "Cedar, IPE and Composite for Rural Lots",
    paragraphs: [
      "Western Loudoun is one of the few areas in Northern Virginia where natural wood decking  -  western red cedar and IPE (Brazilian hardwood)  -  is still a common choice alongside composite. The rural character of the area suits natural materials: a cedar deck with a natural oil finish complements a stone farmhouse or a timber-frame home in a way that composite sometimes does not.",
      "Cedar delivers a warm, natural appearance at a lower cost than IPE, but it requires periodic re-oiling or staining (every 2-3 years) to maintain its color and resist the weathering that Northern Virginia's humidity accelerates. IPE is dramatically harder and more durable  -  it can last 40+ years with minimal maintenance  -  but material costs run 2-3x higher than cedar and the wood is dense enough to require carbide-tipped tooling and pre-drilling for every fastener.",
      "Composite remains the most popular choice overall, even in western Loudoun, because it eliminates the maintenance cycle entirely. The hybrid approach  -  a Trex Transcend or TimberTech deck surface paired with a cedar pergola or railing accent  -  gives homeowners the natural wood aesthetic where they want it and the zero-maintenance composite surface where it matters most."
    ]
  },
  {
    title: "Mountain-View Deck Design",
    paragraphs: [
      "A Blue Ridge view is the single most valuable feature a Purcellville property can offer, and the deck design should be built around it. Orientation comes first: we position the primary deck area to face the mountain view, which in Purcellville typically means a west or northwest exposure. Railing is next  -  cable railing or glass panels keep the sightline unobstructed from a seated position, which is where people actually spend time.",
      "Elevation matters. On sloped lots  -  common throughout western Loudoun  -  an elevated or multi-level deck lifts the viewing platform above fences, landscaping and outbuildings that would otherwise block the panorama. A stepped design with an upper viewing platform and a lower grilling or dining level creates distinct zones without splitting the view.",
      "Shade structures need careful placement on a view deck. A pergola that provides afternoon shade (critical on a west-facing exposure) should frame the view rather than block it. Open-rafter designs and retractable shade options let homeowners control sun exposure without sacrificing the sightline that justified the deck's position in the first place."
    ]
  },
  {
    title: "Permits and Property Considerations for Larger Lots",
    paragraphs: [
      "All deck construction in the Purcellville area requires a Loudoun County building permit, regardless of lot size or whether the property has an HOA. The permit process involves a 2-4 week plan review covering structural engineering, setback compliance and zoning requirements. On larger rural lots, setback lines are generally more generous, but we confirm the specifics with the county before finalizing the design.",
      "Properties within the Town of Purcellville limits have their own zoning overlays. While building permits are a county function, the town's zoning regulations may affect setbacks, lot coverage and height limits. We determine which jurisdiction applies during the initial site visit and factor any town-specific requirements into the design.",
      "Soil conditions on western Loudoun lots vary more than in the compacted-fill suburban developments to the east. Rocky soil, clay and variable grade can affect footing depth and type. We assess these conditions during the site visit and spec footings accordingly  -  helical piles for rocky ground, deeper poured footings for steep slopes, and standard Bigfoot footings where soil conditions allow."
    ]
  }
];

export default function PurcellvilleDeckBuilderPage() {
  return (
    <main>
      <LocalBusinessSchema city="Purcellville" url="https://ldndecks.com/deck-builder-purcellville-va" />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/deck-builder-purcellville-va" name="Deck Builder in Purcellville, VA | Custom Trex & Cedar Decks" description="Deck builder in Purcellville, VA. Composite and cedar decks for western Loudoun's larger lots and mountain views. Cable railings, pergolas, multi-level designs. Loudoun County permits handled. Free estimate." speakable />
      <ServicesHeader
        subtext="Purcellville, VA's Trusted Deck Company"
        title="Custom Deck Builder in Purcellville, VA"
        description="Loudoun Decks builds composite and cedar decks for western Loudoun's larger lots and mountain views. Cable railings, pergolas, multi-level designs. Loudoun County permits handled. publicly documented reputation."
      />
      <ServiceMain
        subtitle="Built for Western Loudoun's Larger Lots"
        title="Deck Builder Purcellville VA  -  Premium Craftsmanship"
        description="We design decks that match western Loudoun's rural character and mountain views. Composite, cedar and IPE on lots from half an acre to multi-acre properties. From $20k+."
        listItems={[
          "Trex, TimberTech and AZEK material planning  -  plus cedar and IPE builds",
          "Cable & glass railing for Blue Ridge mountain views",
          "Multi-level designs, pergolas, outdoor kitchens",
          "Fewer HOA restrictions  -  more design freedom",
          "Public reviews - call (571) 655-7207"
        ]}
        image1="/images/img36.jpeg"
        image2="/images/img37.jpeg"
      />
      <PlanningUpdate
        market="Purcellville deck projects"
        notes={[
          'Western Loudoun lots should be screened for slope, access, soil and town-or-county zoning constraints before final pricing.',
          'View-oriented decks need railing, shade and stair planning early so the structure protects the Blue Ridge sightline.',
          'Natural wood, composite and PVC should be compared against maintenance tolerance, exposure and long-term budget.',
        ]}
        links={[
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permit guide' },
          { href: '/deck-materials-comparison-virginia', label: 'Material comparison' },
        ]}
      />
      <GeoAnswerBlock
        question="What makes Purcellville deck projects different from eastern Loudoun decks?"
        answer="Purcellville and western Loudoun deck projects often involve larger lots, slope, access, soil, view corridors, town-or-county zoning, and more design freedom than tighter eastern Loudoun neighborhoods. Homeowners should compare composite, PVC, cedar, and IPE against maintenance tolerance, sun exposure, railing visibility, stairs, shade, permits, and the written estimate path before choosing a deck plan."
        facts={[
          'Primary buyer intent: western Loudoun deck builder, mountain-view decks, larger-lot planning, and material comparison.',
          'Proof status: view, city, and project photo claims require proof-lock before publication.',
          'Conversion path: Loudoun permit guide, material comparison, and written Purcellville estimate.'
        ]}
        links={[
          { href: '/deck-permit-loudoun-county-virginia', label: 'Loudoun permit guide' },
          { href: '/deck-materials-comparison-virginia', label: 'Material comparison' },
          { href: '/get-estimate', label: 'Get a Purcellville estimate' }
        ]}
      />
      <ServiceContentExpansion sections={expansionSections} />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
          <Image
            src="/images/img17.jpeg"
            alt="Custom deck built by LDN Decks in Purcellville, Virginia with mountain views and cable railing"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 900px) 100vw, 900px"
          />
        </div>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-primary)' }}>Trex Deck Builder Purcellville</h2>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>Decks Designed for Western Loudoun's Views, Lots and Rural Character</h3>
      </div>
      <ServiceInclusions
        title="Why Purcellville Chooses Loudoun Decks"
        description="We are a Northern Virginia team that builds actively in western Loudoun  -  familiar with the terrain, the permit process and the design possibilities that larger lots and mountain views create."
        items={inclusions}
      />
      <ProcessSteps />
      <ServicesFAQ
        title="Deck Builder Purcellville VA  -  FAQs"
        faqs={purcellvilleFAQs}
        canonicalUrl="https://ldndecks.com/deck-builder-purcellville-va"
      />
      <ServiceAreasGrid />
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Related Guides</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Purcellville" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Purcellville" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/deck-builder-purcellville-va" />
      <NamedAuthor context="Purcellville and Northern Virginia" lastUpdated="2026-06-01" />
      <ContactHome />
    </main>
  );
}
