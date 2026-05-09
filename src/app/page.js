import dynamic from 'next/dynamic';
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CalculatorCTA from "@/components/CalculatorCTA";
import Introduction from "@/components/Introduction";
import MaterialPartners from "@/components/MaterialPartners";

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
const BlogFeed = dynamic(() => import("@/components/BlogFeed"));
const JsonLd = dynamic(() => import("@/components/JsonLd"), { ssr: true });
const TrustSection = dynamic(() => import("@/components/TrustSection"));
const VideoSection = dynamic(() => import("@/components/VideoSection"));

import styles from "./page.module.css";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  title: 'Top-Rated Deck Builder Northern Virginia | 5.0★ | Free Estimate',
  description: 'Trex Platinum & TimberTech certified deck builders in NoVA. Custom composite decks & screened porches. ★ 5.0 Google Rated. Get your free estimate in 24 hours!',
});

// Homepage-specific WebPage schema
const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://ldndecks.com/#webpage",
  "url": "https://ldndecks.com",
  "name": "Loudoun Decks — Custom Deck Builder in Northern Virginia",
  "description": "Top-rated custom deck builder in Loudoun County, Northern Virginia. Trex Platinum Partner and TimberTech Certified. Composite and wood decks, screened porches, patios, pergolas. 5.0-star Google rating. Free estimates.",
  "isPartOf": { "@type": "WebSite", "@id": "https://ldndecks.com/#website" },
  "about": { "@type": "LocalBusiness", "@id": "https://ldndecks.com/#organization" },
  "primaryImageOfPage": {
    "@type": "ImageObject",
    "url": "https://ldndecks.com/images/img64.jpeg"
  },
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["h1", "[data-speakable]"]
  },
  "significantLink": [
    "https://ldndecks.com/services",
    "https://ldndecks.com/northern-virginia-deck-building-guide",
    "https://ldndecks.com/how-much-does-a-deck-cost-northern-virginia",
    "https://ldndecks.com/composite-deck-cost-northern-virginia",
    "https://ldndecks.com/before-and-after",
    "https://ldndecks.com/areas-we-serve",
    "https://ldndecks.com/reviews",
    "https://ldndecks.com/deck-cost-calculator",
    "https://ldndecks.com/contact"
  ]
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
