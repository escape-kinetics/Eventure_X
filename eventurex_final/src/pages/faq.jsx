// src/pages/FAQs.js
import React from 'react';
import './faq.css'; // You can create this CSS file for custom styles

function FAQs() {
  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        <h3>Question 1: What is EventureX?</h3>
        <p>EventureX is the best application for joining, creating, and managing virtual events.</p>

        <h3>Question 2: How do I create an event?</h3>
        <p>You can create an event by navigating to the "Create Event" section after logging in.</p>

        <h3>Question 3: How can I join an event?</h3>
        <p>Visit the "Join Event" page, browse available events, and click "Join" to participate.</p>
      </div>
    </div>
  );
}

export default FAQs;
