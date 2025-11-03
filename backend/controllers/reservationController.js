// controllers/reservationController.js
const Reservation = require('../models/Reservation');

exports.createReservation = async(req, res) => {
    try {
        const reservation = new Reservation({
            ...req.body,
            user: req.user._id, // from auth middleware
        });
        await reservation.save();
        res.status(201).json({ message: 'Reservation created successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create reservation' });
    }
};

exports.getUserReservations = async(req, res) => {
    try {
        const reservations = await Reservation.find({ user: req.user._id });
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch reservations' });
    }
};