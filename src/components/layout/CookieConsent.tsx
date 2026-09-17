'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Cookie, Settings, Check, X } from 'lucide-react';

const COOKIE_STORAGE_KEY = 'rng_cookie_consent_v1';

export interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: true,
    analytics: false,
  });

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!saved) {
        // Delay slightly for smooth non-blocking appearance
        const timer = setTimeout(() => setShowBanner(true), 800);
        return () => clearTimeout(timer);
      } else {
        const parsed = JSON.parse(saved);
        setPreferences(parsed);
      }
    } catch {
      // Fallback if localStorage is inaccessible
      setShowBanner(false);
    }
  }, []);

  // Listen for custom trigger from footer to reopen cookie preferences
  useEffect(() => {
    const handleReopen = () => {
      setShowPreferences(true);
    };
    window.addEventListener('open-cookie-preferences', handleReopen);
    return () => window.removeEventListener('open-cookie-preferences', handleReopen);
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      // Ignore
    }
    setPreferences(prefs);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ essential: true, functional: true, analytics: true });
  };

  const handleEssentialOnly = () => {
    saveConsent({ essential: true, functional: false, analytics: false });
  };

  if (!mounted) return null;

  return (
    <>
      {/* 1. Global Bottom Cookie Banner (GDPR / CCPA / ePrivacy compliant) */}
      {showBanner && !showPreferences && (
        <aside
          role="region"
          aria-label="Cookie and Privacy Consent"
          className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 bg-white/98 backdrop-blur-md border-t border-slate-200 shadow-2xl animate-in slide-in-from-bottom duration-300"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3 max-w-3xl">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
                <Cookie className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-semibold">Your Privacy Matters:</strong> We use strictly essential local storage to remember your name favorites and generation history on your device. We do not sell personal information or track your identity across the web. Learn more in our{' '}
                  <Link href="/privacy/" className="text-indigo-600 underline hover:text-indigo-700">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/cookie-policy/" className="text-indigo-600 underline hover:text-indigo-700">
                    Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 self-end md:self-center shrink-0">
              <button
                type="button"
                onClick={() => setShowPreferences(true)}
                className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Customize
              </button>
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Essential Only
              </button>
              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* 2. Detailed Preference Modal */}
      {showPreferences && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowPreferences(false)}
        >
          <div
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 sm:p-7 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <Settings className="w-4 h-4" />
                </div>
                <div>
                  <h2 id="cookie-modal-title" className="text-base font-bold text-slate-900">
                    Cookie &amp; Storage Preferences
                  </h2>
                  <p className="text-[11px] text-slate-500">Manage your local storage preferences</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-600 leading-relaxed mb-6">
              {/* Category 1: Essential */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3">
                <div>
                  <div className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                    <span>Strictly Essential Storage</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">Required</span>
                  </div>
                  <p className="mt-1 text-slate-500">
                    Enables core site features such as client-side name generation, favorite name saving, and temporary history. Without this, the website cannot remember saved names.
                  </p>
                </div>
                <div className="w-5 h-5 text-emerald-600 shrink-0 mt-1">
                  <Check className="w-5 h-5" />
                </div>
              </div>

              {/* Category 2: Functional */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Functional Preferences</div>
                  <p className="mt-1 text-slate-500">
                    Remembers UI configurations, such as your last selected country or name category preferences across sessions.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                  className="w-4 h-4 text-indigo-600 rounded mt-1 cursor-pointer"
                  aria-label="Toggle functional preferences"
                />
              </div>

              {/* Category 3: Analytics */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-3">
                <div>
                  <div className="font-bold text-slate-900 text-sm">Anonymous Performance Telemetry</div>
                  <p className="mt-1 text-slate-500">
                    Helps us monitor site speed, 404 errors, and core web vitals without collecting personal names or IP tracking.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="w-4 h-4 text-indigo-600 rounded mt-1 cursor-pointer"
                  aria-label="Toggle analytics preferences"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handleEssentialOnly}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
              >
                Reject All Non-Essential
              </button>
              <button
                type="button"
                onClick={() => saveConsent(preferences)}
                className="px-5 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm transition-colors"
              >
                Save My Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
