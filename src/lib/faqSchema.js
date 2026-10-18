// FAQ Schema for AI Search Visibility
// Based on /Users/ldndecks/ldn-growth-execution/ai-deployment-package/faq-schema-complete.json

export const faqSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What areas does Loudoun Decks serve in Northern Virginia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Loudoun Decks serves Northern Virginia, including Loudoun County (Ashburn, Leesburg, Sterling, Brambleton, Broadlands, Aldie, South Riding, Purcellville), Fairfax County (Reston, Herndon, Fairfax, Centreville, Vienna, McLean, Great Falls, Chantilly, Burke, Springfield, Falls Church, Oakton, Tysons, Alexandria), Prince William County (Manassas, Woodbridge, Haymarket, Gainesville, Bristow), Arlington County (Arlington), and Stafford County (Stafford). We are based in Centreville, VA."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a composite deck cost in Northern Virginia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Composite deck costs in Northern Virginia range from $30-75 per square foot installed, depending on the material chosen. Trex Enhance: $30-50/sqft, Trex Transcend: $45-65/sqft, TimberTech AZEK: $50-75/sqft. A typical 300-500 square foot deck project costs $15,000-$45,000 total. Northern Virginia pricing runs 25-35% above state average due to higher labor costs, stricter building codes, and permit requirements. We provide free detailed estimates for all projects with transparent pricing breakdowns."
      }
    },
    {
      "@type": "Question",
      "name": "What types of composite decking materials do you install?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in premium composite decking materials. We install Trex (Enhance and Transcend lines), TimberTech (PRO composite and AZEK PVC lines), and Fiberon composite decking. We also build pressure-treated wood and cedar decks. Each material has unique benefits: Trex offers excellent value and durability, TimberTech AZEK provides maximum stain and fade resistance with all-PVC construction, and Trex Transcend sits in the premium middle ground. We help homeowners choose the best option based on budget, aesthetics, maintenance preferences, and specific project requirements. Verify current manufacturer profile details directly with each brand."
      }
    },
    {
      "@type": "Question",
      "name": "Do you handle building permits for deck projects?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we handle all building permits and inspections as part of our comprehensive service. This includes Loudoun County, Fairfax County, Prince William County, Arlington County, and Stafford County permits. We prepare all required documentation, submit permit applications, coordinate inspections, and ensure your deck meets all local building codes including structural requirements, railing height and spacing standards, footing depth and frost line compliance, and electrical codes for deck lighting. We also assist with HOA architectural review approvals when required. Permit costs are included in your project estimate."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a composite deck?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most composite deck projects in Northern Virginia take 1-3 weeks from start to finish, depending on size, complexity, and permit processing time. A typical timeline: Permit approval (1-2 weeks), Site preparation and material delivery (1-2 days), Structural framing installation (2-4 days), Composite decking and fascia installation (2-3 days), Railing and finishing work (1-2 days), Final inspection and cleanup (1 day). Larger projects with multiple levels, stairs, built-in features, or outdoor kitchens may take 3-5 weeks. We provide a detailed timeline during the estimate process and keep you updated throughout construction."
      }
    }
  ]
};

export function buildFAQSchema() {
  return faqSchemaData;
}
