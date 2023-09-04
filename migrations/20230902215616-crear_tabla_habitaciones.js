'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('habitaciones', {
			numero: {
				allowNull: false,
				autoIncrement: false,
				primaryKey: true,
				type: Sequelize.DataTypes.INTEGER
			},
			id_tipo_habitacion: {
				allowNull: false,
				type: Sequelize.DataTypes.INTEGER,
				references: {
					model: {
					  tableName: 'tipos_habitacion',
					},
					key: 'id'
				},
			},
		});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('habitaciones');
  }
};
