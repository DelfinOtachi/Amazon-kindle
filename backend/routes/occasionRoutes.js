const express = require('express');
const occasionRouter = express.Router();
const { getOccasions, createOccasion } = require('../controllers/occasionController');
const { protect } = require('../middleware/authMiddleware');


occasionRouter.get('/', getOccasions);
occasionRouter.post('/', createOccasion);
module.exports = occasionRouter;