import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const hasRent = product.availability.includes('rent');
  const hasBuy = product.availability.includes('buy');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-[#0A0A0A] border border-[#1A1A1A] hover:border-[#FFB800] transition-all duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0A]">
        <ImageWithFallback
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Product Code Badge */}
        <div className="absolute top-4 left-4 bg-[#FFB800] text-black px-3 py-1 text-xs font-black uppercase tracking-wider">
          {product.code}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-black text-white tracking-tight line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#A1A1AA] line-clamp-2 min-h-[2.5rem]">
          {product.shortDescription}
        </p>

        {/* Price Block */}
        {hasBuy && (
          <div className="flex items-end gap-3">
            <div className="text-3xl font-black text-[#FFB800]">
              ₹{product.prices.offer.toLocaleString('en-IN')}
            </div>
            <div className="flex flex-col pb-1">
              <span className="text-xs text-[#52525B] line-through">
                ₹{product.prices.mrp.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-green-500 font-bold">
                Save ₹{product.prices.save.toLocaleString('en-IN')}
              </span>
            </div>
          </div>
        )}

        {/* Rent Price (if applicable) */}
        {hasRent && product.rent.monthly > 0 && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-[#A1A1AA]">or Rent at</span>
            <span className="text-[#FFB800] font-bold">
              ₹{product.rent.monthly.toLocaleString('en-IN')}/mo
            </span>
          </div>
        )}

        {/* Chips */}
        <div className="flex flex-wrap gap-2">
          {hasRent && hasBuy && (
            <span className="px-2 py-1 text-xs bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/30 uppercase tracking-wide">
              Rent + Buy
            </span>
          )}
          {hasRent && !hasBuy && (
            <span className="px-2 py-1 text-xs bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/30 uppercase tracking-wide">
              Rent Only
            </span>
          )}
          {!hasRent && hasBuy && (
            <span className="px-2 py-1 text-xs bg-[#FFB800]/10 text-[#FFB800] border border-[#FFB800]/30 uppercase tracking-wide">
              Buy Only
            </span>
          )}
          <span className="px-2 py-1 text-xs bg-white/5 text-white border border-white/10 uppercase tracking-wide">
            Made-to-Order
          </span>
          <span className="px-2 py-1 text-xs bg-green-500/10 text-green-400 border border-green-500/30 uppercase tracking-wide">
            Delivery in {product.deliveryDays} days
          </span>
        </div>

        {/* CTA */}
        <Link
          to={`/product/${product.id}`}
          className="block w-full bg-transparent border border-[#FFB800] text-[#FFB800] py-3 text-center font-black uppercase tracking-widest text-sm hover:bg-[#FFB800] hover:text-black transition-all duration-300"
        >
          View Details
        </Link>
      </div>

      {/* Gold Border Glow on Hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 shadow-[0_0_30px_rgba(255,184,0,0.3)]" />
      </div>
    </motion.div>
  );
}
