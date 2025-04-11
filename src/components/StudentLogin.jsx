import React, { useState } from 'react';
import './StudentLogin.css';
import { useNavigate } from 'react-router-dom';

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${email}`);
    navigate('/student-dashboard');
  };

  return (
    <div className="student-login-page">
      <h1>Welcome, <span className="highlight">Student</span>!</h1>
      <p className="subtitle">Login to your RevalEase account</p>
      <form className="login-form" onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
      </form>

     
      <p className="create-account-link">
        Don't have an account?{' '}
        <span 
          onClick={() => navigate('/student-register')} 
          style={{ color: 'blue', cursor: 'pointer', textDecoration: 'underline' }}
        >
          Create one here
        </span>
      </p>
    </div>
  );
}

export default StudentLogin;

