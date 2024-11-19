// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JoinEvent from './pages/JoinEvent';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import CreateEvent from './pages/CreateEvent';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import background from './eventmanagement-background.png';
import FAQs from './pages/faq';
import Team from './pages/Team'


function App() {
  return (
   <div style={{ backgroundImage: `url(${background})` }} className="body">
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<JoinEvent />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/faq" element={<FAQs />} />
          <Route path="/team" element={<Team />} />
      
          
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
