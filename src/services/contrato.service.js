import { Contratos } from '../models/MySQL/contratos.models';
import { preciosDolar } from '../models/MySQL/preciosDolar.models';
import { preciosEspeciales } from '../models/MySQL/preciosEspeciales.model';
import  dayjs  from 'dayjs';
import Boom from '@hapi/boom';
import { Clientes_hce } from '../models/Postgres/clientes_hce.models';
import { Clientes_her } from '../models/Postgres/clientes_her.models';
import { Tipo_lista } from '../models/Postgres/tipo_lista.models';
import { Clientes } from '../models/MySQL/clientes.models';
require('dotenv').config()

class ConstratoServices {
  constructor() {
    this.idMax = 0;
    this.ip = process.env.IP
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
  async getMaxContrato() {
    try {
      const max = await Contratos.max('codigo');
      return max;
    } catch (error) {
      throw Boom.notFound('Codigo no obtenido');
    }
  }
  async buscar(data) {
    try { 
      let where = {};
      let order = 'ASC'
      let limite = 20
      let page = 0
      if (JSON.stringify(data) === '{}'){
        where = {
          lista: 'C'
        }
      }else{
        if(data.limite){
          limite =  parseInt(data.limite) 
        }
        if(data.order){
          order = data.order
        }
        if (data.page){
          page = parseInt(data.page)
        }
        if(data.lista){
          where = {...where,
            lista: data.lista }
        }
        if(data.lista){
          where = {...where,
            lista: data.lista }
        }
        if(data.fechaInicio){
          where = {
            ...where,
            fechaInicio: data.fechaInicio
          }
        } 
          if(data.fechaFinal){
            where = {
              ...where,
              fechaFinal: data.fechaFinal
            }
        }

      
        
      }
     
      const contratos = await Contratos.findAndCountAll({
        limit:  limite,
        offset: page * limite,
        where: {
          ...where
        },
        include: {
          model: Clientes,
          attributes:['nombre']
      },
      order: [
        ['codigo', order], // Sorts by COLUMN_NAME_EXAMPLE in ascending order
  ],
  
      });
      if (!contratos) {
        throw Boom.notFound('Contratos no encontrados');
      }
    
      
      const newContratos = contratos.rows.map((e) => {
        return (e.dataValues = {
          ...e.dataValues,
          precios: `http://localhost:4000/api/precios/${e.dataValues.codigo}`,
          
        });
      });
      
      
      const count = contratos.count
      const pages = Math.ceil(count/limite)
      const next =  page <= pages ?  page+1 : ''
      const prev = page > 0 ? page-1:''

      const info = {
        info : {
          count : count,
          pages: pages,
          next : next,
          prev: prev

        }
      }

      return [info,newContratos];
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
  async buscarCliente(codigoCliente, limite) {
    limite = parseInt(limite);
    const contratos = await Contratos.findAll({
      limit: limite,
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
        codigo,
      },
    });
    if (!contrato) {
      throw Boom.notFound('Contrato no encontrado');
    }
    return contrato;
  }
  async crear(
    descripcion,
    comentario,
    codigoCliente,
    moneda,
    unido,
    descuento,
    fechaInicio,
    fechaFinal,
    lista,
    tipoDocumento
  ) {
    try {
      const codigo = await this.generarNuevoId()
      console.log(codigoCliente);
      const datamysql = await Contratos.create({
        codigo: codigo,
        descripcion: descripcion,
        comentario: comentario,
        codigoCliente: codigoCliente,
        moneda: moneda,
        unido: unido,
        descuento: descuento,
        fechaInicio: fechaInicio,
        fechaFinal: fechaFinal,
        lista: lista,
        tipoDocumento: tipoDocumento
      });
      
      const clienteID = await Clientes_her.findOne({
        where: {
          codigo_cliente: codigoCliente
      },
          attributes: ['id']
      })
      Tipo_lista
      const listaID = await Tipo_lista.findOne({
        where: {
          codigo: lista
      },
          attributes: ['id']
      })
      console.log(clienteID.dataValues.id);
      console.log('llego', codigo, clienteID);
      const postgresdata ={
        cliente_id: clienteID.dataValues.id,
        tipo_lista: listaID.dataValues.id,
        activo: true,
        codigo_contrato: codigo
      }
      const datapostgres = await Clientes_hce.create(postgresdata);
      return (datamysql,datapostgres);
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
  async actualizarFecha(codigo, data) {
    try {
      let fechadia = data;
      console.log(fechadia);

      if (JSON.stringify(fechadia) == '{}') {
        fechadia = { fechaFinal: await this.obtenerfecha() };
      }

      const contratoUpdateDate = await Contratos.update(
        { ...fechadia },
        {
          where: {
            codigo: codigo,
          },
        }
      );
      return contratoUpdateDate;
    } catch (error) {
      throw new Error(error);
    }
  }
  async obtenerfecha() {
    const dia = dayjs().subtract(1, 'day').format('YYYY-MM-DD');
    console.log(dia);
    return dia;
  }
  async BuscarPrecios(contrato, moneda) {
    try {
      let precioBolivares = [];
      let precioDolares = [];
      if (moneda == 'B' || !moneda) {
        precioBolivares = await preciosEspeciales.findAll({
          where: {
            contrato: contrato,
          },
        });
        if (!precioBolivares) {
          precioBolivares = [];
        }
      }
      if (moneda == 'D' || !moneda) {
        precioDolares = await preciosDolar.findAll({
          where: {
            contrato: contrato,
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
  async actualizarPrecios(contrato, codigo, body) {
    const { isDolar, precio } = body;
    if (isDolar === true) {
      const precioActualizado = await preciosDolar.update(
        { precioVenta: precio },
        {
          where: {
            contrato: contrato,
            codigoProducto: codigo,
          },
        }
      );

      return precioActualizado;
    } else {
      const precioActualizado = await preciosEspeciales.update(
        { precioVenta: precio },
        {
          where: {
            contrato: contrato,
            codigoProducto: codigo,
          },
        }
      );
      return precioActualizado;
    }
  }
}

module.exports = ConstratoServices;

