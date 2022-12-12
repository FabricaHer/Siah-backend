import DocumentoHerServices from '../services/documentoher.service';

const services = new DocumentoHerServices();
//Buscar por codigo de Cliente


export async function getOneDocumento(req, res, next) {
    try {
    const { documento_id } = req.params;
    console.log(documento_id)
    const contrato = await services.buscarUno(documento_id);
    res.json(contrato);
  } catch (error) {
    next(error);
  }
}

// Todos los clientes

export async function getDocumento(req, res, next) {
  try {
      console.log('1')
    const clientes = await services.buscar();
    res.json(clientes);
  } catch (error) {
    next(error);
  }
}