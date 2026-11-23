import React from 'react';
import './SidebarDrawer.css';
import { FiX } from 'react-icons/fi';

export default function SidebarDrawer({ isOpen, onClose }) {
  return (
    <>
      <div 
        className={`sidebar-backdrop ${isOpen ? 'active open' : ''}`} 
        id="sidebarBackdrop" 
        onClick={onClose} 
        aria-hidden={!isOpen} 
      />
      <aside 
        className={`sidebar-drawer ${isOpen ? 'open' : ''}`} 
        id="sidebarDrawer" 
        aria-label="Mobile and Tablet navigation" 
        aria-hidden={!isOpen}
      >
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <span className="brand-title">Alder & Co.</span>
            <span className="brand-tagline">COFFEE FOR CALM MORNINGS</span>
          </div>
          <button 
            className="close-sidebar-btn" 
            id="closeSidebar" 
            onClick={onClose} 
            aria-label="Close navigation menu"
          >
            <FiX size={20} />
          </button>
        </div>

        <nav className="sidebar-nav-links" aria-label="Sidebar main navigation">
          <a href="#plans" className="sidebar-link" onClick={onClose}>
            <span className="link-num">01</span>
            <span className="link-text">Build your box</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="#finder" className="sidebar-link" onClick={onClose}>
            <span className="link-num">02</span>
            <span className="link-text">Start coffee quiz</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="#coffee" className="sidebar-link" onClick={onClose}>
            <span className="link-num">03</span>
            <span className="link-text">Our coffee roasts</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="#how" className="sidebar-link" onClick={onClose}>
            <span className="link-num">04</span>
            <span className="link-text">Brewing ritual</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="#story" className="sidebar-link" onClick={onClose}>
            <span className="link-num">05</span>
            <span className="link-text">About & Reviews</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="#plans" className="sidebar-link" onClick={onClose}>
            <span className="link-num">06</span>
            <span className="link-text">Subscriptions</span>
            <span className="link-arrow">→</span>
          </a>
          <a href="#contact" className="sidebar-link" onClick={onClose}>
            <span className="link-num">07</span>
            <span className="link-text">Contact us</span>
            <span className="link-arrow">→</span>
          </a>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-promo-card">
            <span className="promo-tag">LIMITED OFFER</span>
            <p>Code <strong>SLOWMORNINGS</strong> gives you 10% off your first ritual.</p>
          </div>
          <div className="sidebar-trust-note">
            ✦ 100% Indian Arabica · Roasted weekly · Free shipping
          </div>
        </div>
      </aside>
    </>
  );
}
