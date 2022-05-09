import Boom from '@hapi/boom';
import { preciosDolar } from './../models/preciosDolar.models';
import { preciosEspeciales } from './../models/preciosEspeciales.model';

// {
// 	"codigoProducto" : "",
// 	"unidadMedida": "",
// 	"precioVenta":"",
// 	"precioCompra":"",
// 	"contrato": "",
// 	"codigoCliente":"",
// 	"descuento":"",
// 	"fechaVencimiento":"",
//  "isDolar":""
// }
export class preciosServices {
  async Buscar(codigo, moneda) {
    try {
      let precioBolivares = [];
      let precioDolares = [];
      if (moneda == 'B' || !moneda) {
        precioBolivares = await preciosEspeciales.findAll({
          where: {
            codigoContrato: codigo,
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

  async Crear(body) {
    const { isDolar } = body;
    if (isDolar) {
      const precio = {
        codigoProducto: body.codigoProducto,
        unidadMedida: body.unidadMedida,
        precioCompra: body.precioCompra,
        precioVenta: body.precioVenta,
        contrato: body.contrato,
        codigoCliente: body.codigoCliente,
      };
      const precioProducto = await preciosDolar.create(precio);
      if (!precioProducto) {
        throw Boom.conflict('No se puede cargar el precio en dolares')
      }
    }
    else{
      const precio = {
        codigoInvetario: body.codigoInvetario,
        UnidadMedida: body.unidadMedida,
        precioVenta: body.precioVenta,
        descuento: body.descuento,
        fechaVencimiento: body.fechaVencimiento,
        contrato: body.contrato
      }
      const precioProducto = await preciosEspeciales.create(precio)
      if(!precioProducto){
        throw Boom.conflict('No se puede cargar el precio en bolivares')
      }
    }
    return {
      message:  'Producto Creado' ,
    };


  }
}
