// config.js
require('dotenv').config(); // Carga las variables de entorno desde .env
const path = require('path');


module.exports = {
    development: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		host: process.env.DB_HOST,
		dialect: process.env.DB_CONNECTION,
		migrationStorageTableName: "migrations",
    },
};