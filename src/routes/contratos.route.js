import { Router } from 'express';
import { validatorHandle } from '../middleware/validator.handler';
import {
  getQuerySchema,
  CreateContratoSchema,
  getContratoSchema,
  UpdateContratoSchema,
} from '../schemas/contratos.schema';
import {
  createContrato,
  getMaxContrato,
  getOneContratos,
  getTipoContratos,
  updateProject,
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
router.put('/:codigo',
validatorHandle(getContratoSchema,'params') ,
validatorHandle(UpdateContratoSchema, 'body'), updateProject);

export default router;
