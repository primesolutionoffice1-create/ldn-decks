"use client";

import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import FinancingAnnouncementBar from "../components/FinancingAnnouncementBar";
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });
import ScrollToTop from "../components/ScrollToTop";
import FloatingCallButton from "../components/FloatingCallButton";
import StickyMobileCTA from "../components/StickyMobileCTA";
import Breadcrumbs from "../components/Breadcrumbs";
import { installAttributionDebug } from "../lib/attribution-debug";

export default function LayoutContent({ children }) {
  const pathname = usePathname();

  // Dev-only: expose window.__ldnAttr for GTM Preview Mode inspection.
  // No-op in production (NODE_ENV check inside the installer).
  useEffect(() => {
    installAttributionDebug();
  }, []);
  
  // Define paths that should not have header/footer
  const isThankYouPage = pathname === "/thank-you";
  const isFocusedLandingPage = pathname === "/deck-project-estimate";
  const hasPageSpecificMobileCTA = pathname === "/composite-deck-builder-loudoun";

  if (isThankYouPage) {
    return (
      <main id="main">
        {children}
      </main>
    );
  }

  if (isFocusedLandingPage) {
    return children;
  }

  return (
    <>
      <FinancingAnnouncementBar />
      <Header />
      <Breadcrumbs />
      <main id="main">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingCallButton />
      {!hasPageSpecificMobileCTA && <StickyMobileCTA />}
    </>
  );
}
