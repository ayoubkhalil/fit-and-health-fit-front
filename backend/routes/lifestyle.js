const express = require('express');
const router = express.Router();
const Lifestyle = require('../models/Lifestyle');

// Endpoint pour récupérer les données lifestyle de l'utilisateur
router.get('/:userId', async (req, res) => {
  try {
    const lifestyle = await Lifestyle.findOne({ userId: req.params.userId });
    if (!lifestyle) {
      return res.status(404).json({ message: 'Aucune donnée Lifestyle trouvée pour cet utilisateur.' });
    }
    res.status(200).json(lifestyle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
});

// Endpoint pour enregistrer les données lifestyle
router.post('/add', async (req, res) => {
  try {
    const { waterUsage, weight, height, skinType, activityLevel, userId } = req.body;

    // Validation simple
    if (!waterUsage || !weight || !height || !skinType || !activityLevel || !userId) {
      return res.status(400).json({ message: 'Tous les champs sont requis.' });
    }

    // Création d'un nouvel enregistrement
    const newLifestyle = new Lifestyle({
      waterUsage,
      weight,
      height,
      skinType,
      activityLevel,
      userId,  // Enregistrement de l'ID utilisateur
    });

    // Sauvegarde dans MongoDB
    await newLifestyle.save();
    res.status(201).json({ message: 'Données enregistrées avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur serveur.' });
  }
});

module.exports = router;
