'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PrecioTipoHabitacion extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    PrecioTipoHabitacion.init({
        id: {
            allowNull: false,
            autoIncrement: true,
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
        fecha_vigencia : {
            allowNull: false,
            type: DataTypes.DATEONLY
        },
        precio : {
            allowNull: false,
            type: DataTypes.DECIMAL(10,2)
        }
    }, {
        sequelize,
        modelName: 'PrecioTipoHabitacion',
        tableName: 'precios_tipo_habitacion',
        timestamps: false
    });
    return PrecioTipoHabitacion;
};