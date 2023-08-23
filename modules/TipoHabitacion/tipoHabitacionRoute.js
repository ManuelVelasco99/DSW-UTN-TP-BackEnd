var express = require('express');
var router = express.Router();
var TipoHabitacionController = require('./TipoHabitacionController');
const multer  = require('multer');
const upload = multer();
const { validateCreate, validateEdit } = require('./TipoHabitacionValidate');
const precioTipoHabitacionRoute = require('./PrecioTipoHabitacion/PrecioTipoHabitacionRoute')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { data: 'tipo Habitacion' });
});

/* GET listado tipo habitaciones. */
router.get('/listar', TipoHabitacionController.listarTipoHabitaciones);   

router.post('/agregar', upload.none(), validateCreate, TipoHabitacionController.agregarTipoHabitaciones);

router.post('/:id/editar', upload.none(), validateEdit, TipoHabitacionController.editarTipoHabitaciones);

router.post('/:id/habilitar', upload.none(), TipoHabitacionController.habilitarTipoHabitaciones);

router.post('/:id/deshabilitar', upload.none(), TipoHabitacionController.deshabilitarTipoHabitaciones);

router.get('/:id', TipoHabitacionController.obtenerTipoHabitacion);

router.use('/:tipoHabitacionId/precio-tipo-habitacion', precioTipoHabitacionRoute);

module.exports = router;
