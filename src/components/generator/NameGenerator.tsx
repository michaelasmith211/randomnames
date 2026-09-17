'use client';

import React, { useState, useEffect, useTransition } from 'react';
import {
  Sparkles,
  Copy,
  Check,
  Heart,
  Download,
  Share2,
  RefreshCw,
  History,
  X,
  Info,
} from 'lucide-react';
import { GeneratorOptions, GeneratedName } from '@/data/names/types';
import { generateNames } from '@/lib/generator-engine';
import {
  getSavedFavorites,
  toggleFavorite,
  saveGenerationToHistory,
  getGenerationHistory,
  HistoryEntry,
} from '@/lib/storage';
import { copyToClipboard, downloadAsTxt, shareContent } from '@/lib/export';
import { GeneratorControls } from './GeneratorControls';
import { FavoritesModal } from './FavoritesModal';
import { HistoryDrawer } from './HistoryDrawer';
import { Toast, ToastMessage } from '../ui/Toast';

interface NameGeneratorProps {
  initialOptions?: Partial<GeneratorOptions>;
  title?: string;
  subtitle?: string;
}

export function NameGenerator({
  initialOptions = {},
  title = 'Generate Random Names',
  subtitle = 'Customize your options below and click Generate to produce instant, creative names.',
}: NameGeneratorProps) {
  const defaultType = initialOptions.type || 'full';
  const defaultIncludeSurname =
    initialOptions.includeSurname !== undefined
      ? initialOptions.includeSurname
      : defaultType === 'first'
      ? false
      : true;

  const [options, setOptions] = useState<GeneratorOptions>({
    type: defaultType,
    gender: initialOptions.gender || 'any',
    origin: initialOptions.origin || 'any',
    style: initialOptions.style || 'any',
    count: initialOptions.count || 10,
    subCategory: initialOptions.subCategory || 'none',
    includeSurname: defaultIncludeSurname,
    customSurname: initialOptions.customSurname || '',
    ...initialOptions,
  });

  const [results, setResults] = useState<GeneratedName[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favoriteNames, setFavoriteNames] = useState<Set<string>>(new Set());
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const [isPending, startTransition] = useTransition();

  const showToast = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = `${Date.now()}`;
    setToast({ id, message, type });
    setTimeout(() => {
      setToast((current) => (current?.id === id ? null : current));
    }, 2800);
  };

  // Sync favorites & history from localStorage on mount
  useEffect(() => {
    const syncData = () => {
      const saved = getSavedFavorites();
      setFavoriteNames(new Set(saved.map((f) => f.name)));
      setHistory(getGenerationHistory());
    };
    syncData();

    // Initial run on mount
    runGeneration(options, false);

    window.addEventListener('favorites-updated', syncData);
    return () => {
      window.removeEventListener('favorites-updated', syncData);
    };
  }, []);

  const runGeneration = (currentOpts = options, saveHistory = true) => {
    startTransition(() => {
      const generated = generateNames(currentOpts);
      setResults(generated);

      if (saveHistory && generated.length > 0) {
        const label = `${currentOpts.type.toUpperCase()} (${generated.length})`;
        saveGenerationToHistory(label, generated);
        setHistory(getGenerationHistory());
      }
    });
  };

  const handleCopySingle = async (item: GeneratedName) => {
    await copyToClipboard(item.name);
    setCopiedId(item.id);
    showToast(`Copied "${item.name}"`);
    setTimeout(() => {
      setCopiedId((curr) => (curr === item.id ? null : curr));
    }, 2000);
  };

  const handleCopyAll = async () => {
    if (!results.length) return;
    const allText = results.map((r) => r.name).join('\n');
    await copyToClipboard(allText);
    showToast(`Copied all ${results.length} names to clipboard!`);
  };

  const handleToggleFav = (item: GeneratedName) => {
    const { isFavorite } = toggleFavorite(item);
    setFavoriteNames((prev) => {
      const next = new Set(prev);
      if (isFavorite) {
        next.add(item.name);
        showToast(`Saved "${item.name}" to favorites`);
      } else {
        next.delete(item.name);
        showToast(`Removed "${item.name}" from favorites`, 'info');
      }
      return next;
    });
  };

  const handleRemoveSingle = (nameToRemove: string) => {
    setResults((prev) => prev.filter((r) => r.name !== nameToRemove));
  };

  const handleDownload = () => {
    if (!results.length) return;
    const filename = `${options.type}-names-${results.length}.txt`;
    downloadAsTxt(results, filename);
    showToast(`Downloaded ${results.length} names as TXT`);
  };

  const handleShare = async () => {
    if (!results.length) return;
    const sampleNames = results.slice(0, 5).map((r) => r.name).join(', ');
    const shared = await shareContent({
      title: 'Random Name Generator Results',
      text: `Generated names: ${sampleNames}... check them out!`,
      url: typeof window !== 'undefined' ? window.location.href : 'https://randomnamegenerator.dev',
    });
    if (shared) {
      showToast('Shared successfully!');
    } else {
      showToast('Link copied to clipboard!');
    }
  };

  return (
    <div id="generator" className="w-full scroll-mt-20">
      {/* Generator Form Container */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 px-1">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>{title}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">{subtitle}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsHistoryOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 hover:bg-white rounded-xl border border-slate-200 transition-colors"
              title="View past generation history"
            >
              <History className="w-3.5 h-3.5" />
              <span>History</span>
            </button>
            <button
              type="button"
              onClick={() => setIsFavoritesOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl border border-rose-200 transition-colors"
              title="View saved favorites"
            >
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
              <span>Saved ({favoriteNames.size})</span>
            </button>
          </div>
        </div>

        {/* Generator Controls */}
        <GeneratorControls
          options={options}
          onChange={setOptions}
          onGenerate={() => runGeneration(options, true)}
          isLoading={isPending}
        />
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-slate-200">
        {/* Results Header Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 text-lg sm:text-xl">
              Generated Results
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700">
              {results.length} Names
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => runGeneration(options, true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 transition-colors"
              title="Generate new names with current settings"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Generate Again</span>
            </button>

            <button
              type="button"
              onClick={handleCopyAll}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              title="Copy all generated names to clipboard"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy All</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              title="Download results as plain text"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download TXT</span>
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              title="Share these results"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="pt-6">
          {results.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <Sparkles className="w-10 h-10 mx-auto text-slate-300 mb-2" />
              <p className="text-base font-medium text-slate-700">Ready to generate!</p>
              <p className="text-xs text-slate-500 mt-1">
                Click the &ldquo;Generate Names&rdquo; button above to create fresh names.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {results.map((item) => {
                const isFav = favoriteNames.has(item.name);
                const isCopied = copiedId === item.id;

                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-4 rounded-2xl border border-slate-200/90 bg-slate-50/40 hover:bg-white hover:border-indigo-300 transition-all group"
                  >
                    <div className="flex-1 pr-3 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <span className="font-bold text-slate-900 text-base sm:text-lg tracking-tight truncate">
                          {item.name}
                        </span>
                      </div>

                      {/* Details / Meaning */}
                      {(item.meaning || item.origin || item.gender) && (
                        <div className="flex flex-wrap items-center gap-1.5 mt-1 text-xs">
                          {item.gender && (
                            <span className="px-1.5 py-0.5 rounded bg-slate-200/70 text-[10px] font-semibold text-slate-600 uppercase tracking-wider">
                              {item.gender}
                            </span>
                          )}
                          {item.origin && (
                            <span className="px-1.5 py-0.5 rounded bg-indigo-50 text-[10px] font-semibold text-indigo-700">
                              {item.origin}
                            </span>
                          )}
                          {item.meaning && (
                            <span className="text-slate-500 truncate italic text-[11px]">
                              &ldquo;{item.meaning}&rdquo;
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1 shrink-0">
                      {/* Copy */}
                      <button
                        type="button"
                        onClick={() => handleCopySingle(item)}
                        className={`p-2 rounded-xl transition-all ${
                          isCopied
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'text-slate-500 hover:text-indigo-600 hover:bg-indigo-50'
                        }`}
                        aria-label={`Copy ${item.name}`}
                        title={isCopied ? 'Copied!' : 'Copy to clipboard'}
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      {/* Favorite */}
                      <button
                        type="button"
                        onClick={() => handleToggleFav(item)}
                        className={`p-2 rounded-xl transition-all ${
                          isFav
                            ? 'text-rose-600 bg-rose-50'
                            : 'text-slate-400 hover:text-rose-600 hover:bg-rose-50'
                        }`}
                        aria-label={isFav ? `Remove ${item.name} from favorites` : `Favorite ${item.name}`}
                        title={isFav ? 'Saved in favorites' : 'Save to favorites'}
                      >
                        <Heart
                          className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`}
                        />
                      </button>

                      {/* Remove single */}
                      <button
                        type="button"
                        onClick={() => handleRemoveSingle(item.name)}
                        className="p-2 rounded-xl text-slate-300 hover:text-slate-600 hover:bg-slate-100 transition-all opacity-0 group-hover:opacity-100"
                        aria-label={`Dismiss ${item.name}`}
                        title="Remove from current list"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Favorites Modal */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={getSavedFavorites()}
        onUpdate={() => {
          const updated = getSavedFavorites();
          setFavoriteNames(new Set(updated.map((f) => f.name)));
        }}
        onToast={showToast}
      />

      {/* History Drawer */}
      <HistoryDrawer
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onRestore={(names) => setResults(names)}
        onClear={() => setHistory([])}
        onToast={showToast}
      />

      {/* Toast Feedback */}
      <Toast toast={toast} />
    </div>
  );
}
