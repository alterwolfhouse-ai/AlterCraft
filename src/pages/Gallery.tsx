import React, { useState, useMemo } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
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
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }

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

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          product.name.toLowerCase().includes(query) ||
          product.code.toLowerCase().includes(query) ||
          product.shortDescription.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.materials.toLowerCase().includes(query) ||
          product.features.some((feature) => feature.toLowerCase().includes(query))
        );
      }

      return true;
    });
  }, [selectedCategory, availabilityFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Texture Overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-[99] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <Header variant="minimal" />

      {/* Hero Section */}
      <section className="relative border-b border-[#B8891A]/10 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="container mx-auto px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-[#B8891A]" />
              <Link
                to="/"
                className="text-[#B8891A] uppercase tracking-[0.3em] text-xs font-bold hover:text-white transition-colors"
              >
                Home
              </Link>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
              FURNITURE<br />DESIGNS
            </h1>

            <p className="text-xl text-[#A1A1AA] max-w-3xl">
              Browse custom furniture, modular wardrobes, study tables, pooja mandirs, CNC wall panels, LED nameplates and rental furniture for Delhi NCR homes, offices and events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-[73px] z-40 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#B8891A]/10">
        <div className="container mx-auto px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Category Dropdown */}
            <div className="md:col-span-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-[#1A1A1A] border-[#B8891A]/20 text-white hover:border-[#B8891A]/50 transition-colors">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-[#1A1A1A] border-[#B8891A]/20 text-white">
                  {categories.map((cat) => (
                    <SelectItem
                      key={cat}
                      value={cat}
                      className="hover:bg-[#B8891A]/10 focus:bg-[#B8891A]/10"
                    >
                      {cat === 'all' ? 'All Categories' : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Availability Filter Chips */}
            <div className="md:col-span-5 flex flex-wrap gap-2">
              {[
                ['all', 'All'],
                ['rent-buy', 'Rent + Buy'],
                ['buy-only', 'Buy Only'],
                ['rent-only', 'Rent Only'],
              ].map(([value, label]) => (
                <button
                  key={value}
                  onClick={() => setAvailabilityFilter(value as AvailabilityFilter)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                    availabilityFilter === value
                      ? 'bg-[#B8891A] text-black'
                      : 'bg-[#1A1A1A] text-[#A1A1AA] border border-[#B8891A]/20 hover:border-[#B8891A]/50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="md:col-span-4 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A1A1AA] w-4 h-4" />
              <Input
                type="text"
                placeholder="Search wardrobe, mandir, rent..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-[#1A1A1A] border-[#B8891A]/20 text-white placeholder:text-[#52525B] hover:border-[#B8891A]/50 focus:border-[#B8891A] transition-colors"
              />
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-[#A1A1AA]">
            Showing <span className="text-[#B8891A] font-bold">{filteredProducts.length}</span> product
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
            <h2 className="text-2xl font-black text-white mb-2">No Products Found</h2>
            <p className="text-[#A1A1AA] mb-6">
              Try searching for wardrobe, mandir, study table, rent, panel or nameplate.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setAvailabilityFilter('all');
                setSearchQuery('');
              }}
              className="bg-[#B8891A] text-black px-8 py-3 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* Footer CTA */}
      <section className="border-t border-[#B8891A]/10 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
        <div className="container mx-auto px-8 py-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Need a Custom Size or Finish?
          </h2>
          <p className="text-xl text-[#A1A1AA] mb-8 max-w-3xl mx-auto">
            Share room dimensions, reference photos and your budget. We can suggest practical options for modular wardrobes, storage beds, mandirs, CNC wall panels, nameplates and rental setups.
          </p>
          <a
            href="https://wa.me/918817503658"
            className="inline-block bg-[#B8891A] text-black px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
