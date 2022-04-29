import { Productos } from '../models/contratos.models';
// const { Op } = require("sequelize");
import Boom from '@hapi/boom';

class ProductosServices{
  async buscar(codigo,descripcion) {
    try {
      const productos = await Productos.findAll({
        logging: console.log,
        where: {
            codigo
        //     [Op.or]: [{codigo: codigoprodu},
        //   {descripcion: { [Op.like]: `%${descripcionprodu}%` } }]
        },
      });
      console.log(productos);
      console.log(descripcion);
      if (!productos) {
        throw Boom.notFound('Productos no encontrados');
      }
      return productos
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = ProductosServices;