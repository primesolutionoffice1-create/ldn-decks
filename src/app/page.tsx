import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CalculatorCTA from "@/components/CalculatorCTA";
import FinancingTeaser from "@/components/FinancingTeaser";
import Introduction from "@/components/Introduction";
import MaterialPartners from "@/components/MaterialPartners";
import NamedAuthor from "@/components/NamedAuthor";
import DeferredPromoModal from "@/components/DeferredPromoModal";

// Dynamic imports for below-the-fold components
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const HandCraftedDecks = dynamic(() => import("@/components/HandCraftedDecks"));
const ServicesHome = dynamic(() => import("@/components/ServicesHome"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const TrustLogos = dynamic(() => import("@/components/TrustLogos"));
const ContactMap = dynamic(() => import("@/components/ContactMap"));
const ContactHome = dynamic(() => import("@/components/ContactHome"));
const RelatedGuides = dynamic(() => import("@/components/RelatedGuides"));
const HomeQuickLinks = dynamic(() => import("@/components/HomeQuickLinks"));
const HomeSEOContent = dynamic(() => import("@/components/HomeSEOContent"));
const HomeAuthorityBridge = dynamic(() => import("@/components/HomeAuthorityBridge"));
const NoVAPermitTimeline = dynamic(() => import("@/components/NoVAPermitTimeline"));
const BlogFeed = dynamic(() => import("@/components/BlogFeed"));
const JsonLd = dynamic(() => import("@/components/JsonLd"), { ssr: true });
const TrustSection = dynamic(() => import("@/components/TrustSection"));
const VideoSection = dynamic(() => import("@/components/VideoSection"));

import styles from "./page.module.css";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  title: 'Deck Builder Near Me in Northern VA | Loudoun Decks',
  description: 'Northern Virginia deck contractor for composite decks, Trex, TimberTech, replacements and screened porches. Public profile links, permit planning, and HOA support.',
});

// Homepage-specific WebPage schema — tells Google this is the main landing page.
// Org schema is emitted globally from StructuredData (rooted at @id: #organization);
// this page references that single source of truth instead of redefining it.
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ldndecks.com/#webpage",
  "url": "https://ldndecks.com",
  "name": "Loudoun Decks — Custom Deck Builder in Northern Virginia",
  "description": "Trusted deck contractor and composite deck builder serving Loudoun County, Fairfax County, Prince William County, and Northern Virginia. Deck replacement, resurfacing, screened porches, patios, pergolas, permit planning, and HOA support.",
  "isPartOf": { "@type": "WebSite", "@id": "https://ldndecks.com/#website" },
  "about": { "@id": "https://ldndecks.com/#organization" },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://ldndecks.com/home-page-ldn.webp"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "[data-speakable]"]
  },
  "significantLink": [
    "https://ldndecks.com/services/new-decks",
    "https://ldndecks.com/composite-decks",
    "https://ldndecks.com/trex-decks",
    "https://ldndecks.com/timbertech-decks",
    "https://ldndecks.com/services/deck-replacement",
    "https://ldndecks.com/services/deck-repair",
    "https://ldndecks.com/services/deck-inspection",
    "https://ldndecks.com/deck-resurfacing-vs-replacement",
    "https://ldndecks.com/get-estimate",
    "https://ldndecks.com/screened-porch-builder-northern-virginia",
    "https://ldndecks.com/covered-deck-builder-northern-virginia",
    "https://ldndecks.com/services",
    "https://ldndecks.com/northern-virginia-deck-building-guide",
    "https://ldndecks.com/composite-deck-cost-northern-virginia",
    "https://ldndecks.com/tools",
    "https://ldndecks.com/tools/deck-cost-estimator-northern-virginia",
    "https://ldndecks.com/tools/deck-footing-depth-calculator-virginia",
    "https://ldndecks.com/tools/deck-load-calculator-virginia",
    "https://ldndecks.com/before-and-after",
    "https://ldndecks.com/areas-we-serve",
    "https://ldndecks.com/deck-builder-purcellville-va",
    "https://ldndecks.com/reviews",
    "https://ldndecks.com/deck-cost-calculator",
    "https://ldndecks.com/about",
    "https://ldndecks.com/contact"
  ],
  // Homepage main entity is the canonical organization, referenced by @id only.
  // knowsAbout / hasOfferCatalog merge onto #organization without redefining
  // its @type, name, address, or areaServed (those come from business.js).
  "mainEntity": {
    "@id": "https://ldndecks.com/#organization",
    "knowsAbout": [
      "deck contractor Northern Virginia",
      "composite deck builder",
      "Trex deck builder",
      "TimberTech deck installer",
      "deck replacement",
      "deck resurfacing",
      "screened porch builder",
      "covered deck construction",
      "outdoor kitchen builder",
      "pergola and gazebo builder",
      "deck repair and structural maintenance",
      "deck inspection",
      "deck stair construction",
      "deck lighting",
      "deck footing depth planning",
      "deck load planning",
      "beam span planning",
      "joist span planning",
      "AZEK PVC decking",
      "Purcellville outdoor living",
      "Western Loudoun deck builder",
      "deck permits Northern Virginia",
      "deck cost estimator Northern Virginia",
      "HOA deck approval",
      "patio construction",
      "deck railing systems"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Northern Virginia deck and outdoor living services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/services/new-decks#service", "name": "Custom Deck Construction", "url": "https://ldndecks.com/services/new-decks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/composite-decks#service", "name": "Composite Deck Installation", "url": "https://ldndecks.com/composite-decks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/trex-decks#service", "name": "Trex Deck Installation", "url": "https://ldndecks.com/trex-decks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/timbertech-decks#service", "name": "TimberTech AZEK Deck Installation", "url": "https://ldndecks.com/timbertech-decks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/services/deck-replacement#service", "name": "Deck Replacement and Rebuilding", "url": "https://ldndecks.com/services/deck-replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/services/deck-resurfacing#service", "name": "Deck Resurfacing", "url": "https://ldndecks.com/services/deck-resurfacing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/screened-porch-builder-northern-virginia#service", "name": "Screened Porch Construction", "url": "https://ldndecks.com/screened-porch-builder-northern-virginia" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/covered-deck-builder-northern-virginia#service", "name": "Covered Deck Construction", "url": "https://ldndecks.com/covered-deck-builder-northern-virginia" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/outdoor-kitchen-builder-northern-virginia#service", "name": "Outdoor Kitchen Construction", "url": "https://ldndecks.com/outdoor-kitchen-builder-northern-virginia" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/services/gazebo-pergola#service", "name": "Pergola and Gazebo Construction", "url": "https://ldndecks.com/services/gazebo-pergola" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/services/deck-repair#service", "name": "Deck Repair & Structural Maintenance", "url": "https://ldndecks.com/services/deck-repair" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/services/patios#service", "name": "Patio Construction", "url": "https://ldndecks.com/services/patios" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/services/deck-inspection#service", "name": "Deck Inspection", "url": "https://ldndecks.com/services/deck-inspection" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "@id": "https://ldndecks.com/services/deck-stair-lighting#service", "name": "Deck Stair Lighting", "url": "https://ldndecks.com/services/deck-stair-lighting" } }
      ]
    }
  }
};

// VideoObject is emitted by StructuredData (root layout) via buildVideoObjectSchema().
// Emitting a second VideoObject here caused duplicate nodes with conflicting data.

export default function Home() {
    return (
          <main className={styles.main}>
      <JsonLd data={homepageSchema} />
            <Hero />
            <DeferredPromoModal />
            <TrustSection />
            <FinancingTeaser />
            <Features />
            <CalculatorCTA />
            <MaterialPartners />
            <Introduction />
            <HowItWorks />
            <HandCraftedDecks />
            <ServicesHome />
            <Testimonials />
            <BlogFeed />
            <HomeSEOContent />
            <HomeAuthorityBridge />
            <div style={{ maxWidth: 900, margin: '2rem auto 0', padding: '0 1.5rem' }}>
              <NamedAuthor context="Loudoun, Fairfax and Prince William counties" />
            </div>
            <NoVAPermitTimeline />
            <HomeQuickLinks />
            <FAQ />
            <TrustLogos />
            <RelatedGuides currentPath="/" />
            <VideoSection />
            <ContactMap />
            <ContactHome />
      </main>
    );
}
