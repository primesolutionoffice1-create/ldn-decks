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
  path: "/services/fence-cleaning",
  title: "Professional Fence Cleaning NoVA | Wood & Composite Restoration",
  description: "Restore your fence with professional cleaning services in Northern Virginia. We safely remove gray weathering, mold, and algae from wood and composite fencing.",
  image: "/social/fence-cleaning-service-social.png",
});

const inclusions = [
  {
    title: "Wood Restoration",
    desc: "Removing the grey, weathered layer from wood fences to reveal the fresh, natural grain underneath."
  },
  {
    title: "Composite Care",
    desc: "Targeted cleaning for composite fences to remove stubborn stains and environmental film without scratching."
  },
  {
    title: "Mildew Prevention",
    desc: "Treating surfaces to kill biological growth at the source, helping your fence stay cleaner for longer."
  }
];

const expansionSections = [
  {
    title: "Signs your fence needs professional cleaning",
    paragraphs: [
      "Wood fences in Northern Virginia typically begin showing gray weathering within 12 to 18 months of installation or the last stain application. The silver-gray surface is UV-damaged wood fiber that has lost its lignin structure — it is not just cosmetic, it signals that the wood is unprotected and absorbing moisture with every rain event.",
      "Other signs that cleaning is overdue include green algae streaks along the bottom rails and pickets, black mold spots concentrated on the shaded side of the fence, uneven discoloration where sprinklers hit, and visible stain failure where the previous finish is flaking or no longer beading water. Catching these early makes cleaning faster and gives you a better surface for stain or sealer reapplication."
    ]
  },
  {
    title: "Wood vs composite fence cleaning",
    paragraphs: [
      "Wood and composite fencing require fundamentally different cleaning approaches. Natural wood — whether pressure-treated pine, cedar, or redwood — has an open grain structure that responds well to a controlled pressure wash followed by an optional brightener that restores warm color and opens the pores for new stain. However, too much pressure raises the grain and creates a rough, splintered surface that looks worse after cleaning than before.",
      "Composite and vinyl fencing have a sealed, non-porous surface. Pressure washing at wood-appropriate levels can dull the factory finish or force water into panel joints. We clean composite and vinyl fences using a soft-wash solution that dissolves algae, dirt film, and mineral deposits without abrasive contact. The result is a clean surface with its original sheen intact."
    ]
  },
  {
    title: "Our fence cleaning process",
    paragraphs: [
      "Every fence cleaning project starts with protecting the surrounding area. We pre-rinse adjacent landscaping, flower beds, and any neighbor-side plantings, then lay tarps where needed to keep cleaning solution off sensitive surfaces.",
      "Next we assess the fence material, existing finish condition, and type of buildup to select the right cleaning method. For wood fences we apply a cleaning solution, allow appropriate dwell time, then rinse with controlled pressure working in the direction of the grain. For composite and vinyl we use a soft-wash application and low-pressure rinse. After cleaning, we can apply a wood brightener to restore natural color or a mildew-resistant sealer to extend the clean surface life."
    ]
  },
  {
    title: "Pair fence cleaning with other services",
    paragraphs: [
      "Fence cleaning works well as a standalone service, but it delivers the biggest visual impact when combined with adjacent outdoor work. If your fence is beyond cleaning and needs replacement, our [fence installation service](/services/fence) covers wood and composite options across Northern Virginia.",
      "For a full backyard refresh, pair fence cleaning with [deck washing](/services/deck-washing) and our broader [outdoor washing services](/services/outdoor-washing). Scheduling these together means one mobilization, one day of disruption, and a consistently clean outdoor living space from the deck to the property line."
    ]
  }
];

export default function FenceCleaningPage() {
  return (
    <main>
      <WebPageSchema dateModified="2026-06-01" url="https://ldndecks.com/services/fence-cleaning" name="Professional Fence Cleaning NoVA | Wood &amp; Composite Restoration" description="Restore your fence with professional cleaning services in Northern Virginia. We safely remove gray weathering, mold, and algae from wood and composite fencing." speakable />
      <ServiceSchema
        name="Fence Cleaning"
        description="Professional wood and composite fence cleaning in Northern Virginia — removing gray weathering, mold, and algae to restore your fencing."
        url="https://ldndecks.com/services/fence-cleaning"
        category="Exterior Cleaning"
        lowPrice="200"
        highPrice="800"
        relatedServices={['https://ldndecks.com/services/fence', 'https://ldndecks.com/services/outdoor-washing', 'https://ldndecks.com/services/deck-washing']}
      />
      <ServicesHeader
        subtext="Our Services"
        title="Fence Cleaning Services"
        description="Loudoun Decks provides professional fence cleaning for homeowners in Northern Virginia, helping maintain the integrity and appearance of your property boundaries."
      />
      <section style={{ maxWidth: 900, margin: '0 auto', padding: '1.5rem 1.5rem 0' }}>
        <NamedAuthor context="Northern Virginia" lastUpdated="2026-06-01" />
      </section>

      <ServiceMain
        subtitle="Boundary Refresh"
        title="Restore the Life of Your Fencing"
        description="Fences are constantly exposed to the elements and often the first part of your home to show signs of weathering. Whether you have natural wood or modern composite fencing, our professional cleaning services can strip away years of exposure and leave your fence looking new."
        listTitle="Why Clean Your Fence?"
        listItems={[
          "Protects wood from rot and premature decay",
          "Removes gray weathering and restores natural color",
          "Cleans composite surfaces without abrasive scrubbing",
          "Increases the aesthetic appeal of your backyard"
        ]}
        image1="/fensewash.jpg"
        image2="/fensewash1.jpg"
      />

      <ServiceVisual image="/fenasewash2.jpg" />

      <ServiceContentExpansion sections={expansionSections} />

      <ServiceInclusions
        title="Our Fence Cleaning Approach"
        description="We use specialized techniques tailored to the specific material of your fence to ensure a thorough clean without any structural damage."
        items={inclusions}
      />

      <ExteriorCleaningAuthority type="fence" />

      <ServicesFAQ canonicalUrl="https://ldndecks.com/services/fence-cleaning"
        title="Fence Cleaning FAQs"
        faqs={[
          { q: "Will cleaning make my gray fence look like new wood again?", a: "For natural wood fences, cleaning can remove much of the gray weathered surface layer and reveal warmer wood color underneath. The final result depends on age, sun exposure, previous stain, rot and how deeply weathering has penetrated." },
          { q: "Is fence cleaning safe for plants along the fence line?", a: "We pre-rinse and protect landscaping where needed, then control the cleaning and rinse process around planting beds. Dense vines, delicate shrubs and neighbor-side plantings are reviewed before the work begins." },
          { q: "Can you clean composite or vinyl fencing?", a: "Yes. Composite and vinyl fencing need a different approach than wood. We focus on removing algae, dirt film, sprinkler mineral marks and surface staining without abrasive scrubbing that could dull the finish." },
          { q: "When should a fence be cleaned before a deck or patio project?", a: "Fence cleaning is useful before deck resurfacing, patio installation, lighting upgrades or backyard photography because a dirty boundary can make a newly improved outdoor living area look unfinished." },
          { q: "How much does fence cleaning cost?", a: "Most residential fence cleaning projects in Northern Virginia range from $200 to $800. The final price depends on linear footage, fence height, material type, and the condition of the surface. We provide free on-site estimates so the quote reflects your specific fence." },
          { q: "Should I clean my fence before staining or sealing?", a: "Yes. Cleaning removes the gray oxidation layer and opens the wood pores so stain or sealer can penetrate properly and bond to fresh wood fiber. Applying stain over a dirty or weathered surface leads to poor adhesion and premature finish failure." }
        ]}
      />

      <RelatedGuides currentPath="/services/fence-cleaning" />
      <SimpleCTA title="Get Your Fence Cleaned" buttonText="Get Free Estimate" link="/get-estimate" />
      <ContactHome />
    </main>
  );
}
