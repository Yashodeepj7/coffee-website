import React, { useState } from 'react';
import './PlansSection.css';
import { FiCheck } from 'react-icons/fi';

export default function PlansSection({ onSelectPlan }) {
  const [yearly, setYearly] = useState(false);

  const toggleBilling = () => {
    setYearly(prev => !prev);
  };

  return (
    <section className="plans-section" id="plans">
      <div className="section-wrap">
        <div className="plans-header reveal">
          <div className="section-eyebrow">✦ YOUR COFFEE, ON REPEAT</div>
          <h2 className="section-title">
            Make room for<br />
            <em>better mornings.</em>
          </h2>
          <p className="section-desc" style={{ margin: '14px auto 0' }}>
            Pause anytime. Change your picks. Zero commitments. Your morning ritual, on your schedule.
          </p>
          <div className="billing-switch-wrap">
            <span>Monthly</span>
            <button
              id="billingToggle"
              className={`toggle-switch ${yearly ? 'on' : ''}`}
              role="switch"
              aria-checked={yearly}
              aria-label="Toggle annual billing discount"
              onClick={toggleBilling}
            >
              <i />
            </button>
            <span>Yearly <b className="save-pill">SAVE 15%</b></span>
          </div>
        </div>

        <div className="plan-grid">
          {/* Solo Plan */}
          <article className="plan-card reveal">
            <span className="plan-type">THE LITTLE PICK-ME-UP</span>
            <h3>Solo</h3>
            <p className="plan-desc">For the one-peaceful-cup-a-day ritual.</p>
            <div className="plan-price-wrap">
              <strong className="plan-price-val" data-month="540" data-year="459">
                {yearly ? '₹459' : '₹540'}
              </strong>
              <span>/ month</span>
            </div>
            <span className="plan-interval-note">One 250g bag, freshly roasted</span>
            <ul className="plan-features-list">
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> Your choice of any core roast</li>
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> Small-batch roasted to order</li>
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> Free tracked shipping</li>
            </ul>
            <button className="btn-pill-secondary plan-select" data-plan="Solo" onClick={() => onSelectPlan && onSelectPlan('Solo')}>
              Choose Solo →
            </button>
          </article>

          {/* Daily Plan (Featured) */}
          <article className="plan-card featured-plan reveal reveal-delay-1">
            <div className="popular-badge">THE CROWD FAVOURITE</div>
            <span className="plan-type">A LITTLE MORE TO LOVE</span>
            <h3>Daily</h3>
            <p className="plan-desc">For joyful mornings and afternoon resets.</p>
            <div className="plan-price-wrap">
              <strong className="plan-price-val" data-month="990" data-year="840">
                {yearly ? '₹840' : '₹990'}
              </strong>
              <span>/ month</span>
            </div>
            <span className="plan-interval-note">Two 250g bags, mix and match</span>
            <ul className="plan-features-list">
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> Two single-origin coffees</li>
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> Early access to micro-lot drops</li>
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> Free shipping + Brew guide</li>
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> 10% off all extra add-ons</li>
            </ul>
            <button className="btn-pill-primary plan-select" data-plan="Daily" onClick={() => onSelectPlan && onSelectPlan('Daily')}>
              Choose Daily ↗
            </button>
          </article>

          {/* Enthusiast Plan */}
          <article className="plan-card reveal reveal-delay-2">
            <span className="plan-type">FOR THE COFFEE HOUSE</span>
            <h3>Enthusiast</h3>
            <p className="plan-desc">For the curious, generous, and caffeine devotees.</p>
            <div className="plan-price-wrap">
              <strong className="plan-price-val" data-month="1450" data-year="1230">
                {yearly ? '₹1,230' : '₹1,450'}
              </strong>
              <span>/ month</span>
            </div>
            <span className="plan-interval-note">Three 250g bags, customizable</span>
            <ul className="plan-features-list">
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> Three premium coffees</li>
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> Exclusive seasonal lot included</li>
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> Free priority express shipping</li>
              <li><FiCheck size={13} style={{ color: 'var(--green)', marginRight: 7, flexShrink: 0 }} /> 15% off all gear & accessories</li>
            </ul>
            <button className="btn-pill-secondary plan-select" data-plan="Enthusiast" onClick={() => onSelectPlan && onSelectPlan('Enthusiast')}>
              Choose Enthusiast →
            </button>
          </article>
        </div>
      </div>
    </section>
  );
}
