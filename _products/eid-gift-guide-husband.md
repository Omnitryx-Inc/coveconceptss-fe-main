---
layout: product
title: "Eid Gift Guide for Him"
description: "50+ curated, thoughtful gift ideas for your husband this Eid, from luxurious to budget-friendly."
price: 9.99
type: Digital
category: Digital Download
sku: CGC-DIG-001
images:
  - "https://images.unsplash.com/photo-1738414808975-201966230c59?w=800&q=80&auto=format&fit=crop"
  - "https://plus.unsplash.com/premium_photo-1770772242445-d610fa2ce528?w=800&q=80&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1560828010-50d0c396246a?w=800&q=80&auto=format&fit=crop"
short_desc: "Make his Eid unforgettable. This beautifully designed PDF guide gives you 50+ handpicked gift ideas for your husband, organized by category and budget."
---

<div class="container">
  <section class="product-detail">
    <div class="product-detail-grid">

      <!-- Gallery -->
      <div class="product-gallery">
        <div class="product-gallery-main" id="main-img" onclick="openLightbox(this.querySelector('img').src)">
          <img src="{{ page.images[0] }}" alt="{{ page.title }}" id="main-img-el" />
        </div>
        <div class="product-gallery-thumbs">
          {% for img in page.images %}
          <div class="gallery-thumb {% if forloop.first %}active{% endif %}" onclick="switchImage('{{ img }}', this)">
            <img src="{{ img }}" alt="{{ page.title }} image {{ forloop.index }}" loading="lazy" />
          </div>
          {% endfor %}
        </div>
      </div>

      <!-- Info -->
      <div class="product-info">
        <div class="breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <a href="/pages/shop.html">Shop</a>
          <span>/</span>
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
          <div class="perk">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Instant PDF download
          </div>
          <div class="perk">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            50+ gift ideas
          </div>
          <div class="perk">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Beautifully designed
          </div>
          <div class="perk">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            All budgets covered
          </div>
        </div>

        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">
              Description <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                <p>The <strong>Eid Gift Guide for Him</strong> is your one-stop resource for finding the perfect gift for your husband this Eid. Whether you're working with a tight budget or ready to splurge, this guide has something for everyone.</p>
                <p>Inside, you'll find 50+ thoughtfully curated ideas organized by category: fragrance, fashion, tech, experiences, sentimental gifts, and more. Each recommendation includes where to find it and approximate price ranges.</p>
                <p>Delivered instantly as a beautifully formatted PDF, ready to browse on any device.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">
              What's Included <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                <p>1x beautifully designed PDF guide (printable + digital)<br/>
                50+ curated gift ideas across all budgets<br/>
                Categories: Fragrance, Fashion, Tech, Experiences, Sentimental<br/>
                Searchable and mobile-friendly format</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">
              Shipping & Delivery <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                <p>This is a <strong>digital product</strong>. No shipping required. After your purchase is confirmed, you will receive an email with a download link within minutes. Access your file anytime from your email.</p>
                <p>For questions about your order, see our <a href="/pages/shipping-info.html">Shipping Info</a> page.</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">
              Returns & Exchanges <span class="accordion-icon">+</span>
            </button>
            <div class="accordion-body">
              <div class="accordion-body-inner">
                <p>Due to the digital nature of this product, all sales are final once the file has been downloaded. If you experience any issues with your order, please contact us and we'll make it right.</p>
                <p>See our full <a href="/pages/exchange-policy.html">Exchange Policy</a> for details.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</div>

<!-- Lightbox -->
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
    addToCart('eid-husband', '{{ page.title }}', {{ page.price }}, '{{ page.images[0] }}', '{{ page.type }}', qty);
  }
  function toggleAccordion(trigger) {
    const item = trigger.parentElement;
    item.classList.toggle('open');
  }
</script>
