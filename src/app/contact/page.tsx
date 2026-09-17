'use client';

import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Suggestion', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us', href: '/contact/' }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3">
              <Mail className="w-3.5 h-3.5" />
              <span>Feedback &amp; Inquiries</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contact Our Team
            </h1>

            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Have a suggestion for a new culture dataset, found a bug, or want to partner? We would love to hear from you.
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Message Received!</h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Thank you for reaching out to Random Name Generator. Our development team will review your message shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: 'Suggestion', message: '' });
                }}
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <select
                  id="contact-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm font-medium text-slate-800 cursor-pointer"
                >
                  <option value="Suggestion">Name / Category Suggestion</option>
                  <option value="Bug">Technical Bug Report</option>
                  <option value="Cultural Feedback">Linguistic / Cultural Feedback</option>
                  <option value="General">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share your thoughts, suggestions, or feedback here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-bold text-sm shadow-md shadow-indigo-200 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}

          <div className="mt-10 pt-6 border-t border-slate-100 text-center text-xs text-slate-600 font-medium">
            You can also reach our engineering team directly at <strong>support@randomnamegenerator.dev</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
