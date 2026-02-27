import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { siteDetails } from '../data/siteDetails';
import { catalogCategories, rentalTerms } from '../data/catalog';
import { trackEvent } from '../utils/analytics';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    serviceType: '',
    category: '',
    preferredItem: '',
    rentalTerm: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send data to a backend
    trackEvent('contact_form_submit', { location: 'contact_section' });
    alert('Thank you for your inquiry. We will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      serviceType: '',
      category: '',
      preferredItem: '',
      rentalTerm: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block px-3 py-1 border border-[#6B5D4F]/30 rounded-full mb-4">
            <span className="text-xs tracking-widest text-[#6B5D4F]">GET IN TOUCH</span>
          </div>
          <h2 className="text-[#2C2419] mb-6">
            Start Your Project
          </h2>
          <p className="text-[#5A4D3F] text-lg leading-relaxed">
            No pressure. Just an honest conversation about what you need 
            and whether we're the right fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-[#2C2419]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E5DDD1] rounded-sm focus:outline-none focus:border-[#6B5D4F] transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-[#2C2419]">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E5DDD1] rounded-sm focus:outline-none focus:border-[#6B5D4F] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-[#2C2419]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E5DDD1] rounded-sm focus:outline-none focus:border-[#6B5D4F] transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="serviceType" className="block text-sm mb-2 text-[#2C2419]">
                  Service Type
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E5DDD1] rounded-sm focus:outline-none focus:border-[#6B5D4F] transition-colors"
                >
                  <option value="">Select a service type</option>
                  <option value="rent">Rent Furniture</option>
                  <option value="buy">Buy Furniture</option>
                  <option value="trade-in">Trade-In Program</option>
                </select>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm mb-2 text-[#2C2419]">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#E5DDD1] rounded-sm focus:outline-none focus:border-[#6B5D4F] transition-colors"
                >
                  <option value="">Select a category</option>
                  {catalogCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="preferredItem" className="block text-sm mb-2 text-[#2C2419]">
                  Preferred Item
                </label>
                <input
                  type="text"
                  id="preferredItem"
                  name="preferredItem"
                  value={formData.preferredItem}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-[#E5DDD1] rounded-sm focus:outline-none focus:border-[#6B5D4F] transition-colors"
                  placeholder="Example: Three Seater Sofa"
                />
              </div>

              {formData.serviceType === 'rent' && (
                <div>
                  <label htmlFor="rentalTerm" className="block text-sm mb-2 text-[#2C2419]">
                    Rental Term
                  </label>
                  <select
                    id="rentalTerm"
                    name="rentalTerm"
                    value={formData.rentalTerm}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-[#E5DDD1] rounded-sm focus:outline-none focus:border-[#6B5D4F] transition-colors"
                  >
                    <option value="">Select a rental term</option>
                    {rentalTerms.map((term) => (
                      <option key={term.label} value={term.label}>
                        {term.label}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label htmlFor="projectType" className="block text-sm mb-2 text-[#2C2419]">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-[#E5DDD1] rounded-sm focus:outline-none focus:border-[#6B5D4F] transition-colors"
                >
                  <option value="">Select a project type</option>
                  <option value="wardrobe">Custom Wardrobe</option>
                  <option value="kitchen">Kitchen Cabinetry</option>
                  <option value="storage">Storage Solutions</option>
                  <option value="full-home">Full Home Furniture</option>
                  <option value="materials">Material Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-[#2C2419]">
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-[#E5DDD1] rounded-sm focus:outline-none focus:border-[#6B5D4F] transition-colors resize-none"
                  placeholder="Tell us about your space, requirements, and timeline"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#6B5D4F] text-[#FAF7F2] tracking-wide transition-all hover:bg-[#5A4D3F] hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Inquiry
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white p-8 rounded-sm shadow-md mb-8">
              <h3 className="text-xl mb-6 text-[#2C2419]">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6B5D4F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#6B5D4F]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B5D4F] mb-1">Email</div>
                    <a
                      href={siteDetails.emailHref}
                      className="text-[#2C2419] hover:text-[#6B5D4F] transition-colors"
                    >
                      {siteDetails.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6B5D4F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#6B5D4F]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B5D4F] mb-1">Phone</div>
                    <a
                      href={siteDetails.phoneHref}
                      onClick={() => trackEvent('phone_click', { location: 'contact_card' })}
                      className="text-[#2C2419] hover:text-[#6B5D4F] transition-colors"
                    >
                      {siteDetails.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#6B5D4F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#6B5D4F]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#6B5D4F] mb-1">Location</div>
                    <div className="text-[#2C2419]">
                      Workshop & Studio<br />
                      {siteDetails.addressLine}<br />
                      {siteDetails.cityBase} {siteDetails.postalCode}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#2C2419] p-8 rounded-sm">
              <h4 className="text-lg mb-4 text-[#FAF7F2]">
                What to Expect
              </h4>
              <ul className="space-y-3 text-[#D4C5B0] text-sm">
                <li className="flex items-start gap-3">
                  <span className="text-[#6B5D4F] mt-1">-</span>
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6B5D4F] mt-1">-</span>
                  <span>No-pressure consultation call</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6B5D4F] mt-1">-</span>
                  <span>Honest assessment of project feasibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#6B5D4F] mt-1">-</span>
                  <span>Clear timeline and material recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
