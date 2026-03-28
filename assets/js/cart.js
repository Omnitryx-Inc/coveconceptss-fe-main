/* =========================================================
   Cove Conceptss Cart Logic
   ========================================================= */

const CART_KEY = 'cove_cart';

/* ----- Storage helpers ----- */
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

/* ----- Count ----- */
function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const badge = document.getElementById('cart-count');
  if (!badge) return;
  const count = getCartCount();
  badge.textContent = count;
  badge.classList.toggle('visible', count > 0);
}

/* ----- Add to cart ----- */
function addToCart(id, name, price, image, type, qty = 1) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx > -1) {
    cart[idx].qty += qty;
  } else {
    cart.push({ id, name, price, image, type, qty });
  }
  saveCart(cart);
  showToast(`${name} added to cart`);
}

/* ----- Remove from cart ----- */
function removeFromCart(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  if (typeof renderCart === 'function') renderCart();
}

/* ----- Update quantity ----- */
function updateQty(id, qty) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === id);
  if (idx > -1) {
    cart[idx].qty = Math.max(1, parseInt(qty) || 1);
    saveCart(cart);
  }
}

/* ----- Toast notification ----- */
function showToast(msg) {
  const existing = document.querySelector('.cart-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'cart-toast';
  toast.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${msg}</span>
    <a href="/pages/cart.html" style="color:var(--gold);font-weight:600;white-space:nowrap;">View Cart</a>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

/* ----- Toast styles (injected once) ----- */
(function injectToastStyles() {
  if (document.getElementById('toast-styles')) return;
  const s = document.createElement('style');
  s.id = 'toast-styles';
  s.textContent = `
    .cart-toast {
      position: fixed;
      bottom: 32px; right: 32px;
      z-index: 9998;
      display: flex;
      align-items: center;
      gap: 10px;
      background: #1a1a1a;
      color: #fff;
      padding: 14px 22px;
      border-radius: 50px;
      font-size: .86rem;
      font-family: var(--font-body);
      box-shadow: 0 8px 32px rgba(0,0,0,.25);
      transform: translateY(20px);
      opacity: 0;
      transition: all .3s cubic-bezier(.4,0,.2,1);
      pointer-events: none;
    }
    .cart-toast.show { transform: translateY(0); opacity: 1; pointer-events: all; }
    .cart-toast svg { color: #657a67; flex-shrink: 0; }
  `;
  document.head.appendChild(s);
})();

/* ----- Header scroll effect ----- */
window.addEventListener('scroll', () => {
  const header = document.getElementById('site-header');
  if (header) header.classList.toggle('scrolled', window.scrollY > 20);
});

/* ----- Mobile nav toggle ----- */
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();

  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
  }
});
