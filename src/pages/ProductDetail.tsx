import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Package, Ruler, Layers, ZoomIn } from 'lucide-react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { products } from '../data/products';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '../components/ui/dialog';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-4">404</h1>
          <p className="text-xl text-[#A1A1AA] mb-8">Product not found</p>
          <Link
            to="/gallery"
            className="inline-block bg-[#FFB800] text-black px-8 py-3 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Back to Gallery
          </Link>
        </div>
      </div>
    );
  }

  const hasRent = product.availability.includes('rent');
  const hasBuy = product.availability.includes('buy');
  const similarProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Local Preview Banner */}
      <div className="fixed top-0 left-0 right-0 z-[200] bg-[#FFB800] text-black px-4 py-2 text-center text-xs font-black uppercase tracking-widest">
        🔧 Local Preview Mode - Not Deployed
      </div>

      {/* Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-[99] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <Header variant="minimal" />

      {/* Breadcrumb */}
      <div className="border-b border-[#FFB800]/10">
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center gap-3 text-sm">
            <Link to="/" className="text-[#A1A1AA] hover:text-[#FFB800] transition-colors">
              Home
            </Link>
            <span className="text-[#52525B]">/</span>
            <Link to="/gallery" className="text-[#A1A1AA] hover:text-[#FFB800] transition-colors">
              Gallery
            </Link>
            <span className="text-[#52525B]">/</span>
            <span className="text-white">{product.code}</span>
          </div>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative aspect-[4/3] bg-[#1A1A1A] border border-[#FFB800]/20 overflow-hidden group">
              <ImageWithFallback
                src={product.images[selectedImageIndex]}
                alt={`${product.name} - Image ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Zoom Button */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-3 text-[#FFB800] hover:bg-[#FFB800] hover:text-black transition-all opacity-0 group-hover:opacity-100">
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl bg-[#0A0A0A] border-[#FFB800]/20">
                  <ImageWithFallback
                    src={product.images[selectedImageIndex]}
                    alt={`${product.name} - Full View`}
                    className="w-full h-auto"
                  />
                </DialogContent>
              </Dialog>

              {/* Product Code Badge */}
              <div className="absolute bottom-4 left-4 bg-[#FFB800] text-black px-4 py-2 font-black uppercase tracking-wider">
                {product.code}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square bg-[#1A1A1A] border-2 overflow-hidden transition-all ${
                    selectedImageIndex === index
                      ? 'border-[#FFB800] scale-95'
                      : 'border-[#FFB800]/20 hover:border-[#FFB800]/50'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Title & Category */}
            <div>
              <div className="inline-block bg-[#FFB800]/10 text-[#FFB800] px-3 py-1 text-xs font-bold uppercase tracking-wider mb-4 border border-[#FFB800]/30">
                {product.category}
              </div>
              <h1 className="text-5xl font-black text-white leading-tight tracking-tight mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-[#A1A1AA]">{product.shortDescription}</p>
            </div>

            {/* Pricing */}
            {hasBuy && (
              <div className="bg-[#1A1A1A] border border-[#FFB800]/20 p-6">
                <div className="flex items-end gap-4 mb-2">
                  <div className="text-5xl font-black text-[#FFB800]">
                    ₹{product.prices.offer.toLocaleString('en-IN')}
                  </div>
                  <div className="pb-2">
                    <div className="text-lg text-[#52525B] line-through">
                      ₹{product.prices.mrp.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
                <div className="text-sm text-green-500 font-bold">
                  You Save ₹{product.prices.save.toLocaleString('en-IN')} ({Math.round((product.prices.save / product.prices.mrp) * 100)}% OFF)
                </div>
              </div>
            )}

            {/* Rental Info */}
            {hasRent && product.rent.monthly > 0 && (
              <div className="bg-[#FFB800]/5 border border-[#FFB800]/30 p-6">
                <h3 className="text-sm text-[#FFB800] uppercase tracking-wider font-bold mb-3">
                  Rental Option Available
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black text-white">
                    ₹{product.rent.monthly.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[#A1A1AA]">per month</span>
                </div>
                <div className="text-sm text-[#A1A1AA]">
                  Refundable Deposit: <span className="text-white font-bold">₹{product.rent.deposit.toLocaleString('en-IN')}</span>
                </div>
              </div>
            )}

            {/* Specifications */}
            <div className="space-y-4">
              <h3 className="text-sm text-[#FFB800] uppercase tracking-wider font-bold border-b border-[#FFB800]/20 pb-2">
                Specifications
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start gap-3">
                  <Package className="w-5 h-5 text-[#FFB800] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#A1A1AA] uppercase tracking-wider">Delivery</div>
                    <div className="text-white font-bold">{product.deliveryDays} Days</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Ruler className="w-5 h-5 text-[#FFB800] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#A1A1AA] uppercase tracking-wider">Dimensions</div>
                    <div className="text-white font-bold">{product.dimensions}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Layers className="w-5 h-5 text-[#FFB800] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[#A1A1AA] uppercase tracking-wider">Materials</div>
                    <div className="text-white font-bold">{product.materials}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-sm text-[#FFB800] uppercase tracking-wider font-bold border-b border-[#FFB800]/20 pb-2">
                Key Features
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FFB800] mt-0.5 flex-shrink-0" />
                    <span className="text-[#A1A1AA]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="space-y-4 pt-4 border-t border-[#FFB800]/10">
              <a
                href={`https://wa.me/918826436093?text=Hi, I'm interested in ${product.name} (${product.code})`}
                className="block w-full bg-[#FFB800] text-black py-4 text-center font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
              >
                WhatsApp to Order
              </a>
              <Link
                to="/gallery"
                className="block w-full bg-transparent border border-[#FFB800] text-[#FFB800] py-4 text-center font-black uppercase tracking-widest text-sm hover:bg-[#FFB800] hover:text-black transition-all"
              >
                Back to Gallery
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <section className="border-t border-[#FFB800]/10 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
          <div className="container mx-auto px-8 py-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-1 bg-[#FFB800]" />
              <h2 className="text-4xl font-black text-white tracking-tight">
                Similar Products
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProducts.map((similarProduct) => (
                <ProductCard key={similarProduct.id} product={similarProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}