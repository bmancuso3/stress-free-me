const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Survey extends Model {}

Survey.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    sleep_quality: {
      type: DataTypes.ENUM(1,2,3,4,5),
      allowNull: false,
    },
    headaches: {
      type: DataTypes.ENUM(1,2,3,4,5),
    },
    performance: {
      type: DataTypes.ENUM(1,2,3,4,5),
      allowNull: false,
    },
    workload: {
      type: DataTypes.ENUM(1,2,3,4,5),
      allowNull: false,
    },
    hobbies: {
      type: DataTypes.ENUM(1,2,3,4,5),
      allowNull: false,
    },
    stress: {
      type: DataTypes.ENUM(1,2,3,4,5),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'survey',
  }
);

module.exports = Survey;
//The user can only choose from 1 to 5 on their survey