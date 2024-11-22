const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pizza = require('./Pizza');
const Bebida = require('./Bebida');
const Factura = require('./Factura');

const Pedido = sequelize.define('Pedido', {
  cliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Relaciones
Pedido.belongsToMany(Pizza, { through: 'PedidoPizzas' });
Pedido.belongsToMany(Bebida, { through: 'PedidoBebidas' });
Pedido.belongsTo(Factura);

module.exports = Pedido;