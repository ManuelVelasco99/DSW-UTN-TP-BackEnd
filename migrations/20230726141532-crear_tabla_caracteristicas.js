'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('caracteristicas', {
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
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('caracteristicas');
  }
};
