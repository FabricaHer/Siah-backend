import { Router } from 'express';
import { validatorHandle } from '../middleware/validator.handler';
import { getOneClientes, patchClientes, deleteClientes, getClientes } from '../controllers/clientes.controllers';
import { getClientesSchema, updateEstadoSchema } from '../schemas/clientes.schemas';
const router = Router();

router.get('/:codigo', validatorHandle(getClientesSchema, 'params'), getOneClientes);
router.get('/', getClientes);
router.patch('/:codigo', validatorHandle(getClientesSchema, 'params'),
validatorHandle(updateEstadoSchema, 'body'),patchClientes);
router.delete('/:codigo', validatorHandle(getClientesSchema, 'params'), deleteClientes);
export default router;
