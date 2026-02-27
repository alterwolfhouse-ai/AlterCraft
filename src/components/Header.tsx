import React from 'react';
import { Link } from 'react-router';

interface HeaderProps {
  variant?: 'default' | 'minimal';
}

export function Header({ variant = 'default' }: HeaderProps) {
  if (variant === 'minimal') {
    return (
      <header className="sticky top-[36px] z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#FFB800]/10">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 group">
            <span className="text-2xl font-black text-white tracking-tighter hover:text-[#FFB800] transition-colors">
              ALTER CRAFT
            </span>
          </Link>
          
          <div className="text-[#A1A1AA] text-xs uppercase tracking-widest">
            Handcrafted + CNC Precision
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-[36px] z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#FFB800]/10">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 group">
          <div className="w-8 h-1 bg-[#FFB800] group-hover:w-12 transition-all" />
          <span className="text-2xl font-black text-white tracking-tighter">
            ALTER CRAFT
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm text-[#A1A1AA] hover:text-[#FFB800] uppercase tracking-widest transition-colors"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="text-sm text-[#A1A1AA] hover:text-[#FFB800] uppercase tracking-widest transition-colors"
          >
            Gallery
          </Link>
          <a
            href="https://wa.me/918826436093"
            className="text-sm bg-[#FFB800] text-black px-6 py-2 font-black uppercase tracking-widest hover:bg-white transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          <a
            href="https://wa.me/918826436093"
            className="text-xs bg-[#FFB800] text-black px-4 py-2 font-black uppercase tracking-widest"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}