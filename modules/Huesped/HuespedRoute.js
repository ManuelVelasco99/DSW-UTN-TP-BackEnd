var express = require('express');
var router = express.Router();
var HuespedController = require('./HuespedController');
const multer  = require('multer');
const upload = multer();
const { validateCreate, validateEdit } = require('./HuespedValidate');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { data: 'huesped' });
});

/* GET listado tipo habitaciones. */
router.get('/listar', HuespedController.listarHuespedes);   

router.post('/agregar', upload.none(), validateCreate, HuespedController.agregarHuespedes);

router.post('/:id/editar', upload.none(), validateEdit, HuespedController.editarHuespedes);

router.post('/:id/habilitar', upload.none(), HuespedController.habilitarHuespedes);

router.post('/:id/deshabilitar', upload.none(), HuespedController.deshabilitarHuespedes);

router.get('/:id', HuespedController.obtenerHueseped);

module.exports = router;