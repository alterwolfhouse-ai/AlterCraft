import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, MapPin, BadgeCheck, Zap } from 'lucide-react';

export function TrustPoster() {
  const certs = [
    { icon: <BadgeCheck className="text-[#FFB800]" />, label: "MSME CERTIFIED", sub: "UDYAM-UP-29-0218457" },
    { icon: <ShieldCheck className="text-[#FFB800]" />, label: "GST REGISTERED", sub: "09DPRPR7653F1Z2" },
    { icon: <Zap className="text-[#FFB800]" />, label: "MADE IN INDIA", sub: "Crafted with Pride" },
    { icon: <MapPin className="text-[#FFB800]" />, label: "BUILT IN GHAZIABAD", sub: "Local Production Studio" }
  ];

  return (
    <section className="bg-[#0A0A0A] border-t border-white/5 py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {certs.map((cert, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {cert.icon}
              </div>
              <span className="text-white text-xs font-black tracking-[0.2em] mb-1">{cert.label}</span>
              <span className="text-[#52525B] text-[10px] uppercase font-bold tracking-widest">{cert.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}