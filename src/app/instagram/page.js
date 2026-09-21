import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import CallLink from "@/components/CallLink";
import MetaLeadForm from "@/components/MetaLeadForm";
import TrackedLink from "@/components/TrackedLink";
// Phone constants come from the plain lib module, not the "use client"
// CallLink re-exports: importing those into a server component yields client
// reference proxies, which cannot be interpolated into the sms: href.
import { BUSINESS, BUSINESS_PHONE_DISPLAY } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import styles from "../deck-project-estimate/page.module.css";
import local from "./instagram.module.css";

// Link-in-bio landing page. Stays noindex and out of the sitemap: it exists
// only for visitors arriving from the Instagram profile, Reels and Stories.
export const metadata = buildMetadata({
  path: "/instagram",
  title: "Deck & Porch Estimate for Instagram Visitors | Loudoun Decks",
  description: "You found Loudoun Decks on Instagram. Tell us about your deck, screened porch or patio project in Loudoun, Fairfax or Prince William County and we follow up within one business day.",
  image: "/og-default.webp",
  noIndex: true,
});

const PAGE_CONTEXT = {
  pageType: "instagram_bio_landing_page",
  service: "Deck Project",
};

// Instagram visitors who type the URL from a Reel arrive with no query
// string, so the layout's click-id capture writes nothing. Set the organic
// Instagram UTM cookies ourselves, but only when no utm_source cookie already
// exists so real campaign parameters (or paid click IDs) keep precedence.
// Same cookie contract as src/app/layout.js: 90 days, path=/, SameSite=Lax.
const UTM_FALLBACK_SCRIPT =
  "(function(){try{if(/(?:^|; )utm_source=/.test(document.cookie))return;var ttl=60*60*24*90;var v={utm_source:'instagram',utm_medium:'bio',utm_campaign:'profile'};Object.keys(v).forEach(function(k){document.cookie=k+'='+encodeURIComponent(v[k])+'; max-age='+ttl+'; path=/; SameSite=Lax';});}catch(e){}})();";

const SMS_BODY = "Hi Loudoun Decks, I found you on Instagram. I'm in [your town] and thinking about a [deck / porch / patio].";
// The "?&body=" form is the one both iOS and Android honor.
const SMS_HREF = `sms:${BUSINESS.telephone}?&body=${encodeURIComponent(SMS_BODY)}`;

const projectTypes = [
  "New and replacement decks",
  "Composite and PVC upgrades",
  "Screened and covered porches",
  "Structural deck repairs",
];

// Proof strip is derived from BUSINESS.credentials (license + membership)
// plus claims already published on the site. Manufacturer installer tiers
// are intentionally absent: they are not in BUSINESS.credentials and the
// about page treats them as "verify directly" items.
const license = BUSINESS.credentials.find((item) => item.category === "license");
const nadra = BUSINESS.credentials.find((item) => item.category === "membership");

const proofItems = [
  license && { title: "Class A licensed, Virginia DPOR", text: license.name },
  nadra && { title: "NADRA member", text: nadra.recognizedBy },
  { title: "Trex and TimberTech product planning", text: "Composite and PVC options planned by scope." },
  { title: "Written estimates", text: "Scope, materials and warranty terms confirmed in writing." },
].filter(Boolean);

// Image pairs and alt text mirror the projects published on /before-and-after.
const projectPairs = [
  {
    id: "manassas",
    caption: "Manassas, VA. Weathered wood deck rebuilt in Trex composite with white railings and matching skirting.",
    before: {
      src: "/Projectsbeforeandafter/project3before.jpeg",
      alt: "Weathered gray wood deck with vertical pickets before renovation in Manassas VA",
    },
    after: {
      src: "/Projectsbeforeandafter/project3after.jpeg",
      alt: "New gray composite deck with modern white railings and matching skirting in Manassas VA",
    },
  },
  {
    id: "sterling",
    caption: "Sterling, VA. Townhome deck, Trex composite with black metal railings.",
    before: {
      src: "/Projectsbeforeandafter/project4before.jpeg",
      alt: "Worn townhome wood deck before full renovation in Sterling VA",
    },
    after: {
      src: "/Projectsbeforeandafter/project4after.jpeg",
      alt: "Modern white and gray composite townhome deck with black railings in Sterling VA",
    },
  },
];

const processSteps = [
  {
    number: "01",
    title: "Share the project fit",
    text: "Tell us what you want to build, where the property is, and when you hope to begin.",
  },
  {
    number: "02",
    title: "We review the details",
    text: "We check service area, project type, budget range, and the right next conversation.",
  },
  {
    number: "03",
    title: "Plan the next step",
    text: "A Loudoun Decks team member follows up within one business day when the project is a fit.",
  },
];

export default function InstagramEstimatePage() {
  return (
    <div className={styles.page}>
      <Script
        id="instagram-utm-fallback"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: UTM_FALLBACK_SCRIPT }}
      />

      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Loudoun Decks home">
          <Image
            src="/ldndecks-logo.webp"
            alt="Loudoun Decks"
            width={138}
            height={72}
            priority
          />
        </Link>
        <div className={styles.headerContact}>
          <span>Prefer to talk now?</span>
          <CallLink
            data-cta-location="instagram_landing_header"
            ctaLocation="instagram_landing_header"
            pageContext={PAGE_CONTEXT}
          >
            Call {BUSINESS_PHONE_DISPLAY}
          </CallLink>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>From Instagram to a real estimate</p>
              <h1>Tell us about your deck or porch project</h1>
              <p className={styles.lead}>
                Share the project type, your town, timing and a budget range. We review every Instagram request personally and follow up within one business day.
              </p>

              <div className={local.quickActions}>
                <TrackedLink
                  href={SMS_HREF}
                  className={local.smsButton}
                  ctaLocation="instagram_landing_sms"
                  ctaLabel="Text us"
                  pageContext={PAGE_CONTEXT}
                  data-cta-location="instagram_landing_sms"
                >
                  Text us
                </TrackedLink>
                <CallLink
                  className={local.callNow}
                  data-cta-location="instagram_landing_hero"
                  ctaLocation="instagram_landing_hero"
                  pageContext={PAGE_CONTEXT}
                >
                  Call now
                </CallLink>
              </div>

              <ul className={styles.projectList}>
                {projectTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.serviceArea}>
                <strong>Focused service area</strong>
                <span>Loudoun, Fairfax and Prince William counties</span>
              </div>
            </div>

            <div className={styles.formWrap}>
              <MetaLeadForm
                leadSource="Instagram"
                pageType="instagram_bio_landing_page"
                formLocation="instagram_bio_estimate"
                formType="instagram_bio"
                eyebrow="Instagram estimate request"
                heading="Tell us what you are planning"
                submitLabel="Request my estimate"
              />
            </div>
          </div>
        </section>

        <section className={local.proof} aria-label="Credentials">
          <div className={local.proofInner}>
            {proofItems.map((item) => (
              <div key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={local.gallery} aria-label="Before and after projects">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Recent projects</p>
              <h2>Before and after</h2>
            </div>
            <div className={local.galleryGrid}>
              {projectPairs.map((pair) => (
                <figure key={pair.id} className={local.pair}>
                  <div className={local.pairImages}>
                    <div className={local.imageBox}>
                      <Image
                        src={pair.before.src}
                        alt={pair.before.alt}
                        fill
                        sizes="(max-width: 900px) 50vw, 280px"
                      />
                      <span className={local.imageLabel}>Before</span>
                    </div>
                    <div className={local.imageBox}>
                      <Image
                        src={pair.after.src}
                        alt={pair.after.alt}
                        fill
                        sizes="(max-width: 900px) 50vw, 280px"
                      />
                      <span className={local.imageLabel}>After</span>
                    </div>
                  </div>
                  <figcaption className={local.caption}>{pair.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.process}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>A straightforward start</p>
              <h2>What happens after you submit</h2>
            </div>
            <div className={styles.steps}>
              {processSteps.map((step) => (
                <article key={step.number} className={styles.step}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={styles.finalInner}>
            <div>
              <p className={styles.eyebrow}>Ready to discuss the project?</p>
              <h2>Start online or call Loudoun Decks</h2>
            </div>
            <CallLink
              className={styles.callButton}
              data-cta-location="instagram_landing_final"
              ctaLocation="instagram_landing_final"
              pageContext={PAGE_CONTEXT}
            >
              Call {BUSINESS_PHONE_DISPLAY}
            </CallLink>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Copyright {new Date().getFullYear()} Loudoun Decks</span>
        <div>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
