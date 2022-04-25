import { Contratos } from '../models/contratos.models';
import {Op, Sequelize} from 'sequelize';
import { getMaxID, setMaxID } from '../services/maxID';

//Buscar por número de Contrato

export async function getOneContratos(req, res) {


    const { CON_CODIGO } = req.params;
  
    try {
      console.log(CON_CODIGO);
      const contratos = await Contratos.findOne({
        where: {
          CON_CODIGO,
        },
      });
      res.json(contratos);
    } catch (error) {
      throw new Error('Contrato not found');
    }
    

  }

  // const { CON_CODIGO } = req.params;



//Buscar número máximo de Contrato

export async function getMaxContrato(req, res) {
   
try {
  // const contratos = await Contratos.max('id', {where : {'vsr_id': 342 }})
  const max = await Contratos.max('CON_CODIGO');
  res.json(max);
  setMaxID(max);
} catch (error) {
  throw new Error('Contrato not found');
}
  // console.log(maxID);
}

//Buscar contratos por lista C



export async function getTipoContratos(req, res) {
  const { lista,tipodoc } = req.query;
  const CON_LISTA = lista || 'C';
  const CON_TIPDOC = tipodoc || 'FAV';
  console.log(lista);
  const contratos = await Contratos.findAll({
    logging: console.log,
    where: {
        CON_LISTA, CON_TIPDOC
    },
  });
  res.json(contratos);
}

//Crear nuevo Contrato

export async function createContrato(req, res) {
  
  
  try {
    const max = await Contratos.max('CON_CODIGO');
    setMaxID(max);
    const maxCOUNT = getMaxID();
    const {
      descri,
      coment,
      codcli,
      codmon,
      descu,
      fini,
      ffinco,
      lista,
      tipdoc,
    } = req.body;

    let newContrato = await Contratos.create({
      CON_CODIGO: maxCOUNT,
      CON_DESCRI: descri,
      CON_COMENT: coment,
      CON_CODCLI: codcli,
      CON_CODMON: codmon,
      CON_UNIDO: 'S',
      CON_DESCU: descu,
      CON_FINI: fini,
      CON_FFINCO: ffinco,
      CON_LISTA: lista,
      CON_TIPDOC: tipdoc,
    });
    if (newContrato) {
      res.json({
        message: 'Project created',
        data: Contratos,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Something goes wrong',
      data: {},
    });
  }
}

