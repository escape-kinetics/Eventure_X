// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="center-div">
        <h1>Welcome to EventureX!</h1>
        <p>
          The best application for joining, creating, and managing virtual events
          seamlessly. Explore all that EventureX has to offer and make your events
          extraordinary!
        </p>
        <button className="btn btn-signup" onClick={() => navigate('/signup')}>
          Sign Up
        </button>
        <button className="btn btn-faq" onClick={() => navigate('/faq')}>
          FAQ
        </button>
      </div>
    </div>
  );
}

export default Home;
