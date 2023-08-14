'use strict'
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Huesped extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    Huesped.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        tipoDocumento: {
            allowNull: false,
            type: DataTypes.STRING
          },
          nroDocumento: {
            allowNull: false,
            type: DataTypes.STRING
          },
          nombre: {
            allowNull: false,
            type: DataTypes.STRING
        },
        apellido: {
            allowNull: false,
            type: DataTypes.STRING
          },
          password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        fecNac: {
            allowNull: false,
            type: DataTypes.DATE
        },
        telefono: {
            allowNull: false,
            type: DataTypes.STRING
          },
          email: {
            allowNull: false,
            type: DataTypes.STRING
          }
    }, {
        sequelize,
        modelName: 'Huesped',
        tableName: 'huespedes',
        timestamps: false
    });
    return Huesped;
};