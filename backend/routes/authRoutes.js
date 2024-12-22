const express = require('express');
const router = express.Router();
const { signUp, login } = require('../controllers/authController');

// Route pour l'inscription
router.post('/signup', signUp);

// Route pour la connexion
router.post('/login', login);

module.exports = router;
