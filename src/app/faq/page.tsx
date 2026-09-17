import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { FaqAccordion } from '@/components/seo/FaqAccordion';
import { JsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = constructMetadata({
  title: 'Frequently Asked Questions (FAQ) - Random Name Generator',
  description: 'Find answers to common questions about generating names, commercial copyright usage, cultural authenticity, privacy, and exporting results.',
  path: '/faq/',
});

const ALL_FAQS = [
  {
    question: 'What is randomnamegenerator.dev?',
    answer: 'randomnamegenerator.dev is a fast, free, and privacy-first web application that algorithmically generates random names across dozens of real-world cultures, fantasy realms, gaming genres, and business categories.',
  },
  {
    question: 'How do I generate names?',
    answer: 'Navigate to the generator at the top of the homepage or any specialized generator page. Choose your desired Name Type, Gender, Origin, Style, and Quantity (from 1 to 100). Click "Generate Names" to view your instant list.',
  },
  {
    question: 'Can I use these names commercially in novels, games, or business brands?',
    answer: 'Yes! All names generated are public domain linguistic combinations. You have 100% legal freedom to use them in published books, indie games, podcasts, screenplays, software applications, and commercial branding with zero licensing fees or required attribution.',
  },
  {
    question: 'Do you store any of my generated names or queries on a server?',
    answer: 'No. The generation engine runs 100% client-side in your web browser. None of your selections, generated names, or personal information are ever transmitted to or stored on any external database.',
  },
  {
    question: 'How do saved favorites work?',
    answer: 'Clicking the heart icon saves the name to your browser’s local storage (localStorage). You can open the Favorites drawer at any time from the top navigation bar to copy all names, download them as a text file, or delete them.',
  },
  {
    question: 'How many names can I generate in one click?',
    answer: 'You can generate 1, 5, 10, 20, 50, or 100 names per generation run. There is no daily limit or cap on the number of times you can click Generate.',
  },
  {
    question: 'Are there duplicate names in a single generation set?',
    answer: 'No. Our deduplication engine ensures every generated batch has unique names, even when generating 100 names at once.',
  },
  {
    question: 'How are cultural and international names chosen?',
    answer: 'Our cultural datasets are curated using historical records, census registers, and etymological archives from over 20 countries. Surnames are matched to their authentic cultural origin to preserve linguistic realism.',
  },
  {
    question: 'Can I provide my own surname for full name generation?',
    answer: 'Yes. In the full name generator, you can type any custom surname in the text field, and the tool will automatically pair diverse first names with your specified family name.',
  },
  {
    question: 'How does the fantasy name generator work?',
    answer: 'Our fantasy engine combines hand-curated mythical names with a procedural syllabic synthesizer that blends race-appropriate prefixes, roots, suffixes, and epic titles for elves, wizards, dragons, warriors, and villains.',
  },
  {
    question: 'Can I export or download my generated names?',
    answer: 'Yes! Use the "Copy All" button to copy the plain text list to your clipboard, or click "Download TXT" to save a clean, formatted text file to your device.',
  },
  {
    question: 'Do I need an account or email to use the generator?',
    answer: 'No. Random Name Generator requires no account creation, passwords, email verification, or registration.',
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <JsonLd type="faq" faqs={ALL_FAQS} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'FAQ', href: '/faq/' }]} />

        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Help Center</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about our algorithms, commercial usage rights, privacy, and naming datasets.
          </p>
        </div>

        <FaqAccordion
          items={ALL_FAQS}
          title="General &amp; Technical Questions"
          description="Detailed answers to the most common questions about our platform."
        />

        <div className="mt-12 text-center bg-white rounded-3xl p-8 border border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Have a question not listed here?</h2>
          <p className="text-sm text-slate-600 mb-4">
            We are always improving our dataset and tool capabilities. Feel free to contact our team.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
