// 📁 routes/offerRoutes.js
const express = require('express');
const router = express.Router();
const { getOffers, createOffer } = require('../controllers/offerController');
const { protect } = require('../middleware/authMiddleware');



router.get('/', getOffers);
router.post('/', createOffer);

module.exports = router;
module.exports = router;