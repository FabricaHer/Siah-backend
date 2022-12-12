import { Clientes } from '../..//models/MySQL/clientes.models';
// const {Op} = require("sequelize");
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
    let page = 2
    page = parseInt(page)
    console.log(limite);
    const clientes = await Clientes.findAndCountAll({
      limit: 50,
      offset: page * limite,
      where: {
        // codigo: codigo
        //   [Op.or]: [{clasificacion: clasificacion},
        // { nombre:{[Op.like]: `%${nombre}%`}  }]
      },
    });
    if (!clientes) {
      throw Boom.notFound('Cliente no encontrados');
    }

    // const newClientes = clientes.rows.map((e) => {
    //   return (e.dataValues = {
    //     ...e.dataValues
    //   });
    // });
    // return productos
    const count = clientes.count
    const pages = Math.ceil(count/limite)
    const next =  page <= pages ?  page+1 : 0
    const prev = page > 0 ? page-1:0

    const info = {
      
        count : count,
        pages: pages,
        next : next,
        prev: prev

    
    }

    return {info: {...info}, results:clientes.rows};
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