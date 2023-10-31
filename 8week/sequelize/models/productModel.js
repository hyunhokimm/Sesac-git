function productModel(Sequelize, DataTypes) {
  return Sequelize.define(
    'product',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      productName: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      comment: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
    },
    {
      tableName: 'product',
      ...Sequelize,
    }
  );
}

module.exports = productModel;
