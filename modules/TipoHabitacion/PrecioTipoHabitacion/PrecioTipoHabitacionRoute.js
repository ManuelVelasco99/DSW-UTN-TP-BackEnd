var express = require('express');
var router = express.Router({mergeParams: true});
var precioTipoHabitacionController = require('./PrecioTipoHabitacionController');
const multer  = require('multer');
const upload = multer();
const { validateCreate, validateEdit } = require('./PrecioTipoHabitacionValidate');

router.post('/agregar', upload.none(), validateCreate,  precioTipoHabitacionController.agregarPrecioTipoHabitacion);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { data: 'PrecioTipoHabitacionRoute' });
});

module.exports = router;