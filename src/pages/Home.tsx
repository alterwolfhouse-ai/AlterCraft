import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router';
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Hammer,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  Shield,
  Star,
  X,
} from 'lucide-react';
import { ChatWidget } from '../components/ChatWidget';
import { ElegantFooter, FloatingWhatsApp } from '../components/elegant/ElegantLayout';
import { QuoteForm } from '../components/elegant/QuoteForm';
import { catalogProducts } from '../data/catalog';
import { products } from '../data/products';
import { siteDetails } from '../data/siteDetails';
import { trackEvent } from '../utils/analytics';
import { createWhatsappLink } from '../utils/contact';
import { HeroPoster } from '../components/HeroPoster';

const NAV_LINKS: Array<{ to: string; label: string; anchor?: boolean }> = [
  { to: '/', label: 'Home' },
  { to: '/modular-kitchen', label: 'Kitchen' },
  { to: '/designer-beds', label: 'Beds' },
  { to: '/flush-doors', label: 'Doors' },
  { to: '/wardrobes', label: 'Wardrobes' },
  { to: '/gallery', label: 'Gallery' },
  { to: '#blog', label: 'Blog', anchor: true },
  { to: '/warranty-quality', label: 'Warranty' },
  { to: '/contact', label: 'Contact' },
];


const formatInr = (value: number) => `INR ${value.toLocaleString('en-IN')}`;

const lowestProductPrice = (category: string) => {
  const prices = products
    .filter((product) => product.category === category)
    .map((product) => product.prices.offer)
    .filter(Boolean);
  return prices.length ? Math.min(...prices) : 0;
};

function HomeHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`home-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="home-container home-header-inner">
        <Link to="/" className="home-brand" aria-label="AlterCraft home">
          <span className="home-brand-mark">AC</span>
          <span>
            <span className="home-brand-kicker">Premium Interiors</span>
            <span className="home-brand-name">AlterCraft</span>
          </span>
        </Link>

        <nav className="home-nav" aria-label="Main navigation">
          {NAV_LINKS.map((item) =>
            item.anchor ? (
              <a key={item.to} href={item.to}>
                {item.label}
              </a>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="home-header-actions">
          <a href={siteDetails.phoneHref} className="home-header-contact">
            <Phone size={16} />
            {siteDetails.phoneDisplay}
          </a>
          <a
            href={createWhatsappLink('Hi AlterCraft, I would like a furniture quote.')}
            className="home-button home-button-solid"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'home_header' })}
          >
            Get Quote
          </a>
        </div>

        <button
          type="button"
          className="home-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div className={`home-mobile-panel ${menuOpen ? 'open' : ''}`}>
        <div className="home-container">
          {NAV_LINKS.map((item) =>
            item.anchor ? (
              <a key={item.to} href={item.to} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ) : (
              <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            )
          )}
          <a
            href={createWhatsappLink('Hi AlterCraft, I would like a furniture quote.')}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'home_mobile_menu' })}
          >
            WhatsApp {siteDetails.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const bedStartingPrice = useMemo(() => lowestProductPrice('Beds'), []);
  const wardrobeStartingPrice = useMemo(() => lowestProductPrice('Wardrobes'), []);
  const kitchenCatalogStarting = useMemo(() => {
    const kitchenPrices = catalogProducts
      .filter((product) => product.category === 'kitchen')
      .map((product) => product.marketBuy)
      .filter(Boolean);
    return kitchenPrices.length ? Math.min(...kitchenPrices) : 0;
  }, []);

  const trustBadges = [
    { icon: Award, label: 'Custom made furniture' },
    { icon: Star, label: 'Premium finishing' },
    { icon: Shield, label: 'Warranty support across eligible products' },
    { icon: Hammer, label: 'Professional installation' },
    { icon: Ruler, label: 'Site measurement support' },
  ];

  const offerCards = [
    {
      title: 'Modular Kitchen',
      price: 'Starting from INR 460 / sq.ft.',
      note: kitchenCatalogStarting
        ? `Catalog kitchen units also listed from ${formatInr(kitchenCatalogStarting)}.`
        : 'Final quote depends on site size, hardware and finish.',
      image:
        'https://images.unsplash.com/photo-1682662045846-77f6e1ce55b4?w=900&h=650&fit=crop&auto=format',
      to: '/modular-kitchen',
      cta: 'Explore Kitchens',
    },
    {
      title: 'Designer Beds',
      price: `Starting from ${formatInr(bedStartingPrice)}`,
      note: 'Hydraulic storage, platform and made-to-size bedroom furniture.',
      image:
        'https://images.unsplash.com/photo-1696762932825-2737db830bbe?w=900&h=650&fit=crop&auto=format',
      to: '/designer-beds',
      cta: 'View Bed Designs',
    },
    {
      title: 'Flush Doors',
      price: 'Starting from INR 7,600 / door',
      note: 'Door-specific warranty available for eligible specifications.',
      image:
        'https://images.unsplash.com/photo-1603673298820-40d77252226d?w=900&h=650&fit=crop&auto=format',
      to: '/flush-doors',
      cta: 'Check Door Options',
    },
  ];

  const whyUs = [
    {
      icon: Award,
      title: 'Premium Quality Materials',
      desc: 'Thoughtful board selection, refined laminates, reliable hardware and finishes chosen for everyday Indian homes.',
    },
    {
      icon: Ruler,
      title: 'Custom-Made to Fit',
      desc: 'Every cabinet, bed, wardrobe and office unit is planned around your measurements, storage needs and usage.',
    },
    {
      icon: Hammer,
      title: 'Expert Installation',
      desc: 'Installation is handled with careful alignment, clean finishing and practical handover guidance.',
    },
    {
      icon: Shield,
      title: 'Warranty Across Categories',
      desc: 'Warranty support is available across eligible products, hardware, workmanship and installation scope.',
    },
    {
      icon: Star,
      title: 'Transparent Pricing',
      desc: 'Quotes are itemized by size, material, finish and site work so decisions stay clear from the beginning.',
    },
    {
      icon: CheckCircle,
      title: 'After-Sales Support',
      desc: 'The relationship continues after handover with service, warranty guidance and support where applicable.',
    },
  ];

  const processSteps = [
    ['01', 'Site Measurement', 'Room measurements, product requirements and site constraints are documented clearly.'],
    ['02', 'Design & Estimate', 'Material, finish, storage and pricing options are planned before production starts.'],
    ['03', 'Manufacturing', 'Furniture is fabricated with the agreed specifications, hardware and finishing details.'],
    ['04', 'Installation', 'The team installs, checks alignment and completes final touch-ups at site.'],
    ['05', 'Support', 'Care guidance, warranty support and service coordination remain available after handover.'],
  ];

  const categories = [
    {
      title: 'Modular Kitchen',
      to: '/modular-kitchen',
      image:
        'https://images.unsplash.com/photo-1683629357935-f3f4777ddf41?w=900&h=650&fit=crop&auto=format',
    },
    {
      title: 'Designer Beds',
      to: '/designer-beds',
      image:
        'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?w=900&h=650&fit=crop&auto=format',
    },
    {
      title: 'Flush Doors',
      to: '/flush-doors',
      image:
        'https://images.unsplash.com/photo-1634822930432-0594057fdff2?w=900&h=650&fit=crop&auto=format',
    },
    {
      title: 'Wardrobes & Storage',
      to: '/wardrobes',
      image:
        'https://images.unsplash.com/photo-1672137233327-37b0c1049e77?w=900&h=650&fit=crop&auto=format',
    },
    {
      title: 'Office Interiors',
      to: '/office-commercial',
      image:
        'https://images.unsplash.com/photo-1715593949273-09009558300a?w=900&h=650&fit=crop&auto=format',
    },
  ];

  const portfolio = [
    {
      label: 'Warm Modular Kitchen',
      image:
        'https://images.unsplash.com/photo-1559554704-0f74b35a8718?w=900&h=650&fit=crop&auto=format',
    },
    {
      label: 'Premium Living Storage',
      image:
        'https://images.unsplash.com/photo-1704040686413-2c607dbd2f06?w=900&h=900&fit=crop&auto=format',
    },
    {
      label: 'Wardrobe Planning',
      image:
        'https://images.unsplash.com/photo-1649361811423-a55616f7ab11?w=900&h=650&fit=crop&auto=format',
    },
    {
      label: 'Designer Bedroom',
      image:
        'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?w=900&h=900&fit=crop&auto=format',
    },
  ];

  const testimonials = [
    {
      name: 'Homeowner, Ghaziabad',
      text: 'The quotation was clear, the finishes were explained properly and the installation team kept the work neat.',
    },
    {
      name: 'Bedroom Furniture Client',
      text: 'The bed and wardrobe were planned around our exact room size. Storage became much easier without making the room heavy.',
    },
    {
      name: 'Office Interior Client',
      text: 'AlterCraft understood the office workflow first, then planned workstations, storage and cable movement very practically.',
    },
  ];

  const blogPosts = [
    {
      category: 'Kitchen Cost Guide',
      title: 'What changes modular kitchen cost in Delhi NCR?',
      summary:
        'Understand how layout, cabinet material, shutter finish, hardware, countertop and site work shape a practical kitchen quotation.',
      href: '/blog/modular-kitchen-cost-delhi-ncr/',
      image: '/images/blog/wardrobe-storage-cover.png',
      readTime: '6 min read',
    },
    {
      category: 'Wardrobe Planning',
      title: 'Sliding vs swing wardrobe for a small bedroom',
      summary:
        'A clear guide to shutter clearance, access, maintenance and storage planning before ordering a custom wardrobe.',
      href: '/blog/sliding-vs-swing-wardrobe-small-bedroom/',
      image: '/images/blog/wardrobe-storage-cover.png',
      readTime: '5 min read',
    },
    {
      category: 'Finish Guide',
      title: 'Laminate, acrylic or veneer: which finish should you choose?',
      summary:
        'Compare finishes by daily use, cleaning, durability, budget and the premium look you want for your interiors.',
      href: '/blog/laminate-vs-acrylic-vs-veneer-finish/',
      image: '/images/blog/wardrobe-storage-cover.png',
      readTime: '5 min read',
    },
    {
      category: 'Interior Coordination',
      title: 'Coordinate false ceiling, wall panels and furniture before work starts',
      summary:
        'Plan lighting, TV units, ceiling drops, wall panels and furniture together so the room feels intentional.',
      href: '/blog/false-ceiling-and-wall-panel-coordination/',
      image: '/images/blog/cnc-interiors-cover.png',
      readTime: '4 min read',
    },
    {
      category: 'Measurement Guide',
      title: 'How to measure a room for custom furniture',
      summary:
        'Know what wall sizes, switchboards, windows, doors and clearance details help create a more accurate first quote.',
      href: '/blog/how-to-measure-room-for-custom-furniture/',
      image: '/images/blog/wardrobe-storage-cover.png',
      readTime: '4 min read',
    },
    {
      category: 'CNC Panels',
      title: 'CNC wall panels for TV units and feature walls',
      summary:
        'Choose pattern, depth, lighting and wiring access carefully before adding CNC wall panels to a TV wall.',
      href: '/blog/cnc-wall-panels-for-tv-unit/',
      image: '/images/blog/cnc-interiors-cover.png',
      readTime: '4 min read',
    },
  ];

  return (
    <div className="home-site">
      <HomeHeader />

      <main>
        <HeroPoster />

        <section className="home-trust-strip">
          <div className="home-container home-trust-grid">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div key={label} className="home-trust-item">
                <Icon size={19} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section">
          <div className="home-container">
            <div className="home-section-head">
              <p className="home-kicker">Best Value Projects</p>
              <h2>Premium furniture planned with clear starting references</h2>
              <p>
                Pricing shown here follows the current repo/design data. Final quotations are
                itemized after measurement, material choice and scope confirmation.
              </p>
            </div>

            <div className="home-offer-grid">
              {offerCards.map((card) => (
                <article key={card.title} className="home-offer-card">
                  <div className="home-offer-image">
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className="home-offer-body">
                    <h3>{card.title}</h3>
                    <strong>{card.price}</strong>
                    <p>{card.note}</p>
                    <Link to={card.to} className="home-card-link">
                      {card.cta}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section-muted">
          <div className="home-container">
            <div className="home-section-head">
              <p className="home-kicker">Our Promise</p>
              <h2>Why choose AlterCraft?</h2>
            </div>

            <div className="home-feature-grid">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <article key={title} className="home-feature-card">
                  <span>
                    <Icon size={26} />
                  </span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-material-band">
          <img
            src="https://images.unsplash.com/photo-1682662044733-9120471befc7?w=1920&h=760&fit=crop&auto=format"
            alt="Premium modular kitchen material finish"
          />
          <div className="home-material-overlay" />
          <div className="home-container home-material-content">
            <div>
              <p className="home-kicker">Materials We Use</p>
              <h2>Crafted with materials selected for daily use</h2>
              <p>
                Kitchen moisture, bedroom storage load, shutter size, hardware movement and
                finish maintenance are considered before we recommend materials.
              </p>
              <Link to="/warranty-quality" className="home-inline-link">
                Learn about quality standards
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="home-material-list">
              {[
                ['Moisture-aware boards', 'Chosen according to site exposure and product category.'],
                ['Premium laminates', 'Warm, easy-to-maintain finishes for homes and offices.'],
                ['Reliable hardware', 'Soft-close hinges, channels and storage fittings where applicable.'],
                ['Clean detailing', 'Edge bands, alignment and handover checks before completion.'],
              ].map(([title, desc]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="home-container">
            <div className="home-section-head">
              <p className="home-kicker">How It Works</p>
              <h2>Our design and delivery process</h2>
            </div>
            <div className="home-process-grid">
              {processSteps.map(([num, title, desc]) => (
                <article key={num} className="home-process-step">
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section-muted">
          <div className="home-container">
            <div className="home-split-head">
              <div>
                <p className="home-kicker">Portfolio</p>
                <h2>Featured project directions</h2>
              </div>
              <Link to="/gallery" className="home-inline-link">
                View all
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="home-portfolio-grid">
              {portfolio.map((item) => (
                <article key={item.label}>
                  <img src={item.image} alt={item.label} />
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="home-container">
            <div className="home-section-head">
              <p className="home-kicker">Explore</p>
              <h2>Product categories</h2>
              <p>
                Wardrobes currently start from {formatInr(wardrobeStartingPrice)} in the
                product data, with final size and finish adjusted to your site.
              </p>
            </div>
            <div className="home-category-grid">
              {categories.map((category) => (
                <Link key={category.title} to={category.to} className="home-category-card">
                  <img src={category.image} alt={category.title} />
                  <span>{category.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-warranty-band">
          <div className="home-container home-warranty-inner">
            <div>
              <p className="home-kicker">Our Commitment</p>
              <h2>Warranty & after-sales support across eligible work</h2>
              <p>
                Warranty is not limited to doors. AlterCraft provides warranty support across
                eligible products, services, hardware, workmanship and installation scope.
              </p>
            </div>
            <div className="home-warranty-grid">
              {[
                ['Products', 'Eligible furniture and interior categories'],
                ['Hardware', 'Brand and specification based coverage'],
                ['Doors', 'Door-specific warranty where applicable'],
                ['Service', 'Repair and support coordination after handover'],
              ].map(([title, desc]) => (
                <article key={title}>
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section-card">
          <div className="home-container">
            <div className="home-section-head">
              <p className="home-kicker">Client Notes</p>
              <h2>What customers value</h2>
            </div>
            <div className="home-testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.name}>
                  <div>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} size={16} />
                    ))}
                  </div>
                  <p>"{item.text}"</p>
                  <strong>{item.name}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-blog-section" id="blog">
          <div className="home-container">
            <div className="home-split-head">
              <div>
                <p className="home-kicker">Design Journal</p>
                <h2>Planning guides from the AlterCraft blog</h2>
                <p>
                  Practical guides for modular kitchen cost in Delhi NCR, Noida and Ghaziabad,
                  small kitchen storage, wardrobe planning, finishes and site-visit preparation.
                </p>
              </div>
              <a href="/blog/modular-kitchen-cost-delhi-ncr/" className="home-inline-link">
                Start reading
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="home-blog-grid">
              {blogPosts.map((post, index) => (
                <a
                  key={post.href}
                  href={post.href}
                  className={`home-blog-card ${index === 0 ? 'featured' : ''}`}
                >
                  <span className="home-blog-image">
                    <img src={post.image} alt={post.title} />
                  </span>
                  <span className="home-blog-body">
                    <span className="home-blog-meta">
                      {post.category}
                      <span>{post.readTime}</span>
                    </span>
                    <strong>{post.title}</strong>
                    <span>{post.summary}</span>
                    <span className="home-blog-link">
                      Read guide
                      <ArrowRight size={15} />
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-contact-section">
          <div className="home-container home-contact-grid">
            <div>
              <p className="home-kicker">Get Started</p>
              <h2>Request a free consultation</h2>
              <p>
                Share room size, product type, preferred finish and timeline. The lead will open
                directly on WhatsApp so the discussion can continue quickly.
              </p>
              <div className="home-contact-list">
                <a href={siteDetails.phoneHref}>
                  <Phone size={17} />
                  {siteDetails.phoneDisplay}
                </a>
                <a href={siteDetails.emailHref}>
                  <Mail size={17} />
                  {siteDetails.email}
                </a>
                <span>
                  <MapPin size={17} />
                  {siteDetails.fullAddress}
                </span>
                <span>
                  <Shield size={17} />
                  GSTIN: {siteDetails.gstin}
                </span>
                <span>
                  <Shield size={17} />
                  Udyam: {siteDetails.udyamRegistration}
                </span>
                <span>
                  <Shield size={17} />
                  {siteDetails.warranty}
                </span>
              </div>
            </div>
            <div className="home-quote-card">
              <h3>Request Free Quote</h3>
              <QuoteForm defaultService="Full Home Furniture" />
            </div>
          </div>
        </section>
      </main>

      <ElegantFooter />
      <FloatingWhatsApp />
      <ChatWidget />
    </div>
  );
}
