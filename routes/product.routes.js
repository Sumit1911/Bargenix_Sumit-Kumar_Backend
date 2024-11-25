// routes/product.routes.js

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controller');

// Route to add a new product
router.post('/addProducts', ProductController.addProduct);

module.exports = router;
