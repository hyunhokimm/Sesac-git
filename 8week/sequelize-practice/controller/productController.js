const { productModel } = require('../models/index');

exports.createProduct = (req, res) => {
  console.log(req.body);
  const { productName, price, count, comment } = req.body;
  productModel
    .create({
      productName,
      productCount: count,
      productPrice: price,
      productComment: comment,
    })
    .then((result) => {
      res.send({ product: result.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
