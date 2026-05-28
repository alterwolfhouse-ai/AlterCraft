import React from 'react';
import { CheckCircle, ClipboardList, Ruler, ShieldCheck } from 'lucide-react';
import { siteDetails } from '../data/siteDetails';

const planningCards = [
  {
    title: 'Measure',
    value: 'Room first',
    detail: 'Wall sizes, shutter clearance, socket points, skirting and ceiling height are checked.',
  },
  {
    title: 'Material',
    value: 'Fit for use',
    detail: 'Plywood, HDHMR, MDF, veneer and laminate choices are matched to the room condition.',
  },
  {
    title: 'Hardware',
    value: 'Daily durability',
    detail: 'Hinges, channels, tracks and handles are selected according to load and use.',
  },
  {
    title: 'Warranty',
    value: 'Across categories',
    detail: 'Support is available on eligible products, hardware, workmanship and installation.',
  },
];

const processRows = [
  ['Brief', 'Share photos, wall sizes, product type and finish preference.'],
  ['Estimate', 'Receive an itemized quote based on the current pricing data and selected scope.'],
  ['Design', 'Confirm layout, material, hardware, finish and installation details.'],
  ['Build', 'Fabrication starts after scope approval and measurement confirmation.'],
  ['Install', 'The team installs, checks alignment and explains care and warranty support.'],
];

export function TradingDashboard() {
  return (
    <section className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">PROJECT CLARITY</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">Quality & Planning Snapshot</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            A clear process helps the furniture look premium and perform well after installation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {planningCards.map((card) => (
            <article key={card.title} className="bg-white rounded-sm border border-[#E5DDD1] p-6 shadow-md">
              <div className="w-12 h-12 bg-[#6B5D4F]/10 rounded-full flex items-center justify-center mb-5">
                {card.title === 'Measure' ? <Ruler className="w-6 h-6 text-[#6B5D4F]" /> : null}
                {card.title === 'Material' ? <ClipboardList className="w-6 h-6 text-[#6B5D4F]" /> : null}
                {card.title === 'Hardware' ? <CheckCircle className="w-6 h-6 text-[#6B5D4F]" /> : null}
                {card.title === 'Warranty' ? <ShieldCheck className="w-6 h-6 text-[#6B5D4F]" /> : null}
              </div>
              <div className="text-sm text-[#6B5D4F] mb-2">{card.title}</div>
              <h3 className="text-xl text-[#2C2419] mb-3">{card.value}</h3>
              <p className="text-sm text-[#5A4D3F] leading-relaxed">{card.detail}</p>
            </article>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-8">
          <div className="bg-white border border-[#E5DDD1] rounded-sm shadow-md overflow-hidden">
            {processRows.map(([step, detail], index) => (
              <div
                key={step}
                className={`grid md:grid-cols-[120px_1fr] gap-4 p-6 ${
                  index === processRows.length - 1 ? '' : 'border-b border-[#E5DDD1]'
                }`}
              >
                <div className="text-sm tracking-widest text-[#6B5D4F]">0{index + 1} {step}</div>
                <p className="text-[#5A4D3F]">{detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#2C2419] text-[#D4C5B0] rounded-sm p-8 shadow-md">
            <h3 className="text-2xl text-[#FAF7F2] mb-4">Warranty is not only for doors</h3>
            <p className="leading-relaxed mb-6">
              {siteDetails.warranty}. Door-specific warranty can still be documented for eligible
              flush doors, but the overall AlterCraft promise applies across eligible categories.
            </p>
            <a
              href="/warranty-quality"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#FAF7F2] text-[#2C2419] rounded-sm"
            >
              View Warranty & Quality
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
