import React from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MessageSquare } from 'lucide-react';

export function RentalPoster() {
  const rentalTiers = [
    { title: "Standard Studio", price: "2,499", desc: "Essential work-from-home luxury setups." },
    { title: "Premium Executive", price: "4,999", desc: "Handcrafted desks & ergonomic CNC chairs." },
    { title: "Bespoke Office", price: "9,999", desc: "Full custom layout for commercial spaces." }
  ];

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex flex-col justify-center px-8 md:px-24 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[#FFB800] text-sm uppercase tracking-[0.5em] font-bold mb-4 block text-center">Flexible Luxury</span>
          <h2 className="text-5xl md:text-8xl font-black text-white leading-none text-center mb-6">
            FURNITURE ON RENT
          </h2>
          <p className="text-[#D4D4D8] text-center max-w-2xl mx-auto text-lg">
            Presenting rentals as a premium service. Clean condition, flexible terms, and made-to-order quality for your space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rentalTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#111111] border border-white/5 p-8 flex flex-col items-center text-center group hover:border-[#FFB800]/50 transition-colors rounded-none"
            >
              <h3 className="text-white text-xl font-bold mb-2 uppercase tracking-widest">{tier.title}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[#FFB800] text-sm font-bold">₹</span>
                <span className="text-4xl font-black text-white">{tier.price}</span>
                <span className="text-[#52525B] text-xs">/month</span>
              </div>
              <p className="text-[#71717A] text-sm mb-8 leading-relaxed italic">
                {tier.desc}
              </p>
              <a 
                href="https://wa.me/918826436093" 
                className="mt-auto flex items-center gap-2 text-[#FFB800] text-xs uppercase tracking-widest font-black border-b border-[#FFB800] pb-1 hover:gap-4 transition-all"
              >
                ENQUIRE NOW <MessageSquare size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Background Image */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[60%] opacity-[0.03] pointer-events-none">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1671722294182-ed01cbe66bd1" 
          alt="Luxury furniture background" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}