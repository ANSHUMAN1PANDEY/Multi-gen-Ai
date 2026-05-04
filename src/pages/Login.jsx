import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    if (email && password) {
      const storedUser = localStorage.getItem('multiGenAiUser');
      
      if (storedUser) {
        const user = JSON.stringify(storedUser) !== storedUser ? JSON.parse(storedUser) : null;
        if (user && user.email === email && user.password === password) {
           localStorage.setItem('isAuthenticated', 'true');
           navigate('/dashboard');
        } else {
           setError('Invalid email or password');
        }
      } else {
        // If no user is registered, let's just create one for them for ease of use in this sim
        const autoCreate = { name: "User", email, password };
        localStorage.setItem('multiGenAiUser', JSON.stringify(autoCreate));
        localStorage.setItem('isAuthenticated', 'true');
        navigate('/dashboard');
      }
    }
  };

  return (
    <div className="auth-container animate-fade-in">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Welcome Back</h2>
          <p>Login to your Multi Gen AI account</p>
        </div>
        
        {error && (
          <div style={{ padding: '10px', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px', marginBottom: '1rem', textAlign: 'center', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}
        
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              className="input-textarea auth-input" 
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              className="input-textarea auth-input" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="btn-primary auth-btn">
            Login
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Don't have an account? <Link to="/signup" className="auth-link">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
