// 📁 controllers/occasionController.js
const Occasion = require('../models/Occasion');

exports.getOccasions = async(req, res) => {
    try {
        const occasions = await Occasion.find();
        res.json(occasions);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch occasions' });
    }
};

exports.createOccasion = async(req, res) => {
    try {
        const occasion = new Occasion(req.body);
        await occasion.save();
        res.status(201).json({ message: 'Occasion created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create occasion' });
    }
};