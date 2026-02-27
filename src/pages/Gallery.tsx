import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Search, ChevronDown } from 'lucide-react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { products, type Product } from '../data/products';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Input } from '../components/ui/input';

type AvailabilityFilter = 'all' | 'rent-buy' | 'buy-only' | 'rent-only';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [availabilityFilter, setAvailabilityFilter] = useState<AvailabilityFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'Beds', 'Wardrobes', 'Study Tables', 'Mandirs', 'Panels', 'Nameplates', 'Rentals'];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

      // Availability filter
      if (availabilityFilter === 'rent-buy') {
        if (!product.availability.includes('rent') || !product.availability.includes('buy')) {
          return false;
        }
      } else if (availabilityFilter === 'buy-only') {
        if (!product.availability.includes('buy') || product.availability.includes('rent')) {
          return false;
        }
      } else if (availabilityFilter === 'rent-only') {
        if (!product.availability.includes('rent') || product.availability.includes('buy')) {
          return false;
        }
      }

      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.code.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query)
        );
      }

      return true;
    });
  }, [selectedCategory, availabilityFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Local Preview Banner */}
      <div className="fixed top-0 left-0 right-0 z-[200] bg-[#FFB800] text-black px-4 py-2 text-center text-xs font-black uppercase tracking-widest">
        🔧 Local Preview Mode - Not Deployed
      </div>

      {/* Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-[99] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <Header variant="minimal" />

      {/* Hero Section */}
      <section className="relative border-b border-[#FFB800]/10 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="container mx-auto px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-[#FFB800]" />
              <Link
                to="/"
                className="text-[#FFB800] uppercase tracking-[0.3em] text-xs font-bold hover:text-white transition-colors"
              >
                ← Home
              </Link>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
              PRODUCT<br />GALLERY
            </h1>

            <p className="text-xl text-[#A1A1AA] max-w-2xl">
              Explore our curated collection of handcrafted furniture and CNC-precision designs.
              <span className="text-white"> Available for rent or purchase.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-[109px] z-40 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#FFB800]/10">
        <div className="container mx-auto px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-[#1A1A1A] border-[#FFB800]/20 text-white hover:border-[#FFB800]/50 transition-colors">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-[#1A1A1A] border-[#FFB800]/20 text-white">
                  {categories.map((cat) => (
                    <SelectItem
                      key={cat}
                      value={cat}
                      className="hover:bg-[#FFB800]/10 focus:bg-[#FFB800]/10"
                    >
                      {cat === 'all' ? 'All Categories' : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Availability Filter Chips */}
            <div className="md:col-span-5 flex flex-wrap gap-2">
              <button
                onClick={() => setAvailabilityFilter('all')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  availabilityFilter === 'all'
                    ? 'bg-[#FFB800] text-black'
                    : 'bg-[#1A1A1A] text-[#A1A1AA] border border-[#FFB800]/20 hover:border-[#FFB800]/50'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setAvailabilityFilter('rent-buy')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  availabilityFilter === 'rent-buy'
                    ? 'bg-[#FFB800] text-black'
                    : 'bg-[#1A1A1A] text-[#A1A1AA] border border-[#FFB800]/20 hover:border-[#FFB800]/50'
                }`}
              >
                Rent + Buy
              </button>
              <button
                onClick={() => setAvailabilityFilter('buy-only')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  availabilityFilter === 'buy-only'
                    ? 'bg-[#FFB800] text-black'
                    : 'bg-[#1A1A1A] text-[#A1A1AA] border border-[#FFB800]/20 hover:border-[#FFB800]/50'
                }`}
              >
                Buy Only
              </button>
              <button
                onClick={() => setAvailabilityFilter('rent-only')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                  availabilityFilter === 'rent-only'
                    ? 'bg-[#FFB800] text-black'
                    : 'bg-[#1A1A1A] text-[#A1A1AA] border border-[#FFB800]/20 hover:border-[#FFB800]/50'
                }`}
              >
                Rent Only
              </button>
            </div>

            {/* Search Bar */}
            <div className="md:col-span-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1AA] w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#1A1A1A] border-[#FFB800]/20 text-white placeholder:text-[#52525B] hover:border-[#FFB800]/50 focus:border-[#FFB800] transition-colors"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-[#A1A1AA]">
            Showing <span className="text-[#FFB800] font-bold">{filteredProducts.length}</span> product
            {filteredProducts.length !== 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-8 py-12">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-black text-white mb-2">No Products Found</h3>
            <p className="text-[#A1A1AA] mb-6">
              Try adjusting your filters or search query
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setAvailabilityFilter('all');
                setSearchQuery('');
              }}
              className="bg-[#FFB800] text-black px-8 py-3 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="border-t border-[#FFB800]/10 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="container mx-auto px-8 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Can't Find What You Need?
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-8 max-w-2xl mx-auto">
            We specialize in custom furniture. Share your vision, and we'll bring it to life with handcrafted quality and CNC precision.
          </p>
          <a
            href="https://wa.me/918826436093"
            className="inline-block bg-[#FFB800] text-black px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            WhatsApp Us Now
          </a>
        </div>
      </section>
    </div>
  );
}