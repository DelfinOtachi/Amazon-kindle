// 📁 controllers/offerController.js
const Offer = require('../models/Offer');

exports.getOffers = async(req, res) => {
    try {
        const offers = await Offer.find();
        res.json(offers);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch offers' });
    }
};

exports.createOffer = async(req, res) => {
    try {
        const { title, discountPercentage, description, validFrom, validTo, image } = req.body;

        const offer = new Offer({
            title,
            discountPercentage,
            description,
            validFrom,
            validTo,
            image,
        });

        await offer.save();

        res.status(201).json({ message: 'Offer created successfully' });
    } catch (error) {
        console.error('❌ Offer creation failed:', error.message, error.stack); // Make sure this is here
        res.status(500).json({ error: 'Failed to create offer' });
    }
};