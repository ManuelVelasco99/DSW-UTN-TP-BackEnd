'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.createTable('tipos_habitacion', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.DataTypes.INTEGER
			},
			nombre: {
				allowNull: false,
				type: Sequelize.DataTypes.STRING
			},
			descripcion: {
				allowNull: false,
				type: Sequelize.DataTypes.STRING
			},
			capacidad: {
				allowNull: false,
				type: Sequelize.DataTypes.INTEGER
			},
		});
	},

	async down (queryInterface, Sequelize) {
		return queryInterface.dropTable('tipos_habitacion');
	}
};
