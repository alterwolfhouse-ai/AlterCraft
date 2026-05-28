import React from 'react';
import { Link } from 'react-router';

interface HeaderProps {
  variant?: 'default' | 'minimal';
}

export function Header({ variant = 'default' }: HeaderProps) {
  if (variant === 'minimal') {
    return (
      <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#B8891A]/10">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <span className="text-2xl font-black text-white tracking-tighter hover:text-[#B8891A] transition-colors">
              ALTER CRAFT
            </span>
          </Link>
          
          <div className="text-[#A1A1AA] text-xs uppercase tracking-widest">
            Custom Furniture + CNC Interiors
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#B8891A]/10">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-8 h-1 bg-[#B8891A] group-hover:w-12 transition-all" />
          <span className="text-2xl font-black text-white tracking-tighter">
            ALTER CRAFT
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm text-[#A1A1AA] hover:text-[#B8891A] uppercase tracking-widest transition-colors"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="text-sm text-[#A1A1AA] hover:text-[#B8891A] uppercase tracking-widest transition-colors"
          >
            Designs
          </Link>
          <a
            href="https://wa.me/918817503658"
            className="text-sm bg-[#B8891A] text-black px-6 py-2 font-black uppercase tracking-widest hover:bg-white transition-colors"
          >
            WhatsApp
          </a>
        </nav>

        <div className="md:hidden">
          <a
            href="https://wa.me/918817503658"
            className="text-xs bg-[#B8891A] text-black px-4 py-2 font-black uppercase tracking-widest"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
