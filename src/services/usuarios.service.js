const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.config');
const bcrypt = require('bcrypt');
import {Usuarios} from '../models/MySQL/usuarios.models';


class UsuariosServices {
    async registrar(seudonimo,contrasena,cedula,nombre,fecha_creacion,descripcion,activo){
        console.log('2');
    try {
        let newUser = {}
        await Usuarios.create({
            seudonimo,
            contrasena,
            cedula,
            nombre,
            fecha_creacion,
            descripcion,
            activo
        }, {
            fields: ['seudonimo','cedula', 'nombre','contrasena','fecha_creacion','descripcion','activo']
        })
        .then(user =>{
            let token = jwt.sign({ user: user}, authConfig.secret,{
                expiresIn: authConfig.expires
            });
            newUser = {token,user}
        });
        return newUser;
    } catch (error) {
        throw new Error(error);
    }
};
    async inicio(seudonimo,contrasena){
        console.log(seudonimo,contrasena)
        try {
            let Newlogin = {}
            await Usuarios.findOne({
                where:{
                    seudonimo: seudonimo
                }
            }).then(user => {
                
                if(!user){
                    Newlogin = {msg: 'Usuario no encontrado'}
                    console.log('sinuser')
                    
                }
                else{
                    if(bcrypt.compareSync(contrasena, user.contrasena)){
                        //Creamos el token
                        let token = jwt.sign({ user: user}, authConfig.secret,{
                            expiresIn: authConfig.expires
                        });
                        Newlogin = {user,token}
                        console.log(Newlogin);
                        
                        
                    } else{
                        console.log('incorrecto')
                        Newlogin = {msg: 'Contraseña incorrecta'}
                        
                        //Se deniega el acceso
                    }
                }
            })
            return Newlogin 
            
        } catch (error) {
            throw new Error(error);
        }
        
    }
}

module.exports = UsuariosServices;