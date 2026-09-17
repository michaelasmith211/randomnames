import React from 'react';
import { Metadata } from 'next';
import { FileText, CheckCircle2 } from 'lucide-react';
import { constructMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = constructMetadata({
  title: 'Terms of Service - Random Name Generator',
  description: 'Read the Terms of Service for randomnamegenerator.dev. All generated names are 100% free for commercial and creative projects.',
  path: '/terms/',
});

export default function TermsPage() {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms of Service', href: '/terms/' }]} />

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="mt-2 text-xs text-slate-500 font-medium">
              Effective Date: January 1, 2026 &bull; Last Updated: 2026
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">1. Agreement to Terms</h2>
              <p>
                By accessing or using <strong>randomnamegenerator.dev</strong> (&ldquo;Website&rdquo; or &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may discontinue use of the website at any time.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">2. Commercial &amp; Creative License</h2>
              <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 text-indigo-950 mb-3 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">100% Free Royalty-Free Commercial Rights:</strong>
                  <p className="mt-1 text-xs sm:text-sm text-indigo-900 leading-relaxed">
                    You own full creative rights to incorporate any name generated on this platform into published books, commercial video games, podcasts, screenplays, character sheets, tabletop campaigns, and creative projects without payment, royalties, or attribution.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">3. Trademark Clearance Disclaimer</h2>
              <p>
                While our generator algorithm creates procedural combinations and draws from public linguistic heritage, we cannot guarantee that a generated business, brand, or superhero name is not already trademarked or registered by an existing enterprise in your specific jurisdiction or industry class. You are solely responsible for conducting trademark clearance searches (e.g., via USPTO, EUIPO, or national business registries) before incorporating a commercial legal entity or filing a trademark.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">4. Acceptable Use</h2>
              <p>
                You agree not to abuse, disrupt, or attempt to reverse-engineer our hosting infrastructure through automated denial-of-service attacks or malicious scraping scripts. Normal automated browsing adhering to standard crawl delays is welcomed.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">5. Disclaimer of Warranties</h2>
              <p>
                The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis without warranties of any kind, whether express or implied.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-slate-900 mb-2">6. Governing Law &amp; Inquiries</h2>
              <p>
                If you have questions regarding these Terms, please contact <strong>legal@randomnamegenerator.dev</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
