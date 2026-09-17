import React from 'react';
import { Metadata } from 'next';
import { ShieldCheck, Lock } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'Privacy Policy - Random Name Generator',
  description: 'Our privacy policy explains our 100% client-side, zero-database architecture. We never collect or transmit your generated names or personal information.',
  path: '/privacy/',
});

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy/' }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-3 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy First</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-2 text-xs text-slate-500 font-medium">
              Effective Date: January 1, 2026 &bull; Last Updated: 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Our Fundamental Commitment</h2>
              <p>
                At <strong>randomnamegenerator.dev</strong>, privacy is not an afterthought—it is foundational to how our application was engineered. Our name generation engine operates <strong>entirely client-side</strong> inside your browser. We do not require accounts, we do not use a backend database, and we do not collect or transmit the names you generate or search for.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information We Do NOT Collect</h2>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>We do <strong>not</strong> collect personal names, email addresses, phone numbers, or passwords.</li>
                <li>We do <strong>not</strong> transmit generated names, custom surnames, or selected generator criteria to any server.</li>
                <li>We do <strong>not</strong> sell, rent, or monetize your creative naming selections or personal data.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Browser Local Storage (localStorage)</h2>
              <p>
                To provide convenient features like saving favorite names and restoring previous generation history without forcing you to create an account, our website utilizes standard browser <code className="px-1.5 py-0.5 bg-slate-100 rounded text-slate-800 font-mono text-xs">localStorage</code>:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li><strong>Favorites:</strong> Stores names you explicitly heart for easy reference.</li>
                <li><strong>History:</strong> Temporarily retains your last 10 generation runs.</li>
              </ul>
              <p className="mt-2">
                This data lives <em>strictly on your physical device</em>. You can clear this data at any moment directly within the tool using &ldquo;Clear All Favorites&rdquo; or by clearing your browser cache.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Standard Web Server Logs</h2>
              <p>
                Like virtually all web hosts, our hosting infrastructure (Vercel) may log standard, anonymized technical telemetry such as IP addresses, browser user-agents, referring URLs, and timestamps strictly for DDoS mitigation, system health monitoring, and routing. These logs are never correlated with generated names.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Third-Party Advertising &amp; Cookies</h2>
              <p>
                To keep our service 100% free, we may display non-intrusive banner advertisements in designated areas outside the core generator. Third-party ad networks (such as Google AdSense) may use cookies to serve advertisements based on your visits to this and other websites. You can opt out of personalized advertising by visiting Google Ad Settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">6. Contact Us</h2>
              <p>
                If you have questions regarding this Privacy Policy, you may contact us anytime at <strong>privacy@randomnamegenerator.dev</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
