import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import craftImg from 'figma:asset/b675cbd1b84f7d4bb2ab7cf1bd053fa443e61370.png';

export function ManufacturingPoster() {
  return (
    <section className="relative min-h-screen bg-[#111111] grid grid-cols-1 md:grid-cols-2 border-y border-white/5">
      {/* Left: Content */}
      <div className="flex flex-col justify-center px-8 md:px-24 py-20 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#FFB800] text-sm uppercase tracking-[0.5em] font-bold mb-4 block">Handcrafted Precision</span>
          <h2 className="text-5xl md:text-8xl font-black text-white leading-none mb-10">
            CUSTOM<br />MANUFACTURING
          </h2>
          
          <div className="space-y-8 max-w-lg">
            <div>
              <h4 className="text-[#FFB800] font-bold mb-2">HUMAN-LED ARTISTRY</h4>
              <p className="text-[#D4D4D8] text-lg leading-relaxed">
                Every piece begins with the master's touch. Careful measurement and material selection define our core craftsmanship.
              </p>
            </div>
            
            <div>
              <h4 className="text-[#FFB800] font-bold mb-2">CNC FABRICATION</h4>
              <p className="text-[#D4D4D8] text-lg leading-relaxed">
                We bridge tradition with technology. AI-assisted design and CNC precision ensure every cut is flawless and every joint is perfect.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-[#71717A] italic">
                Precision focus. Repeatability. Premium finishes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right: Visual */}
      <div className="relative h-64 md:h-full order-1 md:order-2 overflow-hidden">
        <ImageWithFallback 
          src={craftImg} 
          alt="Master Craftsmanship"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent md:hidden" />
      </div>
    </section>
  );
}