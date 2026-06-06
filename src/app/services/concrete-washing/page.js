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
  path: "/services/concrete-washing",
  title: "Professional Concrete Washing NoVA | Driveway & Walkway Cleaning",
  description: "Restore your driveways, patios, and walkways with expert concrete washing in Northern Virginia. We remove deep-set stains, oil, and algae.",
  image: "/social/concrete-washing-service-social.png",
});

const inclusions = [
  {
    title: "Stain Removal",
    desc: "Lifting deep-set oil, tire marks, and rust stains from driveways and garage floors."
  },
  {
    title: "Algae & Moss Control",
    desc: "Removing slippery biological growth from walkways and shaded patio areas for better safety."
  },
  {
    title: "Surface Sealing Prep",
    desc: "Tapping into the concrete's pores to ensure maximum adhesion for future sealers or coatings."
  }
];

const expansionSections = [
  {
    title: "When concrete cleaning matters most",
    paragraphs: [
      "In Northern Virginia, the best window for concrete washing runs from late March through early November. Spring cleaning removes the grit, salt residue, and organic buildup that winter leaves behind, while fall cleaning keeps surfaces safe before leaves, moisture, and freezing temperatures arrive.",
      "Concrete washing is especially valuable before a new outdoor living project. If you are planning a deck build, patio extension, or under-deck drainage installation, cleaning the surrounding hardscape first reveals hidden cracks, settled joints, and drainage problems that should be addressed during design. Homeowners preparing to list a property also benefit because a freshly cleaned driveway, walkway, and patio area can measurably improve curb appeal during showings."
    ]
  },
  {
    title: "Our concrete cleaning process",
    paragraphs: [
      "We begin every job with a walk-around assessment of the surface type, stain profiles, and surrounding materials that need protection. Oil and grease stains receive a degreasing pre-treatment that breaks the bond before any water touches the surface. For general algae, mildew, and ground-in dirt we use a soft-wash detergent application followed by controlled pressure rinsing.",
      "Nozzle selection, pressure setting, and standoff distance are adjusted for the specific concrete — broom-finished driveways handle higher pressure than stamped or decorative surfaces. We rinse in overlapping passes working toward a drainage path so dirty water does not pool on already-cleaned areas. Adjacent landscaping, siding, and deck boards are pre-rinsed and protected throughout the process."
    ]
  },
  {
    title: "Surfaces we clean across Northern Virginia",
    paragraphs: [
      "Our concrete and masonry washing covers the full range of hardscape surfaces found around homes in Loudoun, Fairfax, Prince William, Arlington, and Stafford counties."
    ],
    listItems: [
      { label: "Driveways and aprons", text: "Removing oil drips, tire marks, rust stains, and winter salt residue from poured concrete and exposed-aggregate driveways." },
      { label: "Walkways and entry paths", text: "Eliminating algae, dirt film, and discoloration from front walks, side paths, and stepping-stone areas." },
      { label: "Pool decks", text: "Safely cleaning textured and cool-deck surfaces without altering slip-resistant finishes around the pool." },
      { label: "Paver patios", text: "Lifting dirt from paver joints and surface pores while preserving polymeric sand between the stones." },
      { label: "Garage floors", text: "Degreasing and cleaning concrete garage slabs that accumulate oil, coolant, and road grime over years of use." },
      { label: "Retaining walls", text: "Removing biological growth and mineral staining from block, stone, and poured retaining walls that frame outdoor living spaces." }
    ]
  },
  {
    title: "Pricing and what affects cost",
    paragraphs: [
      "Most residential concrete washing projects in Northern Virginia fall between $200 and $1,000. The main cost drivers are total square footage, stain severity, surface type, and whether you add a protective sealer after cleaning. A standard two-car driveway with moderate algae staining typically lands in the lower portion of that range, while a large patio-plus-driveway project with oil pre-treatment and sealer application reaches the higher end.",
      "We provide free on-site estimates so the price reflects your actual conditions rather than a generic quote. [Request a concrete washing estimate](/get-estimate) and we will walk the surfaces with you before any work begins."
    ]
  }
];

export default function ConcreteWashingPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/services/concrete-washing" name="Professional Concrete Washing NoVA | Driveway &amp; Walkway Cleaning" description="Restore your driveways, patios, and walkways with expert concrete washing in Northern Virginia. We remove deep-set stains, oil, and algae." speakable />
      <ServiceSchema
        name="Concrete Washing"
        description="Professional concrete and masonry washing in Northern Virginia — removing oil stains, algae, and ground-in dirt from driveways, patios, and walkways."
        url="https://ldndecks.com/services/concrete-washing"
        category="Exterior Cleaning"
        lowPrice="200"
        highPrice="1000"
        relatedServices={['https://ldndecks.com/services/outdoor-washing', 'https://ldndecks.com/services/deck-washing', 'https://ldndecks.com/services/house-siding-washing']}
      />
      <ServicesHeader
        subtext="Our Services"
        title="Concrete Washing Services"
        description="Loudoun Decks provides expert concrete washing for homeowners in Northern Virginia, restoring the bright, clean look of your masonry."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="2026-06-01" />
      </section>

      <ServiceMain
        subtitle="Hardscape Refresh"
        title="Restore Your Patios and Walkways"
        description="Concrete and masonry are porous materials that tend to 'soak up' stains and accumulate ground-in dirt. Our high-grade power washing services reach deep into the surface to lift contaminants that a garden hose simply can't touch."
        listTitle="Areas We Clean:"
        listItems={[
          "Residential driveways and aprons",
          "Poured concrete and paver patios",
          "Sidewalks and entry walkways",
          "Pool decks and masonry walls"
        ]}
        image1="/concretewash.jpg"
        image2="/concretewash2.jpg"
      />

      <ServiceVisual image="/outdoorwashing2.webp" />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions
        title="Why Concrete Washing?"
        description="Regular cleaning not only looks better but also prevents the long-term degradation of your hardscape materials."
        items={inclusions}
      />

      <ExteriorCleaningAuthority type="concrete" />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/concrete-washing"
        title="Concrete Washing FAQs"
        faqs={[
          { q: "Can you remove oil stains from my driveway?", a: "We use pre-treatment and controlled surface cleaning to significantly reduce oil and grease staining. Complete removal depends on how long the stain has been in the concrete, whether it has penetrated the pores, and whether a previous sealer trapped the discoloration." },
          { q: "Will pressure washing damage my concrete?", a: "We adjust pressure, nozzle distance and cleaning method based on the age and condition of the slab. Newer or softer concrete, spalled areas and decorative surfaces require more care than ordinary broom-finished driveway concrete." },
          { q: "Is concrete washing useful before patio or deck work?", a: "Yes. Cleaning the surrounding hardscape helps expose drainage problems, cracks, settled areas, algae growth and stains before a deck, patio, under-deck or outdoor living project is planned around it." },
          { q: "Which Northern Virginia surfaces do you clean?", a: "We clean driveways, walkways, patios, pool surrounds, under-deck patio areas and concrete aprons across Loudoun, Fairfax and Prince William County when the work fits an outdoor living or exterior refresh project." },
          { q: "How much does concrete washing cost in Northern Virginia?", a: "Most residential concrete washing projects range from $200 to $1,000. The final price depends on total square footage, the type and severity of staining, the surface material, and whether you add a protective sealer after cleaning. We provide free on-site estimates." },
          { q: "How long does concrete washing take?", a: "Most driveway cleaning jobs take between 2 and 4 hours. Larger areas, heavily stained surfaces, or projects that include pre-treatment and sealer application may require a full day. We confirm the expected timeline during the estimate visit." }
        ]}
      />

      <RelatedGuides currentPath="/services/concrete-washing" />
      <SimpleCTA title="Get Your Concrete Cleaned" buttonText="Get Free Estimate" link="/get-estimate" />
      <ContactHome />
    </main>
  );
}
