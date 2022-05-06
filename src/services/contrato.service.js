import { Contratos } from '../models/contratos.models';
import Boom from '@hapi/boom';

class ConstratoServices {
  constructor() {
    this.idMax = 0;
  }

  async generarNuevoId() {
    try {
      const max = await Contratos.max('codigo');
      this.idMax = max + 1;
      return this.idMax;
    } catch (error) {
      throw Boom.notFound('Codigo no obtenido');
    }
  }

  getMaximoId() {
    return this.idMax;
  }

  async buscar(where) {
    try {
      const contratos = await Contratos.findAll({
        
        where: {
          ...where,
        },
      });
      if (!contratos) {
        throw Boom.notFound('Contratos no encontrados');
      }
      const newContratos = contratos.map((e) => {
        return (e.dataValues = {
          ...e.dataValues,
          precios: `http://localhost:4000/api/precios/${e.dataValues.codigo}`,
        });
      });
    
      return newContratos;
    } catch (error) {
      throw new Error(error);
    }
  }
  async buscarUno(codigo) {
    const contrato = await Contratos.findOne({
      where: {
        codigo,
      },
    });
    if (!contrato) {
      throw Boom.notFound('Contrato no encontrado');
    }

    return contrato;
  }
  async buscarCliente(codigoCliente) {
    
    let contrato = await Contratos.findAll({
      where: {
        codigoCliente,
      },
      raw : true,
      nest : true
    });
    if (!contrato) {
      throw Boom.notFound('Cliente con contrato no encontrado');
    }

      const newContrato = contrato.map((data) =>{
        data.precios = `http://localhost/api/precios/${data.codigo}`
        console.log(data)
    
    })
    console.log(newContrato);
    return {...newContrato}; 
    
  }

  async eliminarContrato(codigo) {
    
    const contrato = await Contratos.destroy({
        where: {
            codigo
        }
    });
    if (!contrato) {
      throw Boom.notFound('Contrato no encontrado');
    }
    return contrato;

}

  async crear(body) {
    try {
      const newContrato = {
        codigo: await this.generarNuevoId(),
        ...body,
      };
      const data = await Contratos.create(newContrato);

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  async actualizar(codigo, changes) {
    try {
      const contratoUpdated = await Contratos.update(
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
  async actualizarFecha(codigo,data){
    try {
      console.log(codigo,data);
      const contratoUpdateDate = await Contratos.update(
        {...data},
        {where:{
          codigo: codigo
        }
        }
      );
      return contratoUpdateDate;
    } catch (error) {
      throw new Error(error)
    }
  }
  borrar() {}
}

module.exports = ConstratoServices;
