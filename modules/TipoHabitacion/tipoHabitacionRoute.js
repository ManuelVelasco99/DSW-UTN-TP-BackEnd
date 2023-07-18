var express = require('express');
var router = express.Router();
var TipoHabitacionController = require('./TipoHabitacionController');
const multer  = require('multer')
const upload = multer()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { data: 'tipo Habitacion' });
});

/* GET listado tipo habitaciones. */
router.get('/listar', TipoHabitacionController.listarTipoHabitaciones);

router.post('/agregar', upload.none(), TipoHabitacionController.agregarTipoHabitaciones);

module.exports = router;
