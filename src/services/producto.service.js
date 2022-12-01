import { Productos } from '../models/MySQL/productos.models';
// const { Op } = require("sequelize");
import Boom from '@hapi/boom';

 export class ProductosServices{

  async buscar(codigo,descripcion,limite,page) {
      console.log(codigo);
      limite = parseInt(limite)
      let Page = ''
      if (!page){
        Page = 0
      }
      else {
        Page = parseInt(page)
      }
    try {

      const productos = await Productos.findAndCountAll({
        limit: limite,
        offset: Page * limite,
        logging: console.log,
        where: {
          // codigo: codigo
          //   [Op.or]: [{codigo: codigo},
          // { descripcion:{[Op.like]: `%${descripcion}%`}  }]
        },
      });
      if (!productos) {
        throw Boom.notFound('Productos no encontrados');
      }
      const count = productos.count
      const pages = Math.ceil(count/limite)
      const next =  page <= pages ?  page+1 : 0
      const prev = page > 0 ? page-1:0
  
      const info = {
        
          count : count,
          pages: pages,
          next : next,
          prev: prev
  
      
      }
  
      return {info: {...info}, results:productos.rows};
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

