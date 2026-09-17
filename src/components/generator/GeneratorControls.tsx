'use client';

import React from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';
import { GeneratorOptions, NameType, Gender, Origin, Style, SubCategory } from '@/data/names/types';

interface GeneratorControlsProps {
  options: GeneratorOptions;
  onChange: (newOptions: GeneratorOptions) => void;
  onGenerate: () => void;
  isLoading?: boolean;
}

export function GeneratorControls({
  options,
  onChange,
  onGenerate,
  isLoading = false,
}: GeneratorControlsProps) {
  const updateField = <K extends keyof GeneratorOptions>(field: K, value: GeneratorOptions[K]) => {
    if (field === 'type') {
      const newType = value as NameType;
      onChange({
        ...options,
        type: newType,
        includeSurname: newType === 'full' ? true : (newType === 'first' ? false : options.includeSurname),
      });
      return;
    }
    onChange({ ...options, [field]: value });
  };

  const isFantasy = options.type === 'fantasy' || (options.type === 'character' && Boolean(options.subCategory && options.subCategory !== 'none'));
  const isUsername = options.type === 'username';
  const isBusiness = options.type === 'business';

  return (
    <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-4">
        {/* 1. Name Type */}
        <div>
          <label htmlFor="name-type-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Name Type
          </label>
          <div className="relative">
            <select
              id="name-type-select"
              value={options.type}
              onChange={(e) => updateField('type', e.target.value as NameType)}
              className="w-full appearance-none bg-slate-50 border border-slate-300 hover:border-indigo-500 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:bg-white transition-colors cursor-pointer"
            >
              <option value="full">Full Names (First + Last)</option>
              <option value="first">First Names</option>
              <option value="last">Last Names (Surnames)</option>
              <option value="character">Character Names</option>
              <option value="fantasy">Fantasy Names</option>
              <option value="username">Usernames / Gamer</option>
              <option value="business">Business / Brand</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* 2. Dynamic Second Selector: Gender OR SubCategory */}
        {isFantasy ? (
          <div>
            <label htmlFor="fantasy-race-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Race / Class
            </label>
            <div className="relative">
              <select
                id="fantasy-race-select"
                value={options.subCategory || 'elf'}
                onChange={(e) => updateField('subCategory', e.target.value as SubCategory)}
                className="w-full appearance-none bg-slate-50 border border-slate-300 hover:border-indigo-500 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:bg-white transition-colors cursor-pointer"
              >
                <option value="elf">Elf Names</option>
                <option value="wizard">Wizard / Mage</option>
                <option value="warrior">Warrior / Knight</option>
                <option value="dragon">Dragon Names</option>
                <option value="pirate">Pirate Names</option>
                <option value="superhero">Superhero Names</option>
                <option value="villain">Villain Names</option>
                <option value="medieval">Medieval Names</option>
                <option value="vampire">Vampire Names</option>
                <option value="fairy">Fairy / Pixie</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>
        ) : isUsername ? (
          <div>
            <label htmlFor="username-style-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Style / Platform
            </label>
            <div className="relative">
              <select
                id="username-style-select"
                value={options.subCategory || 'gamer'}
                onChange={(e) => updateField('subCategory', e.target.value as SubCategory)}
                className="w-full appearance-none bg-slate-50 border border-slate-300 hover:border-indigo-500 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:bg-white transition-colors cursor-pointer"
              >
                <option value="gamer">Gamer / Esports</option>
                <option value="minecraft">Minecraft IGNs</option>
                <option value="aesthetic">Aesthetic / Social</option>
                <option value="tech">Tech / Developer</option>
                <option value="random">Catchy / Random</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>
        ) : isBusiness ? (
          <div>
            <label htmlFor="business-industry-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Industry
            </label>
            <div className="relative">
              <select
                id="business-industry-select"
                value={options.subCategory || 'startup'}
                onChange={(e) => updateField('subCategory', e.target.value as SubCategory)}
                className="w-full appearance-none bg-slate-50 border border-slate-300 hover:border-indigo-500 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:bg-white transition-colors cursor-pointer"
              >
                <option value="startup">Tech & SaaS Startup</option>
                <option value="company">Corporate & Holdings</option>
                <option value="brand">Creative Studio & Agency</option>
                <option value="shop">Retail Shop & Boutique</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>
        ) : (
          <div>
            <label htmlFor="gender-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Gender
            </label>
            <div className="relative">
              <select
                id="gender-select"
                value={options.gender}
                onChange={(e) => updateField('gender', e.target.value as Gender)}
                className="w-full appearance-none bg-slate-50 border border-slate-300 hover:border-indigo-500 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:bg-white transition-colors cursor-pointer"
              >
                <option value="any">Any Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="neutral">Gender-Neutral</option>
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
            </div>
          </div>
        )}

        {/* 3. Country / Origin */}
        <div>
          <label htmlFor="origin-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Country / Origin
          </label>
          <div className="relative">
            <select
              id="origin-select"
              value={options.origin}
              onChange={(e) => updateField('origin', e.target.value as Origin)}
              disabled={Boolean(isFantasy || isUsername || isBusiness)}
              className="w-full appearance-none bg-slate-50 border border-slate-300 hover:border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:bg-white transition-colors cursor-pointer"
            >
              <option value="any">Any Country</option>
              <option value="american">American</option>
              <option value="british">British</option>
              <option value="indian">Indian</option>
              <option value="irish">Irish</option>
              <option value="scottish">Scottish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="spanish">Spanish</option>
              <option value="italian">Italian</option>
              <option value="japanese">Japanese</option>
              <option value="chinese">Chinese</option>
              <option value="korean">Korean</option>
              <option value="arabic">Arabic</option>
              <option value="turkish">Turkish</option>
              <option value="russian">Russian</option>
              <option value="scandinavian">Scandinavian</option>
              <option value="african">African</option>
              <option value="greek">Greek</option>
              <option value="latin">Latin / Roman</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* 4. Name Style */}
        <div>
          <label htmlFor="style-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Name Style
          </label>
          <div className="relative">
            <select
              id="style-select"
              value={options.style}
              onChange={(e) => updateField('style', e.target.value as Style)}
              disabled={Boolean(isFantasy || isUsername || isBusiness)}
              className="w-full appearance-none bg-slate-50 border border-slate-300 hover:border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:bg-white transition-colors cursor-pointer"
            >
              <option value="any">Any Style</option>
              <option value="cool">Cool / Sleek</option>
              <option value="cute">Cute / Sweet</option>
              <option value="unique">Unique / Rare</option>
              <option value="classic">Classic / Traditional</option>
              <option value="modern">Modern / Trendy</option>
              <option value="vintage">Vintage / Retro</option>
              <option value="strong">Strong / Powerful</option>
              <option value="nature">Nature / Botanical</option>
              <option value="royal">Royal / Noble</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>

        {/* 5. Number of Names */}
        <div>
          <label htmlFor="count-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Quantity
          </label>
          <div className="relative">
            <select
              id="count-select"
              value={options.count}
              onChange={(e) => updateField('count', Number(e.target.value))}
              className="w-full appearance-none bg-slate-50 border border-slate-300 hover:border-indigo-500 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 focus:bg-white transition-colors cursor-pointer"
            >
              <option value="1">1 Name</option>
              <option value="5">5 Names</option>
              <option value="10">10 Names</option>
              <option value="20">20 Names</option>
              <option value="50">50 Names</option>
              <option value="100">100 Names</option>
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3.5 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Optional Surname Options & Custom Surname */}
      {(!isFantasy && !isUsername && !isBusiness && options.type !== 'last') && (
        <div className="mb-4 pt-3 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <label className="inline-flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700 select-none">
            <input
              type="checkbox"
              id="include-surname-checkbox"
              checked={options.type === 'full' || Boolean(options.includeSurname)}
              onChange={(e) => {
                const checked = e.target.checked;
                onChange({
                  ...options,
                  type: checked ? 'full' : 'first',
                  includeSurname: checked,
                });
              }}
              className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer accent-indigo-600"
            />
            <span>Include Surname (Show First + Last Name)</span>
          </label>

          {(options.type === 'full' || options.includeSurname) && (
            <div className="flex items-center gap-2 flex-1 md:max-w-md">
              <label htmlFor="custom-surname-input" className="text-xs font-medium text-slate-500 whitespace-nowrap">
                Custom Surname:
              </label>
              <input
                id="custom-surname-input"
                type="text"
                value={options.customSurname || ''}
                onChange={(e) => updateField('customSurname', e.target.value)}
                placeholder="Auto-match origin or type custom..."
                className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          )}
        </div>
      )}

      {/* Big Generate Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onGenerate}
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-bold text-base shadow-md shadow-indigo-200 transition-all focus-visible:ring-4 focus-visible:ring-indigo-300"
        >
          <Sparkles className="w-5 h-5 text-indigo-200 animate-pulse" />
          <span>Generate Names</span>
        </button>
      </div>
    </div>
  );
}
