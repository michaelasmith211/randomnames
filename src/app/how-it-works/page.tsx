import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Cpu, Database, Sparkles, Sliders, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'How It Works - Random Name Generation Engine Explained',
  description: 'Understand the algorithmic architecture, procedural morpheme generation, and private client-side engine behind randomnamegenerator.dev.',
  path: '/how-it-works/',
});

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'How It Works', href: '/how-it-works/' }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Technology &amp; Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How the Random Name Generator Works
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Explore the technical architecture, procedural algorithms, and privacy safeguards powering our name generation platform.
            </p>
          </div>

          {/* Phase 1: Client-Side Execution */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-extrabold">1</span>
              <span>100% Client-Side Generation Engine</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When you visit <strong>randomnamegenerator.dev</strong>, all datasets and procedural logic are bundled as lightweight, tree-shaken static JavaScript. When you click <em>Generate Names</em>:
            </p>
            <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1.5">
              <li>No HTTP request or API call is sent to any remote server.</li>
              <li>Your device’s crypto-random browser entropy selects candidates with zero latency.</li>
              <li>The tool functions seamlessly even if your internet connection drops after initial load.</li>
            </ul>
          </div>

          {/* Phase 2: Procedural Morpheme Engine */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-extrabold">2</span>
              <span>Procedural Morpheme &amp; Syllable Synthesis</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              For fantasy races (elves, wizards, dragons), gamer handles, and business names, our generator goes beyond static dictionary lookups using a multi-tier procedural synthesis pipeline:
            </p>
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 font-mono text-xs text-slate-800 space-y-2">
              <div className="text-indigo-600 font-bold">// Fantasy Synthesis Example</div>
              <div>[Prefix: &quot;Ael&quot;] + [Root: &quot;or&quot;] + [Suffix: &quot;ia&quot;] &rarr; &quot;Aeloria&quot;</div>
              <div>[Epithet: &quot;Silverleaf&quot;] &rarr; &quot;Aeloria Silverleaf&quot;</div>
              <div className="text-indigo-600 font-bold pt-2">// Startup Brand Blend Example</div>
              <div>[Root: &quot;Apex&quot;] + [Suffix: &quot;flow&quot;] &rarr; &quot;ApexFlow&quot;</div>
            </div>
          </div>

          {/* Phase 3: Cultural Surname Compatibility */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-extrabold">3</span>
              <span>Linguistic &amp; Surname Compatibility Matching</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When generating full identities, the system tags first names and family surnames with geographic, linguistic, and cultural markers. If you select &ldquo;Japanese&rdquo;, the algorithm filters the surname matrix to authentic Japanese lineages (Tanaka, Takahashi, Sato) rather than mismatched cross-cultural names.
            </p>
          </div>

          {/* Phase 4: Deduplication & Entropy */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-extrabold">4</span>
              <span>Strict Batch Deduplication</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Whether you generate 5 or 100 names, each generated batch is processed through a strict duplicate filter using an internal <code className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-800 font-mono text-xs">Set&lt;string&gt;</code> structure. You will never see duplicate names in a single generation set.
            </p>
          </div>

          {/* Phase 5: Local Storage */}
          <div className="space-y-4 pt-6 border-t border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-xs font-extrabold">5</span>
              <span>Zero-Tracking Local Storage</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              When you click the heart icon on any generated name or view recent batches, the data is saved in your browser’s standard <code className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-800 font-mono text-xs">localStorage</code> under isolated keys. You have 100% control to view, export, or permanently wipe your saved names at any time.
            </p>
          </div>

          <div className="pt-8 border-t border-slate-100 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold shadow-sm transition-colors"
            >
              <span>Test the Generator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
