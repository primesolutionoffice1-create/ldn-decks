import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ProcessSteps from '@/components/ProcessSteps';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import ServiceSchema from '@/components/ServiceSchema';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceVisual from '@/components/ServiceVisual';
import SimpleCTA from '@/components/SimpleCTA';
import AboveFoldCTA from '@/components/AboveFoldCTA';
import NamedAuthor from '@/components/NamedAuthor';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

const _meta = buildMetadata({
    path: "/services/porches/screened-porch",
    title: "Screened Porch Builder & Contractor | Northern Virginia",
    description: "Screened-in porch construction in Loudoun, Fairfax, Prince William VA. NoVA-licensed screened porch contractor. EZE-Breeze, motorized screens, four-season conversions. $28k–$80k. Trex Platinum installer.",
  image: "/images/img01.jpeg",
});
export const metadata = {
  ..._meta,
  alternates: { canonical: 'https://ldndecks.com/screened-porch-builder-northern-virginia' },
};

const inclusions = [
  {
    title: "Insect Protection",
    desc: "High-durability fiberglass screening on the standard build; pet-resistant or invisible no-see-um mesh on request. Door and window inserts seal at the frame so no entry points remain.",
  },
  {
    title: "Year-Round Comfort",
    desc: "Optional EZE-Breeze panels, motorized retractable screens, outdoor fireplaces, ceiling fans and dimmable LED lighting extend usable porch season from April through November in Northern Virginia.",
  },
  {
    title: "Structural Integrity",
    desc: "Engineered roof loads tied to existing house framing with sealed ledger details, full beam-and-post schedules per Fairfax County and Loudoun County structural requirements, stainless connectors at every load-critical joint.",
  },
];

const faqs = [
  {
    q: "How much does a screened-in porch cost in Northern Virginia?",
    a: "Most screened porch builds in Loudoun, Fairfax and Prince William counties run $28,000 to $55,000 for a 200–350 sqft footprint with a shed or gable roof, composite deck floor, fiberglass screen and standard lighting. Four-season EZE-Breeze conversions, vaulted ceilings with tongue-and-groove cladding, or attached fireplaces push complete projects into the $55,000–$80,000 range. We send a written, itemized cost letter with every estimate."
  },
  {
    q: "Do you need a permit for a screened porch in Fairfax County?",
    a: "Yes. Fairfax County requires a building permit for any screened porch because the roof structure is a structural addition tied to the house framing. Plan review through Fairfax County's Building Development Division runs 3–5 weeks and requires sealed structural drawings, ledger attachment details and footing schedules. The City of Fairfax runs faster at 2–3 weeks. We handle the full submission."
  },
  {
    q: "What's the difference between a screened porch and a sunroom?",
    a: "A screened porch uses insect screening on the side walls, has no climate control, and is built for warm-season use. A sunroom uses glass on the side walls, may include heating or cooling, and qualifies as conditioned living space — which means stricter permitting, an HVAC tie-in and higher cost ($55k–$120k+). EZE-Breeze panel systems sit between the two: glazed acrylic panels that slide open for screen-porch use in summer and close down for shoulder-season use in spring and fall."
  },
  {
    q: "Can you build a screened porch on an existing deck?",
    a: "Sometimes. If your existing deck framing was engineered for the live load it currently carries plus the dead load of a roof structure, we can build over the top. In practice this is rare on decks more than 10 years old — most existing decks need supplemental footings and beam upgrades before a roof can be attached safely. Our structural assessment includes photos of every connection and a clear repair-or-rebuild recommendation before we quote the porch."
  },
  {
    q: "How long does it take to build a screened porch in Northern Virginia?",
    a: "From signed contract to completed build: typically 12–16 weeks. The permit phase runs 3–5 weeks in Fairfax County and 2–4 weeks in Loudoun County. HOA review runs 1–4 weeks in parallel. Construction itself runs 4–6 weeks once permits are issued, depending on the size, roof complexity and finish package."
  },
  {
    q: "Do you build EZE-Breeze screened porches?",
    a: "Yes. EZE-Breeze is the panelized system we install when clients want a true four-season porch without the cost of a full sunroom conversion. The acrylic panels slide open in summer for full screen-porch airflow, and close down in spring and fall to block wind and moderate temperature swings. We install EZE-Breeze on both new screened porch builds and on existing covered porch conversions."
  },
  {
    q: "Can a screened porch be heated?",
    a: "Indirectly, yes. We install ceiling-mounted infrared radiant heaters and outdoor-rated wall heaters that take a screened porch from unusable to comfortable in shoulder-season weather (45–60°F). Fully insulated and HVAC-conditioned space requires conversion to a sunroom or three-season room, which is a different permit category and a much higher cost."
  },
];

const screenedPorchCostRows = [
  ['Basic screened porch (200 sqft)', 'Shed roof, fiberglass screen, composite floor, standard lighting', '$28,000–$38,000'],
  ['Standard screened porch (250–300 sqft)', 'Gable roof, premium screen, ceiling fan, recessed LEDs, knee wall', '$38,000–$55,000'],
  ['Premium screened porch (300–400 sqft)', 'Vaulted ceiling with T&G cladding, motorized retractable screens, fireplace', '$55,000–$70,000'],
  ['EZE-Breeze four-season porch (300 sqft)', 'Panelized acrylic walls, screen mode + closed mode, infrared heaters', '$60,000–$80,000'],
];

export default function ScreenedPorchPage() {
    return (
      <main>
      <WebPageSchema url="https://ldndecks.com/services/porches/screened-porch" name="Screened Porch Builder &amp; Contractor | Northern Virginia" description="Screened-in porch construction in Loudoun, Fairfax, Prince William VA. NoVA-licensed screened porch contractor. EZE-Breeze, motorized screens, four-season conversions. $28k–$80k. Trex Platinum installer." speakable />
        <ServiceSchema
        name="Screened Porch Construction"
        description="Custom screened porches in Northern Virginia. EZE-Breeze and four-season options. Trex Platinum and TimberTech certified installer."
        url="https://ldndecks.com/services/porches/screened-porch"
        category="Porch Construction"
        price="35000"
        relatedServices={['https://ldndecks.com/screened-porch-builder-northern-virginia', 'https://ldndecks.com/services/porches', 'https://ldndecks.com/three-season-room-northern-virginia']}
      />
        <ServicesHeader
          subtext="Porch Services"
          title="Screened Porch Builder & Contractor in Northern Virginia"
          description="Licensed Virginia Class A screened porch contractor serving Loudoun, Fairfax and Prince William counties. Custom screened-in porches, EZE-Breeze four-season conversions, and full permit handling. Trex Platinum Partner and TimberTech Certified Installer."
        />
        <AboveFoldCTA headline="Planning a screened-in porch in Northern Virginia? Talk to a Class A licensed porch specialist today." />

        <section style={{ padding: '2.5rem 1.5rem 1rem', maxWidth: 900, margin: '0 auto' }}>
          <div style={{ borderLeft: '4px solid var(--color-primary)', background: '#fff8f1', padding: '1.25rem 1.5rem', borderRadius: 6, marginBottom: '2rem' }}>
            <strong style={{ display: 'block', marginBottom: '0.5rem', fontSize: '1.05rem' }}>Quick Answer</strong>
            <p style={{ margin: 0, lineHeight: 1.65 }} data-speakable>
              A custom screened-in porch in Northern Virginia typically costs $28,000 to $55,000 for a 200–350 sqft build with a composite floor, gable or shed roof, fiberglass screen and standard lighting. EZE-Breeze four-season conversions and premium fireplace builds run $55,000–$80,000. Fairfax County permits run 3–5 weeks; Loudoun County 2–4 weeks. We&apos;re a Virginia Class A licensed screened porch contractor and Trex Platinum installer.
            </p>
          </div>

          <NamedAuthor context="Loudoun, Fairfax, and Prince William counties" lastUpdated="May 2026" />
        </section>

        <ServiceMain
          subtitle="Relaxation Redefined"
          title="Professional Screened-In Porch Construction"
          description="A screened-in porch is the highest-leverage outdoor-living upgrade in the NoVA climate. April through October the bug load makes an open deck unusable after sunset, and the heat-and-humidity peak in July and August favors covered, screened space over open exposure. A properly built screened porch extends usable season by 4–5 months and consistently rates among the highest-ROI outdoor additions on resale."
          listTitle="Custom Features We Build:"
          listItems={[
            "Fiberglass, pet-resistant, or invisible no-see-um screen",
            "Knee-wall, half-wall, or floor-to-ceiling screen panel options",
            "Vaulted, gable, shed, or hip roof styles",
            "Integrated lighting, ceiling fans, and sound",
            "EZE-Breeze four-season panel systems",
            "Outdoor fireplaces and infrared radiant heaters",
            "Composite or natural wood T&G ceiling cladding",
            "Trex, TimberTech AZEK or Fiberon composite floor",
          ]}
          image1="/images/img01.jpeg"
          image2="/images/img11.jpeg"
        />

        <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>Screened Porch Cost in Northern Virginia (2026)</h2>
          <p style={{ marginBottom: '1.25rem', lineHeight: 1.7 }}>
            NoVA pricing for screened porches runs 25–35% above the national average, driven by Fairfax County&apos;s documentation requirements, NoVA labor rates, and the structural detail required to tie a roof safely to an existing single-family house. The ranges below reflect typical 2026 builds we&apos;ve delivered across Ashburn, Reston, Vienna, Fairfax, McLean and Manassas.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Build tier</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Spec</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Installed cost</th>
                </tr>
              </thead>
              <tbody>
                {screenedPorchCostRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', color: '#555' }}>{row[1]}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee', fontWeight: 600, color: 'var(--color-primary)' }}>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#666', fontStyle: 'italic', marginBottom: '2rem' }}>
            Ranges include permit fees, structural drawings, all materials, and labor. Exclude HVAC, gas-line work, and custom millwork. Full itemized estimates ship within 48 hours of an on-site visit.
          </p>

          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            Read the full <Link href="/screened-porch-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>2026 NoVA screened porch cost guide</Link> for line-item breakdowns, financing options and ROI on resale.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>What a Northern Virginia Screened Porch Builder Should Provide</h2>
          <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
            A screened porch is structurally a roof attached to your house. That changes what you should expect from a screened porch contractor versus a deck-only crew. The non-negotiables: a current Virginia Class A contractor license verifiable at <em>dpor.virginia.gov</em>, sealed structural drawings on every Fairfax County submission, full liability and workers&apos; comp insurance, and ledger attachment details that meet current NoVA flashing and bolt schedule requirements.
          </p>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            We&apos;re Trex Platinum Partner and TimberTech Certified Installer because the floor under a screened porch sees the same moisture and freeze-thaw stress as an open deck — and the materials we choose for that floor carry the same long-warranty installer credentials we use on uncovered builds. The roof, framing and screen system follow the same standard.
          </p>

          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>Screened Porch Builds We Specialize In</h2>
          <ul style={{ marginBottom: '2rem', paddingLeft: '1.25rem' }}>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>New screened porches on existing decks.</strong> We assess footings, ledger attachment, and beam capacity. If sound, we build over; if not, we replace footings and reinforce before roofing.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Open-porch conversions to screened.</strong> Adding screen frames to an existing covered porch in 2–3 weeks, no permit if no structural changes.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>EZE-Breeze four-season conversions.</strong> Acrylic panel system retrofit on existing screened porches; usable from April through November.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Combination deck-and-screened-porch builds.</strong> Most common request in Fairfax Station, Great Falls and Vienna — one project, one permit, one finished outdoor living suite.</li>
            <li style={{ marginBottom: '0.6rem', lineHeight: 1.7 }}><strong>Replacement screened porches.</strong> Tear-down and rebuild on 25+ year-old original builds with rotted framing, sagging roofs, or screen frames no longer seating square.</li>
          </ul>

          <h2 style={{ fontSize: '1.85rem', fontWeight: 700, marginBottom: '1.25rem' }}>Service Area for Screened-In Porch Construction</h2>
          <p style={{ marginBottom: '2rem', lineHeight: 1.7 }}>
            We build screened porches across Northern Virginia, with deep workload in Ashburn, Leesburg, Sterling, South Riding, Brambleton, Reston, Herndon, Vienna, McLean, Fairfax, Centreville, Chantilly, Burke, Springfield, Manassas, Haymarket, Gainesville and Woodbridge. See the full <Link href="/areas-we-serve" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>NoVA service map</Link>.
          </p>
        </section>

        <ServiceVisual image="/images/img28.jpeg" />
        <ServiceInclusions
          title="What Our Team Delivers"
          description="Every screened porch ships with the structural detail, permit paperwork, and installer credentials that hold up under Fairfax County review and 25+ years of NoVA freeze-thaw."
          items={inclusions}
        />
        <ProcessSteps />
        <ServicesFAQ
          title="Screened Porch FAQs"
          faqs={faqs}
          canonicalUrl="https://ldndecks.com/services/porches/screened-porch"
        />
        <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Screened Porch Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/screened-porch-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Screened Porch Builder Northern Virginia →</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/screened-porch-cost-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Screened Porch Cost Guide →</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/three-season-room-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Three-Season Room Builder →</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link href="/covered-deck-builder-northern-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Covered Deck Builder Northern Virginia →</Link></li>
          </ul>
        </section>
        <SimpleCTA title="Build Your Screened Porch" buttonText="Get Free Estimate" link="/contact" />
        <RelatedGuides currentPath="/services/porches/screened-porch" />
        <ContactHome />
      </main>
    );
}
