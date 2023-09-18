const asyncHandler = require("express-async-handler");
const db = require('../../models/index');

exports.listarReservas = asyncHandler(async (req, res, next) => {
    let reservas = await db.Reserva.findAll();

    res.json({data : reservas});
});

exports.obtenerReserva = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let reserva = await db.Reserva.findByPkHelper(id);

    res.json({data : reserva});
});

exports.agregarReserva = asyncHandler(async (req, res, next) =>{
    let id = req.body.id;
    let id_huesped = req.body.id_huesped;
    let numero_habitacion = req.body.numero_habitacion;
    let fecha_desde = req.body.fecha_desde;
    let fecha_hasta = req.body.fecha_hasta;
    let fecha_creacion = req.body.fecha_creacion;
    let fecha_pago = req.body.fecha_pago;
    let monto = req.body.monto;
    let estado = req.body.estado;

    let huesped = await db.Huesped.findByPkHelper(id_huesped, res); 
    let habitacion = await db.Habitacion.findByPkHelper(numero_habitacion, res);
    if(habitacion){
        res.status(403).json({data : "La habitacion con el numero " + numero_habitacion + " ya está reservada"});
    }

    let reserva;
    try {
        reserva = await db.Reserva.create({ 
            id: id,
            id_huesped: huesped.id,
            numero_habitacion: habitacion.numero,
            fecha_desde: fecha_desde,
            fecha_hasta: fecha_hasta,
            fecha_creacion: fecha_creacion,
            fecha_pago: fecha_pago,
            monto: monto,
            estado: estado,
        });
    
    } catch (error) {
        res.json({data : error});
    }

    res.json({data : huesped});
});

exports.eliminarReserva = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let reserva = await db.Reserva.findByPkHelper(id, res);

    await reserva.destroy();

    res.json({data : []});
});


exports.habilitarReserva = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let reserva = await db.Reserva.findByPkHelper(id);
    reserva.estado = true;
    reserva.save();

    res.json({data : reserva});
});

exports.deshabilitarReserva = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let reserva = await db.Reserva.findByPkHelper(id);
    reserva.estado = false;
    reserva.save();

    res.json({data : reserva});
});