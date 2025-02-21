'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserCases.init({
    user_id:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
    cases:  {
      type:DataTypes.JSON,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'UserCases',
  });
  return UserCases;
};