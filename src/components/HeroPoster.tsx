import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import useEmblaCarousel from 'embla-carousel-react';
import {
  ArrowRight,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Shield,
} from 'lucide-react';
import { siteDetails } from '../data/siteDetails';
import { createWhatsappLink } from '../utils/contact';
import { trackEvent } from '../utils/analytics';

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1920&h=1080&fit=crop&q=82',
    category: 'MODULAR KITCHENS',
    title: 'Precision-Engineered Warm Culinary Spaces',
    description: 'BWR and BWP moisture-aware modular kitchens for Delhi NCR homes, planned around cooking flow, smart storage, soft-close pull-outs, pantry towers and durable premium edge-banding.',
    features: ['BWP Plywood Core Options', 'Soft-Close Hardware & Hinges', 'L-Shape, Parallel & Island Layouts'],
    link: '/modular-kitchen',
    cta: 'Explore Modular Kitchens'
  },
  {
    image: 'https://images.unsplash.com/photo-1644057501622-dfa7dd26dbfb?w=1920&h=1080&fit=crop&q=82',
    category: 'DESIGNER BEDS',
    title: 'Custom Wooden Beds Crafted for Rest',
    description: 'Beds planned around your room layout, side tables, headboard height, and storage needs. Features optional hydraulic lift storage and clean, scratch-resistant finishes.',
    features: ['Hydraulic Lift Bed Storage', 'Custom Queen & King Sizes', 'Upholstered & Veneer Headboards'],
    link: '/designer-beds',
    cta: 'View Custom Bed Designs'
  },
  {
    image: 'https://images.unsplash.com/photo-1672137233327-37b0c1049e77?w=1920&h=1080&fit=crop&q=82',
    category: 'WARDROBES & STORAGE',
    title: 'Custom Measured Sliding & Swing Wardrobes',
    description: 'Maximize storage in Noida, Ghaziabad and Delhi NCR bedrooms without compromising clearance. Integrated loft storage, custom drawers, magnetic lock closets and internal lighting.',
    features: ['Space-Saving Sliding Shutters', 'Custom Loft & Hanging Planning', 'Eco-Friendly Internal Board Options'],
    link: '/wardrobes',
    cta: 'Inspect Wardrobe Solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=1920&h=1080&fit=crop&q=82',
    category: 'CNC PANELS & DECOR',
    title: 'CNC Architectural Detailing & Mandirs',
    description: 'Precision CNC-cut design elements for warm modern accents. Carved teak temples, floral decorative jaali partitions, and backlit custom nameplates.',
    features: ['Precision CNC Jaali Partitions', 'Traditional & Modern Pooja Mandirs', 'Backlit Acrylic Entrance Nameplates'],
    link: '/gallery',
    cta: 'Browse Crafted Portfolio'
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
                    {currentSlide.title}
                  </h1>

                  <p className="hero-poster-description">
                    {currentSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action CTAs */}
              <div className="hero-poster-actions">
                <a
                  href={createWhatsappLink(`Hi AlterCraft, I am interested in your ${currentSlide.category} services.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-poster-primary"
                  onClick={() => trackEvent('whatsapp_click', { location: 'hero_carousel', category: currentSlide.category })}
                >
                  <MessageCircle size={16} />
                  Get Free Consultation
                </a>

                <Link
                  to={currentSlide.link}
                  className="hero-poster-secondary"
                >
                  <span>{currentSlide.cta}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Glassmorphic Control Panel */}
          <div className="hero-poster-panel-wrap">
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
                      Key Standards
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
