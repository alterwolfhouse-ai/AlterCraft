import React from 'react';

const comparison = [
  {
    title: 'Rent',
    points: [
      'Lower upfront cost with monthly plans',
      'Upgrade or swap after minimum tenure',
      'Maintenance support included',
      'Ideal for short-term stays or relocations',
    ],
  },
  {
    title: 'Buy',
    points: [
      'One-time payment and long-term ownership',
      '3-year warranty on workmanship',
      'Best for permanent homes and custom builds',
      'Upgrade options with trade-in credit',
    ],
  },
];

export function CompareSection() {
  return (
    <section id="rent-vs-buy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">COMPARE</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">Rent vs Buy</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Choose the option that fits your timeline and budget.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {comparison.map((block) => (
            <div key={block.title} className="bg-[#FAF7F2] p-8 rounded-sm border border-[#E5DDD1]">
              <h3 className="text-xl text-[#2C2419] mb-4">{block.title}</h3>
              <ul className="space-y-2 text-sm text-[#6B5D4F]">
                {block.points.map((point) => (
                  <li key={point}>- {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
