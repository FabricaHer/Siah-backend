import ConstratoServices from '../services/contrato.service';

const services = new ConstratoServices();
//Buscar por número de Contrato

export async function getOneContratos(req, res, next) {
  const { codigo } = req.params;
  try {
    const contrato = await services.buscarUno(codigo);
    res.json(contrato);
  } catch (error) {
    next(error);
  }
}

//Buscar por codigo de cliente

export async function getContratoCliente(req, res, next) {
  let { codigoCliente, limite } = req.query;
  if (!limite) {
    limite = 20;
  }

  try {
    const contrato = await services.buscarCliente(codigoCliente, limite);
    res.json(contrato);
  } catch (error) {
    next(error);
  }
}

//Buscar número máximo de Contrato

export async function getMaxContrato(req, res, next) {
  try {
    const max = await services.getMaxContrato();

    res.json(max);
  } catch (error) {
    next(error);
  }
  // console.log(maxID);
}

//Buscar contratos por lista C

export async function getTipoContratos(req, res, next) {
  try {
    // let {fechaInicio,fechaFinal,order} = req.query;
    const data = req.query
   // fechaInicio
  //fechaFinal
  //order    
    const contratos = await services.buscar(data);
    res.json(contratos);
  } catch (error) {
    next(error);
  }
}

//Crear nuevo Contrato

export async function createContrato(req, res, next) {
  try {
 
    let { descripcion,comentario,codigoCliente,moneda,unido,descuento,fechaInicio,fechaFinal,lista,tipoDocumento } = req.body;
       
    const newContrato = await services.crear(descripcion,comentario,codigoCliente,moneda,unido,descuento,fechaInicio,fechaFinal,lista,tipoDocumento)
    res.json(newContrato)
  } catch (error) {
    next(error);
  }
}

//Actualizar Contrato

export async function updateContrato(req, res, next) {
  try {
    const { codigo } = req.params;

    const changes = req.body;
    const contratoUpdated = await services.actualizar(codigo, changes);
    return res.json({
      message: 'Project updated',
      data: contratoUpdated,
    });
  } catch (error) {
    next(error);
  }
}
// Actualizar fecha
export async function UpdateDate(req, res, next) {
  try {
    const { codigo } = req.params;
    let data = req.body;
    console.log(data);
    const contratoUpdateDate = await services.actualizarFecha(codigo, data);
    return res.json({
      message: 'Contrato actualizado',
      data: contratoUpdateDate,
    });
  } catch (error) {
    next(error);
  }
}

// Eliminar contrato

export async function deleteContrato(req, res, next) {
  try {
    const { codigo } = req.params;
    const deleteRow = await services.eliminarContrato(codigo);
    return res.json({
      message: 'Contrato eliminado',
      data: deleteRow,
    });
  } catch (error) {
    next(error);
  }
}
export async function getPrecios(req, res, next) {
  try {
    const { codigo } = req.params;
    const { moneda } = req.query;
    const lista = await services.BuscarPrecios(codigo, moneda.toUpperCase());

    res.json(lista);
  } catch (error) {
    console.log('error');
    next(error);
  }
}
// Actualizar precios
export async function updatePrecios(req, res, next) {
  try {
    const { contrato, codigo } = req.params;
    const body = req.body;
    console.log(contrato, codigo);
    const precioUpdate = await services.actualizarPrecios(
      contrato,
      codigo,
      body
    );
    return res.json({
      message: 'Precio actualizado',
      data: precioUpdate,
    });
  } catch (error) {
    next(error);
  }
}
