import React, { useState } from 'react';
import axios from 'axios';
import '../components/Styles/Register.css'
import authService from '../services/authService.js';
const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const goTo = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    authService.register({ name, email, password })
      .then(response => console.log('Register success:', response))
      .catch(error => console.error('Register error:', error));
  };
  const handleBack = () => {
    goTo('/login');
  };
  return (
    <div className="register-page">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit" onClick={handleBack} className="btn">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
