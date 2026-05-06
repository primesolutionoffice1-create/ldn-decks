"use client";

import dynamic from "next/dynamic";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });
import ScrollToTop from "../components/ScrollToTop";
import FloatingCallButton from "../components/FloatingCallButton";
import Breadcrumbs from "../components/Breadcrumbs";

export default function LayoutContent({ children }) {
  const pathname = usePathname();
  
  // Define paths that should not have header/footer
  const isStandalonePage = pathname === "/thank-you";

  if (isStandalonePage) {
    return (
      <main id="main">
        {children}
      </main>
    );
  }

  return (
    <>
      <Header />
      <Breadcrumbs />
      <main id="main">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingCallButton />
    </>
  );
}
