import  {Contratos}  from '../models/contratos.models';
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
        logging: console.log,
        where: {
          ...where,
        },
      });
      if (!contratos) {
        throw Boom.notFound('Contratos no encontrados');
      }
      return contratos;
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
      throw Boom.notFound('Product not found');
    }

    return contrato;
  }
  async crear(body) {
    
    try{
     
      const newContrato = {
        codigo: await this.generarNuevoId() ,
        ...body
      }
      const data = await Contratos.create(newContrato);
  
     
      return data

    }catch(error){
        throw new Error(error)
    }
  }
  async actualizar(codigo,changes) {
    
    try {

      const contratoUpdated = await Contratos.update(
        {...changes},
        {where:{
        codigo: codigo
      }});

      return contratoUpdated
    } catch (error){
      throw new Error(error)
    }
  }
  borrar() {}
}

module.exports = ConstratoServices;
