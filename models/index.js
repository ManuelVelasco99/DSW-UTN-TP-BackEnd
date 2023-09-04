'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }

    db[modelName].findByPkHelper = async (id, res, options = {}) => {
        let element;
        try{
            element =  await db[modelName].findByPk(id, options);
            console.log('db respuesta', element);
            if(!element){
                throw new Error(`No existe el elemento con id ${id}`);
            }
        }
        catch(error){
            if(error.message.startsWith('No existe el elemento con id')){
                res.json({data : error.message}, 404);
            }
        }

    return element;
};
});

db.sequelize = sequelize;

/*
db[model.name].findByPk = asyncHandler(async (id) => {
    let element = await db.TipoHabitacion.findByPk(id);

    if(!element){
        throw new Error(`No existe el elemento con id ${id}`);
    }

    return element;
});
*/


module.exports = db;
