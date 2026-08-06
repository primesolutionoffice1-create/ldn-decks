import React from 'react';
import Link from 'next/link';
import ServicesHeader from '@/components/ServicesHeader';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';
import JsonLd from '@/components/JsonLd';

export const metadata = buildMetadata({
  path: "/about/warranty",
  title: "Written Labor Warranty Terms | LDN Decks",
  description: "Learn how Loudoun Decks documents workmanship warranty terms, manufacturer material coverage, and service expectations in project paperwork.",
  image: "/social/deck-warranty-labor-social.png",
});

const warrantyFacts = [
  '2 paths matter on most composite projects: contractor workmanship review and manufacturer material coverage.',
  '4 categories are commonly reviewed: workmanship, manufacturer product issue, maintenance/weather condition, and homeowner or third-party modification.',
  '6 documents make a review cleaner: signed scope, change orders, product selections, manufacturer paperwork, photos, and written service notes.',
  'Workmanship warranty terms should be documented in the signed project paperwork before construction begins.',
  'Manufacturer material warranties are separate from LDN Decks workmanship terms and vary by product line.',
  'Warranty review is strongest when the homeowner can provide photos, dates, product selections, and the original written scope.',
  'Storm damage, homeowner modifications, normal aging, lack of maintenance, and manufacturer material defects are reviewed differently from workmanship concerns.',
];

const serviceSteps = [
  'Step 1: Review the signed agreement and manufacturer paperwork so the concern is routed to the right coverage path.',
  'Step 2: Send photos, date noticed, affected area, and a short description of the concern.',
  'Step 3: LDN Decks reviews whether the issue appears related to workmanship, material coverage, maintenance, site movement, weather, or third-party modification.',
  'Step 4: If a service visit is appropriate, the next step is scheduled and documented before corrective work begins.',
];

const warrantyFaqs = [
  {
    q: 'What is a written deck labor warranty?',
    a: 'A written deck labor warranty is the workmanship coverage described in the project paperwork. It explains which installation-related issues may be reviewed by the contractor and which items fall under manufacturer coverage, maintenance, weather, or homeowner changes.',
  },
  {
    q: 'Is the manufacturer warranty the same as the contractor labor warranty?',
    a: 'No. Manufacturer warranties generally relate to the product itself, while contractor labor warranty terms relate to installation workmanship. The signed project documents and manufacturer literature should be reviewed together.',
  },
  {
    q: 'What should I save after my deck project is finished?',
    a: 'Save the signed agreement, change orders, product selections, manufacturer documents, inspection records if applicable, photos, and any written service communication.',
  },
  {
    q: 'Can every deck issue be handled as warranty work?',
    a: 'No. Normal aging, weathering, storm damage, homeowner modifications, lack of maintenance, site movement, and manufacturer material defects may fall outside workmanship coverage or follow a different review path.',
  },
];

export default function WarrantyPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://ldndecks.com/about/warranty#faq",
    "mainEntity": warrantyFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  return (
    <main>
      <WebPageSchema dateModified="2026-06-02" url="https://ldndecks.com/about/warranty" name="Written Labor Warranty Terms | LDN Decks" description="Learn how Loudoun Decks documents workmanship warranty terms, manufacturer material coverage, and service expectations in project paperwork." speakable />
      <JsonLd data={faqSchema} />
       <ServicesHeader 
         subtext="OUR PROMISE"
         title="LDN DECKS WRITTEN LABOR WARRANTY TERMS"
         description="Workmanship warranty terms are documented in the project paperwork so homeowners can review the scope, coverage, exclusions, and service process before signing."
       />

       <section style={{ padding: '80px 20px', background: '#fff' }}>
         <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <section style={{ marginBottom: '56px' }} aria-labelledby="warranty-definition">
              <p style={{ margin: '0 0 10px', color: '#d14817', fontSize: '13px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Warranty clarity
              </p>
              <h2 id="warranty-definition" style={{ fontSize: '32px', fontWeight: '800', marginBottom: '18px', color: '#111' }}>
                What a written deck labor warranty means
              </h2>
              <p data-speakable style={{ fontSize: '18px', color: '#444', lineHeight: 1.75, marginBottom: '18px' }}>
                A written deck labor warranty is the workmanship coverage described in the project paperwork. It helps the homeowner understand which installation-related concerns can be reviewed by LDN Decks, which product issues may belong to the manufacturer warranty, and which conditions are normally treated as maintenance, weather, site movement, or owner-change issues.
              </p>
              <p style={{ fontSize: '18px', color: '#444', lineHeight: 1.75, marginBottom: '18px' }}>
                For a premium deck, screened porch, resurfacing project, or composite replacement in Northern Virginia,
                warranty clarity should be handled before construction starts. Homeowners should know who reviews a
                workmanship concern, when the manufacturer should be contacted, what evidence is helpful, and which
                exclusions are normal for outdoor structures exposed to sun, rain, freeze-thaw cycles, soil movement,
                storms, and daily use.
              </p>
              <p style={{ fontSize: '18px', color: '#444', lineHeight: 1.75, marginBottom: '18px' }}>
                LDN Decks avoids vague verbal promises. The reliable path is written documentation: the proposal,
                product selections, change orders, project photos, permit or inspection records when applicable, and
                manufacturer warranty literature. This makes future questions easier to route and reduces confusion
                between workmanship, material performance, maintenance, and damage outside the original scope.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                {warrantyFacts.map((fact) => (
                  <article key={fact} style={{ border: '1px solid #e5e7eb', borderRadius: 8, background: '#fafafa', padding: '18px' }}>
                    <p style={{ margin: 0, color: '#444', lineHeight: 1.6 }}>{fact}</p>
                  </article>
                ))}
              </div>
            </section>

            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
               <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>Covered vs not covered: deck labor warranty comparison</h2>
               <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                 Written warranty terms clarify which workmanship-related issues are covered after installation,
                 which manufacturer material warranties apply, and what service steps a homeowner should follow if a
                 concern appears.
               </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
               {/* Typically Covered */}
               <div style={{ background: '#f8fdf8', padding: '40px', borderRadius: '16px', border: '1px solid #e1f0e1' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px', fontWeight: '700', color: '#2e7d32', marginBottom: '25px' }}>
                     Typically Covered
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                     {[
                        "Loose or improperly fastened boards",
                        "Railings that loosen due to installation issues",
                        "Stair movement related to workmanship",
                        "Structural adjustments tied to installation",
                        "Screen porch framing alignment issues",
                        "Door adjustments (settling related to install)",
                        "Trim or finishing items installed by our crew",
                        "Minor settling corrections tied to labor"
                     ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '15px', fontSize: '16px', color: '#333', lineHeight: '1.4' }}>
                           <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>-</span>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Not Typically Covered */}
               <div style={{ background: '#fff9f9', padding: '40px', borderRadius: '16px', border: '1px solid #fce4e4' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px', fontWeight: '700', color: '#c62828', marginBottom: '25px' }}>
                     Not Typically Covered
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                     {[
                        "Normal wood movement (shrinkage, expansion, checking)",
                        "Weathering, fading, or natural aging",
                        "Damage from homeowner modifications",
                        "Acts of nature (storms, fallen trees, etc.)",
                        "Material defects (covered by manufacturer warranties)",
                        "Lack of maintenance",
                        "Ground movement unrelated to installation"
                     ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '15px', fontSize: '16px', color: '#333', lineHeight: '1.4' }}>
                           <span style={{ color: '#c62828', fontWeight: 'bold' }}>-</span>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* Why Written Terms Matter */}
            <div style={{ background: '#111', color: '#fff', padding: '60px', borderRadius: '24px', marginBottom: '60px' }}>
               <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '30px', textAlign: 'center' }}>Why Written Warranty Terms Matter</h2>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                  {[
                     { title: "Clear Scope", text: "The signed paperwork should identify whether the issue is workmanship, manufacturer material coverage, maintenance, or site movement." },
                     { title: "Service Path", text: "Homeowners know who to contact, what information to provide, and how a service review is handled." },
                     { title: "Manufacturer Coverage", text: "Composite, PVC, railing, lighting, and accessory warranties can vary by product line and must be reviewed separately." },
                     { title: "No Guesswork", text: "Durations, exclusions, and limits belong in writing, not in verbal summaries or marketing shorthand." }
                  ].map((item, i) => (
                     <div key={i} style={{ textAlign: 'left' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#B58E3B', marginBottom: '10px' }}>{item.title}</h4>
                        <p style={{ fontSize: '15px', color: '#ccc', lineHeight: '1.5' }}>{item.text}</p>
                     </div>
                  ))}
               </div>
            </div>

            <section style={{ marginBottom: '60px' }} aria-labelledby="warranty-service-process">
              <h2 id="warranty-service-process" style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#111', textAlign: 'center' }}>
                How warranty service requests are reviewed
              </h2>
              <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '16px', listStyle: 'none', padding: 0, margin: 0, counterReset: 'warrantyStep' }}>
                {serviceSteps.map((step) => (
                  <li key={step} style={{ counterIncrement: 'warrantyStep', border: '1px solid #e5e7eb', borderLeft: '4px solid #B58E3B', borderRadius: 8, padding: '18px', background: '#fff', color: '#444', lineHeight: 1.6 }}>
                    <span style={{ display: 'block', color: '#B58E3B', fontWeight: 900, marginBottom: '8px' }}>Step</span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            <section style={{ marginBottom: '60px' }} aria-labelledby="warranty-documents">
              <h2 id="warranty-documents" style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#111', textAlign: 'center' }}>
                Documents homeowners should keep
              </h2>
              <p style={{ fontSize: '17px', color: '#555', lineHeight: 1.7, maxWidth: '820px', margin: '0 auto 22px', textAlign: 'center' }}>
                Good documentation protects both sides. If a board, railing, stair, trim detail, or frame connection
                needs review later, these records help separate the original installation scope from weather exposure,
                normal aging, product coverage, homeowner changes, or unrelated site movement.
              </p>
              <div style={{ background: '#f7f6f1', borderRadius: 12, padding: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                {[
                  'Signed agreement and final written scope',
                  'Approved change orders and selections',
                  'Manufacturer warranty documents',
                  'Permit or inspection records when applicable',
                  'Before, during, and after project photos',
                  'Written service communication and dates',
                ].map((item) => (
                  <p key={item} style={{ margin: 0, color: '#333', lineHeight: 1.55, fontWeight: 600 }}>- {item}</p>
                ))}
              </div>
            </section>

            <section style={{ marginBottom: '60px' }} aria-labelledby="warranty-scenarios">
              <h2 id="warranty-scenarios" style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#111', textAlign: 'center' }}>
                Warranty review vs maintenance review
              </h2>
              <p style={{ fontSize: '17px', color: '#555', lineHeight: 1.7, maxWidth: '860px', margin: '0 auto 22px', textAlign: 'center' }}>
                A warranty review focuses on whether a concern appears connected to installation workmanship. A
                maintenance review focuses on outdoor exposure, cleaning, drainage, wood movement, fastener corrosion,
                landscaping changes, or damage after completion. The correct path depends on the signed paperwork and
                the visible condition of the deck.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                <article style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '20px', background: '#fff' }}>
                  <h3 style={{ margin: '0 0 10px', color: '#111' }}>Workmanship path</h3>
                  <p style={{ margin: 0, color: '#555', lineHeight: 1.65 }}>
                    Used when the question appears tied to installation details such as fastening, alignment,
                    railing movement, stair fit, trim installation, or scope items performed by the crew.
                  </p>
                </article>
                <article style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '20px', background: '#fff' }}>
                  <h3 style={{ margin: '0 0 10px', color: '#111' }}>Material path</h3>
                  <p style={{ margin: 0, color: '#555', lineHeight: 1.65 }}>
                    Used when the question appears tied to a manufacturer product issue, color performance, product
                    defect, accessory failure, or documented manufacturer warranty term.
                  </p>
                </article>
                <article style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '20px', background: '#fff' }}>
                  <h3 style={{ margin: '0 0 10px', color: '#111' }}>Maintenance or damage path</h3>
                  <p style={{ margin: 0, color: '#555', lineHeight: 1.65 }}>
                    Used when the issue appears tied to normal aging, cleaning, drainage blockage, storms, fallen
                    limbs, homeowner changes, lack of maintenance, or site movement outside the original work.
                  </p>
                </article>
              </div>
            </section>

            {/* Quote Block */}
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
               <blockquote style={{ fontSize: '28px', fontStyle: 'italic', fontWeight: '600', color: '#111', lineHeight: '1.4', marginBottom: '20px', border: 'none', padding: 0 }}>
                  "Warranty terms should be clear before construction starts: what is covered, what is excluded, and how service requests are handled."
               </blockquote>
               <p style={{ fontWeight: '700', color: '#B58E3B', textTransform: 'uppercase', letterSpacing: '1px' }}>LDN Decks Warranty Policy</p>
            </div>

            <section style={{ marginTop: '60px' }} aria-labelledby="warranty-faq">
              <h2 id="warranty-faq" style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#111', textAlign: 'center' }}>
                Written warranty FAQs
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                {warrantyFaqs.map((faq) => (
                  <details key={faq.q} style={{ border: '1px solid #e5e7eb', borderRadius: 8, padding: '18px', background: '#fff' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 800, color: '#111' }}>{faq.q}</summary>
                    <p style={{ margin: '12px 0 0', color: '#555', lineHeight: 1.65 }}>{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section style={{ marginTop: '56px', borderTop: '1px solid #e5e7eb', paddingTop: '28px' }} aria-labelledby="warranty-related">
              <h2 id="warranty-related" style={{ fontSize: '26px', fontWeight: '800', marginBottom: '14px', color: '#111' }}>
                Related trust and planning resources
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 1.9 }}>
                <li>- <Link href="/deck-warranty-guide-northern-virginia" style={{ color: '#B9471E', fontWeight: 800 }}>Read the Northern Virginia deck warranty guide</Link></li>
                <li>- <Link href="/about/process" style={{ color: '#B9471E', fontWeight: 800 }}>Review the LDN Decks project process</Link></li>
                <li>- <Link href="/about/certifications-and-licenses" style={{ color: '#B9471E', fontWeight: 800 }}>Check certifications and license context</Link></li>
                <li>- <Link href="/about/why-choose-us" style={{ color: '#B9471E', fontWeight: 800 }}>See why homeowners choose LDN Decks</Link></li>
                <li>- <Link href="/get-estimate" style={{ color: '#B9471E', fontWeight: 800 }}>Request a written estimate</Link></li>
              </ul>
            </section>
         </div>
       </section>

       <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />


       <ContactHome />
    </main>
  );
}
