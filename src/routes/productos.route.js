import { Router } from 'express';
import { getProductos } from '../controllers/productos.controllers';


const router = Router();
router.get('/:codigo', getProductos);

export default router;
