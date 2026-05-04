import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-header">
        <h3>Workspace</h3>
      </div>
      
      <nav className="sidebar-nav">
        <div className="nav-group">
          <p className="nav-group-title">Overview</p>
          <NavLink to="/dashboard" end className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">📊</span>
            Dashboard
          </NavLink>
        </div>

        <div className="nav-group">
          <p className="nav-group-title">AI TOOLS</p>
          <NavLink to="/dashboard/chatbot" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">💬</span>
            AI Chatbot
          </NavLink>
          <NavLink to="/dashboard/ai-writer" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">✍️</span>
            AI Writer
          </NavLink>
        </div>

        <div className="nav-group">
          <p className="nav-group-title">PRODUCTIVITY</p>
          <NavLink to="/dashboard/email-generator" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">✉️</span>
            Email Generator
          </NavLink>
          <NavLink to="/dashboard/grammar-corrector" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">✔️</span>
            Grammar Corrector
          </NavLink>
          <NavLink to="/dashboard/text-summarizer" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">📝</span>
            Text Summarizer
          </NavLink>
          <NavLink to="/dashboard/translator" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">🌍</span>
            AI Translator
          </NavLink>
        </div>

        <div className="nav-group">
          <p className="nav-group-title">DEVELOPER</p>
          <NavLink to="/dashboard/code-explainer" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">💻</span>
            Code Explainer
          </NavLink>
        </div>

        <div className="nav-group">
          <p className="nav-group-title">CREATIVE</p>
          <NavLink to="/dashboard/emoji-converter" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">😎</span>
            Emoji Generator
          </NavLink>
          <NavLink to="/dashboard/username-generator" className={({isActive}) => isActive ? "sidebar-link active" : "sidebar-link"}>
            <span className="sidebar-icon">👤</span>
            Username Generator
          </NavLink>
        </div>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile-sm">
          <div className="user-avatar">U</div>
          <div className="user-info">
            <p className="user-name">User Account</p>
            <p className="user-plan">Free Plan</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
