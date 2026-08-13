import type { NavLink, Project, Skill } from "@/types/portfolio";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const MARQUEE_ITEMS = [
  "FRONTEND DEVELOPMENT",
  "REACT & REDUX",
  "NODE.JS & REST API",
  "TYPESCRIPT",
  "FULL STACK DEVELOPER",
];

export const ABOUT_PARAGRAPHS = [
  "I'm a full-stack developer based in Istanbul, with 2.5+ years as a Senior Selling Partner Support Associate at Amazon behind me — handling complex cases, policy-based evaluations and cross-functional collaboration every day.",
  "In 2024 I made a deliberate shift into software development and went through an intensive Full Stack program. Since then I've been shipping personal and team projects with HTML, CSS, JavaScript, React and Node.js, focused on responsive design, clean architecture and scalable solutions.",
];

export const PRIMARY_STACK = [
  "React",
  "TypeScript",
  "Node.js",
  "Redux",
  "REST API",
  "Git",
];

export const SKILLS: Skill[] = [
  { name: "React", category: "Frontend", level: "Advanced" },
  { name: "JavaScript / TS", category: "Languages", level: "Advanced" },
  { name: "HTML / CSS", category: "Frontend", level: "Advanced" },
  { name: "Node.js & Express", category: "Backend", level: "Proficient" },
  { name: "Redux Toolkit", category: "Frontend", level: "Advanced" },
  { name: "REST API", category: "Backend", level: "Advanced" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  { name: "MongoDB", category: "Backend", level: "Proficient" },
  { name: "Git & GitHub", category: "Tools", level: "Advanced" },
  { name: "Prompt Engineering", category: "Tools", level: "Advanced" },
];

export const PROJECTS: Project[] = [
  {
    title: "Cinemania",
    description:
      "A responsive movie discovery platform on live TMDB data — trending and upcoming films, catalog search, trailers and a persistent personal library.",
    tags: ["JavaScript", "TMDB API", "Vite"],
    link: "https://january-javascript-project.github.io/cinemania/",
    repo: "https://github.com/kutluhangil/cinemania",
  },
  {
    title: "Money Guard",
    description:
      "A fully responsive personal finance manager with JWT auth, full transaction CRUD, live balance sync and a statistics dashboard with currency rates.",
    tags: ["React", "Redux", "JWT"],
    link: "https://money-guard-app-eight.vercel.app",
    repo: "https://github.com/kutluhangil/MoneyGuard",
  },
  {
    title: "Slim Moms",
    description:
      "A full-stack calorie tracker with personalized daily goals, a searchable food diary and a documented REST API — React front, Express/MongoDB back.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://goit-slim-moms.vercel.app/",
    repo: "https://github.com/kutluhangil/SlimMoms",
  },
  {
    title: "Focus Frame",
    description:
      "A pixel-perfect, single-page photography school site built from Figma mockups — courses, mentors, reviews and a sign-up flow at three breakpoints.",
    tags: ["HTML", "CSS", "Figma"],
    link: "https://kutluhangil.github.io/goit-focusframe-project/",
    repo: "https://github.com/kutluhangil/goit-focusframe-project",
  },
  {
    title: "GitVitals",
    description:
      "A GitHub intelligence tool that profiles any public repository or developer instantly — paste a URL, get deep insights. No sign-up, no API keys.",
    tags: ["TypeScript", "React", "GitHub API"],
    link: "https://repository-insights-kappa.vercel.app",
    repo: "https://github.com/kutluhangil/GitVitals",
  },
  {
    title: "SubSense",
    description:
      "A subscription tracker that keeps every recurring expense in one place, with monthly cost overview and budget insights to avoid surprise charges.",
    tags: ["TypeScript", "React", "Vite"],
    link: "https://sub-sense-ashy.vercel.app",
    repo: "https://github.com/kutluhangil/SubSense",
  },
  {
    title: "Next Step",
    description:
      "A job application tracker with ATS scoring for CVs, interview stage tracking and AI-powered insights via Gemini — built to replace messy spreadsheets.",
    tags: ["React", "TypeScript", "Firebase"],
    link: "https://job-tracking-web-form.vercel.app",
    repo: "https://github.com/kutluhangil/NextStep",
  },
  {
    title: "City Verse",
    description:
      "An isometric 3D city-building simulation where AI reacts to your zoning — manage economy, population growth and citizen happiness as the city scales.",
    tags: ["TypeScript", "Three.js", "AI"],
    link: "https://city-verse-gilt.vercel.app/",
    repo: "https://github.com/kutluhangil/CityVerse",
  },
  {
    title: "ReBuild ReBreak",
    description:
      "A 3D voxel sandbox running fully in the browser: custom lightweight engine on Three.js, real-time physics parameters and generative AI via Gemini.",
    tags: ["TypeScript", "Three.js", "Gemini"],
    link: "https://re-build-re-break.vercel.app/",
    repo: "https://github.com/kutluhangil/ReBuildReBreak",
  },
  {
    title: "Minik Gezgin",
    description:
      "An AI web app that turns everyday pet photos into travel memories with Google's Gemini Flash Image model — send your pet from Paris to Mars.",
    tags: ["TypeScript", "Gemini", "React"],
    link: "https://minik-gezgin.vercel.app/",
    repo: "https://github.com/kutluhangil/MinikGezgin",
  },
  {
    title: "Time Shift",
    description:
      "An AI experience that transforms a portrait into photorealistic vintage polaroids across the decades, from the 1950s through the 2000s.",
    tags: ["TypeScript", "AI", "React"],
    link: "http://time-shift-eight.vercel.app/",
    repo: "https://github.com/kutluhangil/TimeShift",
  },
  {
    title: "Apartment Management",
    description:
      "A minimalist apartment management platform for Cumhuriyet Apartmanı — dues, announcements and residents in one clean, Apple-flavoured interface.",
    tags: ["Python", "Web App", "UI Design"],
    link: "https://cumhuriyetapartmani.com/",
    repo: "https://github.com/kutluhangil/cumhuriyetapartmani.com",
  },
];

export const CONTACT = {
  email: "kutluhangul@windowslive.com",
  phone: "+90 506 246 10 33",
  location: "Istanbul / Türkiye",
  github: "https://github.com/kutluhangil",
  linkedin: "https://www.linkedin.com/in/kutluhangil/",
  website: "https://www.kutluhangul.com/",
  resume: "/Kutluhan_Gul_FullStack.pdf",
};
