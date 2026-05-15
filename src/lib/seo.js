export const SITE_URL = "https://ldndecks.com";

function trimToSeoLimit(value, limit) {
    if (typeof value !== "string" || value.length <= limit) {
        return value;
    }

    const trimmed = value.slice(0, limit + 1);
    const lastSpace = trimmed.lastIndexOf(" ");
    const cleanCut = lastSpace > Math.floor(limit * 0.75)
        ? trimmed.slice(0, lastSpace)
        : trimmed.slice(0, limit);

    return cleanCut.replace(/[|,;:\-\s]+$/g, "").trim();
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
    if (path.startsWith('/near-you/') || path === '/showcase/rooftop-deck-washington-dc') {
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
        metadataBase: new URL(SITE_URL),
        alternates: {
                canonical: url,
        },
        robots: {
                index: !finalNoIndex,
                follow: true,
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
