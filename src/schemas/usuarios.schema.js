import joi from 'joi'


const seudonimo = joi.string().min(5).max(50);
const contrasena = joi.string().min(5).max(50);
const cedula = joi.number().min(8).max(10);
const nombre = joi.string().min(5).max(50);
const fecha_creacion = joi.date();
const descripcion = joi.number().min(8).max(10);
const activo = joi.boolean();
export const CreateUser = joi.object({

    seudonimo  : seudonimo.required(),
    contrasena : contrasena.required(),
    cedula : cedula.required(),
    nombre  : nombre.required(),
    fecha_creacion : fecha_creacion.required(),
    descripcion : descripcion.required(),
    activo : activo.required(),
   });
   
export const LoginUser = joi.object({

    seudonimo  : seudonimo.required(),
    contrasena : contrasena.required()
   });
   