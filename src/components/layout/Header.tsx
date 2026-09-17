'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Heart, Menu, X, ChevronDown, Wand2, Compass } from 'lucide-react';
import { getSavedFavorites } from '@/lib/storage';

interface HeaderProps {
  onOpenFavorites?: () => void;
}

export function Header({ onOpenFavorites }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [generatorsDropdownOpen, setGeneratorsDropdownOpen] = useState(false);
  const [favCount, setFavCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const favs = getSavedFavorites();
      setFavCount(favs.length);
    };

    updateCount();
    window.addEventListener('favorites-updated', updateCount);
    window.addEventListener('storage', updateCount);

    return () => {
      window.removeEventListener('favorites-updated', updateCount);
      window.removeEventListener('storage', updateCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 text-slate-900 group focus:outline-none"
            aria-label="Random Name Generator Homepage"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 flex items-center justify-center text-white shadow-sm shadow-indigo-200 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-sm tracking-wider">RNG</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight leading-none text-slate-900">
                Random Name Generator
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                randomnamegenerator.dev
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main Navigation">
            {/* Generators Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setGeneratorsDropdownOpen(!generatorsDropdownOpen)}
                onBlur={() => setTimeout(() => setGeneratorsDropdownOpen(false), 200)}
                className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors py-2"
                aria-expanded={generatorsDropdownOpen}
              >
                <span>Generators</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {generatorsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl py-2 z-50 animate-in fade-in-50 zoom-in-95">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                    Popular
                  </div>
                  <Link
                    href="/random-full-name-generator/"
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                  >
                    <span>Full Name Generator</span>
                  </Link>
                  <Link
                    href="/fantasy-name-generator/"
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                  >
                    <span>Fantasy Name Generator</span>
                  </Link>
                  <Link
                    href="/character-name-generator/"
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                  >
                    <span>Character Name Generator</span>
                  </Link>
                  <Link
                    href="/username-generator/"
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                  >
                    <span>Username Generator</span>
                  </Link>
                  <Link
                    href="/business-name-generator/"
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
                  >
                    <span>Business Name Generator</span>
                  </Link>
                  <div className="border-t border-slate-100 my-1"></div>
                  <Link
                    href="/categories/"
                    className="flex items-center justify-between px-4 py-2 text-xs font-medium text-indigo-600 hover:bg-indigo-50"
                  >
                    <span>Browse All 40+ Generators</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/categories/"
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/how-it-works/"
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/faq/"
              className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Favorites Button */}
            <button
              type="button"
              onClick={onOpenFavorites}
              className="relative p-2 rounded-xl text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label={`View saved favorites (${favCount})`}
              title="Saved Favorites"
            >
              <Heart className={`w-5 h-5 ${favCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span className="hidden sm:inline text-xs font-semibold">Favorites</span>
              {favCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-[11px] font-bold leading-none text-white bg-rose-500 rounded-full">
                  {favCount}
                </span>
              )}
            </button>

            {/* Primary CTA */}
            <Link
              href="/#generator"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-98 text-white text-sm font-semibold shadow-sm shadow-indigo-200 transition-all"
            >
              <Wand2 className="w-4 h-4" />
              <span>Generate a Name</span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          <Link
            href="/categories/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50"
          >
            <span>All Categories & Generators</span>
            <Compass className="w-4 h-4 text-slate-400" />
          </Link>
          <div className="px-3 py-1 text-xs font-bold text-slate-600 uppercase tracking-wider">
            Popular Generators
          </div>
          <Link
            href="/random-full-name-generator/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
          >
            Full Name Generator
          </Link>
          <Link
            href="/fantasy-name-generator/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
          >
            Fantasy Name Generator
          </Link>
          <Link
            href="/character-name-generator/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
          >
            Character Name Generator
          </Link>
          <Link
            href="/username-generator/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50"
          >
            Username Generator
          </Link>
          <div className="border-t border-slate-100 my-2"></div>
          <Link
            href="/how-it-works/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            How It Works
          </Link>
          <Link
            href="/faq/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Frequently Asked Questions
          </Link>
          <div className="pt-2">
            <Link
              href="/#generator"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-semibold shadow-sm"
            >
              <Wand2 className="w-4 h-4" />
              <span>Generate Names Now</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
