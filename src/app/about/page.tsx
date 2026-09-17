import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Sparkles, Zap, Lock, Heart, Globe2 } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'About Us - Random Name Generator',
  description: 'Learn about our mission to provide the fastest, most authentic, and privacy-first random name generation tools for creators worldwide.',
  path: '/about/',
});

export default function AboutPage() {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us', href: '/about/' }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Mission</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About Random Name Generator
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Random Name Generator (<strong>randomnamegenerator.dev</strong>) was built to give writers, game developers, tabletop dungeon masters, entrepreneurs, and parents an instant, clutter-free naming engine with zero bloat and absolute respect for privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Instant Client-Side Speed</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No slow API calls, no loading spinners, and no server roundtrips. Every algorithm executes directly in your browser with millisecond responsiveness.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">100% Private &amp; Database-Free</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your generated names, favorites, and history remain exclusively on your device. We do not store or transmit any names or user queries to external servers.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Culturally Verified Datasets</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our cultural and international names are verified against national census records and etymological archives, pairing realistic first names with authentic family surnames.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1">Free for Commercial Use</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Every generated name is free to use in your published novels, indie steam games, comic books, software startups, and creative endeavors without licensing fees.
              </p>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
            <h2 className="text-xl font-bold text-slate-900">Our Algorithmic Approach</h2>
            <p>
              Unlike simple random dictionary pickers that combine random words into awkward gibberish, our generation engine uses tailored rules for distinct domains:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Real Names:</strong> We cross-reference historical popularity, phonetics, and geographic heritage to ensure high harmony between given names and surnames.</li>
              <li><strong>Fantasy &amp; Sci-Fi:</strong> We blend authentic linguistic morphemes (prefixes, roots, and race-specific suffixes) to craft evocative, pronouncable fantasy names.</li>
              <li><strong>Usernames &amp; Handles:</strong> We combine punchy aesthetic words and gaming archetypes tailored to platform character limits.</li>
              <li><strong>Business Brands:</strong> We follow modern branding principles—brevity, phonetic openness, and compound imagery—so startups can find memorable brand names.</li>
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition-colors"
            >
              <span>Back to Generator</span>
            </Link>
            <Link
              href="/contact/"
              className="text-sm font-semibold text-slate-600 hover:text-indigo-600"
            >
              Get in Touch &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
