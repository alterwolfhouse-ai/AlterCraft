import React, { useState } from 'react';
import { Link } from 'react-router';
import { Clock, Mail, MapPin, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { siteDetails } from '../../data/siteDetails';
import { createWhatsappLink } from '../../utils/contact';

const navItems = [
  { to: '/modular-kitchen', label: 'Kitchen' },
  { to: '/designer-beds', label: 'Beds' },
  { to: '/flush-doors', label: 'Doors' },
  { to: '/wardrobes', label: 'Wardrobes' },
  { to: '/office-commercial', label: 'Office' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/warranty-quality', label: 'Warranty' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

type ElegantLayoutProps = {
  children: React.ReactNode;
};

export function FloatingWhatsApp() {
  return (
    <a
      className="elegant-floating-whatsapp"
      href={siteDetails.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with AlterCraft on WhatsApp"
    >
      <MessageCircle size={19} />
      WhatsApp
    </a>
  );
}

export function ElegantHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="elegant-topbar">
        <div className="elegant-container elegant-topbar-inner">
          <span>
            <MapPin size={14} />
            {siteDetails.fullAddress}
          </span>
          <span>
            <Clock size={14} />
            {siteDetails.workingHours}
          </span>
          <a href={siteDetails.phoneHref}>
            <Phone size={14} />
            {siteDetails.phoneDisplay}
          </a>
        </div>
      </div>

      <header className="elegant-header">
        <div className="elegant-container elegant-header-inner">
          <Link to="/" className="elegant-brand" aria-label="AlterCraft home">
            <span className="elegant-brand-mark" aria-hidden="true">AC</span>
            <span className="elegant-brand-text">
              <span className="elegant-brand-name">AlterCraft</span>
              <span className="elegant-brand-subtitle">Woods & Furniture</span>
            </span>
          </Link>

          <nav className="elegant-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="elegant-actions">
            <a className="elegant-button-secondary" href={siteDetails.phoneHref}>
              <Phone size={16} />
              Call
            </a>
            <a
              className="elegant-button"
              href={createWhatsappLink('Hi AlterCraft, I would like a furniture quote.')}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} />
              Get Quote
            </a>
          </div>

          <button
            type="button"
            className="elegant-mobile-toggle"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className={`elegant-mobile-panel ${isOpen ? 'open' : ''}`}>
          <div className="elegant-container">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export function ElegantFooter() {
  return (
    <footer className="elegant-footer">
      <div className="elegant-container">
        <div className="elegant-footer-grid">
          <div>
            <h3>AlterCraft Woods & Furniture</h3>
            <p>
              Premium modular furniture, wardrobes, beds, kitchens, flush doors and office
              interiors, built with transparent pricing and warranty support across eligible
              products and services.
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><Link to="/modular-kitchen">Modular Kitchen</Link></li>
              <li><Link to="/designer-beds">Designer Beds</Link></li>
              <li><Link to="/flush-doors">Flush Doors</Link></li>
              <li><Link to="/wardrobes">Wardrobes & Storage</Link></li>
              <li><Link to="/office-commercial">Office Interiors</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link to="/gallery">Gallery / Portfolio</Link></li>
              <li><Link to="/warranty-quality">Warranty & Quality</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact / Get Quote</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href={siteDetails.phoneHref}>{siteDetails.phoneDisplay}</a></li>
              <li><a href={siteDetails.whatsappHref}>WhatsApp {siteDetails.phoneDisplay}</a></li>
              <li><a href={siteDetails.emailHref}>{siteDetails.email}</a></li>
              <li>{siteDetails.addressLine}, {siteDetails.cityBase}</li>
            </ul>
          </div>
        </div>
        <div className="elegant-footer-bottom">
          <span>(c) {new Date().getFullYear()} AlterCraft. All rights reserved.</span>
          <span>{siteDetails.serviceRadius} service radius from Ghaziabad.</span>
        </div>
      </div>
    </footer>
  );
}

export function ElegantLayout({ children }: ElegantLayoutProps) {
  return (
    <div className="elegant-site">
      <ElegantHeader />
      {children}
      <ElegantFooter />
      <FloatingWhatsApp />
    </div>
  );
}
