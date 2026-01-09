import React from 'react';
import { siteDetails } from '../data/siteDetails';

const steps = [
  'Design',
  'Quote',
  'Build',
  `Deliver & Assemble (${siteDetails.serviceRadius})`,
];

export function HowItWorksStrip() {
  return (
    <section id="how-it-works" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full">
            <span className="text-xs tracking-widest text-[#6B5D4F]">HOW IT WORKS</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-[#5A4D3F]">
            {steps.map((step, index) => (
              <React.Fragment key={step}>
                <span className={index === 0 ? 'text-[#2C2419]' : undefined}>{step}</span>
                {index < steps.length - 1 && <span className="text-[#6B5D4F]">-&gt;</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
