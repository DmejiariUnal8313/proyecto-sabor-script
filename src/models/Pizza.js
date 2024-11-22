const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pizza = sequelize.define('Pizza', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tamaño: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Pizza;