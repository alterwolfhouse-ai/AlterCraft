import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { createWhatsappLink, quoteMessage } from '../../utils/contact';

type QuoteFormProps = {
  defaultService?: string;
};

export function QuoteForm({ defaultService = 'Custom Furniture' }: QuoteFormProps) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    location: '',
    service: defaultService,
    message: '',
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = quoteMessage(form.service, {
      Name: form.name,
      Phone: form.phone,
      Location: form.location,
      Details: form.message,
    });
    window.open(createWhatsappLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <form className="elegant-form" onSubmit={handleSubmit}>
      <div className="elegant-form-grid">
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91"
            required
          />
        </label>
      </div>
      <div className="elegant-form-grid">
        <label>
          Service
          <select name="service" value={form.service} onChange={handleChange}>
            <option>Modular Kitchen</option>
            <option>Designer Beds</option>
            <option>Flush Doors</option>
            <option>Wardrobes & Storage</option>
            <option>Office & Commercial Interiors</option>
            <option>Full Home Furniture</option>
            <option>Repair / Warranty Support</option>
          </select>
        </label>
        <label>
          Location
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="City / area"
          />
        </label>
      </div>
      <label>
        Project Details
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Share room size, product type, material preference, timeline, or reference details."
          required
        />
      </label>
      <button className="elegant-button" type="submit">
        <Send size={16} />
        Send to WhatsApp
      </button>
    </form>
  );
}
