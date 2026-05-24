import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import ArticleSchema from '@/components/ArticleSchema';
import SimpleCTA from '@/components/SimpleCTA';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import { buildMetadata } from '@/lib/seo';
import CallLink from '@/components/CallLink';

export const metadata = buildMetadata({
  path: '/loudoun-county-hoa-deck-rules',
  title: 'Loudoun County HOA Deck Rules | Community Guide',
  description: 'HOA deck rules for Brambleton, Broadlands, One Loudoun, Ashburn Farm, Lansdowne & more. Color restrictions, material requirements, approval process.',
  image: '/images/img08.jpeg',
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Do I need HOA approval to build a deck in Loudoun County?", acceptedAnswer: { "@type": "Answer", text: "Yes. Virtually every HOA in Loudoun County requires architectural review committee (ARC) approval before any exterior modification, including decks. The approval process typically takes 2-6 weeks depending on the community. Building without approval can result in fines, forced removal, or liens on your property." } },
    { "@type": "Question", name: "What do Loudoun County HOAs typically require in a deck submission?", acceptedAnswer: { "@type": "Answer", text: "Most require: a completed ARC application form, scaled site plan showing deck location and setbacks, construction drawings with dimensions, material and color specifications with samples, contractor information and license number, and sometimes neighbor notification. We prepare all of these documents as part of our service." } },
    { "@type": "Question", name: "Can my HOA force me to use a specific deck material or color?", acceptedAnswer: { "@type": "Answer", text: "Yes. HOAs have broad authority to restrict materials and colors. Many Loudoun County communities require composite decking and limit colors to earth tones. Some specify exact approved product lines or color names. These restrictions are legally enforceable through your HOA covenants." } },
    { "@type": "Question", name: "What happens if I build a deck without HOA approval in Loudoun County?", acceptedAnswer: { "@type": "Answer", text: "Consequences range from fines ($50-$200/day in some communities) to forced removal of the structure. The HOA can place a lien on your property for unpaid fines. When you sell, title companies flag unapproved structures, which can delay or kill deals. It's never worth skipping the approval process." } },
    { "@type": "Question", name: "How long does HOA deck approval take in Loudoun County?", acceptedAnswer: { "@type": "Answer", text: "Typically 2-6 weeks. Brambleton and Broadlands average 3-4 weeks. One Loudoun is often faster at 2-3 weeks. Some smaller HOAs with monthly ARC meetings may take 4-6 weeks if you miss the submission deadline. We submit applications immediately after signing your contract to minimize delays." } },
    { "@type": "Question", name: "Does LDN Decks handle the HOA approval process?", acceptedAnswer: { "@type": "Answer", text: "Yes, 100%. We prepare all submission documents including site plans, construction drawings, material specifications, and color samples. We submit on your behalf, respond to any ARC questions, and attend review meetings if needed. We have a 100% approval rate across Loudoun County HOAs." } },
  ],
};

const S = {
  h2: { fontSize: '1.8rem', fontWeight: 700, marginBottom: '1.5rem' },
  h3: { fontSize: '1.2rem', fontWeight: 600, margin: '1.5rem 0 0.5rem' },
  p: { marginBottom: '1rem', lineHeight: 1.7 },
  th: { padding: '0.75rem', textAlign: 'left', borderBottom: '2px solid #ddd' },
  td: { padding: '0.75rem', borderBottom: '1px solid #eee' },
};

export default function LoudounCountyHOADeckRulesPage() {
  return (
    <>
      <JsonLd data={faqSchema} />
      <ArticleSchema
        title="Loudoun County HOA Deck Rules: Community-by-Community Guide"
        description="HOA deck rules for every major Loudoun County community. Color restrictions, material requirements, approval timelines, and how we handle submissions."
        path="/loudoun-county-hoa-deck-rules"
        image="/images/img08.jpeg"
        datePublished="2026-04-26"
        dateModified="2026-04-26"
      />

      {/* Hero */}
      <section style={{ background: 'var(--color-dark)', color: '#fff', padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>Loudoun County HOA Deck Rules (2026)</h1>
          <p style={{ color: '#ccc', fontSize: '1.1rem' }}>Community-by-community guide: Brambleton, Broadlands, One Loudoun, Ashburn Farm &amp; more</p>
        </div>
      </section>

      {/* Quick Answer */}
      <section data-speakable="true" style={{ background: '#fff3e0', borderLeft: '4px solid var(--color-primary)', padding: '1.5rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>
          <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Quick Answer:</p>
          <p>Most Loudoun County HOAs require <strong>architectural review committee (ARC) approval before building a deck</strong>. Approval takes 2&ndash;6 weeks depending on the community. Common restrictions include color limitations (earth tones only), material requirements (composite preferred or required), and height/setback rules. We handle <strong>100% of the HOA submission process</strong> and have a 100% approval rate across Loudoun County communities. <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call (571) 655-7207</CallLink> to get started.</p>
        </div>
      </section>

      <article style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem' }}>

          {/* Hero Image */}
          <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem' }}>
            <Image
              src="/images/img08.jpeg"
              alt="HOA-approved composite deck in a Loudoun County community — Brambleton, Virginia"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 900px) 100vw, 900px"
              quality={70}
              priority
            />
          </div>

          {/* ===== SECTION 1: Intro ===== */}
          <p style={S.p}>If you live in Loudoun County, there is a very high probability your home is governed by a homeowners association. Loudoun is one of the most HOA-dense counties in Virginia, with communities ranging from small townhome associations with 50 homes to massive planned communities like Brambleton (15,000+ homes) and Broadlands (6,000+ homes). Each has its own architectural review process, and each has specific rules about what you can and cannot build on your property.</p>
          <p style={S.p}>The good news: HOA restrictions don&apos;t prevent you from building a beautiful deck. They simply define the parameters. We&apos;ve worked with every major HOA in Loudoun County and have a 100% approval rate &mdash; not because we get lucky, but because we know exactly what each community&apos;s ARC expects and design accordingly from day one.</p>
          <p style={S.p}>This guide covers the specific rules for the 12 largest Loudoun County communities, the general approval process, common rejection reasons, and how we handle every step of the submission on your behalf.</p>

          {/* ===== SECTION 2: Community-by-Community Table ===== */}
          <h2 style={S.h2}>HOA Deck Rules by Community</h2>
          <p style={S.p}>Below is our collected data on the most common Loudoun County HOAs. Note that rules can change &mdash; we verify current guidelines with each ARC before every submission.</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', minWidth: '800px' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Community', 'Color Restrictions', 'Material Rules', 'Height Limits', 'Approval Timeline', 'Our Experience'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Brambleton', 'Earth tones only; must match home exterior', 'Composite strongly preferred', 'Cannot exceed roofline', '3–4 weeks', '50+ decks built'],
                  ['Broadlands', 'Neutral/earth palette; dark browns approved', 'Composite or wood (composite preferred)', 'Standard height restrictions', '3–4 weeks', '40+ decks built'],
                  ['Ashburn Farm', 'Earth tones; limited gray options', 'Wood or composite accepted', 'Must stay within setbacks', '2–4 weeks', '30+ decks built'],
                  ['One Loudoun', 'Modern palette; some grays approved', 'Composite required', 'Per unit type (TH vs SFH)', '2–3 weeks', '20+ decks built'],
                  ['Lansdowne', 'Conservative palette; browns preferred', 'Composite strongly preferred', 'Detailed in covenants', '3–4 weeks', '25+ decks built'],
                  ['South Riding', 'Earth tones only', 'Composite or cedar accepted', 'Standard zoning setbacks', '3–5 weeks', '35+ decks built'],
                  ['Stone Ridge', 'Neutral earth tones', 'Composite preferred', 'Standard restrictions', '3–4 weeks', '20+ decks built'],
                  ['Moorefield Station', 'Modern earth palette', 'Composite required for new builds', 'Per lot/unit type', '2–3 weeks', '15+ decks built'],
                  ['Belmont Country Club', 'Premium earth tones; strict', 'Composite or IPE required', 'Strict height/size limits', '4–6 weeks', '10+ decks built'],
                  ['Ashburn Village', 'Earth tones; standard palette', 'Wood or composite accepted', 'Standard setbacks', '2–4 weeks', '25+ decks built'],
                  ['Loudoun Valley', 'Neutral palette', 'Composite preferred', 'Standard restrictions', '3–4 weeks', '15+ decks built'],
                  ['Willowsford', 'Premium palette; specific Trex colors listed', 'Composite required', 'Strict — per lot plan', '4–6 weeks', '10+ decks built'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ ...S.p, fontSize: '0.85rem', color: '#777' }}>This data reflects our direct experience and may not capture every recent policy change. We verify current ARC guidelines before every submission. Don&apos;t see your community? <CallLink style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Call us</CallLink> — we likely have experience with your HOA.</p>

          {/* ===== SECTION 3: General HOA Submission Process ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>The HOA Submission Process: What Documents Are Needed</h2>
          <p style={S.p}>While every HOA has its own specific application form, the required documentation is remarkably consistent across Loudoun County communities. Here is what a complete submission package typically includes:</p>

          <h3 style={S.h3}>1. ARC Application Form</h3>
          <p style={S.p}>Each community provides its own architectural review application. We maintain current versions of applications for every major Loudoun County HOA and complete them on your behalf.</p>

          <h3 style={S.h3}>2. Scaled Site Plan</h3>
          <p style={S.p}>A bird&apos;s-eye view drawing showing your home, the proposed deck location, property lines, and setback measurements. This demonstrates that the deck complies with zoning and community setback requirements. We prepare this from your property survey or county GIS data.</p>

          <h3 style={S.h3}>3. Construction Drawings</h3>
          <p style={S.p}>Detailed plans showing deck dimensions, railing height, stair locations, and structural details. For elevated decks, engineering drawings may be required. We produce professional-grade drawings that exceed most ARC requirements.</p>

          <h3 style={S.h3}>4. Material and Color Specifications</h3>
          <p style={S.p}>The specific brand, product line, and color name for every visible material: decking boards, railing system, post caps, and any fascia or trim. Many ARCs require physical color samples or manufacturer color cards. We provide these with every submission.</p>

          <h3 style={S.h3}>5. Contractor Information</h3>
          <p style={S.p}>License number, insurance certificate, and contact information. Some HOAs require proof of a valid Virginia Class A or B contractor license. Our Class A license and comprehensive insurance coverage satisfy every Loudoun County HOA requirement.</p>

          <h3 style={S.h3}>6. Neighbor Notification</h3>
          <p style={S.p}>Some communities (Brambleton, Belmont, Willowsford) require that adjacent neighbors be notified before submission. The HOA typically provides a notification form. We handle this step when required.</p>

          {/* ===== SECTION 4: Common Rejection Reasons ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Common HOA Rejection Reasons (and How to Avoid Them)</h2>
          <p style={S.p}>We maintain our 100% approval rate by avoiding the mistakes that get other contractors&apos; submissions rejected:</p>

          <h3 style={S.h3}>Wrong Color Selection</h3>
          <p style={S.p}>The number-one rejection reason. Homeowners (or their contractors) choose a decking color that isn&apos;t on the HOA&apos;s approved palette. In Brambleton, for example, the ARC maintains a specific list of acceptable Trex colors &mdash; submit anything else and it&apos;s automatically rejected. We verify approved colors before design begins.</p>

          <h3 style={S.h3}>Incomplete Submissions</h3>
          <p style={S.p}>Missing a site plan, forgetting to include color samples, or submitting a form without contractor license information results in rejection and restart of the review cycle (adding 2&ndash;4 weeks). Our submission packages are complete on first submission, every time.</p>

          <h3 style={S.h3}>Setback Violations</h3>
          <p style={S.p}>Proposing a deck that extends too close to property lines or easements. Setback requirements vary by community and lot type. We calculate setbacks before design and never submit plans that violate them.</p>

          <h3 style={S.h3}>Height or Size Exceeds Community Standards</h3>
          <p style={S.p}>Some communities cap deck size as a percentage of yard area, or restrict structures from exceeding the home&apos;s roofline. Understanding these limits before design prevents costly redesigns after rejection.</p>

          <h3 style={S.h3}>Material Not Approved</h3>
          <p style={S.p}>Proposing pressure-treated wood in a community that requires composite, or specifying a non-approved railing system. As composite-focused builders, this rarely affects our submissions &mdash; but we verify material requirements regardless.</p>

          {/* ===== SECTION 5: Our 100% Approval Rate ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Our 100% HOA Approval Rate: How We Achieve It</h2>
          <p style={S.p}>A 100% approval rate doesn&apos;t happen by accident. Here is our process:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2 }}>
            <li><strong>Pre-design research:</strong> Before we draw a single line, we pull your community&apos;s current ARC guidelines, approved color palettes, and any recent rule changes.</li>
            <li><strong>Design within constraints:</strong> We design your deck to maximize your space and vision while respecting every HOA requirement. If a restriction conflicts with your goals, we discuss alternatives before investing in plans.</li>
            <li><strong>Complete documentation:</strong> Every submission includes every required document, properly formatted, with physical samples when requested. ARCs appreciate professional submissions &mdash; it signals that the project will be executed professionally.</li>
            <li><strong>Relationship management:</strong> We&apos;ve built relationships with ARC administrators across Loudoun County. They know our work, trust our submissions, and contact us directly if questions arise rather than issuing rejections.</li>
            <li><strong>Rapid response:</strong> If an ARC requests modifications or additional information, we respond within 24 hours to keep the review moving.</li>
          </ul>

          {/* ===== SECTION 6: HOA vs County Permit ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>HOA Approval vs. County Permit: What Comes First?</h2>
          <p style={S.p}>This is one of the most common questions we hear, and the answer matters for your timeline:</p>

          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: '#f5f5f5' }}>
                  {['Factor', 'HOA Approval', 'County Building Permit'].map(h => <th key={h} style={S.th}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Purpose', 'Aesthetic and community standards', 'Structural safety and code compliance'],
                  ['Required by', 'Your HOA covenants (private)', 'Loudoun County (government)'],
                  ['What they review', 'Colors, materials, size, location', 'Engineering, footings, framing, connections'],
                  ['Timeline', '2–6 weeks', '2–4 weeks'],
                  ['Cost', 'Free (usually)', '$200–$500'],
                  ['Order', 'Submit first', 'Submit after HOA approves (or simultaneously)'],
                  ['Inspections', 'None (some do final review)', 'Foundation, framing, final'],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 ? '#fafafa' : '#fff' }}>
                    {row.map((cell, j) => <td key={j} style={{ ...S.td, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={S.p}><strong>Our approach:</strong> We typically submit the HOA application first, then submit the county permit application while HOA review is underway. This overlapping approach saves 2&ndash;3 weeks compared to sequential submissions. Both must be approved before we start building. See our <Link href="/deck-permit-loudoun-county-virginia" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loudoun County permit guide</Link> for the full county process.</p>

          {/* ===== SECTION 7: When to Push Back ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>When to Push Back on HOA Restrictions</h2>
          <p style={S.p}>While we always design within HOA guidelines, there are situations where pushing back is appropriate:</p>

          <h3 style={S.h3}>Outdated Color Palettes</h3>
          <p style={S.p}>Some HOAs haven&apos;t updated their approved color lists in years. If the palette doesn&apos;t include current Trex or TimberTech colors, we can petition the ARC to add modern options. We&apos;ve successfully expanded approved palettes in Brambleton, South Riding, and Ashburn Farm by providing manufacturer color cards and demonstrating that new colors complement the community aesthetic.</p>

          <h3 style={S.h3}>Unreasonable Size Restrictions</h3>
          <p style={S.p}>If your HOA limits deck size to a point that makes the project impractical (e.g., 100 sqft maximum when your home backs to a wooded lot with no neighbors in view), a variance request is worth pursuing. We can prepare variance documentation that demonstrates the project&apos;s minimal impact on neighboring properties.</p>

          <h3 style={S.h3}>Material Requirements That No Longer Make Sense</h3>
          <p style={S.p}>A few older HOAs still require wood decking. Given that composite is now the industry standard and delivers better longevity, lower maintenance, and a more consistent appearance, petitioning for composite approval often succeeds when supported by manufacturer documentation.</p>

          {/* ===== SECTION 8: Sample Submission Package ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>What Our HOA Submission Package Includes</h2>
          <p style={S.p}>Every LDN Decks project in an HOA community includes a professional submission package at no additional cost. Here is what&apos;s in it:</p>
          <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem', lineHeight: 2.2 }}>
            <li>Completed ARC application form (community-specific)</li>
            <li>Scaled site plan with deck footprint, setbacks, and property lines</li>
            <li>Detailed construction drawings (plan view and elevation)</li>
            <li>Material specification sheet (brand, line, color, SKU)</li>
            <li>Physical color samples or manufacturer color cards</li>
            <li>Railing system specifications</li>
            <li>Contractor license and insurance certificates</li>
            <li>Neighbor notification forms (when required)</li>
            <li>Cover letter summarizing the project scope</li>
          </ul>
          <p style={S.p}>This level of documentation is one of the reasons ARCs approve our submissions quickly and consistently. It also gives you a complete record for your files and future resale documentation.</p>

          {/* ===== SECTION 9: Tips for HOA Success ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>5 Tips for a Smooth HOA Approval Process</h2>

          <h3 style={S.h3}>1. Start Early</h3>
          <p style={S.p}>Submit your HOA application 6&ndash;8 weeks before your desired build start date. This gives time for the review cycle, any requested revisions, and county permit processing.</p>

          <h3 style={S.h3}>2. Attend Your ARC Meeting (If Possible)</h3>
          <p style={S.p}>Some communities allow or encourage applicants to present their project at the ARC meeting. We&apos;re happy to attend with you &mdash; our presence often answers technical questions on the spot and prevents delays.</p>

          <h3 style={S.h3}>3. Talk to Your Neighbors</h3>
          <p style={S.p}>Even when not required, giving adjacent neighbors a heads-up about your project builds goodwill and prevents objections at the ARC level. Most neighbors are supportive when they know what to expect.</p>

          <h3 style={S.h3}>4. Choose a Contractor with HOA Experience</h3>
          <p style={S.p}>Contractors without HOA experience submit incomplete applications, choose non-approved colors, and cause delays that push your project into the next season. Our track record across every major Loudoun County HOA eliminates this risk.</p>

          <h3 style={S.h3}>5. Keep Approval Letters Forever</h3>
          <p style={S.p}>Store your HOA approval letter with your home&apos;s important documents. You&apos;ll need it at resale to prove the deck was properly approved. We provide digital copies of all approval documentation.</p>

          {/* ===== SECTION 10: FAQs ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Frequently Asked Questions</h2>
          {[
            { q: "Do I need HOA approval to build a deck in Loudoun County?", a: "Yes. Virtually every Loudoun County HOA requires ARC approval before any exterior modification. Building without approval can result in fines ($50-$200/day), forced removal, or liens on your property." },
            { q: "What documents does an HOA require for deck approval?", a: "Typically: ARC application form, scaled site plan, construction drawings, material and color specifications with samples, contractor license and insurance, and sometimes neighbor notification. We prepare everything." },
            { q: "Can my HOA force me to use specific materials or colors?", a: "Yes. HOAs have broad authority under Virginia law to restrict materials and colors. Many Loudoun communities require composite and limit colors to earth tones. These restrictions are enforceable through your covenants." },
            { q: "What happens if I build without HOA approval?", a: "Fines ($50-$200/day in some communities), forced removal, and liens on your property. Unapproved structures also flag at resale, potentially killing deals. It's never worth the risk." },
            { q: "How long does HOA approval take?", a: "2-6 weeks depending on the community. Brambleton and Broadlands average 3-4 weeks. One Loudoun is often 2-3 weeks. We submit immediately after contract signing to minimize delays." },
            { q: "Does LDN Decks handle the entire HOA process?", a: "Yes, 100%. We prepare all documents, submit on your behalf, respond to ARC questions, and attend meetings if needed. We have a 100% approval rate across all Loudoun County HOAs we've worked with." },
          ].map((faq, i) => (
            <details key={i} style={{ border: '1px solid #e5e5e5', borderRadius: 8, padding: '1.25rem', marginBottom: '0.75rem' }}>
              <summary style={{ fontWeight: 600, cursor: 'pointer', fontSize: '1.05rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', lineHeight: 1.7, color: '#555' }}>{faq.a}</p>
            </details>
          ))}

          {/* ===== Related Guides ===== */}
          <h2 style={{ ...S.h2, marginTop: '2.5rem' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/hoa-deck-rules-northern-virginia', 'HOA Deck Rules Across Northern Virginia'],
              ['/brambleton-hoa-deck-rules', 'Brambleton HOA Deck Rules'],
              ['/ashburn-village-hoa-deck-rules', 'Ashburn Village HOA Deck Rules'],
              ['/broadlands-hoa-deck-rules', 'Broadlands HOA Deck Rules'],
              ['/deck-permit-loudoun-county-virginia', 'Loudoun County Deck Permit Guide'],
              ['/deck-builder-ashburn-va', 'Deck Builder in Ashburn, VA'],
              ['/deck-builder-brambleton-va', 'Deck Builder in Brambleton, VA'],
              ['/deck-builder-south-riding-va', 'Deck Builder in South Riding, VA'],
              ['/how-to-choose-a-deck-builder-northern-virginia', 'How to Choose a Deck Builder'],
            ].map(([href, text]) => (
              <li key={href} style={{ marginBottom: '0.5rem' }}>
                <Link href={href} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{text} &rarr;</Link>
              </li>
            ))}
          </ul>

        </div>
      </article>

      <SimpleCTA title="Build an HOA-Approved Deck" buttonText="Get Free Estimate" link="/contact" />
      <RelatedGuides currentPath="/loudoun-county-hoa-deck-rules" />
      <ContactHome />
    </>
  );
}
