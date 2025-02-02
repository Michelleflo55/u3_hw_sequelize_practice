'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Age extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Age.init({
    personName: DataTypes.INTEGER,
    dogAge: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Age',
    tableName: 'age'
  });
  return Age;
};