const express = require('express');
const openingHourRouter = express.Router();
const { getOpeningHours, setOpeningHour } = require('../controllers/openingHourController');
const { protect } = require('../middleware/authMiddleware');


openingHourRouter.get('/', getOpeningHours);
openingHourRouter.post('/', setOpeningHour);
module.exports = openingHourRouter;