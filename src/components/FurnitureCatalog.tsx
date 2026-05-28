import React, { useMemo, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { catalogProducts } from '../data/catalog';
import { formatInr } from '../utils/pricing';

type CatalogTab = 'living' | 'bedroom' | 'kitchen' | 'storage';

const tabs: Array<{ id: CatalogTab; label: string; categories: string[] }> = [
  { id: 'living', label: 'Living Room', categories: ['living'] },
  { id: 'bedroom', label: 'Bedroom', categories: ['bedroom'] },
  { id: 'kitchen', label: 'Kitchen & Dining', categories: ['kitchen', 'dining'] },
  { id: 'storage', label: 'Storage & Office', categories: ['storage', 'office'] },
];

export function FurnitureCatalog() {
  const [activeTab, setActiveTab] = useState<CatalogTab>('living');

  const activeProducts = useMemo(() => {
    const tab = tabs.find((item) => item.id === activeTab) ?? tabs[0];
    return catalogProducts
      .filter((product) => tab.categories.includes(product.category))
      .slice(0, 3);
  }, [activeTab]);

  return (
    <section id="catalog-preview" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">CATALOG PREVIEW</span>
          </div>
          <h2 className="text-[#2C2419] mb-6">Explore Current Product Pricing</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            This preview uses the existing catalog data, including rental and buy prices.
          </p>
        </div>

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

        <div className="grid md:grid-cols-3 gap-8">
          {activeProducts.map((item) => (
            <div
              key={item.id}
              className="group bg-[#FAF7F2] rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-[#6B5D4F] text-[#FAF7F2] px-3 py-1 rounded-full text-xs tracking-wide">
                  CURRENT DATA
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-4 text-[#2C2419]">{item.name}</h3>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="text-xs text-[#6B5D4F] mb-1">Rent</div>
                    <div className="text-lg text-[#2C2419]">{formatInr(item.marketRent)} / mo</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[#6B5D4F] mb-1">Buy</div>
                    <div className="text-lg text-[#2C2419]">{formatInr(item.marketBuy)}</div>
                  </div>
                </div>
                <p className="text-sm text-[#6B5D4F] mb-5">{item.material}</p>
                <a
                  href={`#product-${item.id}`}
                  className="w-full py-3 bg-[#6B5D4F] text-[#FAF7F2] text-sm tracking-wide hover:bg-[#5A4D3F] transition-colors inline-flex items-center justify-center"
                >
                  View in Catalog
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#6B5D4F] mb-6">
            Need a custom size or finish? Share measurements for a measured quote.
          </p>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-[#6B5D4F] text-[#6B5D4F] hover:bg-[#6B5D4F] hover:text-[#FAF7F2] transition-all inline-flex items-center justify-center"
          >
            Request Custom Design
          </a>
        </div>
      </div>
    </section>
  );
}
