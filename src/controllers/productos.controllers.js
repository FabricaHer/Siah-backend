import ProductosServices from '../services/producto.service'



export async function getProductos(req, res, next) {
    try {
        const codigo = req.params
        const descripcion = req.params
        const producto = await ProductosServices.buscar(codigo,descripcion);
      res.json(producto);
      
      
    } catch (error) {
      next(error);
    }
}