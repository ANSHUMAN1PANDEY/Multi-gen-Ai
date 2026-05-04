import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="gradient-text">MULTI GEN AI</span>
        </div>
        <p className="footer-text">
          Experience the power of modern artificial intelligence. No backend required.
        </p>
        <p className="footer-text" style={{ fontSize: '0.8rem', opacity: 0.6 }}>
          &copy; {new Date().getFullYear()} Multi Gen AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
