const OpeningHour = require('../models/OpeningHour');

exports.getOpeningHours = async(req, res) => {
    try {
        const hours = await OpeningHour.find();
        res.json(hours);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch opening hours' });
    }
};

exports.setOpeningHour = async(req, res) => {
    try {
        const hour = new OpeningHour(req.body);
        await hour.save();
        res.status(201).json({ message: 'Opening hour set successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to set opening hour' });
    }
};