var express = require('express');
var router = express.Router();
var AuthController = require('./AuthController');
const jwt = require('jsonwebtoken');


//MIDDLEWARE
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

router.post('/login', AuthController.login);
router.get('/mis-datos', verifyToken, AuthController.obtenerMisDatos);


module.exports = router;
