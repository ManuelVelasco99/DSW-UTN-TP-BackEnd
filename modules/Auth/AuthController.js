const asyncHandler = require("express-async-handler");
const db = require('../../models/index');
const jwt = require('jsonwebtoken');

exports.login = asyncHandler(async (req, res, next) => {
    if(!(req.body.email === "preuba@gmail.com" && req.body.password === "password")){
		res.json( { data: {
			mensaje : "Usuario y/o clave incorrectos"
		}}).status(403);
	}
    const token = jwt.sign({
        id:1,
        email: req.body.email,
    }, process.env.TOKEN_SECRET,
    {
        expiresIn: '20s'
    }
    );


    res.json({ data:{
        token : token
        }
    });
});

exports.obtenerMisDatos = asyncHandler(async (req, res, next) => {

    res.json({
        data: {
            nomnbre: "Juan",
            apellido: "Perez",
            telefono: "3412345678"
        }
    });
});


