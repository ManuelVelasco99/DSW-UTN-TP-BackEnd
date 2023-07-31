'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.addColumn('tipos_habitacion', 'estado', {
			type: Sequelize.DataTypes.BOOLEAN,
			defaultValue: true,
  			allowNull: false
		});
	},

	async down (queryInterface, Sequelize) {
		return queryInterface.removeColumn('tipos_habitacion', 'estado');
	}
};
