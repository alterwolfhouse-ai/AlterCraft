import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { LandingHero } from './components/LandingHero';
import { RentSection } from './components/RentSection';
import { BuySection } from './components/BuySection';
import { FurnitureCatalog } from './components/FurnitureCatalog';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navigation />
      <main>
        <LandingHero />
        <RentSection />
        <BuySection />
        <FurnitureCatalog />
        <div id="about-us">
          <AboutUs />
        </div>
        <ContactSection />
      </main>
      <footer className="bg-[#2C2419] text-[#D4C5B0] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-xl mb-2">AlterCraft Woods & Furniture</h3>
            <p className="text-[#9A8A77]">Rent premium furniture or buy with a 3-year guarantee.</p>
          </div>
          <div className="text-sm text-[#9A8A77]">
            © {new Date().getFullYear()} AlterCraft. All rights reserved.
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}
