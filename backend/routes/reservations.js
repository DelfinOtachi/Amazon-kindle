const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    createReservation,
    getUserReservations
} = require('../controllers/reservationController');

router.post('/reservations', protect, createReservation);
router.get('/my-reservations', protect, getUserReservations);

module.exports = router;