const DataTypes = require("sequelize").DataTypes;
const _Cliente = require("./cliente");
const _Hotel = require("./hotel");
const _Reserva = require("./reserva");

function initModels(sequelize) {
  const Cliente = _Cliente(sequelize, DataTypes);
  const Hotel = _Hotel(sequelize, DataTypes);
  const Reserva = _Reserva(sequelize, DataTypes);

  Reserva.belongsTo(Cliente, { as: "id_cliente_cliente", foreignKey: "id_cliente"});
  Cliente.hasMany(Reserva, { as: "reservas", foreignKey: "id_cliente"});
  Reserva.belongsTo(Hotel, { as: "id_hotel_hotel", foreignKey: "id_hotel"});
  Hotel.hasMany(Reserva, { as: "reservas", foreignKey: "id_hotel"});

  return {
    Cliente,
    Hotel,
    Reserva,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
