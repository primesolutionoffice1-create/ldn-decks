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
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
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
    a: "Loudoun County permits run 2-4 weeks through the LandMARC portal; the Brambleton and Broadlands ARCs typically return in 1-2 weeks. A standard 400-600 sq ft build then takes 1-2 weeks on site  -  multi-level or screened-porch projects, 3-4 weeks."
  },
  {
    q: "Are there design considerations specific to Ashburn homes?",
    a: "Many Ashburn homes face west, so afternoon-sun control matters  -  we plan pergola shading and fan-ready wiring up front. Lots that back to common-area buffers or wooded edges are well suited to multi-level designs."
  },
  {
    q: "Can you upgrade a builder-grade Ashburn deck instead of rebuilding?",
    a: "Often, yes. A large share of Ashburn homes still have their original pressure-treated builder deck. If the framing inspects sound, resurfacing the surface boards and railings with composite saves 40-60% versus a full tear-down rebuild."
  },
  {
    q: "Do you build in Brambleton specifically?",
    a: "Yes — Brambleton is one of our highest-volume Ashburn communities. The Brambleton Community Association ARC reviews material samples and renderings; approval typically clears in 1-2 weeks when the package is complete. Common Brambleton builds: 400-500 sqft Trex Transcend rear decks with composite balustrade railings, screened porches added to Carriage and Estate homes, and multi-level designs on lots backing to common-area wooded buffers."
  },
  {
    q: "What about Loudoun Valley Estates, Belmont Country Club, and One Loudoun?",
    a: "Loudoun Valley Estates supports our most ambitious Ashburn builds — 600-900 sqft multi-level decks with outdoor kitchens, $55-95k range. Belmont Country Club is premium estate territory ($75-150k projects with detailed ARC review). One Loudoun is mixed-use Metro-corridor housing (townhomes + estates); compact rear decks 200-300 sqft are common in the townhome blocks, full builds 400-600 sqft on the detached estates. We carry current submission templates for all three HOAs."
  },
  {
    q: "Why is Ashburn the deck-build epicenter of Loudoun County?",
    a: "Three reasons. First: the housing stock is mostly 2000s-2010s builder construction with the original pressure-treated deck now at the end of its 15-year design life — re-deck and resurface demand is concentrated here. Second: Ashburn's median household income and home values support premium materials (Trex Transcend, TimberTech AZEK) and full outdoor-living packages. Third: HOA architectural standards are strong but predictable — once we have the ARC packet template for each community, projects clear faster than most NoVA areas."
  },
  {
    q: "What's the typical Ashburn deck project timeline once we sign?",
    a: "From signed contract: 8-12 weeks total. Loudoun County permit through the LandMARC portal: 2-4 weeks. HOA architectural review (Brambleton, Broadlands, Ashburn Village, etc.): 1-2 weeks in parallel with the permit, not after. Material delivery: 1-3 weeks. Construction: 1-3 weeks for a standard 400-500 sqft deck; 3-4 weeks for multi-level or screened-porch combinations. Most Ashburn projects break ground 4-5 weeks after contract."
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
  },
  {
    title: "Brambleton, Broadlands, Belmont, One Loudoun  -  the Communities We Know by Name",
    paragraphs: [
      "Ashburn isn't one market — it's a network of master-planned communities with distinct character, distinct ARC processes, and distinct price points. Knowing which Ashburn you live in is the first step to estimating honestly.",
      "Brambleton is the Carriage / Estate / Townhome blend on the western edge of Ashburn. The community association ARC reviews material samples plus rendering — typical approval in 14 days when our packet is complete. Common Brambleton builds: 400–550 sqft Trex Transcend rear decks with composite balustrade railings, screened porches added to Carriage homes, multi-level designs on the larger Estate lots that back to common-area wooded buffers. Brambleton clients often pair the deck with a paver patio extension or a low-voltage lighting design.",
      "Broadlands is the established Ashburn community with a strong ARC presence. Architectural standards favor warm-tone composites (Trex Transcend Spiced Rum, Havana Gold; Vintage Lantern). Multi-level builds are popular on the lots backing to Hidden Lane and the western edges where the topography supports stepped designs.",
      "Belmont Country Club is the premier estate-tier neighborhood — homes in the $1.5-3M+ range, larger lots, the most detailed ARC review in Ashburn (material samples, color specs, structural drawings, in-person committee review). Belmont projects routinely run $75,000-$150,000 for full outdoor-living packages with built-in outdoor kitchens, fire features, and multi-level designs that match the home's architecture.",
      "One Loudoun is mixed-use Metro-corridor development. Townhome rear decks here are compact (200-280 sqft, $22-35k); detached homes support full 400-600 sqft builds. The community emphasizes modern design vocabulary — cable or aluminum railings, dark composite tones, integrated lighting.",
      "Beyond these four anchor communities we also build regularly in Ashburn Village, Ashburn Farm, Moorefield Station, Loudoun Valley Estates, Goose Creek Village, and the smaller pocket neighborhoods. Each ARC has its own quirks; we keep current submission templates for every one."
    ]
  },
  {
    title: "Re-Deck or Resurface? The Builder-Grade Decision Tree for Ashburn Homes",
    paragraphs: [
      "Roughly 60% of Ashburn deck calls today are NOT new builds — they're replacement, resurface, or full structural rebuild of the original 2000s-era builder pressure-treated deck. Knowing which path is right saves homeowners $10-25k.",
      "If your framing (joists, beams, ledger, posts) is structurally sound on inspection, resurfacing is the right call: tear off the surface boards and railings, replace with composite (Trex Transcend or TimberTech AZEK), upgrade the railings to cable or aluminum, optionally add lighting. Typical Ashburn resurface: $18-32k for 300-500 sqft, completed in 1-2 weeks. The original framing keeps the structural depreciation curve you've already paid for.",
      "If framing shows rot at the ledger (the most common 15-year failure point on Ashburn builder decks), or if posts are settling, or if joists show structural sag, the right path is full replacement: tear-down, new footings, new framing, new surface, new railings. Typical Ashburn full replacement: $32-55k for 400-600 sqft.",
      "The diagnostic visit is free. We climb under the deck, inspect the ledger flashing, probe the joist ends, check post bases, and give you the honest call. Our resurface-vs-replace breakdown for Ashburn: roughly 40% resurface, 60% full replacement on builder decks 15+ years old."
    ]
  },
  {
    title: "Loudoun County Permit + Inspection — What We File on Every Ashburn Build",
    paragraphs: [
      "Every Ashburn deck needs a Loudoun County building permit filed through the LandMARC portal, plus (in almost every case) an HOA architectural review approval. We file both in parallel from the day you sign — not serially — which saves 4-6 weeks compared to builders who wait for one approval before submitting the other.",
      "The Loudoun County package: site plan with setbacks marked against your certified plat, structural drawings with ledger detail and footing schedule, deck details, and homeowner authorization. Plan review takes 2-4 weeks. Permit fees $150-500 depending on construction valuation. See the full county-side process in our Loudoun County deck permit guide.",
      "The HOA package: material samples, color specs, deck renderings, structural drawings, and the community-specific application form. Each Ashburn ARC has its own submission packet — Brambleton requires the Brambleton ARC form, Broadlands its own, Ashburn Village its own. We carry current templates for every Ashburn HOA and our packets clear first-round review.",
      "After approval, three required inspections: footing (before concrete), framing (before decking installs), final (when structure complete with railings + stairs). All coordinated through Loudoun County Building & Development. The homeowner never has to be on site for inspections — we meet the inspector and handle the walkthrough."
    ]
  }
];

export default function DeckBuilderAshburnPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/deck-builder-ashburn-va" name="Deck Builder in Ashburn, VA | Loudoun Decks" description="Custom composite deck builder in Ashburn serving Brambleton, Broadlands, Ashburn Village and One Loudoun. TrexPro Platinum installer." speakable />
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
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <NamedAuthor context="Ashburn and Loudoun County" lastUpdated="2026-05-26" />
      </div>
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
        <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--color-primary)' }}>Deck Cost in Ashburn, VA (2026 Pricing)</h2>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Ashburn deck pricing reflects the community standards in Brambleton, Broadlands and One Loudoun — most homeowners choose mid-to-premium composite materials. Here is how recent Ashburn projects have landed:
        </p>
        <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ background: '#f7f7f5', borderBottom: '2px solid #ddd' }}>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Project Type</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Typical Range</th>
                <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700 }}>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Trex Enhance Deck (300–400 sq ft)</td>
                <td style={{ padding: '0.75rem 1rem' }}>$22,000–$32,000</td>
                <td style={{ padding: '0.75rem 1rem', color: '#555' }}>Standard single-level, aluminum railing, basic lighting</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Trex Transcend Deck (400–600 sq ft)</td>
                <td style={{ padding: '0.75rem 1rem' }}>$32,000–$48,000</td>
                <td style={{ padding: '0.75rem 1rem', color: '#555' }}>Multi-level option, picture-frame border, full lighting</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600 }}>Outdoor Living Package</td>
                <td style={{ padding: '0.75rem 1rem' }}>$48,000–$90,000+</td>
                <td style={{ padding: '0.75rem 1rem', color: '#555' }}>Deck + screened porch, pergola, outdoor kitchen, full electrical</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '1rem' }}>
          For detailed cost modeling, use our <Link href="/deck-payment-estimator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>monthly payment estimator</Link> or read the full <Link href="/composite-deck-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Northern Virginia deck cost guide</Link>.
        </p>
      </div>
      <SimpleCTA title="Get Your Free Ashburn Deck Estimate" buttonText="Request Estimate" link="/contact" />
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
            ['/composite-deck-builder-loudoun', 'Composite Deck Builder in Loudoun County'],
            ['/screened-porch-builder-northern-virginia', 'Screened Porch Builder Northern Virginia'],
            ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
            ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules in Northern Virginia'],
            ['/composite-deck-cost-northern-virginia', 'How Much Does a Deck Cost in Northern Virginia?'],
            ['/deck-payment-estimator', 'Estimate Deck Costs by Monthly Payment'],
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
      <section style={{ padding: '2rem 1.5rem' }}><div style={{ maxWidth: 900, margin: '0 auto' }}><GoogleMapEmbed city="Ashburn" /></div></section>
      <SimpleCTA title="Build Your Dream Deck in Ashburn" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/deck-builder-ashburn-va" />
      <ContactHome />
    </main>
  );
}
