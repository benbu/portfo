# PRD: Software Developer Portfolio 2026

**Status:** Draft | **Owner:** Ben Burnett | **Framework:** Vite + React/Vue

---

## 1. Product Summary
*   **The Problem:** Recruiters spend <60 seconds on a portfolio. High bounce rates occur if technical depth isn't immediately visible.
*   **The Vision:** A high-performance, developer-centric "one-pager" built for speed and clarity.
*   **Core Value:** Converting profile views into interview invitations by demonstrating "Proof of Work."

## 2. User Stories
*   **As a Recruiter:** I want to see a "Tech Stack" badge section immediately so I can shortlist the candidate.
*   **As a Hiring Manager:** I want to see a "Deep Dive" or README link for 3 key projects to evaluate problem-solving logic.
*   **As a Visitor:** I want the site to load instantly on mobile so I don't lose interest.

## 3. Functional Requirements
### 3.1 Hero Section
*   Headline: Name + Role (e.g., "Full-Stack AI Assisted Engineer").
*   Sub-headline: 1-sentence value proposition.
*   Primary CTA: "View My Work" or "Download Resume."

### 3.2 Project Gallery (The "Big 3")
*   **Title & Description:** Brief overview of the problem solved.
*   **Tech Tags:** Labeled icons (e.g., TypeScript, Node.js, PostgreSQL).
*   **Links:** Source Code (GitHub) and Live Demo.
*   **Media:** Optimized screenshots or 10-second looping GIFs of the UI.

### 3.3 Technical Skills
*   Categorized lists: Languages, Frameworks, Tools/DevOps.

### 3.4 Contact & Socials
*   Links to LinkedIn, GitHub, and a direct `mailto:` link.

## 4. Technical Requirements (Vite Implementation)
*   **Build Tool:** [Vite](https://vitejs.dev) for Hot Module Replacement (HMR) and fast production builds.
*   **Assets:** Use Vite’s built-in asset handling to serve optimized **WebP/AVIF** images.
*   **Styling:** Tailwind CSS (recommended) for rapid, utility-first responsive design.
*   **Deployment:** Automated via GitHub Actions to **Vercel** or **Netlify**.
*   **Performance:** 
    *   Zero "Flash of Unstyled Content" (FOUC).
    *   Lighthouse score > 90 for Performance and Accessibility.

## 5. Success Metrics
*   **Performance:** < 1.5s Largest Contentful Paint (LCP).
*   **Conversion:** Number of clicks on the "Resume" or "LinkedIn" links.

---

## 6. Phase 2 (Future Enhancements)
*   Dark/Light mode toggle (using Tailwind `darkMode`).
*   Micro-interactions using `framer-motion`.
*   A "Blog" or "TIL" (Today I Learned) section.

