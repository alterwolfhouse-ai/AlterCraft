import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Award, ShieldCheck, RefreshCw, Hammer } from 'lucide-react';

export function BuySection() {
  const guaranteeFeatures = [
    {
      icon: ShieldCheck,
      title: "3-Year Full Guarantee",
      description: "Complete coverage for structural integrity, material defects, and workmanship issues."
    },
    {
      icon: RefreshCw,
      title: "Free Repairs & Replacements",
      description: "If anything fails within 3 years due to manufacturing defects, we repair or replace it—no questions asked."
    },
    {
      icon: Hammer,
      title: "Lifetime Support",
      description: "Even after the guarantee period, we provide repair services and replacement parts at cost."
    },
    {
      icon: Award,
      title: "Quality Certification",
      description: "Every purchase comes with material certificates and a detailed quality report."
    }
  ];

  return (
    <section id="buy" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">FURNITURE SALES</span>
          </div>
          <h2 className="text-[#2C2419] mb-6">
            Buy with Confidence. Guaranteed for 3 Years.
          </h2>
          <p className="text-[#5A4D3F] text-lg leading-relaxed">
            When you purchase from AlterCraft, you're not just buying furniture—you're 
            investing in craftsmanship backed by an industry-leading 3-year guarantee.
          </p>
        </div>

        {/* Main Guarantee Highlight */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-flex items-center gap-3 bg-[#6B5D4F] text-[#FAF7F2] px-6 py-3 rounded-full mb-8">
              <Award className="w-6 h-6" />
              <span className="tracking-wide">3-YEAR GUARANTEE</span>
            </div>
            
            <h3 className="text-3xl mb-6 text-[#2C2419]">
              Built to Last, Guaranteed to Perform
            </h3>
            
            <p className="text-[#5A4D3F] mb-6 leading-relaxed">
              We stand behind every piece of furniture we build and sell. Our 3-year 
              guarantee isn't marketing—it's a reflection of our material knowledge 
              and construction standards.
            </p>
            
            <p className="text-[#6B5D4F] leading-relaxed mb-8">
              We've tested these materials under real stress. We've watched them perform 
              in Indian climates. We know what lasts, and that's what we guarantee.
            </p>

            <div className="bg-white p-6 rounded-sm border-l-4 border-[#6B5D4F]">
              <p className="text-[#2C2419] italic">
                "If your furniture fails within 3 years due to material or construction 
                defects, we repair or replace it completely free of charge. No fine print, 
                no hassle."
              </p>
            </div>
          </div>

          <div className="relative h-[550px] rounded-sm overflow-hidden shadow-2xl">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1705028877368-43d73100c1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwZnVybml0dXJlJTIwZ3VhcmFudGVlfGVufDF8fHx8MTc2NzA5NDM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Quality furniture guarantee"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Guarantee Features Grid */}
        <div className="mb-20">
          <h3 className="text-2xl text-center mb-12 text-[#2C2419]">
            What Our 3-Year Guarantee Covers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guaranteeFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="p-8 bg-white rounded-sm shadow-md hover:shadow-xl transition-shadow border border-[#E5DDD1]"
                >
                  <div className="w-14 h-14 bg-[#6B5D4F]/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#6B5D4F]" />
                  </div>
                  <h4 className="text-lg mb-3 text-[#2C2419]">
                    {feature.title}
                  </h4>
                  <p className="text-[#6B5D4F] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Coverage Details */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-sm border border-[#E5DDD1]">
            <h4 className="text-lg mb-4 text-[#2C2419]">
              ✓ Covered
            </h4>
            <ul className="space-y-2 text-[#5A4D3F] text-sm">
              <li>• Plywood delamination</li>
              <li>• Joint failures</li>
              <li>• Hardware malfunctions</li>
              <li>• Finish degradation</li>
              <li>• Structural warping</li>
              <li>• Manufacturing defects</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-sm border border-[#E5DDD1]">
            <h4 className="text-lg mb-4 text-[#2C2419]">
              What We Do
            </h4>
            <ul className="space-y-2 text-[#5A4D3F] text-sm">
              <li>• Free on-site inspection</li>
              <li>• Immediate repair scheduling</li>
              <li>• Component replacement</li>
              <li>• Full unit replacement if needed</li>
              <li>• No-cost service visits</li>
              <li>• Priority support line</li>
            </ul>
          </div>

          <div className="bg-[#2C2419] p-8 rounded-sm text-[#D4C5B0]">
            <h4 className="text-lg mb-4 text-[#FAF7F2]">
              Beyond Guarantee
            </h4>
            <ul className="space-y-2 text-sm">
              <li>• Lifetime repair services</li>
              <li>• Spare parts availability</li>
              <li>• Refinishing options</li>
              <li>• Upgrade consultations</li>
              <li>• Material documentation</li>
              <li>• Care & maintenance guide</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#6B5D4F] to-[#5A4D3F] rounded-sm p-12 text-center text-[#FAF7F2]">
          <h3 className="text-3xl mb-4">
            Ready to Invest in Quality?
          </h3>
          <p className="text-xl text-[#D4C5B0] mb-8 max-w-2xl mx-auto">
            Schedule a consultation to discuss your needs, see materials firsthand, 
            and understand exactly what you're paying for.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-4 bg-[#FAF7F2] text-[#2C2419] tracking-wide transition-all hover:bg-white hover:shadow-2xl"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
