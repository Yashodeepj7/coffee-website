import React from 'react';
import './TrustStrip.css';

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-strip-inner">
        <div className="trust-item">
          <span className="icon">✦</span> 100% Shade-Grown Indian Arabica
        </div>
        <div className="trust-item">
          <span className="icon">✦</span> Roasted Weekly & Shipped Fresh
        </div>
        <div className="trust-item">
          <span className="icon">✦</span> Direct Trade: Coorg & Araku Estates
        </div>
        <div className="trust-item">
          <span className="icon">✦</span> Loved by <span data-counter-target="12000" data-counter-suffix="+">12,000+</span> Coffee Drinkers
        </div>
      </div>
    </section>
  );
}
