import React from 'react';
import { Link } from 'react-router';

const serviceAreas = ['Ghaziabad', 'Noida', 'Gurgaon', 'Faridabad', 'Meerut', 'Delhi NCR'];

const contentBlocks = [
  {
    title: 'Modular wardrobes for Indian bedrooms',
    body: 'Plan sliding wardrobes, swing-door wardrobes, loft storage, drawers, mirrors and lighting around the room size instead of buying a fixed catalogue unit. AlterCraft designs storage for daily wear, seasonal clothes, luggage and compact Delhi NCR apartments.',
  },
  {
    title: 'Furniture on rent for homes, offices and events',
    body: 'Choose rental furniture when you need a clean setup for work-from-home rooms, temporary stays, office cabins, weddings or corporate events. We handle delivery, pickup and condition checks so the setup feels premium without long-term ownership.',
  },
  {
    title: 'CNC panels, mandirs and nameplates',
    body: 'CNC cutting works well for pooja mandirs, 3D wall panels, acoustic-style feature walls, carved partitions, signage and LED nameplates. Each design can be resized, finished and installed for the wall, entrance or room it belongs to.',
  },
  {
    title: 'Sustainable engineered materials',
    body: 'Customers are asking for durable finishes, moisture resistance and responsible material choices. We use engineered wood, bagasse-based boards, laminates, veneers and hardware combinations based on budget, use and maintenance needs.',
  },
];

const faqs = [
  {
    question: 'How much does a modular wardrobe cost in Delhi NCR?',
    answer: 'Cost depends on size, shutter type, finish, hardware, drawers, lofts and installation scope. Share wall dimensions and a photo on WhatsApp for a practical estimate before fabrication.',
  },
  {
    question: 'Can I rent furniture instead of buying it?',
    answer: 'Yes. AlterCraft offers rental options for selected furniture and event packages, with flexible terms for home offices, temporary rooms, corporate setups and events.',
  },
  {
    question: 'Do you make custom pooja mandirs and CNC panels?',
    answer: 'Yes. We design and fabricate pooja mandirs, wall-mounted mandirs, decorative CNC panels, nameplates and carved partitions with custom sizing and finish options.',
  },
];

export function SearchIntentSection() {
  return (
    <section className="bg-[#0A0A0A] border-t border-white/5 px-8 md:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16">
          <div>
            <span className="text-[#FFB800] text-sm uppercase tracking-[0.4em] font-bold mb-4 block">
              Delhi NCR Furniture Studio
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
              Custom furniture built for real Indian homes
            </h2>
            <p className="text-[#D4D4D8] text-lg leading-relaxed mb-8">
              AlterCraft helps homeowners, tenants, offices and event planners choose furniture that fits the room, the budget and the way the space is used. From modular wardrobes and study tables to CNC wall panels, mandirs, nameplates and rental furniture, every project starts with measurements and practical material guidance.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="border border-[#FFB800]/25 bg-[#FFB800]/5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#FFB800]"
                >
                  {area}
                </span>
              ))}
            </div>
            <Link
              to="/gallery"
              className="inline-flex bg-[#FFB800] text-black px-8 py-4 font-black text-sm uppercase tracking-widest hover:bg-white transition-colors"
            >
              Explore furniture designs
            </Link>
          </div>

          <div className="space-y-6">
            {contentBlocks.map((block) => (
              <article key={block.title} className="border-l border-[#FFB800]/40 pl-6">
                <h3 className="text-white text-xl font-black mb-2">{block.title}</h3>
                <p className="text-[#A1A1AA] leading-relaxed">{block.body}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            Furniture planning questions customers search before calling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <article key={faq.question} className="bg-[#111111] border border-white/5 p-6">
                <h3 className="text-[#FFB800] font-black mb-3">{faq.question}</h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
