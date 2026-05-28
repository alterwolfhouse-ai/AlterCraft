import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MaterialsPoster() {
  return (
    <section className="relative min-h-[80vh] bg-[#111111] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1626890757788-af964c61b239" 
          alt="Dark wood grain" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#111111]/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-24 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <span className="text-[#FFB800] text-sm uppercase tracking-[0.5em] font-bold mb-4 block">Sustainable Interior Materials</span>
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight mb-8">
              ENGINEERED<br />CAPABILITY
            </h2>
            <div className="h-1 w-24 bg-[#FFB800] mb-8" />
          </div>

          <div className="space-y-12">
            <div className="flex gap-6">
              <span className="text-4xl font-black text-[#FFB800]/20 leading-none">01</span>
              <div>
              <h3 className="text-white font-bold text-xl mb-3 uppercase tracking-wider">BAGASSE-BASED BOARDS</h3>
              <p className="text-[#A1A1AA] leading-relaxed">
                  Bagasse-based boards and engineered wood options help customers choose durable, lower-waste materials for wardrobes, desks, mandirs and storage units.
              </p>
              </div>
            </div>

            <div className="flex gap-6">
              <span className="text-4xl font-black text-[#FFB800]/20 leading-none">02</span>
              <div>
                <h3 className="text-white font-bold text-xl mb-3 uppercase tracking-wider">CNC PRECISION EDGES</h3>
                <p className="text-[#A1A1AA] leading-relaxed">
                  Clean machine-cut edges support better fitting, premium lamination and reliable assembly for modular wardrobes, panels and made-to-measure furniture.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
