import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { siteDetails } from '../data/siteDetails';

const products = [
  {
    name: 'Wall-mounted Almirah',
    lineOne: 'Custom-sized storage with clean lines.',
    lineTwo: 'Wall-anchored for stability and space.',
    price: 'Starting from \u20B9____',
    image:
      'https://images.unsplash.com/photo-1766245456954-4822cabf63ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3YXJkcm9iZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NzA5MzU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'TV Unit',
    lineOne: 'Modular layout for screens and storage.',
    lineTwo: 'Cable management with durable finishes.',
    price: 'Starting from \u20B9____',
    image:
      'https://images.unsplash.com/photo-1766802981843-9da98dd1a414?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBmdXJuaXR1cmUlMjBjcmFmdHNtYW5zaGlwfGVufDF8fHx8MTc2NzAyNzA0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Study Table',
    lineOne: 'Built to fit your work corner.',
    lineTwo: 'Smart storage for daily essentials.',
    price: 'Starting from \u20B9____',
    image:
      'https://images.unsplash.com/photo-1611600700192-d87eaeed4f81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZ3JhaW4lMjB0ZXh0dXJlfGVufDF8fHx8MTc2NzA5MzU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Shoe Rack',
    lineOne: 'Compact storage for daily shoes.',
    lineTwo: 'Ventilated shelves and easy access.',
    price: 'Starting from \u20B9____',
    image:
      'https://images.unsplash.com/photo-1758432998179-018d76b185e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBkZWxpdmVyeSUyMHNlcnZpY2V8ZW58MXx8fHwxNzY3MDk0Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Kitchen Base Unit',
    lineOne: 'Modular base cabinets for daily use.',
    lineTwo: 'Moisture-resistant materials available.',
    price: 'Starting from \u20B9____',
    image:
      'https://images.unsplash.com/photo-1598698628529-78863e5d4b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwY2FiaW5ldHMlMjB3b29kfGVufDF8fHx8MTc2NzA5MzU4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function ProductHighlights() {
  return (
    <section id="products" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">STARTER PRICING</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">Popular Modular Units</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Choose a starting point and get a WhatsApp quote in minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-sm overflow-hidden shadow-md border border-[#E5DDD1] flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl mb-3 text-[#2C2419]">{product.name}</h3>
                <p className="text-sm text-[#5A4D3F] leading-relaxed">{product.lineOne}</p>
                <p className="text-sm text-[#5A4D3F] leading-relaxed mb-4">{product.lineTwo}</p>
                <div className="text-[#2C2419] mb-5">{product.price}</div>
                <a
                  href={siteDetails.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center justify-center px-4 py-3 bg-[#6B5D4F] text-[#FAF7F2] text-sm tracking-wide hover:bg-[#5A4D3F] transition-colors"
                >
                  Get Quote on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
