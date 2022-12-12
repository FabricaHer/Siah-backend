
import ClientesServices from '../services/MySQL/clientes.service';

const services = new ClientesServices();
//Buscar por codigo de Cliente


export async function getOneClientes(req, res, next) {
    try {
    const { codigo } = req.params;
    console.log(codigo)
    const contrato = await services.buscarUno(codigo);
    res.json(contrato);
  } catch (error) {
    next(error);
  }
}

// Todos los clientes

export async function getClientes(req, res, next) {
  try {

    let {nombre, clasificacion, limite} = req.query;
    console.log(limite)
    if (!limite) {
     limite = 20 ;
    }
    console.log(limite)
    const clientes = await services.buscar(nombre, clasificacion, limite);
    res.json(clientes);
  } catch (error) {
    next(error);
  }
}


//Cambio de estado

export async function patchClientes(req, res, next) {
    try {
      const { codigo } = req.params;
    
      const changes = req.body;
      const contratoUpdated = await services.actualizarEstado(codigo, changes)
        return res.json({
          message: 'Project updated',
          data: contratoUpdated
      })
        
      } catch (error) {
        next(error)
}
}
// Eliminar cliente

export async function deleteClientes(req, res, next) {
    try {
      const { codigo } = req.params;
      const deleteRow = await services.eliminarCliente(codigo);
      return res.json({
        message: 'Cliente eliminado',
        data: deleteRow
      });

      
    } catch (error) {
      next(error)
    }
  }
