import React from 'react';
import { Link } from 'react-router-dom';
import ToolCard from '../components/ToolCard.jsx';
import '../styles/dashboard.css';

const Dashboard = () => {
  return (
    <div className="animate-fade-in" style={{ padding: '1rem' }}>
      <h1 className="hero-title" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', textAlign: 'left' }}>
        Welcome back, <span className="gradient-text">Creator</span>
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>
        Ready to build something amazing today?
      </p>

      <div className="dash-overview-grid">
        <div className="dash-stat-card">
          <div className="dash-stat-label">Generations Available</div>
          <div className="dash-stat-value gradient-text">Unlimited</div>
          <div style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Powered by Gemini 2.5 Flash & Flash Image
          </div>
        </div>

        <div className="dash-stat-card" style={{ background: 'var(--accent-gradient)', color: 'white', borderColor: 'transparent' }}>
          <div className="dash-stat-label" style={{ color: 'rgba(255,255,255,0.8)' }}>AI Assistant</div>
          <div className="dash-stat-value" style={{ fontSize: '1.8rem', marginTop: '1rem' }}>
            "How can I help you code today?"
          </div>
          <Link to="/dashboard/chatbot" style={{ marginTop: 'auto', paddingTop: '1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Open Chat &rarr;
          </Link>
        </div>
      </div>

      <div style={{ marginTop: '3rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Your Tools</h3>
        
        <div className="tools-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          <ToolCard 
            icon="💬"
            title="AI Chatbot"
            description="Engage in intelligent conversations with our advanced AI assistant."
            path="/dashboard/chatbot"
          />
          <ToolCard 
            icon="✍️"
            title="AI Writer"
            description="Generate high-quality articles, blogs, and marketing copy instantly."
            path="/dashboard/ai-writer"
          />
          <ToolCard 
            icon="📝"
            title="Text Summarizer"
            description="Distill long texts, articles, and documents into concise summaries."
            path="/dashboard/text-summarizer"
          />
          <ToolCard 
            icon="🌍"
            title="AI Translator"
            description="Break language barriers with highly accurate, context-aware translations."
            path="/dashboard/translator"
          />
          <ToolCard 
            icon="😎"
            title="AI Emoji Generator"
            description="Let AI suggest and add perfect emojis to your text."
            path="/dashboard/emoji-converter"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
