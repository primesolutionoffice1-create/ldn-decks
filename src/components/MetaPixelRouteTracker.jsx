"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackMetaPageView } from "@/lib/tracking";

export default function MetaPixelRouteTracker() {
  const pathname = usePathname();
  const didSkipInitialPageView = useRef(false);

  useEffect(() => {
    if (!pathname) return;

    if (!didSkipInitialPageView.current) {
      didSkipInitialPageView.current = true;
      return;
    }

    trackMetaPageView();
  }, [pathname]);

  return null;
}
