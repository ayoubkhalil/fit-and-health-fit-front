const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const lifestyleRoutes = require('./routes/lifestyle');

dotenv.config();  // Charger les variables d'environnement

const app = express();
app.use(cors());  // Activer CORS pour permettre les requêtes depuis le frontend
app.use(express.json());  // Pour parser le JSON dans les requêtes

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Base de données connectée'))
  .catch(err => console.error('Erreur de connexion :', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/lifestyle', lifestyleRoutes);

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
