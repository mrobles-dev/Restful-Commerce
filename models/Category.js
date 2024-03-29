const { Model, DataTypes, INTEGER , STRING} = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id:{
      type: INTEGER,
      allowNULL:false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name:{
      type: STRING,
      allowNull: false
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
