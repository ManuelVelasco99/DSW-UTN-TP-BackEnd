const { check } = require('express-validator');
const { validateResult } = require('../../validator/validateHelper');

const validateCreate = [    
    check('numero').notEmpty().withMessage('El campo numero es requerido'),
    check('numero').isInt({ min : 1 }).withMessage('El campo capacidad debe ser un numero entero mayor a 0'),
    check('id_tipo_habitacion').notEmpty().withMessage('El campo id_tipo_habitacion es requerido'),
    check('id_tipo_habitacion').isInt({ min : 1 }).withMessage('El campo id_tipo_habitacion debe ser un numero entero mayor a 0'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateCreate };