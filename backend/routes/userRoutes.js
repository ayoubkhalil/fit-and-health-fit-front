const express = require('express');
const { signUp, login } = require('../controllers/authController');
const router = express.Router();

// Route pour l'inscription
router.post('/signup', signUp);

// Route pour la connexion
router.post('/login', login);

module.exports = router;
