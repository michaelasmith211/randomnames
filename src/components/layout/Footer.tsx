'use client';

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { SOCIAL_LINKS } from '@/data/social';

export function Footer() {
  const handleOpenCookiePreferences = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('open-cookie-preferences'));
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          {/* Col 1: General */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Name Generators
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/random-first-name-generator/" className="hover:text-white transition-colors">
                  First Names
                </Link>
              </li>
              <li>
                <Link href="/random-full-name-generator/" className="hover:text-white transition-colors">
                  Full Names
                </Link>
              </li>
              <li>
                <Link href="/male-name-generator/" className="hover:text-white transition-colors">
                  Male Names
                </Link>
              </li>
              <li>
                <Link href="/female-name-generator/" className="hover:text-white transition-colors">
                  Female Names
                </Link>
              </li>
              <li>
                <Link href="/gender-neutral-name-generator/" className="hover:text-white transition-colors">
                  Unisex Names
                </Link>
              </li>
              <li>
                <Link href="/last-name-generator/" className="hover:text-white transition-colors">
                  Last Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Character */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Character Names
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/character-name-generator/" className="hover:text-white transition-colors">
                  Character Generator
                </Link>
              </li>
              <li>
                <Link href="/rpg-name-generator/" className="hover:text-white transition-colors">
                  RPG Characters
                </Link>
              </li>
              <li>
                <Link href="/warrior-name-generator/" className="hover:text-white transition-colors">
                  Warrior Names
                </Link>
              </li>
              <li>
                <Link href="/pirate-name-generator/" className="hover:text-white transition-colors">
                  Pirate Names
                </Link>
              </li>
              <li>
                <Link href="/superhero-name-generator/" className="hover:text-white transition-colors">
                  Superhero Names
                </Link>
              </li>
              <li>
                <Link href="/villain-name-generator/" className="hover:text-white transition-colors">
                  Villain Names
                </Link>
              </li>
              <li>
                <Link href="/medieval-name-generator/" className="hover:text-white transition-colors">
                  Medieval Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Fantasy */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Fantasy Names
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/fantasy-name-generator/" className="hover:text-white transition-colors">
                  Fantasy Generator
                </Link>
              </li>
              <li>
                <Link href="/dnd-name-generator/" className="hover:text-white transition-colors">
                  D&amp;D Names
                </Link>
              </li>
              <li>
                <Link href="/elf-name-generator/" className="hover:text-white transition-colors">
                  Elf Names
                </Link>
              </li>
              <li>
                <Link href="/wizard-name-generator/" className="hover:text-white transition-colors">
                  Wizard Names
                </Link>
              </li>
              <li>
                <Link href="/dragon-name-generator/" className="hover:text-white transition-colors">
                  Dragon Names
                </Link>
              </li>
              <li>
                <Link href="/vampire-name-generator/" className="hover:text-white transition-colors">
                  Vampire Names
                </Link>
              </li>
              <li>
                <Link href="/fairy-name-generator/" className="hover:text-white transition-colors">
                  Fairy Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Gaming & Online */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Gaming &amp; Online
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/username-generator/" className="hover:text-white transition-colors">
                  Username Generator
                </Link>
              </li>
              <li>
                <Link href="/gamer-name-generator/" className="hover:text-white transition-colors">
                  Gamer Names
                </Link>
              </li>
              <li>
                <Link href="/gaming-name-generator/" className="hover:text-white transition-colors">
                  Gaming Handles
                </Link>
              </li>
              <li>
                <Link href="/nickname-generator/" className="hover:text-white transition-colors">
                  Nicknames
                </Link>
              </li>
              <li>
                <Link href="/random-username-generator/" className="hover:text-white transition-colors">
                  Random Usernames
                </Link>
              </li>
              <li>
                <Link href="/minecraft-name-generator/" className="hover:text-white transition-colors">
                  Minecraft Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Business & Styles */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Business &amp; Styles
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/business-name-generator/" className="hover:text-white transition-colors">
                  Business Generator
                </Link>
              </li>
              <li>
                <Link href="/brand-name-generator/" className="hover:text-white transition-colors">
                  Brand Names
                </Link>
              </li>
              <li>
                <Link href="/company-name-generator/" className="hover:text-white transition-colors">
                  Company Names
                </Link>
              </li>
              <li>
                <Link href="/startup-name-generator/" className="hover:text-white transition-colors">
                  Startup Names
                </Link>
              </li>
              <li>
                <Link href="/rare-names-generator/" className="hover:text-white transition-colors">
                  Rare Names
                </Link>
              </li>
              <li>
                <Link href="/cool-names-generator/" className="hover:text-white transition-colors">
                  Cool Names
                </Link>
              </li>
              <li>
                <Link href="/unique-names-generator/" className="hover:text-white transition-colors">
                  Unique Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Country */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              World Cultures
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/american-name-generator/" className="hover:text-white transition-colors">
                  American Names
                </Link>
              </li>
              <li>
                <Link href="/british-name-generator/" className="hover:text-white transition-colors">
                  British Names
                </Link>
              </li>
              <li>
                <Link href="/irish-name-generator/" className="hover:text-white transition-colors">
                  Irish Names
                </Link>
              </li>
              <li>
                <Link href="/scottish-name-generator/" className="hover:text-white transition-colors">
                  Scottish Names
                </Link>
              </li>
              <li>
                <Link href="/japanese-name-generator/" className="hover:text-white transition-colors">
                  Japanese Names
                </Link>
              </li>
              <li>
                <Link href="/chinese-name-generator/" className="hover:text-white transition-colors">
                  Chinese Names
                </Link>
              </li>
              <li>
                <Link href="/korean-name-generator/" className="hover:text-white transition-colors">
                  Korean Names
                </Link>
              </li>
              <li>
                <Link href="/indian-name-generator/" className="hover:text-white transition-colors">
                  Indian Names
                </Link>
              </li>
              <li>
                <Link href="/russian-name-generator/" className="hover:text-white transition-colors">
                  Russian Names
                </Link>
              </li>
              <li>
                <Link href="/french-name-generator/" className="hover:text-white transition-colors">
                  French Names
                </Link>
              </li>
              <li>
                <Link href="/german-name-generator/" className="hover:text-white transition-colors">
                  German Names
                </Link>
              </li>
              <li>
                <Link href="/spanish-name-generator/" className="hover:text-white transition-colors">
                  Spanish Names
                </Link>
              </li>
              <li>
                <Link href="/arabic-name-generator/" className="hover:text-white transition-colors">
                  Arabic Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 7: Company & Legal */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Platform &amp; Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about/" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works/" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/faq/" className="hover:text-white transition-colors">
                  FAQ Hub
                </Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy/" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms/" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenCookiePreferences}
                  className="hover:text-white transition-colors text-left text-xs text-indigo-300 hover:underline pt-1"
                >
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Follow Section */}
        <div className="border-t border-slate-800 pt-8 pb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-sm font-semibold text-white tracking-wide block sm:inline">Official Community &amp; Social Channels</span>
            <span className="text-xs text-slate-400 block sm:inline sm:ml-2 sm:before:content-['•'] sm:before:mr-2">
              Follow for naming guides, linguistic updates, and community tools
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow Random Name Generator on ${item.name}`}
                title={`${item.name} (${item.handle})`}
                className={`flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800/90 border border-slate-700/80 text-slate-300 hover:text-white ${item.hoverBg} transition-all duration-200 hover:scale-110 shadow-sm`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Cultural note */}
        <div className="border-t border-slate-800 pt-8 pb-4 text-xs text-slate-400 leading-relaxed max-w-4xl">
          <p>
            <strong>Cultural Note:</strong> Our international name datasets celebrate global linguistic heritage and are curated using historical records, etymological dictionaries, and official census statistics. They are intended for creative fiction, gaming, character development, and inspiration, and do not represent a definitive census of any entire culture or religious tradition.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <Link href="/" className="focus:outline-none" aria-label="Random Name Generator Homepage">
            <Logo size="sm" theme="dark" showSubtitle={true} />
          </Link>
          <div className="text-center sm:text-right">
            &copy; 2026 Random Name Generator. All rights reserved. 100% Client-Side &amp; Private.
          </div>
        </div>
      </div>
    </footer>
  );
}
