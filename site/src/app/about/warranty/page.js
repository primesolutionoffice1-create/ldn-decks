import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ContactHome from '@/components/ContactHome';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: "/about/warranty",
  title: "2-Year Extended Labor Warranty | LDN Decks",
  description: "Learn about our industry-leading 2-year extended labor warranty on all deck and screened porch projects in Northern Virginia.",
});

export default function WarrantyPage() {
  return (
    <main>
       <ServicesHeader 
         subtext="OUR PROMISE"
         title="LDN DECKS EXTENDED 2 YEAR WARRANTY"
         description="Most companies cover their labor for one year. We cover ours for two. If anything related to our workmanship comes up, we come back and take care of it."
       />

       <section style={{ padding: '80px 20px', background: '#fff' }}>
         <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
               <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px' }}>What Our 2-Year Deck & Screen Porch Labor Warranty Entails</h2>
               <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
                 It covers workmanship-related issues that may arise after installation. If something wasn't installed correctly, we come back and fix it — at no labor cost to the customer.
               </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px', marginBottom: '60px' }}>
               {/* Typically Covered */}
               <div style={{ background: '#f8fdf8', padding: '40px', borderRadius: '16px', border: '1px solid #e1f0e1' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px', fontWeight: '700', color: '#2e7d32', marginBottom: '25px' }}>
                     Typically Covered <span style={{ fontSize: '28px' }}>✅</span>
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
                           <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>➤</span>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>

               {/* Not Typically Covered */}
               <div style={{ background: '#fff9f9', padding: '40px', borderRadius: '16px', border: '1px solid #fce4e4' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '24px', fontWeight: '700', color: '#c62828', marginBottom: '25px' }}>
                     Not Typically Covered <span style={{ fontSize: '28px' }}>❌</span>
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
                           <span style={{ color: '#c62828', fontWeight: 'bold' }}>➤</span>
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>

            {/* How It's Better */}
            <div style={{ background: '#111', color: '#fff', padding: '60px', borderRadius: '24px', marginBottom: '60px' }}>
               <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '30px', textAlign: 'center' }}>How It's Better Than 1-Year Industry Standard</h2>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
                  {[
                     { title: "Two Seasonal Cycles", text: "Covers two full years of seasonal expansion and contraction instead of just one." },
                     { title: "Real-World Use", text: "Allows ample time for structural settling and real-world usage to reveal any potential issues." },
                     { title: "Workmanship Confidence", text: "Demonstrates our absolute confidence in the skills and precision of our in-house crews." },
                     { title: "Peace of Mind", text: "Gives our customers extra security and peace of mind for their major home investment." }
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
                  "Most companies cover their labor for one year. We cover ours for two. If anything related to our workmanship comes up, we come back and take care of it."
               </blockquote>
               <p style={{ fontWeight: '700', color: '#B58E3B', textTransform: 'uppercase', letterSpacing: '1px' }}>— The LDN Decks Guarantee</p>
            </div>
         </div>
       </section>

       <ContactHome />
    </main>
  );
}
