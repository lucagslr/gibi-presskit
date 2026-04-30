# GIBI — I SHINE BETTER AT NIGHT | Press Kit

Premium web press kit for GIBI's first solo project "I SHINE BETTER AT NIGHT".

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navigation
│   │   └── LanguageSwitcher.tsx # FR/EN toggle
│   ├── presskit/
│   │   ├── HeroSection.tsx    # Landing section
│   │   ├── ProjectSection.tsx  # Project description
│   │   ├── BioTracklistSection.tsx # Bio + tracks
│   │   ├── ContactSection.tsx  # Contact info
│   │   └── TrackCard.tsx       # Individual track card
│   └── ui/
│       ├── Badge.tsx           # Colored tags
│       ├── SectionTitle.tsx    # Section headers
│       └── ScrollIndicator.tsx # Scroll hint
├── i18n/
│   ├── index.ts                # i18next config
│   └── locales/
│       ├── fr.json             # French translations
│       └── en.json             # English translations
├── styles/
│   └── globals.css             # Global styles + Tailwind
├── App.tsx                     # Main app component
└── main.tsx                    # Entry point
```

## 🎨 Design System

### Colors (Night Theme)
- **Background**: Deep night blue (#050508, #0a0a0f, #12121a)
- **Text**: Chrome grays (#f4f4f5 to #71717a)
- **Accents**: Neon amber (#f59e0b), Cyan (#06b6d4), Violet (#8b5cf6), Pink (#ec4899)

### Typography
- **Display**: Syne (bold, impactful headings)
- **Body**: Outfit (clean, readable text)

### Animations
- Framer Motion for smooth transitions
- Scroll-triggered reveals
- Hover effects on cards and buttons
- Progress bar indicator

## 🌐 Internationalization

Switch between French (FR) and English (EN) using the language toggle in the navigation.

All content is translatable in `src/i18n/locales/`.

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Reduced motion support

## 🛠️ Tech Stack

- **React 18** + Vite
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **i18next** (internationalization)
- **Lucide React** (icons)
- **clsx** (class management)

## 📄 License

All rights reserved — GIBI 2026