const { check } = require('express-validator');
const { validateResult } = require('../../validator/validateHelper');

const validateCreate = [    
    check('tipoDocumento').notEmpty().withMessage('El campo tipoDocumento es requerido'),
    check('nroDocumento').notEmpty().withMessage('El campo nroDocumento es requerido'),
    check('nombre').notEmpty().withMessage('El campo nombre es requerido'),
    check('apellido').notEmpty().withMessage('El campo apellido es requerido'),
    check('fecNac').notEmpty().withMessage('El campo fecNac es requerido'),
    check('password').notEmpty().withMessage('El campo password es requerido'),
    check('telefono').notEmpty().withMessage('El campo telefono es requerido'),
    check('email').notEmpty().withMessage('El campo email es requerido'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

const validateEdit = [    
    check('nombre').notEmpty().withMessage('El campo nombre es requerido'),
    check('apellido').notEmpty().withMessage('El campo apellido es requerido'),
    check('fecNac').notEmpty().withMessage('El campo fecNac es requerido'),
    check('password').notEmpty().withMessage('El campo password es requerido'),
    check('telefono').notEmpty().withMessage('El campo telefono es requerido'),
    check('email').notEmpty().withMessage('El campo email es requerido'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateCreate, validateEdit };