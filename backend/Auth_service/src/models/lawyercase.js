'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LawyerCase extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LawyerCase.init({
    lawyer_id: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    cases: {
      type:DataTypes.JSON,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'LawyerCase',
  });
  return LawyerCase;
};