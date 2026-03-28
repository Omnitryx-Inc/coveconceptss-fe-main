---
layout: product
title: "Aesthetic Glass Water Bottle"
description: "Borosilicate glass water bottle with bamboo lid. 500ml. BPA-free, dishwasher safe. The most aesthetic way to stay hydrated."
price: 32.00
type: Physical
category: Lifestyle
sku: CGC-PHY-002
images:
  - "https://images.unsplash.com/photo-1589365278144-c9e705f843ba?w=800&q=85&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=800&q=85&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=85&auto=format&fit=crop"
  - "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=85&auto=format&fit=crop"
short_desc: "Hydration, elevated. Our borosilicate glass water bottle with a natural bamboo lid is the perfect companion for your daily rituals. Beautiful enough to sit on your desk, durable enough for anywhere."
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
        <span class="product-type-badge physical">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
          Physical Product
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
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 500ml borosilicate glass</div>
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> BPA-free</div>
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Natural bamboo lid</div>
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Dishwasher safe</div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">Description <span class="accordion-icon">+</span></button>
            <div class="accordion-body"><div class="accordion-body-inner">
              <p>The <strong>Aesthetic Glass Water Bottle</strong> is your new daily essential. Made from high-quality borosilicate glass that's resistant to thermal shock and completely free from BPA and other nasties.</p>
              <p>The natural bamboo lid adds an earthy, premium feel that looks incredible on any desk, counter, or nightstand. Comes in a gift box and makes the perfect present for yourself or someone you love.</p>
            </div></div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">Shipping & Delivery <span class="accordion-icon">+</span></button>
            <div class="accordion-body"><div class="accordion-body-inner">
              <p>Orders ship within 2-5 business days. Standard delivery 5-10 business days. Free shipping on orders over $50. See our <a href="/pages/shipping-info.html">Shipping Info</a> page.</p>
            </div></div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">Returns & Exchanges <span class="accordion-icon">+</span></button>
            <div class="accordion-body"><div class="accordion-body-inner">
              <p>Returns accepted within 14 days for unused items. See our <a href="/pages/exchange-policy.html">Exchange Policy</a>.</p>
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
    addToCart('glass-bottle', '{{ page.title }}', {{ page.price }}, '{{ page.images[0] }}', '{{ page.type }}', qty);
  }
  function toggleAccordion(trigger) {
    trigger.parentElement.classList.toggle('open');
  }
</script>
