const { check } = require('express-validator');
const { validateResult } = require('../../validator/validateHelper');

const validateCreate = [    
    check('id_huesped').notEmpty().withMessage('El campo id_huesped es requerido'),
    check('numero_habitacion').notEmpty().withMessage('El campo numero_habitacion es requerido'),
    check('fecha_desde').notEmpty().withMessage('El campo fecha_desde es requerido'),
    check('fecha_hasta').notEmpty().withMessage('El campo fecha_hasta es requerido'),
    check('fecha_creacion').notEmpty().withMessage('El campo fecha_creacion es requerido'),
    check('fecha_pago').notEmpty().withMessage('El campo fecha_pago es requerido'),
    check('monto').notEmpty().withMessage('El campo monto es requerido'),
    check('estado').notEmpty().withMessage('El campo estado es requerido'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateCreate };