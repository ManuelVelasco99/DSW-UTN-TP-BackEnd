var express = require('express');
var router = express.Router();
var CaracteristicaController = require('./CaracteristicaController');
const multer  = require('multer');
const upload = multer();
const { validateCreate } = require('./CaracteristicaValidate');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { data: 'caracteristica' });
});

/* GET listado tipo habitaciones. */
router.get('/listar', CaracteristicaController.listarCaracteristicas);   

router.post('/agregar', upload.none(), validateCreate, CaracteristicaController.agregarCaracteristicas);

module.exports = router;