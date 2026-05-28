import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ServicesHeader from '@/components/ServicesHeader';
import Testimonials from '@/components/Testimonials';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServicesFAQ from '@/components/ServicesFAQ';
import SimpleCTA from '@/components/SimpleCTA';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';

const expansionSections = [
  {
    title: "What a deck safety inspection covers",
    paragraphs: [
      "A professional deck inspection is a systematic, top-to-bottom evaluation of every structural and safety component. Our inspectors follow a detailed checklist that meets and exceeds Virginia Residential Code requirements, so nothing is overlooked.",
    ],
    listItems: [
      { label: "Ledger board attachment", text: "We check the connection between the deck and your home's rim joist for proper lag bolts, flashing, and signs of water intrusion or rot behind the ledger." },
      { label: "Posts and footings", text: "Each post is evaluated for plumb, bearing capacity, and base rot. Footings are checked for frost-depth compliance and settling." },
      { label: "Joists and beams", text: "We probe joists for hidden rot, verify joist hanger integrity, and confirm beam spans meet current load tables." },
      { label: "Flashing and waterproofing", text: "Missing or failed flashing at the ledger, rim joist, and post bases is one of the top causes of premature deck failure. We document every gap." },
      { label: "Railings and guards", text: "Guard height, baluster spacing, post attachment, and top-rail rigidity are all measured against the 36-inch residential minimum and 4-inch sphere test." },
      { label: "Stairs and landings", text: "Rise and run consistency, stringer condition, handrail graspability, and landing dimensions are confirmed against [Virginia stair code requirements](/education/deck-stair-code-rise-run-virginia)." },
      { label: "Fasteners and hardware", text: "Nails, screws, joist hangers, tension ties, and through-bolts are inspected for corrosion, withdrawal, and code compliance." },
      { label: "Rot and insect damage", text: "We probe decking, framing, and ground-contact wood for soft spots that indicate fungal decay or termite and carpenter ant activity." },
    ]
  },
  {
    title: "When to get a deck inspected",
    paragraphs: [
      "Not every deck shows visible warning signs before a serious problem develops. Scheduling a proactive inspection at the right time can prevent costly surprises and keep your family safe.",
    ],
    listItems: [
      { label: "Deck is 10 or more years old", text: "Sealants, fasteners, and wood fibers degrade steadily in Northern Virginia's freeze-thaw climate. A decade of exposure warrants a professional look." },
      { label: "Before buying or selling a home", text: "A pre-sale inspection report gives buyers confidence and protects sellers from post-closing liability. Many Loudoun County real-estate agents now recommend one." },
      { label: "After major storm damage", text: "High winds, falling limbs, and heavy snow loads can shift footings, crack joists, or loosen ledger connections that look fine from above." },
      { label: "Visible warning signs appear", text: "Soft or spongy boards, wobbly railings, popped nails, surface mold, and leaning posts all justify an immediate evaluation." },
      { label: "Before resurfacing or renovation", text: "Putting new boards on a failing frame wastes money. An inspection confirms whether the substructure can support a [deck resurfacing](/services/deck-resurfacing) project." },
    ]
  },
  {
    title: "Inspection findings and next steps",
    paragraphs: [
      "After the on-site evaluation, you receive a written inspection report with color-coded photos documenting every finding. Each issue is categorized as critical, moderate, or cosmetic so you can prioritize repairs effectively.",
      "The report also includes a professional recommendation for the most cost-effective path forward — whether that is targeted structural repair, a full resurfacing, or a complete replacement. If your deck was built without a permit, the report outlines what [permit implications for unpermitted decks in Virginia](/blog/deck-without-permit-virginia) you should be aware of before any work begins.",
    ]
  },
  {
    title: "Inspection vs repair — what comes next",
    paragraphs: [
      "An inspection is a diagnostic step, not a repair service. Once you understand the condition of your deck, you can make an informed decision about the right scope of work.",
      "If the framing is sound but boards are worn, [deck resurfacing](/services/deck-resurfacing) replaces the surface while preserving the structure. If specific components have failed, [deck repair and structural maintenance](/services/deck-repair-and-structural-maintenance) targets only what is damaged. And if the frame, footings, and ledger are beyond saving, a full [deck replacement](/services/deck-replacement) is the safest and most economical long-term choice.",
      "We are happy to walk you through the report findings and help you choose the option that fits your budget and timeline.",
    ]
  },
];

const faqs = [
  {
    q: "How much does a deck inspection cost in Northern Virginia?",
    a: "Our comprehensive deck inspection is a flat $350 for most residential decks in Loudoun, Fairfax, and Prince William counties. The fee covers a full structural evaluation, written report with photos, and a professional recommendation for next steps."
  },
  {
    q: "How long does a deck inspection take?",
    a: "A typical inspection takes 60 to 90 minutes on site, depending on the size and complexity of the deck. You receive the written report within two business days."
  },
  {
    q: "Do I need a deck inspection before resurfacing?",
    a: "Yes. Resurfacing installs new boards on the existing frame, so the substructure must be structurally sound. An inspection confirms whether your joists, beams, and ledger can support a resurfacing project or whether repairs are needed first."
  },
  {
    q: "What happens if the inspector finds structural problems?",
    a: "You receive a prioritized list of issues with repair recommendations. We can provide a follow-up estimate for structural repairs, resurfacing, or full replacement depending on the severity."
  },
  {
    q: "Can a deck inspection help with a home sale in Northern Virginia?",
    a: "Absolutely. A professional inspection report reassures buyers and can prevent last-minute renegotiations. Many Loudoun County and Fairfax County real-estate agents recommend a deck inspection as part of pre-listing preparation."
  },
  {
    q: "Is your deck inspection covered if I hire you for repairs?",
    a: "Yes. If you move forward with a repair, resurfacing, or replacement project with LDN Decks, we credit the $350 inspection fee toward the project cost."
  },
];

export const metadata = buildMetadata({
  path: "/services/deck-inspection",
      title: "Deck Inspection Loudoun VA | $350 Safety Audit | LDN Decks",
  description: "Ensure your outdoor space is safe with a professional $350 deck inspection in Northern Virginia. We identify hidden structural rot, foundational settling, and safety hazards."
});

export default function DeckInspectionPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/services/deck-inspection" name="Deck Inspection Loudoun VA | $350 Safety Audit | LDN Decks" description="Ensure your outdoor space is safe with a professional $350 deck inspection in Northern Virginia. We identify hidden structural rot, foundational settling, and safety hazards." speakable />
      <ServiceSchema
        name="Deck Safety Inspection"
        description="Professional structural deck inspection in Northern Virginia. Ledger board, posts, joists, railings checked."
        url="https://ldndecks.com/services/deck-inspection"
        category="Deck Inspection"
        price="150"
        relatedServices={['https://ldndecks.com/services/deck-repair-and-structural-maintenance', 'https://ldndecks.com/services/deck-replacement']}
      />
      <ServicesHeader
        subtext="Deck Inspection Services"
        title="Comprehensive Deck Inspection for $350"
        description="Ensure the safety, structural integrity, and longevity of your deck with our professional inspection services. We identify hidden rot, structural issues, and potential safety hazards."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
      </section>
      <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px', fontWeight: '700' }}>Providing Expert Deck Restoration Services</h2>
        <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto 50px', lineHeight: '1.6' }}>
          Over time, even the most well-built decks fall victim to weathering, moisture, and foundational settling.
          Our $350 specialized deck inspection evaluates your entire structure from the footers to the railings.
          If we find issues, our restoration experts can repair, reinforce, and completely revitalize your older deck
          through <Link href="/services/deck-resurfacing">deck resurfacing</Link>, saving you thousands compared to a
          full <Link href="/services/new-decks">new deck build</Link>.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', alignItems: 'stretch' }}>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck.webp" alt="Old wood deck showing rot damage requiring inspection — Northern Virginia deck safety assessment" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck1.webp" alt="Weathered pressure-treated deck boards showing 15-year wear pattern — Loudoun County deck inspection" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck2.webp" alt="Aging Northern Virginia deck requiring structural restoration by Loudoun Decks" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ position: 'relative', height: '300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}>
            <Image src="/torndeck3.jpg" alt="Professional structural inspection of a Northern Virginia deck by Loudoun Decks" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
      <section style={{ padding: '20px 20px 80px', maxWidth: '900px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8', color: '#444' }}>
        <h3 style={{ fontSize: '28px', color: '#222', marginBottom: '25px', fontWeight: '700', textAlign: 'center' }}>The Hidden Dangers of Older and Outdated Decks</h3>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          A deck is not just an aesthetic addition to your outdoor space; it is a structural extension of your home.
          Over time, constant exposure to unpredictable weather, blistering summer UV rays, severe freeze-thaw cycles,
          and heavy moisture takes a severe toll on the building materials. Even decks built with premium wood or
          composite materials decades ago will eventually begin to show inescapable signs of aging. Ignoring these
          warning signs isn&apos;t just an eyesore—it is a critical and potentially devastating safety hazard.
        </p>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          As decks age, the underlying structural integrity of the frame often compromises long before the visible
          surface boards completely fail. Important foundational elements like concrete footings can sink or shift,
          causing the entire platform to become unstable or unleveled. Fasteners, joist hangers, and ledger boards
          often rust or pull away from the home&apos;s primary structure. In fact, ledger board failure is the leading
          cause of catastrophic deck collapses nationwide. Outdated building codes from 15 or 20 years ago lacked the
          heavy-duty flashing, tension ties, and lateral load requirements required by modern standards, leaving older
          decks inherently vulnerable to water intrusion and dangerously pulling away from the house. If you want the
          structural background before booking, start with the <Link href="/tools/deck-footing-depth-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Footing Depth Calculator Virginia</Link>,{' '}
          <Link href="/tools/deck-beam-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Beam Span Calculator Virginia</Link>,{' '}
          <Link href="/tools/deck-joist-span-calculator-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Deck Joist Span Calculator Virginia</Link>,{' '}
          <Link href="/deck-footing-code-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck footing code guide</Link>,{' '}
          <Link href="/blog/2x8-vs-2x10-deck-joists" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>2x8 vs 2x10 deck joists</Link>,{' '}
          <Link href="/tools/deck-stair-calculator" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair rise and run calculator</Link>
          {', '}
          <Link href="/education/deck-stair-construction-diagram" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair stringers and treads</Link>
          {', '}
          <Link href="/education/deck-stair-safety-inspection-checklist" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>deck stair safety checks</Link>
          {', '}
          <Link href="/education/common-deck-stair-inspection-failures-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>common stair inspection failures</Link>
          {' '}and <Link href="/education/ledger-board-flashing-deck-attachment-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>ledger board flashing</Link>.
        </p>
        <p style={{ fontSize: '18px', marginBottom: '20px' }}>
          Moisture is the natural enemy of any traditional wooden deck. Over time, protective sealants strip away,
          allowing water to penetrate deep into the fibers. This leads to hidden dry rot underneath the surface,
          terrifying structural sponginess, and widespread mildew that makes the surface dangerously slippery.
          Additionally, older composite materials from early manufacturing generations didn&apos;t have the advanced
          capping technologies we use today, meaning they are highly prone to fading, growing persistent mold inside
          the core, and cracking under heavy pressure or prolonged heat.
        </p>
        <p style={{ fontSize: '18px' }}>
          It is absolutely essential that older decks are routinely inspected and evaluated for structural retro-fitting
          or outright replacement. Changing out an outdated deck doesn&apos;t just modernize your backyard aesthetic,
          raise your property value, and eliminate maintenance chores; it guarantees the fundamental safety of your
          family, friends, and guests. If your deck spans over 10 to 15 years old, begins to feel even slightly spongy
          underfoot, visibly sways when you walk, or exhibits extensive surface splintering and warping, it is definitely
          time for a professional change. If the structure was built without approvals, review <Link href="/blog/deck-without-permit-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>what happens with an unpermitted deck in Virginia</Link>
          {' '}before repairs begin. Let our experts assess your structure with a comprehensive $350 inspection to
          keep your outdoor living space safe, secure, and beautiful for years to come.
        </p>
        <section style={{ marginTop: '40px', padding: '30px', backgroundColor: '#f9f9f9', borderRadius: '12px', textAlign: 'center' }}>
          <h4 style={{ fontSize: '22px', marginBottom: '15px' }}>Check Your Local Safety Standards</h4>
          <p style={{ marginBottom: '20px', fontSize: '16px' }}>Verify if your deck meets the latest safety and building codes in Northern Virginia:</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <a href="https://www.loudoun.gov/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-color)', fontWeight: '600', textDecoration: 'underline' }}>Loudoun County Residential Decks</a>
            <a href="https://www.fairfaxcounty.gov/landdevelopment/typical-deck-details" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--site-color)', fontWeight: '600', textDecoration: 'underline' }}>Fairfax County Deck Audit Guide</a>
          </div>
        </section>
      </section>
      <ServiceContentExpansion sections={expansionSections} />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/deck-inspection" title="Deck Inspection FAQs" faqs={faqs} />

      <Testimonials />
      <ServiceAreasGrid />
      <RelatedGuides currentPath="/services/deck-inspection" />
      <SimpleCTA title="Schedule Your $350 Deck Inspection" buttonText="Get Free Estimate" link="/contact" />
      <ContactHome />
    </main>
  );
            }
