const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    caption: String,
    uploadedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('GalleryImage', galleryImageSchema);