const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Cliente.init(sequelize, DataTypes);
}

class Cliente extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(120),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cliente',
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
    ]
  });
  }
}
