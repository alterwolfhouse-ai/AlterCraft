import React from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from '../data/products';
import { formatInr } from '../utils/pricing';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasRent = product.availability.includes('rent') && product.rent.monthly > 0;
  const hasBuy = product.availability.includes('buy') && product.prices.offer > 0;

  return (
    <article className="elegant-product-card">
      <div className="elegant-product-card-image">
        <ImageWithFallback
          src={product.images[0]}
          alt={`${product.name} by AlterCraft`}
        />
        <span className="elegant-product-code">{product.code}</span>
      </div>

      <div className="elegant-product-card-body">
        <span className="elegant-badge">{product.category}</span>
        <h2>{product.name}</h2>
        <p>{product.shortDescription}</p>

        {hasBuy ? (
          <div className="elegant-card-price">
            {formatInr(product.prices.offer)}
            <small>
              MRP {formatInr(product.prices.mrp)} | Save {formatInr(product.prices.save)}
            </small>
          </div>
        ) : null}

        {hasRent ? (
          <div className="elegant-card-price">
            {formatInr(product.rent.monthly)} / month
            <small>Refundable deposit {formatInr(product.rent.deposit)}</small>
          </div>
        ) : null}

        <Link to={`/product/${product.id}`} className="elegant-card-link">
          View Details
        </Link>
      </div>
    </article>
  );
}
