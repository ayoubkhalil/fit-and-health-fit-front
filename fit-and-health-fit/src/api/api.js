const API_URL = 'https://fit-and-health-fit-front-1.onrender.com'; // Base URL de votre backend

// Fonction pour les appels API génériques
const request = async (endpoint, method = 'GET', body = null, headers = {}) => {
  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Erreur inconnue');
    }
    return data;
  } catch (error) {
    console.error('Erreur API:', error.message);
    throw error;
  }
};

// Exemple : Appel API pour l'inscription d'un utilisateur
export const signUpUser = (userData) => {
  return request('/auth/signup', 'POST', userData);
};

// Exemple : Appel API pour la connexion d'un utilisateur
export const loginUser = (userData) => {
  return request('/auth/login', 'POST', userData);
};

// Exemple : Récupérer des données utilisateur (GET)
export const getUserProfile = (userId) => {
  return request(`/users/${userId}`);
};
