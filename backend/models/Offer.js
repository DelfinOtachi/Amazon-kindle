const mongoose = require('mongoose');

const offerSchema = new mongoose.Schema({
    title: String,
    description: String,
    discountPercentage: Number,
    validFrom: Date,
    validTo: Date,
    image: String
});

module.exports = mongoose.model('Offer', offerSchema);