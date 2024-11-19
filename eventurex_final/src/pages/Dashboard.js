import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Dashboard.css';

function Dashboard() {
  const [user, setUser] = useState(null);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      fetchJoinedEvents(JSON.parse(storedUser).id);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchJoinedEvents = (userId) => {
    axios
      .get(`http://localhost:3001/user/${userId}/events`)
      .then((response) => { 
        setJoinedEvents(response.data);
      })
      .catch((err) => console.error("Error fetching joined events:", err));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  // Hardcoded event and teams for the fictional hackathon
  const hackathonEvent = {
    name: "Innovative Tech Hackathon 2024",
    description: "A 48-hour hackathon to build the most innovative tech solutions.",
    date: "2024-12-15",
    teams: [
      {
        name: "Team AI Innovators",
        idea: "Building an AI-powered tool for personalized learning.",
        youtubeLink: "https://chat.whatsapp.com/CyL23am7YxH1SwTXuX4XUV",
      },
      {
        name: "Team GreenTech",
        idea: "Creating a sustainable energy app for smart homes.",
        youtubeLink: "https://youtube.com",
      },
      {
        name: "Team FinTech Wizards",
        idea: "Developing a blockchain-based platform for secure financial transactions.",
        youtubeLink: "https://youtube.com",
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {user ? (
        <div className="profile-card">
          <h2 className="greeting">Welcome, {user.name}!</h2>
          <p className="user-info"><strong>Email:</strong> {user.email}</p>
          <button onClick={handleLogout} className="logout-button">Logout</button>

          <div className="joined-events">
            <h3>Your Joined Events</h3>
            
              <ul>
                {joinedEvents.map((event) => (
                  <li key={event._id} className="event-item">
                    <h4>{event.name}</h4>
                    <p>{event.description}</p>
                    <p>Date: {new Date(event.date).toLocaleDateString()}</p>
                  </li>
                ))}
              </ul>
            

            <div className="hackathon-section">
              <h3>{hackathonEvent.name}</h3>
              <p>{hackathonEvent.description}</p>
              <p>Date: {new Date(hackathonEvent.date).toLocaleDateString()}</p>

              <h1>Teams</h1>
              <ul>
                {hackathonEvent.teams.map((team, index) => (
                  <li key={index} className="team-item">
                    <h5>{team.name}</h5>
                    <p>{team.idea}</p>
                    <button
                      onClick={() => window.location.href = team.youtubeLink}
                      className="team-button"
                    >
                      Join Team
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
