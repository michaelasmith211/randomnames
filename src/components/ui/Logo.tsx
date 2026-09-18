import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  showText?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

export function Logo({
  size = 'md',
  theme = 'light',
  showText = true,
  showSubtitle = true,
  className = '',
}: LogoProps) {
  const iconDimensions = {
    sm: { width: 32, height: 32, rounded: 'rounded-lg' },
    md: { width: 40, height: 40, rounded: 'rounded-xl' },
    lg: { width: 52, height: 52, rounded: 'rounded-2xl' },
  }[size];

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  }[size];

  const subSizes = {
    sm: 'text-[10px]',
    md: 'text-[11px]',
    lg: 'text-xs',
  }[size];

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Modern App Icon Badge */}
      <div
        className={`relative shrink-0 ${iconDimensions.rounded} overflow-hidden shadow-sm shadow-indigo-500/20 group-hover:scale-105 group-hover:shadow-indigo-500/30 transition-all duration-300 ring-1 ring-black/5 dark:ring-white/10`}
        style={{ width: iconDimensions.width, height: iconDimensions.height }}
      >
        <img
          src="/icon-192x192.png"
          alt="Random Name Generator Logo"
          width={iconDimensions.width}
          height={iconDimensions.height}
          className="w-full h-full object-cover select-none"
        />
      </div>

      {/* Modern Typography Brand Lockup */}
      {showText && (
        <div className="flex flex-col justify-center">
          <div className={`font-extrabold ${titleSizes} tracking-tight leading-none flex items-center gap-1`}>
            <span className={theme === 'light' ? 'text-slate-900' : 'text-white'}>
              Random Name
            </span>
            <span
              className={
                theme === 'light'
                  ? 'bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent'
              }
            >
              Generator
            </span>
          </div>

          {showSubtitle && (
            <div className={`flex items-center gap-1.5 ${subSizes} font-medium tracking-wide mt-1`}>
              <span className={theme === 'light' ? 'text-slate-500' : 'text-slate-400'}>
                randomnamegenerator.dev
              </span>
              <span
                className={`inline-flex items-center px-1.5 py-0.2 rounded-full font-semibold uppercase tracking-wider text-[9px] ${
                  theme === 'light'
                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                    : 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/60'
                }`}
              >
                AI &amp; Procedural
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
