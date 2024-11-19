import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CreateEvent.css';


function CreateEvent() {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const navigate=useNavigate()

  const handleCreateEvent=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:3001/create", {name,description,date})
    .then(result=>{console.log(result)
      navigate('/join')
    })
    .catch(err=>console.log(err))
}

  return (
    <div className='container'>
      <h2>Create Event</h2>
      <form onSubmit={handleCreateEvent} style={styles.form}>
        <label>Event Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ ...styles.input, height: '100px' }}
        />
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" className='create-button'>Create Event</button>
      </form>
    </div>
  );
}

const styles = {
  
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    fontSize: '16px',
  },
  
  error: {
    color: 'red',
  },
};

export default CreateEvent;