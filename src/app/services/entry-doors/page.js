import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceVisual from '@/components/ServiceVisual';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import SimpleCTA from '@/components/SimpleCTA';
import JsonLd from '@/components/JsonLd';
import ServiceSchema from '@/components/ServiceSchema';

import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
export const metadata = buildMetadata({
  path: "/services/entry-doors",
      title: "Entry Door Installation Loudoun VA | LDN Decks",
  description: "Improve curb appeal, security, and energy efficiency with professional entry door installation in Northern Virginia. Custom fiberglass and wood door solutions.",
  image: "/social/entry-doors-service-social.png",
});

const expansionSections = [
  {
    title: "Why Your Front Entry Door Matters",
    paragraphs: [
      "Your front door is the focal point of your property's exterior. It is the first thing guests interact with, the primary barrier for your home's security, and a critical component in your home's energy efficiency. In Northern Virginia's climate, a poorly insulated or warped entry door can cost you hundreds of dollars in lost HVAC efficiency every year.",
      "Loudoun Decks provides premium entry door installation services. We don't just hang a door on old hinges; we execute a full-frame replacement. This ensures your new door is perfectly plumb, heavily insulated, and visually stunning, instantly elevating your curb appeal."
    ],
    listItems: [
      { label: "Energy Efficiency", text: "Modern doors feature polyurethane foam cores that provide up to five times the insulating value of old wood doors." },
      { label: "Enhanced Security", text: "Reinforced lock blocks, heavy-duty strike plates, and multi-point locking systems keep your family safe." },
      { label: "Instant Curb Appeal", text: "A vibrant, structurally impressive front door yields one of the highest ROI percentages of any home remodel." },
      { label: "Weather Resistance", text: "Advanced sealing and sweeping technologies stop frustrating drafts and water intrusion." }
    ]
  },
  {
    title: "Choosing the Right Door Material",
    paragraphs: [
      "Gone are the days when a heavy slab of solid wood was your only option. Modern engineering has introduced incredible materials tailored to different needs and budgets."
    ],
    listItems: [
      { label: "Fiberglass Doors", text: "The most popular choice today. Fiberglass won't warp, rot, or rust. It can be manufactured to perfectly mimic the grain of real mahogany or oak, but requires a fraction of the maintenance." },
      { label: "Steel Doors", text: "The ultimate choice for structural security and affordability. Steel doors offer exceptional insulating value and provide a sleek, modern, flush appearance." },
      { label: "Solid Wood Doors", text: "For historic homes or purists who demand the weight and authenticity of real wood. While they require routine maintenance and sealing, nothing beats the character of natural wood." },
      { label: "Decorative Glass Accents", text: "Integrate sidelites, transoms, and privacy glass inserts to flood your foyer with natural sunlight without sacrificing privacy." }
    ]
  },
  {
    title: "The Importance of Full-Frame Replacement",
    paragraphs: [
      "Many big-box store contractors offer 'slab replacement'—simply ripping the old door off the hinges and screwing a new one in the existing frame. This is a massive mistake if you want true performance.",
      "At Loudoun Decks, we emphasize full-frame replacement. We remove the entire door unit down to the rough opening studs. This allows us to assess and repair any hidden water rot in the sill, install brand new threshold flashing, and shoot low-expansion foam insulation around the new frame to support a durable weather seal."
    ],
    listItems: [
      { label: "Rot Repair", text: "We fix the underlying structural damage that previous leaky doors left behind." },
      { label: "Flashing & Sealing", text: "We employ architectural-grade flashing tape and caulk to help protect the subfloor from water intrusion." },
      { label: "Hardware Installation", text: "Precision drilling for deadbolts, smart-locks, and premium handlesets." },
      { label: "Trim & Molding", text: "Finished with beautiful interior casing and exterior brickmould that matches your home's aesthetics." }
    ]
  }
];

const faqs = [
  {
    q: "How long does a professional door installation take?",
    a: "Assuming no severe structural rot is found in the frame, a standard full-frame entry door replacement typically takes our crew one full day to complete, including interior trim finishing and cleanup."
  },
  {
    q: "Are fiberglass doors better than wood?",
    a: "In terms of longevity and maintenance, yes. Fiberglass is highly resistant to Maryland and Virginia's humid summers and freezing winters. It will not warp, swell, or rot like wood, yet it provides the exact same visual aesthetic when properly stained or painted."
  },
  {
    q: "Can you expand my doorway to add sidelites?",
    a: "Yes. Expanding a standard single door into a grand entryway with a double door or sidelites involves significant structural reframing (installing a wider header). Our heavy-carpentry teams are fully equipped to handle this structural modification safely."
  },
  {
    q: "Do you install smart locks and hardware?",
    a: "Yes. You can supply your own smart lock or keypad deadbolt, and our technicians will professionally bore the door and install the electronic hardware during the door's final installation."
  }
];

const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
};

const inclusions = [
  {
    title: "Full-Frame Tear Out",
    desc: "Complete removal of the old door, framing, and threshold down to the rough stud opening to ensure no hidden rot is left behind."
  },
  {
    title: "Precision Plumbing & Squaring",
    desc: "Laser-leveling to ensure your new door swings effortlessly, preventing future binding or draft gaps."
  },
  {
    title: "Heavy Insulation",
    desc: "Applying low-expansion spray foam between the door jamb and the rough framing to maximize your HVAC efficiency."
  },
  {
    title: "Finished Carpentry",
    desc: "Applying premium caulking, weatherstripping, and seamlessly integrating new interior and exterior trim."
  }
];

export default function EntryDoorsPage() {
  return (
    <main>
      <JsonLd data={faqSchemaData} />
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/services/entry-doors" name="Entry Door Installation Loudoun VA | LDN Decks" description="Improve curb appeal, security, and energy efficiency with professional entry door installation in Northern Virginia. Custom fiberglass and wood door solutions." speakable />
      <ServiceSchema
        name="Entry Door Installation"
        description="Residential entry door replacement and installation in Northern Virginia. Fiberglass, steel, and wood door options."
        url="https://ldndecks.com/services/entry-doors"
        category="Exterior Renovation"
        lowPrice="3000"
        highPrice="12000"
        relatedServices={['https://ldndecks.com/services/windows']}
      />

      <ServicesHeader
        subtext="Entry & Exterior Doors"
        title="Custom Entry Door Installation"
        description="Dramatically improve the curb appeal, security, and total energy efficiency of your property with professional entry door installation in Northern Virginia."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="2026-06-01" />
      </section>

      <ServiceMain
        subtitle="Make a Lasting First Impression"
        title="The Gateway to Your Home"
        description="Your entry door is the most hard-working mechanical component of your home's exterior. It opens and closes thousands of times a year while constantly enduring harsh sun, driving rain, and freezing temperatures. Upgrading your entry door is an investment in both your home's security footprint and its architectural stature."
        listTitle="Why You Should Upgrade Today:"
        listItems={[
          "Stop losing money to drafty, uninsulated older door frames",
          "Modernize the look of a tired facade instantly",
          "Upgrade to multi-point locking systems for ultimate peace of mind",
          "Introduce natural light into dark entryways using privacy glass"
        ]}
        image1="/images/img24.jpeg"
        image2="/images/img26.jpeg"
      />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceVisual image="/images/img18.jpeg" />

      <ServiceInclusions
        title="The Professional Difference"
        description="Door installation requires millimeter precision. Here is how our carpentry experts do it right the first time."
        items={inclusions}
      />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/entry-doors" withSchema={false}
        title="Entry Door FAQs"
        faqs={faqs}
      />

      <ServiceAreasGrid />

      <RelatedGuides currentPath="/services/entry-doors" />
      <SimpleCTA title="Upgrade Your Entry Door" buttonText="Get Free Estimate" link="/get-estimate" />
      <ContactHome />
    </main>
  );
}
