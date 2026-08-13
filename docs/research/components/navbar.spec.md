# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Original component:** `Hi` in the target bundle
- **Interaction model:** scroll-driven (boolean threshold) + hover
- **Screenshot:** `docs/design-references/spydyy-portfolio.vercel.app/` (visible in every capture)

## DOM Structure
`nav` (fixed overlay) → `div.max-w-7xl` → [ logo `a`, links `div`, mobile hamburger `button` ]

## Classes (verbatim)
- `nav`: `fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b` + state classes
  - top: `bg-transparent border-transparent py-5`
  - scrolled: `bg-black/90 backdrop-blur-md border-red-900/50 py-3 shadow-[0_4px_30px_rgba(220,38,38,0.15)]`
- inner: `max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between`
- logo `a`: `text-white text-2xl font-black tracking-tighter italic uppercase group flex items-center`
  - first letter span: `text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]`
  - rest span: `group-hover:text-red-500 transition-colors duration-300`
- links wrapper: `hidden md:flex items-center gap-8`
- link `a`: `relative text-xs md:text-sm font-bold text-gray-400 uppercase tracking-[0.15em] transition-colors duration-300 hover:text-white group`
- underline span: `absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 transition-all duration-300 ease-out group-hover:w-full shadow-[0_0_8px_rgba(220,38,38,0.8)]`
- hamburger: `md:hidden text-gray-400 hover:text-red-600 transition-colors`, icon `w-7 h-7`,
  path `M4 6h16M4 12h16M4 18h16`

## States & Behaviors
- **Trigger:** `window.scrollY > 50` via `scroll` listener + `useState`.
- **Transition:** `transition-all duration-300`.
- **Hover:** link color `#9ca3af → #ffffff`; underline `w-0 → w-full`.

## Content (this clone)
- Logo: `K` + `UTLUHAN.` (original: `S` + `USHMITA.`)
- Links: About, Skills, Projects, Contact → `#about`, `#skills`, `#projects`, `#contact`

## Responsive
- ≥768px: link row visible, `px-12`.
- <768px: link row hidden, hamburger shown. The hamburger has no menu wired up in the original;
  the clone keeps that behaviour and only adds `aria-label`/`type` for correctness.

## Deviations from the original
- `aria-label="Open menu"` and `type="button"` added to the hamburger (a11y/correctness, no visual change).
