import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container animate-fade-in">
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge-pill">✨ The Next Generation AI Platform</div>
          <h1 className="hero-title">
            Unlock the power of <br/>
            <span className="gradient-text">MULTI GEN AI</span>
          </h1>
          <p className="hero-description">
            Experience state-of-the-art AI generation tools packed into one unified, ultra-fast platform. Generate images, translate text, summarize articles, write content, and chat with AI in seconds.
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Link to="/signup" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              Get Started for Free
            </Link>
            <Link to="/dashboard" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
              View Dashboard
            </Link>
          </div>
        </div>
        
        {/* Abstract shapes for premium tech feel */}
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
      </section>

      <section className="tools-overview-section">
        <div className="section-header">
          <h2>One Platform. Infinite Possibilities.</h2>
          <p>Everything you need to create, all in one place.</p>
        </div>
        <div className="features-grid">
          <div className="feature-card tool-preview-card">
            <div className="feature-icon">💬</div>
            <h3>AI Chatbot</h3>
            <p>Engage in intelligent conversations with our advanced AI assistant.</p>
          </div>
          <div className="feature-card tool-preview-card">
            <div className="feature-icon">✍️</div>
            <h3>AI Writer</h3>
            <p>Generate high-quality articles, blogs, and marketing copy instantly.</p>
          </div>
          <div className="feature-card tool-preview-card">
            <div className="feature-icon">📝</div>
            <h3>Summarizer</h3>
            <p>Distill long texts, articles, and documents into concise summaries.</p>
          </div>
          <div className="feature-card tool-preview-card">
            <div className="feature-icon">🌍</div>
            <h3>Translator</h3>
            <p>Break language barriers with highly accurate, context-aware translations.</p>
          </div>
          <div className="feature-card tool-preview-card">
            <div className="feature-icon">🖼️</div>
            <h3>Image Generator</h3>
            <p>Turn your ideas into stunning visuals using state-of-the-art diffusion models.</p>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose Multi Gen AI?</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>Instant generations powered by optimized processing and minimal overhead.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Highly Accurate</h3>
            <p>Leveraging state-of-the-art models for the best possible results.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Seamless UX</h3>
            <p>A beautifully crafted dark-mode interface that stays out of your way.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Supercharge Your Workflow?</h2>
          <p>Join thousands of creators using Multi Gen AI today.</p>
          <Link to="/signup" className="btn-primary cta-btn">
            Create Your Free Account
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
