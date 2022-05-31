import { Contratos } from '../models/MySQL/contratos.models';
import { preciosDolar } from '../models/MySQL/preciosDolar.models';
import { preciosEspeciales } from '../models/MySQL/preciosEspeciales.model';
const dayjs = require('dayjs');
import Boom from '@hapi/boom';
import { Clientes_hce } from '../models/Postgres/clientes_hce.models';

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

  async getMaxContrato() {
    try {
      const max = await Contratos.max('codigo');
      return max;
    } catch (error) {
      throw Boom.notFound('Codigo no obtenido');
    }
  }

  async buscar(where) {
    try {
      const contratos = await Contratos.findAll({
        limit: 20,
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
      const codigo = await this.generarNuevoId();
      const newContrato = {
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
        tipoDocumento: tipoDocumento,
      };
      const datamysql = await Contratos.create(newContrato);
      const datapostgres = await Clientes_hce.create({
        hce_id: '95e06c2a-d406-639a-bd47-00b2c1a7f7ac',
        cliente_id: '678f7d34-bb56-45ed-ba45-ff80a6243943',
        tipo_lista: '5bcad3b4-35d1-443e-85cf-92fab1a813b2',
        activo: true,
        codigo: codigo,
      });
      return datamysql, datapostgres;
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

