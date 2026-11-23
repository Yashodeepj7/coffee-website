import React, { useState } from 'react';
import './ContactSection.css';

export default function ContactSection({ onSubmitMessage }) {
  const [formData, setFormData] = useState({ name: '', email: '', topic: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmitMessage) {
      onSubmitMessage('Thanks! Your message was received.');
    }
    setFormData({ name: '', email: '', topic: '', message: '' });
  };

  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-layout">
        <div className="reveal">
          <div className="section-eyebrow">✦ LET'S TALK COFFEE</div>
          <h2 className="section-title">
            We are all<br />
            <em>ears.</em>
          </h2>
          <p className="section-desc" style={{ marginTop: '16px' }}>
            Questions, wholesale inquiries, or just sharing your morning brew setup? Drop us a note. A real coffee lover will reply within 24 hours.
          </p>
        </div>

        <form className="contact-form-card reveal" id="contactForm" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nameInput">Your Name</label>
                <input
                  id="nameInput"
                  className="form-input"
                  placeholder="e.g. Maya Lin"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="emailInput">Email Address</label>
                <input
                  id="emailInput"
                  type="email"
                  className="form-input"
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="topicInput">Topic</label>
              <select
                id="topicInput"
                className="form-input"
                value={formData.topic}
                onChange={e => setFormData({ ...formData, topic: e.target.value })}
                required
              >
                <option value="">Choose a topic</option>
                <option>Subscription Help</option>
                <option>Roast Recommendation</option>
                <option>Order Inquiries</option>
                <option>Just Saying Hello</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="msgInput">Your Message</label>
              <textarea
                id="msgInput"
                rows="4"
                className="form-input"
                placeholder="What is on your mind?"
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button type="submit" className="btn-pill-primary" style={{ justifySelf: 'start', marginTop: '6px' }}>
              Send your note ↗
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
