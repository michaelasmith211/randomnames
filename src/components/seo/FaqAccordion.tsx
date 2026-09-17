'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  title?: string;
  description?: string;
}

export function FaqAccordion({
  items,
  title = 'Frequently Asked Questions',
  description = 'Everything you need to know about our random name generator tool and algorithms.',
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 my-12 shadow-sm">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="mt-2.5 text-sm sm:text-base text-slate-600">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-4">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-slate-50/70 transition-colors focus-visible:ring-2 focus-visible:ring-indigo-500"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-base sm:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed bg-white border-t border-slate-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
