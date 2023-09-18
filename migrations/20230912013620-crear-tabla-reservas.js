'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('reservas', {
			id: {
				allowNull: false,
				autoIncrement: false,
				primaryKey: true,
				type: Sequelize.DataTypes.INTEGER
			},
			id_huesped: {
				allowNull: false,
				type: Sequelize.DataTypes.INTEGER,
				references: {
					model: {
					  tableName: 'huespedes',
					},
					key: 'id'
				},
        numero_habitacion: {
          allowNull: false,
          type: Sequelize.DataTypes.INTEGER,
          references:{
            tableName: 'habitaciones',
          },
          key:'numero'
        },
        fecha_desde: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: Sequelize.DataTypes.DATE
        },
        fecha_hasta: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: Sequelize.DataTypes.DATE
        },
        fecha_pago: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: Sequelize.DataTypes.DATE
        },
        fecha_creacion: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: Sequelize.DataTypes.DATE
        },
        monto: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: Sequelize.DataTypes.FLOAT
        },
        estado: {
          allowNull: false,
          autoIncrement: false,
          primaryKey: false,
          type: Sequelize.DataTypes.ENUM
        },
			},
		});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('reservas');
  }
};
