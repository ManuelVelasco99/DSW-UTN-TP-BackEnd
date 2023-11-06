'use strict';
const {
  Model
} = require('sequelize');

const Reserva = require('./Reserva');

module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reserva.hasOne(models.Huesped, { 
        foreignKey: "id", 
        sourceKey: "id_huesped",
        as: 'huesped'
    });
    Reserva.hasOne(models.Habitacion, { 
      foreignKey: "numero", 
      sourceKey: "numero_habitacion",
      as: 'habitacion'
  });
    }
  }

  Reserva.init(
  {
    id:  {
				allowNull: false,
				autoIncrement: false,
				primaryKey: true,
				type: DataTypes.INTEGER
			  },
			  id_huesped: {
				allowNull: false,
				type: DataTypes.INTEGER,
				references: {
					model: {
					  tableName: 'huespedes',
					  },
					key: 'id'
          }
				},
        numero_habitacion: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references:{
            model: {
            tableName: 'habitaciones',
          },
          key:'numero'
        },
        fecha_desde: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: DataTypes.DATE
        },
        fecha_hasta: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: DataTypes.DATE
        },
        fecha_pago: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: DataTypes.DATE
        },
        fecha_creacion: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: DataTypes.DATE
        },
        monto: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: DataTypes.FLOAT
        },
        estado: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: DataTypes.ENUM('PENDIENTE', 'PAGADA', 'CANCELADA')
        },
      },
  },
  {
    sequelize,
    modelName: 'Reserva',
    tableName: 'reservas',
    timestamps: false
  });
  return Reserva;
};