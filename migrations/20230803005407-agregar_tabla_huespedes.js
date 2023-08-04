'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('huespedes', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.DataTypes.INTEGER
			},
      tipoDocumento: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      nroDocumento: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
			nombre: {
				allowNull: false,
				type: Sequelize.DataTypes.STRING
			},
      apellido: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
			password: {
				allowNull: false,
				type: Sequelize.DataTypes.STRING
			},
			fecNac: {
				allowNull: false,
				type: Sequelize.DataTypes.DATE
			},
      telefono: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
      }
		},
    {
      indexes: [
        {
            unique: true,
            fields: ['tipoDocumento', 'nroDocumento', 'email']
        }
    ]
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('huespedes');
  }
};