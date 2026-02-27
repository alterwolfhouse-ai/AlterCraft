import React from 'react';
import { siteDetails } from '../data/siteDetails';

const steps = [
  {
    title: 'Browse and Select',
    description: 'Choose items from the rental catalog and share your requirements.',
  },
  {
    title: 'Pick Tenure',
    description: 'Select 3, 6, 12, or 24 month plans with tiered savings.',
  },
  {
    title: 'Confirm and Pay',
    description: 'Pay the first month and refundable security deposit.',
  },
  {
    title: 'Delivery and Assembly',
    description: `We deliver and assemble within ${siteDetails.serviceRadius}.`,
  },
  {
    title: 'Support and Swaps',
    description: 'Request maintenance or upgrade after the minimum tenure.',
  },
];

export function RentalFlowSection() {
  return (
    <section id="rent-flow" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">RENTAL FLOW</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">How Renting Works</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Simple steps designed for clear pricing, flexible tenure, and reliable service.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="w-14 h-14 mx-auto bg-[#6B5D4F]/10 rounded-full flex items-center justify-center text-[#6B5D4F] mb-4">
                0{index + 1}
              </div>
              <h3 className="text-lg text-[#2C2419] mb-2">{step.title}</h3>
              <p className="text-sm text-[#6B5D4F] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-[#FAF7F2] rounded-sm border border-[#E5DDD1]">
          <div className="grid md:grid-cols-4 gap-6 text-sm text-[#5A4D3F]">
            <div>
              <span className="text-[#2C2419]">Deposit:</span> refundable security deposit based
              on product category and condition.
            </div>
            <div>
              <span className="text-[#2C2419]">Minimum tenure:</span> typically 3 months for
              furniture and appliances.
            </div>
            <div>
              <span className="text-[#2C2419]">Support:</span> service and maintenance included
              during the rental period.
            </div>
            <div>
              <span className="text-[#2C2419]">Tenure range:</span> up to 24 months with pricing
              aligned to standard rental plans.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
