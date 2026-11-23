import React, { useEffect, useRef } from 'react';
import './Header.css';
import { FiCopy, FiSun, FiMoon, FiShoppingBag, FiMenu } from 'react-icons/fi';

export default function Header({ 
  isDark, 
  onToggleTheme, 
  cartCount = 0, 
  onOpenCart, 
  onOpenSidebar,
  onCopyCode
}) {
  const progressBarRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // Header shadow toggle
      if (headerRef.current) {
        if (window.scrollY > 40) {
          headerRef.current.classList.add('scrolled');
        } else {
          headerRef.current.classList.remove('scrolled');
        }
      }

      // Progress bar fill calculation
      if (progressBarRef.current) {
        const winHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (winHeight > 0) {
          const progress = Math.min(Math.max(window.scrollY / winHeight, 0), 1) * 100;
          progressBarRef.current.style.width = `${progress}%`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Reading Progress Indicator */}
      <div className="scroll-progress-bar" id="scrollProgressBar" ref={progressBarRef} />

      {/* Top Announcement Bar with Clickable Promo Code */}
      <div className="announcement">
        <span className="announcement-hide-mobile">Free Shipping Always</span>
        <span className="sep announcement-hide-mobile">✦</span>
        <span className="announcement-full-text">Get 10% off your first ritual with code:</span>
        <span className="announcement-short-text">Get 10% off:</span>
        <span 
          className="promo-badge" 
          id="copyCodeBtn" 
          title="Click to copy coupon code"
          onClick={onCopyCode}
        >
          SLOWMORNINGS <FiCopy size={12} style={{ marginLeft: 5, verticalAlign: 'middle' }} />
        </span>
      </div>

      {/* Main Sticky Header */}
      <header className="site-header" id="top" ref={headerRef}>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#plans" className="nav-link">Build your box</a>
          <a href="#finder" className="nav-link">Start quiz</a>
          <a href="#coffee" className="nav-link">Our coffee</a>
        </nav>

        <a href="#top" className="brand-center" aria-label="Alder & Co. Home">
          <span className="brand-title">Alder & Co.</span>
          <span className="brand-tagline">COFFEE FOR CALM MORNINGS</span>
        </a>

        <div className="header-right">
          <a href="#story" className="nav-link">About</a>
          <a href="#plans" className="nav-link">Subscriptions</a>
          <button 
            className="icon-btn" 
            onClick={onToggleTheme} 
            aria-label="Toggle colour theme" 
            title="Toggle Dark/Light Mode"
          >
            {isDark ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
          <button 
            className="bag-pill-btn" 
            id="openCart" 
            onClick={onOpenCart}
            aria-label="Open shopping bag"
          >
            <FiShoppingBag size={14} />
            <span>Bag</span>
            <span className="cart-count" id="cartCount">{cartCount}</span>
          </button>
          <button 
            className="icon-btn menu-toggle" 
            id="menuToggle" 
            onClick={onOpenSidebar}
            aria-label="Toggle navigation menu"
          >
            <FiMenu size={18} />
          </button>
        </div>
      </header>
    </>
  );
}
