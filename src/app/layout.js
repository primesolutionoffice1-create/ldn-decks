import { Outfit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./variables.css";
import "./globals.css";
import Script from "next/script";
import StructuredData from "../components/StructuredData";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

import { buildMetadata, SITE_URL } from "@/lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Custom Deck Builders in Loudoun County VA | Loudoun Decks',
    template: '%s',  // pages set their own complete title
  },
  description: 'Trex Pro & TimberTech certified deck builders serving Loudoun, Fairfax & Prince William VA. Custom decks, screened porches & pergolas. Free quote in 24h.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Loudoun Decks',
    images: ['/og-default.webp'],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};
metadata.icons = {
  icon: "/ldndecks-logo.webp",
  apple: "/ldndecks-logo.webp",
};
metadata.verification = {
  google: "KqDI0PPrY8iiZYZI-hk1ikIKVqCtIcTrO3dHSM7U-Eg",
  other: {
    'ahrefs-site-verification': 'eddf8f999fb0d48dab6897a61b8add479805023f0cd0c0632e7cc0ad0a2a48ee',
  }
};
// NOTE: Bing verification requires manual step — see instructions below layout

import { ContactProvider } from "@/context/ContactContext";
import LayoutContent from "./LayoutContent";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        {/* AI content discovery — llms.txt standard */}
        <link rel="alternate" type="text/plain" href="https://ldndecks.com/llms.txt" title="LLM content index" />
        <link rel="alternate" type="text/plain" href="https://ldndecks.com/llms-full.txt" title="LLM full content" />
        
        {/* Google Tag Manager - dataLayer init */}
        <Script id="gtm-init" strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500,'region':['BE','BG','CZ','DK','DE','EE','IE','GR','ES','FR','HR','IT','CY','LV','LT','LU','HU','MT','NL','AT','PL','PT','RO','SI','SK','FI','SE','IS','LI','NO','GB','CH']}); gtag('consent','default',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'});`}
        </Script>
        
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N87MG6QS');`,
          }}
        />
        
        {/* Ahrefs Analytics */}
        <Script
          id="ahrefs-analytics"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="3i7ZUj2Ik0UT5pH1a3mooQ"
          strategy="lazyOnload"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N87MG6QS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager Noscript"
          />
        </noscript>
        <ContactProvider>
          <a href="#main" className="skip-link">Skip to main content</a>
          <StructuredData />
          <LayoutContent>
            {children}
          </LayoutContent>
                    <SpeedInsights />
                    <Analytics />
        </ContactProvider>
      </body>
    </html>
  );
}
