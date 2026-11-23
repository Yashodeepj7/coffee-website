import React from 'react';
import './CartDrawer.css';
import { FiX } from 'react-icons/fi';
import { formatMoney } from '../../data/products';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQty,
  onCheckout,
  onExploreCoffee
}) {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
      <div
        className={`overlay ${isOpen ? 'active open' : ''}`}
        id="overlay"
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <aside
        className={`cart-drawer ${isOpen ? 'open' : ''}`}
        id="cartDrawer"
        aria-label="Shopping bag"
        aria-hidden={!isOpen}
      >
        <div className="drawer-header">
          <div>
            <div className="section-eyebrow" style={{ marginBottom: 0 }}>✦ YOUR MORNING RITUAL</div>
            <h2>Your bag <span id="drawerCount" style={{ fontSize: '18px', fontWeight: 400, color: 'var(--muted)' }}>({totalItems})</span></h2>
          </div>
          <button className="close-drawer-btn" id="closeCart" aria-label="Close cart" onClick={onClose}>
            <FiX size={22} />
          </button>
        </div>

        <div className="cart-items-container" id="cartItems">
          {cart.length > 0 ? (
            cart.map(item => (
              <div className="cart-line-item" key={item.id}>
                <div className="cart-line-info">
                  <b>{item.name}</b>
                  <small>{formatMoney(item.price)} · 250g Whole Bean</small>
                </div>
                <div className="cart-line-qty">
                  <button
                    data-qty={item.id}
                    data-delta="-1"
                    aria-label="Decrease quantity"
                    onClick={() => onUpdateQty(item.id, -1)}
                  >
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button
                    data-qty={item.id}
                    data-delta="1"
                    aria-label="Increase quantity"
                    onClick={() => onUpdateQty(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="empty-cart-state">
              <div className="icon">✦</div>
              <h3>Your bag is taking a breather.</h3>
              <p>Add a freshly roasted coffee and let the calm mornings come to you.</p>
              <button
                className="btn-pill-primary"
                id="shopCoffee"
                onClick={() => {
                  onClose();
                  if (onExploreCoffee) onExploreCoffee();
                  else {
                    document.getElementById('coffee')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Explore Coffee ↗
              </button>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-drawer-footer" id="cartFooter">
            <div className="subtotal-row">
              <span>Subtotal</span>
              <strong id="cartSubtotal">{formatMoney(subtotal)}</strong>
            </div>
            <small style={{ color: 'var(--muted)', fontSize: '11px' }}>Free tracked shipping on orders over ₹799.</small>
            <button className="btn-pill-primary checkout-btn" id="checkoutBtn" onClick={onCheckout}>
              Continue to checkout ↗
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
