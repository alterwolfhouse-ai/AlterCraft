import React, { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FurnitureCatalog() {
  const [activeTab, setActiveTab] = useState<'living' | 'bedroom' | 'kitchen' | 'storage'>('living');

  const furniture = {
    living: [
      {
        name: "Modern Sofa Set",
        rentPrice: "₹2,999/mo",
        buyPrice: "₹45,000",
        image: "https://images.unsplash.com/photo-1668365011614-9c4a49a0e89d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwZnVybml0dXJlfGVufDF8fHx8MTc2NzA3MzU2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Coffee Table",
        rentPrice: "₹899/mo",
        buyPrice: "₹15,000",
        image: "https://images.unsplash.com/photo-1705028877368-43d73100c1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwZnVybml0dXJlJTIwZ3VhcmFudGVlfGVufDF8fHx8MTc2NzA5NDM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "TV Unit",
        rentPrice: "₹1,499/mo",
        buyPrice: "₹25,000",
        image: "https://images.unsplash.com/photo-1766802981843-9da98dd1a414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBmdXJuaXR1cmUlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2NzAyNzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    bedroom: [
      {
        name: "Custom Wardrobe",
        rentPrice: "₹2,499/mo",
        buyPrice: "₹55,000",
        image: "https://images.unsplash.com/photo-1766245456954-4822cabf63ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJkcm9iZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NzA5MzU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "King Size Bed",
        rentPrice: "₹1,999/mo",
        buyPrice: "₹38,000",
        image: "https://images.unsplash.com/photo-1735547876935-7be80eae1c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjByZW50YWwlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjcwOTQzOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Bedside Tables (Pair)",
        rentPrice: "₹699/mo",
        buyPrice: "₹12,000",
        image: "https://images.unsplash.com/photo-1682718619781-252f23e21132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBtYWtlciUyMGhhbmRzfGVufDF8fHx8MTc2NzA5MzU4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    kitchen: [
      {
        name: "Modular Kitchen (8ft)",
        rentPrice: "₹3,999/mo",
        buyPrice: "₹85,000",
        image: "https://images.unsplash.com/photo-1598698628529-78863e5d4b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldHMlMjB3b29kfGVufDF8fHx8MTc2NzA5MzU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Dining Table (6-Seater)",
        rentPrice: "₹1,799/mo",
        buyPrice: "₹32,000",
        image: "https://images.unsplash.com/photo-1764115902086-84f3e9e7fbc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50cnklMjB3b3Jrc2hvcCUyMHdvb2R8ZW58MXx8fHwxNzY3MDkzNTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Crockery Cabinet",
        rentPrice: "₹1,299/mo",
        buyPrice: "₹22,000",
        image: "https://images.unsplash.com/photo-1758749130179-46ebeba477bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHl3b29kJTIwYm9hcmRzJTIwbWF0ZXJpYWx8ZW58MXx8fHwxNzY3MDkzNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ],
    storage: [
      {
        name: "Wall Shelving Unit",
        rentPrice: "₹799/mo",
        buyPrice: "₹14,000",
        image: "https://images.unsplash.com/photo-1714762306090-04426596ead7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHRvb2xzfGVufDF8fHx8MTc2NzA5MzU4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Study Table with Storage",
        rentPrice: "₹999/mo",
        buyPrice: "₹18,000",
        image: "https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZ3JhaW4lMjB0ZXh0dXJlfGVufDF8fHx8MTc2NzA5MzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        name: "Shoe Rack Cabinet",
        rentPrice: "₹599/mo",
        buyPrice: "₹10,000",
        image: "https://images.unsplash.com/photo-1758432998179-018d76b185e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZWxpdmVyeSUyMHNlcnZpY2V8ZW58MXx8fHwxNzY3MDk0Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      }
    ]
  };

  const tabs = [
    { id: 'living' as const, label: 'Living Room' },
    { id: 'bedroom' as const, label: 'Bedroom' },
    { id: 'kitchen' as const, label: 'Kitchen & Dining' },
    { id: 'storage' as const, label: 'Storage' }
  ];

  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">CATALOG</span>
          </div>
          <h2 className="text-[#2C2419] mb-6">
            Explore Our Furniture Collection
          </h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Browse our curated selection. Every piece available for rent or purchase.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-sm transition-all ${
                activeTab === tab.id
                  ? 'bg-[#6B5D4F] text-[#FAF7F2] shadow-lg'
                  : 'bg-[#FAF7F2] text-[#6B5D4F] hover:bg-[#E5DDD1]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Furniture Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {furniture[activeTab].map((item, index) => (
            <div 
              key={index}
              className="group bg-[#FAF7F2] rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#6B5D4F] text-[#FAF7F2] px-3 py-1 rounded-full text-xs tracking-wide">
                  RENT OR BUY
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-4 text-[#2C2419]">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-xs text-[#6B5D4F] mb-1">Rent from</div>
                    <div className="text-lg text-[#2C2419]">{item.rentPrice}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[#6B5D4F] mb-1">Buy at</div>
                    <div className="text-lg text-[#2C2419]">{item.buyPrice}</div>
                  </div>
                </div>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full py-3 bg-[#6B5D4F] text-[#FAF7F2] text-sm tracking-wide hover:bg-[#5A4D3F] transition-colors"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#6B5D4F] mb-6">
            Don't see what you need? We also create custom furniture.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-[#6B5D4F] text-[#6B5D4F] hover:bg-[#6B5D4F] hover:text-[#FAF7F2] transition-all"
          >
            Request Custom Design
          </button>
        </div>
      </div>
    </section>
  );
}
