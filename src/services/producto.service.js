import { Productos } from '../models/MySQL/clientes.models';
const { Op } = require("sequelize");
import Boom from '@hapi/boom';

 export class ProductosServices{

  async buscar(codigo,descripcion,limite) {
      console.log(codigo);
      limite = parseInt(limite)
    try {

      const productos = await Productos.findAll({
        limit: limite,
        logging: console.log,
        where: {
          // codigo: codigo
            [Op.or]: [{codigo: codigo},
          { descripcion:{[Op.like]: `%${descripcion}%`}  }]
        },
      });
      if (!productos) {
        throw Boom.notFound('Productos no encontrados');
      }
      return productos
    } catch (error) {
      throw new Error(error);
    }
  }
  async actualizar(codigo, changes) {
    try {
      const contratoUpdated = await Productos.update(
        { ...changes },
        {
          where: {
            codigo: codigo,
          },
        }
      );

      return contratoUpdated;
    } catch (error) {
      throw new Error(error);
    }
  }
  async actualizarEstado(codigo,data){
    try {
      
      const contratoUpdateEstado = await Productos.update(
        {...data},
        {
          where:{
          codigo: codigo
        }
        },
      );
      console.log(contratoUpdateEstado)
      return contratoUpdateEstado;
    } catch (error) {
      throw new Error(error)
    }
  }
  borrar() {}

}

