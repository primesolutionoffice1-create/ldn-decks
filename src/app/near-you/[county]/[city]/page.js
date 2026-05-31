import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllCityPaths, getCityData, canonicalCities } from '@/data/cityData';
import ServicesHeader from '@/components/ServicesHeader';
import ServiceMain from '@/components/ServiceMain';
import ServiceVisual from '@/components/ServiceVisual';
import MasonryGallery from '@/components/MasonryGallery';
import ProcessSteps from '@/components/ProcessSteps';
import WhyChooseDetails from '@/components/WhyChooseDetails';
import ContactHome from '@/components/ContactHome';
import RelatedGuides from '@/components/RelatedGuides';
import ServiceAreasGrid from '@/components/ServiceAreasGrid';
import styles from './CityPage.module.css';
import { buildMetadata } from '@/lib/seo';

// Unique local content for top geo-priority city pages
const cityLocalContent = {
  Ashburn: {
    headline: "The Premier Deck Builder in Ashburn, VA",
    intro: "Ashburn is one of Northern Virginia's most dynamic communities a mix of established HOA neighborhoods like Brambleton, Broadlands, and Ashburn Village alongside newer planned developments and luxury custom homes. Homeowners here invest seriously in their outdoor living spaces, and the competition for curb appeal and backyard quality is high. Whether you live on a quiet cul-de-sac in Broadlands or a larger estate lot off Claiborne Parkway, Loudoun Decks brings the craftsmanship and local knowledge your project deserves.",
    localContext: "Many Ashburn neighborhoods are governed by strict HOA architectural review boards. We have extensive experience submitting compliant project proposals to Ashburn Village Corporation, Brambleton Community Association, and Broadlands HOA ensuring your deck or porch design is approved the first time. We design specifically to your community's material and color requirements so revisions are rare. Explore our full range of [custom outdoor services](/services) to see how we can transform your backyard.",
    projectTypes: "The most popular projects we complete in Ashburn are multi-level composite Trex and TimberTech decks with integrated screened porches, custom bluestone and paver patios with fire pit integration, and full deck replacements on homes built in the late 1990s and early 2000s that are now reaching the end of their pressure-treated lifespan."
  },
  Leesburg: {
    headline: "Custom Deck Builder in Leesburg, VA",
    intro: "Leesburg combines the charm of a historic Virginia town with the energy of one of Loudoun County's fastest-growing residential corridors. From the walkable downtown neighborhoods near King Street to newer developments in the Tuscarora Creek area and custom estate homes along the Route 15 corridor, Leesburg homeowners represent a wide range of architectural styles and outdoor living expectations. Loudoun Decks has built custom decks, screened porches, and bluestone patios across Leesburg for years.",
    localContext: "Leesburg's older in-town neighborhoods offer opportunities for traditional front porch additions and wraparound porch renovations that complement Victorian and craftsman-style homes. Newer subdivisions call for modern composite deck systems with integrated pergolas and fire features. Estate properties on larger lots in the Leesburg area are ideal candidates for multi-zone outdoor living installations combining a deck, patio, and porch into a connected entertainment system. See our [deck and porch solutions](/services) for more details.",
    projectTypes: "Popular Leesburg projects include front porch additions on older in-town homes, screened porch construction on newer colonials, composite deck builds with TimberTech Vintage Collection, and custom bluestone patio installations with seating wall and fire feature integration."
  },
  Reston: {
    headline: "Deck Builder in Reston, VA Fairfax County Specialists",
    intro: "Reston is one of Northern Virginia's most design-conscious communities a planned city built around the principles of balanced urban and natural living, with strict aesthetic standards and an active homeowner association structure. Reston Association governs exterior modifications for most residential properties, requiring specific material specifications and architectural review approval before any deck, porch, or patio construction can begin. Loudoun Decks understands Reston's requirements and has completed numerous approved projects throughout the community.",
    localContext: "Reston's townhome and single-family communities present unique project challenges: smaller footprints, shared property lines, and proximity to natural open space and tree buffers. We design decks and patios that maximize usable outdoor space within these constraints, using elevated deck designs, vertical privacy screens, and compact patio configurations to create functional outdoor living areas on smaller lots. For larger custom homes in neighborhoods like Reston's Lake Audubon or North Shore areas, we offer full-scale [outdoor living services](/services).",
    projectTypes: "In Reston, we commonly complete Reston Association-approved composite deck builds, townhome patio and deck combinations, elevated deck designs for wooded lots with grade changes, and under-deck patio systems that maximize outdoor living on multi-level homes."
  },
  Herndon: {
    headline: "Custom Deck & Porch Builder in Herndon, VA",
    intro: "Herndon sits at the center of Northern Virginia's tech corridor a diverse community of established neighborhoods, active HOAs, and a growing number of homeowners who are investing in premium outdoor living spaces to complement their busy professional lives. The town's proximity to Dulles Airport and major tech employers attracts a high concentration of homeowners who prioritize quality, durability, and professional execution in their home improvement projects.",
    localContext: "Herndon neighborhoods vary significantly in age and architectural style from 1970s and 1980s ranch and colonial homes in the original town center to newer planned communities along the Dulles Toll Road corridor. Older homes often need full deck replacements as original pressure-treated structures reach the end of their service life. Newer homes in communities like McNair Farms and Worldgate are prime candidates for composite deck builds, screened porch additions, and patio systems. Herndon Town ordinances and community HOA guidelines both apply depending on your specific address. View our [Herndon deck services](/services) for more.",
    projectTypes: "Herndon's most common projects include full deck replacement on aging 1980s-1990s wood decks, new composite deck construction on newer homes, screened porch additions for families looking to extend their outdoor season, and bluestone or paver patio builds with fire pit integration."
  },
  Fairfax: {
    headline: "Deck Builder in Fairfax, VA Northern Virginia's Most Experienced Local Contractor",
    intro: "Fairfax City and the surrounding Fairfax County unincorporated communities represent one of the densest and most established residential markets in Northern Virginia. Fairfax homeowners tend to be long-term residents with significant equity in mature properties — exactly the type of homeowner who is ready to invest in a premium outdoor living space that will deliver lasting value. Neighborhoods like Mantua, Fair Lakes, and Burke provide the archetypal Northern Virginia backdrop for custom deck and porch work.",
    localContext: "Fairfax County has detailed deck and porch building code requirements that our team navigates daily. Depending on your property's location, HOA status, and whether you're in an incorporated area like Fairfax City, permitting requirements and review processes vary. We handle all of this from Fairfax City Special Use Permits to Fairfax County Building Permits and have established relationships with the relevant building departments. For properties with established tree canopy, steep grade changes, or complex lot configurations, we offer site-specific engineering solutions.",
    projectTypes: "In Fairfax, our most common projects include full structural deck replacements on 15-25 year old wood decks, composite deck resurfacing with TimberTech Vintage, premium screened porch additions on colonial and split-level homes, and multi-level outdoor living systems combining deck, porch, and patio zones."
  },
  Vienna: {
    headline: "Custom Deck & Patio Builder in Vienna, VA",
    intro: "Vienna is known for its beautiful residential streets, active community life, and high standards for home maintenance. From the historic homes near the W&OD Trail to the newer custom builds in the northern part of town, Vienna homeowners demand quality that matches the town's prestigious reputation. Whether you're looking to replace an aging wood deck or install a modern entertainment hub, Loudoun Decks provides the expert craftsmanship Vienna requires.",
    localContext: "Navigating the Town of Vienna's specific zoning and architectural requirements can be complex. We handle the entire process, including compliance with the Board of Architectural Review where necessary. Our designs are tailored to the elegant, often wooded lots found in Vienna, ensuring your new [screened porch or deck](/services) feels like a natural extension of your home.",
    projectTypes: "Popular Vienna projects include large multi-level Trex decks, custom bluestone patios for sloped yards, and premium screened-in porches that offer protection from Virginia's summer humidity while maximizing outdoor time."
  },
  Mclean: {
    headline: "Luxury Outdoor Living in McLean, VA",
    intro: "McLean represents the pinnacle of luxury residential living in Northern Virginia. Home to some of the most impressive estates in the D.C. metro area, McLean requires a deck builder who understands high-end materials, complex engineering, and sophisticated design. At Loudoun Decks, we specialize in the 'McLean standard' — delivering flawlessly executed outdoor kitchens, multi-tier composite decks, and architectural pergolas.",
    localContext: "Working in McLean often involves managing large-scale projects on properties with significant grade changes and dense landscaping. We are experts in 'treehouse' cantilevered decks and integrated [outdoor kitchen systems](/services). We manage all Fairfax County permitting and work seamlessly with your existing landscape architects to ensure a cohesive, high-end result.",
    projectTypes: "Common McLean projects include massive TimberTech AZEK decks with hidden fasteners, integrated outdoor kitchens with granite countertops, custom-built pergolas for poolside shade, and sophisticated low-voltage lighting systems."
  },
  Sterling: {
    headline: "Deck Builder in Sterling, VA | Custom Wood & Composite Solutions",
    intro: "Sterling is a diverse community with a wide range of home styles, from the established neighborhoods of Sterling Park to the newer planned communities of Cascades and Lowes Island. As Sterling homes age, many owners are looking to upgrade their original builder-grade decks to high-performance composite materials that can withstand the Virginia elements with zero maintenance.",
    localContext: "We have extensive experience working with Sterling's major HOAs, including Cascades and Lowes Island, to ensure your project meets all community guidelines. Our team is familiar with the specific soil conditions and building codes across the 20164 and 20165 zip codes, providing a [stress-free construction process](/services) from design to final inspection.",
    projectTypes: "In Sterling, we frequently perform full deck resurfacing, converting old wood decks to modern Trex or TimberTech systems, as well as building new screened porches and custom paver patios for active families."
  },
  Centreville: {
    headline: "The Top Deck Builder in Centreville, VA",
    intro: "Centreville is a hub of family life in Fairfax County, featuring a mix of colonial-style homes, townhouses, and newer developments. With its rolling hills and wooded buffers, Centreville backyards often require creative engineering to maximize usable space. Loudoun Decks has been the go-to contractor for Centreville homeowners looking for durable, beautiful, and HOA-compliant outdoor living solutions.",
    localContext: "Our office is located right here in Centreville, making us your true local partner. We know the specific requirements of communities like Little Rocky Run, Sully Station, and Virginia Run. We specialize in navigating [Fairfax County building permits](/services) and ensuring your project is completed quickly and professionally.",
    projectTypes: "Centreville projects often include multi-level decks for sloped lots, townhome deck replacements, and custom patios with integrated fire pits that become the focal point of neighborhood gatherings."
  }
};

// Pre-render only non-canonical cities. Canonical cities (Ashburn, Leesburg, etc.)
// have their own /deck-builder-{city}-va routes; the matching /near-you/{county}/{city}
// paths are 301-redirected in next.config.mjs, so prerendering them just wastes build output.
export async function generateStaticParams() {
  const paths = await getAllCityPaths();
  return paths.filter(p => !canonicalCities.has(p.city));
}

export async function generateMetadata({ params }) {
  const { county, city } = await params;
  const data = getCityData(county, city);
  if (!data) return { title: 'Location Not Found', robots: { index: false, follow: false } };
  return buildMetadata({
    path: `/near-you/${county}/${city}`,
    title: `Best Deck Builder in ${data.cityName} VA | Custom Decks & Patios`,
    description: `Searching for a trusted deck builder in ${data.cityName}, VA? Loudoun Decks offers premium custom composite decks, screened porches, and patio installations. Licensed & Insured. Get a free estimate today.`,
    robots: { index: false, follow: true }
  });
}

export default async function CityPage({ params }) {
  const { county, city: citySlug } = await params;
  const data = getCityData(county, citySlug);
  if (!data) { notFound(); }

  const { cityName, countyName } = data;
  const localContent = cityLocalContent[cityName] || null;

  // Curate unique images for each city based on its index/name
  const cityIndex = cityName.length + cityName.charCodeAt(0);
  const mainImg = `/images/img${(cityIndex % 30) + 1 < 10 ? '0' : ''}${(cityIndex % 30) + 1}.jpeg`;
  const subImg = `/images/img${((cityIndex + 5) % 30) + 1 < 10 ? '0' : ''}${(cityIndex + 5) % 30 + 1}.jpeg`;
  const visualImg = `/images/img${((cityIndex + 10) % 30) + 1 < 10 ? '0' : ''}${(cityIndex + 10) % 30 + 1}.jpeg`;

  // Gallery images (6 unique ones per city)
  const galleryImages = [
    `/images/img${((cityIndex + 1) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 1) % 36) + 1}.jpeg`,
    `/images/img${((cityIndex + 2) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 2) % 36) + 1}.jpeg`,
    `/images/img${((cityIndex + 3) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 3) % 36) + 1}.jpeg`,
    `/images/img${((cityIndex + 4) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 4) % 36) + 1}.jpeg`,
    `/images/img${((cityIndex + 5) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 5) % 36) + 1}.jpeg`,
    `/images/img${((cityIndex + 6) % 36) + 1 < 10 ? '0' : ''}${((cityIndex + 6) % 36) + 1}.jpeg`,
  ];

  const services = [
    "Custom Trex and composite deck construction",
    "Expert deck design for luxury outdoor living",
    "Loudoun & Fairfax County permit coordination",
    "Full deck installation with Premium craftsmanship",
    "Pool decks, screened porches, and yard fencing"
  ];

  const whyChooseItems = [
    {
      title: `Review-supported local service in ${cityName}`,
      desc: "Our team lives and breathes the Northern Virginia architectural style, ensuring your new deck adds maximum value."
    },
    {
      title: "Hassle-free design-to-build journey",
      desc: "We handle the HOAs and permits in your specific neighborhood, from Brambleton to Burke."
    },
    {
      title: "High-performance moisture-resistant materials",
      desc: "We only use premium materials proven to survive the humid Mid-Atlantic seasonal cycles."
    }
  ];

  return (
    <main>
      <ServicesHeader
        subtext={`Review-Supported Specialist in ${countyName}`}
        title={`Deck Builder in ${cityName}`}
        description={`Loudoun Decks is the premier custom deck builder in ${cityName}, VA. We help ${cityName} families create luxury outdoor living spaces with a focus on durability and Premium service.`}
      />
      <ServiceMain
        subtitle={`Premier ${cityName} Contractor`}
        title={`High-End Custom Decking in ${cityName}, Virginia`}
        description={`Elevate your lifestyle with a professional deck build in ${cityName}, VA. We specialize in custom Trex, AZEK, and Western Red Cedar designs tailored for the unique neighborhoods of ${cityName}.`}
        listTitle="What We Do:"
        listItems={services}
        image1={mainImg}
        image2={subImg}
      />

      {/* Unique local content for priority cities */}
      {localContent && (
        <section className={styles.localFocus}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>{localContent.headline}</h2>
              <p>{localContent.intro}</p>
              <p style={{ marginTop: '16px' }}>
                {localContent.localContext.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
                  const match = part.match(/\[(.*?)\]\((.*?)\)/);
                  if (match) {
                    return <Link key={i} href={match[2]} style={{ color: 'var(--site-color)', fontWeight: '600', textDecoration: 'underline' }}>{match[1]}</Link>;
                  }
                  return part;
                })}
              </p>
              <p style={{ marginTop: '16px' }}>{localContent.projectTypes}</p>
            </div>
          </div>
        </section>
      )}

      {/* Generic local focus for other cities */}
      {!localContent && (
        <section className={styles.localFocus}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2>The Standard for Custom Decking in {cityName}</h2>
              <p>
                As a dedicated deck builder in {cityName}, Virginia, Loudoun Decks combines local neighborhood knowledge with world-class construction standards. We understand the specific soil types and building codes across {countyName}, ensuring your installation is structurally superior and visually stunning. Explore our full range of{' '}
                <Link href="/services">custom outdoor services</Link> to see how we can transform your backyard.
              </p>
            </div>
          </div>
        </section>
      )}

      <MasonryGallery images={galleryImages} />
      <ServiceVisual image={visualImg} />
      <WhyChooseDetails
        title={`Why Your ${cityName} Neighbors Choose Us`}
        items={whyChooseItems}
      />
      <ProcessSteps />
      <ServiceAreasGrid />
      <RelatedGuides currentPath={`/near-you/${county}/${citySlug}`} />
      <ContactHome />
    </main>
  );
}
