# NOVA Perfumes — Salla Twilight Theme

A real Salla Twilight theme portfolio project for a perfume store. This repository is being structured to run inside the Salla storefront ecosystem rather than as a standalone Vue demo.

The previous Vue/Vite prototype is preserved in the branch:

```text
archive/vue-vite-demo
```

## What this project demonstrates

- Salla Twilight theme structure
- Twig storefront templates
- `twilight.json` theme configuration
- Merchant-editable homepage settings
- Salla product components and product selection
- Salla menu, search, account, cart, and storefront web components
- Arabic / RTL-first responsive design
- Product catalog presentation
- Theme build pipeline using `@salla.sa/twilight`
- Store setup documentation for products, shipping, and payments

## Requirements

The current official Salla Raed theme requires Node.js `^22.18.0` or `>=24.11.0`. This project follows the same requirement.

Install:

- Node.js 22.18+ (or a compatible newer version)
- npm
- Git
- Salla Partners / merchant development access for testing the theme inside a Salla store

Check your environment:

```bash
node -v
npm -v
git --version
```

## Local installation

### 1. Clone the repository

```bash
git clone https://github.com/EhsasElias/nova-perfumes-salla.git
cd nova-perfumes-salla
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the theme for development

```bash
npm run development
```

For continuous rebuilds while editing:

```bash
npm run watch
```

or:

```bash
npm run dev
```

### 4. Production build

```bash
npm run production
```

The generated theme assets are written to:

```text
public/
```

## Running inside Salla

This is not a normal static website that you open directly with `localhost:5173`.

The Twig templates depend on Salla storefront data such as:

- `store`
- `theme`
- `language`
- products
- cart
- customer session
- merchant theme settings

To test the complete theme, connect it to a Salla development / preview store using the Salla theme development workflow available to your Salla account.

The main theme files are:

```text
nova-perfumes-salla/
├── twilight.json
├── webpack.config.js
├── package.json
├── src/
│   ├── assets/
│   │   ├── js/app.js
│   │   └── styles/app.scss
│   └── views/
│       ├── layouts/master.twig
│       ├── components/
│       │   ├── header.twig
│       │   ├── footer.twig
│       │   └── home/
│       │       ├── nova-products.twig
│       │       └── nova-story.twig
│       └── pages/index.twig
└── public/
```

## Merchant configuration

After the theme is connected to a Salla store, configure it from the Salla theme editor:

1. Set the store logo and brand color.
2. Edit the announcement bar text.
3. Edit the homepage hero title, description, button text, and URL.
4. Add the **NOVA Featured Products** component to the homepage.
5. Select real products from the Salla product catalog for that component.
6. Add the **NOVA Story** component.
7. Arrange homepage components from the theme editor.

## Products

Products should be created in the Salla merchant dashboard, not hard-coded into the theme.

For the NOVA portfolio store, create sample products such as:

- Nova Noir
- Aurora
- Signature Oud
- Bloom 01

Recommended product setup:

- Arabic and English titles/descriptions where multilingual storefront support is enabled
- Product images
- SKU
- Price
- Stock quantity
- Categories
- Options/variants such as 50 ml and 100 ml
- Promotional price where appropriate

The theme then receives and displays the real Salla product data.

## Shipping configuration

Shipping is configured from the Salla merchant dashboard, not inside the Twig theme.

For a Saudi perfume-store portfolio scenario, configure examples such as:

- Standard Saudi delivery
- Express delivery where supported
- Free-shipping threshold, e.g. SAR 250
- Supported cities/regions

The theme should display the storefront/cart state supplied by Salla; it should not fake shipping calculations.

## Payment configuration

Payment methods are also enabled from the Salla merchant dashboard according to the merchant account and available gateways.

Possible examples can include supported methods such as cards, mada, Apple Pay, or other methods available to the merchant account.

The theme does **not** collect card details or implement its own payment gateway. Checkout/payment is handled by Salla.

## Important portfolio note

This repository demonstrates real Salla theme development, but a public GitHub repository alone does not prove that a merchant payment gateway or shipping account has been activated. Those items require access to an actual Salla merchant/development store.

## Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install the theme dependencies |
| `npm run development` | Development build |
| `npm run watch` | Watch theme source files and rebuild |
| `npm run dev` | Alias for development watch mode |
| `npm run production` | Production build |

## Portfolio

GitHub profile: https://github.com/EhsasElias

NOVA Perfumes is part of the Ehsas e-commerce portfolio and is intended to demonstrate practical Salla storefront/theme skills.
