import React, { useMemo, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { catalogCategories, catalogProducts, rentalTerms } from '../data/catalog';
import { siteDetails } from '../data/siteDetails';
import { applyDiscount, formatInr } from '../utils/pricing';
import { trackEvent } from '../utils/analytics';

export function CatalogSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return catalogProducts.filter((product) => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesQuery =
        query.trim() === '' ||
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.material.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">RENT OR BUY CATALOG</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">Full Rental Catalog with 20% Lower Rates</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Browse furniture and appliances with transparent pricing. Rent or buy with delivery and
            assembly within {siteDetails.serviceRadius}.
          </p>
        </div>

        <div className="bg-[#FAF7F2] p-8 rounded-sm shadow-md mb-12">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div>
              <label className="text-sm text-[#6B5D4F] block mb-2" htmlFor="catalog-search">
                Search products
              </label>
              <input
                id="catalog-search"
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sofas, wardrobes, kitchens..."
                className="w-full px-4 py-3 bg-white border border-[#E5DDD1] rounded-sm focus:outline-none focus:border-[#6B5D4F] transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <div className="text-sm text-[#6B5D4F] mb-2">Categories</div>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-5 py-2 rounded-sm transition-all ${
                    activeCategory === 'all'
                      ? 'bg-[#6B5D4F] text-[#FAF7F2]'
                      : 'bg-white text-[#6B5D4F] border border-[#E5DDD1]'
                  }`}
                >
                  All
                </button>
                {catalogCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-2 rounded-sm transition-all ${
                      activeCategory === category.id
                        ? 'bg-[#6B5D4F] text-[#FAF7F2]'
                        : 'bg-white text-[#6B5D4F] border border-[#E5DDD1]'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const ourRent = applyDiscount(product.marketRent, 0.2);
            const ourBuy = applyDiscount(product.marketBuy, 0.2);
            const deposit = ourRent * product.depositMonths;
            const isExpanded = expandedId === product.id;
            const whatsappMessage = `Hi AlterCraft, I want ${product.name}. Please share rental and buy details.`;
            const whatsappLink = `https://wa.me/916206108923?text=${encodeURIComponent(
              whatsappMessage
            )}`;

            return (
              <div
                key={product.id}
                id={`product-${product.id}`}
                className="bg-[#FAF7F2] rounded-sm overflow-hidden shadow-md border border-[#E5DDD1] flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-[#6B5D4F] text-[#FAF7F2] px-3 py-1 rounded-full text-xs tracking-wide">
                    20% LOWER
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl mb-3 text-[#2C2419]">{product.name}</h3>
                  <div className="text-sm text-[#6B5D4F] mb-2">{product.material}</div>
                  <div className="text-sm text-[#6B5D4F] mb-4">{product.dimensions}</div>

                  <div className="bg-white p-4 rounded-sm border border-[#E5DDD1] mb-4">
                    <div className="text-xs text-[#6B5D4F] mb-1">Rental price (per month)</div>
                    <div className="text-[#2C2419] text-lg">{formatInr(ourRent)}</div>
                    <div className="text-xs text-[#9A8A77]">
                      Market price {formatInr(product.marketRent)}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-sm border border-[#E5DDD1] mb-4">
                    <div className="text-xs text-[#6B5D4F] mb-1">Buy price (one-time)</div>
                    <div className="text-[#2C2419] text-lg">{formatInr(ourBuy)}</div>
                    <div className="text-xs text-[#9A8A77]">
                      Market price {formatInr(product.marketBuy)}
                    </div>
                  </div>

                  <div className="text-sm text-[#5A4D3F] mb-4">
                    {product.availability} | {product.leadTime}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackEvent('whatsapp_click', {
                          location: 'catalog_rent',
                          item_name: product.name,
                        })
                      }
                      className="flex-1 px-4 py-3 bg-[#6B5D4F] text-[#FAF7F2] text-sm tracking-wide text-center hover:bg-[#5A4D3F] transition-colors"
                    >
                      Rent Now
                    </a>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackEvent('whatsapp_click', {
                          location: 'catalog_buy',
                          item_name: product.name,
                        })
                      }
                      className="flex-1 px-4 py-3 border-2 border-[#6B5D4F] text-[#6B5D4F] text-sm tracking-wide text-center hover:bg-[#6B5D4F] hover:text-[#FAF7F2] transition-all"
                    >
                      Buy Now
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : product.id)}
                    className="mt-6 text-sm text-[#6B5D4F] hover:text-[#2C2419]"
                  >
                    {isExpanded ? 'Hide details' : 'View details'}
                  </button>

                  {isExpanded && (
                    <div className="mt-6 border-t pt-6 text-sm text-[#5A4D3F] space-y-3">
                      <div>
                        <span className="text-[#2C2419]">Minimum tenure:</span>{' '}
                        {product.minTenureMonths} months
                      </div>
                      <div>
                        <span className="text-[#2C2419]">Security deposit:</span>{' '}
                        {formatInr(deposit)} ({product.depositMonths} months)
                      </div>
                      <div>
                        <span className="text-[#2C2419]">Service radius:</span>{' '}
                        {siteDetails.serviceRadius} from {siteDetails.cityBase}
                      </div>
                      <div>
                        <span className="text-[#2C2419]">Warranty:</span>{' '}
                        {siteDetails.warranty}
                      </div>
                      <div>
                        <span className="text-[#2C2419]">Rental terms:</span>
                        <div className="mt-2 space-y-2">
                          {rentalTerms.map((term) => {
                            const termRent = applyDiscount(ourRent, term.discount);
                            return (
                              <div key={term.label}>
                                {term.label}: {formatInr(termRent)} per month
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {product.highlights.map((item) => (
                          <li key={item}>- {item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
