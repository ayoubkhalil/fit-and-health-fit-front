import React from 'react';
import { useParams, Link } from 'react-router-dom';  // Importe useParams et Link de react-router-dom
import '../styles/Choices.css';

// Importation des images
import fitImage from '../assets/fit.jpg';
import skincareImage from '../assets/skincare.jpg';
import nutritionImage from '../assets/nutrition.jpg';

function Choices() {
  const { userId } = useParams();  // Récupération de l'ID de l'utilisateur depuis l'URL

  return (
    <div className="choices">
      <h2>Choose a Category</h2>
      <div className="categories">
        <div className="category">
          <img src={fitImage} alt="Fitness" className="category-image" />
          {/* Ajouter l'ID utilisateur dans le lien */}
          <Link to={`/fitness/${userId}`}>
            <button className="category-btn">Fitness</button>
          </Link>
        </div>
        <div className="category">
          <img src={skincareImage} alt="Skincare" className="category-image" />
          {/* Ajouter l'ID utilisateur dans le lien */}
          <Link to={`/skincare/${userId}`}>
            <button className="category-btn">Skincare</button>
          </Link>
        </div>
        <div className="category">
          <img src={nutritionImage} alt="Nutrition" className="category-image" />
          {/* Ajouter l'ID utilisateur dans le lien */}
          <Link to={`/nutrition/${userId}`}>
            <button className="category-btn">Nutrition</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Choices;
