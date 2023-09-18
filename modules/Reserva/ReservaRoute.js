var express = require('express');
var router = express.Router();
var ReservaController = require('./ReservaController');
const multer  = require('multer');
const upload = multer();
const { validateCreate } = require('./ReservaValidate');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { data: 'reserva' });
});

/* GET listado tipo habitaciones. */
router.get('/listar', ReservaController.listarReservas);   

router.post('/agregar', upload.none(), validateCreate, ReservaController.agregarReserva);

router.post('/:id/habilitar', upload.none(), ReservaController.habilitarReserva);

router.post('/:id/deshabilitar', upload.none(), ReservaController.deshabilitarReserva);

router.get('/:id', ReservaController.obtenerReserva);

router.post('/:id/eliminar', upload.none(),  ReservaController.eliminarReserva);

module.exports = router;