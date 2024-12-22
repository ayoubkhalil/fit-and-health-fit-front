import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css"; // Assurez-vous de styliser ce fichier
import healthImage from "../assets/health.jpg"; // Image d'accompagnement
import chartIcon from "../assets/chart-icon.png"; // Icône pour les calories
import heartIcon from "../assets/heart-icon.png"; // Icône pour le rythme cardiaque

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [caloriesIdeal, setCaloriesIdeal] = useState(null);
  const [poidsIdeal, setPoidsIdeal] = useState(null);

  // Récupérer les données utilisateur depuis le backend
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/lifestyle/user");
        const data = await response.json();
        setUserData(data);

        // Calculer le poids idéal et les calories idéales
        const idealWeight = calculatePoidsIdeal(data.height, data.gender);
        const idealCalories = calculateCaloriesIdeal(
          data.weight,
          data.height,
          data.age,
          data.gender,
          data.activityLevel
        );

        setPoidsIdeal(idealWeight.toFixed(2));
        setCaloriesIdeal(idealCalories.toFixed(2));
      } catch (error) {
        console.error("Erreur lors de la récupération des données utilisateur :", error);
      }
    };

    fetchUserData();
  }, []);

  // Calcul du poids idéal (Lorentz)
  const calculatePoidsIdeal = (height, gender) => {
    if (gender === "male") {
      return height - 100 - (height - 150) / 4;
    } else {
      return height - 100 - (height - 150) / 2;
    }
  };

  // Calcul des calories idéales (Harris-Benedict)
  const calculateCaloriesIdeal = (weight, height, age, gender, activityLevel) => {
    let mb = 0;
    if (gender === "male") {
      mb = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      mb = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    const activityFactors = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      intense: 1.725,
      "very intense": 1.9,
    };

    return mb * (activityFactors[activityLevel] || 1.2);
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <img src={healthImage} alt="HealthWave Logo" className="logo" />
        <div className="tagline">THE BEST HEALTH CARE SITEWEB IN TUNISIA</div>
      </header>
      <main className="dashboard-main">
        {/* Section de bienvenue */}
        <section className="welcome-section">
          <h1>Welcome, {userData.name}!</h1>
          <p>Have a good day!</p>
          <p><strong>Your Ideal Weight:</strong> {poidsIdeal} kg</p>
          <p><strong>Your Ideal Daily Calories:</strong> {caloriesIdeal} kcal</p>
        </section>

        {/* Section des statistiques */}
        <section className="stats-section">
          <div className="calories-burned">
            <img src={chartIcon} alt="Calories Icon" />
            <p>Calories burned</p>
            <h2>{userData.caloriesBurned || 0} Kcal</h2>
          </div>
          <div className="heart-rate">
            <img src={heartIcon} alt="Heart Rate Icon" />
            <p>Heart Rate</p>
            <h2>{userData.heartRate || 0} bpm</h2>
          </div>
        </section>

        {/* Section des médicaments */}
        <section className="medications-section">
          <h3>Medications</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Dosage</th>
                <th>Timing</th>
                <th>Taken</th>
              </tr>
            </thead>
            <tbody>
              {userData.medications && userData.medications.length > 0 ? (
                userData.medications.map((med, index) => (
                  <tr key={index}>
                    <td>{med.name}</td>
                    <td>{med.dosage}</td>
                    <td>{med.timing}</td>
                    <td><input type="checkbox" checked={med.taken} readOnly /></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No medications found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
