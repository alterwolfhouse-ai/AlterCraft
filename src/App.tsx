import React from 'react';
import { Navigation } from './components/Navigation';
import { LandingHero } from './components/LandingHero';
import { HowItWorksStrip } from './components/HowItWorksStrip';
import { ProductHighlights } from './components/ProductHighlights';
import { RentSection } from './components/RentSection';
import { BuySection } from './components/BuySection';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { ChatWidget } from './components/ChatWidget';
import { siteDetails } from './data/siteDetails';
import { trackEvent } from './utils/analytics';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      <Navigation />
      <main>
        <LandingHero />
        <HowItWorksStrip />
        <ProductHighlights />
        <RentSection />
        <BuySection />
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
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-[#9A8A77]">
            <a
              href={siteDetails.phoneHref}
              onClick={() => trackEvent('phone_click', { location: 'footer' })}
              className="hover:text-[#FAF7F2] transition-colors"
            >
              Phone: {siteDetails.phone}
            </a>
            <a
              href={siteDetails.whatsappHref}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('whatsapp_click', { location: 'footer' })}
              className="hover:text-[#FAF7F2] transition-colors"
            >
              WhatsApp: {siteDetails.phone}
            </a>
            <span>
              {siteDetails.cityBase} - {siteDetails.serviceRadius} radius
            </span>
            <span>{siteDetails.workingHours}</span>
          </div>
          <div className="text-sm text-[#9A8A77] mt-6">
            (c) {new Date().getFullYear()} AlterCraft. All rights reserved.
          </div>
        </div>
      </footer>
      <ChatWidget />
    </div>
  );
}
