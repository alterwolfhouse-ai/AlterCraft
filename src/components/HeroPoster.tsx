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
    <section className="relative min-h-[92vh] lg:min-h-screen bg-[#030213] flex flex-col overflow-hidden selection:bg-[#B8891A] selection:text-black">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-10" />

      {/* Embla Background Carousel */}
      <div className="absolute inset-0 w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {HERO_SLIDES.map((slide, idx) => (
            <div key={idx} className="relative min-w-0 shrink-0 grow-0 basis-full h-full overflow-hidden">
              <AnimatePresence initial={false}>
                {idx === selectedIndex && (
                  <motion.img
                    src={slide.image}
                    alt={slide.title}
                    initial={{ scale: 1.15, opacity: 0 }}
                    animate={{ scale: 1.02, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.6, ease: 'easeOut' }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}
              </AnimatePresence>
              {/* Individual Slide Overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#030213]/95 via-[#030213]/85 to-[#030213]/40 md:bg-gradient-to-r md:from-[#030213]/95 md:via-[#030213]/80 md:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030213] via-transparent to-[#030213]/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-20 flex-1 flex flex-col justify-center container mx-auto px-6 md:px-12 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Typography & Info */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Brand Tag */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-[#B8891A]" />
                <span className="text-[#B8891A] uppercase tracking-[0.3em] text-xs font-bold font-sans">
                  ALTERCRAFT WOODS & FURNITURE
                </span>
              </div>

              {/* Dynamic Content area */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-[#fff8ec]/75 uppercase tracking-[0.2em] text-xs font-bold mb-2 block font-sans">
                    {currentSlide.category}
                  </span>

                  <h1 className="text-4xl md:text-6xl lg:text-[4.2rem] font-bold text-[#fff8ec] leading-[1.05] tracking-tight mb-6 font-serif">
                    {currentSlide.title}
                  </h1>

                  <p className="text-base md:text-lg text-[#fff8ec]/80 max-w-xl mb-8 leading-relaxed font-sans font-light">
                    {currentSlide.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <a
                  href={createWhatsappLink(`Hi AlterCraft, I am interested in your ${currentSlide.category} services.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#B8891A] text-[#030213] px-8 py-3.5 font-bold text-xs uppercase tracking-widest hover:bg-[#fff8ec] hover:text-[#030213] transition-colors rounded-none shadow-lg shadow-black/20"
                  onClick={() => trackEvent('whatsapp_click', { location: 'hero_carousel', category: currentSlide.category })}
                >
                  <MessageCircle size={16} />
                  Get Free Consultation
                </a>

                <Link
                  to={currentSlide.link}
                  className="inline-flex items-center justify-center gap-2 bg-transparent border border-[#fff8ec]/30 text-[#fff8ec] px-8 py-3.5 font-bold text-xs uppercase tracking-widest hover:border-[#B8891A] hover:text-[#B8891A] transition-colors rounded-none"
                >
                  <span>{currentSlide.cta}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Glassmorphic Control Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-sm rounded-[4px] border border-[#fff8ec]/10 bg-[#030213]/40 backdrop-blur-md p-6 md:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Soft decorative background glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#B8891A]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#B8891A]" />
                  <span className="text-[#fff8ec]/50 text-xs font-bold tracking-widest uppercase">Specifications</span>
                </div>

                <div className="text-right font-mono text-[#fff8ec]/60 text-xs tracking-wider">
                  <span className="text-[#B8891A] font-bold">0{selectedIndex + 1}</span> / 0{HERO_SLIDES.length}
                </div>
              </div>

              {/* Specification Bullet points that update on slide change */}
              <div className="min-h-[140px] mb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <h3 className="text-[#fff8ec] text-sm font-semibold tracking-wide border-b border-[#fff8ec]/10 pb-2 font-sans">
                      Key Standards
                    </h3>
                    <ul className="space-y-3 font-sans">
                      {currentSlide.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-[#fff8ec]/80 leading-normal">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#B8891A] mt-1.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Indicators & Buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-[#fff8ec]/10">
                {/* Dots / Small bars */}
                <div className="flex gap-2">
                  {HERO_SLIDES.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => scrollTo(idx)}
                      className="group relative h-1.5 transition-all duration-300"
                      style={{ width: idx === selectedIndex ? '28px' : '10px' }}
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <span
                        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
                          idx === selectedIndex ? 'bg-[#B8891A]' : 'bg-[#fff8ec]/35 group-hover:bg-[#fff8ec]/60'
                        }`}
                      />
                    </button>
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={scrollPrev}
                    className="w-9 h-9 rounded-full border border-[#fff8ec]/20 hover:border-[#B8891A] flex items-center justify-center text-[#fff8ec]/70 hover:text-[#B8891A] transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    type="button"
                    onClick={scrollNext}
                    className="w-9 h-9 rounded-full border border-[#fff8ec]/20 hover:border-[#B8891A] flex items-center justify-center text-[#fff8ec]/70 hover:text-[#B8891A] transition-colors"
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
      <div className="relative z-20 border-t border-[#fff8ec]/10 bg-[#030213]/40 backdrop-blur-sm py-4 hidden md:block">
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center text-xs text-[#fff8ec]/60 font-sans">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-[#B8891A]" />
            <span>Studio: {siteDetails.shortAddress}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={12} className="text-[#B8891A]" />
            <span>Open: {siteDetails.workingHours}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={12} className="text-[#B8891A]" />
            <a href={siteDetails.emailHref} className="hover:text-[#B8891A] transition-colors">
              {siteDetails.email}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Shield size={12} className="text-[#B8891A]" />
            <span>Reliable Warranty Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
