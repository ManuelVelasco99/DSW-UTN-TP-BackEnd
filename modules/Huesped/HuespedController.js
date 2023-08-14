const asyncHandler = require("express-async-handler");
const db = require('../../models/index');

exports.listarHuespedes = asyncHandler(async (req, res, next) => {
    let huesped = await db.Huesped.findAll();

    res.json({data : huesped});
});

exports.obtenerHueseped = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let huesped = await db.Huesped.findByPkHelper(id);

    res.json({data : huesped});
});

exports.agregarHuespedes = asyncHandler(async (req, res, next) =>{
    let tipoDocumento = req.body.tipoDocumento;
    let nroDocumento = req.body.nroDocumento;
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let fecNac = req.body.fecNac;
    let password = req.body.password;
    let telefono = req.body.telefono;
    let email = req.body.email;

    let huesped;
    try {
        huesped = await db.Huesped.create({ 
            tipoDocumento: tipoDocumento,
            nroDocumento: nroDocumento,
            nombre: nombre,
            apellido: apellido,
            fecNac : fecNac,
            password: password,
            telefono: telefono,
            email: email,

        });

    } catch (error) {
        res.json({data : error});
    }

    res.json({data : huesped});
});

exports.editarHuespedes = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let tipoDocumento = req.body.tipoDocumento;
    let nroDocumento = req.body.nroDocumento;
    let nombre = req.body.nombre;
    let apellido = req.body.apellido;
    let fecNac = req.body.fecNac;
    let password = req.body.password;
    let telefono = req.body.telefono;
    let email = req.body.email;

    let huesped = await db.Huesped.findByPkHelper(id);

    huesped.tipoDocumento= tipoDocumento;
    huesped.nroDocumento= nroDocumento;
    huesped.nombre= nombre;
    huesped.apellido= apellido;
    huesped.fecNac= fecNac;
    huesped.password= password;
    huesped.telefono= telefono;
    huesped.email= email;
    huesped.save();

    res.json({data : huesped});
});

exports.habilitarHuespedes = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let huesped = await db.Huesped.findByPkHelper(id);
    huesped.estado = true;
    huesped.save();

    res.json({data : huesped});
});

exports.deshabilitarHuespedes = asyncHandler(async (req, res, next) => {
    let id = req.params.id;
    let huesped = await db.Huesped.findByPkHelper(id);
    huesped.estado = false;
    huesped.save();

    res.json({data : huesped});
});