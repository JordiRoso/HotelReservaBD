const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reserva', {
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
};
