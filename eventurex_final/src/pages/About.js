// src/pages/About.js
import React from 'react';
//import './About.css'; // External CSS for better styling control

function About() {
  return (
    <div className="about-container">
      <h1 className="heading">About Us</h1>
      <p className="description">
        Welcome to <span className="textBlue">EventureX</span>! We are dedicated to providing a platform that brings people together through shared interests and experiences.
      </p>
      <p className="description">
        Join, create, and discover exciting events! Whether it's for Hackathons, Ideathons, or Fests, we’ve got you covered. Plus, you can find and team up with like-minded individuals.
      </p>
      <p className="description">
        Don’t have a team? No worries! <span className="textBlue">EventureX</span> connects you with others to explore and create the perfect team.
      </p>

      <h2 className="subheading">Meet Our Team</h2>
      
      <div className="teamMember" onClick={() => window.open('https://github.com/aayushsingh12', '_blank')}>
        <p className="name"><strong>Aayush Singh</strong></p>
        <p className="role">Backend Developer | MongoDB & ExpressJS setup</p>
      </div>

      <div className="teamMember" onClick={() => window.open('https://github.com/escape-kinetics', '_blank')}>
        <p className="name"><strong>A.V Vedanth</strong></p>
        <p className="role">Frontend Developer | Website Styling</p>
      </div>

      <div className="teamMember" onClick={() => window.open('https://github.com/baldyhyde', '_blank')}>
        <p className="name"><strong>Abhinav Ballal</strong></p>
        <p className="role">Full Stack Developer | Routing & Frontend</p>
      </div>
    </div>
  );
}

export default About;
