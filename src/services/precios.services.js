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

     try {
         
         const { isDolar } = body;
         let isCreated = false;
         if (isDolar) {
           const precio = {
             codigoProducto : body.codigoProducto,
             unidadMedida: body.unidadMedida,
             precioCompra: body.precioCompra,
             precioVenta: body.precioVenta,
             contrato: body.contrato,
             codigoCliente: body.codigoCliente
           };
         const precioProducto =  await preciosDolar.create(precio);
         console.log(precioProducto,'hola')
         if(precioProducto){
             isCreated = true
         }
         }
         return {
             message: (isCreated)?'Producto Creado':'El producto no pudo ser creado',
             status:isCreated
         } 
     } catch (error) {
         const err = (error.errors[0].validatorKey)
         if(err === 'not_unique'){    
          throw Boom.badData('Producto ya existente')    
         }
        throw new Error('Error')   
     }
  }
}

