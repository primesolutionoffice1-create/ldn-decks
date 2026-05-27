import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import NamedAuthor from '@/components/NamedAuthor';
import WebPageSchema from '@/components/WebPageSchema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/timbertech-decks',
  title: 'TimberTech AZEK Deck Builder NoVA | Certified Contractor',
  description: 'TimberTech and AZEK deck builder in Northern Virginia. Premium PVC and composite decks for Loudoun, Fairfax and Prince William County. Free estimate.',
  image: '/images/img12.jpeg',
});

const inclusions = [
  {
    title: 'TimberTech & AZEK Guidance',
    desc: 'We help you compare Advanced PVC, TimberTech Composite, Vintage, Landmark, and Prime+ lines for the right balance of budget, heat, texture, and warranty.',
  },
  {
    title: 'Moisture-Resistant Builds',
    desc: 'AZEK PVC and capped TimberTech boards are excellent for shaded, damp, tree-heavy Northern Virginia yards where wood framing and soft boards fail faster.',
  },
  {
    title: 'Picture-Frame Detailing',
    desc: 'Premium border boards, stair wraps, fascia, and hidden fasteners create the finished look high-end Loudoun and Fairfax homes expect.',
  },
  {
    title: 'Permits & HOA Handled',
    desc: 'We prepare the documentation homeowners need for county permits, HOA architectural review, material specs, and project approvals.',
  },
  {
    title: 'Composite-To-PVC Upgrade Planning',
    desc: 'If you are comparing Trex, TimberTech, and AZEK, we explain where each product wins so you do not overpay or under-spec the deck.',
  },
];

const timberTechFAQs = [
  {
    q: 'Is TimberTech better than Trex?',
    a: 'It depends on the project. TimberTech AZEK Advanced PVC is a strong fit for premium, moisture-resistant, lower-heat deck surfaces. Trex is often the better value for recycled composite performance. We install and compare both for Northern Virginia conditions.',
  },
  {
    q: 'What is the difference between TimberTech and AZEK?',
    a: 'TimberTech is the brand family. AZEK Advanced PVC is TimberTechs premium PVC decking line with no wood fiber. TimberTech Composite includes capped composite boards that balance durability, appearance, and cost.',
  },
  {
    q: 'How much does a TimberTech deck cost in Northern Virginia?',
    a: 'Most TimberTech and AZEK projects we discuss start around $20,000 and can reach $45,000-$80,000+ for elevated, multi-level, or feature-rich decks with premium railing, lighting, stairs, and dry-space systems.',
  },
  {
    q: 'Does TimberTech handle Virginia humidity well?',
    a: 'Yes. TimberTech and AZEK are designed for low-maintenance outdoor exposure. AZEK PVC is especially strong in damp, shaded, or tree-covered yards because it contains no organic wood fiber.',
  },
  {
    q: 'Can you replace a wood deck with TimberTech?',
    a: 'Yes. If the frame is healthy, resurfacing may be possible. If the framing, ledger, footings, or rail posts are unsafe, a full replacement is the right route.',
  },
  {
    q: 'Do TimberTech decks need staining or sealing?',
    a: 'No. TimberTech and AZEK decks do not need staining, sealing, or sanding. A seasonal wash with mild soap and water is usually enough.',
  },
  {
    q: 'Which TimberTech line is best for a premium home?',
    a: 'For premium homes, TimberTech AZEK Vintage and Landmark are common short-list options because of realistic texture, color variation, and strong warranty coverage.',
  },
  {
    q: 'Do you serve Loudoun, Fairfax, and Prince William County?',
    a: 'Yes. Loudoun Decks builds TimberTech and AZEK decks across Loudoun County, Fairfax County, Prince William County, and nearby Northern Virginia markets.',
  },
];

const expansionSections = [
  {
    title: 'Why TimberTech and AZEK Are Strong Choices for Northern Virginia',
    paragraphs: [
      'TimberTech and AZEK are built for homeowners who want the look of premium wood without the cycle of staining, sealing, splintering, and rot. In Loudoun County, Fairfax County, and Prince William County, decks deal with humid summers, shaded yards, heavy pollen, freeze-thaw cycles, and strict HOA design expectations. A properly installed TimberTech or AZEK deck gives homeowners a cleaner long-term ownership experience.',
      'The biggest advantage is material stability. TimberTech capped composite boards resist staining and fading, while AZEK Advanced PVC removes wood fiber from the board entirely. That matters in yards where moisture lingers under tree cover or where an older pressure-treated deck has already shown signs of rot. We help homeowners choose the line that fits the house, the exposure, and the budget.',
      'A premium deck is not just the board. The result depends on frame preparation, fastener selection, rail integration, fascia detailing, stair layout, drainage, and code-compliant attachment to the house. Loudoun Decks treats TimberTech and AZEK as complete systems, not just surface material.',
    ],
  },
  {
    title: 'TimberTech vs AZEK vs Trex: How We Help You Decide',
    paragraphs: [
      'Trex, TimberTech, and AZEK are all credible premium choices, but they are not interchangeable. Trex is well known for recycled composite boards and strong value across several product tiers. TimberTech Composite offers rich textures and strong capped-board performance. AZEK Advanced PVC sits in the premium tier for homeowners who want maximum moisture resistance and a lighter PVC board profile.',
      'For south-facing decks, pool-adjacent spaces, and barefoot summer use, heat and texture matter. For wooded lots, moisture resistance and cleaning behavior matter. For high-end homes in Ashburn, Great Falls, McLean, Vienna, and Leesburg, color realism, railing selection, and finish detail often matter as much as the square-foot price.',
      'We do not push one brand into every project. We narrow the short list based on sun exposure, elevation, railing style, budget, warranty expectations, and how the finished deck should connect to patios, porches, kitchens, or under-deck spaces.',
    ],
    listItems: [
      { label: 'AZEK Advanced PVC', text: 'Best fit for premium moisture resistance, lighter boards, and high-end finish expectations.' },
      { label: 'TimberTech Composite', text: 'Strong fit for realistic texture, capped protection, and balanced project budgets.' },
      { label: 'Trex Transcend / Lineage', text: 'Strong fit for brand recognition, recycled content, and proven composite performance.' },
      { label: 'Brand-neutral design', text: 'We compare the real tradeoffs before you commit to a board line.' },
    ],
  },
  {
    title: 'Built for Permits, HOA Review, and Long-Term Warranty',
    paragraphs: [
      'Northern Virginia deck projects are not simple material swaps. Counties and HOAs often need drawings, dimensions, railing details, material colors, footing notes, and construction scope before approval. A premium TimberTech or AZEK project should be presented cleanly before anyone starts demolition.',
      'We handle the planning sequence: project scope, material selection, permit path, HOA package, tear-down or resurfacing decision, framing review, and build timeline. This avoids the common problem where homeowners choose a premium board but attach it to a frame that is not ready for another 25 years of service.',
      'Warranty performance also depends on correct installation. Board spacing, ventilation, fasteners, joist protection, stair details, and fascia movement all affect long-term results. The better the planning, the better the finished deck looks five summers later.',
    ],
  },
  {
    title: 'Project Fit: New Builds, Replacements, and Resurfacing',
    paragraphs: [
      'TimberTech and AZEK work well for new custom decks, full deck replacements, and select resurfacing projects. The right path depends on the existing frame. If the joists, beams, ledger, posts, and footings are healthy, resurfacing can convert an old wood deck into a low-maintenance surface. If the structure is compromised, a full replacement is safer and more valuable.',
      'For high-ticket projects, we usually recommend deciding the structural path first, then selecting the surface. A beautiful AZEK surface on a weak frame is not a professional result. The deck should feel solid, drain correctly, meet code, and look integrated with the house.',
      'If you are comparing a new TimberTech deck, a wood-to-composite replacement, or a resurfacing project, start with a site evaluation. The first question is not just which board to buy; it is whether the structure deserves premium material.',
    ],
  },
];

export default function TimberTechDecksPage() {
  return (
    <main>
      <WebPageSchema url="https://ldndecks.com/timbertech-decks" name="TimberTech AZEK Deck Builder Northern Virginia" description="TimberTech and AZEK deck builder in Northern Virginia. Premium PVC and composite decks for Loudoun, Fairfax and Prince William County." speakable />
      <ServiceSchema
        name="TimberTech AZEK Deck Installation"
        description="TimberTech and AZEK deck installation in Northern Virginia. Premium composite and PVC decking for Loudoun, Fairfax, and Prince William County homes."
        url="https://ldndecks.com/timbertech-decks"
        category="Deck Construction"
        lowPrice="22000"
        highPrice="85000"
        relatedServices={['https://ldndecks.com/composite-decks', 'https://ldndecks.com/trex-decks', 'https://ldndecks.com/services/new-decks']}
      />
      <ServicesHeader
        subtext="TimberTech & AZEK Deck Specialist"
        title="TimberTech AZEK Deck Building in Northern Virginia"
        description="Premium TimberTech and AZEK deck installation for homeowners who want low-maintenance performance, rich wood-look finishes, and a deck built for Virginia weather."
      />

      <AboveFoldCTA headline="Comparing TimberTech, AZEK, and Trex for a Northern Virginia deck? Talk to a premium composite specialist today." />

      <section style={{ backgroundColor: '#fff5f2', padding: '24px 20px', borderBottom: '1px solid #ffdbd1' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '16px', color: '#d14817', margin: 0, fontWeight: 500 }}>
            <strong style={{ color: '#111', fontSize: '18px' }}>TimberTech and AZEK projects typically start around $20,000+</strong>
            <br />
            This page is for <strong style={{ color: '#111' }}>full TimberTech, AZEK, replacement, and resurfacing projects</strong>. You can <Link href="/deck-payment-estimator" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>estimate your monthly deck payment</Link> before choosing a board line. For board repair or small fixes, see our <Link href="/services/deck-repair-and-structural-maintenance" style={{ color: '#d14817', textDecoration: 'underline', fontWeight: 600 }}>deck repair service</Link>.
          </p>
        </div>
      </section>

      <ServiceMain
        subtitle="Premium PVC & Composite"
        title="Certified TimberTech and AZEK Deck Contractor"
        description="We build premium TimberTech and AZEK decks across Loudoun, Fairfax, and Prince William County, with careful material selection, structural preparation, permits, HOA support, and clean finish details."
        listItems={[
          'TimberTech Composite and AZEK Advanced PVC options',
          'Low-maintenance boards with no staining or sealing',
          'Premium railing, fascia, lighting, and stair detailing',
          'Wood-to-composite replacement and resurfacing planning',
          'Permits, HOA submissions, and project documentation handled',
          'Moisture-resistant options for shaded and wooded NoVA yards',
          'Clear comparison against Trex before you choose materials',
        ]}
        image1="/images/img12.jpeg"
        image2="/images/img13.jpeg"
      />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
        <NamedAuthor context="Loudoun, Fairfax and Prince William counties" lastUpdated="2026-05-26" />
      </div>
      <ServiceContentExpansion sections={expansionSections} />

      <section style={{ background: '#f7f4ed', padding: '64px 20px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', margin: '0 0 16px', color: '#111', textAlign: 'center' }}>
            TimberTech and AZEK Project Paths
          </h2>
          <p style={{ maxWidth: 760, margin: '0 auto 32px', textAlign: 'center', color: '#555', lineHeight: 1.65 }}>
            Different searches need different answers. We route homeowners toward the project path that fits the deck they actually need.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18 }}>
            {[
              ['New TimberTech Deck', 'Design-first projects with premium surface, rail, lighting, stairs, and outdoor-living integration.'],
              ['AZEK PVC Upgrade', 'Premium PVC option for homeowners prioritizing moisture resistance, lighter boards, and luxury finish detail.'],
              ['Deck Replacement', 'Full tear-down and rebuild when the existing frame, ledger, rail posts, or footings are not worth saving.'],
              ['Deck Resurfacing', 'Wood-to-composite conversion when the structure is sound and ready for long-term surface material.'],
            ].map(([title, text]) => (
              <div key={title} style={{ background: '#fff', border: '1px solid #e8dfd1', borderRadius: 8, padding: 22 }}>
                <h3 style={{ margin: '0 0 10px', color: '#111', fontSize: '1.1rem' }}>{title}</h3>
                <p style={{ margin: 0, color: '#555', lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceInclusions
        title="Why TimberTech Works for NoVA Homes"
        description="Loudoun Decks helps homeowners compare TimberTech, AZEK, and Trex so the final specification fits the house, the yard, and the budget."
        items={inclusions}
      />

      <ProcessSteps />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/timbertech-decks"
        title="TimberTech, AZEK & Composite Deck FAQs"
        faqs={timberTechFAQs}
      />

      <ServiceAreasGrid />

      <section style={{ padding: '56px 20px', maxWidth: 1000, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: 18 }}>Compare Your Options</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {[
            ['/trex-decks', 'Trex Decks'],
            ['/composite-decks', 'Composite Decks'],
            ['/trex-vs-timbertech-vs-azek', 'Trex vs TimberTech vs AZEK'],
            ['/composite-deck-cost-northern-virginia', 'Composite Deck Cost'],
            ['/deck-payment-estimator', 'Deck Payment Estimator'],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              style={{
                display: 'block',
                padding: '18px 20px',
                border: '1px solid #e5e5e5',
                borderRadius: 8,
                color: '#111',
                textDecoration: 'none',
                fontWeight: 700,
                background: '#fff',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      <ServicesCallToAction />
      <RelatedGuides currentPath="/timbertech-decks" />
      <ContactHome />
    </main>
  );
}
