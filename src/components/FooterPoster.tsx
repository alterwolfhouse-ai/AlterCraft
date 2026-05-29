import React from 'react';
import { Globe, MapPin, Phone } from 'lucide-react';
import { siteDetails } from '../data/siteDetails';

export function FooterPoster() {
  return (
    <footer className="bg-[#B8891A] text-black py-8 md:py-12 px-8 md:px-16 selection:bg-black selection:text-[#B8891A]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full md:w-auto">
          <div className="flex items-center gap-4">
            <div className="bg-black p-3 rounded-full text-[#B8891A]">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Call / WhatsApp</p>
              <p className="text-xl font-black">{siteDetails.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-black p-3 rounded-full text-[#B8891A]">
              <Globe size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Online Presence</p>
              <p className="text-xl font-black">www.altercraft.in</p>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4 flex-1 max-w-md">
          <MapPin size={24} className="mt-1 shrink-0" />
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest opacity-60 mb-1">Studio Address</p>
            <p className="text-sm font-bold leading-tight">{siteDetails.fullAddress}</p>
            <p className="mt-2 text-[10px] uppercase font-black tracking-widest opacity-60">
              GSTIN {siteDetails.gstin} | Udyam {siteDetails.udyamRegistration}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-black/10 text-center text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
        ALTER CRAFT LUXURY STUDIO (c) {new Date().getFullYear()} - HANDCRAFTED + CNC PRECISION
      </div>
    </footer>
  );
}
