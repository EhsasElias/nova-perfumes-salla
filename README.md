# NOVA Perfumes — Salla Twilight Theme

A real Salla Twilight theme portfolio project for a perfume store. The `main` branch is structured for the Salla storefront ecosystem rather than as a standalone Vue demo.

The previous Vue/Vite prototype is preserved safely in:

```text
archive/vue-vite-demo
```

## What this project demonstrates

- Real Salla Twilight theme structure
- Twig storefront templates
- `twilight.json` theme configuration
- Merchant-editable homepage settings
- Real Salla product catalog rendering
- Real Salla product options and variants
- Real Salla add-to-cart flow
- Real Salla cart item quantity/update/delete behavior
- Salla coupon and cart summary components
- Salla menu, search, account, localization, and cart components
- Arabic / RTL-first responsive design
- Theme build pipeline using `@salla.sa/twilight`
- Store setup documentation for products, shipping, and payments

## Implemented storefront pages

The Salla version currently includes:

```text
src/views/pages/index.twig
src/views/pages/product/index.twig
src/views/pages/product/single.twig
src/views/pages/cart.twig
src/views/pages/partials/product/options.twig
```

### Product listing

The catalog page uses Salla's own data/components:

- `salla-products-list`
- `salla-filters`
- Salla sort options
- Category/search page context supplied by Salla

### Product details

The product page reads the real Salla `product` object and supports:

- Product images
- Product title and subtitle
- Brand
- Rating
- Sale/regular pricing
- Description
- Product options/variants with `salla-product-options`
- Quantity through `salla-quantity-input`
- Add to cart through `salla-add-product-button`
- Salla form submission through `salla.form.onSubmit('cart.addItem', event)`
- SKU/category/tax information

This means sizes such as **50 ml** and **100 ml** should be created as product options in Salla, not hard-coded in the theme.

### Cart

The cart page uses the real Salla `cart` object and supports:

- Actual cart items
- Product image/name/price
- Product options
- Quantity updates
- Item removal
- Free-shipping progress data from Salla
- Coupons when enabled by the merchant
- `salla-cart-summary-card` for the real Salla checkout flow

The theme does not implement a fake payment form. Checkout remains owned and processed by Salla.

## Requirements

The current official Salla Raed theme uses Node.js `^22.18.0` or `>=24.11.0`. NOVA follows the same runtime requirement.

Install:

- Node.js 22.18+ or a compatible newer version
- npm
- Git
- Salla Partners / development or merchant access to preview the theme with real storefront data

Check your environment:

```bash
node -v
npm -v
git --version
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/EhsasElias/nova-perfumes-salla.git
cd nova-perfumes-salla
```

### 2. Install dependencies

```bash
npm install
```

### 3. Development build

```bash
npm run development
```

For continuous rebuilds:

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

Generated assets are written to:

```text
public/
```

## Important: this is not a Vite localhost app

Do not expect this branch to open as a normal `http://localhost:5173` Vue website.

The Twig pages require runtime data provided by Salla, including:

- `store`
- `theme`
- `language`
- `page`
- `product`
- `cart`
- customer/session state
- merchant theme settings

For full testing, connect/preview the theme using the Salla theme-development workflow available to your Salla account.

## Project structure

```text
nova-perfumes-salla/
├── twilight.json
├── webpack.config.js
├── package.json
├── README.md
└── src/
    ├── assets/
    │   ├── js/app.js
    │   └── styles/app.scss
    └── views/
        ├── layouts/master.twig
        ├── components/
        │   ├── header.twig
        │   ├── footer.twig
        │   └── home/
        │       ├── nova-products.twig
        │       └── nova-story.twig
        └── pages/
            ├── index.twig
            ├── cart.twig
            ├── product/
            │   ├── index.twig
            │   └── single.twig
            └── partials/product/options.twig
```

## Merchant setup for the portfolio store

After connecting the theme to a Salla development/merchant store:

1. Upload the NOVA logo and choose the theme color.
2. Edit the announcement bar and hero content in the theme editor.
3. Create categories such as Men's Perfumes, Women's Perfumes, Oud & Incense, and Gifts.
4. Create sample products such as Nova Noir, Aurora, Signature Oud, and Bloom 01.
5. Add real product images, SKU, pricing, stock, descriptions, and categories.
6. Add a Salla product option named Size with values such as `50 ml` and `100 ml`.
7. Assign variant/additional pricing in Salla where required.
8. Add the NOVA Featured Products component to the homepage and choose actual Salla products.
9. Add the NOVA Story component.
10. Test search, product filtering, options, add-to-cart, cart updates, coupons, and checkout handoff.

## Shipping configuration

Shipping is configured in the Salla merchant dashboard, not inside the theme.

For a Saudi perfume-store portfolio scenario, configure examples such as:

- Standard Saudi delivery
- Express delivery where supported
- Free-shipping threshold, for example SAR 250
- Supported cities/regions

The cart theme consumes the real free-shipping/cart information supplied by Salla.

## Payment configuration

Payment methods are enabled in the Salla merchant dashboard according to the merchant account and supported gateways.

Depending on the account, examples may include cards, mada, Apple Pay, STC Pay, or other methods supported by Salla.

NOVA does not collect card details and does not create its own fake payment gateway. Salla handles the checkout/payment experience.

## Portfolio verification note

This repository now demonstrates real Salla theme code. Full proof of live shipping/payment activation still requires an actual Salla development or merchant store because those settings are account-side configuration, not GitHub theme code.

## Commands

| Command | Purpose |
| --- | --- |
| `npm install` | Install theme dependencies |
| `npm run development` | Development build |
| `npm run watch` | Watch source files and rebuild |
| `npm run dev` | Alias for watch mode |
| `npm run production` | Production build |

## Portfolio

GitHub profile: https://github.com/EhsasElias

NOVA Perfumes is part of the Ehsas e-commerce portfolio and demonstrates practical Salla storefront/theme skills.
