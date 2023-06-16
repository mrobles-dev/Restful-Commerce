const { Model, DataTypes, STRING, INTEGER } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: INTEGER,
      allowNULL: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name:{
      type: STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
