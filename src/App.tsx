import React from 'react';
import { HeroPoster } from './components/HeroPoster';
import { ManufacturingPoster } from './components/ManufacturingPoster';
import { RentalPoster } from './components/RentalPoster';
import { MaterialsPoster } from './components/MaterialsPoster';
import { TrustPoster } from './components/TrustPoster';
import { FooterPoster } from './components/FooterPoster';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-sans text-white antialiased relative">
      {/* Global Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-[99] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-1 h-full bg-[#FFB800]/20 z-50">
        <div className="w-full bg-[#FFB800] transition-all duration-300 h-0" id="scroll-bar" />
      </div>

      <main className="relative flex flex-col">
        {/* Stacked Poster Layout */}
        <HeroPoster />
        <ManufacturingPoster />
        <RentalPoster />
        <MaterialsPoster />
        <TrustPoster />
        <FooterPoster />
      </main>

      {/* Floating CTA (Subtle) */}
      <a 
        href="https://wa.me/918826436093"
        className="fixed bottom-8 right-8 z-[100] bg-[#FFB800] text-black px-6 py-3 rounded-none font-black text-xs tracking-widest uppercase hover:bg-white transition-colors flex items-center gap-3 shadow-2xl"
      >
        Enquire on WhatsApp
      </a>

      {/* Script for subtle scroll tracking */}
      <script dangerouslySetInnerHTML={{ __html: `
        window.onscroll = function() {
          var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
          var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          document.getElementById("scroll-bar").style.height = scrolled + "%";
        };
      `}} />
    </div>
  );
}