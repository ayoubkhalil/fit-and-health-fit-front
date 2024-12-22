import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUpPage.css';

function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Utilisation du hook useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fit-and-health-fit-front-1.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage('Inscription réussie !');
        setFormData({ username: '', email: '', password: '' });

        // Redirection vers la page de connexion après l'inscription réussie
        setTimeout(() => {
          navigate('/signin');
        }, 1500);  // Attendre 1.5 secondes avant la redirection pour que l'utilisateur voie le message
      } else {
        setMessage(data.message || 'Erreur lors de l\'inscription.');
      }
    } catch (error) {
      setMessage('Erreur du serveur');
    }
  };

  const handleGoToSignIn = () => {
    // Redirection vers la page de connexion sans attendre l'inscription
    navigate('/signin');
  };

  return (
    <div className="sign-up-page">
      <div className="image-section">
        <img src={require('../assets/work.jpg')} alt="Work" className="work-image" />
      </div>
      <div className="form-section">
        <h2>Sign Up</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="button-common">Confirmer</button>
          <button onClick={handleGoToSignIn} className="button-common">Se connecter</button> {/* Bouton pour aller à la page de connexion */}
        {message && <p>{message}</p>}
        </form>
        
      </div>
    </div>
  );
}

export default SignUpPage;
