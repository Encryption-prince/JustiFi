'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Case extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Case.init({
    case_number: {
      type: DataTypes.STRING,
      allowNull:false
    },
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.TEXT
    },
    status: {
      type: DataTypes.STRING,
      allowNull:false
    },
    lawyers: {
      type: DataTypes.JSON,
      allowNull:false
    },
    clients: {
      type: DataTypes.JSON,
      allowNull:false
    },
    filed_date: {
      type: DataTypes.DATE
    },
    closed_date: {
      type:DataTypes.DATE
    },
    verdict: {
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Case',
  });
  return Case;
};