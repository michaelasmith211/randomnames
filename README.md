# Random Name Generator (randomnamegenerator.dev)

A modern, ultra-fast, SEO-optimized Random Name Generation platform designed to rank organically for **"random name generator"** and hundreds of related high-intent keywords. Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Key Highlights

- **100% Client-Side & Private**: Runs directly in the user's browser with zero database dependencies and zero telemetry. Names and queries are never sent to a server.
- **Ultra Fast Performance**: Statically generated (SSG) with an overall initial JavaScript footprint of only ~87 kB. Statically pre-rendered routes (64 static pages).
- **Comprehensive Dataset & Procedural Engines**:
  - Authentic first and last names across 20+ countries and cultures with verified etymology.
  - Procedural fantasy engine with syllabic morpheme synthesis and epithets (elves, wizards, dragons, warriors, villains, pirates, etc.).
  - Gamer and username engine for competitive multiplayer and social platforms.
  - Modern startup and corporate brand engine.
  - Strict deduplication guaranteeing 100% unique names per batch.
- **Local Persistence**:
  - Saved Favorites managed locally via browser `localStorage` (copy all, download TXT, remove one, clear all).
  - Generation History retaining the last 10 batches for one-click restoration.
- **Complete SEO Architecture**:
  - 40+ dedicated high-value SEO generator pages (`/fantasy-name-generator/`, `/japanese-name-generator/`, `/username-generator/`, etc.).
  - Automated `sitemap.xml` and `robots.txt`.
  - JSON-LD structured data (`WebSite`, `WebApplication`, `BreadcrumbList`, `FAQPage`).
  - Dynamic Open Graph social preview cards (`/opengraph-image`).
  - Clean URLs with trailing slash consistency and canonical tags.
  - Non-intrusive ad placeholder slots ready for monetization.

## Project Structure

```
random-name-generator/
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout with fonts, JSON-LD, Header & Footer
│   │   ├── page.tsx                  # Primary SEO homepage
│   │   ├── [slug]/page.tsx           # Dedicated generator landing pages
│   │   ├── categories/page.tsx       # Master categories directory
│   │   ├── about/page.tsx            # About page
│   │   ├── how-it-works/page.tsx     # Technical explanation of algorithms
│   │   ├── faq/page.tsx              # Central FAQ directory
│   │   ├── contact/page.tsx          # Accessible feedback & contact form
│   │   ├── privacy/page.tsx          # Privacy policy (100% client-side guarantee)
│   │   ├── terms/page.tsx            # Terms of service & commercial rights
│   │   ├── sitemap.ts                # Dynamic XML sitemap
│   │   ├── robots.ts                 # Robots directives
│   │   └── opengraph-image.tsx       # Edge-rendered social OG preview card
│   ├── components/
│   │   ├── layout/                   # Header, Footer, Breadcrumbs, AdSlot
│   │   ├── generator/                # NameGenerator, GeneratorControls, FavoritesModal, HistoryDrawer
│   │   ├── seo/                      # JsonLd, FaqAccordion
│   │   └── ui/                       # Toast notification
│   ├── data/
│   │   ├── names/                    # firstNames, surnames, fantasy, usernames, business
│   │   └── pages/                    # generatorPages, categories
│   ├── lib/
│   │   ├── generator-engine.ts       # Core generation & procedural engine
│   │   ├── storage.ts                # Safe localStorage manager
│   │   ├── export.ts                 # TXT export & Web Share API
│   │   └── metadata.ts               # Metadata & Open Graph constructor
│   └── styles/
│       └── globals.css               # Tailwind CSS & accessible focus utilities
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm run start
```

## Vercel Deployment

This project is configured for zero-config deployment on Vercel:
1. Push this repository to GitHub/GitLab.
2. Import the project into Vercel.
3. Framework preset: **Next.js**.
4. Deploy!
