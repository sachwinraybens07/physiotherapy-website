# HealingMotion Physiotherapy Website

A production-ready Next.js 15 website for a physiotherapy and rehabilitation centre.

## Features

- Next.js 15 App Router with TypeScript
- Tailwind CSS responsive mobile-first layout
- Sticky navigation and dark/light mode toggle
- Home, About, Services, Appointment, Testimonials, and Contact pages
- Appointment form with validation, loading state, success message, and WhatsApp handoff
- Floating WhatsApp action button
- SEO metadata, Open Graph tags, sitemap, robots, loading, error, and not-found states
- Royalty-free remote imagery from Unsplash
- Prepared for Vercel and Netlify deployment

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run type-check
npm run lint
npm run build
```

## Project Structure

```text
src/
  app/                 Route pages, metadata, sitemap, robots, loading/error states
  components/
    layout/            Header, footer, shell, theme toggle, WhatsApp button
    sections/          Page sections and appointment form
    ui/                Reusable buttons, cards, headings
  lib/                 Site config and content data
  types/               Shared TypeScript types
```

## Deployment on Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Vercel will detect Next.js automatically.
4. Use the default build command:

```bash
npm run build
```

## Deployment on Netlify

1. Push the project to GitHub.
2. Import the repository in Netlify.
3. Keep the included `netlify.toml`.
4. Netlify uses `@netlify/plugin-nextjs` for Next.js support.

## Customization

Update clinic details in `src/lib/site.ts` and page content in `src/lib/data.ts`.
