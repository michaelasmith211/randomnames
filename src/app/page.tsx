import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Users,
  Sword,
  Gamepad2,
  Briefcase,
  Globe,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Shield,
  Zap,
  Bookmark,
  Crown,
} from 'lucide-react';
import { NameGenerator } from '@/components/generator/NameGenerator';
import { FaqAccordion, FaqItem } from '@/components/seo/FaqAccordion';
import { JsonLd } from '@/components/seo/JsonLd';
import { AdSlot } from '@/components/layout/AdSlot';
import { CATEGORY_GROUPS } from '@/data/pages/categories';

const HOMEPAGE_FAQS: FaqItem[] = [
  {
    question: 'What is a random name generator?',
    answer:
      'A random name generator is an interactive creative tool that algorithmically generates realistic, authentic, or fantastical names based on selected filters such as gender, origin, cultural tradition, aesthetic style, and format (first, full, or last name).',
  },
  {
    question: 'How does the random name generator work?',
    answer:
      'Our platform uses an extensive local dataset of verified names across more than 20 world cultures, paired with a deterministic procedural engine for fantasy, gaming, and business names. It filters names according to your chosen criteria, randomizes them using browser-level entropy, and ensures no duplicate names appear in any single generation batch.',
  },
  {
    question: 'Can I generate male, female, and gender-neutral names?',
    answer:
      'Yes! You can choose "Male", "Female", "Gender-Neutral", or "Any Gender" to tailor the results to your exact storytelling, character, or baby-naming needs.',
  },
  {
    question: 'Can I generate full names with matching surnames?',
    answer:
      'Yes! Choose "Full Names (First + Last)" in the Name Type menu. The generator will automatically pair first names with culturally and historically compatible family surnames (e.g. Japanese first names with Japanese surnames). You can also type your own custom surname to find matching first names.',
  },
  {
    question: 'Can I generate fantasy and D&D character names?',
    answer:
      'Yes! Our dedicated fantasy engine produces names for high elves, wood elves, wizards, warriors, dragons, pirates, superheroes, villains, and medieval nobility, complete with procedural morphemes and legendary titles.',
  },
  {
    question: 'Can I use the generated names for published books and commercial games?',
    answer:
      'Yes, 100%. All generated names are derived from public linguistic traditions and procedural combinations. You hold complete freedom to use them in published novels, indie video games, screenplays, tabletop campaigns, and commercial brands without attribution or royalty fees.',
  },
  {
    question: 'Can I generate names from specific countries and cultures?',
    answer:
      'Yes! We provide dedicated naming algorithms for over 20 regions including American, British, Indian, Irish, Scottish, French, German, Spanish, Italian, Japanese, Chinese, Korean, Arabic, Turkish, Russian, and Scandinavian heritage.',
  },
  {
    question: 'Are the generated names unique?',
    answer:
      'Every generation batch is filtered through an automated deduplication set, guaranteeing zero duplicate names in your 1, 5, 10, 20, 50, or 100 result batches. Our procedural fantasy and brand engines can generate millions of distinct combinations.',
  },
  {
    question: 'Can I save my favorite names?',
    answer:
      'Yes! Click the heart icon on any name to save it to your Favorites drawer. Favorites are stored locally on your device using browser localStorage, requiring no accounts, passwords, or cloud database storage.',
  },
  {
    question: 'Is the random name generator free?',
    answer:
      'Yes, it is completely free with unlimited generations. No credit cards, subscriptions, or account registrations are required.',
  },
];

const POPULAR_GENERATORS = [
  { title: 'Full Name Generator', slug: 'random-full-name-generator', desc: 'Realistic identities with culturally compatible surnames.', icon: Users },
  { title: 'Fantasy Name Generator', slug: 'fantasy-name-generator', desc: 'Epic names for elves, dragons, wizards & D&D characters.', icon: Sword },
  { title: 'Character Name Generator', slug: 'character-name-generator', desc: 'Tailored for novel protagonists, screenplays & RPGs.', icon: Bookmark },
  { title: 'Male Name Generator', slug: 'male-name-generator', desc: 'Strong, classic, and modern boy names with meanings.', icon: Shield },
  { title: 'Female Name Generator', slug: 'female-name-generator', desc: 'Beautiful, elegant, and lyrical girl names with origins.', icon: Sparkles },
  { title: 'Username Generator', slug: 'username-generator', desc: 'Catchy handles for Discord, TikTok, Twitch & Steam.', icon: Gamepad2 },
  { title: 'Business Name Generator', slug: 'business-name-generator', desc: 'Brandable company ideas for SaaS, tech & boutiques.', icon: Briefcase },
  { title: 'Japanese Name Generator', slug: 'japanese-name-generator', desc: 'Authentic given names and family surnames with kanji roots.', icon: Globe },
  { title: 'British Name Generator', slug: 'british-name-generator', desc: 'Classic Victorian and modern UK first and last names.', icon: Crown },
  { title: 'Indian Name Generator', slug: 'indian-name-generator', desc: 'Meaningful Sanskrit, Hindu, and regional Indian names.', icon: Globe },
  { title: 'D&D Name Generator', slug: 'dnd-name-generator', desc: '5e race and class-friendly tabletop character names.', icon: Sword },
  { title: 'Cool Names Generator', slug: 'cool-names-generator', desc: 'Badass, edgy, and sleek names with attitude.', icon: Zap },
];

const HOMEPAGE_HOW_TO_STEPS = [
  {
    position: 1,
    name: 'Select Name Categories & Criteria',
    text: 'Filter by name type (first, full, last, fantasy, gamer, or brand), cultural origin, gender, and quantity from 1 to 100 names.',
  },
  {
    position: 2,
    name: 'Instant Client-Side Procedural Generation',
    text: 'Our browser-level entropy engine shuffles verified datasets and combines morphemes with zero server latency and guaranteed uniqueness.',
  },
  {
    position: 3,
    name: 'Copy, Favorite & Export',
    text: 'Copy single names with one click, favorite standout candidates in local memory, or export complete rosters as formatted TXT files.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <JsonLd type="faq" faqs={HOMEPAGE_FAQS} />
      <JsonLd
        type="howto"
        title="How to Generate Random Names Online"
        description="Step-by-step instructions on generating random names for characters, stories, games, and businesses."
        howToSteps={HOMEPAGE_HOW_TO_STEPS}
      />
      <JsonLd
        type="itemlist"
        itemList={POPULAR_GENERATORS.map((gen, idx) => ({
          position: idx + 1,
          name: gen.title,
          url: `https://randomnamegenerator.dev/${gen.slug}/`,
        }))}
      />

      {/* 1. HERO SECTION & GENERATOR (Above the fold) */}
      <section className="pt-8 pb-14 bg-gradient-to-b from-indigo-50/50 via-white to-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>100% Free &bull; Private &bull; Client-Side Generation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight">
              Random Name Generator
            </h1>

            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed">
              Generate random names instantly for characters, stories, games, usernames, babies, businesses, and more.
            </p>
          </div>

          {/* Interactive Generator Container */}
          <NameGenerator initialOptions={{ type: 'full', includeSurname: true }} />
        </div>
      </section>

      {/* Responsive Non-intrusive Ad Slot */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AdSlot slotId="home-top" format="horizontal" />
      </div>

      {/* 2. POPULAR NAME GENERATORS GRID */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Popular Name Generators
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Explore our most popular specialized generators tailored to distinct creative genres.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {POPULAR_GENERATORS.map((gen) => {
            const Icon = gen.icon;
            return (
              <Link
                key={gen.slug}
                href={`/${gen.slug}/`}
                className="flex flex-col p-5 rounded-2xl border border-slate-200/90 bg-white hover:border-indigo-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                    {gen.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed flex-1">
                  {gen.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-indigo-600 group-hover:translate-x-0.5 transition-transform">
                  <span>Try Generator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. BROWSE BY CATEGORY */}
      <section className="py-14 bg-slate-100/60 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Browse by Category
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600">
                Explore dedicated generators organized by use case, storytelling genre, and media.
              </p>
            </div>
            <Link
              href="/categories/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORY_GROUPS.slice(0, 6).map((group) => (
              <div
                key={group.id}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {group.name}
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  {group.description}
                </p>
                <ul className="space-y-2 flex-1">
                  {group.items.slice(0, 5).map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={item.slug ? `/${item.slug}/` : '/'}
                        className="flex items-center justify-between py-1.5 px-2.5 rounded-lg text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors"
                      >
                        <span className="truncate">{item.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BROWSE BY COUNTRY / CULTURE */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-3">
            <Globe className="w-3.5 h-3.5 text-indigo-600" />
            <span>Global Heritage</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Browse by Country &amp; Culture
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Generate authentic names honoring linguistic traditions across 20+ countries and civilizations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
          {[
            { name: 'American Names', slug: 'random-full-name-generator', flag: '🇺🇸' },
            { name: 'British Names', slug: 'british-name-generator', flag: '🇬🇧' },
            { name: 'Indian Names', slug: 'indian-name-generator', flag: '🇮🇳' },
            { name: 'Japanese Names', slug: 'japanese-name-generator', flag: '🇯🇵' },
            { name: 'French Names', slug: 'french-name-generator', flag: '🇫🇷' },
            { name: 'German Names', slug: 'german-name-generator', flag: '🇩🇪' },
            { name: 'Spanish Names', slug: 'spanish-name-generator', flag: '🇪🇸' },
            { name: 'Italian Names', slug: 'italian-name-generator', flag: '🇮🇹' },
            { name: 'Scandinavian Names', slug: 'scandinavian-name-generator', flag: '🇸🇪' },
            { name: 'Arabic Names', slug: 'arabic-name-generator', flag: '🇦🇪' },
          ].map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}/`}
              className="flex items-center gap-2.5 p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50/30 transition-all group"
            >
              <span className="text-xl" role="img" aria-label={c.name}>{c.flag}</span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-indigo-600 truncate">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. BROWSE BY STYLE */}
      <section className="py-14 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Browse by Name Style
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Filter by personality archetype, phonetic resonance, and emotional tone.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
            {[
              { label: 'Cool Names', slug: 'cool-names-generator' },
              { label: 'Cute Names', slug: 'cute-names-generator' },
              { label: 'Unique Names', slug: 'unique-names-generator' },
              { label: 'Classic Names', slug: 'classic-names-generator' },
              { label: 'Fantasy Names', slug: 'fantasy-name-generator' },
              { label: 'Warrior Names', slug: 'warrior-name-generator' },
              { label: 'Wizard Names', slug: 'wizard-name-generator' },
              { label: 'Dragon Names', slug: 'dragon-name-generator' },
              { label: 'Medieval Names', slug: 'medieval-name-generator' },
              { label: 'Gamer Names', slug: 'gamer-name-generator' },
              { label: 'Business Brands', slug: 'business-name-generator' },
              { label: 'Startups', slug: 'startup-name-generator' },
            ].map((style) => (
              <Link
                key={style.slug}
                href={`/${style.slug}/`}
                className="px-4 py-2 rounded-full border border-slate-200 bg-slate-50 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 text-xs sm:text-sm font-semibold text-slate-700 transition-colors shadow-sm"
              >
                {style.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. HOW THE RANDOM NAME GENERATOR WORKS */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How the Random Name Generator Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A transparent look at our deterministic, client-side generation engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 font-extrabold text-xl flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Select Your Criteria</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Filter by name type (first, full, last, fantasy, gamer, brand), cultural origin, gender, and desired quantity from 1 up to 100 names.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 font-extrabold text-xl flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Instant Client Algorithm</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our browser engine shuffles verified datasets and combines morphemes procedurally with zero server latency and guaranteed uniqueness per batch.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 text-center flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 font-extrabold text-xl flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Copy, Favorite &amp; Export</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Copy single names with one click, favorite standout candidates into local browser memory, or download full lists as formatted TXT files.
            </p>
          </div>
        </div>
      </section>

      {/* 7. WHY USE A RANDOM NAME GENERATOR */}
      <section className="py-16 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Why Use a Random Name Generator?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Discover how creators, developers, and entrepreneurs break through creative block.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Fiction Writers &amp; Screenwriters</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Overcome writer’s block when populating crowded fantasy realms, noir streets, or historical family sagas with authentic, resonant names.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>D&amp;D Dungeon Masters &amp; Game Devs</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Generate impromptu NPC tavern keepers, guild leaders, and villainous lieutenants on the fly without breaking game immersion.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Gamers &amp; Content Creators</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Find unique, untaken gamertags and streaming aliases for Twitch, YouTube, Discord, Steam, and competitive multiplayer games.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Entrepreneurs &amp; Product Designers</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Brainstorm brandable SaaS app names, agency titles, and boutique shop names with built-in memorability and modern sound architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NAME GENERATION TIPS */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-3 border border-amber-200">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            <span>Creative Strategy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Expert Name Generation Tips
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Practical advice to pick names that stick in memory and elevate your project.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1.5">
              1. Test the Spoken Rhythm
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Always read the full name out loud. Contrast syllable lengths: pairing a short, punchy first name with a three-syllable surname (e.g., Jack Pemberton) often creates the most memorable acoustic cadence.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1.5">
              2. Avoid Visual Roster Clutter
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In fiction or gaming, ensure main characters don’t share initial letters or similar vowel sounds. Having an &ldquo;Alexander&rdquo;, &ldquo;Arthur&rdquo;, and &ldquo;Archie&rdquo; in the same chapter frequently confuses readers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1.5">
              3. Match Meaning to Character Arcs
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every name in our database includes verified etymology. Choosing a name whose root meaning subtly mirrors your protagonist’s hidden virtue or fatal flaw adds elegant narrative depth.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-1.5">
              4. Respect Cultural Roots
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When creating characters belonging to real-world backgrounds, verify that given names and surnames belong to the appropriate historical era and geographic tradition.
            </p>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqAccordion
          items={HOMEPAGE_FAQS}
          title="Frequently Asked Questions"
          description="Everything you need to know about our free random name generation engine."
        />
      </section>

      {/* Bottom Ad Slot */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <AdSlot slotId="home-bottom" format="horizontal" />
      </div>
    </div>
  );
}
