import React from 'react';
import { siteDetails } from '../data/siteDetails';

export function ServiceAreasSection() {
  return (
    <section id="service-areas" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">SERVICE AREAS</span>
          </div>
          <h2 className="text-[#2C2419] mb-4">Serving Ghaziabad and NCR</h2>
          <p className="text-[#5A4D3F] text-lg max-w-2xl mx-auto">
            Delivery and assembly within {siteDetails.serviceRadius} radius from our Ghaziabad base.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {siteDetails.serviceAreas.map((area) => (
            <div
              key={area}
              className="bg-white rounded-sm border border-[#E5DDD1] p-6 text-center text-[#2C2419]"
            >
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
