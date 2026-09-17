import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, Lightbulb, Compass, CheckCircle2 } from 'lucide-react';
import { GENERATOR_PAGES } from '@/data/pages/generatorPages';
import { constructMetadata } from '@/lib/metadata';
import { NameGenerator } from '@/components/generator/NameGenerator';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FaqAccordion } from '@/components/seo/FaqAccordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/layout/AdSlot';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(GENERATOR_PAGES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = GENERATOR_PAGES[params.slug];
  if (!page) return {};

  return constructMetadata({
    title: page.title,
    description: page.metaDescription,
    path: `/${page.slug}/`,
  });
}

export default function GeneratorLandingPage({ params }: PageProps) {
  const page = GENERATOR_PAGES[params.slug];

  if (!page) {
    notFound();
  }

  const breadcrumbs = [
    { label: 'Categories', href: '/categories/' },
    { label: page.category, href: '/categories/' },
    { label: page.h1, href: `/${page.slug}/` },
  ];

  return (
    <div className="min-h-screen">
      <JsonLd type="faq" faqs={page.faqs} />
      <JsonLd
        type="howto"
        title={`How to Generate ${page.h1.replace(' Generator', '')} Names`}
        description={`Step-by-step instructions on generating authentic ${page.h1.toLowerCase()} names.`}
        howToSteps={page.howItWorks.map((step, idx) => ({
          position: idx + 1,
          name: step.title,
          text: step.desc,
        }))}
      />
      <JsonLd
        type="webapp"
        title={page.title}
        description={page.metaDescription}
        url={`https://randomnamegenerator.dev/${page.slug}/`}
      />

      {/* Hero & Generator Container */}
      <section className="pt-6 pb-14 bg-gradient-to-b from-indigo-50/40 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbs} />

          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{page.category}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {page.h1}
            </h1>

            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {page.subheading}
            </p>

            <p className="mt-2 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              {page.introText}
            </p>
          </div>

          {/* Dedicated Generator with pre-filled defaults */}
          <NameGenerator
            initialOptions={page.defaultOptions}
            title={`Generate ${page.h1.replace(' Generator', '')} Names`}
            subtitle="Tweak preferences below and click Generate to see instant results."
          />
        </div>
      </section>

      {/* Top Ad Slot */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot slotId={`page-top-${page.slug}`} format="horizontal" />
      </div>

      {/* How It Works Section */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Generate authentic names in 3 simple steps with zero registration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {page.howItWorks.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-3xl bg-white border border-slate-200 text-center flex flex-col items-center"
            >
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 font-extrabold text-lg flex items-center justify-center mb-3">
                {item.step}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Curated Examples Section */}
      {page.examples && page.examples.length > 0 && (
        <section className="py-14 bg-white border-y border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Curated Name Examples &amp; Meanings
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Explore real name combinations, linguistic roots, and backstories.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {page.examples.map((ex) => (
                <div
                  key={ex.name}
                  className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-lg font-bold text-slate-900">{ex.name}</span>
                      <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-indigo-50 text-indigo-700">
                        {ex.tag}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {ex.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Name Selection Tips */}
      {page.tips && page.tips.length > 0 && (
        <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-3 border border-amber-200">
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              <span>Selection Tips</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Tips for Selecting the Best Names
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Practical guidance tailored specifically to {page.category.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {page.tips.map((tip, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{tip.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          items={page.faqs}
          title={`${page.h1.replace(' Generator', '')} FAQs`}
          description={`Common questions about generating ${page.h1.toLowerCase()} names.`}
        />
      </section>

      {/* Related Generators */}
      {page.relatedSlugs && page.relatedSlugs.length > 0 && (
        <section className="py-14 bg-slate-100/60 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">
                <Compass className="w-3.5 h-3.5" />
                <span>Explore More</span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Related Name Generators
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
              {page.relatedSlugs.map((relSlug) => {
                const relPage = GENERATOR_PAGES[relSlug];
                const relTitle = relPage ? relPage.h1 : relSlug.replace(/-/g, ' ');
                return (
                  <Link
                    key={relSlug}
                    href={`/${relSlug}/`}
                    className="p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 hover:shadow-sm transition-all group flex items-center justify-between"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 capitalize truncate">
                      {relTitle}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Ad Slot */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <AdSlot slotId={`page-bottom-${page.slug}`} format="horizontal" />
      </div>
    </div>
  );
}
