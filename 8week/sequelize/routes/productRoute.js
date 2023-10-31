const express = require('express');
const { productCreate } = require('../controller/productController');
const productRouter = express.Router();

productRouter.post('/create', (req, res) => {
  productCreate(req, res);
});

module.exports = productRouter;
