import React from 'react';
import ToolCard from '../components/ToolCard.jsx';
import '../styles/tools.css';

const Tools = () => {
  const categories = [
    {
      name: "AI TOOLS",
      tools: [
        { id: 'chatbot', icon: '💬', title: 'AI Chatbot', description: 'Engage in natural conversations.', path: '/dashboard/chatbot' },
        { id: 'ai-writer', icon: '✍️', title: 'AI Writer', description: 'Generate high-quality articles.', path: '/dashboard/ai-writer' }
      ]
    },
    {
      name: "PRODUCTIVITY",
      tools: [
        { id: 'email-generator', icon: '✉️', title: 'Email Generator', description: 'Write professional emails with the right tone.', path: '/dashboard/email-generator' },
        { id: 'grammar-corrector', icon: '✔️', title: 'Grammar Corrector', description: 'Fix and improve your sentences.', path: '/dashboard/grammar-corrector' },
        { id: 'text-summarizer', icon: '📝', title: 'Text Summarizer', description: 'Condense long articles and documents.', path: '/dashboard/text-summarizer' },
        { id: 'translator', icon: '🌍', title: 'AI Translator', description: 'Translate text seamlessly.', path: '/dashboard/translator' }
      ]
    },
    {
      name: "DEVELOPER",
      tools: [
        { id: 'code-explainer', icon: '💻', title: 'Code Explainer', description: 'Understand complex code snippets easily.', path: '/dashboard/code-explainer' }
      ]
    },
    {
      name: "CREATIVE",
      tools: [
        { id: 'emoji-generator', icon: '😎', title: 'Emoji Generator', description: 'Convert text into fun emojis.', path: '/dashboard/emoji-converter' },
        { id: 'username-generator', icon: '👤', title: 'Username Generator', description: 'Generate unique and catchy usernames.', path: '/dashboard/username-generator' }
      ]
    }
  ];

  return (
    <div className="tools-container animate-fade-in">
      <div className="tools-header">
        <h1>AI <span className="gradient-text">Toolkit</span></h1>
        <p>Select a tool below to experience the power of MULTI GEN AI.</p>
      </div>

      <div className="about-tools-section">
        <h2>About AI Tools</h2>
        <div className="about-tools-content">
          <div className="about-item">
            <h3>💬 AI Chatbot</h3>
            <p>Provides conversational answers, acts as a virtual assistant, and helps brainstorm ideas.</p>
          </div>
          <div className="about-item">
            <h3>✍️ AI Writer</h3>
            <p>Generates high-quality written content like articles, blogs, and marketing copy.</p>
          </div>
          <div className="about-item">
            <h3>📝 Text Summarizer</h3>
            <p>Shortens long text, articles, or documents into concise, easy-to-read summaries.</p>
          </div>
          <div className="about-item">
            <h3>🌍 AI Translator</h3>
            <p>Provides highly accurate language translation bridging communication gaps.</p>
          </div>
          <div className="about-item">
            <h3>✉️ AI Email Generator</h3>
            <p>Drafts professional or friendly emails based on your specific purpose and tone.</p>
          </div>
          <div className="about-item">
            <h3>💻 AI Code Explainer</h3>
            <p>Explains complex code snippets in simple, step-by-step plain English.</p>
          </div>
          <div className="about-item">
            <h3>✔️ AI Grammar Corrector</h3>
            <p>Fixes confusing or incorrect sentences to ensure perfect grammar and structure.</p>
          </div>
          <div className="about-item">
            <h3>👤 AI Username Generator</h3>
            <p>Creates unique and catchy usernames for gaming, social media, or specific themes.</p>
          </div>
          <div className="about-item">
            <h3>😎 AI Emoji Generator</h3>
            <p>Generates fun emojis based on the text context you provide.</p>
          </div>
        </div>
      </div>

      {categories.map((category) => (
        <div key={category.name} className="tools-category-section">
          <h3 className="category-title">{category.name}</h3>
          <div className="tools-grid">
            {category.tools.map((tool) => (
              <ToolCard 
                key={tool.id}
                icon={tool.icon}
                title={tool.title}
                description={tool.description}
                path={tool.path}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tools;
