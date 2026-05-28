import React from 'react';
import { siteDetails } from '../data/siteDetails';

const steps = [
  {
    title: 'Pick Your Design',
    description: 'Select standard units or request custom measurements.',
  },
  {
    title: 'Material Confirmation',
    description: 'Choose finishes and materials based on budget and usage.',
  },
  {
    title: 'Pay and Schedule',
    description: 'Secure checkout with flexible payment options.',
  },
  {
    title: 'Build and Deliver',
    description: `Production and delivery within ${siteDetails.serviceRadius}.`,
  },
];

export function BuyFlowSection() {
  return (
    <section id="buy-flow" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">BUY FLOW</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">How Buying Works</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Premium craftsmanship, transparent pricing, and a 3-year warranty.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center bg-white p-6 rounded-sm shadow-md">
              <div className="text-[#6B5D4F] text-sm mb-2">Step {index + 1}</div>
              <h3 className="text-lg text-[#2C2419] mb-2">{step.title}</h3>
              <p className="text-sm text-[#6B5D4F] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 rounded-sm border border-[#E5DDD1] text-sm text-[#5A4D3F]">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <span className="text-[#2C2419]">Warranty:</span> {siteDetails.warranty} on all
              purchases.
            </div>
            <div>
              <span className="text-[#2C2419]">Payment:</span> UPI, cards, bank transfer, or
              cash, or crypto (USDT) supported.
            </div>
            <div>
              <span className="text-[#2C2419]">Assembly:</span> Included within service radius.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
