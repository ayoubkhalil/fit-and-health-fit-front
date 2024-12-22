const User = require('../models/User');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Inscription
exports.signUp = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email déjà utilisé' });
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création de l'utilisateur
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Utilisateur créé avec succès' });
  } catch (err) {
    console.error("Erreur lors de l'inscription :", err);
    res.status(500).json({ message: 'Erreur du serveur', error: err.stack });
  }
};

// Fonction de connexion
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log(`Tentative de connexion pour l'utilisateur : ${username}`);

    // Recherche de l'utilisateur par son nom d'utilisateur
    const user = await User.findOne({ username });

    if (!user) {
      console.log(`Utilisateur avec le nom d'utilisateur ${username} non trouvé`);
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Vérification du mot de passe haché
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(`Mot de passe correct pour l'utilisateur ${username}: ${isMatch}`); // Log de la comparaison

    if (!isMatch) {
      console.log(`Mot de passe incorrect pour l'utilisateur : ${username}`);
      return res.status(400).json({ message: 'Mot de passe incorrect' });
    }

    // Génération du token JWT
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    console.log("Token généré pour l'utilisateur :", username);

    // Réponse avec le token et les informations de l'utilisateur
    res.status(200).json({
      token,
      user: { id: user._id, username: user.username, email: user.email },
    });
  } catch (err) {
    console.error("Erreur lors de la connexion :", err);
    res.status(500).json({ message: 'Erreur du serveur', error: err.message });
  }
};