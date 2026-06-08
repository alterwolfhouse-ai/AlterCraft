import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import useEmblaCarousel from 'embla-carousel-react';
import {
  ArrowRight,
  MapPin,
  Clock,
  Mail,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Shield,
} from 'lucide-react';
import { siteDetails } from '../data/siteDetails';
import { trackEvent } from '../utils/analytics';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1920&h=1080&fit=crop&q=82',
    category: 'MODULAR KITCHEN',
    title: 'Share your kitchen photos and wall sizes.',
    description: 'We help you see a practical kitchen direction before you decide materials, storage and budget.',
    features: ['Wall sizes kept as shared', 'Appliances and plumbing checked', 'Quote after team review'],
    link: '/modular-kitchen',
    cta: 'Explore Modular Kitchens'
  },
  {
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&h=1080&fit=crop&q=82',
    category: 'OFFICE INTERIORS',
    title: 'Plan your office around how your team works.',
    description: 'Share photos, team size, storage needs and budget so we can suggest a clear direction.',
    features: ['Desk and movement planning', 'Cable and storage needs', 'Reviewed before quotation'],
    link: '/office-commercial',
    cta: 'Explore Office Interiors'
  },
  {
    image: 'https://images.unsplash.com/photo-1672137233327-37b0c1049e77?w=1920&h=1080&fit=crop&q=82',
    category: 'WARDROBES',
    title: 'Plan wardrobe storage around your daily routine.',
    description: 'Tell us the wall size, height, door space, loft needs and storage habits before fabrication.',
    features: ['Sliding or swing option', 'Loft and drawer planning', 'Sizes checked before quote'],
    link: '/wardrobes',
    cta: 'Inspect Wardrobe Solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?w=1920&h=1080&fit=crop&q=82',
    category: 'BEDS',
    title: 'Choose a bed that fits your room properly.',
    description: 'Share bedroom photos, switchboard positions, storage needs and the look you prefer.',
    features: ['Room clearance checked', 'Hydraulic or drawer storage', 'Headboard finish guidance'],
    link: '/designer-beds',
    cta: 'View Custom Bed Designs'
  },
  {
    image: 'https://images.unsplash.com/photo-1634822930432-0594057fdff2?w=1920&h=1080&fit=crop&q=82',
    category: 'DOORS',
    title: 'Select doors that match the rest of your interiors.',
    description: 'Share door sizes, room style, finish preference and hardware expectations.',
    features: ['Door size noted clearly', 'Finish matched with rooms', 'Eligible warranty support'],
    link: '/flush-doors',
    cta: 'Check Door Options'
  },
  {
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=1920&h=1080&fit=crop&q=82',
    category: 'CUSTOM FURNITURE',
    title: 'Start custom furniture with the right measurements.',
    description: 'TV units, mandirs, study tables and storage pieces begin with photos, usage and sizes.',
    features: ['Width, height and depth', 'Material preference', 'Build difficulty reviewed'],
    link: '/gallery',
    cta: 'Browse Crafted Portfolio'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop&q=82',
    category: 'DESIGN PREVIEW',
    title: 'Share your idea once and let us guide the next step.',
    description: 'We prepare a first visual direction, then our team checks details before quotation and work.',
    features: ['Design preview', 'Designer review', 'Quotation and installation support'],
    link: '/ai-planner',
    cta: 'Open AI Planner'
  }
];

export function HeroPoster() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 35,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Autoplay every 6.5 seconds
  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      emblaApi.scrollNext();
    }, 6500);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  const currentSlide = HERO_SLIDES[selectedIndex];

  return (
    <section className="hero-poster">
      <div className="hero-poster-texture" />

      {/* Embla Background Carousel */}
      <div className="hero-poster-carousel" ref={emblaRef}>
        <div className="hero-poster-track">
          {HERO_SLIDES.map((slide, idx) => (
            <div key={idx} className="hero-poster-slide">
              <AnimatePresence initial={false}>
                {idx === selectedIndex && (
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1.02, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, ease: 'easeOut' }}
                    className="hero-poster-image"
                  />
                )}
              </AnimatePresence>
              <div className="hero-poster-overlay-main" />
              <div className="hero-poster-overlay-bottom" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="hero-poster-content">
        <div className="hero-poster-grid">

          {/* Left Column: Typography & Info */}
          <div className="hero-poster-copy">
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Brand Tag */}
              <div className="hero-poster-brand-tag">
                <span />
                <strong>
                  ALTERCRAFT WOODS & FURNITURE
                </strong>
              </div>

              {/* Dynamic Content area */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="hero-poster-category">
                    {currentSlide.category}
                  </span>

                  <h1 className="hero-poster-title">
                    Imagine your space. Build it with AlterCraft.
                  </h1>

                  <p className="hero-poster-description">
                    Share photos, sizes and your budget. We will prepare a first design preview, discuss what is practical, and guide you toward a clear quotation and installation plan.
                  </p>

                  <div className="hero-poster-slide-summary">
                    <strong>{currentSlide.title}</strong>
                    <span>{currentSlide.description}</span>
                  </div>

                  <p className="hero-poster-disclaimer">
                    The first preview is only for imagination. Final sizes, materials, quotation
                    and work details are confirmed by the AlterCraft team before the project starts.
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action CTAs */}
              <div className="hero-poster-actions">
                <Link
                  to="/ai-planner/start"
                  className="hero-poster-primary"
                  onClick={() => trackEvent('ai_planner_click', { location: 'hero_carousel', category: currentSlide.category })}
                >
                  <Sparkles size={16} />
                  Start My Design Preview
                </Link>

                <Link
                  to="/gallery"
                  className="hero-poster-secondary"
                >
                  <span>View Portfolio</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Glassmorphic Control Panel */}
          <div className="hero-poster-panel-wrap">
            <div className="hero-poster-journey-stack" aria-hidden="true">
              <article className="hero-poster-journey-card site">
                <span className="hero-poster-journey-number">01</span>
                <div className="hero-poster-journey-image">
                  <img src={currentSlide.image} alt="" />
                </div>
                <strong>Site Photo</strong>
                <small>Your space as-is</small>
              </article>

              <article className="hero-poster-journey-card imagination">
                <span className="hero-poster-journey-number">02</span>
                <div className="hero-poster-journey-image">
                  <img src={currentSlide.image} alt="" />
                </div>
                <strong>Design Preview</strong>
                <small>First design idea</small>
              </article>

              <article className="hero-poster-journey-card execution">
                <span className="hero-poster-journey-number">03</span>
                <div className="hero-poster-blueprint">
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
                <strong>Team Review</strong>
                <small>Checked with you</small>
              </article>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-poster-panel"
            >
              <div className="hero-poster-panel-glow" />

              <div className="hero-poster-panel-head">
                <div className="hero-poster-panel-kicker">
                  <Sparkles size={14} />
                  <span>Specifications</span>
                </div>

                <div className="hero-poster-counter">
                  <span>0{selectedIndex + 1}</span> / 0{HERO_SLIDES.length}
                </div>
              </div>

              {/* Specification Bullet points that update on slide change */}
              <div className="hero-poster-feature-box">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="hero-poster-feature-motion"
                  >
                    <h3 className="hero-poster-feature-title">
                      What we check
                    </h3>
                    <ul className="hero-poster-feature-list">
                      {currentSlide.features.map((feat) => (
                        <li key={feat} className="hero-poster-feature-item">
                          <span />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Indicators & Buttons */}
              <div className="hero-poster-panel-nav">
                <div className="hero-poster-dots">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollTo(idx)}
                      className={`hero-poster-dot ${idx === selectedIndex ? 'active' : ''}`}
                      style={{ width: idx === selectedIndex ? '28px' : '10px' }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="hero-poster-arrows">
                  <button
                    type="button"
                    onClick={scrollPrev}
                    className="hero-poster-arrow"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={scrollNext}
                    className="hero-poster-arrow"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom Floating Meta bar */}
      <div className="hero-poster-meta-bar">
        <div className="hero-poster-meta-inner">
          <div className="hero-poster-meta-item">
            <MapPin size={12} />
            <span>Studio: {siteDetails.shortAddress}</span>
          </div>
          <div className="hero-poster-meta-item">
            <Clock size={12} />
            <span>Open: {siteDetails.workingHours}</span>
          </div>
          <div className="hero-poster-meta-item">
            <Mail size={12} />
            <a href={siteDetails.emailHref}>
              {siteDetails.email}
            </a>
          </div>
          <div className="hero-poster-meta-item">
            <Shield size={12} />
            <span>Reliable Warranty Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
