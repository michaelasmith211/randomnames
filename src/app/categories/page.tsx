import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { CATEGORY_GROUPS } from '@/data/pages/categories';
import { constructMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'All Name Generator Categories - Complete Directory',
  description: 'Explore our complete directory of random name generators across characters, fantasy, gaming, countries, styles, and businesses.',
  path: '/categories/',
});

export default function CategoriesPage() {
  const breadcrumbs = [
    { label: 'All Categories', href: '/categories/' },
  ];

  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbs} />

        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Master Directory</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            All Name Generator Categories
          </h1>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Browse our comprehensive index of specialized generators for fantasy fiction, tabletop gaming, authentic world cultures, online handles, and corporate brands.
          </p>
        </div>

        {/* Groups */}
        <div className="space-y-12">
          {CATEGORY_GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm"
            >
              <div className="mb-6 pb-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {group.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 self-start sm:self-auto">
                  {group.items.length} Generators
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.slug ? `/${item.slug}/` : '/'}
                    className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-indigo-300 hover:shadow-sm transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                      <span>Launch Generator</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
