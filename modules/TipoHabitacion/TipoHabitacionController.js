const asyncHandler = require("express-async-handler");



exports.listarTipoHabitaciones = asyncHandler(async (req, res, next) => {
    res.json({data : 'listado'});
});

exports.agregarTipoHabitaciones = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    res.json({data : 'listado'});
});