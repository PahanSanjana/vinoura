# Vinoura — Digital Fashion House

A fully responsive luxury-fashion experience for VINOURA, built with React, Vite, Tailwind CSS, and Framer Motion. The site highlights couture collections, storytelling, and interactive contact flows while keeping performance fast for modern browsers.

## Key Features
- **Editorial home experience** with hero, featured couture, and storytelling blocks powered by `Hero`, `FeaturedCouture`, `BrandStory`, and other bespoke components.
- **Curated collections** with interactive filters (`FilterBar`) that toggle seasons, color palettes, silhouettes, and styles on the `CollectionsPage`.
- **Runway highlights** that showcase recent looks with motion-driven transitions via Framer Motion.
- **Rich brand narrative** on the `AboutPage`, including founder spotlight, philosophy, and craftsmanship sections inspired by haute couture.
- **Contact hub** featuring animated form inputs, social touchpoints, and location details that reset state after submission.
- **Consistent layout** through a shared `Header`/`Footer`, reusable cards (`CollectionCard`, `NewArrivals`), and typography system defined in Tailwind.

## Tech Stack
- React 19 + Vite 7 for fast SPA development
- React Router 7 for multi-page navigation (`Home`, `Collections`, `Runway`, `About`, `Contact`)
- Tailwind CSS v4 for utility-first styling with custom color tokens defined in `tailwind.config.js`
- Framer Motion for page-level and component-level animations
- Lucide React icon set for lightweight SVG icons

## Getting Started
```bash
# 1. Install dependencies (Node.js 18+ recommended)
npm install

# 2. Start the Vite dev server with hot reloading
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

## Available Scripts
| Command | Description |
| --- | --- |
| `npm run dev` | Launches the Vite development server with HMR |
| `npm run build` | Creates the optimized production bundle in `dist/` |
| `npm run preview` | Serves the contents of `dist/` for smoke testing |
| `npm run lint` | Runs ESLint across the repo using the shared config |

## Project Structure
```
src/
├── components/        # Reusable UI sections (Hero, Header, FilterBar, etc.)
├── pages/             # Route-level pages (Home, Collections, Runway, About, Contact)
├── assets/            # Brand imagery and logos
├── App.jsx            # Route definitions and layout composition
├── main.jsx           # React entry point
└── App.css / index.css# Tailwind and global style hooks
```
Supporting docs such as `COLOR_PALETTE_SUGGESTIONS.md` and `COMPONENT_STRUCTURE.md` capture design system notes and content strategy.

## Design & Content Notes
- Typography, spacing, and palette tokens live in `tailwind.config.js` to keep visual language consistent.
- Animations rely on Framer Motion’s viewport triggers; ensure components are wrapped with motion primitives when adding new sections.
- The Contact form currently logs submissions to the console—wire this up to your preferred backend or service when ready.

## Roadmap Ideas
- Connect the contact form to an API or services like Resend/Formspree.
- Persist filter selections in the URL for shareable collection views.
- Add CMS integration (e.g., Sanity, Contentful) to manage collections and runway highlights dynamically.
- Integrate analytics to track engagement across hero CTAs and collection cards.

---
Questions, ideas, or feedback? Open an issue or start a discussion so we can continue refining the VINOURA digital experience.
