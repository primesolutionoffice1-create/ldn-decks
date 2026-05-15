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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Loudoun Decks',
    images: ['/home-page-ldn.webp'],
  },
};
// Icons are now auto-detected from app/icon.png (32px) and app/apple-icon.png (180px)
// — Next.js metadata file convention. The previous WebP favicon broke on Safari < 17
// and several RSS aggregators that don't accept WebP icons.
metadata.verification = {
  google: "KqDI0PPrY8iiZYZI-hk1ikIKVqCtIcTrO3dHSM7U-Eg",
  other: {
    'ahrefs-site-verification': 'eddf8f999fb0d48dab6897a61b8add479805023f0cd0c0632e7cc0ad0a2a48ee',
  }
};
// NOTE: Bing verification requires manual step — see instructions below layout

// In Next.js 14+, themeColor and viewport settings moved out of `metadata` into
// a dedicated `viewport` export. Browsers + PWA installers read this to color
// the address bar / app shell.
export const viewport = {
  themeColor: '#d14817',
  width: 'device-width',
  initialScale: 1,
};

import { ContactProvider } from "@/context/ContactContext";
import LayoutContent from "./LayoutContent";

const PINTEREST_TAG_ID = "2612622395697";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        {/* Hero image preload is handled by next/image priority in <Hero />.
            A site-wide manual <link rel="preload"> here fires on every route,
            wasting bandwidth on non-homepage pages and creating a duplicate
            preload on the homepage. */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <link rel="dns-prefetch" href="https://s.pinimg.com" />
        <link rel="dns-prefetch" href="https://ct.pinterest.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://s.pinimg.com" crossOrigin="anonymous" />
        
        {/* AI content discovery — llms.txt standard */}
        <link rel="alternate" type="text/plain" href="https://ldndecks.com/llms.txt" title="LLM content index" />
        <link rel="alternate" type="text/plain" href="https://ldndecks.com/llms-full.txt" title="LLM full content" />
        
        {/* Ad click ID capture — runs before GTM so click IDs are available
            for Enhanced Conversions and offline-conversion gclid imports. */}
        <Script id="click-id-capture" strategy="beforeInteractive">
          {`(function(){try{var u=new URL(window.location.href);var ids=['gclid','gbraid','wbraid','fbclid','msclkid'];var ttl=60*60*24*90;ids.forEach(function(k){var v=u.searchParams.get(k);if(v){document.cookie=k+'='+encodeURIComponent(v)+'; max-age='+ttl+'; path=/; SameSite=Lax';}});}catch(e){}})();`}
        </Script>

        {/* Consent Mode defaults — MUST run before the GTM container script
            so tags fire with explicit consent state from the very first event.
            beforeInteractive guarantees this script executes before any
            afterInteractive / lazyOnload script regardless of network order.
            Audience is US-only (NoVA), so the EU/UK denial branch was dead
            code without a CMP — dropped. If a CMP is added later, restore the
            region-scoped denied defaults and wire a consent.update callback. */}
        <Script id="gtm-consent-defaults" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('consent','default',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'});`}
        </Script>

        {/* Google Tag Manager — afterInteractive (not lazyOnload) so the
            container loads close to user interaction. Earlier loading means
            phone_click / form_submit events on fast-bouncing mobile traffic
            are processed instead of being orphaned in the dataLayer queue. */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N87MG6QS');`,
          }}
        />

        {/* Pinterest Tag — base page tracking for organic + paid Pinterest
            attribution. Lead conversions fire from trackLeadConfirmed() only
            after the contact request succeeds. */}
        <Script
          id="pinterest-tag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0;t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");pintrk("load","${PINTEREST_TAG_ID}");pintrk("page");`,
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
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            alt=""
            src={`https://ct.pinterest.com/v3/?event=init&tid=${PINTEREST_TAG_ID}&noscript=1`}
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
