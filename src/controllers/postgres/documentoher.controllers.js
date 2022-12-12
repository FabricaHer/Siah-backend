import DocumentoHerServices from '../../services/postgres/documentoher.service';

const services = new DocumentoHerServices();
//Buscar por codigo de Cliente


export async function getAllDocumentos(req, res, next) {
    try {
    const { documento_id } = req.params;
    console.log(documento_id)
    const contrato = await services.buscarTodos(documento_id);
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

export async function getAllDocuments(req, res, next) {
  try {
      console.log('1')
    const clientes = await services.todos();
    res.json(clientes);
  } catch (error) {
    next(error);
  }
}
