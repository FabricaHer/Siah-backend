import { Router } from 'express';
import { validatorHandle } from '../middleware/validator.handler';
import {createPreciosSchema} from '../schemas/precios.schema';
import {getPreciosProducto,crearPrecio} from '../controllers/precios.controllers';
//import { getProductos, getPrecioId } from '..DPINV/controllers/productos.controllers/precios.controllers';
const router = Router();

router.get('/',getPreciosProducto)
//router.get('/:codigo',getPrecioId)
router.post('/',
validatorHandle(createPreciosSchema,'body')
,crearPrecio)

//router.get('/:codigo', getPrecioId)


//router.put(':codigo')
//router.delete('/:delete')


export default router;
