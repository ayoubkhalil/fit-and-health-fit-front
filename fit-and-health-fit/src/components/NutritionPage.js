import React from "react";

function NutritionPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Conseils Nutritionnels</h1>
      <div style={styles.card}>
        <p>
          Une alimentation équilibrée est essentielle pour rester en bonne santé et en forme. Voici
          quelques conseils pour une nutrition optimale :
        </p>
        <ul>
          <li>Mangez une variété d'aliments pour obtenir tous les nutriments nécessaires.</li>
          <li>Privilégiez les fruits, légumes, céréales complètes et protéines maigres.</li>
          <li>Limitez la consommation de sucre, de sel et de graisses saturées.</li>
          <li>Hydratez-vous suffisamment, buvez au moins 1,5 à 2 litres d'eau par jour.</li>
          <li>Évitez les repas rapides ou transformés autant que possible.</li>
        </ul>
        <p>
          N'oubliez pas : chaque individu a des besoins différents. Consultez un diététicien pour
          un plan personnalisé !
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f5fdf5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "24px",
    color: "#4caf50",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "500px",
    textAlign: "left",
    lineHeight: "1.6",
  },
};

export default NutritionPage;
