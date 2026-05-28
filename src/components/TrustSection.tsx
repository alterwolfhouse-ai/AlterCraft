import React from 'react';
import { siteDetails } from '../data/siteDetails';

const trustItems = [
  {
    title: '20% Lower Market Rates',
    description: 'Transparent pricing that stays below typical market rentals.',
  },
  {
    title: 'Delivery and Assembly',
    description: `Doorstep delivery and on-site assembly within ${siteDetails.serviceRadius}.`,
  },
  {
    title: 'Quality Checked Inventory',
    description: 'Every item is inspected, cleaned, and serviced before delivery.',
  },
  {
    title: '3-Year Warranty on Buys',
    description: 'Full coverage on structural integrity and workmanship.',
  },
];

export function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">WHY ALTERCRAFT</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">Built for Value, Backed by Craft</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Competitive pricing without compromising on materials, service, or accountability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="p-8 bg-white rounded-sm border border-[#E5DDD1] shadow-md"
            >
              <h3 className="text-lg mb-3 text-[#2C2419]">{item.title}</h3>
              <p className="text-[#6B5D4F] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
