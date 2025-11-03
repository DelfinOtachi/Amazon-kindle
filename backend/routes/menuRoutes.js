const express = require('express');
const menuRouter = express.Router();
const { getMenus, createMenu } = require('../controllers/menuController');
const { protect } = require('../middleware/authMiddleware');


menuRouter.get('/', getMenus);
menuRouter.post('/', createMenu);

module.exports = menuRouter;