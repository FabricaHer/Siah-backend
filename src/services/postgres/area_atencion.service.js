
import Boom from '@hapi/boom';
import { Area_atencion } from '../../models/Postgres/area_atencion.models';

export const proof = 'l';
class AreaAtencionHerServices {
  constructor() {
  }

  async buscar() {
  try {
    const Area = await Area_atencion.findAll({
      limit: 30,
      where: {
        // codigo: codigo
        //   [Op.or]: [{clasificacion: clasificacion},
        // { nombre:{[Op.like]: `%${nombre}%`}  }]
      }, 
      attributes:['area_atencion_id','descripcion_area']
    });
    if (!Area) {
      throw Boom.notFound('Area no encontrada');
    }
  return Area;
} catch (error) {
    throw new Error(error);
  }
}}

module.exports = AreaAtencionHerServices;
