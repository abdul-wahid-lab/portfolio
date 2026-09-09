# 3D Developer Portfolio

An interactive personal portfolio site featuring a 3D hero section, animated content sections, and a contact form — built with React, Three.js, and Tailwind CSS.

## Tech Stack

- **React** — UI library
- **Vite** — build tool / dev server
- **Three.js** — 3D rendering engine
- **React Three Fiber** — React renderer for Three.js
- **React Three Drei** — helper components for React Three Fiber
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and transitions
- **React Router DOM** — routing
- **EmailJS** — client-side contact form email delivery

## Features

- 3D hero section with an interactive desktop model
- Animated About, Experience, and Tech sections
- 3D skill icons rendered with Three.js
- Animated project showcase and testimonials
- Contact form with a 3D Earth model, powered by EmailJS
- Procedurally generated background stars
- Fully responsive across devices

## Project Structure

```
├── public/                  # Static assets & 3D models
├── src/
│   ├── assets/               # Images, icons, logos
│   │   ├── company/           # Company logos (experience section)
│   │   └── tech/               # Technology icons
│   ├── components/
│   │   ├── canvas/            # Three.js scenes (Ball, Computers, Earth, Stars)
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Feedbacks.jsx
│   │   ├── Hero.jsx
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/            # Site content (nav links, projects, experience, etc.)
│   ├── hoc/                  # Higher-order components (SectionWrapper)
│   ├── utils/                # Animation variants (Framer Motion)
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── styles.js
├── index.html
├── tailwind.config.cjs
├── postcss.config.cjs
├── vite.config.js
└── package.json
```

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) and npm installed.

```bash
git clone https://github.com/abdul-wahid-lab/portfolio.git
cd portfolio
npm install
```

### Environment Variables

Create a `.env` file in the project root with your EmailJS credentials (used by the contact form):

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

You can get these by creating a free account at [emailjs.com](https://www.emailjs.com/).

### Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## Deployment

This project is set up to deploy on [Vercel](https://vercel.com):

1. Import the GitHub repo into Vercel.
2. Framework preset: **Vite** (build command `npm run build`, output directory `dist`).
3. Add the EmailJS environment variables in Project Settings before deploying.
