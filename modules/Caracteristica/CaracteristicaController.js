const asyncHandler = require("express-async-handler");
const db = require('../../models/index');

exports.listarCaracteristicas = asyncHandler(async (req, res, next) => {
    let caracteristica = await db.Caracteristica.findAll();

    res.json({data : caracteristica});
});

exports.agregarCaracteristicas = asyncHandler(async (req, res, next) => {
    let nombre      = req.body.nombre;

    let caracteristica;
    try {
        caracteristica = await db.Caracteristica.create({ 
            nombre: nombre,
        });

    } catch (error) {
        res.json({data : error});
    }

    res.json({data : caracteristica});
});