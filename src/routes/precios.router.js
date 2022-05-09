import { Router } from 'express';
import { validatorHandle } from '../middleware/validator.handler';
import {createPreciosSchema} from '../schemas/precios.schema';
import {getPreciosContrato,crearPrecio} from '../controllers/precios.controllers';
const router = Router();

router.get('/contrato/:codigo',getPreciosContrato)
//router.get('/:codigo',getPrecioId)
router.post('/',
validatorHandle(createPreciosSchema,'body')
,crearPrecio)


//router.put(':codigo')
//router.delete('/:delete')


export default router;
