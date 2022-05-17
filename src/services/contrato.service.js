import { Contratos } from '../models/contratos.models';
import {preciosDolar} from '../models/preciosDolar.models';
import {preciosEspeciales} from '../models/preciosEspeciales.model';
const dayjs = require('dayjs');
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
    
    const contratos = await Contratos.findAll({
      where: {
        codigoCliente,
      },
    });
    if (!contratos) {
      throw Boom.notFound('Cliente con contrato no encontrado');
    }

    const newContrato = contratos.map((e) => {
      return (e.dataValues = {
        ...e.dataValues,
        precios: `http://localhost:4000/api/precios/${e.dataValues.codigo}`,
      });
    });
  
    return newContrato;
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
      let fechadia = data
      console.log(fechadia)
      

      if(JSON.stringify(fechadia) == '{}'){
        
         fechadia = {fechaFinal : await this.obtenerfecha()}
      }

      const contratoUpdateDate = await Contratos.update(
        {...fechadia},
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
  async obtenerfecha(){ 
    const dia = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
    console.log(dia)
    return dia; 
  } 

  async BuscarPrecios(codigo, moneda) {
    try {
      let precioBolivares = [];
      let precioDolares = [];
      if (moneda == 'B' || !moneda) {
        precioBolivares = await preciosEspeciales.findAll({
          where: {
            contrato: codigo,
          },
        });
        if (!precioBolivares) {
          precioBolivares = [];
        }
      }
      if (moneda == 'D' || !moneda) {
        precioDolares = await preciosDolar.findAll({
          where: {
            contrato: codigo,
          },
        });
        if (!precioDolares) {
          precioDolares = [];
        }
      }

      if (!precioBolivares.length && !precioDolares.length) {
        throw Boom.notFound('Precios no encontrados');
      }

      const listaBolivares = precioBolivares.map((precio) => {
        return precio.dataValues;
      });

      const listaDolares = precioDolares.map((precio) => {
        return precio.dataValues;
      });

      return {
        bolivares: listaBolivares,
        dolares: listaDolares,
      };
    } catch (error) {
      throw new Error(error);
    }
  }


 async actualizarPrecios (contrato, codigo, body) {
   const { isDolar,precio}= body
   if (isDolar === true ) {
    const precioActualizado = await preciosDolar.update({precioVenta:precio}, {
        where: {
          contrato: contrato,
          codigoProducto: codigo
        }
    })

    return precioActualizado
   }
   else {
      const precioActualizado = await preciosEspeciales.update({precioVenta: precio}, {
        where: {
          contrato: contrato,
          codigoProducto: codigo
        }
      })
      return precioActualizado
    
   }
     
 }

}



module.exports = ConstratoServices;


//const contratoUpdated = await Contratos.update(
 // { ...changes },
 // {
   //  where: {
   //    codigo: codigo,   codigoProducto
   // },
 // }
//);