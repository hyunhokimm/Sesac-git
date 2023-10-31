const { userModel } = require('../models');

exports.userCreate = (req, res) => {
  console.log(req.body);
  const { userId, password, username } = req.body;
  userModel
    .create({
      userId,
      password,
      username,
    })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
