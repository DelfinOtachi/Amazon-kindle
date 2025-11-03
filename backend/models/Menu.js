// models/Menu.js
const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: Number,
    image: String,
    calories: Number,
    dietaryInfo: [String]
});

const menuSchema = new mongoose.Schema({
    category: { type: String, required: true },
    items: [menuItemSchema]
});

module.exports = mongoose.model('Menu', menuSchema);