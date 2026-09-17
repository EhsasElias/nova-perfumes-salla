<script setup>
import { computed, ref } from 'vue'

const lang = ref('ar')
const cartCount = ref(0)
const favorites = ref(new Set())
const isAr = computed(() => lang.value === 'ar')

const copy = {
  ar: {
    offer: 'شحن مجاني للطلبات فوق 250 ر.س — استخدم كود NOVA10 لأول طلب',
    search: 'ابحث عن عطر أو مجموعة...',
    nav: ['الجديد', 'عطور رجالية', 'عطور نسائية', 'عود وبخور', 'هدايا', 'الأكثر مبيعاً'],
    heroEyebrow: 'مجموعة الخريف 2026',
    heroTitle: 'رائحة تُحفظ في الذاكرة.',
    heroText: 'عطور مختارة بطابع شرقي حديث، مصممة للحضور اليومي والمناسبات الخاصة.',
    shop: 'تسوق المجموعة',
    discover: 'اكتشف NOVA',
    categories: 'تسوق حسب الفئة',
    best: 'الأكثر مبيعاً',
    bestSub: 'اختيارات العملاء هذا الأسبوع',
    add: 'أضف للسلة',
    storyTitle: 'مصممة لتترك أثراً، لا مجرد رائحة.',
    storyText: 'NOVA مشروع تجريبي يعرض مهارات بناء متجر سلة: تنظيم المنتجات، الخيارات، العروض، تجربة الجوال، وتسلسل الشراء.',
    storyBtn: 'اقرأ القصة',
    benefits: ['تغليف هدايا فاخر', 'دفع آمن ومتعدد', 'شحن سريع داخل السعودية', 'استبدال سهل'],
    newsletter: 'كن أول من يعرف عن الإصدارات الجديدة',
    email: 'بريدك الإلكتروني',
    subscribe: 'اشترك',
    demo: 'مشروع Portfolio تجريبي — ليس متجراً حقيقياً'
  },
  en: {
    offer: 'Free shipping over SAR 250 — use NOVA10 on your first order',
    search: 'Search fragrance or collection...',
    nav: ['New', 'Men', 'Women', 'Oud & Incense', 'Gifts', 'Best sellers'],
    heroEyebrow: 'Autumn Collection 2026',
    heroTitle: 'A scent worth remembering.',
    heroText: 'Modern oriental fragrances curated for everyday presence and special occasions.',
    shop: 'Shop collection',
    discover: 'Discover NOVA',
    categories: 'Shop by category',
    best: 'Best sellers',
    bestSub: 'Customer favorites this week',
    add: 'Add to cart',
    storyTitle: 'Designed to leave an impression, not just a scent.',
    storyText: 'NOVA is a portfolio demo showcasing Salla store skills: catalog structure, variants, offers, mobile UX, and purchase flow.',
    storyBtn: 'Read the story',
    benefits: ['Luxury gift wrapping', 'Secure payment options', 'Fast Saudi delivery', 'Easy exchange'],
    newsletter: 'Be first to know about new drops',
    email: 'Your email address',
    subscribe: 'Subscribe',
    demo: 'Portfolio demo project — not a real store'
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
  { id: 1, nameAr: 'نوفا نوير', nameEn: 'Nova Noir', notesAr: 'عنبر • جلد • فانيلا', notesEn: 'Amber • Leather • Vanilla', price: 289, old: 329, tone: 'noir', badgeAr: 'الأكثر مبيعاً', badgeEn: 'Best seller' },
  { id: 2, nameAr: 'أورورا', nameEn: 'Aurora', notesAr: 'ورد • مسك • زعفران', notesEn: 'Rose • Musk • Saffron', price: 259, tone: 'aurora', badgeAr: 'جديد', badgeEn: 'New' },
  { id: 3, nameAr: 'عود سيغنتشر', nameEn: 'Signature Oud', notesAr: 'عود • باتشولي • دخان', notesEn: 'Oud • Patchouli • Smoke', price: 349, tone: 'oud', badgeAr: 'حصري', badgeEn: 'Exclusive' },
  { id: 4, nameAr: 'بلوم 01', nameEn: 'Bloom 01', notesAr: 'ياسمين • برغموت • مسك', notesEn: 'Jasmine • Bergamot • Musk', price: 239, tone: 'bloom', badgeAr: '', badgeEn: '' }
]

function addToCart() {
  cartCount.value += 1
}

function toggleFavorite(id) {
  const next = new Set(favorites.value)
  next.has(id) ? next.delete(id) : next.add(id)
  favorites.value = next
}
</script>

<template>
  <div class="store" :dir="isAr ? 'rtl' : 'ltr'">
    <div class="demo-bar">{{ c.demo }}</div>
    <div class="offer-bar">{{ c.offer }}</div>

    <header class="header shell">
      <button class="icon-btn menu" aria-label="menu">☰</button>
      <a class="logo" href="#"><span class="logo-dot"></span>NOVA<small>PERFUMES</small></a>
      <div class="search"><span>⌕</span><input :placeholder="c.search" /></div>
      <div class="header-actions">
        <button class="lang" @click="lang = isAr ? 'en' : 'ar'">{{ isAr ? 'EN' : 'العربية' }}</button>
        <button class="icon-btn" aria-label="account">◯</button>
        <button class="cart" aria-label="cart">Bag <b>{{ cartCount }}</b></button>
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
              <div class="product-image" :class="product.tone">
                <span v-if="isAr ? product.badgeAr : product.badgeEn" class="badge">{{ isAr ? product.badgeAr : product.badgeEn }}</span>
                <button class="heart" :class="{ active: favorites.has(product.id) }" @click="toggleFavorite(product.id)">♡</button>
                <div class="bottle product-bottle"><div class="cap"></div><div class="label"><b>NOVA</b><small>{{ product.nameEn.toUpperCase() }}</small></div></div>
              </div>
              <div class="product-info">
                <div><h3>{{ isAr ? product.nameAr : product.nameEn }}</h3><p>{{ isAr ? product.notesAr : product.notesEn }}</p></div>
                <div class="price"><strong>{{ product.price }} {{ isAr ? 'ر.س' : 'SAR' }}</strong><del v-if="product.old">{{ product.old }}</del></div>
                <button class="add" @click="addToCart">{{ c.add }} <span>+</span></button>
              </div>
            </article>
          </div>
        </div>
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
  </div>
</template>
