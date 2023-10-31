const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

let sequelize;

sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.userModel = require('./userModel')(sequelize, Sequelize);
db.productModel = require('./productModel')(sequelize, Sequelize);

module.exports = db;
