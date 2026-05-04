import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/auth.css'; // Reusing auth styles for form

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'All fields are required.' });
      return;
    }

    setIsSending(true);
    setStatus({ type: '', text: '' });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key';

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'pandeyanshuman.com@gmail.com'
        },
        publicKey
      );

      setStatus({ type: 'success', text: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
      
      // Auto clear after 3 seconds
      setTimeout(() => {
        setStatus({ type: '', text: '' });
      }, 3000);
      
    } catch (err) {
      console.error('EmailJS Error:', err);
      // Fallback for if the service keys aren't set up yet
      if (err.status === 401 || String(err).includes('public key')) {
        setStatus({ type: 'error', text: 'Email service configuration missing. Please check your EmailJS keys.' });
      } else {
        setStatus({ type: 'error', text: 'Failed to send message. Please try again later.' });
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card" style={{ maxWidth: '500px' }}>
        <div className="auth-header" style={{ marginBottom: '1.5rem' }}>
          <h2>Contact Support</h2>
          <p>We're here to help. Send us an email below.</p>
        </div>

        {status.text && (
          <div style={{
            padding: '10px',
            backgroundColor: status.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
            border: `1px solid ${status.type === 'error' ? '#ef4444' : '#22c55e'}`,
            color: status.type === 'error' ? '#ef4444' : '#22c55e',
            borderRadius: '8px',
            marginBottom: '1rem',
            textAlign: 'center',
            fontSize: '0.9rem'
          }}>
            {status.text}
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input 
              type="text" 
              className="auth-input input-field" 
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              disabled={isSending || status.type === 'success'}
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              className="auth-input input-field" 
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isSending || status.type === 'success'}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea 
              className="input-textarea" 
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              style={{ minHeight: '120px' }}
              disabled={isSending || status.type === 'success'}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn-primary auth-btn"
            disabled={isSending || status.type === 'success'}
            style={{ opacity: isSending ? 0.7 : 1 }}
          >
            {isSending ? (
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <div className="spinner" style={{ width: '16px', height: '16px' }}></div> Sending...
              </span>
            ) : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
