'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const GA_MEASUREMENT_ID = 'G-HT87NWEHNT';

export function GoogleAnalytics({
  measurementId = GA_MEASUREMENT_ID,
}: {
  measurementId?: string;
}) {
  const pathname = usePathname();

  // Track page views on client-side route changes in Next.js App Router
  useEffect(() => {
    if (!pathname) return;
    if (typeof window !== 'undefined' && typeof (window as unknown as { gtag: Function }).gtag === 'function') {
      (window as unknown as { gtag: Function }).gtag('config', measurementId, {
        page_path: pathname,
      });
    }
  }, [pathname, measurementId]);

  return null;
}

// Utility to track custom user actions (e.g. generate, copy, favorite) in GA4
export function trackEvent(action: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof (window as unknown as { gtag: Function }).gtag === 'function') {
    (window as unknown as { gtag: Function }).gtag('event', action, params);
  }
}
