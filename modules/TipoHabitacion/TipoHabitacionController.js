const asyncHandler = require("express-async-handler");
const db = require('../../models/index');



exports.listarTipoHabitaciones = asyncHandler(async (req, res, next) => {
    let tiposHabitacion = await db.TipoHabitacion.findAll();

    res.json({data : tiposHabitacion});
});

exports.agregarTipoHabitaciones = asyncHandler(async (req, res, next) => {
    let nombre      = req.body.nombre;
    let descripcion = req.body.descripcion;
    let capacidad   = req.body.capacidad;

    let tipoHabitacion;
    try {
        tipoHabitacion = await db.TipoHabitacion.create({ 
            nombre: nombre,
            descripcion: descripcion,
            capacidad : capacidad 
        });

    } catch (error) {
        res.json({data : error});
    }

    res.json({data : tipoHabitacion});
});