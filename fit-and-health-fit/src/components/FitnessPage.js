import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Importation de useParams

function FitnessPage() {
  const { userId } = useParams();  // Récupère l'ID utilisateur via l'URL
  const [lifestyleData, setLifestyleData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Effectuer la requête pour récupérer les données
    fetch(`http://localhost:5000/api/lifestyle/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setLifestyleData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur de récupération des données", error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (!lifestyleData) {
    return <p>Erreur: Aucune donnée trouvée pour cet utilisateur.</p>;
  }

  // Calculer le poids idéal en fonction de la taille et du niveau d'activité
  const calculateIdealWeight = (height, activityLevel) => {
    let idealWeight = 0;
    if (height && activityLevel) {
      if (activityLevel.toLowerCase() === "high") {
        idealWeight = height - 100 + 5; // Poids idéal pour une activité élevée
      } else if (activityLevel.toLowerCase() === "low") {
        idealWeight = height - 100; // Poids idéal pour une activité faible
      }
    }
    return idealWeight;
  };

  const idealWeight = calculateIdealWeight(lifestyleData.height, lifestyleData.activityLevel);

  return (
    <div className="fitness-container">
      <h1>Fitness</h1>
      <div className="lifestyle-summary">
        <p><strong>Poids actuel:</strong> {lifestyleData.weight} kg</p>
        <p><strong>Poids idéal:</strong> {idealWeight} kg</p>
        <p><strong>Usage d'eau:</strong> {lifestyleData.waterUsage}</p>
        <p><strong>Type de peau:</strong> {lifestyleData.skinType}</p>
        <p><strong>Niveau d'activité:</strong> {lifestyleData.activityLevel}</p>
      </div>
    </div>
  );
}

export default FitnessPage;
