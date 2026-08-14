# Abhijith P — Portfolio

A glassmorphism / futuristic portfolio site built with React, Vite, and Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Where to edit things

- **All text content (name, projects, skills, timeline, contact info)** lives in
  `src/data/portfolioData.js`. Edit that one file to update almost everything on the site.
- Sections are split into components under `src/components/`.
- Colors, fonts, and animation tokens are defined in `tailwind.config.js`.
- Global styles (glass effect, dot grid, shimmer text, scrollbar) are in `src/index.css`.

## Things to double check / personalize

- `portfolioData.js` has a couple of `// TODO` placeholders (CGPA, and two of the four
  project cards) — swap those in for your real numbers/projects.
- The hero, about, and skills images are stock photos from Unsplash used as placeholders.
  Swap in your own photo(s) by replacing the `src` in `Hero.jsx` and `About.jsx`.
- The contact form is front-end only (it just shows a success message). To actually receive
  messages, connect it to a form service like Formspree or EmailJS, or your own backend route —
  see the comment in `Contact.jsx`.
- Update the LinkedIn/email/phone links in `portfolioData.js` if anything changes.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3
- No extra UI libraries — all animation is done with CSS + `IntersectionObserver`.
