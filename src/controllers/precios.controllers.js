import {preciosServices} from './../services/precios.services'
const service = new preciosServices()
export  async function getPreciosContrato(req,res,next){
  
  try {
    const {codigo} = req.params
    const {moneda} = req.query
    const lista = await service.Buscar(codigo,moneda)

    res.json(lista)
  } catch (error) {
    console.log('error')
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
