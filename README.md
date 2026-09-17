# NOVA Perfumes — Salla Storefront Demo

A bilingual Arabic/English perfume storefront demo built with Vue 3 + Vite. It is designed as a portfolio project to demonstrate e-commerce UI, product variants, cart behavior, mobile UX, bundles, and a checkout flow inspired by Gulf-region online stores.

> Portfolio demo only. This repository is not an official Salla theme and does not process real orders or payments.

## Features

- Arabic / English switching with RTL support
- Responsive desktop, tablet, and mobile layout
- Product catalog and category sections
- Product details modal
- 50 ml / 100 ml variants with different pricing
- Quantity controls
- Wishlist interaction
- Shopping cart drawer
- Cart quantity update and remove actions
- Free-shipping progress indicator
- Bundle offer
- Three-step demo checkout
- Customer, delivery, and payment UI
- Mobile navigation

## Requirements

Install these before running the project:

- Node.js 20 LTS or newer
- npm 10 or newer
- Git

Check your versions:

```bash
node -v
npm -v
git --version
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/EhsasElias/nova-perfumes-salla.git
```

### 2. Enter the project directory

```bash
cd nova-perfumes-salla
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will print a local address similar to:

```text
http://localhost:5173/
```

Open that address in your browser.

## Windows / XAMPP users

XAMPP is not required for this frontend demo. Open PowerShell or Command Prompt in the project directory and run:

```powershell
npm install
npm run dev
```

If port 5173 is busy, Vite automatically selects another available port.

## Production build

Create an optimized production build:

```bash
npm run build
```

The output is generated inside:

```text
dist/
```

Test the production build locally:

```bash
npm run preview
```

## Deploying the `dist` folder

After `npm run build`, upload the contents of `dist/` to any static hosting provider such as:

- Hostinger
- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

No Laravel backend or database is required for this demo.

## Project structure

```text
nova-perfumes-salla/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.vue
    ├── main.js
    └── styles.css
```

## Main commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview the production build |

## Portfolio

GitHub: https://github.com/EhsasElias

This demo is part of the Ehsas e-commerce portfolio showcase.
