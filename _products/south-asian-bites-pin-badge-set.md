---
layout: product
title: "South Asian Bites Pin Badge Set"
description: "Set of 4 illustrated pin badges celebrating South Asian food culture. Prawns, Bazar Buzar, Mango, and Pickle Jar."
price: 12.00
type: Accessories
category: Pin Badges
sku: CGC-PIN-002
images:
  - "/assets/images/products/IMG_3699.webp"
  - "/assets/images/products/IMG_3681.webp"
short_desc: "A set of 4 hand-illustrated pin badges celebrating the flavours and culture of South Asia. Prawns, Bazar Buzar, Mango, Pickle Jar."
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
        <span class="product-type-badge physical">Accessories</span>
        <h1>{{ page.title }}</h1>
        <div class="product-info-price">£{{ page.price }}</div>
        <div class="qty-row">
          <span class="qty-label">Qty</span>
          <div class="qty-control">
            <button class="qty-btn" onclick="changeQty(-1)">−</button>
            <input class="qty-input" type="number" value="1" min="1" max="10" id="qty" />
            <button class="qty-btn" onclick="changeQty(1)">+</button>
          </div>
        </div>
        <div class="add-to-cart-row">
          <button class="btn btn-primary btn-full" onclick="addProductToCart()">Add to Cart</button>
        </div>
        <p class="product-short-desc">{{ page.short_desc }}</p>
        <div class="product-perks">
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Set of 4 badges</div>
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Hand-illustrated</div>
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Pin clasp backing</div>
          <div class="perk"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Perfect cultural gift</div>
        </div>
        <div class="accordion">
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">Description <span class="accordion-icon">+</span></button>
            <div class="accordion-body"><div class="accordion-body-inner">
              <p>A joyful celebration of South Asian food culture in pin badge form. The set includes 4 illustrated badges: Prawns, Bazar Buzar, Mango, and Pickle Jar. Each badge is bright, colourful, and full of personality.</p>
              <p>Perfect for gifting to anyone who loves South Asian culture, food, and art.</p>
            </div></div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">Shipping &amp; Delivery <span class="accordion-icon">+</span></button>
            <div class="accordion-body"><div class="accordion-body-inner">
              <p>Ships within 1-2 weeks. Free shipping on orders over £50. See our <a href="/pages/shipping-info.html">Shipping Info</a> page.</p>
            </div></div>
          </div>
          <div class="accordion-item">
            <button class="accordion-trigger" onclick="toggleAccordion(this)">Returns &amp; Exchanges <span class="accordion-icon">+</span></button>
            <div class="accordion-body"><div class="accordion-body-inner">
              <p>See our <a href="/pages/exchange-policy.html">Exchange Policy</a> for full details.</p>
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<div class="lightbox" id="lightbox" onclick="closeLightbox()">
  <button class="lightbox-close" onclick="closeLightbox()">&times;</button>
  <img src="" id="lightbox-img" alt="Product enlarged" />
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
    addToCart('food-badges', '{{ page.title }}', {{ page.price }}, '{{ page.images[0] }}', '{{ page.type }}', qty);
  }
  function toggleAccordion(trigger) { trigger.parentElement.classList.toggle('open'); }
</script>
