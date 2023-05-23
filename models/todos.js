'use strict';
const {
  Model
} = require('sequelize');
const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Todos.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isCompleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      get() { return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss'); },
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      get() { return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss'); },
    },
    deletedAt: {
      type: DataTypes.DATE,
      get() { return moment(this.getDataValue('deletedAt')).format('YYYY-MM-DD HH:mm:ss'); },
    }
  }, {
    sequelize,
    paranoid: true,
    timestamps: true,
    modelName: 'Todos',
  });
  return Todos;
};