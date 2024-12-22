import React from "react";

function SkincarePage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Soins de la Peau</h1>
      <div style={styles.card}>
        <p>
          Une peau saine nécessite une routine adaptée à votre type de peau. Voici quelques conseils
          pour prendre soin de votre peau :
        </p>
        <ul>
          <li>Nettoyez votre visage quotidiennement avec un produit doux.</li>
          <li>Utilisez une crème hydratante adaptée à votre type de peau.</li>
          <li>Appliquez un écran solaire avec un SPF d'au moins 30.</li>
          <li>Buvez beaucoup d'eau pour rester hydraté(e).</li>
          <li>Adoptez une alimentation riche en vitamines et minéraux.</li>
        </ul>
        <p>
          Votre type de peau :
          <strong> Normal, Mixte, Grasse ou Sèche </strong> ? Adaptez vos soins en conséquence !
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
    backgroundColor: "#fffbf5",
    minHeight: "100vh",
  },
  title: {
    fontSize: "24px",
    color: "#ff8c42",
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

export default SkincarePage;
