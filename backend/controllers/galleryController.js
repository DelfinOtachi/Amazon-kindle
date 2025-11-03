const GalleryImage = require('../models/GalleryImage');

exports.getGallery = async(req, res) => {
    try {
        const images = await GalleryImage.find();
        res.json(images);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch gallery' });
    }
};

exports.uploadImage = async(req, res) => {
    try {
        const image = new GalleryImage(req.body);
        await image.save();
        res.status(201).json({ message: 'Image uploaded successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to upload image' });
    }
};