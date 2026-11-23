import React from 'react';
import './RitualSection.css';

export default function RitualSection() {
  return (
    <section className="ritual-section" id="how">
      <div className="section-wrap ritual-grid">
        <div className="ritual-image-frame reveal">
          <img 
            src="https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1100&q=85" 
            alt="Pouring freshly brewed Indian specialty coffee at home — Alder & Co. brewing ritual" 
            loading="lazy"
            width="1100"
            height="800"
          />
          <div className="ritual-image-badge">✦ A BETTER KIND OF MORNING</div>
        </div>
        <div className="ritual-text reveal">
          <div className="section-eyebrow">✦ A RITUAL, NOT A ROUTINE</div>
          <h2 className="section-title">
            Good coffee.<br />
            <em>Zero guesswork.</em>
          </h2>
          <p className="section-desc">
            We make it effortless to drink coffee you genuinely love. A few simple choices, a fresh box at your doorstep, and a morning that begins on the right note.
          </p>
          <div className="steps-list">
            <div className="step-card">
              <span className="step-num">01</span>
              <div>
                <h3>Find your flavour</h3>
                <p>Tell us how you brew and what you love. Our 60-second quiz pairs you with your perfect roast.</p>
              </div>
            </div>
            <div className="step-card">
              <span className="step-num">02</span>
              <div>
                <h3>Make it yours</h3>
                <p>Select your delivery rhythm (weekly, bi-weekly, monthly) and grind style. Skip or pause anytime.</p>
              </div>
            </div>
            <div className="step-card">
              <span className="step-num">03</span>
              <div>
                <h3>Enjoy fresh roasts</h3>
                <p>Roasted to order in small batches, sealed in recyclable aroma-lock bags and delivered free.</p>
              </div>
            </div>
          </div>
          <a href="#plans" className="btn-pill-primary">Build your subscription ↗</a>
        </div>
      </div>
    </section>
  );
}
