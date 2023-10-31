const { productModel } = require('../models/index');

exports.productCreate = (req, res) => {
  const { productName, price, count, comment } = req.body.data;

  productModel
    .create({
      productName,
      count,
      price,
      comment,
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
