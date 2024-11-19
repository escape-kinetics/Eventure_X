import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './JoinEvent.css';

function JoinEvent(props) {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate hook

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/events");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const handleJoinEvent = async (event) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      alert("Please log in to join events!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/join", {
        userId: user.id,
        eventId: event._id,
      });
      console.log(response.data.message);
      alert(`You have successfully joined the event: ${event.name}`);

      // Call the fetchJoinedEvents function from Dashboard via props
      props.fetchJoinedEvents(user.id);  // <-- Here we are calling `fetchJoinedEvents` from the props

      // Redirect to the Team page after joining the event
      navigate("/team");  // Redirect to the /team page
    } catch (error) {
      navigate("/team");
    }
  };

  return (
    <div className="join-container">
      <h2>Available Events</h2>
      <ul className="event-list">
        {events.map((event) => (
          <li key={event._id} className="event-item">
            <h3>{event.name}</h3>
            <p>{event.description}</p>
            <p>Date: {new Date(event.date).toLocaleDateString()}</p>
            <button onClick={() => handleJoinEvent(event)} className="join-button">
              Join Event
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JoinEvent;
