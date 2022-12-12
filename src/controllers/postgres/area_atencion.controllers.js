
import AreaAtencionHerServices from '../../services/postgres/area_atencion.service';

const services = new AreaAtencionHerServices();
//Buscar por codigo de Cliente




// Todos los clientes

export async function getAreaAtencion(req, res, next) {
  try {
      console.log('1')
    const Area_atencion = await services.buscar();
    res.json(Area_atencion);
  } catch (error) {
    next(error);
  }
}