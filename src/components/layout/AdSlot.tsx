import React from 'react';

interface AdSlotProps {
  slotId?: string;
  format?: 'horizontal' | 'rectangle';
  className?: string;
}

export function AdSlot({ slotId = 'default', format = 'horizontal', className = '' }: AdSlotProps) {
  return (
    <aside
      aria-label="Sponsor Area"
      className={`my-8 mx-auto w-full flex flex-col items-center justify-center ${className}`}
    >
      <div className="text-[10px] tracking-wider uppercase font-bold text-slate-600 mb-1.5">
        Advertisement
      </div>
      <div
        className={`w-full bg-slate-100 border border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-700 font-medium text-xs transition-colors ${
          format === 'horizontal' ? 'min-h-[90px] max-w-4xl' : 'min-h-[250px] max-w-sm'
        }`}
      >
        <span>Responsive Sponsor Placeholder ({slotId})</span>
      </div>
    </aside>
  );
}
