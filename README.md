<div align="center">

<img src="docs/media/hero.svg" alt="Brand New Day — the one-page portfolio scrolling from the hero and skills marquee through skills and projects to the contact form" width="100%">

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-App%20Router-ff5a36?style=for-the-badge&labelColor=0a0a0c">
  <img alt="GSAP" src="https://img.shields.io/badge/GSAP-scroll%20motion-ffd23f?style=for-the-badge&labelColor=0a0a0c">
  <img alt="shadcn/ui" src="https://img.shields.io/badge/shadcn%2Fui-Radix-5ab0ff?style=for-the-badge&labelColor=0a0a0c">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-strict-ff5a36?style=for-the-badge&labelColor=0a0a0c">
</p>

<p><em>A one-page portfolio for a full-stack developer based in Istanbul,<br>
from customer support at scale to shipping React and Node.js products.</em></p>

</div>

<img src="docs/media/divider.svg" width="100%" alt="">

## What it is

Brand New Day is a personal portfolio built around a career change: years of solving problems for European marketplace sellers, then a move into full-stack development. The page tells that story in four scroll-driven sections, with a marquee of skills and project cards that open into detail.

| Section | |
|---|---|
| **Hero** | A bold headline with GSAP-driven entrance and a skills marquee. |
| **About** | The path from operations to engineering. |
| **Skills** | Frontend, backend and tooling, grouped and animated on scroll. |
| **Projects** | Selected work with stacks, links and screenshots. |
| **Contact** | Direct links and a CV download. |

<img src="docs/media/divider.svg" width="100%" alt="">

## What is on the page

| Section | Detail |
|---|---|
| **Skills** | Ten skills (React, JavaScript / TypeScript, HTML / CSS, Node.js & Express, Redux Toolkit, REST API, Tailwind CSS, MongoDB, Git & GitHub, prompt engineering), each tagged by category rather than an invented "advanced" level. |
| **Projects** | Twelve projects from the GitHub profile, from Cinemania, Money Guard and Slim Moms to SubSense, GitVitals, City Verse, ReBuild ReBreak and Minik Gezgin. |
| **Contact** | The form builds a `mailto:` message with subject, body, name and address and hands it to the visitor's mail app; nothing is sent through a server. |
| **CV** | The full-stack CV is served as a PDF for download. |
| **Mobile** | A real drop-down menu (closes on X, Escape or a link, locks body scroll, with ARIA attributes), checked at 390 px and 768 px with no horizontal overflow. |

All content sits in one typed data file (`src/data/portfolio.ts`), so the components never hold copy.

<img src="docs/media/divider.svg" width="100%" alt="">

## Türkçe özet

**Brand New Day**, İstanbul'da yaşayan bir full-stack geliştiricinin tek sayfalık portfolyo sitesi. Avrupa pazar yeri satıcılarına destek verdiği yıllardan React ve Node.js ürünleri geliştirmeye uzanan kariyer değişimini anlatıyor. Hakkımda, yetenekler, projeler ve iletişim bölümleri GSAP ile kaydırmaya bağlı animasyonlarla açılıyor. Next.js, TypeScript ve shadcn/ui ile yapıldı.

<img src="docs/media/divider.svg" width="100%" alt="">

## Development

```sh
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint     # eslint
```

```
src/app/          layout and page
src/components/   Navbar, Hero, About, Skills, Projects, Contact, ui
src/data/         navigation, marquee, about text, skills and projects
docs/research/    reference notes for the layout
```

<div align="center">
<br>
<a href="https://github.com/kutluhangil"><img src="docs/media/signature.svg" width="100%" alt="Built by kutluhangil"></a>
<sub>Every day is a chance to rebuild · layout rebuilt from a reference portfolio as a study, content and changes are my own.</sub>
</div>
