import Boom from '@hapi/boom';
import { preciosDolar } from '../models/MySQL/preciosDolar.models';
import { preciosEspeciales } from '../models/MySQL/preciosEspeciales.model';
import { Productos } from '../models/MySQL/clientes.models';
const {Op} = require ("sequelize");

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
  // async Buscar(codigo, moneda) {
  //   try {
  //     let precioBolivares = [];
  //     let precioDolares = [];
  //     if (moneda == 'B' || !moneda) {
  //       precioBolivares = await preciosEspeciales.findAll({
  //         where: {
  //           codigoContrato: codigo,
  //         },
  //       });
  //       if (!precioBolivares) {
  //         precioBolivares = [];
  //       }
  //     }
  //     if (moneda == 'D' || !moneda) {
  //       precioDolares = await preciosDolar.findAll({
  //         where: {
  //           contrato: codigo,
  //         },
  //       });
  //       if (!precioDolares) {
  //         precioDolares = [];
  //       }
  //     }

  //     if (!precioBolivares.length && !precioDolares.length) {
  //       throw Boom.notFound('Precios no encontrados');
  //     }

  //     const listaBolivares = precioBolivares.map((precio) => {
  //       return precio.dataValues;
  //     });

  //     const listaDolares = precioDolares.map((precio) => {
  //       return precio.dataValues;
  //     });

  //     return {
  //       bolivares: listaBolivares,
  //       dolares: listaDolares,
  //     };
  //   } catch (error) {
  //     throw new Error(error);
  //   }
  // }

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
async buscar (utilidad, estado, grupo, limit, page) {
    let utilizacion = ''
    let Estado = ''
    let Grupo = ''
    let Limite
    let Page = ''

    if (!utilidad ){

      utilizacion = 'S'
    }
    else {utilizacion = utilidad}

    if (!estado){
      Estado  = 'A'
      }
      else {
      Estado = 'I'
      }
    if (!grupo){
      Grupo  = 'A%'
    }
    else{
      Grupo =`${grupo}%`
    }
    if (!limit){
      Limite = 20
    }
    else{
      Limite = parseInt(limit) 
    }
    if (!page){
      Page = 0
    }
    else {
      Page = parseInt(page)
    }



    
    const precios= await Productos.findAndCountAll({
      limit: Limite,
      offset: Page * Limite,
       where: 
       {
          grupo: {[Op.like]: Grupo },
          utilizacion: utilizacion,
          estado:Estado

       }
     });
     const count = precios.count
     const pages = Math.ceil(count/Limite)
     const next =  page <= pages ?  page+1 : 0
     const prev = page > 0 ? page-1:0
 
     const info = {
       
         count : count,
         pages: pages,
         next : next,
         prev: prev
 
     
     }
 
     return {info: {...info}, results:precios.rows};

}

// async actuaizarPrecioProducto(codigo, changes) {
//   try {
//     const precioProductoUpdated = await productos.patch(
//       { ...changes },
//       {
//         where: {
//           codigo: codigo,
//         },
//       }
//     );

//     return precioProductoUpdated;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
}