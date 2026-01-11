import React from 'react';
import { Navigation } from './components/Navigation';
import { LandingHero } from './components/LandingHero';
import { TrustSection } from './components/TrustSection';
import { HowItWorksStrip } from './components/HowItWorksStrip';
import { CatalogSection } from './components/CatalogSection';
import { RentalFlowSection } from './components/RentalFlowSection';
import { RentSection } from './components/RentSection';
import { BuyFlowSection } from './components/BuyFlowSection';
import { BuySection } from './components/BuySection';
import { CompareSection } from './components/CompareSection';
import { TradeInSection } from './components/TradeInSection';
import { ServiceAreasSection } from './components/ServiceAreasSection';
import { AboutUs } from './components/AboutUs';
import { InsightsSection } from './components/InsightsSection';
import { PoliciesSection } from './components/PoliciesSection';
import { FaqSection } from './components/FaqSection';
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
        <TrustSection />
        <HowItWorksStrip />
        <CatalogSection />
        <RentalFlowSection />
        <RentSection />
        <BuyFlowSection />
        <BuySection />
        <CompareSection />
        <TradeInSection />
        <ServiceAreasSection />
        <div id="about-us">
          <AboutUs />
        </div>
        <InsightsSection />
        <PoliciesSection />
        <FaqSection />
        <ContactSection />
      </main>
      <footer className="bg-[#2C2419] text-[#D4C5B0] py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h3 className="text-xl mb-2">AlterCraft Woods & Furniture</h3>
            <p className="text-[#9A8A77]">
              Rent or buy at 20% lower market rates with a 3-year warranty.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#9A8A77] mb-6">
            <a href="#catalog" className="hover:text-[#FAF7F2] transition-colors">
              Catalog
            </a>
            <a href="#rent" className="hover:text-[#FAF7F2] transition-colors">
              Rent Furniture
            </a>
            <a href="#buy" className="hover:text-[#FAF7F2] transition-colors">
              Buy Furniture
            </a>
            <a href="#trade-in" className="hover:text-[#FAF7F2] transition-colors">
              Trade-In
            </a>
            <a href="#policies" className="hover:text-[#FAF7F2] transition-colors">
              Policies
            </a>
            <a href="#faq" className="hover:text-[#FAF7F2] transition-colors">
              FAQ
            </a>
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
              {siteDetails.addressLine}, {siteDetails.cityBase} - {siteDetails.serviceRadius} radius
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
