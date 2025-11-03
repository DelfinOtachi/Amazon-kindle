// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const { getAllReviews, createReview, deleteReview } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');


// GET /api/reviews
router.get('/', getAllReviews);

// POST /api/reviews
router.post('/', protect, createReview);

// DELETE /api/reviews/:id
router.delete('/:id', deleteReview);

module.exports = router;