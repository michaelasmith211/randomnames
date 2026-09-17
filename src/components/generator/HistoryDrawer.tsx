'use client';

import React, { useEffect } from 'react';
import { X, History, RotateCcw, Trash2 } from 'lucide-react';
import { HistoryEntry, clearHistory } from '@/lib/storage';
import { GeneratedName } from '@/data/names/types';

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryEntry[];
  onRestore: (names: GeneratedName[]) => void;
  onClear: () => void;
  onToast: (msg: string) => void;
}

export function HistoryDrawer({
  isOpen,
  onClose,
  history,
  onRestore,
  onClear,
  onToast,
}: HistoryDrawerProps) {
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

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="history-title"
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full bg-white shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
              <History className="w-4 h-4" />
            </div>
            <div>
              <h2 id="history-title" className="text-base font-bold text-slate-900">
                Recent Generations
              </h2>
              <p className="text-[11px] text-slate-500">
                Last {history.length} batches stored in browser
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action bar */}
        {history.length > 0 && (
          <div className="px-6 py-2.5 border-b border-slate-100 bg-white flex justify-end">
            <button
              type="button"
              onClick={() => {
                clearHistory();
                onClear();
                onToast('Cleared generation history');
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-rose-600 transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear History</span>
            </button>
          </div>
        )}

        {/* History items */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {history.length === 0 ? (
            <div className="py-16 text-center text-slate-500">
              <History className="w-10 h-10 mx-auto stroke-1 text-slate-400 mb-2" />
              <p className="text-sm font-medium text-slate-800">No generation history yet</p>
              <p className="text-xs text-slate-600 mt-1">
                Generations will appear here so you can easily restore previous runs.
              </p>
            </div>
          ) : (
            history.map((entry) => {
              const timeString = new Date(entry.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              });

              return (
                <div
                  key={entry.id}
                  className="p-4 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-indigo-200 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-700 truncate max-w-[200px]">
                      {entry.label}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">{timeString}</span>
                  </div>

                  <p className="text-xs text-slate-500 mb-3 truncate">
                    {entry.names.map((n) => n.name).slice(0, 4).join(', ')}
                    {entry.names.length > 4 && ` +${entry.names.length - 4} more`}
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      onRestore(entry.names);
                      onToast(`Restored ${entry.names.length} names from history`);
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors w-full justify-center"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Restore This Batch ({entry.names.length} names)</span>
                  </button>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
