export const SITE_URL = "https://ldndecks.com";

// Brand suffixes that must survive truncation intact. A title that gets cut
// mid-brand ("| Loudoun" instead of "| Loudoun Decks") loses recall in SERPs.
// Listed longest-first so longer matches win.
const BRAND_SUFFIXES = [
    " | Loudoun Decks Expert Insights",
    " | Loudoun Decks",
    " | LDN Decks",
];

function trimToSeoLimit(value, limit) {
    if (typeof value !== "string" || value.length <= limit) {
        return value;
    }

    // Brand-aware: if the value ends with a known brand suffix, truncate the
    // prefix portion and append the suffix intact rather than slicing through it.
    for (const suffix of BRAND_SUFFIXES) {
        if (value.endsWith(suffix)) {
            const prefixLimit = limit - suffix.length;
            // Suffix alone consumes too much of the limit — fall through to
            // the generic cut.
            if (prefixLimit < 20) break;
            const prefix = value.slice(0, value.length - suffix.length);
            if (prefix.length <= prefixLimit) {
                return value;
            }
            const window = prefix.slice(0, prefixLimit + 1);
            const lastSpace = window.lastIndexOf(" ");
            const cleanPrefix = lastSpace > Math.floor(prefixLimit * 0.5)
                ? window.slice(0, lastSpace)
                : window.slice(0, prefixLimit);
            return `${cleanPrefix.replace(/[|,;:\-\s&]+$/g, "").trim()}${suffix}`;
        }
    }

    const trimmed = value.slice(0, limit + 1);
    const lastSpace = trimmed.lastIndexOf(" ");
    const cleanCut = lastSpace > Math.floor(limit * 0.75)
        ? trimmed.slice(0, lastSpace)
        : trimmed.slice(0, limit);

    return cleanCut.replace(/[|,;:\-\s&]+$/g, "").trim();
}

/**
 * Build consistent metadata for Next.js App Router.
 *
 * @param {object} args
 * @param {string} args.path - URL path, leading slash (e.g., "/services")
 * @param {string} args.title - Page title (full, with brand suffix)
 * @param {string} args.description - Meta description
 * @param {string} [args.image] - Path to OG image (defaults to hero)
 * @param {number} [args.imageWidth] - Image width in px. Omit unless verified.
 * @param {number} [args.imageHeight] - Image height in px. Omit unless verified.
 * @param {boolean} [args.noIndex] - Set true to noindex this page
 */
export function buildMetadata({
    path,
    title,
    description,
    image = "/home-page-ldn.webp",
    imageWidth,
    imageHeight,
    noIndex = false,
}) {
    // Phase 1 cleanup: noindex redundant /near-you/* paths and broken showcase
    let finalNoIndex = noIndex;
    const indexableCounties = [
        "/near-you/loudoun-county",
        "/near-you/fairfax-county",
        "/near-you/prince-william-county",
        "/near-you/arlington-county",
        "/near-you/stafford-county",
    ];
    const isIndexableCounty = indexableCounties.includes(path);
    if (path.startsWith('/near-you/') && !isIndexableCounty) {
        finalNoIndex = true;
    } else if (path === '/showcase/rooftop-deck-washington-dc') {
        finalNoIndex = true;
    }

    const url = `${SITE_URL}${path}`;
    const seoTitle = trimToSeoLimit(title, 60);
    const seoDescription = trimToSeoLimit(description, 155);

    // Build the OG image object — only declare width/height when explicitly verified.
    // Declaring 1200x630 for an image that isn't actually 1200x630 misleads scrapers
    // and can cause card rejection or distorted previews.
    const ogImage = { url: image, alt: seoTitle };
    if (imageWidth && imageHeight) {
        ogImage.width = imageWidth;
        ogImage.height = imageHeight;
    }

    return {
        title: seoTitle,
        description: seoDescription,
        // metadataBase is declared once in the root layout (app/layout.js)
        // and inherited by every route — no need to repeat it per page.
        alternates: {
                canonical: url,
        },
        robots: {
                index: !finalNoIndex,
                follow: true,
                'max-image-preview': 'large',
        },
        openGraph: {
            url,
            title: seoTitle,
            description: seoDescription,
            siteName: "Loudoun Decks",
            locale: "en_US",
            type: "website",
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title: seoTitle,
            description: seoDescription,
            images: [image],
        },
    };
}
