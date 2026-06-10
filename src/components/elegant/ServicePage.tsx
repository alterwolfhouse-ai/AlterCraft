import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { ElegantLayout } from './ElegantLayout';
import { PageHero } from './PageHero';
import { QuoteForm } from './QuoteForm';
import { SEOHead } from '../seo/SEOHead';

type CardItem = {
  title: string;
  description: string;
  image?: string;
};

type PriceItem = {
  label: string;
  value: string;
  note?: string;
};

type ServicePageProps = {
  seo?: {
    title: string;
    description: string;
    canonical?: string;
    jsonLd?: Array<Record<string, unknown>>;
  };
  hero: {
    title: string;
    subtitle: string;
    breadcrumb: string;
    image: string;
    imageAlt: string;
    priceTag: string;
  };
  priceStrip: {
    title: string;
    highlight: string;
    note: string;
  };
  intro: {
    kicker: string;
    title: string;
    body: string;
    image: string;
    imageAlt: string;
    points: string[];
  };
  cards: {
    kicker: string;
    title: string;
    items: CardItem[];
  };
  prices: PriceItem[];
  gallery: CardItem[];
  quoteService: string;
};

export function ServicePage({
  seo,
  hero,
  priceStrip,
  intro,
  cards,
  prices,
  gallery,
  quoteService,
}: ServicePageProps) {
  return (
    <ElegantLayout>
      {seo ? <SEOHead {...seo} /> : null}
      <PageHero {...hero} />

      <section className="elegant-price-strip">
        <div className="elegant-container elegant-price-strip-inner">
          <div>
            <strong>
              {priceStrip.title} <span>{priceStrip.highlight}</span>
            </strong>
            <p>{priceStrip.note}</p>
          </div>
          <Link className="elegant-button" to="/contact">
            Get Estimate <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="elegant-section">
        <div className="elegant-container elegant-split">
          <div>
            <p className="elegant-kicker">{intro.kicker}</p>
            <h2 className="elegant-heading">{intro.title}</h2>
            <p className="elegant-copy">{intro.body}</p>
            <div className="elegant-check-list">
              {intro.points.map((point) => (
                <div className="elegant-check" key={point}>
                  <CheckCircle size={18} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
          <img src={intro.image} alt={intro.imageAlt} />
        </div>
      </section>

      <section className="elegant-section elegant-section-muted">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">{cards.kicker}</p>
            <h2 className="elegant-heading">{cards.title}</h2>
          </div>
          <div className="elegant-grid">
            {cards.items.map((item, index) => (
              <article className="elegant-card" key={item.title}>
                <div className="elegant-card-body">
                  <span className="elegant-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section elegant-section-card">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">Transparent Pricing</p>
            <h2 className="elegant-heading">Pricing From Current Product Data</h2>
            <p className="elegant-copy">
              These prices are pulled from the existing product and catalog data. Final quotations
              depend on measurements, material grade, finish, hardware and site scope.
            </p>
          </div>
          <div className="elegant-pricing-grid">
            {prices.map((price) => (
              <div className="elegant-price-card" key={price.label}>
                <span>{price.label}</span>
                <strong>{price.value}</strong>
                {price.note ? <p>{price.note}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">Portfolio</p>
            <h2 className="elegant-heading">Elegant Finish References</h2>
          </div>
          <div className="elegant-grid four">
            {gallery.map((item) => (
              <article className="elegant-card" key={item.title}>
                {item.image ? (
                  <div className="elegant-card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                ) : null}
                <div className="elegant-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section elegant-section-muted">
        <div className="elegant-container">
          <div className="elegant-quote-card">
            <p className="elegant-kicker">Warranty Backed</p>
            <h2 className="elegant-heading">Request a Measured Quote</h2>
            <p className="elegant-copy">
              Warranty support is available across eligible products, hardware, workmanship and
              installation, according to category and specification.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <QuoteForm defaultService={quoteService} />
            </div>
          </div>
        </div>
      </section>

      <section className="elegant-section-card" style={{ padding: '1.25rem 0' }}>
        <div className="elegant-container">
          <div className="elegant-check">
            <ShieldCheck size={18} />
            <span>
              AlterCraft warranty support is available across eligible products, services,
              hardware, workmanship and installation, with coverage based on the selected category
              and specification.
            </span>
          </div>
        </div>
      </section>
    </ElegantLayout>
  );
}
