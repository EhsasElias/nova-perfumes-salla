<script setup>
import { computed, ref } from 'vue'

const lang = ref('ar')
const favorites = ref(new Set())
const mobileOpen = ref(false)
const cartOpen = ref(false)
const checkoutOpen = ref(false)
const selectedProduct = ref(null)
const selectedSize = ref('100 ml')
const selectedQty = ref(1)
const cartItems = ref([])
const checkoutStep = ref(1)

const isAr = computed(() => lang.value === 'ar')

const copy = {
  ar: {
    offer: 'شحن مجاني للطلبات فوق 250 ر.س — استخدم كود NOVA10 لأول طلب',
    search: 'ابحث عن عطر أو مجموعة...',
    nav: ['الجديد', 'عطور رجالية', 'عطور نسائية', 'عود وبخور', 'هدايا', 'الأكثر مبيعاً'],
    heroEyebrow: 'مجموعة الخريف 2026',
    heroTitle: 'رائحة تُحفظ في الذاكرة.',
    heroText: 'عطور مختارة بطابع شرقي حديث، مصممة للحضور اليومي والمناسبات الخاصة.',
    shop: 'تسوق المجموعة', discover: 'اكتشف NOVA', categories: 'تسوق حسب الفئة',
    best: 'الأكثر مبيعاً', bestSub: 'اختيارات العملاء هذا الأسبوع', add: 'أضف للسلة',
    quickView: 'عرض التفاصيل', size: 'الحجم', qty: 'الكمية', inStock: 'متوفر وجاهز للشحن',
    cart: 'سلة التسوق', empty: 'السلة فارغة حالياً', subtotal: 'المجموع الفرعي', shipping: 'الشحن',
    free: 'مجاني', total: 'الإجمالي', checkout: 'إتمام الطلب', continue: 'متابعة التسوق', remove: 'حذف',
    freeShip: 'أضف {amount} ر.س للحصول على شحن مجاني', freeShipDone: 'حصلت على الشحن المجاني',
    bundleTitle: 'نسقك الكامل في مجموعة واحدة', bundleText: 'ثلاث روائح مختارة بسعر خاص — مثالية كهدية أو لاكتشاف هوية NOVA.', bundleBtn: 'أضف المجموعة',
    storyTitle: 'مصممة لتترك أثراً، لا مجرد رائحة.',
    storyText: 'NOVA مشروع تجريبي يعرض مهارات بناء متجر سلة: تنظيم المنتجات، الخيارات، العروض، تجربة الجوال، وتسلسل الشراء.',
    storyBtn: 'اقرأ القصة', benefits: ['تغليف هدايا فاخر', 'دفع آمن ومتعدد', 'شحن سريع داخل السعودية', 'استبدال سهل'],
    newsletter: 'كن أول من يعرف عن الإصدارات الجديدة', email: 'بريدك الإلكتروني', subscribe: 'اشترك',
    demo: 'مشروع Portfolio تجريبي — ليس متجراً حقيقياً',
    checkoutTitle: 'إتمام الطلب', steps: ['بيانات العميل', 'التوصيل', 'الدفع'], next: 'التالي', back: 'رجوع', finish: 'تأكيد تجريبي',
    name: 'الاسم الكامل', phone: 'رقم الجوال', city: 'المدينة', address: 'العنوان',
    delivery1: 'توصيل عادي — 2 إلى 4 أيام', delivery2: 'توصيل سريع — خلال 24 ساعة', payment: 'اختر وسيلة الدفع', demoCheckout: 'هذا Checkout تجريبي للعرض فقط — لا يتم تنفيذ أي دفع حقيقي.'
  },
  en: {
    offer: 'Free shipping over SAR 250 — use NOVA10 on your first order',
    search: 'Search fragrance or collection...',
    nav: ['New', 'Men', 'Women', 'Oud & Incense', 'Gifts', 'Best sellers'],
    heroEyebrow: 'Autumn Collection 2026', heroTitle: 'A scent worth remembering.',
    heroText: 'Modern oriental fragrances curated for everyday presence and special occasions.',
    shop: 'Shop collection', discover: 'Discover NOVA', categories: 'Shop by category',
    best: 'Best sellers', bestSub: 'Customer favorites this week', add: 'Add to cart',
    quickView: 'View details', size: 'Size', qty: 'Quantity', inStock: 'In stock and ready to ship',
    cart: 'Shopping bag', empty: 'Your bag is currently empty', subtotal: 'Subtotal', shipping: 'Shipping',
    free: 'Free', total: 'Total', checkout: 'Proceed to checkout', continue: 'Continue shopping', remove: 'Remove',
    freeShip: 'Add SAR {amount} for free shipping', freeShipDone: 'You unlocked free shipping',
    bundleTitle: 'Your complete NOVA edit', bundleText: 'Three curated scents at a special price — ideal for gifting or discovering the NOVA signature.', bundleBtn: 'Add bundle',
    storyTitle: 'Designed to leave an impression, not just a scent.',
    storyText: 'NOVA is a portfolio demo showcasing Salla store skills: catalog structure, variants, offers, mobile UX, and purchase flow.',
    storyBtn: 'Read the story', benefits: ['Luxury gift wrapping', 'Secure payment options', 'Fast Saudi delivery', 'Easy exchange'],
    newsletter: 'Be first to know about new drops', email: 'Your email address', subscribe: 'Subscribe',
    demo: 'Portfolio demo project — not a real store',
    checkoutTitle: 'Checkout', steps: ['Customer', 'Delivery', 'Payment'], next: 'Next', back: 'Back', finish: 'Demo confirmation',
    name: 'Full name', phone: 'Mobile number', city: 'City', address: 'Address',
    delivery1: 'Standard delivery — 2 to 4 days', delivery2: 'Express delivery — within 24 hours', payment: 'Choose payment method', demoCheckout: 'Demo checkout only — no real payment is processed.'
  }
}

const c = computed(() => copy[lang.value])

const categories = [
  { ar: 'عطور رجالية', en: 'Men', tone: 'amber', icon: 'M' },
  { ar: 'عطور نسائية', en: 'Women', tone: 'rose', icon: 'W' },
  { ar: 'عود وبخور', en: 'Oud & Incense', tone: 'wood', icon: 'O' },
  { ar: 'هدايا', en: 'Gifts', tone: 'cream', icon: 'G' }
]

const products = [
  { id: 1, nameAr: 'نوفا نوير', nameEn: 'Nova Noir', notesAr: 'عنبر • جلد • فانيلا', notesEn: 'Amber • Leather • Vanilla', descriptionAr: 'عطر شرقي عميق بطابع دافئ، يبدأ بلمسة عنبر ويستقر على الجلد والفانيلا.', descriptionEn: 'A deep oriental fragrance opening with amber and settling into leather and smooth vanilla.', price: 289, old: 329, tone: 'noir', badgeAr: 'الأكثر مبيعاً', badgeEn: 'Best seller', sizes: [{ label: '50 ml', price: 219 }, { label: '100 ml', price: 289 }] },
  { id: 2, nameAr: 'أورورا', nameEn: 'Aurora', notesAr: 'ورد • مسك • زعفران', notesEn: 'Rose • Musk • Saffron', descriptionAr: 'تركيبة مشرقة تجمع الورد الناعم والمسك الأبيض مع لمسة زعفران راقية.', descriptionEn: 'A luminous blend of soft rose, white musk, and a refined saffron accent.', price: 259, tone: 'aurora', badgeAr: 'جديد', badgeEn: 'New', sizes: [{ label: '50 ml', price: 199 }, { label: '100 ml', price: 259 }] },
  { id: 3, nameAr: 'عود سيغنتشر', nameEn: 'Signature Oud', notesAr: 'عود • باتشولي • دخان', notesEn: 'Oud • Patchouli • Smoke', descriptionAr: 'هوية NOVA الأكثر جرأة؛ عود غني مع باتشولي ولمسة دخانية محسوبة.', descriptionEn: 'NOVA’s boldest signature: rich oud, earthy patchouli, and a controlled smoky trail.', price: 349, tone: 'oud', badgeAr: 'حصري', badgeEn: 'Exclusive', sizes: [{ label: '50 ml', price: 269 }, { label: '100 ml', price: 349 }] },
  { id: 4, nameAr: 'بلوم 01', nameEn: 'Bloom 01', notesAr: 'ياسمين • برغموت • مسك', notesEn: 'Jasmine • Bergamot • Musk', descriptionAr: 'رائحة يومية نظيفة ومنعشة بياسمين خفيف وبرغموت ومسك ناعم.', descriptionEn: 'A clean everyday fragrance with airy jasmine, bright bergamot, and soft musk.', price: 239, tone: 'bloom', badgeAr: '', badgeEn: '', sizes: [{ label: '50 ml', price: 179 }, { label: '100 ml', price: 239 }] }
]

const cartCount = computed(() => cartItems.value.reduce((sum, item) => sum + item.qty, 0))
const cartSubtotal = computed(() => cartItems.value.reduce((sum, item) => sum + item.price * item.qty, 0))
const shipping = computed(() => cartSubtotal.value >= 250 || cartSubtotal.value === 0 ? 0 : 25)
const cartTotal = computed(() => cartSubtotal.value + shipping.value)
const freeShippingRemaining = computed(() => Math.max(0, 250 - cartSubtotal.value))
const freeShippingProgress = computed(() => Math.min(100, (cartSubtotal.value / 250) * 100))
const selectedPrice = computed(() => {
  if (!selectedProduct.value) return 0
  return selectedProduct.value.sizes.find(s => s.label === selectedSize.value)?.price ?? selectedProduct.value.price
})

function toggleFavorite(id) {
  const next = new Set(favorites.value)
  next.has(id) ? next.delete(id) : next.add(id)
  favorites.value = next
}

function openProduct(product) {
  selectedProduct.value = product
  selectedSize.value = product.sizes.at(-1).label
  selectedQty.value = 1
}

function closeProduct() {
  selectedProduct.value = null
}

function addToCart(product, size = '100 ml', qty = 1) {
  const variant = product.sizes.find(s => s.label === size) || product.sizes.at(-1)
  const key = `${product.id}-${variant.label}`
  const existing = cartItems.value.find(item => item.key === key)
  if (existing) existing.qty += qty
  else cartItems.value.push({ key, productId: product.id, nameAr: product.nameAr, nameEn: product.nameEn, tone: product.tone, size: variant.label, price: variant.price, qty })
  cartOpen.value = true
}

function addSelected() {
  if (!selectedProduct.value) return
  addToCart(selectedProduct.value, selectedSize.value, selectedQty.value)
  closeProduct()
}

function addBundle() {
  products.slice(0, 3).forEach(product => addToCart(product, '50 ml', 1))
  cartOpen.value = true
}

function changeQty(item, delta) {
  item.qty += delta
  if (item.qty <= 0) removeItem(item.key)
}

function removeItem(key) {
  cartItems.value = cartItems.value.filter(item => item.key !== key)
}

function startCheckout() {
  if (!cartItems.value.length) return
  cartOpen.value = false
  checkoutStep.value = 1
  checkoutOpen.value = true
}

function nextCheckout() {
  if (checkoutStep.value < 3) checkoutStep.value += 1
  else checkoutOpen.value = false
}
</script>

<template>
  <div class="store" :dir="isAr ? 'rtl' : 'ltr'">
    <div class="demo-bar">{{ c.demo }}</div>
    <div class="offer-bar">{{ c.offer }}</div>

    <header class="header shell">
      <button class="icon-btn menu" aria-label="menu" @click="mobileOpen = true">☰</button>
      <a class="logo" href="#"><span class="logo-dot"></span>NOVA<small>PERFUMES</small></a>
      <div class="search"><span>⌕</span><input :placeholder="c.search" /></div>
      <div class="header-actions">
        <button class="lang" @click="lang = isAr ? 'en' : 'ar'">{{ isAr ? 'EN' : 'العربية' }}</button>
        <button class="icon-btn account" aria-label="account">◯</button>
        <button class="cart" aria-label="cart" @click="cartOpen = true">{{ isAr ? 'السلة' : 'Bag' }} <b>{{ cartCount }}</b></button>
      </div>
    </header>

    <nav class="category-nav shell">
      <a v-for="item in c.nav" :key="item" href="#products">{{ item }}</a>
    </nav>

    <main>
      <section class="hero shell">
        <div class="hero-copy">
          <p class="eyebrow">{{ c.heroEyebrow }}</p>
          <h1>{{ c.heroTitle }}</h1>
          <p>{{ c.heroText }}</p>
          <div class="hero-actions">
            <a class="btn dark" href="#products">{{ c.shop }}</a>
            <a class="text-link" href="#story">{{ c.discover }} <span>↗</span></a>
          </div>
          <div class="mini-trust"><span>4.9/5 ★</span><span>+1,200 {{ isAr ? 'تقييم' : 'reviews' }}</span></div>
        </div>
        <div class="hero-visual" aria-label="NOVA perfume illustration">
          <div class="halo"></div>
          <div class="bottle hero-bottle"><div class="cap"></div><div class="label"><b>NOVA</b><small>NOIR</small></div></div>
          <span class="note n1">AMBER</span><span class="note n2">LEATHER</span><span class="note n3">VANILLA</span>
        </div>
      </section>

      <section class="section shell">
        <div class="section-head"><div><p class="eyebrow">NOVA EDIT</p><h2>{{ c.categories }}</h2></div><a href="#products">{{ isAr ? 'عرض الكل' : 'View all' }} ↗</a></div>
        <div class="category-grid">
          <article v-for="cat in categories" :key="cat.en" class="category-card" :class="cat.tone">
            <div class="category-orb"><span>{{ cat.icon }}</span></div>
            <div><h3>{{ isAr ? cat.ar : cat.en }}</h3><span>{{ isAr ? 'اكتشف المجموعة' : 'Explore collection' }} ↗</span></div>
          </article>
        </div>
      </section>

      <section id="products" class="section products-section">
        <div class="shell">
          <div class="section-head"><div><p class="eyebrow">CURATED</p><h2>{{ c.best }}</h2><p class="muted">{{ c.bestSub }}</p></div><div class="slider-arrows"><button>←</button><button>→</button></div></div>
          <div class="product-grid">
            <article v-for="product in products" :key="product.id" class="product-card">
              <button class="product-image" :class="product.tone" @click="openProduct(product)">
                <span v-if="isAr ? product.badgeAr : product.badgeEn" class="badge">{{ isAr ? product.badgeAr : product.badgeEn }}</span>
                <button class="heart" :class="{ active: favorites.has(product.id) }" @click.stop="toggleFavorite(product.id)">♡</button>
                <div class="bottle product-bottle"><div class="cap"></div><div class="label"><b>NOVA</b><small>{{ product.nameEn.toUpperCase() }}</small></div></div>
                <span class="quick-view">{{ c.quickView }}</span>
              </button>
              <div class="product-info">
                <button class="product-name" @click="openProduct(product)"><h3>{{ isAr ? product.nameAr : product.nameEn }}</h3><p>{{ isAr ? product.notesAr : product.notesEn }}</p></button>
                <div class="price"><strong>{{ product.price }} {{ isAr ? 'ر.س' : 'SAR' }}</strong><del v-if="product.old">{{ product.old }}</del></div>
                <button class="add" @click="addToCart(product)">{{ c.add }} <span>+</span></button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="bundle shell">
        <div class="bundle-copy"><p class="eyebrow">DISCOVERY SET</p><h2>{{ c.bundleTitle }}</h2><p>{{ c.bundleText }}</p><div class="bundle-price"><strong>599 {{ isAr ? 'ر.س' : 'SAR' }}</strong><del>667</del></div><button class="btn dark" @click="addBundle">{{ c.bundleBtn }}</button></div>
        <div class="bundle-visual"><div v-for="(p, i) in products.slice(0,3)" :key="p.id" class="mini-bottle" :class="`b${i+1}`"><div class="mini-cap"></div><span>NOVA</span></div></div>
      </section>

      <section id="story" class="story shell">
        <div class="story-art"><div class="story-glow"></div><div class="bottle story-bottle"><div class="cap"></div><div class="label"><b>NOVA</b><small>ATELIER</small></div></div></div>
        <div class="story-copy"><p class="eyebrow">THE NOVA WAY</p><h2>{{ c.storyTitle }}</h2><p>{{ c.storyText }}</p><a class="btn outline" href="#">{{ c.storyBtn }}</a></div>
      </section>

      <section class="benefits shell">
        <article v-for="(benefit, i) in c.benefits" :key="benefit"><span>0{{ i + 1 }}</span><p>{{ benefit }}</p></article>
      </section>

      <section class="newsletter">
        <div class="shell newsletter-inner"><div><p class="eyebrow">NOVA LETTERS</p><h2>{{ c.newsletter }}</h2></div><form @submit.prevent><input type="email" :placeholder="c.email" /><button>{{ c.subscribe }} ↗</button></form></div>
      </section>
    </main>

    <footer class="footer shell">
      <div class="logo footer-logo"><span class="logo-dot"></span>NOVA<small>PERFUMES</small></div>
      <p>{{ isAr ? 'نموذج متجر سلة احترافي ضمن Portfolio المطور.' : 'A professional Salla storefront demo built for a developer portfolio.' }}</p>
      <a href="https://github.com/EhsasElias/nova-perfumes-salla" target="_blank" rel="noreferrer">GitHub ↗</a>
    </footer>

    <div v-if="mobileOpen" class="overlay" @click.self="mobileOpen = false">
      <aside class="mobile-nav panel">
        <div class="panel-head"><div class="logo"><span class="logo-dot"></span>NOVA</div><button @click="mobileOpen = false">×</button></div>
        <nav><a v-for="item in c.nav" :key="item" href="#products" @click="mobileOpen = false">{{ item }} <span>↗</span></a></nav>
        <button class="lang wide" @click="lang = isAr ? 'en' : 'ar'">{{ isAr ? 'Switch to English' : 'التحويل للعربية' }}</button>
      </aside>
    </div>

    <div v-if="selectedProduct" class="overlay modal-overlay" @click.self="closeProduct">
      <section class="product-modal panel">
        <button class="close" @click="closeProduct">×</button>
        <div class="modal-art" :class="selectedProduct.tone"><div class="bottle modal-bottle"><div class="cap"></div><div class="label"><b>NOVA</b><small>{{ selectedProduct.nameEn.toUpperCase() }}</small></div></div></div>
        <div class="modal-copy">
          <span class="stock-dot">● {{ c.inStock }}</span>
          <h2>{{ isAr ? selectedProduct.nameAr : selectedProduct.nameEn }}</h2>
          <p class="modal-notes">{{ isAr ? selectedProduct.notesAr : selectedProduct.notesEn }}</p>
          <p class="modal-desc">{{ isAr ? selectedProduct.descriptionAr : selectedProduct.descriptionEn }}</p>
          <div class="rating">★★★★★ <span>4.9 (184)</span></div>
          <div class="option-block"><label>{{ c.size }}</label><div class="size-grid"><button v-for="size in selectedProduct.sizes" :key="size.label" :class="{ selected: selectedSize === size.label }" @click="selectedSize = size.label">{{ size.label }}<small>{{ size.price }} {{ isAr ? 'ر.س' : 'SAR' }}</small></button></div></div>
          <div class="buy-row"><div class="qty"><button @click="selectedQty = Math.max(1, selectedQty - 1)">−</button><span>{{ selectedQty }}</span><button @click="selectedQty += 1">+</button></div><button class="modal-add" @click="addSelected"><span>{{ c.add }}</span><strong>{{ selectedPrice * selectedQty }} {{ isAr ? 'ر.س' : 'SAR' }}</strong></button></div>
          <div class="micro-benefits"><span>✓ {{ isAr ? 'تغليف هدية' : 'Gift wrapping' }}</span><span>✓ {{ isAr ? 'استبدال سهل' : 'Easy exchange' }}</span></div>
        </div>
      </section>
    </div>

    <div v-if="cartOpen" class="overlay cart-overlay" @click.self="cartOpen = false">
      <aside class="cart-drawer panel">
        <div class="panel-head"><div><p class="eyebrow">NOVA BAG</p><h2>{{ c.cart }} <small>({{ cartCount }})</small></h2></div><button @click="cartOpen = false">×</button></div>
        <div class="shipping-meter" v-if="cartItems.length"><p>{{ freeShippingRemaining ? c.freeShip.replace('{amount}', freeShippingRemaining) : c.freeShipDone }}</p><div><span :style="{ width: `${freeShippingProgress}%` }"></span></div></div>
        <div v-if="!cartItems.length" class="empty-cart"><span>◌</span><h3>{{ c.empty }}</h3><button class="btn dark" @click="cartOpen = false">{{ c.continue }}</button></div>
        <div v-else class="cart-content">
          <div class="cart-list"><article v-for="item in cartItems" :key="item.key" class="cart-item"><div class="cart-thumb" :class="item.tone"><div class="tiny-bottle"><i></i><span>NOVA</span></div></div><div class="cart-item-info"><h3>{{ isAr ? item.nameAr : item.nameEn }}</h3><p>{{ item.size }}</p><strong>{{ item.price }} {{ isAr ? 'ر.س' : 'SAR' }}</strong><div class="item-actions"><div class="qty small"><button @click="changeQty(item,-1)">−</button><span>{{ item.qty }}</span><button @click="changeQty(item,1)">+</button></div><button class="remove" @click="removeItem(item.key)">{{ c.remove }}</button></div></div></article></div>
          <div class="cart-summary"><div><span>{{ c.subtotal }}</span><strong>{{ cartSubtotal }} {{ isAr ? 'ر.س' : 'SAR' }}</strong></div><div><span>{{ c.shipping }}</span><strong>{{ shipping ? `${shipping} ${isAr ? 'ر.س' : 'SAR'}` : c.free }}</strong></div><div class="total"><span>{{ c.total }}</span><strong>{{ cartTotal }} {{ isAr ? 'ر.س' : 'SAR' }}</strong></div><button class="checkout-btn" @click="startCheckout">{{ c.checkout }} <span>↗</span></button><button class="continue" @click="cartOpen = false">{{ c.continue }}</button></div>
        </div>
      </aside>
    </div>

    <div v-if="checkoutOpen" class="overlay checkout-overlay" @click.self="checkoutOpen = false">
      <section class="checkout panel">
        <button class="close" @click="checkoutOpen = false">×</button>
        <div class="checkout-brand"><div class="logo"><span class="logo-dot"></span>NOVA</div><p>{{ c.demoCheckout }}</p></div>
        <div class="checkout-main">
          <div class="checkout-steps"><span v-for="(step, i) in c.steps" :key="step" :class="{ active: checkoutStep === i+1, done: checkoutStep > i+1 }"><b>{{ i+1 }}</b>{{ step }}</span></div>
          <div v-if="checkoutStep === 1" class="checkout-form"><h2>{{ c.steps[0] }}</h2><label>{{ c.name }}<input /></label><label>{{ c.phone }}<input /></label><div class="two-cols"><label>{{ c.city }}<input /></label><label>{{ c.address }}<input /></label></div></div>
          <div v-else-if="checkoutStep === 2" class="checkout-form"><h2>{{ c.steps[1] }}</h2><label class="radio-card"><input type="radio" name="delivery" checked /><span><b>{{ c.delivery1 }}</b><small>{{ isAr ? '25 ر.س أو مجاناً فوق 250 ر.س' : 'SAR 25 or free over SAR 250' }}</small></span></label><label class="radio-card"><input type="radio" name="delivery" /><span><b>{{ c.delivery2 }}</b><small>49 {{ isAr ? 'ر.س' : 'SAR' }}</small></span></label></div>
          <div v-else class="checkout-form"><h2>{{ c.payment }}</h2><div class="payments"><button>MADA</button><button>VISA</button><button> Pay</button><button>STC Pay</button></div><div class="order-mini"><span>{{ c.total }}</span><strong>{{ cartTotal }} {{ isAr ? 'ر.س' : 'SAR' }}</strong></div></div>
          <div class="checkout-actions"><button v-if="checkoutStep > 1" class="back-btn" @click="checkoutStep--">{{ c.back }}</button><button class="next-btn" @click="nextCheckout">{{ checkoutStep < 3 ? c.next : c.finish }} →</button></div>
        </div>
      </section>
    </div>
  </div>
</template>
