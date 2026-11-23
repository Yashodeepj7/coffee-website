import React, { useState, useEffect, useRef } from 'react';
import './CoffeeSection.css';
import { FiSearch } from 'react-icons/fi';
import { formatMoney } from '../../data/products';

export default function CoffeeSection({ products = [], onAddToCart }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  // Keyboard shortcut '/' to focus search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (
        e.key === '/' && 
        document.activeElement?.tagName !== 'INPUT' && 
        document.activeElement?.tagName !== 'TEXTAREA'
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProducts = products.filter(p => {
    const matchesFilter = filter === 'all' || p.roast === filter;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      p.name.toLowerCase().includes(q) || 
      p.origin.toLowerCase().includes(q) || 
      p.notes.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="coffee-section section-wrap" id="coffee">
      <div className="section-header-row reveal">
        <div>
          <div className="section-eyebrow">✦ THE GOOD STUFF</div>
          <h2 className="section-title">
            Meet your new<br />
            <em>favourite coffee.</em>
          </h2>
        </div>
        <p className="section-desc">
          Curious, considered coffees with a story in every sip. Find the single-origin roast that matches your morning ritual.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="shop-toolbar reveal">
        <div className="filter-tabs" role="group" aria-label="Filter coffees by roast">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
            data-filter="all"
          >
            All coffee <span className="count-tag">04</span>
          </button>
          <button 
            className={`filter-btn ${filter === 'light' ? 'active' : ''}`} 
            onClick={() => setFilter('light')}
            data-filter="light"
          >
            Light roast
          </button>
          <button 
            className={`filter-btn ${filter === 'medium' ? 'active' : ''}`} 
            onClick={() => setFilter('medium')}
            data-filter="medium"
          >
            Medium
          </button>
          <button 
            className={`filter-btn ${filter === 'dark' ? 'active' : ''}`} 
            onClick={() => setFilter('dark')}
            data-filter="dark"
          >
            Dark roast
          </button>
        </div>
        <label className="search-box">
          <FiSearch size={15} style={{ color: 'var(--muted)', marginRight: 6, flexShrink: 0 }} />
          <input 
            id="productSearch" 
            ref={searchInputRef}
            type="search" 
            placeholder="Find your coffee..." 
            aria-label="Search coffee" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <kbd>/</kbd>
        </label>
      </div>

      {/* Product Cards with 3D Perspective Lift */}
      <div className="product-grid" id="productGrid">
        {filteredProducts.map((p, idx) => (
          <article 
            key={p.id} 
            className={`product-card reveal ${idx > 0 ? `reveal-delay-${idx}` : ''}`}
          >
            <div className="product-image-wrap">
              <img 
                src={p.image} 
                alt={`Alder & Co. ${p.name} — ${p.roast} roast single-origin coffee from ${p.origin}`}
                loading="lazy"
                width="800"
                height="600"
              />
              <span className={`product-tag ${p.tagClass || ''}`}>{p.tag}</span>
              <button 
                className="quick-add-btn" 
                data-add={p.id}
                onClick={() => onAddToCart(p.id)}
              >
                + Quick Add
              </button>
            </div>
            <div className="product-info">
              <div className="product-meta-row">
                <span>{p.roast.toUpperCase()} ROAST · {p.origin}</span>
                <span>{p.weight}</span>
              </div>
              <div className="product-title-row">
                <h3>{p.name}</h3>
                <strong className="price">{formatMoney(p.price)}</strong>
              </div>
              <p className="product-notes">{p.notes}</p>
              <div className="roast-meter">
                <span>Roast:</span>
                <div className="roast-beans-dots">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < p.dots ? 'filled' : ''} />
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <p className="no-results" id="noResults">No coffee found matching your search. Try another roast.</p>
      )}
    </section>
  );
}
