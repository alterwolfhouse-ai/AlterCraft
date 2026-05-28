import React from 'react';
import { ShieldCheck } from 'lucide-react';

type PageHeroProps = {
  title: string;
  subtitle: string;
  breadcrumb: string;
  image: string;
  imageAlt: string;
  priceTag?: string;
};

export function PageHero({ title, subtitle, breadcrumb, image, imageAlt, priceTag }: PageHeroProps) {
  return (
    <section className="elegant-hero">
      <img src={image} alt={imageAlt} />
      <div className="elegant-container">
        <div className="elegant-hero-content">
          <span className="elegant-breadcrumb">{breadcrumb}</span>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          {priceTag ? (
            <div className="elegant-price-tag">
              <ShieldCheck size={18} />
              {priceTag}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
