const { check } = require('express-validator');
const { validateResult } = require('../../validator/validateHelper');

const validateCreate = [    
    check('nombre').notEmpty().withMessage('El campo nombre es requerido'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
];

module.exports = { validateCreate };