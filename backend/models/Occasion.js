const mongoose = require('mongoose');

const occasionSchema = new mongoose.Schema({
    title: String, // e.g., Birthday, Anniversary
    description: String,
    image: String,
    date: Date,
    location: String,
    isAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model('Occasion', occasionSchema);