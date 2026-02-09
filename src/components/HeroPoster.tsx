import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import bannerImg from 'figma:asset/cb3a90f4c2d2593fecf98a112c856f7f01af70fd.png';

export function HeroPoster() {
  const services = [
    "CNC Cutting & Engraving",
    "Custom Furniture",
    "Mandirs / Temples",
    "Panels & Nameplates",
    "Design-to-Fabrication"
  ];

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex flex-col overflow-hidden selection:bg-[#FFB800] selection:text-black">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      {/* Top Banner Asset Visual */}
      <div className="w-full h-1 bg-[#FFB800]" />
      
      <div className="flex-1 flex flex-col md:flex-row px-8 md:px-16 pt-24 pb-16">
        {/* Left: Brand Identity */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-[#FFB800]" />
              <span className="text-[#FFB800] uppercase tracking-[0.4em] text-xs font-bold">Luxury Studio</span>
            </div>
            
            <h1 className="text-7xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter mb-8">
              ALTER<br />CRAFT
            </h1>
            
            <div className="max-w-md">
              <p className="text-2xl md:text-3xl font-light text-[#A1A1AA] mb-4">
                Handcrafted <span className="text-white">+</span> CNC Precision
              </p>
              <p className="text-lg text-[#52525B] italic">
                Your Online Furniture Wala — Now Offline
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: Services & CTA */}
        <div className="flex-1 flex flex-col justify-center md:items-end mt-16 md:mt-0">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-right"
          >
            <h3 className="text-[#FFB800] text-sm uppercase tracking-[0.3em] font-bold mb-8 border-b border-[#FFB800]/20 pb-2">Our Expertise</h3>
            <ul className="space-y-4 mb-16">
              {services.map((service, idx) => (
                <li key={idx} className="text-white text-xl md:text-3xl font-medium tracking-tight hover:text-[#FFB800] transition-colors cursor-default">
                  {service}
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-end gap-2">
              <span className="text-[#52525B] text-xs uppercase tracking-widest font-bold">Call / WhatsApp</span>
              <a 
                href="https://wa.me/918826436093" 
                className="text-3xl md:text-5xl font-black text-[#FFB800] hover:scale-105 transition-transform"
              >
                8826436093
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Visual Element: Logo from Banner */}
      <div className="absolute bottom-12 left-8 md:left-16 opacity-10 grayscale hover:grayscale-0 transition-all duration-700 w-48 overflow-hidden rounded-none">
         <ImageWithFallback 
           src={bannerImg} 
           alt="Alter Craft Banner" 
           className="w-full object-cover scale-[2] origin-left"
         />
      </div>
    </section>
  );
}