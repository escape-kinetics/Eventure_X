import {useState} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

    const [email, setEmail]= useState()
    const [password, setPassword]= useState()
    const navigate=useNavigate()

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3001/login", { email, password })
          .then(result => {
              console.log(result);
              if (result.data.message === "Success") {
                  // Save user data to localStorage
                  localStorage.setItem("user", JSON.stringify(result.data.user));
                  navigate('/dashboard'); // Navigate to the Profile page
              } else {
                  alert(result.data.message);
              }
          })
          .catch(err => console.log(err));
  };
  

  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
          style={styles.input}
          onChange={(e)=> setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          required
          style={styles.input}
          onChange={(e)=> setPassword(e.target.value)}
        />
        <button className='login-button'>Login</button>
        </form>
     
      
    </div>
  );
}

const styles = {
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Login;
