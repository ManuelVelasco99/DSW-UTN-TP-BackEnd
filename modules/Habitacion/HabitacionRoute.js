var express = require('express');
var router = express.Router();
var HabitacionController = require('./HabitacionController');
const multer  = require('multer');
const upload = multer();
const { validateCreate } = require('./HabitacionValidate');


router.get('/listar', HabitacionController.listarHabitaciones);

router.get('/:numero', HabitacionController.obtenerHabitacion);

router.post('/agregar', upload.none(), validateCreate, HabitacionController.agregarHabitacion);

router.post('/:numero/eliminar', upload.none(),  HabitacionController.eliminarHabitacion);

module.exports = router;
