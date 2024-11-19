import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Team.css';

function Team() {
  const [teamName, setTeamName] = useState("");
  const [teamIdea, setTeamIdea] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [newMember, setNewMember] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!teamName || !teamIdea) {
      alert("Please fill in all fields");
      return;
    }

    const newTeam = {
      name: teamName,
      idea: teamIdea,
      members: [...teamMembers, newMember].filter(Boolean),
    };

    // Submit the new team to the backend
    axios
      .post("http://localhost:3001/team", newTeam)
      .then((response) => {
        alert("Team created successfully!");
        navigate("/dashboard"); // Navigate to the dashboard after successful team creation
      })
      .catch((err) => console.error("Error creating team:", err));
  };

  const handleAddMember = () => {
    if (newMember && !teamMembers.includes(newMember)) {
      setTeamMembers([...teamMembers, newMember]);
      setNewMember("");
    }
  };

  const handleRemoveMember = (member) => {
    setTeamMembers(teamMembers.filter((m) => m !== member));
  };

  return (
    <div className="team-container">
      <h2>Create Your Hackathon Team</h2>
      <form onSubmit={handleSubmit} className="team-form">
        <div className="form-group">
          <label htmlFor="teamName">Team Name</label>
          <input
            type="text"
            id="teamName"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter your team name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="teamIdea">Team Idea</label>
          <textarea
            id="teamIdea"
            value={teamIdea}
            onChange={(e) => setTeamIdea(e.target.value)}
            placeholder="Describe your team's idea"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="newMember">Add Team Members</label>
          <div className="add-member">
            <input
              type="text"
              id="newMember"
              value={newMember}
              onChange={(e) => setNewMember(e.target.value)}
              placeholder="Enter member name"
            />
            <button type="button" onClick={handleAddMember} className="add-member-button">
              Add Member
            </button>
          </div>

          <ul className="team-members-list">
            {teamMembers.map((member, index) => (
              <li key={index} className="team-member-item">
                {member}
                <button
                  type="button"
                  onClick={() => handleRemoveMember(member)}
                  className="remove-member-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className="create-team-button">
          Create Team
        </button>
      </form>
    </div>
  );
}

export default Team;
