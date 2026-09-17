import React from 'react';
import { Metadata } from 'next';
import { Cookie, ShieldCheck, Database, HardDrive, CheckCircle2 } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'Cookie & Storage Policy - Random Name Generator',
  description: 'Understand how randomnamegenerator.dev utilizes local storage and essential cookies to provide a private, database-free experience under GDPR and CCPA.',
  path: '/cookie-policy/',
});

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Cookie Policy', href: '/cookie-policy/' }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3 border border-indigo-100">
              <Cookie className="w-3.5 h-3.5" />
              <span>Transparency &amp; Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Cookie &amp; Local Storage Policy
            </h1>
            <p className="mt-2 text-xs text-slate-400">
              Effective Date: January 1, 2026 &bull; Global Compliance (GDPR, ePrivacy Directive, CCPA/CPRA, PIPEDA)
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Overview &amp; Zero-Database Philosophy</h2>
              <p>
                <strong>randomnamegenerator.dev</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;platform&rdquo;) does not operate a traditional user account database. Instead, to provide rich interactive features such as saving favorite names and retaining recent generation history without forcing you to log in, our website utilizes standard browser storage technologies, primarily <strong>HTML5 Local Storage (localStorage)</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. What Technologies Do We Use?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-indigo-600" />
                    <span>HTML5 LocalStorage (Device-Only)</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Data stored in your browser that never expires automatically and is never transmitted over HTTP headers to any server. Used for your saved names.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-slate-900 text-sm mb-1 flex items-center gap-2">
                    <Cookie className="w-4 h-4 text-indigo-600" />
                    <span>Essential HTTP Cookies</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Minimal, non-tracking cookies that may be utilized strictly for server load balancing, security routing, and DDoS mitigation by our CDN provider.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Detailed Breakdown of Stored Keys</h2>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="min-w-full divide-y divide-slate-200 text-xs text-left">
                  <thead className="bg-slate-50 text-slate-700 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="px-4 py-3">Storage Key</th>
                      <th className="px-4 py-3">Category</th>
                      <th className="px-4 py-3">Purpose</th>
                      <th className="px-4 py-3">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr>
                      <td className="px-4 py-3 font-mono text-slate-800">rng_saved_favorites_v1</td>
                      <td className="px-4 py-3"><span className="px-2 py-0.5 rounded bg-slate-100 font-semibold">Strictly Essential</span></td>
                      <td className="px-4 py-3">Stores names you explicitly bookmark using the heart icon for easy reference.</td>
                      <td className="px-4 py-3">Persistent until manually cleared by user</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-slate-800">rng_generation_history_v1</td>
                      <td className="px-4 py-3"><span className="px-2 py-0.5 rounded bg-slate-100 font-semibold">Strictly Essential</span></td>
                      <td className="px-4 py-3">Stores your last 10 generation batches for one-click restoration.</td>
                      <td className="px-4 py-3">Persistent until manually cleared by user</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono text-slate-800">rng_cookie_consent_v1</td>
                      <td className="px-4 py-3"><span className="px-2 py-0.5 rounded bg-slate-100 font-semibold">Strictly Essential</span></td>
                      <td className="px-4 py-3">Remembers your cookie and local storage preferences so the consent banner is not shown repeatedly.</td>
                      <td className="px-4 py-3">12 Months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Third-Party Advertising Cookies</h2>
              <p>
                To support free access to our platform, we may display non-intrusive advertisements served by third-party advertising partners such as Google AdSense. These networks may use cookies and web beacons to serve ads based on prior visits to our or other websites.
              </p>
              <p className="mt-2">
                You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Google Ads Settings</a> or by utilizing privacy tools like YourAdChoices (<a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">aboutads.info</a>).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. How to Control &amp; Delete Storage</h2>
              <p>
                Because all generated names and favorites reside solely in your browser, you maintain total control:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Within the App:</strong> Open the Favorites modal and click &ldquo;Clear All&rdquo;, or open the History drawer and click &ldquo;Clear History&rdquo;.</li>
                <li><strong>Browser Settings:</strong> You can clear all local storage and cookies at any time through your browser’s Settings &rarr; Privacy &amp; Security &rarr; Clear Browsing Data menu.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">6. Inquiries</h2>
              <p>
                If you have any questions regarding this policy or our privacy safeguards, contact us at <strong>privacy@randomnamegenerator.dev</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
