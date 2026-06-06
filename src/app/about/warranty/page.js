import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';
import NamedAuthor from '@/components/NamedAuthor';

export const metadata = buildMetadata({
  path: "/about/warranty",
  title: "Written Labor Warranty Terms | LDN Decks",
  description: "Learn how Loudoun Decks documents workmanship warranty terms, manufacturer material coverage, and service expectations in project paperwork.",
  image: "/social/deck-warranty-labor-social.png",
});

export default function WarrantyPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-02" url="https://ldndecks.com/about/warranty" name="Written Labor Warranty Terms | LDN Decks" description="Learn how Loudoun Decks documents workmanship warranty terms, manufacturer material coverage, and service expectations in project paperwork." speakable />
       <ServicesHeader 
         subtext="OUR PROMISE"
         title="LDN DECKS WRITTEN LABOR WARRANTY TERMS"
         description="Workmanship warranty terms are documented in the project paperwork so homeowners can review the scope, coverage, exclusions, and service process before signing."
       />

       <section style={{ padding: '80px 20px', background: '#fff' }}>
         <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
               <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>What Our Deck & Screen Porch Labor Warranty Terms Entail</h2>
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

            {/* Quote Block */}
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
               <blockquote style={{ fontSize: '28px', fontStyle: 'italic', fontWeight: '600', color: '#111', lineHeight: '1.4', marginBottom: '20px', border: 'none', padding: 0 }}>
                  "Warranty terms should be clear before construction starts: what is covered, what is excluded, and how service requests are handled."
               </blockquote>
               <p style={{ fontWeight: '700', color: '#B58E3B', textTransform: 'uppercase', letterSpacing: '1px' }}>LDN Decks Warranty Policy</p>
            </div>
         </div>
       </section>

       <NamedAuthor context="Northern Virginia" lastUpdated="2026-05-26" />


       <ContactHome />
    </main>
  );
}
