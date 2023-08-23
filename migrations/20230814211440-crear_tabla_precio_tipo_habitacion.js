'use strict';

module.exports = {
	async up (queryInterface, Sequelize) {
		return queryInterface.createTable('precios_tipo_habitacion', {
			id: {
				allowNull: false,
				autoIncrement: true,
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
			fecha_vigencia : {
				allowNull: false,
				type: Sequelize.DataTypes.DATEONLY
			},
			precio : {
				allowNull: false,
				type: Sequelize.DataTypes.DECIMAL(10,2)
			}
		});
	},

	async down (queryInterface, Sequelize) {
		return queryInterface.dropTable('precios_tipo_habitacion');
	}
};
