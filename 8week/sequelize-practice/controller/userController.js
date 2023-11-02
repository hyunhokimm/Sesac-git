const { userModel } = require('../models');

exports.userCreate = (req, res) => {
  const { userId, password, userName } = req.body;
  userModel
    .create({
      userId,
      password,
      username: userName,
    })
    .then((result) => {
      console.log(result.dataValues);
      res.send({ user: result.dataValues });
    })
    .catch((err) => {
      res.send(err);
    });
};
