const { check, param } = require('express-validator');
const { validateResult } = require('../../../validator/validateHelper');
const { decimalSanitizer } = require('../../../validator/customSanitizer')

const validateCreate = [
    check('precio').notEmpty().withMessage('El campo precio es requerido'),
    check('precio').isFloat({ min:0.01 }).withMessage('El campo precio debe ser mayor a 0').customSanitizer((value)=> decimalSanitizer(value)),
    check('fecha_vigencia').notEmpty().withMessage('El campo fecha_vigencia es requerido'),
    check('fecha_vigencia').isISO8601().toDate().withMessage('El valor ingresado para el campo fecha_vigencia es una fecha invalida'),
    (req, res, next) => {
        validateResult(req, res, next)
    },
];

const validateEdit = [
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateCreate, validateEdit };