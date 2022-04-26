import { Router } from 'express';
import { validatorHandle } from '../middleware/validator.handler';
import {
  getQuerySchema,
  CreateContratoSchema,
  getContratoSchema,
} from '../schemas/contratos.schema';
import {
  createContrato,
  getMaxContrato,
  getOneContratos,
  getTipoContratos,
} from '../controllers/contratos.controllers';
const router = Router();

router.get('/', validatorHandle(getQuerySchema, 'query'), getTipoContratos);
router.get('/MAX', getMaxContrato);
router.get(
  '/:codigo',
  validatorHandle(getContratoSchema, 'params'),
  getOneContratos
);
router.post('/', validatorHandle(CreateContratoSchema, 'body'), createContrato);

export default router;
