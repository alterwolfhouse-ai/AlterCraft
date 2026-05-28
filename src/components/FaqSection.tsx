import React from 'react';

const faqs = [
  {
    question: 'What is the minimum rental tenure?',
    answer: 'Most items require a 3 month minimum. Longer tenures unlock lower rates.',
  },
  {
    question: 'Is the security deposit refundable?',
    answer: 'Yes, deposits are refunded after pickup and condition inspection.',
  },
  {
    question: 'Do you offer delivery and assembly?',
    answer: 'Yes, delivery and assembly are included within the 150 km service radius.',
  },
  {
    question: 'Can I upgrade or swap rentals?',
    answer: 'Upgrades are available after the minimum tenure, subject to stock.',
  },
  {
    question: 'What warranty comes with purchases?',
    answer: 'Warranty support is available across eligible products, services, hardware, workmanship and installation. Coverage depends on the product category and documented specification.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept UPI, cards, bank transfer and cash, depending on the project stage and invoice terms.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">FAQ</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">Common Questions</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Quick answers about rentals, purchases, and service coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white rounded-sm border border-[#E5DDD1] p-6">
              <h3 className="text-[#2C2419] text-lg mb-2">{faq.question}</h3>
              <p className="text-[#6B5D4F] text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
