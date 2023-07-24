const { check } = require('express-validator');
const { validateResult } = require('../../validator/validateHelper');

const validateCreate = [    
    check('nombre')     .notEmpty().withMessage('El campo nombre es requerido'),
    check('descripcion').notEmpty().withMessage('El campo descripcion es requerido'),
    check('capacidad')  .notEmpty().withMessage('El campo capacidad es requerido'),
    check('capacidad')  .isInt({ min : 1 }).withMessage('El campo capacidad debe ser un numero entero mayor a 0'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateCreate };