import React from 'react';
import Link from 'next/link';

export function Footer() {
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
                  D&D Names
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
              Gaming & Online
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
                <Link href="/random-username-generator/" className="hover:text-white transition-colors">
                  Random Usernames
                </Link>
              </li>
              <li>
                <Link href="/minecraft-name-generator/" className="hover:text-white transition-colors">
                  Minecraft Names
                </Link>
              </li>
              <li>
                <Link href="/cool-names-generator/" className="hover:text-white transition-colors">
                  Cool Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Business */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Business Names
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/business-name-generator/" className="hover:text-white transition-colors">
                  Business Generator
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
                <Link href="/unique-names-generator/" className="hover:text-white transition-colors">
                  Unique Names
                </Link>
              </li>
              <li>
                <Link href="/classic-names-generator/" className="hover:text-white transition-colors">
                  Classic Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Country */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Country Names
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/japanese-name-generator/" className="hover:text-white transition-colors">
                  Japanese Names
                </Link>
              </li>
              <li>
                <Link href="/indian-name-generator/" className="hover:text-white transition-colors">
                  Indian Names
                </Link>
              </li>
              <li>
                <Link href="/british-name-generator/" className="hover:text-white transition-colors">
                  British Names
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
                <Link href="/scandinavian-name-generator/" className="hover:text-white transition-colors">
                  Nordic Names
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 7: Company & Legal */}
          <div>
            <h3 className="text-white text-xs font-bold uppercase tracking-wider mb-4">
              Platform
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
                <Link href="/terms/" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Culture note */}
        <div className="border-t border-slate-800 pt-8 pb-4 text-xs text-slate-400 leading-relaxed max-w-4xl">
          <p>
            <strong>Cultural Note:</strong> Our international name datasets celebrate global linguistic heritage and are curated using historical records, etymological dictionaries, and official census statistics. They are intended for creative fiction, gaming, character development, and inspiration, and do not represent a definitive census of any entire culture or religious tradition.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">Random Name Generator</span>
            <span>&bull;</span>
            <span>randomnamegenerator.dev</span>
          </div>
          <div>
            &copy; 2026 Random Name Generator. All rights reserved. 100% Client-Side &amp; Private.
          </div>
        </div>
      </div>
    </footer>
  );
}
