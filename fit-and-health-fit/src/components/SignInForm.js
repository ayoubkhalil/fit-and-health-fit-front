import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignInForm.css"; // Assurez-vous que ce chemin est correct

function SignInForm() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Gérer les changements de champ de formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gérer l'envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); // Réinitialiser le message avant chaque soumission

    // Validation basique du formulaire
    if (!formData.username || !formData.password) {
      setMessage("Veuillez remplir tous les champs");
      setLoading(false);
      return;
    }

    try {
      console.log("Données envoyées : ", formData); // Vérification des données envoyées
      const response = await fetch("https://fit-and-health-fit-front-1.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Réponse du serveur : ", data); // Vérification de la réponse du serveur

      if (response.ok) {
        setMessage("Connexion réussie !");
        
        // Stockage du token JWT dans localStorage
        localStorage.setItem("authToken", data.token);

        // Rediriger avec l'ID de l'utilisateur dans l'URL
        setTimeout(() => {
          navigate(`/lifestyle/${data.user.id}`); // Redirection avec l'ID dans l'URL
        }, 1500);
      } else {
        // Gestion des erreurs serveur
        setMessage(data.message || "Identifiants incorrects");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setMessage("Erreur de connexion au serveur. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="image-section">
        {/* Assurez-vous que l'import de l'image est correct */}
        <img src={require("../assets/fitness.jpg")} alt="Fitness" className="fitness-image" />
      </div>
      <div className="form-section">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Chargement..." : "Next"}
          </button>
        </form>
        <a href="/signup">S'inscrire</a>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default SignInForm;
