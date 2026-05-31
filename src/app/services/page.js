import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServicesGrid from '@/components/ServicesGrid';
import ServicesFAQ from '@/components/ServicesFAQ';
import ServicesFooterInfo from '@/components/ServicesFooterInfo';
import ServicesCallToAction from '@/components/ServicesCallToAction';
import RelatedGuides from '@/components/RelatedGuides';
import FinancingCTA from '@/components/FinancingCTA';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/services',
  title: 'Deck Building & Outdoor Living Services | Loudoun Decks',
  description: 'Custom decks, screened porches, pergolas, patios, fencing & more in Northern Virginia. Trex Platinum Partner. 5-star rated. Free estimates: (571) 655-7207.',
});

export default function ServicesPage() {
  return (
    <main>
       <ServicesHeader />
       <ServicesGrid />
       <FinancingCTA />

       <section style={{ padding: '4rem 0', background: '#fff', borderTop: '1px solid #eee' }}>
         <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem', lineHeight: 1.8, color: '#333' }}>
           <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--color-dark)' }}>Northern Virginia's Premier Deck Contractor & Outdoor Living Specialist</h2>
           <p>
             Choosing the right <strong>deck contractor</strong> is the most critical decision in any home improvement project. In Northern Virginia, where the climate ranges from humid summers to freezing winters, your outdoor structure must be engineered for both beauty and extreme durability. At Loudoun Decks, we specialize in high-performance materials like Trex and TimberTech that deliver a maintenance-free lifestyle.
           </p>

           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
             <div>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Professional Porch Builder</h3>
               <p>
                 As a dedicated <strong>porch builder</strong>, we understand that a screened-in porch is more than just a deck with a roof—it's an extension of your indoor living space. We design custom porches that feature integrated lighting, ceiling fans, and high-visibility screening that keeps the bugs out while letting the breeze in. Whether you need a front porch for curb appeal or a backyard retreat, our team handles every permit and architectural detail.
               </p>
             </div>
             <div>
               <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Expert Patio Contractor</h3>
               <p>
                 Looking for a <strong>patio contractor</strong> to install a bluestone or paver patio? We specialize in creating multi-level outdoor entertainment hubs that combine the warmth of a custom deck with the durability of professional masonry. Our patios are engineered with proper drainage and sub-base preparation to prevent shifting and settling, ensuring your investment lasts for decades.
               </p>
             </div>
           </div>

           <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '3rem', marginBottom: '1rem' }}>Why Topical Authority Matters in Deck Building</h3>
           <p>
             When you search for <strong>"deck builder near me"</strong>, you deserve a contractor who knows the specific building codes of Fairfax, Loudoun, and Prince William Counties. Our "Topical Authority" comes from years of hands-on experience navigating Northern Virginia's unique HOA requirements and soil conditions. We don't just build decks; we build structures that enhance your home's appraisal value and provide a safe sanctuary for your family.
           </p>
           <p style={{ marginTop: '1.5rem' }}>
             Ready to start your project? From <strong>deck repair</strong> and resurfacing to massive luxury builds, our team is ready to provide a detailed, itemized quote within 24 hours of our consultation.
           </p>
         </div>
       </section>

       <ServicesFAQ />
       <ServicesFooterInfo />
       <RelatedGuides currentPath="/services" />
       <ServicesCallToAction />
    </main>
  );
}
