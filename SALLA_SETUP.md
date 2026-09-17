# Salla setup and end-to-end test checklist

This file covers the account-side steps required after the theme code is ready in GitHub.

## 1. Import the theme into Salla Partners

1. Sign in to the Salla Partners Portal.
2. Open **My Themes**.
3. Choose **Import Theme**.
4. Connect/authorize the GitHub account `EhsasElias` if it is not already connected.
5. Select the repository `EhsasElias/nova-perfumes-salla`.
6. Give the theme the display name **NOVA Perfumes**.
7. Add an icon and optional screenshots.
8. Complete the import.

Salla will detect the `twilight.json` file from the repository.

## 2. Create or select a demo store

From the theme page in Salla Partners:

1. Open **Preview**.
2. Create a demo store if none exists.
3. Preview the NOVA theme on that demo store.

Use the demo store for all testing. Do not use a production merchant store for portfolio testing.

## 3. Add the portfolio catalog in the Salla merchant dashboard

Create these sample products as real Salla products:

### Nova Noir
- SKU: `NOVA-NOIR`
- Category: Men's Perfumes
- Base price: SAR 289
- Option: Size
  - 50 ml
  - 100 ml
- Stock: 25

### Aurora
- SKU: `NOVA-AURORA`
- Category: Women's Perfumes
- Base price: SAR 259
- Option: Size
  - 50 ml
  - 100 ml
- Stock: 20

### Signature Oud
- SKU: `NOVA-OUD`
- Category: Oud & Incense
- Base price: SAR 349
- Option: Size
  - 50 ml
  - 100 ml
- Stock: 18

### Bloom 01
- SKU: `NOVA-BLOOM`
- Category: Women's Perfumes
- Base price: SAR 239
- Option: Size
  - 50 ml
  - 100 ml
- Stock: 30

Add polished product images, Arabic descriptions, and English content when multilingual storefront support is enabled.

## 4. Configure the NOVA homepage

From the theme editor:

1. Set the store logo.
2. Set the brand color.
3. Set the announcement text.
4. Edit the hero heading and description.
5. Add **NOVA Featured Products**.
6. Select the four real products created above.
7. Add **NOVA Story**.
8. Arrange the sections and save.

## 5. Shipping setup

Configure shipping from the merchant dashboard, not in Twig code.

Recommended demo scenario:

- Standard Saudi delivery.
- Express delivery if available to the demo store.
- Free shipping threshold: SAR 250, if supported by the configured shipping/offer setup.

The theme reads the real cart/free-shipping state supplied by Salla.

## 6. Payment setup

Enable only payment methods that the Salla demo/merchant account actually supports.

Examples can include mada, cards, Apple Pay, or other available methods.

Do not add fake card forms to the theme. Salla handles checkout and payment.

## 7. End-to-end test

Run these tests in the Salla preview/demo store:

- Home page loads in Arabic RTL.
- Store menu works.
- Search opens and finds a product.
- Products listing loads real Salla catalog data.
- Filters and sorting work.
- Product details show the real image, SKU, price, stock, description, and options.
- 50 ml / 100 ml options can be selected.
- Quantity can be changed.
- Add to cart works.
- Cart counter updates.
- Cart page displays real items.
- Cart quantity update works.
- Removing an item works.
- Coupon UI appears when enabled by the store.
- Free-shipping bar reflects the real Salla cart state.
- Checkout button goes to Salla checkout.
- Shipping methods shown in checkout match the store configuration.
- Payment methods shown in checkout match the store configuration.
- Mobile layout is usable at 360px width.
- Desktop layout works at 1440px width.

## 8. Local theme development

Clone and install:

```bash
git clone https://github.com/EhsasElias/nova-perfumes-salla.git
cd nova-perfumes-salla
npm install
```

Authenticate the Salla CLI with your Salla Partners account, then preview the theme using the Salla CLI theme preview workflow.

Typical theme command:

```bash
salla theme preview
```

The preview workflow uses a selected Salla demo store and watches theme changes while developing.

## 9. Portfolio evidence

After the demo store is working, capture these screenshots:

1. NOVA homepage.
2. Products/category page.
3. Product page showing size options.
4. Cart page.
5. Salla theme editor showing the NOVA custom components.

Use the screenshots in `ehsas-portfolio` and the repository README.

## Status

- Theme repository: ready for Salla import.
- Real Salla product/catalog integration: implemented in theme templates.
- Salla cart integration: implemented in theme templates.
- Salla account import: requires authentication to the owner's Salla Partners account.
- Demo-store products, shipping, and payment configuration: requires access to the Salla demo/merchant dashboard.
