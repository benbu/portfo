# Portfolio Implementation Tasks

## Phase 1 — Setup
- [ ] **Task 1:** Install and configure Tailwind CSS v4
  - Install tailwindcss and @tailwindcss/vite, configure vite.config.ts plugin, add `@import "tailwindcss"` to index.css, remove default App.css boilerplate.
- [ ] **Task 2:** Install dark/light mode dependencies
  - Create a ThemeContext + useTheme hook that toggles a `dark` class on `<html>` and persists preference to localStorage. Uses Tailwind `darkMode: 'class'` strategy.
- [ ] **Task 3:** Create content data files
  - `src/data/profile.ts` — name, title, value prop, email, LinkedIn, GitHub, resumeUrl
  - `src/data/projects.ts` — 3 stub projects (Crypto Trading Software, NFT Marketplace/Custom EVM Chain, Enterprise ERP SPA), each with title, description, techTags[], githubUrl, demoUrl, imageUrl
  - `src/data/skills.ts` — Languages, Frameworks & Libraries, Tools & DevOps categories from resume
- [ ] **Task 4:** Clear placeholder content and scaffold component structure
  - Gut App.tsx of Vite default content. Create `src/components/` with empty files: Nav.tsx, Hero.tsx, Projects.tsx, ProjectCard.tsx, Skills.tsx, Contact.tsx, Footer.tsx, ThemeToggle.tsx. Wire into App.tsx as a single scrolling page.

## Phase 2 — Components
- [ ] **Task 5:** Build Nav component
  - Sticky top nav. Left: name/logo. Center: anchor links to #projects, #skills, #contact. Right: ThemeToggle + "Download Resume" button linking to /Resume.pdf. Mobile: hamburger menu.
- [ ] **Task 6:** Build ThemeToggle component
  - Sun/moon icon button that calls useTheme() to toggle dark class on `<html>`. Reflects current theme state visually.
- [ ] **Task 7:** Build Hero section
  - Full-viewport-height section. Name (large heading), title, value proposition, two CTAs: "View My Work" (anchor to #projects) and "Download Resume" (link to /Resume.pdf).
- [ ] **Task 8:** Build Projects section
  - Section id="projects". Responsive 3-column grid of ProjectCard components driven by src/data/projects.ts.
- [ ] **Task 9:** Build ProjectCard component
  - Card with: project image placeholder, title, description, tech tag badges, GitHub icon link, Live Demo icon link. Minimal hover effect. Typed from data file.
- [ ] **Task 10:** Build Skills section
  - Section id="skills". Three subsections: Languages, Frameworks & Libraries, Tools & DevOps. Pill/badge list per category.
- [ ] **Task 11:** Build Contact section
  - Section id="contact". Icon links: Email (mailto:benjam.arlyn@gmail.com), GitHub (github.com/benbu), LinkedIn (linkedin.com/in/realbenburnett).
- [ ] **Task 12:** Build Footer component
  - Minimal: "© 2026 Benjamin Burnett" + repeat social icon links.

## Phase 3 — Assets & Polish
- [ ] **Task 13:** Add placeholder project images
  - Add 3 placeholder images in `src/assets/projects/` so ProjectCard renders without broken images. To be replaced with real screenshots later.
- [ ] **Task 14:** Make fully responsive (mobile-first)
  - Audit all components at 375px, 768px, 1280px. Ensure nav collapses, hero text scales, project grid goes 1-col on mobile, skills wrap correctly, contact links are tap-friendly.
- [ ] **Task 15:** Dark/light mode polish pass
  - Verify every component has correct `dark:` variant classes. Check contrast ratios in both modes. Test theme persistence on page reload.
- [ ] **Task 16:** Performance and accessibility audit
  - Run Lighthouse. Targets: LCP < 1.5s, Performance > 90, Accessibility > 90. Fix missing alt text, aria labels, heading hierarchy, image sizing. Verify zero FOUC.

## Phase 4 — Delivery
- [ ] **Task 17:** Production build and static export
  - Run `npm run build`, verify dist/ is self-contained for static host upload. Ensure Resume.pdf is in output and all asset paths are correct (set `base: './'` in vite.config.ts if hosting in a subdirectory).
