const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');

require('dotenv').config();


const offerRoutes = require('./routes/offerRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const occasionRoutes = require('./routes/occasionRoutes');
const openingHourRoutes = require('./routes/openingHourRoutes');
const galleryRoutes = require('./routes/galleryRoutes');
const menuRoutes = require('./routes/menuRoutes'); // if not yet added
const authRoutes = require('./routes/authRoutes');
const reservationRoutes = require('./routes/reservations');

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

connectDB();

// Routes
app.use('/api/offers', offerRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/occasions', occasionRoutes);
app.use('/api/opening-hours', openingHourRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/menus', menuRoutes); // Add this line if you have the menu routes created
app.use('/api/auth', authRoutes);
app.use('/api', reservationRoutes);



// Default route
app.get('/', (req, res) => {
    res.send('Restaurant Booking API is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});