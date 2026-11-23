import React, { useEffect, useRef } from 'react';
import './Hero.css';
import { SINGLE_HERO_BEANS } from '../../data/products';

export default function Hero() {
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const heroBeans = scene.querySelectorAll('.single-floating-bean');
    let targetScroll = window.scrollY;
    let currentScroll = targetScroll;
    let cursorX = 0;
    let cursorY = 0;
    let cursorCurrentX = 0;
    let cursorCurrentY = 0;

    const onMouseMove = (e) => {
      cursorX = (e.clientX / window.innerWidth - 0.5) * 40;
      cursorY = (e.clientY / window.innerHeight - 0.5) * 35;
    };

    const onScroll = () => {
      targetScroll = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    let animFrameId;
    const animateScene = () => {
      currentScroll += (targetScroll - currentScroll) * 0.12;
      cursorCurrentX += (cursorX - cursorCurrentX) * 0.08;
      cursorCurrentY += (cursorY - cursorCurrentY) * 0.08;

      heroBeans.forEach(bean => {
        const speed = parseFloat(bean.dataset.speed || 0.5);
        const rotSpeed = parseFloat(bean.dataset.rot || 0.05);
        const baseRot = parseFloat(bean.dataset.baserot || 0);

        const y = currentScroll * speed + cursorCurrentY * (speed * 0.6);
        const x = cursorCurrentX * (speed * 0.4);
        const r = baseRot + currentScroll * rotSpeed;

        bean.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${r}deg)`;
      });

      animFrameId = requestAnimationFrame(animateScene);
    };
    animFrameId = requestAnimationFrame(animateScene);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <section className="hero-wrapper" id="heroScene" ref={sceneRef}>
      {/* Parallax Scene Layer with Single Beans Only */}
      <div className="hero-scene">
        {SINGLE_HERO_BEANS.map(bean => (
          <img
            key={bean.id}
            src={bean.src}
            alt="Single Roasted Coffee Bean"
            className={`single-floating-bean ${bean.tabHide ? 'hide-on-tablet' : ''} ${bean.mobHide ? 'hide-on-mobile' : ''}`}
            data-speed={bean.speed}
            data-rot={bean.rot}
            data-baserot={bean.rotate}
            style={{
              top: bean.top,
              left: bean.left,
              right: bean.right,
              width: `${bean.width}px`,
              filter: bean.blur
                ? `blur(${bean.blur}) drop-shadow(0 8px 12px rgba(28, 14, 6, 0.25))`
                : 'drop-shadow(0 12px 18px rgba(28, 14, 6, 0.32))',
              animationDuration: bean.animDur,
              animationDelay: bean.animDelay
            }}
          />
        ))}
      </div>

      {/* Central Hero Typography */}
      <div className="hero-main-content reveal" id="heroCopy">
        <div className="hero-eyebrow">
          <span className="sparkle">✦</span> SLOW DOWN. DRINK BETTER. <span className="sparkle">✦</span>
        </div>
        <h1 className="hero-title">
          Coffee For<br />
          <em>Calm Mornings</em>
        </h1>
        <p className="hero-subtitle">
          Start every day with intention. Discover single-origin, small-batch coffee delivered fresh to your door.
        </p>
        <div className="hero-cta-group">
          <a href="#coffee" className="btn-pill-primary">
            Start your trial today ↗
          </a>
          <a href="#finder" className="btn-pill-secondary">
            Take the coffee quiz →
          </a>
        </div>
        <div className="hero-social-proof">
          <div className="avatar-stack">
            <span>J</span>
            <span>M</span>
            <span>A</span>
            <span>+</span>
          </div>
          <div>
            <strong>4.9 / 5 rating</strong>
            <small>from <span data-counter-target="2400" data-counter-suffix="+">2,400+</span> morning cups</small>
          </div>
        </div>
      </div>
    </section>
  );
}
