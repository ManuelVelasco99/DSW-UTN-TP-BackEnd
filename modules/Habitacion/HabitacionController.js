const asyncHandler = require("express-async-handler");
const db = require('../../models/index');


exports.listarHabitaciones = asyncHandler(async (req, res, next) => {
    let habitaciones = await db.Habitacion.findAll({ include: "tipoHabitacion" });

    res.json({data : habitaciones});
});

exports.obtenerHabitacion = asyncHandler(async (req, res, next) => {
        let numero = req.params.numero;
        console.log("hola")
        let habitacion;
        habitacion = await db.Habitacion.findByPkHelper(numero, res, { include: "tipoHabitacion" });
    
    

    res.json({data : habitacion});
    
});

exports.agregarHabitacion = asyncHandler(async (req, res, next) => {
    let numero             = req.body.numero;
    let id_tipo_habitacion = req.body.id_tipo_habitacion;

    let tipoHabitacion = await db.TipoHabitacion.findByPkHelper(id_tipo_habitacion, res);
    let habitacion = await db.Habitacion.findByPk(numero);
    if(habitacion){
        res.status(403).json({data : "La habitacion con el numero " + numero + " ya está registrada"});
    }

    habitacion = await db.Habitacion.create({ 
        numero: numero,
        id_tipo_habitacion: tipoHabitacion.id,
    });

    res.json({data : habitacion});
});

exports.eliminarHabitacion = asyncHandler(async (req, res, next) => {
    let numero = req.params.numero;
    let habitacion = await db.Habitacion.findByPkHelper(numero, res);

    await habitacion.destroy();

    res.json({data : []});
});