import React from 'react';
import './FaqSection.css';

export default function FaqSection() {
  return (
    <section className="faq-section">
      <div className="section-wrap faq-layout">
        <div className="reveal">
          <div className="section-eyebrow">✦ GOOD TO KNOW</div>
          <h2 className="section-title">
            A few things<br />
            <em>you might wonder.</em>
          </h2>
          <p className="section-desc" style={{ marginTop: '16px' }}>
            Still curious? We are always thrilled to talk brew ratios, roast curves, and origin stories.
          </p>
          <a href="#contact" className="btn-pill-secondary" style={{ marginTop: '28px' }}>Ask us directly →</a>
        </div>

        <div className="faq-accordion-list reveal reveal-delay-1">
          <details>
            <summary>When will my coffee be roasted and shipped? <span className="plus-icon">+</span></summary>
            <p>We roast in small batches every Monday and Wednesday. Your beans are packaged immediately in aroma-lock valve bags and dispatched within 24–48 hours.</p>
          </details>
          <details>
            <summary>Can I pause, skip, or change my subscription? <span className="plus-icon">+</span></summary>
            <p>Absolutely. You are completely in control. You can skip weeks, swap beans, or adjust frequency with a single click. Zero lock-in or cancellation fees.</p>
          </details>
          <details>
            <summary>Should I pick whole bean or pre-ground? <span className="plus-icon">+</span></summary>
            <p>Whole bean keeps aromatic oils freshest. However, if you don't own a burr grinder, choose ground and let us know your brew method (Aeropress, espresso, or French press).</p>
          </details>
          <details>
            <summary>Are your coffees ethically sourced? <span className="plus-icon">+</span></summary>
            <p>100% yes. We pay 25–40% above market minimums through direct trade partnerships with shade-grown coffee estates across Chikmagalur, Coorg, Araku Valley, and Nilgiris.</p>
          </details>
        </div>
      </div>
    </section>
  );
}
