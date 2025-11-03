// models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // assumes you have a User model
        required: true,
    },
    name: String,
    email: String,
    phone: String,
    guests: Number,
    date: String,
    time: String,
    specialRequest: String,
}, { timestamps: true });

module.exports = mongoose.model('Reservation', reservationSchema);