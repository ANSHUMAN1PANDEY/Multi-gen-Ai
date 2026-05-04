import React, { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthChange = () => {
      const storedUser = localStorage.getItem('multiGenAiUser');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };
    
    // Initial check
    handleAuthChange();

    window.addEventListener('authChange', handleAuthChange);
    window.addEventListener('storage', handleAuthChange);

    return () => {
      window.removeEventListener('authChange', handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('multiGenAiUser');
    localStorage.removeItem('isAuthenticated');
    window.dispatchEvent(new Event('authChange'));
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="navbar-logo"></span>
        Multi Gen AI
      </Link>
      
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      <div className={`navbar-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMobileMenuOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/tools" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMobileMenuOpen(false)}>
          AI Tools
        </NavLink>
        <NavLink to="/pricing" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMobileMenuOpen(false)}>
          Pricing
        </NavLink>
        <NavLink to="/dashboard" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMobileMenuOpen(false)}>
          Dashboard
        </NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} onClick={() => setIsMobileMenuOpen(false)}>
          Support / Contact
        </NavLink>
        
        {/* Render nav actions inside mobile menu when open */}
        {isMobileMenuOpen && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            {user ? (
              <>
                <span className="nav-link" style={{ textAlign: 'center', color: '#e2e8f0' }}>
                  Welcome, {user.name}
                </span>
                <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="btn-secondary btn-nav" style={{ textAlign: 'center', backgroundColor: 'transparent', color: '#ff4d4f', border: '1px solid #ff4d4f' }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-secondary btn-nav" style={{ textAlign: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
                  Login
                </Link>
                <Link to="/signup" className="btn-primary btn-nav" style={{ textAlign: 'center' }} onClick={() => setIsMobileMenuOpen(false)}>
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>

      <div className="nav-actions" style={{ gap: '12px', alignItems: 'center' }}>
        {user ? (
          <>
            <span style={{ color: '#e2e8f0', fontSize: '0.95rem', fontWeight: '500' }}>
              Welcome, {user.name}
            </span>
            <button onClick={handleLogout} className="btn-secondary btn-nav" style={{ padding: '8px 16px', border: '1px solid #ef4444', color: '#ef4444', backgroundColor: 'transparent' }}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn-secondary btn-nav" style={{ padding: '8px 16px', border: 'none' }}>
              Login
            </Link>
            <Link to="/signup" className="btn-primary btn-nav">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
