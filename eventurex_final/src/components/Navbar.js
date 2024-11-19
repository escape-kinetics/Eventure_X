import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationArrow } from 'react-icons/fa'; // For the location icon
import { FaBars } from 'react-icons/fa'; // For the three arrows icon
import logo from '../components/EventureX__2.png';
import './Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // You can handle search functionality here (e.g., filter events)
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="EventureX Logo" />
        </Link>
      </div>
      <div className="navbar-search">
        
      </div>
      <div className="navbar-location">
        <FaLocationArrow size={20} />
        <span>PES</span>
      </div>
      <div className="navbar-menu-icon" onClick={toggleDropdown}>
        <FaBars size={30} /> {/* Three arrows (hamburger) icon */}
      </div>
      <div className={`navbar-dropdown ${isDropdownOpen ? 'active' : ''}`}>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/join">Join Event</Link></li>
          <li><Link to="/create">Create Event</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
