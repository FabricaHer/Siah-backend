import UsuariosServices from '../services/usuarios.service';
import authConfig from '../config/auth.config';
const bcrypt = require('bcrypt');
const services = new UsuariosServices();

export async function signUp(req, res, next){

    try {
        //Encriptación de la contraseña
        let contrasena = bcrypt.hashSync(req.body.contrasena, Number.parseInt(authConfig.rounds));
        //Body
        const { seudonimo, cedula, nombre, fecha_creacion, descripcion, activo } = req.body;
        const usuario = await services.registrar(seudonimo,contrasena,cedula,nombre,fecha_creacion,descripcion,activo);
        
        res.json(usuario);
        
    } catch (error) {
        next(error);
    }
}

export async function signIn(req, res, next) {

    try {
        let {seudonimo,contrasena} = req.body;
        console.log(seudonimo);
        const inicio = await services.inicio(seudonimo,contrasena);
        console.log(inicio);
        res.json(inicio);
    } catch (error) {
        next(error);
    }

}