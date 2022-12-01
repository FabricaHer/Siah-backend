import {ProductosServices} from './../services/producto.service'

const service = new ProductosServices();


export async function getProductos(req, res, next) {
    try {
        let {codigo,descripcion,limite,page} = req.query
        if (!limite) {
          limite = 20
        }
        console.log(limite)
        const producto = await service.buscar(codigo,descripcion,limite,page);
      res.json(producto);
      
      
    } catch (error) {
      next(error);
    }
}
//Actualizar Contrato

export async function updateProducto(req, res, next) {
  try {
    const { codigo } = req.params;

    const changes = req.body;
    const productoUpdated = await service.actualizar(codigo, changes)
      return res.json({
        message: 'Project updated',
        data: productoUpdated
    })
      
    } catch (error) {
      next(error)
    }
     
  

  }
  // Actualizar estado
  export async function UpdateEstado(req, res, next){
    try {
      const { codigo } = req.params;
      let data = req.body;

    if (JSON.stringify(data) == '{}') {
      data = { estado: 'I' };
    }
    console.log(data)
    const productoUpdateEstado = await service.actualizarEstado(codigo, data)
      return res.json({
        message: 'Contrato actualizado',
        data: productoUpdateEstado
      })

      
    } catch (error) {
      next(error)
    }
  }