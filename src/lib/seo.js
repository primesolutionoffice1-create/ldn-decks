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

function removeDuplicateBrandSuffix(value) {
    if (typeof value !== "string") {
        return value;
    }

    let cleanTitle = value.trim().replace(/\s+/g, " ");
    const brandSuffixes = ["Loudoun Decks", "LDN Decks"];

    for (const brand of brandSuffixes) {
        const escapedBrand = brand.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const duplicateSuffix = new RegExp(`(\\s*\\|\\s*${escapedBrand}){2,}$`, "i");
        cleanTitle = cleanTitle.replace(duplicateSuffix, ` | ${brand}`);
    }

    return cleanTitle;
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
// Smart OG image defaulting by path prefix. Avoids the all-pages-share-one-image
// problem without forcing every caller to pass an image. Pages with explicit
// image: prop override this. og-default.webp is a verified 1200x630 asset
// (the correct OG aspect ratio); the old home-page-ldn.webp was 1536x1024.
const OG_DEFAULTS = [
    [/^\/services\/porches\/screened/, "/images/img01.jpeg"],
    [/^\/services\/porches\/front/, "/images/img22.jpeg"],
    [/^\/services\/porches\/open/, "/images/img17.jpeg"],
    [/^\/services\/porches/, "/images/img16.jpeg"],
    [/^\/services\/gazebo|pergola/, "/images/img67.webp"],
    [/^\/services\/(deck-maintenance|deck-washing|deck-staining)/, "/images/img14.jpeg"],
    [/^\/services\/deck-(repair|replacement|resurfacing)/, "/showcase/img05.jpeg"],
    [/^\/services\/deck-inspection/, "/images/deck-inspection.png"],
    [/^\/services\/fence|^\/services\/.*washing/, "/images/img32.jpeg"],
    [/^\/services\/(under-deck|trex)/, "/images/img36.jpeg"],
    [/^\/services/, "/showcase/img08.jpeg"],
    [/^\/composite-deck-cost|^\/composite-deck-vs|^\/composite-decks/, "/images/img10.jpeg"],
    [/^\/trex-(vs|decks|performance|transcend)/, "/images/img13.jpeg"],
    [/^\/timbertech/, "/images/img37.jpeg"],
    [/^\/wood-decks/, "/images/img06.jpeg"],
    [/^\/screened-porch/, "/images/img01.jpeg"],
    [/^\/(rooftop|multi-level|three-season|covered-deck|pool-deck|outdoor-kitchen|louvered-pergola)/, "/images/img17.jpeg"],
    [/^\/deck-(financing|cost|payment|roi|how-much)/, "/images/deck_financing_contract.png"],
    [/^\/deck-(maintenance|staining|cleaning|washing|safety|winterize|prepare|winter)/, "/images/img14.jpeg"],
    [/^\/deck-(footing|joist|beam|stair|load|ledger|understructure|structural|repair)/, "/images/deck_understructure_diagram.png"],
    [/^\/deck-permit/, "/images/blog-permit-guide.png"],
    [/^\/hoa-deck|.*hoa-deck-rules/, "/images/blog-permit-guide.png"],
    [/^\/education/, "/images/deck_material_comparison.png"],
    [/^\/(faqs|reviews|about|contact|blog$|education$)/, "/images/img36.jpeg"],
    [/^\/near-you\/|^\/areas-we-serve/, "/images/img36.jpeg"],
    [/^\/showcase/, "/showcase/img08.jpeg"],
    [/^\/how-long|^\/how-tariffs|^\/does-a-deck|^\/best-time|^\/what-size|^\/deck-vs|^\/porch-vs|^\/how-to-choose|^\/porch-repair/, "/images/blog-comparison.png"],
    [/^\/bbb-accredited/, "/images/img36.jpeg"],
    [/^\/(team|referral|social|scholarship)/, "/images/img36.jpeg"],
    [/^\/houzz/, "/showcase/img08.jpeg"],
    [/^\/cable-railing|^\/deck-railing|^\/deck-lighting|^\/deck-design|^\/deck-enclosure|^\/under-deck|^\/pet-friendly|^\/eco-friendly|^\/paver-vs|^\/stamped-concrete|^\/deck-materials/, "/images/img36.jpeg"],
];

function defaultOgImageForPath(path) {
    if (!path) return "/og-default.webp";
    for (const [re, img] of OG_DEFAULTS) {
        if (re.test(path)) return img;
    }
    return "/og-default.webp";
}

// Images whose actual dimensions have been measured. Used to set width/height
// metadata on og:image so Facebook/LinkedIn scrapers don't have to fetch the
// image to size it, and to keep them from rejecting/distorting wrong-ratio
// previews. Keep this map in sync with public/* when assets change.
const OG_IMAGE_DIMENSIONS = {
    "/og-default.webp": { width: 1200, height: 630 },     // verified 1.91:1 OG aspect
    "/images/img36.jpeg": { width: 1600, height: 900 },   // 16:9 — acceptable for OG
    "/showcase/img08.jpeg": { width: 960, height: 720 },  // 4:3
    "/showcase/img05.jpeg": { width: 1024, height: 768 }, // 4:3
    // Bulk-populated 2026-05-28 from scripts/audit-og-images.mjs. Most photos
    // are 4:3 landscape or 3:4 portrait — not the 1.91:1 OG ideal. Listing
    // them here at least lets scrapers size them without fetching; replacing
    // them with proper 1200x630 OG cards remains a separate task.
    "/showcase/img09.jpeg": { width: 960, height: 720 },
    "/images/img01.jpeg": { width: 1200, height: 1600 },
    "/images/img10.jpeg": { width: 1600, height: 1200 },
    "/images/img16.jpeg": { width: 1200, height: 1600 },
    "/images/img64.jpeg": { width: 1600, height: 1200 },
    "/images/img04.jpeg": { width: 1200, height: 1600 },
    "/images/img26.jpeg": { width: 1600, height: 1200 },
    "/images/img37.jpeg": { width: 1200, height: 1600 },
    "/images/img05.jpeg": { width: 1200, height: 1600 },
    "/images/deck-inspection.png": { width: 1024, height: 1024 },
    "/images/img29.jpeg": { width: 1200, height: 1600 },
    "/images/img35.jpeg": { width: 1200, height: 1600 },
    "/images/img11.jpeg": { width: 1600, height: 1200 },
    "/images/blog-permit-guide.png": { width: 1024, height: 1024 },
    "/images/img08.jpeg": { width: 1600, height: 1200 },
    "/home-page-ldn.webp": { width: 1536, height: 1024 },
    "/images/img09.jpeg": { width: 1200, height: 1600 },
    "/images/img14.jpeg": { width: 1125, height: 1364 },
    "/images/img67.webp": { width: 1536, height: 1017 },
    "/showcase/img12.jpeg": { width: 1600, height: 1200 },
    "/images/img22.jpeg": { width: 1600, height: 1200 },
    "/images/img17.jpeg": { width: 1200, height: 1600 },
    "/showcase/img07.jpeg": { width: 768, height: 1024 },
    "/images/img12.jpeg": { width: 1200, height: 1600 },
    "/social/deck-beam-span-calculator-virginia-social.png": { width: 1200, height: 630 },
    "/social/deck-footing-depth-calculator-virginia-social.png": { width: 1200, height: 630 },
    "/social/deck-joist-span-calculator-virginia-social.png": { width: 1200, height: 630 },
};

export function buildMetadata({
    path,
    title,
    description,
    image = null,
    imageWidth = undefined,
    imageHeight = undefined,
    noIndex = false,
}) {
    // Resolve image: explicit > path-based default > og-default.webp
    const resolvedImage = image || defaultOgImageForPath(path);
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
    const seoTitle = trimToSeoLimit(removeDuplicateBrandSuffix(title), 60);
    const seoDescription = trimToSeoLimit(description, 155);

    // Build the OG image object — only declare width/height when explicitly verified.
    // Declaring 1200x630 for an image that isn't actually 1200x630 misleads scrapers
    // and can cause card rejection or distorted previews. Caller can pass
    // imageWidth/imageHeight to override; otherwise fall back to the measured
    // dimensions in OG_IMAGE_DIMENSIONS (kept in sync with public/*).
    const ogImage = { url: resolvedImage, alt: seoTitle };
    const measuredDims = OG_IMAGE_DIMENSIONS[resolvedImage];
    const finalWidth = imageWidth || (measuredDims && measuredDims.width);
    const finalHeight = imageHeight || (measuredDims && measuredDims.height);
    if (finalWidth && finalHeight) {
        ogImage.width = finalWidth;
        ogImage.height = finalHeight;
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
            images: [resolvedImage],
        },
    };
}
