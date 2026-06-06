"use client";
import { trackPhoneClick, trackPhoneClickWithContext } from '@/lib/tracking';
import { BUSINESS, BUSINESS_PHONE_DISPLAY } from '@/lib/business';

// Business phone constants — every tel: link on the site should use these.
// Centralizing here means a future number change is a 1-line edit
// instead of a 40+ file sweep.
export const BUSINESS_PHONE = BUSINESS.telephone;
export { BUSINESS_PHONE_DISPLAY };

// Tracked replacement for raw <a href="tel:..."> tags.
//
// Every phone-CTA click fires the phone_click dataLayer event so GTM can
// attribute it to Google Ads / GA4 / any future call-tracking integration.
// Before this component, only 3 of ~45 tel: links on the site fired the
// event — paid-attributed phone conversions were ~90% undercounted.
//
// Props mirror an anchor: className, style, aria-label, children. If no
// children are passed, renders the display number so common cases stay
// terse: <CallLink />  →  "(571) 655-7207"
export default function CallLink({
  children,
  className,
  style,
  ariaLabel,
  display,
  ctaLocation,
  pageContext,
  ...rest
}) {
  return (
    <a
      href={`tel:${BUSINESS_PHONE}`}
      onClick={() => {
        if (ctaLocation || pageContext) {
          trackPhoneClickWithContext({ ctaLocation, pageContext });
        } else {
          trackPhoneClick();
        }
      }}
      className={className}
      style={style}
      aria-label={ariaLabel || `Call Loudoun Decks at ${BUSINESS_PHONE_DISPLAY}`}
      {...rest}
    >
      {children || display || BUSINESS_PHONE_DISPLAY}
    </a>
  );
}
