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

//Buscar número máximo de Contrato

export async function getMaxContrato(req, res, next) {
  try {
    // const contratos = await Contratos.max('id', {where : {'vsr_id': 342 }})
    const max = await services.getMaxId();

    res.json(max);
  } catch (error) {
    next(error);
  }
  // console.log(maxID);
}

//Buscar contratos por lista C

export async function getTipoContratos(req, res, next) {
  try {
    let data = req.query;

    if (JSON.stringify(data) == '{}') {
      data = { lista: 'C' };
    }
    const contratos = await services.buscar(data);
    res.json(contratos);
  } catch (error) {
    next(error);
  }
}

//Crear nuevo Contrato

export async function createContrato(req, res,next) {
  try {
 
       const body = req.body;
       
    const newContrato = await services.crear(body)
    res.json(newContrato)
  } catch (error) {

    next(error)
  }
    }

//Actualizar Contrato

export async function updateProject(req, res, next) {
  try {
    const { codigo } = req.params;
  
    const changes = req.body;
    const contratoUpdated = await services.actualizar(codigo, changes)
      return res.json({
        message: 'Project updated',
        data: contratoUpdated
    })
      
    } catch (error) {
      next(error)
    }
     
  

  }
