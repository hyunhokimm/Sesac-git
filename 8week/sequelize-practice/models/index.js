const Sequelize = require('sequelize');
const config = require('../config/config.json')['development'];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.userModel = require('./userModel')(sequelize, Sequelize);
db.productModel = require('./productModel')(sequelize, Sequelize);

module.exports = db;
