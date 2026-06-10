import React from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  MapPin,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { ElegantLayout } from '../components/elegant/ElegantLayout';
import { PageHero } from '../components/elegant/PageHero';
import { SEOHead } from '../components/seo/SEOHead';
import { siteDetails } from '../data/siteDetails';
import { canvaVisuals } from '../data/visualAssets';
import { modularKitchenPricingLine, modularKitchenStartingPrice } from '../data/pricingFacts';
import { createWhatsappLink } from '../utils/contact';

const canonical = 'https://www.altercraft.in/modular-kitchen-near-me/';

const whyCards = [
  {
    icon: Ruler,
    title: 'Site Measurement First',
    description:
      'We check your room size, wall condition, sink position, appliance space and storage needs.',
  },
  {
    icon: ClipboardCheck,
    title: 'Custom Kitchen Layouts',
    description:
      'L-shape, parallel, U-shape, straight and island-style kitchens based on your room.',
  },
  {
    icon: Sparkles,
    title: 'Material & Finish Guidance',
    description:
      'BWR/BWP plywood options, laminates, acrylic, edge banding and hardware guidance.',
  },
  {
    icon: Wrench,
    title: 'Installation & Support',
    description:
      'Manufacturing, fitting, finishing checks and after-sales support for eligible work.',
  },
];

const serviceAreas = [
  'Ghaziabad',
  'Chipiyana Buzurg',
  'Indirapuram',
  'Vaishali',
  'Vasundhara',
  'Noida',
  'Greater Noida',
  'Greater Noida West',
  'Crossings Republik',
  'Delhi NCR nearby areas',
];

const layouts = [
  {
    title: 'L-Shape Modular Kitchen',
    description:
      'Best for medium-sized kitchens where cooking, washing and storage zones need to work smoothly.',
  },
  {
    title: 'Parallel Modular Kitchen',
    description:
      'Ideal for apartments and compact homes where both walls can be used for storage and counter space.',
  },
  {
    title: 'U-Shape Modular Kitchen',
    description: 'Useful for larger kitchens with multiple work zones and maximum storage.',
  },
  {
    title: 'Straight Modular Kitchen',
    description:
      'A clean and budget-friendly option for small apartments, rental homes and studio spaces.',
  },
  {
    title: 'Island Kitchen',
    description:
      'Premium layout for open kitchens where the island can work as prep, serving or family interaction space.',
  },
];

const quoteItems = [
  'Base cabinets',
  'Wall cabinets',
  'Tall units',
  'Sink area material',
  'Shutter finish',
  'Edge banding',
  'Soft-close hinges/channels',
  'Chimney/hob/appliance space',
  'Countertop scope',
  'Installation and delivery',
];

const proofCards = [
  {
    location: 'Modular Kitchen in Ghaziabad',
    layout: 'Parallel kitchen',
    finish: 'Grey laminate with profile lighting',
    requirement: 'More storage, easy maintenance and clean appliance fitting',
    result: 'Practical storage zones with premium finish and soft-close hardware planning',
  },
  {
    location: 'Modular Kitchen in Noida',
    layout: 'L-shape kitchen',
    finish: 'Warm wood laminate with light countertop direction',
    requirement: 'Compact apartment kitchen with better drawer access',
    result: 'Layout direction focused on cooking flow, sink durability and vertical storage',
  },
  {
    location: 'Modular Kitchen in Greater Noida West',
    layout: 'Straight kitchen with tall unit',
    finish: 'Beige/off-white practical finish palette',
    requirement: 'Budget-aware kitchen for a new flat possession',
    result: 'Measured quote structure for cabinets, shutters, hardware and installation',
  },
  {
    location: 'Modular Kitchen in Chipiyana Buzurg',
    layout: 'U-shape kitchen',
    finish: 'Moisture-aware plywood options with laminate finish',
    requirement: 'More counter space and better family storage',
    result: 'Planning format ready for site photos, measurements and final material selection',
  },
];

const faqs = [
  {
    question: 'Do you provide modular kitchen service near me?',
    answer:
      'Yes, AlterCraft provides modular kitchen design, manufacturing and installation services across Ghaziabad, Noida, Greater Noida and nearby Delhi NCR locations.',
  },
  {
    question: 'How much does a modular kitchen cost?',
    answer:
      `${modularKitchenPricingLine} Final pricing depends on kitchen size, layout, material, finish, hardware, accessories and site conditions.`,
  },
  {
    question: 'Which modular kitchen layout is best for small homes?',
    answer:
      'Straight, L-shape and parallel kitchens usually work well for small homes and apartments. The final layout depends on your wall size, sink position, appliance placement and storage requirement.',
  },
  {
    question: 'Do you visit the site before giving a final quote?',
    answer:
      'Yes. Photos and measurements can help create an initial estimate, but a final quote is best prepared after site measurement and scope confirmation.',
  },
  {
    question: 'Which material is better for Indian kitchens?',
    answer:
      'Moisture-aware materials such as BWR/BWP plywood options are commonly used near sink and cooking zones. The right material depends on budget, usage and finish preference.',
  },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AlterCraft',
  image: `https://www.altercraft.in${canvaVisuals.kitchenVisual}`,
  url: 'https://www.altercraft.in/',
  telephone: '+918817503658',
  email: siteDetails.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${siteDetails.addressLine}, ${siteDetails.landmarkLine}`,
    addressLocality: 'Ghaziabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: siteDetails.postalCode,
    addressCountry: 'IN',
  },
  areaServed: serviceAreas,
  openingHours: 'Mo-Sa 10:00-19:00',
  priceRange: `From ${modularKitchenStartingPrice}`,
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Modular Kitchen Design, Manufacturing and Installation',
  provider: {
    '@type': 'LocalBusiness',
    name: 'AlterCraft',
    telephone: '+918817503658',
  },
  areaServed: serviceAreas,
  serviceType: 'Modular Kitchen',
  url: canonical,
  description:
    `${modularKitchenPricingLine} Custom modular kitchen design, manufacturing and installation across Ghaziabad, Noida, Greater Noida and Delhi NCR with site measurement and material guidance.`,
  offers: {
    '@type': 'Offer',
    priceCurrency: 'INR',
    price: '1200',
    unitText: 'sq. ft.',
    description: 'Starting price for agreed modular cabinet scope; final quote after measurement and scope confirmation.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export function ModularKitchenNearMe() {
  const whatsappLink = createWhatsappLink(
    'Hi AlterCraft, I am looking for a modular kitchen near me. I want to share kitchen photos and measurements.'
  );

  return (
    <ElegantLayout>
      <SEOHead
        title={`Modular Kitchen Near Me from ${modularKitchenStartingPrice} | AlterCraft`}
        description={`Looking for a modular kitchen near me? AlterCraft starts modular kitchens at ${modularKitchenStartingPrice} with no hidden cost in the agreed cabinet scope, plus measured quotes, premium materials and installation support in Ghaziabad, Noida and Delhi NCR.`}
        canonical={canonical}
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema]}
      />

      <PageHero
        title="Modular Kitchen Near Me - Custom Kitchens by AlterCraft"
        subtitle={`Looking for a reliable modular kitchen near you? AlterCraft starts modular kitchens at ${modularKitchenStartingPrice} for the agreed modular cabinet scope, then confirms final pricing after site measurement, material selection, hardware and installation scope.`}
        breadcrumb="Local SEO / Modular Kitchen Near Me"
        image={canvaVisuals.kitchenVisual}
        imageAlt="modular kitchen design by AlterCraft in Ghaziabad"
        priceTag={`Modular kitchen from ${modularKitchenStartingPrice}`}
      />

      <section className="seo-cta-strip">
        <div className="elegant-container seo-cta-strip-inner">
          <div>
            <strong>Modular Kitchen Near Me - Designed, Manufactured & Installed by AlterCraft</strong>
            <p>Send photos, rough measurements and location to start with a practical kitchen direction.</p>
          </div>
          <div className="seo-cta-actions">
            <Link className="elegant-button" to="/contact">
              Get Free Kitchen Consultation <ArrowRight size={16} />
            </Link>
            <a className="elegant-button-secondary" href={whatsappLink} target="_blank" rel="noreferrer">
              <MessageCircle size={16} />
              Send Kitchen Photos on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="elegant-section">
        <div className="elegant-container elegant-split">
          <div>
            <p className="elegant-kicker">Why AlterCraft</p>
            <h2 className="elegant-heading">Why AlterCraft for Modular Kitchen Near Me?</h2>
            <p className="elegant-copy">
              Choosing a modular kitchen company near you should not be only about a low starting
              price. A good kitchen needs proper measurement, storage planning, moisture-aware
              material selection, reliable hardware and clean installation.
            </p>
            <p className="elegant-copy">
              AlterCraft focuses on practical Indian kitchen usage: cooking flow, sink area
              durability, tall storage, soft-close hardware, chimney space, appliance fitting and
              easy maintenance.
            </p>
          </div>
          <div className="seo-card-grid compact">
            {whyCards.map((card) => {
              const Icon = card.icon;
              return (
                <article className="seo-mini-card" key={card.title}>
                  <Icon size={24} />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="elegant-section elegant-section-muted">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">Local Service Areas</p>
            <h2 className="elegant-heading">Modular Kitchen Services Near You</h2>
            <p className="elegant-copy">AlterCraft serves homeowners and interior clients across:</p>
          </div>
          <div className="seo-area-grid">
            {serviceAreas.map((area) => (
              <div className="seo-area-pill" key={area}>
                <MapPin size={16} />
                {area}
              </div>
            ))}
          </div>
          <p className="seo-microcopy">
            Not sure if we serve your area? Send your location on WhatsApp and we will confirm site
            measurement availability.
          </p>
        </div>
      </section>

      <section className="elegant-section">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">Kitchen Layouts</p>
            <h2 className="elegant-heading">Kitchen Layouts We Design</h2>
            <p className="elegant-copy">
              We plan L shape modular kitchen, parallel modular kitchen, U shape modular kitchen,
              small modular kitchen and modular kitchen designer near me searches around actual room
              size, sink position, appliances and storage needs.
            </p>
          </div>
          <div className="seo-card-grid">
            {layouts.map((layout, index) => (
              <article className="elegant-card" key={layout.title}>
                <div className="elegant-card-body">
                  <span className="elegant-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{layout.title}</h3>
                  <p>{layout.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section elegant-section-muted">
        <div className="elegant-container elegant-split">
          <div>
            <p className="elegant-kicker">Measured Pricing</p>
            <h2 className="elegant-heading">Modular Kitchen Price Near Me</h2>
            <p className="elegant-copy">
              AlterCraft modular kitchen pricing starts at {modularKitchenStartingPrice} for the
              agreed modular cabinet scope. Final pricing depends on size, material, finish,
              hardware, countertop, accessories and site work.
            </p>
            <p className="elegant-copy">A measured quote usually considers:</p>
            <div className="seo-check-grid">
              {quoteItems.map((item) => (
                <div className="elegant-check" key={item}>
                  <CheckCircle size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="seo-section-action">
              <Link className="elegant-button" to="/contact">
                Request a Measured Kitchen Quote <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <img
            src={canvaVisuals.aiJourney}
            alt="modular kitchen quote process from photos to measurement and installation"
          />
        </div>
      </section>

      <section className="elegant-section">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">Project Proof</p>
            <h2 className="elegant-heading">Recent Modular Kitchen Work</h2>
            <p className="elegant-copy">
              Local project proof should show location, layout, material direction, timeline,
              photos, requirement and outcome. These cards are structured for live project updates
              as photos and handover details are added.
            </p>
          </div>
          <div className="seo-proof-grid">
            {proofCards.map((project) => (
              <article className="seo-proof-card" key={project.location}>
                <img src={canvaVisuals.kitchenVisual} alt={`${project.location} modular kitchen planning`} />
                <div>
                  <h3>{project.location}</h3>
                  <p><strong>Layout:</strong> {project.layout}</p>
                  <p><strong>Finish:</strong> {project.finish}</p>
                  <p><strong>Requirement:</strong> {project.requirement}</p>
                  <p><strong>Result:</strong> {project.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section elegant-section-muted">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">FAQ</p>
            <h2 className="elegant-heading">Questions About Modular Kitchen Near You</h2>
          </div>
          <div className="seo-faq-list">
            {faqs.map((faq) => (
              <article className="seo-faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section">
        <div className="elegant-container">
          <div className="elegant-quote-card">
            <ShieldCheck size={34} color="var(--accent)" />
            <p className="elegant-kicker">Start Locally</p>
            <h2 className="elegant-heading">Ready to plan your modular kitchen?</h2>
            <p className="elegant-copy">
              Share your kitchen photos, location, wall sizes and budget range. AlterCraft will
              confirm the next step for site measurement, design direction and measured quote.
            </p>
            <div className="seo-cta-actions">
              <a className="elegant-button" href={whatsappLink} target="_blank" rel="noreferrer">
                Send Photos on WhatsApp <MessageCircle size={16} />
              </a>
              <Link className="elegant-button-secondary" to="/modular-kitchen">
                View Modular Kitchen Details <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ElegantLayout>
  );
}
