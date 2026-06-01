"use client";

import Link from 'next/link';
import { trackCtaClick, trackEmailClick } from '@/lib/tracking';

export default function TrackedLink({
  href,
  children,
  ctaLocation,
  ctaLabel,
  className,
  style,
  ...rest
}) {
  const isEmail = typeof href === 'string' && href.startsWith('mailto:');

  return (
    <Link
      href={href}
      className={className}
      style={style}
      onClick={() => {
        if (isEmail) {
          trackEmailClick({ ctaLocation, email: href.replace(/^mailto:/, '') });
        } else {
          trackCtaClick({ ctaLocation, ctaLabel, href });
        }
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}

