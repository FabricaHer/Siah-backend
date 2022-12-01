import { Router } from 'express';
import { getDocumento, getOneDocumento, } from '../controllers/documentoher.controllers';
const router = Router();

router.get('/porid/:documento_id', getOneDocumento);
router.get('/todo/', getDocumento);
export default router;