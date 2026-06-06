import React from 'react';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceInclusions from '@/components/ServiceInclusions';
import ServicesFAQ from '@/components/ServicesFAQ';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceVisual from '@/components/ServiceVisual';
import SimpleCTA from '@/components/SimpleCTA';
import ServiceContentExpansion from '@/components/ServiceContentExpansion';

import { buildMetadata } from '@/lib/seo';
import WebPageSchema from '@/components/WebPageSchema';

import NamedAuthor from '@/components/NamedAuthor';
import ServiceSchema from '@/components/ServiceSchema';
import ExteriorCleaningAuthority from '@/components/ExteriorCleaningAuthority';
export const metadata = buildMetadata({
  path: "/services/house-siding-washing",
  title: "Professional House Siding Washing NoVA | Safe Exterior Cleaning",
  description: "Restore your home's curb appeal with professional house siding washing in Northern Virginia. We safely remove dirt, mold, and algae from vinyl and fiber cement.",
  image: "/social/house-siding-washing-service-social.png",
});

const inclusions = [
  {
    title: "Vinyl & Fiber Cement",
    desc: "Safe cleaning methods for all popular siding materials, removing years of environmental buildup."
  },
  {
    title: "Mold & Algae Removal",
    desc: "Targeted treatment for green algae and dark mold that typically accumulates on the shady sides of homes."
  },
  {
    title: "Eco-Friendly Solutions",
    desc: "Using cleaning agents that are effective against grime but safe for your landscaping and pets."
  }
];

const expansionSections = [
  {
    title: "Why Northern Virginia homes need siding washing",
    paragraphs: [
      "The Mid-Atlantic climate creates a perfect environment for exterior buildup. Northern Virginia's humid summers encourage mold and algae growth, heavy spring pollen seasons coat every surface in yellow-green film, and shaded elevations — especially north-facing walls — stay damp long enough for dark mold colonies to establish themselves between rain events.",
      "Homes on wooded lots or near mature tree canopies are hit hardest. Vinyl siding can develop a chalky oxidation layer that dulls its original color, while fiber cement and painted wood trap moisture behind dirt films that accelerate wear. Regular siding washing removes these layers before they cause lasting discoloration or create conditions that shorten the life of your exterior finish."
    ]
  },
  {
    title: "Soft-wash vs pressure washing for siding",
    paragraphs: [
      "High-pressure water can force moisture behind siding panels, crack brittle vinyl, gouge painted wood, and push water around window and outlet seals. That is why we rely on a soft-wash approach for nearly all siding work. Soft-washing uses low-pressure application of a biodegradable cleaning solution that breaks down mold, algae, and dirt at a chemical level rather than blasting it off mechanically.",
      "We select detergent strength and dwell time based on the siding material and the type of buildup present. After the solution has done its work, we rinse from the top down at controlled pressure, ensuring dirty water flows away from clean surfaces. The result is a thorough clean that reaches into textured surfaces and panel overlaps without any of the risks associated with high-pressure methods."
    ]
  },
  {
    title: "Materials we safely clean",
    paragraphs: [
      "Each siding material responds differently to cleaning agents and water pressure. We adjust our method for every surface type found on Northern Virginia homes."
    ],
    listItems: [
      { label: "Vinyl siding", text: "Soft-wash removes oxidation haze, mold streaks, and pollen film without warping panels or forcing water behind seams." },
      { label: "Fiber cement (HardiePlank)", text: "A gentle detergent application lifts embedded dirt from the textured surface while preserving factory paint and primer layers." },
      { label: "Painted wood", text: "Low-pressure rinsing cleans without lifting or chipping existing paint — ideal when you want to extend the life of a paint job rather than strip it." },
      { label: "Stucco", text: "Controlled soft-wash penetrates the porous surface to remove dark mold and algae staining that collects in texture grooves." },
      { label: "Brick and stone veneer", text: "We clean mortar joints and stone faces without displacing pointing or etching natural stone surfaces." }
    ]
  },
  {
    title: "Bundle with deck or patio cleaning",
    paragraphs: [
      "Combining siding washing with [deck washing](/services/deck-washing) or [concrete cleaning](/services/concrete-washing) is the most cost-effective way to refresh your entire outdoor living area in a single visit. When we are already on-site with equipment staged, adding an adjacent service reduces setup time and overall cost compared to scheduling each service separately.",
      "Popular bundles include siding plus deck and railing cleaning, siding plus driveway and walkway washing, and full-property packages that cover the house exterior, hardscape, and fencing. We will walk the property during the estimate and recommend the combination that makes the most sense for your home."
    ]
  }
];

export default function HouseSidingWashingPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/services/house-siding-washing" name="Professional House Siding Washing NoVA | Safe Exterior Cleaning" description="Restore your home's curb appeal with professional house siding washing in Northern Virginia. We safely remove dirt, mold, and algae from vinyl and fiber cement." speakable />
      <ServiceSchema
        name="House Siding Washing"
        description="Professional house siding washing in Northern Virginia — safely removing dirt, mold, and algae from vinyl and fiber cement siding."
        url="https://ldndecks.com/services/house-siding-washing"
        category="Exterior Cleaning"
        lowPrice="300"
        highPrice="1200"
        relatedServices={['https://ldndecks.com/services/outdoor-washing', 'https://ldndecks.com/services/concrete-washing']}
      />
      <ServicesHeader
        subtext="Our Services"
        title="House Siding Washing"
        description="Loudoun Decks provides professional house siding washing for homeowners in Northern Virginia, helping restore the original beauty of your home's exterior."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="2026-06-01" />
      </section>

      <ServiceMain
        subtitle="Home Refresh"
        title="Safely Restore Your Home's Curb Appeal"
        description="Your home's siding is its first line of defense against the elements. Over time, it can accumulate dirt, pollen, and biological growth that can dull its finish. Our controlled washing process cleans effectively without risking damage to your siding."
        listTitle="Benefits of Siding Washing:"
        listItems={[
          "Removes unsightly algae and mold growth",
          "Protects siding from long-term staining",
          "Instantly improves the look of your property",
          "Prepares siding for painting if needed"
        ]}
        image1="/outdoorwash2.webp"
        image2="/outdoorwash.jpg"
      />

      <ServiceVisual image="/outdoorwashing2.webp" />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions
        title="What's Included"
        description="We focus on a thorough yet gentle cleaning process that covers your entire home's exterior."
        items={inclusions}
      />

      <ExteriorCleaningAuthority type="siding" />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/house-siding-washing"
        title="Siding Washing FAQs"
        faqs={[
          { q: "Is pressure washing safe for my siding?", a: "Siding should not be blasted with high pressure. We use soft-washing or controlled pressure methods designed to remove buildup without forcing water behind panels, damaging trim, or creating leaks around windows and exterior outlets." },
          { q: "How often should I wash my siding in Northern Virginia?", a: "Most homes benefit from washing every 1 to 2 years because of humidity, pollen and shaded elevations. North-facing walls, wooded lots and siding near decks or porches often need attention sooner." },
          { q: "Can siding washing be done with deck or patio cleaning?", a: "Yes. Coordinating siding, deck, patio and railing cleaning usually creates a better finished look because the whole outdoor living area is refreshed at once instead of leaving one surface visibly older than the others." },
          { q: "Do you protect landscaping and deck boards during siding washing?", a: "Yes. We pre-rinse and protect nearby plants, deck boards, railings, furniture and exterior details where needed, then control the rinse path so cleaning solution and debris do not collect around sensitive areas." },
          { q: "How much does house siding washing cost?", a: "Most residential siding washing in Northern Virginia ranges from $300 to $1,200. The final price depends on the size of the home, number of stories, siding material, and the severity of mold or staining. We provide free on-site estimates so the quote reflects your actual conditions." },
          { q: "Can siding washing remove paint or damage surfaces?", a: "Our soft-wash method is specifically designed to avoid surface damage. We use low-pressure application and adjust detergent strength and rinse pressure for each material — vinyl, fiber cement, painted wood, stucco, and brick each get a tailored approach. The goal is to remove buildup while preserving the finish underneath." }
        ]}
      />

      <SimpleCTA title="Get Your Siding Cleaned" buttonText="Get Free Estimate" link="/get-estimate" />
      <RelatedGuides currentPath="/services/house-siding-washing" />
      <ContactHome />
    </main>
  );
}
