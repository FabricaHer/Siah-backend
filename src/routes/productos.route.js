import { Router } from 'express';
import { getProductos,UpdateEstado,updateProducto } from '../controllers/productos.controllers';
import { validatorHandle } from '../middleware/validator.handler';
import { getProductoSchema, UpdateProductoSchema } from '../schemas/productos.schema';


const router = Router();
router.get('/:codigo', validatorHandle(getProductoSchema, 'params'), getProductos);
router.put('/:codigo',
validatorHandle(getProductoSchema,'params'),
validatorHandle(UpdateProductoSchema, 'body'), updateProducto);
router.patch('/:codigo', validatorHandle(getProductoSchema, 'params'), UpdateEstado);
export default router;
