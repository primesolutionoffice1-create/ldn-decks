"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackRedditPageVisit } from '@/lib/redditTracking';

export default function RedditPixelTracker() {
  const pathname = usePathname();
  useEffect(() => {
    const track = () => { void trackRedditPageVisit().catch(() => {}); };
    track();
    window.addEventListener('ldn:consent-accepted', track);
    return () => window.removeEventListener('ldn:consent-accepted', track);
  }, [pathname]);
  return null;
}
