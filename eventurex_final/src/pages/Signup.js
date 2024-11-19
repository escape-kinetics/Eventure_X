import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/register", { name, email, password })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Welcome to EventureX</h2>
            <p style={styles.subheading}>Sign up to create and manage events easily!</p>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label}>Name:</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    style={styles.input}
                    onChange={(e) => setName(e.target.value)}
                />
                <label style={styles.label}>Email:</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    style={styles.input}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label style={styles.label}>Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    required
                    style={styles.input}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button style={styles.button}>Register</button>
            </form>
            <p style={styles.footerText}>Already have an account?</p>
            <center>
                <Link to="/login" style={styles.linkButton}>Login</Link>
            </center>
        </div>
    );
}

const styles = {
    container: {
        maxWidth: '450px',
        margin: '0 auto',
        padding: '40px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        transition: 'box-shadow 0.3s ease',
    },
    heading: {
        textAlign: 'center',
        fontSize: '32px',
        fontWeight: '700',
        color: '#007BFF',
        marginBottom: '15px',
    },
    subheading: {
        textAlign: 'center',
        fontSize: '18px',
        color: '#555',
        marginBottom: '30px',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    label: {
        fontSize: '16px',
        color: '#333',
        fontWeight: '500',
    },
    input: {
        padding: '12px',
        fontSize: '16px',
        border: '2px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        transition: 'border-color 0.3s ease, background-color 0.3s ease',
    },
    inputFocus: {
        borderColor: '#007BFF',
        backgroundColor: '#fff',
    },
    button: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
        transform: 'scale(1.05)',
    },
    footerText: {
        textAlign: 'center',
        color: '#555',
        fontSize: '16px',
        marginTop: '20px',
    },
    linkButton: {
        color: '#007BFF',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '600',
        transition: 'color 0.3s ease',
    },
};

export default Signup;
