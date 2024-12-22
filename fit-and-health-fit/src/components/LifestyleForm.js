import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importation du hook useNavigate
import "./../styles/LifestyleForm.css"; // Importation du fichier CSS
import yogaImage from "../assets/yoga.jpg";

function LifestyleForm() {
  const [formData, setFormData] = useState({
    water: "1.5L",
    weight: "",
    height: "",
    skin: "",
    activity: "",
  });

  const navigate = useNavigate(); // Déclaration de navigate

  // Supposons que tu as l'ID de l'utilisateur
  const userId = "67672a0bd83d9f0b017a874b"; // Remplace par l'ID réel de l'utilisateur

  // Mise à jour des données du formulaire à chaque modification
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Fonction de gestion de l'envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Vérification que les champs sont remplis
    if (!formData.weight || !formData.height || !formData.skin || !formData.activity) {
      alert("Veuillez remplir tous les champs !");
      return;
    }

    // Redirection vers la page "choices" avec les données du formulaire dans l'URL
    navigate(`/choices/${userId}`, { state: { ...formData } });
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h1>Lifestyle parameters</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="water">Water usage</label>
            <select
              id="water"
              name="water"
              value={formData.water}
              onChange={handleChange}
            >
              <option value="1.5L">1.5L</option>
              <option value="2.0L">2.0L</option>
              <option value="2.25L">2.25L</option>
              <option value="3.0L">3.0L</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight</label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Enter your weight"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="height">Height</label>
            <input
              type="number"
              id="height"
              name="height"
              placeholder="Enter your height"
              value={formData.height}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="skin">What's your skin type</label>
            <input
              type="text"
              id="skin"
              name="skin"
              placeholder="Enter your skin type"
              value={formData.skin}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="activity">What's your activity level</label>
            <input
              type="text"
              id="activity"
              name="activity"
              placeholder="Enter your activity level"
              value={formData.activity}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Next</button>
        </form>
      </div>
      <div className="form-image">
        <img src={yogaImage} alt="Yoga" />
      </div>
    </div>
  );
}

export default LifestyleForm;
