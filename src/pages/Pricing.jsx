import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-container animate-fade-in">
      <div className="pricing-header">
        <h1>Simple, transparent <span className="gradient-text">pricing</span></h1>
        <p>Choose the perfect plan for your AI generation needs.</p>
      </div>

      <div className="pricing-grid">
        {/* Basic Plan */}
        <div className="pricing-card">
          <h3 className="plan-name">Basic</h3>
          <div className="plan-price">
            <span className="currency">$</span>0<span className="period">/month</span>
          </div>
          <p className="plan-description">Perfect for trying out our AI tools.</p>
          
          <ul className="plan-features">
            <li>✅ 10 Image Generations / month</li>
            <li>✅ 50 Chat Messages / month</li>
            <li>✅ Standard Speed</li>
            <li>✅ Community Support</li>
            <li className="highlight-feature">⭐ Includes Free Interactive Demo</li>
          </ul>

          <Link to="/signup" className="btn-secondary btn-plan">Get Started for Free</Link>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card popular">
          <div className="popular-badge">Most Popular</div>
          <h3 className="plan-name">Pro</h3>
          <div className="plan-price">
            <span className="currency">$</span>19<span className="period">/month</span>
          </div>
          <p className="plan-description">For content creators and professionals.</p>
          
          <ul className="plan-features">
            <li>✅ Unlimited Image Generations</li>
            <li>✅ Unlimited Chat Messages</li>
            <li>✅ Fast Processing Speed</li>
            <li>✅ Priority Email Support</li>
            <li>✅ Access to Premium Models</li>
            <li className="highlight-feature">⭐ Book a Live 1-on-1 Demo</li>
          </ul>

          <Link to="/signup" className="btn-primary btn-plan">Upgrade to Pro</Link>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card">
          <h3 className="plan-name">Enterprise</h3>
          <div className="plan-price">
            <span className="currency">$</span>99<span className="period">/month</span>
          </div>
          <p className="plan-description">For teams and high-volume usage.</p>
          
          <ul className="plan-features">
            <li>✅ Everything in Pro</li>
            <li>✅ API Access</li>
            <li>✅ Custom AI Model Tuning</li>
            <li>✅ 24/7 Phone Support</li>
            <li>✅ Dedicated Account Manager</li>
            <li className="highlight-feature">⭐ Request a Custom Team Demo</li>
          </ul>

          <Link to="/contact" className="btn-secondary btn-plan">Contact Sales</Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
