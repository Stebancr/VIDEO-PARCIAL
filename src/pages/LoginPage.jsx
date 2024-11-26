import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../components/Styles/login.css'
import authService from '../services/authService.js';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goTo = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    authService.login({ email, password })
      .then(response => console.log('Login success:', response))
      .catch(error => console.error('Login error:', error));
  };
  const handleBack = () => {
    goTo('/');
  };
  return (
      <div>
        <div className="login-page">
        <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit" onClick={handleBack} className="btn">Login</button>
      </form>
      <h3 className='login-page-sumit'>¿No estás registrado? <Link to="/register">Regístrate aquí</Link></h3>
        </div>
      </div>
  );
};

export default LoginPage;
