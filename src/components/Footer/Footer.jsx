import React from 'react';
import './Footer.css';

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-row">
        <div className="footer-brand">
          <span className="brand-title" style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 600 }}>Alder & Co.</span>
          <div className="footer-tagline">Slow down. Drink better.</div>
        </div>
        <a href="#top" className="back-top-link" onClick={handleScrollTop}>BACK TO TOP ↑</a>
      </div>
      <div className="footer-bottom-row">
        <span>© 2026 Alder & Co. Coffee Co. Crafted for calm mornings.</span>
        <div>
          <a href="#coffee">Shop Coffee</a>
          <a href="#plans">Subscriptions</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
