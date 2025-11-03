const mongoose = require('mongoose');

const openingHourSchema = new mongoose.Schema({
    day: {
        type: String,
        required: true,
        enum: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday'
        ]
    },
    // e.g., Monday
    openTime: {
        type: String,
        required: true
    }, // e.g., 08:00 AM
    closeTime: {
        type: String,
        required: true
    }, // e.g., 10:00 PM
    isClosed: { type: Boolean, default: false }
});

module.exports = mongoose.model('OpeningHour', openingHourSchema);