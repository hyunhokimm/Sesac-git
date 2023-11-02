const express = require('express');
const { createProduct } = require('../controller/productController');
const productRoute = express.Router();

productRoute.post('/create', (req, res) => {
  createProduct(req, res);
});

module.exports = productRoute;
