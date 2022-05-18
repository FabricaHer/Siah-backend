import jwt from "jsonwebtoken";
import Boom from '@hapi/boom'
const authConfig = require('../config/auth.config');


module.exports = (req,res,next) =>{
    console.log(req.headers);

    //
    if(!req.headers.authorization){
        // res.status(401).json({ msg: "Acceso no autorizado"});
        throw Boom.unauthorized('Acceso no autorizado');
    }else{
        //Comprobar validez del token
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, authConfig.secret, (err, decoded) => {
            if(err){
                // res.status(500).json({msg: "Token no pudo verificarse", err});
                throw Boom.forbidden('Token No pudo Verificarse');
            }else{
                req.user = decoded;
                next();
            }
        });
        
    }
};