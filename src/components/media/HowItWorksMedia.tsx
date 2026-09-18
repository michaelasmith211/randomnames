'use client';

import React, { useState } from 'react';
import { Play, Image as ImageIcon, FileText, ChevronDown, ChevronUp, Download, Sparkles } from 'lucide-react';

export function HowItWorksMedia() {
  const [activeTab, setActiveTab] = useState<'video' | 'infographic'>('video');
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <div className="mb-12 bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Tab Switcher Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('video')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'video'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
            aria-pressed={activeTab === 'video'}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Watch Video Walkthrough</span>
            <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
              activeTab === 'video' ? 'bg-indigo-700 text-indigo-100' : 'bg-slate-100 text-slate-600'
            }`}>
              0:44
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('infographic')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'infographic'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
            aria-pressed={activeTab === 'infographic'}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>View Infographic Guide</span>
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <span className="hidden sm:inline-flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-indigo-500" />
            1080p HD • With Closed Captions
          </span>
        </div>
      </div>

      {/* Tab 1: Video Player */}
      {activeTab === 'video' && (
        <div>
          <div className="relative aspect-[16/9] w-full bg-slate-950 overflow-hidden">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/images/how-it-works-video-poster.jpg"
              className="w-full h-full object-contain"
              aria-label="How the Random Name Generator Works Video Guide"
            >
              <source src="/videos/how-random-name-generator-works.mp4" type="video/mp4" />
              <track
                src="/videos/how-it-works.vtt"
                kind="subtitles"
                srcLang="en"
                label="English"
                default
              />
              Your browser does not support HTML5 video.
            </video>
          </div>

          <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="font-medium">
              Figure 1: <strong>How Random Name Generator Works Video Guide</strong> &mdash; 3-step walkthrough showing preference filters, procedural synthesis, and 1-click export.
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setShowTranscript(!showTranscript)}
                className="inline-flex items-center gap-1.5 font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                aria-expanded={showTranscript}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{showTranscript ? 'Hide Transcript' : 'View Transcript'}</span>
                {showTranscript ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
              <a
                href="/videos/how-random-name-generator-works.mp4"
                download="how-random-name-generator-works.mp4"
                className="inline-flex items-center gap-1 font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                title="Download MP4 Video"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download MP4</span>
              </a>
            </div>
          </div>

          {/* Expandable SEO Video Transcript */}
          {showTranscript && (
            <div className="px-6 py-5 bg-white border-t border-slate-200 animate-in fade-in duration-200">
              <div className="max-w-3xl mx-auto space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h4 className="font-bold text-slate-900 text-sm">Full Video Transcript &amp; Timestamps</h4>
                  <span className="text-xs text-slate-400 font-mono">Duration: 0:44</span>
                </div>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="font-mono text-indigo-600 font-bold shrink-0 text-xs mt-0.5">00:00</span>
                    <p>
                      <strong>Introduction:</strong> Welcome to Random Name Generator dot dev &mdash; the fast, privacy-first platform for instant procedural name generation.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="font-mono text-indigo-600 font-bold shrink-0 text-xs mt-0.5">00:05</span>
                    <p>
                      <strong>Step 1 (Choose Preferences):</strong> Select your preferences. Choose full names, first names, fantasy, or gamer handles, and filter by gender, cultural origin from over 20 countries, style, and batch quantity.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="font-mono text-indigo-600 font-bold shrink-0 text-xs mt-0.5">00:11</span>
                    <p>
                      <strong>Step 2 (Procedural Generation):</strong> Instant procedural synthesis. Our client-side algorithm pairs over 1,200 verified names with authentic surnames and meanings in milliseconds with zero server latency.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="font-mono text-indigo-600 font-bold shrink-0 text-xs mt-0.5">00:17</span>
                    <p>
                      <strong>Step 3 (Copy &amp; Export):</strong> Copy and export. Copy individual names with one click, save your favorites to local storage, or download the full roster as a formatted text file.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <span className="font-mono text-indigo-600 font-bold shrink-0 text-xs mt-0.5">00:22</span>
                    <p>
                      <strong>Outro:</strong> Explore over 50 specialized generators today at Random Name Generator dot dev &mdash; 100% free, private, and royalty-free for commercial use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Infographic Guide */}
      {activeTab === 'infographic' && (
        <figure className="group">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
            <picture>
              <source srcSet="/images/how-random-name-generator-works.avif" type="image/avif" />
              <img
                src="/images/how-random-name-generator-works.jpg"
                alt="How the Random Name Generator works - Step by step visual guide to generating random names with customizable filters, procedural generation, and instant export"
                width={1376}
                height={768}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </picture>
          </div>
          <figcaption className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 text-center text-xs text-slate-600 font-medium">
            Figure 2: <strong>How the Random Name Generator works Infographic</strong> &mdash; 3-step visual workflow illustrating preference filtering, client-side procedural generation, and instant export.
          </figcaption>
        </figure>
      )}
    </div>
  );
}
