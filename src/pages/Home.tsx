import React, { useEffect, useMemo, useState } from 'react';
import { Link, NavLink } from 'react-router';
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  Eye,
  Hammer,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  Shield,
  Sparkles,
  Star,
  Upload,
  X,
} from 'lucide-react';
import { ElegantFooter, FloatingWhatsApp } from '../components/elegant/ElegantLayout';
import { QuoteForm } from '../components/elegant/QuoteForm';
import { PreviewDisclaimer, ServiceCard } from '../components/aiPlanner/PlannerComponents';
import { catalogProducts } from '../data/catalog';
import { products } from '../data/products';
import { siteDetails } from '../data/siteDetails';
import { trackEvent } from '../utils/analytics';
import { createWhatsappLink } from '../utils/contact';
import { HeroPoster } from '../components/HeroPoster';
import { SpatialStudio } from '../components/visual/SpatialStudio';
import { CanvaVisualShowcase } from '../components/visual/CanvaVisualShowcase';
import { canvaVisuals } from '../data/visualAssets';

const NAV_LINKS: Array<{ to: string; label: string; anchor?: boolean }> = [
  { to: '/', label: 'Home' },
  { to: '/ai-planner', label: 'Design Preview' },
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
            href={createWhatsappLink('Hi AlterCraft, I would like to discuss my furniture or interior work.')}
            className="home-button home-button-solid"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'home_header' })}
          >
            Talk to Us
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
            Chat on WhatsApp
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
      image: canvaVisuals.kitchenVisual,
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
    ['01', 'Site Measurement', 'Room measurements, product requirements and site details are noted clearly.'],
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
      image: canvaVisuals.kitchenVisual,
      readTime: '6 min read',
    },
    {
      category: 'Wardrobe Planning',
      title: 'Sliding vs swing wardrobe for a small bedroom',
      summary:
        'A clear guide to shutter clearance, access, maintenance and storage planning before ordering a custom wardrobe.',
      href: '/blog/sliding-vs-swing-wardrobe-small-bedroom/',
      image: canvaVisuals.wardrobeVisual,
      readTime: '5 min read',
    },
    {
      category: 'Finish Guide',
      title: 'Laminate, acrylic or veneer: which finish should you choose?',
      summary:
        'Compare finishes by daily use, cleaning, durability, budget and the premium look you want for your interiors.',
      href: '/blog/laminate-vs-acrylic-vs-veneer-finish/',
      image: canvaVisuals.aiJourney,
      readTime: '5 min read',
    },
    {
      category: 'Interior Coordination',
      title: 'Coordinate false ceiling, wall panels and furniture before work starts',
      summary:
        'Plan lighting, TV units, ceiling drops, wall panels and furniture together so the room feels intentional.',
      href: '/blog/false-ceiling-and-wall-panel-coordination/',
      image: canvaVisuals.office,
      readTime: '4 min read',
    },
    {
      category: 'Measurement Guide',
      title: 'How to measure a room for custom furniture',
      summary:
        'Know what wall sizes, switchboards, windows, doors and clearance details help create a more accurate first quote.',
      href: '/blog/how-to-measure-room-for-custom-furniture/',
      image: canvaVisuals.aiJourney,
      readTime: '4 min read',
    },
    {
      category: 'CNC Panels',
      title: 'CNC wall panels for TV units and feature walls',
      summary:
        'Choose pattern, depth, lighting and wiring access carefully before adding CNC wall panels to a TV wall.',
      href: '/blog/cnc-wall-panels-for-tv-unit/',
      image: canvaVisuals.office,
      readTime: '4 min read',
    },
  ];

  const aiJourneySteps = [
    {
      icon: Upload,
      title: 'Upload Site Photo',
      desc: 'Share clear photos from multiple angles, plus a sketch or reference if available.',
    },
    {
      icon: Ruler,
      title: 'Add Exact Dimensions',
      desc: 'Add length, width, height, doors, windows and other details as accurately as possible.',
    },
    {
      icon: Sparkles,
      title: 'Get a First Design Preview',
      desc: 'AlterCraft prepares visual directions so you can compare possible looks before deciding.',
    },
    {
      icon: CheckCircle,
      title: 'Discuss the Final Plan',
      desc: 'Our team checks materials, sizes, pricing and production details with you.',
    },
  ];

  const aiTutorialTips = [
    'Upload clear photos from multiple angles.',
    'Add length, width and height.',
    'Mention door and window position.',
    'Add budget range.',
    'Mention preferred style.',
    'Upload reference image if available.',
  ];

  const realWorkCategories = [
    'Office Interiors',
    'Modular Kitchens',
    'Wardrobes',
    'Beds',
    'Doors',
    'TV Units',
    'Custom Furniture',
    'Commercial Spaces',
  ];

  const storyStages = [
    {
      title: 'Before Site Photo',
      desc: 'Clear photos of the current room or furniture area.',
      image:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&h=680&fit=crop&auto=format',
    },
    {
      title: 'Design Preview',
      desc: 'A first visual idea to help you choose the look and direction.',
      image: canvaVisuals.aiJourney,
    },
    {
      title: 'Human-Verified Execution Design',
      desc: 'AlterCraft checks sizes, materials, scope and quotation with you.',
      image: canvaVisuals.office,
    },
    {
      title: 'Final Execution',
      desc: 'Production, installation and handover after confirmation.',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&h=680&fit=crop&auto=format',
    },
  ];

  const plannerServices = [
    {
      title: 'Modular Kitchen',
      description: 'Layout, storage, appliance spaces and finish suggestions for your kitchen.',
      image: canvaVisuals.kitchenVisual,
    },
    {
      title: 'Office Interior',
      description: 'Workstations, reception, storage and furniture planning for offices.',
      image: canvaVisuals.office,
    },
    {
      title: 'Wardrobe',
      description: 'Sliding, swing, loft, drawer and internal storage suggestions.',
      image: canvaVisuals.wardrobeVisual,
    },
    {
      title: 'Bedroom Furniture',
      description: 'Bed, headboard, side table and storage ideas based on your room.',
      image:
        'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?w=900&h=650&fit=crop&auto=format',
    },
    {
      title: 'Beds',
      description: 'Hydraulic, drawer, platform and upholstered bed options.',
      image:
        'https://images.unsplash.com/photo-1696762932825-2737db830bbe?w=900&h=650&fit=crop&auto=format',
    },
    {
      title: 'Flush Doors',
      description: 'Door finishes, hardware and room-wise matching guidance.',
      image:
        'https://images.unsplash.com/photo-1634822930432-0594057fdff2?w=900&h=650&fit=crop&auto=format',
    },
    {
      title: 'TV Units',
      description: 'Wall panel, console, storage, wiring and lighting ideas.',
      image:
        'https://images.unsplash.com/photo-1618220179428-22790b461013?w=900&h=650&fit=crop&auto=format',
    },
    {
      title: 'Custom Furniture',
      description: 'Measured ideas for mandirs, study tables, storage, counters and special units.',
      image:
        'https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?w=900&h=650&fit=crop&auto=format',
    },
    {
      title: 'Full Interior Execution',
      description: 'Room-by-room planning that can move into quotation and production.',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&h=650&fit=crop&auto=format',
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

        <SpatialStudio />

        <CanvaVisualShowcase />

        <section className="home-section home-ai-intro">
          <div className="home-container home-ai-intro-grid">
            <div>
              <p className="home-kicker">Start With A Design Idea</p>
              <h2>See the idea first. Decide after our team reviews it.</h2>
              <p>
                Share your room photos, sizes, budget and requirements. We prepare a first design
                preview so you can understand the direction before discussing materials, quotation,
                production and installation.
              </p>
              <PreviewDisclaimer compact />
              <div className="home-ai-actions">
                <Link to="/ai-planner/start" className="home-button home-button-solid">
                  Start My Design Preview
                  <ArrowRight size={16} />
                </Link>
                <Link to="/my-projects/AC-IMG-0001" className="home-button home-button-ghost">
                  See Sample Preview
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="home-ai-flow-card">
              {['Design Preview', 'Designer Review', 'Final Details', 'Quotation', 'Production', 'Installation'].map((stage, index) => (
                <article key={stage}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{stage}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section-muted">
          <div className="home-container">
            <div className="home-section-head">
              <p className="home-kicker">How It Works</p>
              <h2>Four simple steps before we begin the work</h2>
            </div>
            <div className="home-ai-step-grid">
              {aiJourneySteps.map(({ icon: Icon, title, desc }) => (
                <article key={title} className="home-ai-step-card">
                  <span><Icon size={24} /></span>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="home-container home-ai-tutorial-grid">
            <div>
              <p className="home-kicker">How To Share Details</p>
              <h2>Clear photos and sizes help us guide you better</h2>
              <p>
                Add the details you know. If something is missing, we will keep it marked as
                "Not provided" and confirm it with you before moving ahead.
              </p>
            </div>
            <div className="home-ai-tip-list">
              {aiTutorialTips.map((tip) => (
                <div key={tip}>
                  <CheckCircle size={18} />
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section-muted">
          <div className="home-container">
            <div className="home-split-head">
              <div>
                <p className="home-kicker">Portfolio / Real Work</p>
                <h2>Choose the kind of space you want to improve</h2>
              </div>
              <Link to="/gallery" className="home-inline-link">
                View Portfolio
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="home-ai-category-strip">
              {realWorkCategories.map((category) => (
                <Link key={category} to="/gallery">
                  <Eye size={17} />
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-ai-story-section">
          <div className="home-container">
            <div className="home-section-head">
              <p className="home-kicker">Before - Idea - Finished Work</p>
              <h2>A simpler way to understand your project</h2>
            </div>
            <div className="home-ai-story-grid">
              {storyStages.map((stage, index) => (
                <article key={stage.title}>
                  <img src={stage.image} alt={stage.title} />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section-muted">
          <div className="home-container">
            <div className="home-section-head">
              <p className="home-kicker">Services</p>
              <h2>Start with the room or furniture you need</h2>
              <p>
                Choose a category, share the room details and we will help you plan the next step.
              </p>
            </div>
            <div className="planner-service-grid home-planner-service-grid">
              {plannerServices.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>

        <section className="home-section">
          <div className="home-container">
            <div className="home-section-head">
              <p className="home-kicker">Popular Starting Points</p>
              <h2>Clear starting prices for common furniture work</h2>
              <p>
                Prices shown here come from the current product data. Final quotations are shared
                after measurement, material choice and scope confirmation.
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
              <h2>Featured project ideas</h2>
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
                product data, with final size and finish adjusted to your room.
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

        <section className="home-ai-final-cta">
          <div className="home-container">
            <p className="home-kicker">Start Planning</p>
            <h2>Ready to see what your space can become?</h2>
            <p>
              Share your space, add the important sizes and start a design preview request with
              AlterCraft.
            </p>
            <Link to="/ai-planner/start" className="home-button home-button-solid">
              Share Your Space Now
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <section className="home-section home-contact-section">
          <div className="home-container home-contact-grid">
            <div>
              <p className="home-kicker">Get Started</p>
              <h2>Request a free consultation</h2>
              <p>
                Share the room size, product type, preferred finish and timeline. Your message
                opens on WhatsApp so we can continue the conversation quickly.
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
    </div>
  );
}
