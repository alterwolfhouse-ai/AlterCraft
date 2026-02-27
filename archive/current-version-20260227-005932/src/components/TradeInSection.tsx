import React from 'react';

const steps = [
  {
    title: 'Share Details',
    description: 'Submit furniture photos, age, and condition for review.',
  },
  {
    title: 'Get Evaluation',
    description: 'We assess quality and send a buyback or upgrade offer.',
  },
  {
    title: 'Apply Credit',
    description: 'Use the credit toward rentals or new purchases.',
  },
];

export function TradeInSection() {
  return (
    <section id="trade-in" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">TRADE-IN PROGRAM</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">Upgrade with Trade-In Credits</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Trade-in rules will be finalized soon. For now, share your furniture details and we
            will respond with a custom offer.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {steps.map((step) => (
            <div
              key={step.title}
              className="p-8 bg-[#FAF7F2] rounded-sm border border-[#E5DDD1] text-center"
            >
              <h3 className="text-lg text-[#2C2419] mb-3">{step.title}</h3>
              <p className="text-sm text-[#6B5D4F] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[#2C2419] rounded-sm p-8 text-center text-[#D4C5B0]">
          <p className="text-lg">
            Want to trade-in now? WhatsApp us with photos and details for a quick review.
          </p>
        </div>
      </div>
    </section>
  );
}
