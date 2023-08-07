const asyncHandler = require("express-async-handler");
const db = require('../../models/index');



exports.listarTipoHabitaciones = asyncHandler(async (req, res, next) => {
    let tiposHabitacion = await db.TipoHabitacion.findAll();

    res.json({data : tiposHabitacion});
});

exports.obtenerTipoHabitacion = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let tipoHabitacion;
    tipoHabitacion = await db.TipoHabitacion.findByPkHelper(id, res);

    res.json({data : tipoHabitacion});
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

exports.editarTipoHabitaciones = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let nombre      = req.body.nombre;
    let descripcion = req.body.descripcion;
    let capacidad   = req.body.capacidad;

    let tipoHabitacion = await db.TipoHabitacion.findByPkaux(id, res);


    tipoHabitacion.nombre = nombre;
    tipoHabitacion.descripcion = descripcion;
    tipoHabitacion.capacidad = capacidad;
    tipoHabitacion.save();

    res.json({data : tipoHabitacion});

});

exports.habilitarTipoHabitaciones = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let tipoHabitacion = await db.TipoHabitacion.findByPkHelper(id);
    tipoHabitacion.estado = true;

    res.json({data : tipoHabitacion});
});

exports.deshabilitarTipoHabitaciones = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let tipoHabitacion = await db.TipoHabitacion.findByPkHelper(id);
    tipoHabitacion.estado = false;
    tipoHabitacion.save();

    res.json({data : tipoHabitacion});
});