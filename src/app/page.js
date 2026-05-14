import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CalculatorCTA from "@/components/CalculatorCTA";
import Introduction from "@/components/Introduction";
import MaterialPartners from "@/components/MaterialPartners";
import NamedAuthor from "@/components/NamedAuthor";

// Dynamic imports for below-the-fold components
const PromoModal = dynamic(() => import("@/components/PromoModal"));
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
const NoVAPermitTimeline = dynamic(() => import("@/components/NoVAPermitTimeline"));
const BlogFeed = dynamic(() => import("@/components/BlogFeed"));
const JsonLd = dynamic(() => import("@/components/JsonLd"), { ssr: true });
const TrustSection = dynamic(() => import("@/components/TrustSection"));
const VideoSection = dynamic(() => import("@/components/VideoSection"));

import styles from "./page.module.css";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  title: 'Deck Contractor Northern Virginia | Composite Deck Builder',
  description: 'Northern Virginia deck contractor for composite decks, Trex builds, replacement, resurfacing, screened porches, permits and HOA. 5.0 Google rated.',
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
  "description": "Top-rated deck contractor and composite deck builder serving Loudoun County, Fairfax County, Prince William County, and Northern Virginia. Trex Platinum Partner and TimberTech Certified. Deck replacement, resurfacing, screened porches, patios, pergolas, permits, and HOA support.",
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
    "https://ldndecks.com/composite-decks",
    "https://ldndecks.com/services/deck-replacement",
    "https://ldndecks.com/deck-resurfacing-vs-replacement",
    "https://ldndecks.com/screened-porch-builder-northern-virginia",
    "https://ldndecks.com/services",
    "https://ldndecks.com/northern-virginia-deck-building-guide",
    "https://ldndecks.com/how-much-does-a-deck-cost-northern-virginia",
    "https://ldndecks.com/composite-deck-cost-northern-virginia",
    "https://ldndecks.com/before-and-after",
    "https://ldndecks.com/areas-we-serve",
    "https://ldndecks.com/reviews",
    "https://ldndecks.com/deck-cost-calculator",
    "https://ldndecks.com/contact"
  ],
  "mainEntity": {
    "@type": "LocalBusiness",
    "@id": "https://ldndecks.com/#organization",
    "name": "Loudoun Decks",
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
      { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
      { "@type": "AdministrativeArea", "name": "Prince William County, VA" },
      { "@type": "Place", "name": "Northern Virginia" }
    ],
    "knowsAbout": [
      "deck contractor Northern Virginia",
      "composite deck builder",
      "Trex deck builder",
      "deck replacement",
      "deck resurfacing",
      "screened porch builder",
      "deck permits",
      "HOA deck approval"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Northern Virginia deck services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Composite deck building", "url": "https://ldndecks.com/composite-decks" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck replacement", "url": "https://ldndecks.com/services/deck-replacement" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deck resurfacing", "url": "https://ldndecks.com/services/deck-resurfacing" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Screened porch building", "url": "https://ldndecks.com/screened-porch-builder-northern-virginia" } }
      ]
    }
  }
};

export default function Home() {
    return (
          <main className={styles.main}>
      <JsonLd data={homepageSchema} />
            <Hero />
            <PromoModal />
            <TrustSection />
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
