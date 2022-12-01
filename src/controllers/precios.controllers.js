import {preciosServices} from './../services/precios.service'
const service = new preciosServices()


export  async function getPreciosProducto(req,res,next){
  
  try {
    const {utilidad,estado,grupo,limit,page} = req.query
    const precios = await service.buscar(utilidad,estado,grupo,limit,page)
    res.json(precios)

  } catch (error) {

    next(error)
  }
}
export async function crearPrecio(req,res,next){

  try {
    
    const body = req.body
    const newPrecio = await service.Crear(body)
     res.json(newPrecio)
  } catch (error) {
    next(error)
  }
}
