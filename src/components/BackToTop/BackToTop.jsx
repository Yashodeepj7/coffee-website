import React, { useState, useEffect } from 'react';
import './BackToTop.css';
import { FiArrowUp } from 'react-icons/fi';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button when scrolled past 350px
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      className={`floating-back-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <FiArrowUp size={20} />
    </button>
  );
}
