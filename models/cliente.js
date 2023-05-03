const { DataTypes, Model } = require("sequelize");
const db = require("../db/db");

class Cliente extends Model {}

Cliente.init(
  {
    cliente: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        agrs: true,
        msg: "El NOMBRE del cliente debe ser unico ",
      },

      validate: {
        is: {
          args: /^[a-zA-Z\s.]+$/,
          msg: "El nombre del cliente solo puede contener letras y numeros, NO SIMBOLOS ",
        },
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      allowEmpty: true,
      unique: {
        agrs: true,
        msg: "El EMAIL del CLIENTE debe ser unico ",
      },
      validate: {
        isEmail: {
          args: true,
          msg: "Debe ser un EMAIL VALIDO",
        },
      },
    },
  },
  {
    sequelize: db,
    modelName: "clientes",
  }
);

module.exports = Cliente;
