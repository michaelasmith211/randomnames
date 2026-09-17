'use client';

import React, { useEffect } from 'react';
import { X, Trash2, Copy, Download, Heart } from 'lucide-react';
import { GeneratedName } from '@/data/names/types';
import { removeFavorite, clearAllFavorites } from '@/lib/storage';
import { copyToClipboard, downloadAsTxt } from '@/lib/export';

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: GeneratedName[];
  onUpdate: () => void;
  onToast: (msg: string) => void;
}

export function FavoritesModal({
  isOpen,
  onClose,
  favorites,
  onUpdate,
  onToast,
}: FavoritesModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyAll = async () => {
    if (!favorites.length) return;
    const text = favorites.map((f) => f.name).join('\n');
    await copyToClipboard(text);
    onToast(`Copied ${favorites.length} saved names to clipboard!`);
  };

  const handleDownload = () => {
    if (!favorites.length) return;
    downloadAsTxt(favorites, 'my-favorite-names.txt');
    onToast('Downloaded favorite names as TXT');
  };

  const handleRemove = (nameString: string) => {
    removeFavorite(nameString);
    onUpdate();
    onToast(`Removed "${nameString}" from favorites`);
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to remove all saved favorites?')) {
      clearAllFavorites();
      onUpdate();
      onToast('Cleared all saved favorites');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="fav-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
            </div>
            <div>
              <h2 id="fav-modal-title" className="text-lg font-bold text-slate-900">
                Saved Favorites
              </h2>
              <p className="text-xs text-slate-500">
                {favorites.length} {favorites.length === 1 ? 'name' : 'names'} saved in local browser storage
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Toolbar */}
        {favorites.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-2 px-6 py-3 border-b border-slate-100 bg-white">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyAll}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy All</span>
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download TXT</span>
              </button>
            </div>
            <button
              type="button"
              onClick={handleClearAll}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg text-rose-600 hover:bg-rose-50 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear All</span>
            </button>
          </div>
        )}

        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-2.5">
          {favorites.length === 0 ? (
            <div className="py-12 text-center text-slate-500">
              <Heart className="w-12 h-12 mx-auto stroke-1 text-slate-400 mb-3" />
              <p className="text-base font-medium text-slate-800">No favorite names saved yet</p>
              <p className="text-xs text-slate-600 mt-1">
                Click the heart icon on any generated name to save it for quick reference!
              </p>
            </div>
          ) : (
            favorites.map((fav) => (
              <div
                key={fav.name}
                className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-slate-300 bg-slate-50/50 hover:bg-white transition-all group"
              >
                <div>
                  <div className="font-semibold text-slate-900 text-base">{fav.name}</div>
                  {(fav.origin || fav.meaning) && (
                    <div className="text-xs text-slate-500 mt-0.5 flex flex-wrap items-center gap-2">
                      {fav.origin && (
                        <span className="inline-block px-2 py-0.5 bg-slate-200/60 rounded text-[11px] font-medium text-slate-600">
                          {fav.origin}
                        </span>
                      )}
                      {fav.meaning && (
                        <span className="italic text-slate-500">&ldquo;{fav.meaning}&rdquo;</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={async () => {
                      await copyToClipboard(fav.name);
                      onToast(`Copied "${fav.name}" to clipboard`);
                    }}
                    className="p-2 rounded-lg text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
                    aria-label={`Copy ${fav.name}`}
                    title="Copy Name"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleRemove(fav.name)}
                    className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                    aria-label={`Remove ${fav.name}`}
                    title="Remove from favorites"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
