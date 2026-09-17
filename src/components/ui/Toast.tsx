'use client';

import React from 'react';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type?: 'success' | 'info' | 'error';
  message: string;
}

interface ToastProps {
  toast: ToastMessage | null;
}

export function Toast({ toast }: ToastProps) {
  if (!toast) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 text-white shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-5 duration-200"
    >
      {toast.type === 'error' ? (
        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
      ) : toast.type === 'info' ? (
        <Info className="w-4 h-4 text-sky-400 shrink-0" />
      ) : (
        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
      )}
      <span className="text-sm font-medium">{toast.message}</span>
    </div>
  );
}
