const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pizzeria', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;