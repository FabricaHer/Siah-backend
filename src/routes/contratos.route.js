import { Router } from 'express';
import { validatorHandle } from '../middleware/validator.handler';
import {
  getQuerySchema,
  CreateContratoSchema,
  getClientContratoSchema,
  getContratoSchema,
  UpdateContratoSchema
} from '../schemas/contratos.schema';
import {
  createContrato,
  deleteContrato,
  getContratoClient,
  getMaxContrato,
  getOneContratos,
  getTipoContratos,
  updateContrato,
  UpdateDate,

} from '../controllers/contratos.controllers';
const router = Router();

router.get('/', validatorHandle(getQuerySchema, 'query'), getTipoContratos);
router.get('/MAX', getMaxContrato);
router.get(
  '/:codigo',
  validatorHandle(getContratoSchema, 'params'),
  getOneContratos
);
router.get('/cliente/:codigoCliente', validatorHandle(getClientContratoSchema, 'params'), getContratoClient);
router.post('/', validatorHandle(CreateContratoSchema, 'body'), createContrato);
router.put('/:codigo',
validatorHandle(getContratoSchema,'params') ,
validatorHandle(UpdateContratoSchema, 'body'), updateContrato);
router.patch('/:codigo', UpdateDate);
router.delete('/:codigo', validatorHandle(getContratoSchema, 'params'), deleteContrato);

export default router;
