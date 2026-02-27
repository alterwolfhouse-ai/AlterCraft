import React from 'react';

const articles = [
  {
    title: 'Renting vs Buying Furniture in NCR',
    summary: 'How to decide based on tenure, budget, and flexibility.',
  },
  {
    title: 'Modular Wardrobe Planning Checklist',
    summary: 'Materials, internal layout, and finish decisions simplified.',
  },
  {
    title: 'Trade-In Program: What to Prepare',
    summary: 'Photos, dimensions, and condition notes that speed up evaluation.',
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">INSIGHTS</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">Guides for Better Furniture Decisions</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Short reads to help you choose the right rental or purchase plan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.title}
              className="bg-[#FAF7F2] rounded-sm border border-[#E5DDD1] p-8"
            >
              <h3 className="text-lg text-[#2C2419] mb-3">{article.title}</h3>
              <p className="text-sm text-[#6B5D4F] leading-relaxed">{article.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
