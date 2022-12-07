const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Reserva.init(sequelize, DataTypes);
}

class Reserva extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_in_hotel: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_out_hotel: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    money: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cliente',
        key: 'id'
      }
    },
    id_hotel: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'hotel',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'reserva',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_cliente",
        using: "BTREE",
        fields: [
          { name: "id_cliente" },
        ]
      },
      {
        name: "id_hotel",
        using: "BTREE",
        fields: [
          { name: "id_hotel" },
        ]
      },
    ]
  });
  }
}
