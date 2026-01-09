import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function LandingHero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2NzA3MzU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern living room furniture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2419]/80 via-[#2C2419]/70 to-[#2C2419]/85" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-[#FAF7F2] py-32">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 border border-[#D4C5B0]/30 rounded-full mb-6">
            <span className="text-sm tracking-widest text-[#D4C5B0]">RENT · OWN · UPGRADE</span>
          </div>
        </div>
        
        <h1 className="mb-8 text-[#FAF7F2] leading-tight max-w-4xl mx-auto">
          Quality Furniture on Your Terms
        </h1>
        
        <p className="text-2xl text-[#D4C5B0] max-w-3xl mx-auto mb-12 leading-relaxed">
          Rent premium furniture with full maintenance support, or buy with a 3-year guarantee. 
          Your space, your choice.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => document.getElementById('rent')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-[#6B5D4F] text-[#FAF7F2] tracking-wide transition-all hover:bg-[#5A4D3F] hover:shadow-2xl flex items-center gap-3 group"
          >
            Explore Rentals
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => document.getElementById('buy')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-transparent border-2 border-[#D4C5B0] text-[#FAF7F2] tracking-wide transition-all hover:bg-[#D4C5B0]/10 hover:shadow-2xl"
          >
            View Collection
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-12 max-w-3xl mx-auto pt-12 border-t border-[#D4C5B0]/20">
          <div>
            <div className="text-4xl mb-2 text-[#D4C5B0]">3+</div>
            <div className="text-sm text-[#9A8A77]">Year Guarantee</div>
          </div>
          <div>
            <div className="text-4xl mb-2 text-[#D4C5B0]">24/7</div>
            <div className="text-sm text-[#9A8A77]">Rental Support</div>
          </div>
          <div>
            <div className="text-4xl mb-2 text-[#D4C5B0]">100%</div>
            <div className="text-sm text-[#9A8A77]">Quality Promise</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#D4C5B0]/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#D4C5B0]/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
