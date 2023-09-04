'use strict';
const {
    Model
} = require('sequelize');

const TipoHabitacion = require('./TipoHabitacion');

module.exports = (sequelize, DataTypes) => {

    let TipoHabitacion = require("./TipoHabitacion");

    class Habitacion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Habitacion.hasOne(models.TipoHabitacion, { 
                foreignKey: "id", // change column name
                sourceKey: "id_tipo_habitacion",
                as: 'tipoHabitacion'
            });
        }
    }
    Habitacion.init({
        numero: {
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        id_tipo_habitacion: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: {
                  tableName: 'tipos_habitacion',
                },
                key: 'id'
            },
        },
    }, {
        sequelize,
        modelName: 'Habitacion',
        tableName: 'habitaciones',
        timestamps: false
    });

    //Habitacion.hasOne(TipoHabitacion);
    return Habitacion;
};