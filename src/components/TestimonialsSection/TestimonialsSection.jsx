import React, { useState, useRef, useEffect } from 'react';
import './TestimonialsSection.css';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

export default function TestimonialsSection() {
  const [reviewIdx, setReviewIdx] = useState(0);
  const trackRef = useRef(null);

  const getMaxReviewIdx = () => {
    if (!trackRef.current || !trackRef.current.parentElement) return 0;
    const cards = trackRef.current.querySelectorAll('.review-card');
    if (!cards.length) return 0;
    const parentWidth = trackRef.current.parentElement.offsetWidth;
    const cardWidth = cards[0].offsetWidth + 24;
    const visible = Math.max(1, Math.floor((parentWidth + 24) / cardWidth));
    return Math.max(0, cards.length - visible);
  };

  const getCardWidth = () => {
    if (!trackRef.current) return 380;
    const first = trackRef.current.querySelector('.review-card');
    return first ? first.offsetWidth + 24 : 380;
  };

  const handleNext = () => {
    const maxIdx = getMaxReviewIdx();
    if (maxIdx === 0) return;
    setReviewIdx(prev => (prev >= maxIdx ? 0 : prev + 1));
  };

  const handlePrev = () => {
    const maxIdx = getMaxReviewIdx();
    if (maxIdx === 0) return;
    setReviewIdx(prev => (prev <= 0 ? maxIdx : prev - 1));
  };

  useEffect(() => {
    const handleResize = () => {
      const maxIdx = getMaxReviewIdx();
      setReviewIdx(prev => Math.min(prev, maxIdx));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="testimonial-section section-wrap" id="story">
      <div className="testimonial-header-row reveal">
        <div>
          <div className="section-eyebrow">✦ KIND WORDS, STRONG COFFEE</div>
          <h2 className="section-title">
            Don't just take<br />
            <em>our word for it.</em>
          </h2>
        </div>
        <div className="slider-nav-btns">
          <button id="prevReview" className="slider-nav-btn" aria-label="Previous review" onClick={handlePrev}>
            <FiArrowLeft size={16} />
          </button>
          <button id="nextReview" className="slider-nav-btn" aria-label="Next review" onClick={handleNext}>
            <FiArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="reviews-window">
        <div
          className="reviews-track"
          id="reviewsTrack"
          ref={trackRef}
          style={{ transform: `translateX(-${reviewIdx * getCardWidth()}px)` }}
        >
          <article className="review-card">
            <div className="star-rating">
              <FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" />
            </div>
            <blockquote>“I used to think I just wasn't a morning person. Turns out I was simply drinking the wrong roast. The Weekender is our staple now.”</blockquote>
            <div className="reviewer-meta">
              <span className="reviewer-avatar">LC</span>
              <div className="reviewer-info">
                <b>Lauren C.</b>
                <small>Subscriber since 2023 · Indiranagar, Bengaluru</small>
              </div>
            </div>
          </article>

          <article className="review-card">
            <div className="star-rating">
              <FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" />
            </div>
            <blockquote>“Sunrise Ritual has completely spoiled café coffee for me. The mandarin orange and sweet jaggery notes from Araku are so vibrant and clean.”</blockquote>
            <div className="reviewer-meta">
              <span className="reviewer-avatar avatar-green">JM</span>
              <div className="reviewer-info">
                <b>James M.</b>
                <small>Subscriber since 2024 · Bandra, Mumbai</small>
              </div>
            </div>
          </article>

          <article className="review-card">
            <div className="star-rating">
              <FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" /><FaStar size={13} color="#D4A762" />
            </div>
            <blockquote>“Thoughtful packaging, roasted right before shipping, and arriving like clockwork. The whole ritual feels like a boutique indulgence.”</blockquote>
            <div className="reviewer-meta">
              <span className="reviewer-avatar avatar-caramel">SK</span>
              <div className="reviewer-info">
                <b>Sam K.</b>
                <small>Subscriber since 2022 · South Delhi</small>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
