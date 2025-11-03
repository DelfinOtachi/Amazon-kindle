const express = require('express');
const galleryRouter = express.Router();
const { getGallery, uploadImage } = require('../controllers/galleryController');

galleryRouter.get('/', getGallery);
galleryRouter.post('/', uploadImage);
module.exports = galleryRouter;