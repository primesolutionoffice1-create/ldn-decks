import { Outfit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./variables.css";
import "./globals.css";
import Script from "next/script";
import StructuredData from "../components/StructuredData";
import WebVitalsReporter from "../components/WebVitalsReporter";
import MetaPixelRouteTracker from "@/components/MetaPixelRouteTracker";
import ConsentBanner from "../components/ConsentBanner";

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
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || process.env.META_PIXEL_ID || "695923313293515";
// Microsoft Clarity — heatmaps + session recordings (CRO playbook §Heatmap).
// No fallback ID on purpose: the tag is a no-op until NEXT_PUBLIC_CLARITY_PROJECT_ID
// is set in the Vercel environment. Create the project at https://clarity.microsoft.com,
// copy its 10-character project ID, and add it as that env var.
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || "";

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
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://s.pinimg.com" />
        <link rel="dns-prefetch" href="https://ct.pinterest.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        {CLARITY_PROJECT_ID && <link rel="dns-prefetch" href="https://www.clarity.ms" />}
        
        {/* AI content discovery — llms.txt standard */}
        <link rel="alternate" type="text/plain" href="https://ldndecks.com/llms.txt" title="LLM content index" />
        <link rel="alternate" type="text/plain" href="https://ldndecks.com/llms-full.txt" title="LLM full content" />
        
        {/* Ad click ID capture — runs before GTM so click IDs are available
            for Enhanced Conversions and offline-conversion gclid imports. */}
        <Script id="click-id-capture" strategy="beforeInteractive">
          {`(function(){try{var u=new URL(window.location.href);var keys=['gclid','gbraid','wbraid','fbclid','msclkid','utm_source','utm_medium','utm_campaign','utm_content','utm_term'];var ttl=60*60*24*90;keys.forEach(function(k){var v=u.searchParams.get(k);if(v){document.cookie=k+'='+encodeURIComponent(v)+'; max-age='+ttl+'; path=/; SameSite=Lax';}});}catch(e){}})();`}
        </Script>

        {/* Consent Mode defaults — MUST run before the GTM container script
            so tags fire with explicit consent state from the very first event.
            beforeInteractive guarantees this script executes before any
            afterInteractive / lazyOnload script regardless of network order.
            Optional tracking stays denied until the visitor accepts the CMP. */}
        <Script id="gtm-consent-defaults" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} try{var c=localStorage.getItem('ldn_cookie_consent');window.ldnConsentGranted=c==='accepted';}catch(e){window.ldnConsentGranted=false;} gtag('consent','default',{'ad_storage':window.ldnConsentGranted?'granted':'denied','ad_user_data':window.ldnConsentGranted?'granted':'denied','ad_personalization':window.ldnConsentGranted?'granted':'denied','analytics_storage':window.ldnConsentGranted?'granted':'denied'});`}
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

        {/* Meta Pixel — direct fallback because Events Manager showed the
            `leads` dataset had never received events. Lead conversions are
            fired from trackLeadConfirmed() with event_id for browser/CAPI
            deduplication. */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `function ldnLoadMetaPixel(){if(window.__ldnMetaLoaded||!window.ldnConsentGranted)return;window.__ldnMetaLoaded=true;!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');}ldnLoadMetaPixel();window.addEventListener('ldn:consent-accepted',ldnLoadMetaPixel);`,
          }}
        />

        {/* Pinterest Tag — base page tracking for organic + paid Pinterest
            attribution. Lead conversions fire from trackLeadConfirmed() only
            after the contact request succeeds. Lazy loading keeps this
            non-critical tag from competing with mobile LCP. */}
        <Script
          id="pinterest-tag"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `function ldnLoadPinterest(){if(window.__ldnPinterestLoaded||!window.ldnConsentGranted)return;window.__ldnPinterestLoaded=true;!function(e){if(!window.pintrk){window.pintrk=function(){window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var n=window.pintrk;n.queue=[],n.version="3.0";var t=document.createElement("script");t.async=!0;t.src=e;var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");pintrk("load","${PINTEREST_TAG_ID}");pintrk("page");}ldnLoadPinterest();window.addEventListener('ldn:consent-accepted',ldnLoadPinterest);`,
          }}
        />
        
        {/* Ahrefs Analytics */}
        <Script
          id="ahrefs-analytics"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `function ldnLoadAhrefs(){if(window.__ldnAhrefsLoaded||!window.ldnConsentGranted)return;window.__ldnAhrefsLoaded=true;var s=document.createElement('script');s.async=true;s.src='https://analytics.ahrefs.com/analytics.js';s.setAttribute('data-key','3i7ZUj2Ik0UT5pH1a3mooQ');document.head.appendChild(s);}ldnLoadAhrefs();window.addEventListener('ldn:consent-accepted',ldnLoadAhrefs);`,
          }}
        />

        {/* Microsoft Clarity — heatmaps & session recordings (CRO playbook
            §Heatmap). afterInteractive captures the session early without
            competing with mobile LCP. Renders only when the project ID env
            var is set, so preview/unconfigured environments stay clean. */}
        {CLARITY_PROJECT_ID && (
          <Script
            id="ms-clarity"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `function ldnLoadClarity(){if(window.__ldnClarityLoaded||!window.ldnConsentGranted)return;window.__ldnClarityLoaded=true;(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","${CLARITY_PROJECT_ID}");}ldnLoadClarity();window.addEventListener('ldn:consent-accepted',ldnLoadClarity);`,
            }}
          />
        )}
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
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
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
                    <WebVitalsReporter />
                    <MetaPixelRouteTracker />
                    <ConsentBanner />
                    <MetaPixelRouteTracker />
        </ContactProvider>
      </body>
    </html>
  );
}
