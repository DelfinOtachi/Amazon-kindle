// controllers/reviewController.js

const Review = require('../models/Review');

// @desc    Get all reviews
// @route   GET /api/reviews
exports.getAllReviews = async(req, res) => {
    try {
        const reviews = await Review.find();
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

// @desc    Create a review
// @route   POST /api/reviews
exports.createReview = async(req, res) => {
    try {
        const { name, rating, comment } = req.body;

        const newReview = new Review({ name, rating, comment });
        const savedReview = await newReview.save();

        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: 'Error creating review', error });
    }
};

// @desc    Delete a review
// @route   DELETE /api/reviews/:id
exports.deleteReview = async(req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id);

        if (!review) {
            return res.status(404).json({ message: 'Review not found' });
        }

        res.status(200).json({ message: 'Review deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting review', error });
    }
};