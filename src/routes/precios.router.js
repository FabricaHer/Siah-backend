import { Router } from 'express';
//import { validatorHandle } from '../middleware/validator.handler';
//import {} from '../schemas/contratos.schema';
import {getPreciosContrato,crearPrecio} from '../controllers/precios.controllers';
const router = Router();

router.get('/contrato/:codigo',getPreciosContrato)
//router.get('/:codigo',getPrecioId)
router.post('/',crearPrecio)


//router.put(':codigo')
//router.delete('/:delete')


export default router;
