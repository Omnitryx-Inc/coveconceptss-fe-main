---
layout: product
title: "Ramadan Planner PDF"
description: "A beautifully designed 30-day Ramadan planner to help you stay intentional and connected throughout the blessed month."
price: 7.99
type: Digital
category: Digital Download
sku: CGC-DIG-003
images:
  - "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=85&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=800&q=85&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=85&auto=format&fit=crop"
short_desc: "Make this your most meaningful Ramadan yet. Our 30-day printable planner helps you track your goals, duas, and gratitude, one beautiful day at a time."
---

<div class="container">
  <section class="product-detail">
    <div class="product-detail-grid">
      <div class="product-gallery">
        <div class="product-gallery-main" id="main-img" onclick="openLightbox(this.querySelector('img').src)">
          <img src="{{ page.images[0] }}" alt="{{ page.title }}" id="main-img-el" />
        </div>
        <div class="product-gallery-thumbs">
          {% for img in page.images %}
          <div class="gallery-thumb {% if forloop.first %}active{% endif %}" onclick="switchImage('{{ img }}', this)">
            <img src="{{ img }}" alt="{{ page.title }} {{ forloop.index }}" loading="lazy" />
          </div>
          {% endfor %}
        </div>
      </div>

      <div class="product-info">
        <div class="breadcrumb">
          <a href="/">Home</a><span>/</span>
          <a href="/pages/shop.html">Shop</a><span>/</span>
          <span>{{ page.title }}</span>
        </div>
        <span class="product-type-badge digital">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          Digital Download
        </span>
        <h1>{{ page.title }}</h1>
        <div class="product-info-price">£{{ page.price }}</div>
        <p class="product-short-desc">{{ page.short_desc }}</p>
        <div class="qty-row">
          <span class="qty-label">Qty</span>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(-1)">−</button>
            <input class="qty-input" type="number" value="1" min="1" max="10" id="qty" />
            <button class="qty-btn" onclick="changeQty(1)">+</button>
          </div>
        </div>
        <div class="add-to-cart-row">
          <button class="btn btn-primary" onclick="addProductToCart()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
            Add to Cart
          </button>
          <a href="/pages/cart.html" class="btn btn-outline">View Cart</a>
        </div>
        <div class="product-perks">
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 30-day planner</div>
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Printable PDF</div>
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Instant download</div>
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> US Letter size</div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">Description <span class="accordion-icon">+</span></button>
            <div class="accordion-body"><div class="accordion-body-inner">
              <p>The <strong>Ramadan Planner</strong> is a 30-page printable PDF designed to help you stay focused, grateful, and intentional throughout Ramadan. Each daily page includes space for your dua list, Quran reading tracker, gratitude, and nightly reflection.</p>
              <p>Beautifully minimal design. Aesthetic enough to sit on your desk, functional enough to actually use every day.</p>
            </div></div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">Shipping & Delivery <span class="accordion-icon">+</span></button>
            <div class="accordion-body"><div class="accordion-body-inner">
              <p>This is a <strong>digital product</strong>. You will receive a download link by email immediately after purchase. Print at home or at any print shop.</p>
            </div></div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">Returns & Exchanges <span class="accordion-icon">+</span></button>
            <div class="accordion-body"><div class="accordion-body-inner">
              <p>All digital sales are final once downloaded. See our <a href="/pages/exchange-policy.html">Exchange Policy</a>.</p>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<div class="lightbox" id="lightbox" onclick="closeLightbox()">
  <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
  <img src="" id="lightbox-img" alt="Product image enlarged" />
</div>

<script>
  function switchImage(src, thumb) {
    document.getElementById('main-img-el').src = src;
    document.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    thumb.classList.add('active');
  }
  function openLightbox(src) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
  }
  function changeQty(delta) {
    const input = document.getElementById('qty');
    input.value = Math.max(1, Math.min(10, parseInt(input.value || 1) + delta));
  }
  function addProductToCart() {
    const qty = parseInt(document.getElementById('qty').value) || 1;
    addToCart('ramadan-planner', '{{ page.title }}', {{ page.price }}, '{{ page.images[0] }}', '{{ page.type }}', qty);
  }
  function toggleAccordion(trigger) {
    trigger.parentElement.classList.toggle('open');
  }
</script>
