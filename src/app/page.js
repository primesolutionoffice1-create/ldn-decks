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
const JsonLd = dynamic(() => import("@/components/JsonLd"));
const TrustSection = dynamic(() => import("@/components/TrustSection"));
const VideoSection = dynamic(() => import("@/components/VideoSection"));

import styles from "./page.module.css";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/",
  title: 'Custom Deck Builder in Northern Virginia | Trex Platinum | LDN Decks',
  description: 'Trex Pro & TimberTech certified deck builders in Loudoun, Fairfax & Prince William VA. Custom composite decks, screened porches & patios. ★ 5.0 rated. Free quote.',
});

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://ldndecks.com/#organization",
  "name": "Loudoun Decks",
  "alternateName": "LDN Decks",
  "url": "https://ldndecks.com",
  "logo": "https://ldndecks.com/ldndecks-logo.webp",
  "image": "https://ldndecks.com/images/img64.jpeg",
  "telephone": "+15716557207",
  "email": "office@ldndecks.com",
  "priceRange": "$$-$$$$",
  "address": { "@type": "PostalAddress", "streetAddress": "13704 Winding Oak Cir", "addressLocality": "Centreville", "addressRegion": "VA", "postalCode": "20121", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": "38.8404", "longitude": "-77.4289" },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "19:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": "Saturday", "opens": "08:00", "closes": "17:00" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "41",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "John D." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Loudoun Decks built our composite deck in Ashburn — exceptional craftsmanship and on-time delivery.",
      "datePublished": "2025-08-15"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Sarah M." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Best deck builder in Loudoun County. Trex Platinum quality at a fair price. Highly recommend.",
      "datePublished": "2025-09-22"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Michael R." },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Professional from start to finish. Pulled all permits, beautiful screened porch in Reston.",
      "datePublished": "2025-10-10"
    }
  ],
  "areaServed": [
    { "@type": "AdministrativeArea", "name": "Loudoun County, VA" },
    { "@type": "AdministrativeArea", "name": "Fairfax County, VA" },
    { "@type": "AdministrativeArea", "name": "Prince William County, VA" },
    { "@type": "AdministrativeArea", "name": "Arlington County, VA" },
    { "@type": "AdministrativeArea", "name": "Stafford County, VA" }
  ],
  "sameAs": [
    "https://x.com/ldndecks",
    "https://www.instagram.com/loudoundecks/",
    "https://www.facebook.com/profile.php?id=61573750423712",
    "https://www.google.com/maps/place/Loudoun+Decks/",
    "https://www.houzz.com/pro/ldndecks",
    "https://www.yelp.com/biz/loudoun-decks-centreville"
  ]
};

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
      <JsonLd data={businessSchema} />
      <JsonLd data={homepageSchema} />
      <PromoModal />
            <Hero />
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
