var DataTypes = require("sequelize").DataTypes;
var _cliente = require("./cliente");
var _hotel = require("./hotel");
var _reserva = require("./reserva");

function initModels(sequelize) {
  var cliente = _cliente(sequelize, DataTypes);
  var hotel = _hotel(sequelize, DataTypes);
  var reserva = _reserva(sequelize, DataTypes);

  reserva.belongsTo(cliente, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  cliente.hasMany(reserva, { as: "reservas", foreignKey: "id_cliente"});
  reserva.belongsTo(hotel, { as: "id_hotel_hotel", foreignKey: "id_hotel"});
  hotel.hasMany(reserva, { as: "reservas", foreignKey: "id_hotel"});

  return {
    cliente,
    hotel,
    reserva,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
