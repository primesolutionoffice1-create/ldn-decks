import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/deck-permit-loudoun-county-virginia',
  title: 'Loudoun County Deck Permit Guide 2026 | LandMARC Process & Costs',
  description: 'Need a deck permit in Loudoun County? Costs $150–$500, takes 3–6 weeks via the LandMARC portal. Updated 2026 guidance on setbacks, footings & inspections.',
  image: '/images/blog-permit-guide.png',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need a permit to build a deck in Loudoun County?", acceptedAnswer: { "@type": "Answer", text: "Yes. Any deck attached to a house, exceeding 200 square feet, or more than 30 inches above grade requires a building permit in Loudoun County. This covers virtually all functional residential decks." } },
    { "@type": "Question", name: "How long does a Loudoun County deck permit take in 2026?", acceptedAnswer: { "@type": "Answer", text: "Plan review through the LandMARC portal typically takes 3-6 weeks. This includes the mandatory HOA architectural review (2-4 weeks) followed by county zoning and structural review (1-2 weeks)." } },
    { "@type": "Question", name: "How much does a deck permit cost in Loudoun County?", acceptedAnswer: { "@type": "Answer", text: "Loudoun County deck permits typically cost between $150 and $500. The fee is a calculation based on the construction value of your project. At Loudoun Decks, we handle all submission fees as part of our full-service management." } },
    { "@type": "Question", name: "What is LandMARC in Loudoun County?", acceptedAnswer: { "@type": "Answer", text: "LandMARC is Loudoun County's modern digital portal for all land applications and building permits. It replaced the older LOLA system and requires high-fidelity digital architectural plans for submission." } },
    { "@type": "Question", name: "What are the structural requirements for composite decks in 2026?", acceptedAnswer: { "@type": "Answer", text: "For 2026, we recommend 12-inch on-center joist spacing for all composite decks to ensure a rigid, premium feel. Additionally, all footings must be 24 inches deep, and ledger boards must use tension-tie lateral load connectors." } },
  ],
};

const S = {
  h2: { fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-dark)' },
  h3: { fontSize: '1.4rem', fontWeight: 600, margin: '2rem 0 1rem', color: 'var(--color-primary)' },
  p: { marginBottom: '1.25rem', lineHeight: 1.8, color: '#444' },
  th: { padding: '1rem', textAlign: 'left', borderBottom: '2px solid #ddd', background: '#f8f9fa', fontWeight: 700 },
  td: { padding: '1rem', borderBottom: '1px solid #eee' },
};

export default function LoudounPermitPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Loudoun County Deck Permit Guide 2026: The LandMARC Blueprint"
        description="The ultimate guide to obtaining a deck permit in Loudoun County for 2026. Walkthrough of LandMARC, 24-inch footings, and structural codes."
        path="/deck-permit-loudoun-county-virginia"
        image="/images/blog-permit-guide.png"
        datePublished="2026-04-21"
        dateModified="2026-05-13"
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/img20.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', padding: '6rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>Loudoun County Deck Permit Guide (2026)</h1>
          <p style={{ color: '#eee', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>Navigating the LandMARC Portal, 2021 VRC Structural Codes, and HOA Approvals for a 100% Approval Rate.</p>
        </div>
      </section>

      {/* Quick Answer */}
      <section data-speakable="true" style={{ background: '#fdf2f2', borderBottom: '1px solid #fee2e2', padding: '2rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 500px' }}>
            <p style={{ fontWeight: 800, marginBottom: '0.5rem', color: 'var(--color-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Quick Summary:</p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}><strong>Yes, you need a permit.</strong> Any deck attached to a house, over 200 sqft, or more than 30&quot; above grade requires a permit. The process takes <strong>3–6 weeks</strong> via the LandMARC portal. <strong>Loudoun Decks handles the entire process</strong>—from digital drafting to final structural inspection.</p>
          </div>
          <a href="tel:+15716557207" style={{ background: 'var(--color-primary)', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, whiteSpace: 'nowrap' }}>Call for Guidance</a>
        </div>
      </section>

      <article style={{ padding: '4rem 0', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Intro Section */}
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={S.h2}>The 2026 LandMARC Transition</h2>
            <p style={S.p}>Loudoun County has officially retired the LOLA system in favor of the <strong>LandMARC portal</strong>. This digital-first approach means that the county no longer accepts hand-drawn sketches or paper applications. For 2026, all submissions must include high-fidelity, CAD-designed architectural plans in PDF format.</p>
            <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '16px', overflow: 'hidden', margin: '2rem 0', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <Image
                src="/images/permit-portal.png"
                alt="Loudoun County LandMARC digital permit portal interface"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 900px) 100vw, 900px"
              />
            </div>
            <p style={S.p}>At Loudoun Decks, we utilize professional architectural software to generate these digital blueprints, ensuring that your zoning setbacks, structural loads, and safety features are clearly articulated to county reviewers, minimizing "Correction Notices" and delays.</p>
          </div>

          {/* ===== SECTION 1: When Required ===== */}
          <h2 style={S.h2}>When Is a Deck Permit Required?</h2>
          <p style={S.p}>Under the 2021 Virginia Residential Code (enforced in 2026), a building permit is mandatory if your project meets <strong>any</strong> of the following:</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { t: 'Attached to Home', d: 'Any deck connected via a ledger board requires structural verification.' },
              { t: 'Over 200 Sq Ft', d: 'Large footprints require verified footing and beam calculations.' },
              { t: '30" Above Grade', d: 'Elevated platforms require life-safety guardrails and stairs.' },
              { t: 'Concentrated Loads', d: 'Hot tubs and kitchens require reinforced framing plans.' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#f8f9fa', padding: '1.5rem', borderRadius: '12px', border: '1px solid #eee' }}>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{item.t}</h4>
                <p style={{ fontSize: '0.9rem', margin: 0, color: '#666' }}>{item.d}</p>
              </div>
            ))}
          </div>

          {/* ===== SECTION 2: Structural Standards ===== */}
          <h2 style={S.h2}>2026 Structural Standards</h2>
          <p style={S.p}>Passing a Loudoun County inspection in 2026 requires strict adherence to these technical specifications:</p>
          
          <h3 style={S.h3}>The 24-Inch Frost Line</h3>
          <p style={S.p}>All deck footings must be excavated to a minimum depth of <strong>24 inches</strong>. This ensures the concrete base sits below the Virginia frost line, preventing "heaving" where the ground expands and lifts the deck during freezing cycles.</p>

          <h3 style={S.h3}>Lateral Load Connectors (Tension Ties)</h3>
          <p style={S.p}>Modern code mandates that decks be tied directly to the house&apos;s internal floor joists using tension-tie connectors. This prevents the deck from pulling away from the house under heavy loads—the #1 cause of deck collapse.</p>

          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '16px', overflow: 'hidden', margin: '3rem 0' }}>
            <Image
              src="/images/blog-permit-guide.png"
              alt="Professional deck blueprint and permit approval tablet"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>

          <h3 style={S.h3}>Composite-Specific Joist Spacing</h3>
          <p style={S.p}>While code allows 16-inch spacing for many materials, composite decking (Trex/TimberTech) is significantly heavier. We specify <strong>12-inch on-center spacing</strong> to eliminate the "bouncing" feeling and provide a rigid, premium surface that lasts for decades.</p>

          {/* ===== SECTION 3: Inspections ===== */}
          <h2 style={{ ...S.h2, marginTop: '4rem' }}>The Three-Step Inspection Process</h2>
          <p style={S.p}>Loudoun County requires three distinct field inspections. We coordinate and attend every one of these for our clients:</p>

          <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
            {[
              {
                title: 'Footing Inspection',
                desc: 'Verified before concrete is poured. Ensures depth (24") and soil stability match LandMARC plans.'
              },
              {
                title: 'Framing Inspection',
                desc: 'The most critical check. Covers ledger flashing, joist hangers, and beam-to-post connections.'
              },
              {
                title: 'Final Life-Safety',
                desc: 'Verifies railing height (36"), baluster spacing (4" max), and stair handrail compliance.'
              }
            ].map((insp, i) => (
              <div key={i} style={{ display: 'flex', gap: '1.5rem', background: '#fcfcfc', padding: '1.5rem', borderRadius: '12px', border: '1px solid #f0f0f0' }}>
                <div style={{ background: 'var(--color-primary)', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.25rem' }}>{insp.title}</h4>
                  <p style={{ margin: 0, color: '#555', fontSize: '0.95rem' }}>{insp.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: 'relative', width: '100%', height: '450px', borderRadius: '16px', overflow: 'hidden', marginBottom: '4rem' }}>
            <Image
              src="/images/deck-inspection.png"
              alt="Professional Loudoun County building inspector checking deck joist hangers"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>

          {/* ===== SECTION 4: Costs & Timeline ===== */}
          <h2 style={S.h2}>Timeline & Permit Fees</h2>
          <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr>
                  {['Permit Phase', 'Typical Duration', 'Est. County Fee'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['HOA Architectural Review', '2–4 Weeks', '$0 – $50'],
                  ['LandMARC Zoning Review', '1–2 Weeks', 'Included in Building'],
                  ['Structural Review', '1–2 Weeks', '$150 – $500'],
                  ['Final Issuance', '48 Hours', '$0'],
                ].map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => <td key={j} style={S.td}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: 'var(--color-dark)', color: '#fff', borderRadius: '16px', padding: '3rem', textAlign: 'center' }}>
            <h3 style={{ color: '#fff', fontSize: '1.8rem', marginTop: 0 }}>Zero-Friction Permitting</h3>
            <p style={{ color: '#ccc', maxWidth: '600px', margin: '0 auto 2rem' }}>When you build with Loudoun Decks, we prepare every document, navigate LandMARC, and coordinate with your HOA. We handle the red tape so you can focus on your design.</p>
            <Link href="/contact" style={{ background: 'var(--color-primary)', color: '#fff', padding: '1rem 2.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, display: 'inline-block' }}>Start Your Design Blueprint</Link>
          </div>

          {/* Related Guides */}
          <h2 style={{ ...S.h2, marginTop: '5rem' }}>Related Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              ['/hoa-deck-rules-northern-virginia', 'HOA Rules Guide'],
              ['/how-much-does-a-deck-cost-northern-virginia', 'Cost Guide 2026'],
              ['/deck-permit-fairfax-county-virginia', 'Fairfax Permit Guide'],
              ['/composite-deck-vs-wood-deck-virginia', 'Material Comparison'],
            ].map(([href, text]) => (
              <Link key={href} href={href} style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none', background: '#f8f9fa', padding: '1rem', borderRadius: '8px', border: '1px solid #eee', textAlign: 'center' }}>{text} →</Link>
            ))}
          </div>

        </div>
      </article>

      <SimpleCTA title="Ready to Build in Loudoun?" buttonText="Get Your Blueprint Started" link="/contact" />
      <RelatedGuides currentPath="/deck-permit-loudoun-county-virginia" />
      <ContactHome />
    </>
  );
}

      <ContactHome />
    </>
  );
}
