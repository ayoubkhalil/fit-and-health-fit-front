const mongoose = require('mongoose');

const LifestyleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Référence à User
  waterUsage: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  skinType: { type: String, required: true },
  activityLevel: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Lifestyle', LifestyleSchema);
