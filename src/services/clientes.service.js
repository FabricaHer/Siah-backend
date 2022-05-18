import { Clientes } from '../models/MySQL/clientes.models';
const {Op} = require("sequelize");
import Boom from '@hapi/boom';

class ClientesServices {
  constructor() {
  }
  async buscarUno(codigo) {
    const clientes = await Clientes.findOne({
      where: {
        codigo,
      },
    });
    if (!clientes) {
        throw Boom.notFound('Contrato no encontrado');
      }
  
      return clientes;
}

  async buscar(nombre,clasificacion, limite) {
  try {
    console.log(clasificacion);
    console.log(limite);
    limite = parseInt(limite)
    const productos = await Clientes.findAll({
      limit: limite,
      where: {
        // codigo: codigo
          [Op.or]: [{clasificacion: clasificacion},
        { nombre:{[Op.like]: `%${nombre}%`}  }]
      },
    });
    if (!productos) {
      throw Boom.notFound('Cliente no encontrados');
    }
    return productos
  } catch (error) {
    throw new Error(error);
  }
}
  async actualizarEstado(codigo, changes) {
    try {
      const clientesUpdated = await Clientes.update(
        { ...changes },
        {
          where: {
            codigo: codigo,
          },
        }
      );

      return clientesUpdated;
    } catch (error) {
      throw new Error(error);
    }
  }


async eliminarClientes(codigo) {
    
  const clientes = await Clientes.destroy({
      where: {
          codigo
      }
  });
  if (!clientes) {
    throw Boom.notFound('Clientes no encontrado');
  }
  return clientes;

}
    
}

module.exports = ClientesServices;