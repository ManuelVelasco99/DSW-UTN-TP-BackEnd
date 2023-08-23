const asyncHandler = require("express-async-handler");
const db = require('../../../models/index');

exports.agregarPrecioTipoHabitacion = asyncHandler(async (req, res, next) => {
    let tipoHabitacionId = req.params.tipoHabitacionId;
    let tipoHabitacion = await db.TipoHabitacion.findByPkHelper(tipoHabitacionId, res);
    
    let precio = req.body.precio;
    let fecha_vigencia = req.body.fecha_vigencia;

    let precioTipoHabitacion = await db.PrecioTipoHabitacion.create({
        id_tipo_habitacion : tipoHabitacion.id,
        fecha_vigencia     : fecha_vigencia,
        precio             : precio
    });

    res.json({
        data : precioTipoHabitacion  
    });
});