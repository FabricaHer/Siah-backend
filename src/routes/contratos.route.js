import { Router } from 'express';
import { validatorHandle } from '../middleware/validator.handler';
import {
  getQuerySchema,
  CreateContratoSchema,
  getClientContratoSchema,
  getContratoSchema,
  UpdateContratoSchema,
  getPreciosSchema,
  updatePreciosSchema,
} from '../schemas/contratos.schema';
import {
  createContrato,
  deleteContrato,
  getContratoCliente,
  getMaxContrato,
  getOneContratos,
  getContratos,
  updateContrato,
  UpdateDate,
  getPrecios,
  updatePrecios,
} from '../controllers/contratos.controllers';
const router = Router();

// modificar el parametro codigo  por contrato
// eliminar la ruta max 
router.get('/', validatorHandle(getQuerySchema, 'query'), getContratos);
// no usada
router.get('/MAX', getMaxContrato);


router.get(
  '/:contrato/precios',
  validatorHandle(getPreciosSchema, 'query'),
  getPrecios
);
router.get(
  '/:codigo',
  validatorHandle(getContratoSchema, 'params'),
  getOneContratos
);
router.get(
  '/cliente/:codigoCliente',
  validatorHandle(getClientContratoSchema, 'params'),
  getContratoCliente
);
router.post('/', validatorHandle(CreateContratoSchema, 'body'), createContrato);
router.put(
  '/:contrato/precios/:codigo',
  validatorHandle(updatePreciosSchema, 'query'),
  updatePrecios
);
router.put(
  '/:codigo',
  validatorHandle(getContratoSchema, 'params'),
  validatorHandle(UpdateContratoSchema, 'body'),
  updateContrato
);
router.patch('/:codigo', UpdateDate);
router.delete(
  '/:codigo',
  validatorHandle(getContratoSchema, 'params'),
  deleteContrato
);

export default router;
