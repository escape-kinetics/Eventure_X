import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Team.css';

function Team() {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [members, setMembers] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3001/team", { name, desc, members   })
          .then(result => {
              console.log(result);
              navigate('/dashboard');
          })
          .catch(err => console.log(err));
  }

  return (
    <div className="team-container">
      <h2>Create Your Hackathon Team</h2>
      <form onSubmit={handleSubmit} className="team-form">
        <div className="form-group">
          <label htmlFor="teamName">Team Name</label>
          <input
            type="text"
            id="teamName"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your team name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="teamIdea">Team Idea</label>
          <textarea
            id="teamIdea"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Describe your team's idea"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="newMember">Add Team Members</label>
          

          <textarea
            id="teamIdea"
            onChange={(e) => setMembers(e.target.value)}
            placeholder="Write names of members"
            required
          />
        </div>

        <button type="submit" className="create-team-button">
          Create Team
        </button>
      </form>
    </div>
  );
}

export default Team;
