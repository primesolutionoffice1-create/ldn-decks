import Image from "next/image";
import Link from "next/link";
import CallLink, { BUSINESS_PHONE_DISPLAY } from "@/components/CallLink";
import MetaLeadForm from "@/components/MetaLeadForm";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  path: "/deck-project-estimate",
  title: "Request a Northern Virginia Deck Consultation | Loudoun Decks",
  description: "Tell Loudoun Decks about your new deck, replacement, composite, covered deck, screened porch, or structural repair project in Northern Virginia.",
  image: "/og-default.webp",
  noIndex: true,
});

const projectTypes = [
  "New and replacement decks",
  "Composite and PVC upgrades",
  "Screened and covered decks",
  "Structural deck repairs",
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

export default function DeckProjectEstimatePage() {
  return (
    <div className={styles.page}>
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
          <CallLink data-cta-location="paid_social_landing_header">
            Call {BUSINESS_PHONE_DISPLAY}
          </CallLink>
        </div>
      </header>

      <main id="main">
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>Northern Virginia deck projects</p>
              <h1>Plan your new or replacement deck with a local builder</h1>
              <p className={styles.lead}>
                Share the project type, location, timing, and budget range. Loudoun Decks will review the details and follow up within one business day.
              </p>

              <ul className={styles.projectList}>
                {projectTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.serviceArea}>
                <strong>Focused service area</strong>
                <span>Loudoun, Fairfax, and Prince William counties</span>
              </div>
            </div>

            <div className={styles.formWrap}>
              <MetaLeadForm />
            </div>
          </div>
        </section>

        <section className={styles.assurance} aria-label="What to expect">
          <div className={styles.assuranceInner}>
            <div>
              <strong>Local project review</strong>
              <span>Requests are checked for service area and scope.</span>
            </div>
            <div>
              <strong>Clear qualification</strong>
              <span>Budget and timing help route the right next step.</span>
            </div>
            <div>
              <strong>Phone option</strong>
              <span>Call directly when your project is ready to discuss.</span>
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
            <CallLink className={styles.callButton} data-cta-location="paid_social_landing_final">
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
