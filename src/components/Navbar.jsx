import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = ({ isLoggedIn, user }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/videoList?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery(''); // Limpia el campo de búsqueda
    }
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <Link to="/">ViewTube</Link>
      </h1>
      <div className="navbar-search" onSubmit={handleSearchSubmit}>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search videos"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button aria-label="Search" onClick={handleSearchSubmit}>🔍</button>
        </div>
      </div>
      <ul className="navbar-links">
        {isLoggedIn ? (
          <>
            <li><Link to="/upload">Upload</Link></li>
            <li>{user.name}</li>
          </>
        ) : (
          <>
          <li><Link to="/upload">Upload</Link></li>
          <li><Link to="/login"></Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
