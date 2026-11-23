import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import SidebarDrawer from './components/Sidebar/SidebarDrawer';
import Hero from './components/Hero/Hero';
import TrustStrip from './components/TrustStrip/TrustStrip';
import CoffeeSection from './components/CoffeeSection/CoffeeSection';
import RitualSection from './components/RitualSection/RitualSection';
import QuizSection from './components/QuizSection/QuizSection';
import PlansSection from './components/PlansSection/PlansSection';
import TestimonialsSection from './components/TestimonialsSection/TestimonialsSection';
import FaqSection from './components/FaqSection/FaqSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import CartDrawer from './components/CartDrawer/CartDrawer';
import Toast from './components/Toast/Toast';
import BackToTop from './components/BackToTop/BackToTop';
import { PRODUCTS } from './data/products';

export default function App() {
  // Theme State (Dark / Light Mode)
  const [isDark, setIsDark] = useState(() => {
    try {
      return localStorage.getItem('aurora-theme') === 'dark';
    } catch (_) {
      return false;
    }
  });

  // Drawer States
  const [cartOpen, setCartOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Cart State (Persisted in localStorage)
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('aurora-cart');
      return saved ? JSON.parse(saved) : [];
    } catch (_) {
      return [];
    }
  });

  // Toast Notification State
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Synchronize Dark Mode Class on Body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark', 'dark-theme');
    } else {
      document.body.classList.remove('dark', 'dark-theme');
    }
    try {
      localStorage.setItem('aurora-theme', isDark ? 'dark' : 'light');
    } catch (_) {}
  }, [isDark]);

  // Persist Cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('aurora-cart', JSON.stringify(cart));
    } catch (_) {}
  }, [cart]);

  // Global 3D Scroll Reveal & Animated Number Counters
  useEffect(() => {
    // 1. 3D Scroll Reveals
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });

    const revealEls = document.querySelectorAll('.reveal');
    revealEls.forEach(el => revealObserver.observe(el));

    // 2. Animated Number Counters
    const counterElements = document.querySelectorAll('[data-counter-target]');
    let counterObserver;
    if (counterElements.length) {
      counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.counterTarget, 10);
            const prefix = el.dataset.counterPrefix || '';
            const suffix = el.dataset.counterSuffix || '';
            const duration = 1400;
            const startTime = performance.now();
            const step = (currentTime) => {
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              const val = Math.floor(eased * target);
              el.textContent = `${prefix}${val.toLocaleString()}${suffix}`;
              if (progress < 1) {
                requestAnimationFrame(step);
              }
            };
            requestAnimationFrame(step);
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.2 });
      counterElements.forEach(el => counterObserver.observe(el));
    }

    // 3. Global Keyboard Shortcuts: Escape closes drawers
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setCartOpen(false);
        setSidebarOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      revealObserver.disconnect();
      if (counterObserver) counterObserver.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Handlers
  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2400);
  };

  const handleAddToCart = (id) => {
    const product = PRODUCTS.find(p => p.id === id);
    if (!product) return;

    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === id);
      if (existing) {
        return prevCart.map(item =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
    triggerToast(`${product.name} added to your bag!`);
  };

  const handleUpdateQty = (id, delta) => {
    setCart(prevCart => {
      return prevCart
        .map(item => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('SLOWMORNINGS');
    triggerToast('Code SLOWMORNINGS copied! 10% off applied');
  };

  const handleSelectPlan = (planName) => {
    triggerToast(`${planName} plan selected!`);
  };

  const handleCheckout = () => {
    triggerToast('Demo checkout ready! No payment collected.');
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      {/* Sticky Header & Progress Indicator */}
      <Header
        isDark={isDark}
        onToggleTheme={toggleTheme}
        cartCount={cartCount}
        onOpenCart={() => setCartOpen(true)}
        onOpenSidebar={() => setSidebarOpen(true)}
        onCopyCode={handleCopyCode}
      />

      {/* Mobile/Tablet Slide-out Sidebar Drawer */}
      <SidebarDrawer
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Parallax Physics Engine */}
        <Hero />

        {/* 4-Pillar Trust Strip */}
        <TrustStrip />

        {/* Coffee Section with Filter Tabs & Live Search */}
        <CoffeeSection
          products={PRODUCTS}
          onAddToCart={handleAddToCart}
        />

        {/* How It Works Ritual Guide */}
        <RitualSection />

        {/* Interactive Coffee Recommendation Quiz */}
        <QuizSection
          onAddToCart={handleAddToCart}
          onOpenCart={() => setCartOpen(true)}
        />

        {/* Subscription Plans with Annual Billing Switch */}
        <PlansSection
          onSelectPlan={handleSelectPlan}
        />

        {/* Testimonials Slider */}
        <TestimonialsSection />

        {/* FAQs Details Accordion */}
        <FaqSection />

        {/* Direct Contact Form */}
        <ContactSection
          onSubmitMessage={triggerToast}
        />
      </main>

      {/* Site Footer */}
      <Footer />

      {/* Shopping Bag Slide-out Drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQty={handleUpdateQty}
        onCheckout={handleCheckout}
      />

      {/* Toast Notification Banner */}
      <Toast
        show={showToast}
        message={toastMessage}
      />

      {/* Floating Circular Back-to-Top Button */}
      <BackToTop />
    </>
  );
}
